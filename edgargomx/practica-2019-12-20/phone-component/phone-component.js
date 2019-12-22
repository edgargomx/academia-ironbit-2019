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
        <div class="container border-gray">
          <div class="nav">
            <div class="item-nav">
              ${ new Date().toDateString() }
              </div>
            <battery-component class="itme-nav" .connected="${ false}"></battery-component>
          </div>
          <div class="container">
            <player-component src="../Odisseo-Dias-de-Fuego.mp3" .status="${ false }"></player-component>
          </div>
          <div class="footer">
            <button  >Regresar</button>
            <button  >Inicio</button>
            <button  >cajon</button>
          </div>
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
