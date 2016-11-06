/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../app/spinner/my-spinner.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view_utils';
import * as import3 from '@angular/core/src/linker/view';
import * as import5 from '@angular/core/src/linker/element';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './my-spinner.component.css.shim';
export var Wrapper_MySpinner = (function () {
    function Wrapper_MySpinner() {
        this.changed = false;
        this.context = new import0.MySpinner();
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
    }
    Wrapper_MySpinner.prototype.check_counterValue = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this.changed = true;
            this.context.counterValue = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_MySpinner.prototype.check_bdgClass = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this.changed = true;
            this.context.bdgClass = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_MySpinner.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    Wrapper_MySpinner.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_MySpinner;
}());
var renderType_MySpinner_Host = null;
var _View_MySpinner_Host0 = (function (_super) {
    __extends(_View_MySpinner_Host0, _super);
    function _View_MySpinner_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MySpinner_Host0, renderType_MySpinner_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    _View_MySpinner_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.selectOrCreateRenderHostElement(this.renderer, 'my-spinner', import2.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import5.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_MySpinner0(this.viewUtils, this.injector(0), this._appEl_0);
        this._MySpinner_0_4 = new Wrapper_MySpinner();
        this._appEl_0.initComponent(this._MySpinner_0_4.context, [], compView_0);
        compView_0.create(this._MySpinner_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_MySpinner_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.MySpinner) && (0 === requestNodeIndex))) {
            return this._MySpinner_0_4.context;
        }
        return notFoundResult;
    };
    _View_MySpinner_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._MySpinner_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._MySpinner_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_MySpinner_Host0;
}(import3.AppView));
function viewFactory_MySpinner_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_MySpinner_Host === null)) {
        (renderType_MySpinner_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_MySpinner_Host0(viewUtils, parentInjector, declarationEl);
}
export var MySpinnerNgFactory = new import9.ComponentFactory('my-spinner', viewFactory_MySpinner_Host0, import0.MySpinner);
var styles_MySpinner = [import10.styles];
var renderType_MySpinner = null;
var _View_MySpinner0 = (function (_super) {
    __extends(_View_MySpinner0, _super);
    function _View_MySpinner0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MySpinner0, renderType_MySpinner, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_20 = import1.UNINITIALIZED;
        this._expr_21 = import1.UNINITIALIZED;
    }
    _View_MySpinner0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import2.createRenderElement(this.renderer, parentRenderNode, 'div', new import2.InlineArray4(4, 'class', 'btn-group pull-right votingWdt', 'role', 'toolbar'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n	', null);
        this._el_2 = import2.createRenderElement(this.renderer, this._el_0, 'button', new import2.InlineArray2(2, 'class', 'btn btn-default'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import2.createRenderElement(this.renderer, this._el_2, 'span', new import2.InlineArray2(2, 'class', 'glyphicon glyphicon-menu-left'), null);
        this._text_5 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n	', null);
        this._el_7 = import2.createRenderElement(this.renderer, this._el_0, 'button', new import2.InlineArray2(2, 'class', 'btn btn-default disabled'), null);
        this._text_8 = this.renderer.createText(this._el_7, '\n        ', null);
        this._el_9 = import2.createRenderElement(this.renderer, this._el_7, 'span', import2.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_7, '\n        ', null);
        this._el_11 = import2.createRenderElement(this.renderer, this._el_7, 'span', new import2.InlineArray2(2, 'class', 'badge'), null);
        this._text_12 = this.renderer.createText(this._el_11, '', null);
        this._text_13 = this.renderer.createText(this._el_7, '\n    ', null);
        this._text_14 = this.renderer.createText(this._el_0, '\n	', null);
        this._el_15 = import2.createRenderElement(this.renderer, this._el_0, 'button', new import2.InlineArray2(2, 'class', 'btn btn-default'), null);
        this._text_16 = this.renderer.createText(this._el_15, '\n        ', null);
        this._el_17 = import2.createRenderElement(this.renderer, this._el_15, 'span', new import2.InlineArray2(2, 'class', 'glyphicon glyphicon-menu-right'), null);
        this._text_18 = this.renderer.createText(this._el_15, '\n    ', null);
        this._text_19 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_0, 'swipeleft', this.eventHandler(this._handle_swipeleft_0_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_0, 'swiperight', this.eventHandler(this._handle_swiperight_0_1.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_0, 'swipedown', this.eventHandler(this._handle_swipedown_0_2.bind(this)));
        var disposable_3 = this.renderer.listen(this._el_0, 'swipeup', this.eventHandler(this._handle_swipeup_0_3.bind(this)));
        var disposable_4 = this.renderer.listen(this._el_2, 'click', this.eventHandler(this._handle_click_2_0.bind(this)));
        var disposable_5 = this.renderer.listen(this._el_15, 'click', this.eventHandler(this._handle_click_15_0.bind(this)));
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5
        ], []);
        return null;
    };
    _View_MySpinner0.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_20 = import2.interpolate(1, 'glyphicon ', this.context.bdgClass, '');
        if (import2.checkBinding(throwOnChange, this._expr_20, currVal_20)) {
            this.renderer.setElementProperty(this._el_9, 'className', currVal_20);
            this._expr_20 = currVal_20;
        }
        var currVal_21 = import2.interpolate(1, '', this.context.counterValue, '');
        if (import2.checkBinding(throwOnChange, this._expr_21, currVal_21)) {
            this.renderer.setText(this._text_12, currVal_21);
            this._expr_21 = currVal_21;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_MySpinner0.prototype._handle_swipeleft_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0_0 = (this.context.decrement() !== false);
        return (true && pd_0_0);
    };
    _View_MySpinner0.prototype._handle_swiperight_0_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0_0 = (this.context.increment() !== false);
        return (true && pd_0_0);
    };
    _View_MySpinner0.prototype._handle_swipedown_0_2 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0_0 = (this.context.decrement() !== false);
        return (true && pd_0_0);
    };
    _View_MySpinner0.prototype._handle_swipeup_0_3 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0_0 = (this.context.increment() !== false);
        return (true && pd_0_0);
    };
    _View_MySpinner0.prototype._handle_click_2_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_2_0 = (this.context.decrement() !== false);
        return (true && pd_2_0);
    };
    _View_MySpinner0.prototype._handle_click_15_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_15_0 = (this.context.increment() !== false);
        return (true && pd_15_0);
    };
    return _View_MySpinner0;
}(import3.AppView));
export function viewFactory_MySpinner0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_MySpinner === null)) {
        (renderType_MySpinner = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.Emulated, styles_MySpinner, {}));
    }
    return new _View_MySpinner0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=my-spinner.component.ngfactory.js.map