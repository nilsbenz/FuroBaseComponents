import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';
import '@furo/fbp/src/flow-repeat';
import '@furo/util/src/furo-navigation-pad';
import {RepeaterNode} from "@furo/data/lib/RepeaterNode.js"
import './lib/furo-data-context-menu-item';
import './lib/furo-data-context-submenu';

export class FuroDataContextMenuDisplay extends FBP(LitElement) {
  /**
   * `furo-data-context-menu-display`
   *  is the display element for furo-data-context-menu and submenus. Place this component as high as needed in your dom.
   *
   *  You should not interact with this component directly. Use [`furo-data-context-menu`](?t=FuroDataContextMenu) to show a context menu.
   *
   *  There is nothing more to do. The menu creates a transparent "backdrop" with absolut positions 0 0 0 0
   *
   * ```html
   *
   *  <furo-data-context-menu-display></furo-data-context-menu-display>
   *
   * ```
   *
   *
   * @summary todo shortdescription
   * @customElement
   * @demo demo-furo-data-context-menu Basic usage
   * @appliesMixin FBP
   */


  constructor(props) {
    super(props);
    this.borderDistance = 48;

    // for bindData
    this._repeatsChanged = () => {
      /**
       * add flag _noicon if none of the group (between dividers) has no icons
       */
      let noicon = true;
      let stage = [];
      this._children.repeats.forEach((item, i, items) => {
        /**
         * if next item has a leading separator push before, otherwise push after loop
         */
        let pushed = false;
        if(item.leading_divider._value && items[i+1] && items[i+1].leading_divider._value ){
          stage.push(item);
          pushed = true;
        }

        if (item.icon._value) {
          noicon = false;
        }
        if (item.leading_divider._value) {
          stage.forEach((i) => {
            i._noicon = noicon;
          });
          stage = [];
          noicon = true;
        }
        if(!pushed){
          stage.push(item);
        }

      });
      noicon = true;
      // do the last stage
      stage.forEach((item) => {
        if (item.icon._value) {
          noicon = false;
        }
        stage.forEach((i) => {
          i._noicon = noicon;
        });
      });

      this._FBPTriggerWire('--menuObject', this._children.repeats);
    };

  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * set this for condensed mode
       */
      condensed:{type:Boolean, reflect:true}
    };
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
    this._repeater = this.shadowRoot.getElementById('repeater');

    const menucontainer = this.shadowRoot.getElementById('menu');

    this.addEventListener('opensub-requested', (e) => {
      const submenu = document.createElement('furo-data-context-submenu');
      this.shadowRoot.appendChild(submenu);

      if(this.condensed){
        submenu.setAttribute("condensed","");
      }

      setTimeout(() => {
        submenu.init(e, this, e.byKeyboard);
      }, 10);
      // add submenu to event, so the requester can close it
      e.submenu = submenu;
    });

    this.parentNode.addEventListener('open-furo-data-menu-requested', (e) => {
      e.stopPropagation();
      this.menuObject = e.detail;
      this.condensed = this.menuObject.condensed;

      // if menuObject.menu is an RepeaterNode, a children field was passed in to the menu, otherwise a menuitem itself was passed in
      if(e.detail.menu instanceof RepeaterNode){
        this._children = this.menuObject.menu;
      }else{
        this._children =  this.menuObject.menu.children;
      }


      // listener is de registred in hideMenu()
      this._children.addEventListener('this-repeated-field-changed', this._repeatsChanged);
      this._repeatsChanged();


      this.setAttribute('backdrop', '');
      const initiator = e.detail.initiator;
      let side = 'right';
      let thisCR = this.getBoundingClientRect();


      let initiatorCR = initiator.getBoundingClientRect();

      menucontainer.style.removeProperty('maxHeight');
      menucontainer.style.removeProperty('bottom');
      menucontainer.style.removeProperty('height');
      menucontainer.style.removeProperty('left');
      menucontainer.style.removeProperty('right');


      // find the ideal position and direction
      const initiatorCoordinates = {
        left: { x: initiatorCR.left, y: (initiatorCR.top + initiatorCR.bottom) / 2 },
        right: { x: initiatorCR.right, y: (initiatorCR.top + initiatorCR.bottom) / 2 },
      };
      if (initiatorCoordinates.left.x > thisCR.width - initiatorCoordinates.right.x) {
        side = 'left';
        menucontainer.style.right = (thisCR.width - initiatorCoordinates.left.x) + 'px';
        menucontainer.style.top = initiatorCoordinates.left.y + 'px';
      } else {
        side = 'right';
        menucontainer.style.removeProperty('right');
        menucontainer.style.left = initiatorCoordinates.right.x + 'px';
        menucontainer.style.top = initiatorCoordinates.right.y + 'px';
      }


      // calculate container positions from bottom when the initator is in the under third of the screen
      let onUpperSide = true;
      if (initiatorCoordinates.right.y * 2.5 > thisCR.height) {
        // we are in the under half of the screen
        menucontainer.style.removeProperty('top');
        menucontainer.style.bottom = (thisCR.height - initiatorCoordinates.right.y) + 'px';
        onUpperSide = false;
      }

      this._start = true;
      this.requestUpdate();


      // delay fade in effect set height
      setTimeout(() => {
        const menucontainerCr = menucontainer.getBoundingClientRect();

        let maxHeight = thisCR.height - initiatorCoordinates.left.y - this.borderDistance;
        if (!onUpperSide) {
          maxHeight = initiatorCoordinates.left.y - this.borderDistance;
        }

        menucontainer.style.maxHeight = maxHeight + 'px';
        // max height of ctxmenu should  not go outside the screen
        if (menucontainerCr.height > maxHeight) {
          menucontainer.style.height = maxHeight + 'px';
        }

        this._show = true;
        this.requestUpdate();

        setTimeout(() => {
          menucontainer.focus();
          // mark first element if opened by keyboard
          if(e.byKeyboard){
            this._repeater.select(0);
          }
        }, 100);

      }, 10);


    });


    /**
     * Register hook on wire --nav to
     * listen to the navigation pad
     */
    this._FBPAddWireHook('--nav', (e) => {
      this.triggerNavigation(e);
    });

    /**
     * Register hook on wire --backdropClick to
     * remove the menu
     */
    this._FBPAddWireHook('--backdropClick', (e) => {
      this.hideMenu();
    });

    /**
     * Listen to item-selected to pass it back to furo-context-menu (callback)
     *
     */
    this.addEventListener('item-selected', (e) => {
      this.menuObject.selectCallback(e);
      this.hideMenu();
    });

  }


  hideMenu() {
    this.removeAttribute('backdrop');
    this._start = false;
    this._show = false;
    this.requestUpdate();

    // remove all submenus
    this.shadowRoot.querySelectorAll('furo-data-context-submenu').forEach((sub) => {
      sub.remove();
    });

    // unregister the event listener from open-furo-data-menu-requested
    this._children.removeEventListener('this-repeated-field-changed', this._repeatsChanged);

    this.menuObject.onClose();
  }


  /**
   * Interface for the furo navigation pad
   * @param key
   */
  triggerNavigation(key) {
    switch (key) {
      case 'Enter':
        this._repeater.triggerSelected(key);
        break;

      case 'ArrowDown':
        this._repeater.selectNextIndex();
        break;
      case 'ArrowUp':
        this._repeater.selectPreviousIndex();
        break;
      case 'PageDown':

        break;
      case 'PageUp':
        this._repeater.select(0);
        break;

      case 'End':
        this.focusLast();
        break;
      case 'Home':
        this._repeater.select(0);
        break;

      case 'ArrowLeft':
// closes subnav
        this._repeater.triggerSelected(key);
        break;

      case 'ArrowRight':
// opens subnav
        this._repeater.triggerSelected(key);
        break;

      case'Escape':
// closes the menu
        this.hideMenu();
        break;
    }
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('FuroDataMenuDisplay') || css`

      :host {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 10;

      }

      :host([backdrop]) {
        display: block;
      }

      #menu {
        outline: none;
        position: absolute;
        display: none;
        transition: opacity .03s linear, transform .12s cubic-bezier(0, 0, .2, 1), -webkit-transform .12s cubic-bezier(0, 0, .2, 1);
        opacity: 0;
        background-color: var(--surface);
        overflow-y: auto;
        box-sizing: border-box;
        border-radius: 4px;
        padding: 6px 0;
        box-shadow: 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12);
      }

      #menu[start] {
        display: block;
        opacity: 0;
      }

      #menu[show] {
        opacity: 1;
        display: block;
      }

      .clickcatcher {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }

      /*  only focus is needed, because the menu closes on select */
      furo-data-context-menu-item:hover, furo-data-context-menu-item[focused] {
        background-color: rgba(var(--primary-rgb), var(--state-hover));
        color: var(--primary);
      }

      .separator {
        height: 8px;
        box-sizing: border-box;
        border-bottom: 1px solid var(--separator);
        margin-bottom: 8px;
      }

      :host([condensed]) furo-data-context-menu-item{
        padding: 0;
      }
    `;
  }


  /**
   * The host is the backdrop
   *
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
    
    <div class="clickcatcher" @-click="--backdropClick"></div>
    <div id="menu" tabindex="0" ?start="${this._start}" ?show="${this._show}" @-mousefocus="--mousefocus"  >
    <!-- the wires --itemSelected and --itemDeSelected means focus, they come from flow-repeat -->
       <template id="repeater" is="flow-repeat" ƒ-inject-items="--menuObject" ƒ-select="--mousefocus">    
      <div>       
          <furo-data-context-menu-item ƒ-index="--index" ƒ-select="--trigger" ƒ-set-focused="--itemSelected"  ƒ-unset-focused="--itemDeSelected"          
          ƒ-bind-data="--itemInjected(*.item)"></furo-data-context-menu-item>
      </div>              
      </template>
      <furo-navigation-pad @-navigated="--nav"></furo-navigation-pad>
    </div>
      
      
      
    `;
  }
}

window.customElements.define('furo-data-context-menu-display', FuroDataContextMenuDisplay);
