import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"
/**
 * `demo-furo-bool-icon`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroBoolIcon extends FBP(LitElement) {

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.name) || css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
       
    `
  }


  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <h2>Demo demo-furo-bool-icon</h2>
      <p>description</p>
      <furo-demo-snippet >
        <template>
          <furo-bool-icon ></furo-bool-icon>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-bool-icon', DemoFuroBoolIcon );
