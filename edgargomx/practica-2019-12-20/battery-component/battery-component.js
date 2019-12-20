import { html, LitElement } from 'lit-element';
import style from './battery-component-styles.js';

class BatteryComponent extends LitElement {
  static get properties() {
    return {
      porcentage: {type: Number},
      state: { type: String },
      batteryBars: {type: String}
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.porcentage = 15;
    this.state = 'low';
    this.batteryBars = '';
  }

  updated(){
    if (this.connected = true){
      this.charging();
    }else {
      this.discharge();
    }
  }

  render() {
    return html`
        <div class="battery-container">
          ${this.porcentage}
          ${ (this.state === 'high') ? [html`<div class="battery-high"></div>`,html`<div class="battery-high">`, html`</div><div class="battery-high"></div>`]: '' }
          ${  (this.state === 'medium') ? [html`<div class="battery-medium"></div>`,html`<div class="battery-medium">`]: '' }
          ${  (this.state === 'low') ? [html`<div class="battery-low"></div>`]: '' }
        </div>
      `;
    }

  charging(){
    const charge = setInterval(() => {
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
      }else{
        clearInterval(charge);
      }
    },1000);
  }

  disconected(){
    const discharge = setInterval(() => {
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
      }else{
        clearInterval(discharge.charging());
      }
    },1000);
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
