/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../../app/subapps/2048/puzzle-2048.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../../../app/subapps/2048/services/puzzle-keyboard.service';
import * as import6 from '../../../../app/subapps/2048/services/puzzle-2048.service';
import * as import7 from '../../../../app/subapps/2048/services/game-manager.service';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/change_detection/change_detection';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from './puzzle-2048.component.css.shim';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import14 from '../../../../app/subapps/2048/tiles.component';
import * as import15 from './tiles.component.ngfactory';
import * as import16 from '../../../../app/spinner/my-spinner.component';
import * as import17 from '../../spinner/my-spinner.component.ngfactory';
import * as import18 from '@angular/core/src/linker/template_ref';
import * as import19 from '@angular/common/src/directives/ng_if';
export var Wrapper_Puzzle2048Component = (function () {
    function Wrapper_Puzzle2048Component(p0, p1) {
        this._changed = false;
        this.context = new import0.Puzzle2048Component(p0, p1);
    }
    Wrapper_Puzzle2048Component.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_Puzzle2048Component.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
    };
    Wrapper_Puzzle2048Component.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_Puzzle2048Component.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_Puzzle2048Component.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_Puzzle2048Component.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_Puzzle2048Component;
}());
var renderType_Puzzle2048Component_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_Puzzle2048Component_Host0 = (function (_super) {
    __extends(View_Puzzle2048Component_Host0, _super);
    function View_Puzzle2048Component_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_Puzzle2048Component_Host0, renderType_Puzzle2048Component_Host, import8.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways);
    }
    View_Puzzle2048Component_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'my-puzzle-2048', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_Puzzle2048Component0(this.viewUtils, this, 0, this._el_0);
        this._PuzzleKeyboardService_0_3 = new import5.PuzzleKeyboardService();
        this._Puzzle2048Service_0_4 = new import6.Puzzle2048Service(this._PuzzleKeyboardService_0_3);
        this._GameService_0_5 = new import7.GameService(this._Puzzle2048Service_0_4);
        this._Puzzle2048Component_0_6 = new Wrapper_Puzzle2048Component(this._GameService_0_5, this.renderer);
        this.compView_0.create(this._Puzzle2048Component_0_6.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import10.ComponentRef_(0, this, this._el_0, this._Puzzle2048Component_0_6.context);
    };
    View_Puzzle2048Component_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import5.PuzzleKeyboardService) && (0 === requestNodeIndex))) {
            return this._PuzzleKeyboardService_0_3;
        }
        if (((token === import6.Puzzle2048Service) && (0 === requestNodeIndex))) {
            return this._Puzzle2048Service_0_4;
        }
        if (((token === import7.GameService) && (0 === requestNodeIndex))) {
            return this._GameService_0_5;
        }
        if (((token === import0.Puzzle2048Component) && (0 === requestNodeIndex))) {
            return this._Puzzle2048Component_0_6.context;
        }
        return notFoundResult;
    };
    View_Puzzle2048Component_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Puzzle2048Component_0_6.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_Puzzle2048Component_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._Puzzle2048Component_0_6.ngOnDestroy();
    };
    View_Puzzle2048Component_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_Puzzle2048Component_Host0;
}(import1.AppView));
export var Puzzle2048ComponentNgFactory = new import10.ComponentFactory('my-puzzle-2048', View_Puzzle2048Component_Host0, import0.Puzzle2048Component);
var styles_Puzzle2048Component = [import11.styles];
var renderType_Puzzle2048Component = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_Puzzle2048Component, {});
export var View_Puzzle2048Component0 = (function (_super) {
    __extends(View_Puzzle2048Component0, _super);
    function View_Puzzle2048Component0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_Puzzle2048Component0, renderType_Puzzle2048Component, import8.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways);
        this._expr_76 = import9.UNINITIALIZED;
        this._expr_77 = import9.UNINITIALIZED;
    }
    View_Puzzle2048Component0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'container'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'table', new import3.InlineArray2(2, 'style', 'width: 100%;'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'tbody', import3.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_4, '\n        ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, '\n            ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'td', new import3.InlineArray2(2, 'colspan', '2'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n                ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'div', new import3.InlineArray2(2, 'class', 'container'), null);
        this._text_11 = this.renderer.createText(this._el_10, '\n                    ', null);
        this._anchor_12 = this.renderer.createTemplateAnchor(this._el_10, null);
        this._vc_12 = new import12.ViewContainer(12, 10, this, this._anchor_12);
        this._TemplateRef_12_5 = new import18.TemplateRef_(this, 12, this._anchor_12);
        this._NgIf_12_6 = new import13.Wrapper_NgIf(this._vc_12.vcRef, this._TemplateRef_12_5);
        this._text_13 = this.renderer.createText(this._el_10, '\n                    ', null);
        this._anchor_14 = this.renderer.createTemplateAnchor(this._el_10, null);
        this._vc_14 = new import12.ViewContainer(14, 10, this, this._anchor_14);
        this._TemplateRef_14_5 = new import18.TemplateRef_(this, 14, this._anchor_14);
        this._NgIf_14_6 = new import13.Wrapper_NgIf(this._vc_14.vcRef, this._TemplateRef_14_5);
        this._text_15 = this.renderer.createText(this._el_10, '\n                    ', null);
        this._anchor_16 = this.renderer.createTemplateAnchor(this._el_10, null);
        this._vc_16 = new import12.ViewContainer(16, 10, this, this._anchor_16);
        this._TemplateRef_16_5 = new import18.TemplateRef_(this, 16, this._anchor_16);
        this._NgIf_16_6 = new import13.Wrapper_NgIf(this._vc_16.vcRef, this._TemplateRef_16_5);
        this._text_17 = this.renderer.createText(this._el_10, '\n                ', null);
        this._text_18 = this.renderer.createText(this._el_8, '\n            ', null);
        this._text_19 = this.renderer.createText(this._el_6, '\n        ', null);
        this._text_20 = this.renderer.createText(this._el_4, '\n        ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_4, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_22 = this.renderer.createText(this._el_21, '\n            ', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_21, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_24 = this.renderer.createText(this._el_23, '\n                ', null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_23, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_26 = this.renderer.createText(this._el_25, '\n                    ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_25, 'div', new import3.InlineArray4(4, 'class', 'container-fluid', 'myTiles2048', ''), null);
        this.compView_27 = new import15.View_TilesComponent0(this.viewUtils, this, 27, this._el_27);
        this._TilesComponent_27_3 = new import15.Wrapper_TilesComponent(this.parentView.injectorGet(import7.GameService, this.parentIndex));
        this._text_28 = this.renderer.createText(null, '\n                    ', null);
        this.compView_27.create(this._TilesComponent_27_3.context);
        this._text_29 = this.renderer.createText(this._el_25, '\n                ', null);
        this._text_30 = this.renderer.createText(this._el_23, '\n            ', null);
        this._text_31 = this.renderer.createText(this._el_21, '\n            ', null);
        this._el_32 = import3.createRenderElement(this.renderer, this._el_21, 'td', new import3.InlineArray8(6, 'class', 'media-right ', 'rowspan', '2', 'style', 'width: 75px;'), null);
        this._text_33 = this.renderer.createText(this._el_32, '\n                ', null);
        this._el_34 = import3.createRenderElement(this.renderer, this._el_32, 'div', new import3.InlineArray4(4, 'class', 'btn-group-vertical center-block', 'role', 'group'), null);
        this._text_35 = this.renderer.createText(this._el_34, '\n                    ', null);
        this._el_36 = import3.createRenderElement(this.renderer, this._el_34, 'button', new import3.InlineArray4(4, 'class', 'btn btn-sm btn-default', 'style', 'display: inline;'), null);
        this._text_37 = this.renderer.createText(this._el_36, '\n                        ', null);
        this._el_38 = import3.createRenderElement(this.renderer, this._el_36, 'span', new import3.InlineArray2(2, 'class', 'glyphicon glyphicon-refresh'), null);
        this._text_39 = this.renderer.createText(this._el_36, '\n                    ', null);
        this._text_40 = this.renderer.createText(this._el_34, '\n                    ', null);
        this._el_41 = import3.createRenderElement(this.renderer, this._el_34, 'button', new import3.InlineArray2(2, 'class', 'btn btn-sm btn-primary disabled'), null);
        this._text_42 = this.renderer.createText(this._el_41, '\n                        ', null);
        this._el_43 = import3.createRenderElement(this.renderer, this._el_41, 'span', new import3.InlineArray2(2, 'class', 'label label-primary badge'), null);
        this._text_44 = this.renderer.createText(this._el_43, '', null);
        this._text_45 = this.renderer.createText(this._el_41, '\n                    ', null);
        this._text_46 = this.renderer.createText(this._el_34, '\n                    ', null);
        this._el_47 = import3.createRenderElement(this.renderer, this._el_34, 'button', new import3.InlineArray2(2, 'class', 'btn btn-sm btn-success disabled'), null);
        this._text_48 = this.renderer.createText(this._el_47, '\n                        ', null);
        this._el_49 = import3.createRenderElement(this.renderer, this._el_47, 'span', new import3.InlineArray2(2, 'class', 'label label-success badge'), null);
        this._text_50 = this.renderer.createText(this._el_49, '', null);
        this._text_51 = this.renderer.createText(this._el_47, '\n                    ', null);
        this._text_52 = this.renderer.createText(this._el_34, '\n                ', null);
        this._text_53 = this.renderer.createText(this._el_32, '\n                ', null);
        this._el_54 = import3.createRenderElement(this.renderer, this._el_32, 'div', new import3.InlineArray4(4, 'bdgClass', 'glyphicon-th', 'mySpinner', ''), null);
        this.compView_54 = new import17.View_MySpinner0(this.viewUtils, this, 54, this._el_54);
        this._MySpinner_54_3 = new import17.Wrapper_MySpinner();
        this.compView_54.create(this._MySpinner_54_3.context);
        this._text_55 = this.renderer.createText(this._el_32, '\n                ', null);
        this._text_56 = this.renderer.createText(this._el_32, '\n                ', null);
        this._text_57 = this.renderer.createText(this._el_32, '\n            ', null);
        this._text_58 = this.renderer.createText(this._el_21, '\n        ', null);
        this._text_59 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_60 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_61 = this.renderer.createText(this._el_0, '\n', null);
        this._text_62 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_27, new import3.InlineArray8(8, 'swipedown', null, 'swipeup', null, 'swipeleft', null, 'swiperight', null), this.eventHandler(this.handleEvent_27));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_36, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_36));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_54, new import3.InlineArray2(2, 'counterChange', null), this.eventHandler(this.handleEvent_54));
        this._MySpinner_54_3.subscribe(this, this.eventHandler(this.handleEvent_54), true);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._anchor_12,
            this._text_13,
            this._anchor_14,
            this._text_15,
            this._anchor_16,
            this._text_17,
            this._text_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._text_29,
            this._text_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._el_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._el_43,
            this._text_44,
            this._text_45,
            this._text_46,
            this._el_47,
            this._text_48,
            this._el_49,
            this._text_50,
            this._text_51,
            this._text_52,
            this._text_53,
            this._el_54,
            this._text_55,
            this._text_56,
            this._text_57,
            this._text_58,
            this._text_59,
            this._text_60,
            this._text_61,
            this._text_62
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    };
    View_Puzzle2048Component0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import18.TemplateRef) && (12 === requestNodeIndex))) {
            return this._TemplateRef_12_5;
        }
        if (((token === import19.NgIf) && (12 === requestNodeIndex))) {
            return this._NgIf_12_6.context;
        }
        if (((token === import18.TemplateRef) && (14 === requestNodeIndex))) {
            return this._TemplateRef_14_5;
        }
        if (((token === import19.NgIf) && (14 === requestNodeIndex))) {
            return this._NgIf_14_6.context;
        }
        if (((token === import18.TemplateRef) && (16 === requestNodeIndex))) {
            return this._TemplateRef_16_5;
        }
        if (((token === import19.NgIf) && (16 === requestNodeIndex))) {
            return this._NgIf_16_6.context;
        }
        if (((token === import14.TilesComponent) && ((27 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._TilesComponent_27_3.context;
        }
        if (((token === import16.MySpinner) && (54 === requestNodeIndex))) {
            return this._MySpinner_54_3.context;
        }
        return notFoundResult;
    };
    View_Puzzle2048Component0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_12_0_0 = (this.context.game.gameState == 0);
        this._NgIf_12_6.check_ngIf(currVal_12_0_0, throwOnChange, false);
        this._NgIf_12_6.ngDoCheck(this, this._anchor_12, throwOnChange);
        var currVal_14_0_0 = (this.context.game.gameState == 1);
        this._NgIf_14_6.check_ngIf(currVal_14_0_0, throwOnChange, false);
        this._NgIf_14_6.ngDoCheck(this, this._anchor_14, throwOnChange);
        var currVal_16_0_0 = (this.context.game.gameState == 2);
        this._NgIf_16_6.check_ngIf(currVal_16_0_0, throwOnChange, false);
        this._NgIf_16_6.ngDoCheck(this, this._anchor_16, throwOnChange);
        this._TilesComponent_27_3.ngDoCheck(this, this._el_27, throwOnChange);
        var currVal_54_0_0 = 6;
        this._MySpinner_54_3.check_maxValue(currVal_54_0_0, throwOnChange, false);
        var currVal_54_0_1 = 2;
        this._MySpinner_54_3.check_minValue(currVal_54_0_1, throwOnChange, false);
        var currVal_54_0_2 = this.context.game.gameSize;
        this._MySpinner_54_3.check_counterValue(currVal_54_0_2, throwOnChange, false);
        var currVal_54_0_3 = 'glyphicon-th';
        this._MySpinner_54_3.check_bdgClass(currVal_54_0_3, throwOnChange, false);
        this._MySpinner_54_3.ngDoCheck(this, this._el_54, throwOnChange);
        this._vc_12.detectChangesInNestedViews(throwOnChange);
        this._vc_14.detectChangesInNestedViews(throwOnChange);
        this._vc_16.detectChangesInNestedViews(throwOnChange);
        var currVal_76 = import3.inlineInterpolate(1, '', this.context.game.currentScore, '');
        if (import3.checkBinding(throwOnChange, this._expr_76, currVal_76)) {
            this.renderer.setText(this._text_44, currVal_76);
            this._expr_76 = currVal_76;
        }
        var currVal_77 = import3.inlineInterpolate(1, '', this.context.game.highScore, '');
        if (import3.checkBinding(throwOnChange, this._expr_77, currVal_77)) {
            this.renderer.setText(this._text_50, currVal_77);
            this._expr_77 = currVal_77;
        }
        this.compView_27.detectChanges(throwOnChange);
        this.compView_54.detectChanges(throwOnChange);
    };
    View_Puzzle2048Component0.prototype.destroyInternal = function () {
        this._vc_12.destroyNestedViews();
        this._vc_14.destroyNestedViews();
        this._vc_16.destroyNestedViews();
        this.compView_27.destroy();
        this.compView_54.destroy();
        this._MySpinner_54_3.ngOnDestroy();
    };
    View_Puzzle2048Component0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 12)) {
            return new View_Puzzle2048Component1(this.viewUtils, this, 12, this._anchor_12, this._vc_12);
        }
        if ((nodeIndex == 14)) {
            return new View_Puzzle2048Component2(this.viewUtils, this, 14, this._anchor_14, this._vc_14);
        }
        if ((nodeIndex == 16)) {
            return new View_Puzzle2048Component3(this.viewUtils, this, 16, this._anchor_16, this._vc_16);
        }
        return null;
    };
    View_Puzzle2048Component0.prototype.handleEvent_27 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'swipedown')) {
            var pd_sub_0 = (this.context.goDown($event) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'swipeup')) {
            var pd_sub_1 = (this.context.goUp($event) !== false);
            result = (pd_sub_1 && result);
        }
        if ((eventName == 'swipeleft')) {
            var pd_sub_2 = (this.context.goLeft($event) !== false);
            result = (pd_sub_2 && result);
        }
        if ((eventName == 'swiperight')) {
            var pd_sub_3 = (this.context.goRight($event) !== false);
            result = (pd_sub_3 && result);
        }
        return result;
    };
    View_Puzzle2048Component0.prototype.handleEvent_36 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.newGame() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_Puzzle2048Component0.prototype.handleEvent_54 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'counterChange')) {
            var pd_sub_0 = (this.context.onChangeSize($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_Puzzle2048Component0;
}(import1.AppView));
var View_Puzzle2048Component1 = (function (_super) {
    __extends(View_Puzzle2048Component1, _super);
    function View_Puzzle2048Component1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_Puzzle2048Component1, renderType_Puzzle2048Component, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_Puzzle2048Component1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'p', new import3.InlineArray2(2, 'class', 'bg-info'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                        Use your ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'span', new import3.InlineArray2(2, 'class', 'glyphicon glyphicon-move'), null);
        this._text_3 = this.renderer.createText(this._el_0, ' arrow keys to merge equal tiles.\n                    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_Puzzle2048Component1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_Puzzle2048Component1;
}(import1.AppView));
var View_Puzzle2048Component2 = (function (_super) {
    __extends(View_Puzzle2048Component2, _super);
    function View_Puzzle2048Component2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_Puzzle2048Component2, renderType_Puzzle2048Component, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_Puzzle2048Component2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'p', new import3.InlineArray2(2, 'class', 'bg-success'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                        You win!\n                    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_Puzzle2048Component2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_Puzzle2048Component2;
}(import1.AppView));
var View_Puzzle2048Component3 = (function (_super) {
    __extends(View_Puzzle2048Component3, _super);
    function View_Puzzle2048Component3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_Puzzle2048Component3, renderType_Puzzle2048Component, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_Puzzle2048Component3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'p', new import3.InlineArray2(2, 'class', 'bg-danger'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                        It looks like there is nothing you can do, except, maybe, start the game again...\n                    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_Puzzle2048Component3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_Puzzle2048Component3;
}(import1.AppView));
//# sourceMappingURL=puzzle-2048.component.ngfactory.js.map