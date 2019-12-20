import { html, LitElement } from 'lit-element';
import style from './phone-component-styles.js';
import '@catsys/battery-component/battery-component';
import '@catsys/player-component/player-component'

class PhoneComponent extends LitElement {
  static get properties() {
    return {
      hello: { type: String }
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.hello = 'Hello';
  }

  render() {
    return html`
        <div class="nav">
          <battery-component connected="false"></battery-component>
        </div>
        <div class="container">
          <player-component></player-component>
        </div>
        
        
      `;
    }

    charge(){
      this.shadowRoot.querySelector('battery-componet').connected = true;
    }

    discharge(){
      this.shadowRoot.querySelector('battery-componet').connected = false;
    }
}

window.customElements.define("phone-component", PhoneComponent);
