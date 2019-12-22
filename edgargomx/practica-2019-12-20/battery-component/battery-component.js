import { html, LitElement } from 'lit-element';
import style from './battery-component-styles.js';
import '@polymer/paper-toast/paper-toast.js';

class BatteryComponent extends LitElement {
  static get properties() {
    return {
      porcentage: {type: Number},
      state: { type: String },
      batteryBars: {type: String},
      connected: { type: Boolean}
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.porcentage = 50;
    this.state = 'medium';
    this.batteryBars = '';
    this.connected = false;
    this.chargue = null; 
    this.dischargue = null;
  }

 updated(_mapParameters){
    
    if (_mapParameters.has('connected')) {
      if (this.connected == true){ 
        clearInterval(this.dischargue);
        this.chargue = this.charging();
        this.launchToast('charging...')
      }else {
        clearInterval(this.chargue);
        this.dischargue = this.disconected();
        this.launchToast('discharging...')
      }
    }
  }

  render() {
    return html`
        <div class="battery-container">
          ${this.porcentage}
          ${ (this.state === 'high') ? [html`<div class="battery-high"></div>`,html`<div class="battery-high">`, html`</div><div class="battery-high"></div>`]: '' }
          ${  (this.state === 'medium') ? [html`<div class="battery-medium"></div>`,html`<div class="battery-medium">`]: '' }
          ${  (this.state === 'low') ? [html`<div class="battery-low"></div>`]: '' }
          <paper-toast id="toaster"></paper-toast>
        </div>
      `;
  }


  charging() {
    this.chargue = setInterval(() => {
      if (this.porcentage < 100) {
        this.porcentage = this.porcentage + 1;
        this.state = 'high';
        if(this.porcentage <= 60){
          this.state = 'medium';
        }
        if(this.porcentage <= 20){
          this.state = 'low';
        }
        this.launchEvent('charging');
      }else {
        clearInterval(this.chargue);
      }
      
    },1000);

    return this.chargue;
  }

  disconected(){
    this.dischargue = setInterval(() => {
      if (this.porcentage > 0) {
        this.porcentage = this.porcentage - 1;
        this.state = 'low';
        if(this.porcentage > 20){
          this.state = 'medium';
        }
        if(this.porcentage > 60){
          this.state = 'high';
        }
        this.launchEvent('disconnected');
      }else {
        clearInterval(this.dischargue);
      }
    },1000);

    return this.dischargue;
  }

  launchToast(text){
    const toaster = this.shadowRoot.querySelector('#toaster');
    toaster.text = text;
    toaster.open();
  }

  launchEvent(nameEvent){
    this.dispatchEvent(new CustomEvent(nameEvent, { 
      detail: {
        porcentage: this.porcentage,
        state: this.state
      } 
    }));
  }
}

window.customElements.define("battery-component", BatteryComponent);
