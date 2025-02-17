import { Env } from '@furo/framework/src/furo.js';
import { DisplayInt32 } from './display-int32.js';

/**
 * `display-furo-integerproperty`
 * The display-furo-integerproperty component displays a FieldNode of type `furo.Integerproperty` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 * - attribute: tabular-form (this attribute is set, if the component is inside of a furo-data-table. This attribute is only needed, if the styling inside of a table is different)
 *
 *
 * @summary
 * @customElement
 * @demo demo-display-furo-integerproperty Basic Usage
 */
export class DisplayFuroIntegerproperty extends DisplayInt32 {
  _formatDisplay() {
    const displayValue = new Intl.NumberFormat(Env.locale, {}).format(this._field.data);
    if (displayValue !== 'NaN') {
      this._displayValue = displayValue;
      this.requestUpdate();
    }
  }
}

window.customElements.define('display-furo-integerproperty', DisplayFuroIntegerproperty);
