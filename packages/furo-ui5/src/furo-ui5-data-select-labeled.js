import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp/src/fbp.js';
import { Ui5LabelDataBinding } from './lib/Ui5LabelDataBinding.js';

import './furo-ui5-form-field-container.js';
import './furo-ui5-data-select.js';

/**
 * `furo-ui5-data-select-labeled`
 * The furo-ui5-data-select-labeled is a composition to easily use a complete data select with label according
 * to the design specification of SAP Fiori Design System.
 *
 * @summary labeled select
 * @customElement
 * @demo demo-furo-ui5-data-select-labeled Basic Usage
 * @appliesMixin FBP
 */
class FuroUi5DataSelectLabeled extends FBP(LitElement) {
  /**
   * Fired when the input value changed.
   * the event detail is the value of the select
   * @event value-changed
   */

  constructor(props) {
    super(props);
    this.label = '';
    this.valueState = 'None';
    this.idFieldPath = '';
    this.valueFieldPath = '';
    this.displayFieldPath = '';
  }

  /**
   * Focuses the underlying ui5 input element
   * @param e
   */
  focus(e) {
    this._FBPTriggerWire('--focus', e);
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();
  }

  static get properties() {
    return {
      /**
       * the label for the data-number-input
       */
      label: { type: String },
      /**
       * Defines the value state of the furo-ui5-data-select.
       *
       * Available options are:
       * None
       * Error
       * Warning
       * Success
       * Information
       */
      valueState: { type: String, attribute: 'value-state' },
      /**
       * A Boolean attribute which, if present, means this field is required and marked with *.
       */
      required: {
        type: Boolean,
      },
      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user and
       * appears in disabled state.
       */
      disabled: {
        type: Boolean,
      },
      /**
       * A Boolean attribute which, if present, means this field is readonly.
       */
      readonly: {
        type: Boolean,
      },
      /**
       * Defines the field path that is used from the injected RepeaterNode to identify the option items.
       * Point-separated path to the field
       * E.g. data.partner.ulid
       */
      idFieldPath: {
        type: String,
        attribute: 'id-field-path',
      },
      /**
       * Defines the field path that is used from the injected RepeaterNode to display the option items.
       * Point-separated path to the field
       * E.g. data.partner.display_name
       */
      displayFieldPath: {
        type: String,
        attribute: 'display-field-path',
      },
      /**
       * Defines the field path that is used to update the bound component if the user has selected an option.
       * Point-separated path to the field
       * Must be set if a data binding is specified.
       */
      valueFieldPath: {
        type: String,
        attribute: 'value-field-path',
      },
    };
  }

  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroUi5DataSelectLabeled') ||
      css`
        :host {
          display: block;
        }
        :host([hidden]) {
          display: none;
        }
      `
    );
  }

  /**
   * Orchestrates the data field connection to the inside
   * @param fieldNode
   */
  bindData(fieldNode) {
    Ui5LabelDataBinding.bindData(this, fieldNode);
  }

  /**
   * Binds a repeaterNode to the furo-ui5-data-select component
   * @param repeaterNode
   */
  bindOptions(repeaterNode) {
    this._FBPTriggerWire('--options', repeaterNode);
  }

  /**
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-ui5-form-field-container>
        <ui5-label label slot="label" for="Input" show-colon ?required=${this.required}
          >${this.label}</ui5-label
        >
        <furo-ui5-data-select
          content
          id="Input"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          value-state="${this.valueState}"
          id-field-path=${this.idFieldPath}
          display-field-path=${this.displayFieldPath}
          value-field-path=${this.valueFieldPath}
          ƒ-bind-data="--data"
          ƒ-bind-options="--options"
          ƒ-focus="--focus"
        >
          <slot slot="valueStateMessage" name="valueStateMessage"></slot>
        </furo-ui5-data-select>
      </furo-ui5-form-field-container>
    `;
  }
}

window.customElements.define('furo-ui5-data-select-labeled', FuroUi5DataSelectLabeled);
