import {FBP} from "@furo/fbp";
import {LitElement, html, css} from 'lit-element';
import {NodeEvent} from "@furo/data/lib/EventTreeNode";

/**
 * BasePanel to extend
 *
 * @customElement
 * @appliesMixin FBP
 */
export class BasePanel extends FBP(LitElement) {

  constructor() {
    super();
    /**
     * Callback function to interact with close requests
     * Return a true if closing is allowed or false if not
     *
     * @return {boolean}
     */
    this.onCloseRequest = (e) => {
      return true
    };

    /**
     * Attach the close-requested listener to the nav node. So you can trigger a close-requested from another location like tab-bar,...
     */
    this._FBPAddWireHook("--navNode", (fieldNode) => {
      this.treeNode = fieldNode;
      fieldNode.addEventListener("close-requested", (e) => {
        if (this.onCloseRequest(e)) {
          this.closePanel();
        }
      });
    });


    /**
     * closes the panel directly on internal events, stops the propagation to make it possible to have nested panels
     */
    this.addEventListener("close-immediately-request", (e) => {
      e.stopPropagation();
      this.closePanel();
    });

    /**
     * Register hook on wire --panelCloser to
     * close the panel with a wire
     */
    this._FBPAddWireHook("--panelCloser", (e) => {
      this.closePanel();
    });

  }

  /**
   * Close the panel
   */
  closePanel() {
    if (this.treeNode) {
      this.removePanel();
      this.treeNode.dispatchNodeEvent(new NodeEvent('panel-closed', this, false));
    }
  }
}
