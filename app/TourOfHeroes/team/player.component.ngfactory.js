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
import * as import0 from '../../../../app/TourOfHeroes/team/player.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view_utils';
import * as import3 from '@angular/core/src/linker/view';
import * as import5 from '@angular/core/src/linker/element';
import * as import6 from '../../../../app/TourOfHeroes/services/team.service';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '../../../../app/TourOfHeroes/providers/team-provider.service';
import * as import10 from '@angular/router/src/router';
import * as import11 from '@angular/router/src/router_state';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from '../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import15 from '@angular/common/src/pipes/date_pipe';
import * as import16 from '@angular/core/src/linker/template_ref';
import * as import17 from '@angular/core/src/i18n/tokens';
import * as import18 from '@angular/common/src/directives/ng_if';
import * as import19 from '../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import20 from '@angular/common/src/location/location_strategy';
import * as import21 from '@angular/router/src/directives/router_link';
export var Wrapper_PlayerDetailComponent = (function () {
    function Wrapper_PlayerDetailComponent(p0, p1, p2) {
        this.changed = false;
        this.context = new import0.PlayerDetailComponent(p0, p1, p2);
        this._expr_0 = import1.UNINITIALIZED;
    }
    Wrapper_PlayerDetailComponent.prototype.check_player = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this.changed = true;
            this.context.player = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_PlayerDetailComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_PlayerDetailComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_PlayerDetailComponent;
}());
var renderType_PlayerDetailComponent_Host = null;
var _View_PlayerDetailComponent_Host0 = (function (_super) {
    __extends(_View_PlayerDetailComponent_Host0, _super);
    function _View_PlayerDetailComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_PlayerDetailComponent_Host0, renderType_PlayerDetailComponent_Host, import8.ViewType.HOST, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    _View_PlayerDetailComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.selectOrCreateRenderHostElement(this.renderer, 'player-detail', import2.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import5.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_PlayerDetailComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._TeamService_0_4 = new import6.TeamService(this.parentInjector.get(import9.TeamProvider));
        this._PlayerDetailComponent_0_5 = new Wrapper_PlayerDetailComponent(this.parentInjector.get(import10.Router), this.parentInjector.get(import11.ActivatedRoute), this._TeamService_0_4);
        this._appEl_0.initComponent(this._PlayerDetailComponent_0_5.context, [], compView_0);
        compView_0.create(this._PlayerDetailComponent_0_5.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_PlayerDetailComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import6.TeamService) && (0 === requestNodeIndex))) {
            return this._TeamService_0_4;
        }
        if (((token === import0.PlayerDetailComponent) && (0 === requestNodeIndex))) {
            return this._PlayerDetailComponent_0_5.context;
        }
        return notFoundResult;
    };
    _View_PlayerDetailComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._PlayerDetailComponent_0_5.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._PlayerDetailComponent_0_5.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_PlayerDetailComponent_Host0.prototype.destroyInternal = function () {
        this._PlayerDetailComponent_0_5.context.ngOnDestroy();
    };
    return _View_PlayerDetailComponent_Host0;
}(import3.AppView));
function viewFactory_PlayerDetailComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_PlayerDetailComponent_Host === null)) {
        (renderType_PlayerDetailComponent_Host = viewUtils.createRenderComponentType('', 0, import12.ViewEncapsulation.None, [], {}));
    }
    return new _View_PlayerDetailComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var PlayerDetailComponentNgFactory = new import13.ComponentFactory('player-detail', viewFactory_PlayerDetailComponent_Host0, import0.PlayerDetailComponent);
var styles_PlayerDetailComponent = [];
var renderType_PlayerDetailComponent = null;
var _View_PlayerDetailComponent0 = (function (_super) {
    __extends(_View_PlayerDetailComponent0, _super);
    function _View_PlayerDetailComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_PlayerDetailComponent0, renderType_PlayerDetailComponent, import8.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    _View_PlayerDetailComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_0 = new import5.AppElement(0, null, this, this._anchor_0);
        this._TemplateRef_0_5 = new import16.TemplateRef_(this._appEl_0, viewFactory_PlayerDetailComponent1);
        this._NgIf_0_6 = new import14.Wrapper_NgIf(this._appEl_0.vcRef, this._TemplateRef_0_5);
        this._pipe_date_0 = new import15.DatePipe(this.parentInjector.get(import17.LOCALE_ID));
        this.init([], [this._anchor_0], [], []);
        return null;
    };
    _View_PlayerDetailComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.TemplateRef) && (0 === requestNodeIndex))) {
            return this._TemplateRef_0_5;
        }
        if (((token === import18.NgIf) && (0 === requestNodeIndex))) {
            return this._NgIf_0_6.context;
        }
        return notFoundResult;
    };
    _View_PlayerDetailComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.player;
        this._NgIf_0_6.check_ngIf(currVal_0_0_0, throwOnChange, false);
        this._NgIf_0_6.detectChangesInInputProps(this, this._anchor_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_PlayerDetailComponent0;
}(import3.AppView));
export function viewFactory_PlayerDetailComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_PlayerDetailComponent === null)) {
        (renderType_PlayerDetailComponent = viewUtils.createRenderComponentType('', 0, import12.ViewEncapsulation.None, styles_PlayerDetailComponent, {}));
    }
    return new _View_PlayerDetailComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_PlayerDetailComponent1 = (function (_super) {
    __extends(_View_PlayerDetailComponent1, _super);
    function _View_PlayerDetailComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_PlayerDetailComponent1, renderType_PlayerDetailComponent, import8.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_56 = import1.UNINITIALIZED;
        this._expr_57 = import1.UNINITIALIZED;
        this._expr_58 = import1.UNINITIALIZED;
        this._expr_60 = import1.UNINITIALIZED;
        this._expr_61 = import1.UNINITIALIZED;
        this._arr_62 = import2.pureProxy1(function (p0) {
            return [p0];
        });
    }
    _View_PlayerDetailComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'div', new import2.InlineArray2(2, 'class', 'container'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import2.createRenderElement(this.renderer, this._el_0, 'div', new import2.InlineArray2(2, 'class', 'form-group'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import2.createRenderElement(this.renderer, this._el_2, 'span', new import2.InlineArray2(2, 'class', 'col-md-3 control-label'), null);
        this._text_5 = this.renderer.createText(this._el_4, 'First name', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_7 = import2.createRenderElement(this.renderer, this._el_2, 'span', new import2.InlineArray2(2, 'class', 'col-md-9'), null);
        this._text_8 = this.renderer.createText(this._el_7, '', null);
        this._text_9 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_11 = import2.createRenderElement(this.renderer, this._el_0, 'div', new import2.InlineArray2(2, 'class', 'form-group'), null);
        this._text_12 = this.renderer.createText(this._el_11, '\n        ', null);
        this._el_13 = import2.createRenderElement(this.renderer, this._el_11, 'span', new import2.InlineArray2(2, 'class', 'col-md-3 control-label'), null);
        this._text_14 = this.renderer.createText(this._el_13, 'Last name', null);
        this._text_15 = this.renderer.createText(this._el_11, '\n        ', null);
        this._el_16 = import2.createRenderElement(this.renderer, this._el_11, 'span', new import2.InlineArray2(2, 'class', 'col-md-9'), null);
        this._text_17 = this.renderer.createText(this._el_16, '', null);
        this._text_18 = this.renderer.createText(this._el_11, '\n    ', null);
        this._text_19 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_20 = import2.createRenderElement(this.renderer, this._el_0, 'div', new import2.InlineArray2(2, 'class', 'form-group'), null);
        this._text_21 = this.renderer.createText(this._el_20, '\n        ', null);
        this._el_22 = import2.createRenderElement(this.renderer, this._el_20, 'span', new import2.InlineArray2(2, 'class', 'col-md-3 control-label'), null);
        this._text_23 = this.renderer.createText(this._el_22, 'Birthday', null);
        this._text_24 = this.renderer.createText(this._el_20, '\n        ', null);
        this._el_25 = import2.createRenderElement(this.renderer, this._el_20, 'span', new import2.InlineArray2(2, 'class', 'col-md-9'), null);
        this._text_26 = this.renderer.createText(this._el_25, '', null);
        this._text_27 = this.renderer.createText(this._el_20, '\n    ', null);
        this._text_28 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_29 = import2.createRenderElement(this.renderer, this._el_0, 'div', new import2.InlineArray2(2, 'class', 'form-group'), null);
        this._text_30 = this.renderer.createText(this._el_29, '\n        ', null);
        this._el_31 = import2.createRenderElement(this.renderer, this._el_29, 'span', new import2.InlineArray2(2, 'class', 'col-md-3 control-label'), null);
        this._text_32 = this.renderer.createText(this._el_31, 'Gender', null);
        this._text_33 = this.renderer.createText(this._el_29, '\n        ', null);
        this._el_34 = import2.createRenderElement(this.renderer, this._el_29, 'span', new import2.InlineArray2(2, 'class', 'col-md-9'), null);
        this._text_35 = this.renderer.createText(this._el_34, '', null);
        this._text_36 = this.renderer.createText(this._el_29, '\n    ', null);
        this._text_37 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_38 = import2.createRenderElement(this.renderer, this._el_0, 'div', new import2.InlineArray2(2, 'class', 'form-group'), null);
        this._text_39 = this.renderer.createText(this._el_38, '\n        ', null);
        this._el_40 = import2.createRenderElement(this.renderer, this._el_38, 'span', new import2.InlineArray2(2, 'class', 'col-md-3 control-label'), null);
        this._text_41 = this.renderer.createText(this._el_40, 'Email', null);
        this._text_42 = this.renderer.createText(this._el_38, '\n        ', null);
        this._el_43 = import2.createRenderElement(this.renderer, this._el_38, 'span', new import2.InlineArray2(2, 'class', 'col-md-9'), null);
        this._text_44 = this.renderer.createText(this._el_43, '', null);
        this._text_45 = this.renderer.createText(this._el_38, '\n    ', null);
        this._text_46 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_47 = import2.createRenderElement(this.renderer, this._el_0, 'button', new import2.InlineArray2(2, 'class', 'btn btn-default'), null);
        this._RouterLink_47_3 = new import19.Wrapper_RouterLink(this.parentInjector.get(import10.Router), this.parentInjector.get(import11.ActivatedRoute), this.parentInjector.get(import20.LocationStrategy));
        this._text_48 = this.renderer.createText(this._el_47, 'Back', null);
        this._text_49 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_50 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_50 = new import5.AppElement(50, 0, this, this._anchor_50);
        this._TemplateRef_50_5 = new import16.TemplateRef_(this._appEl_50, viewFactory_PlayerDetailComponent2);
        this._NgIf_50_6 = new import14.Wrapper_NgIf(this._appEl_50.vcRef, this._TemplateRef_50_5);
        this._text_51 = this.renderer.createText(this._el_0, '\n', null);
        this._pipe_date_0_0 = import2.pureProxy2(this.parent._pipe_date_0.transform.bind(this.parent._pipe_date_0));
        var disposable_0 = this.renderer.listen(this._el_47, 'click', this.eventHandler(this._handle_click_47_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._text_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._text_33,
            this._el_34,
            this._text_35,
            this._text_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._el_40,
            this._text_41,
            this._text_42,
            this._el_43,
            this._text_44,
            this._text_45,
            this._text_46,
            this._el_47,
            this._text_48,
            this._text_49,
            this._anchor_50,
            this._text_51
        ], [disposable_0], []);
        return null;
    };
    _View_PlayerDetailComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import21.RouterLink) && ((47 <= requestNodeIndex) && (requestNodeIndex <= 48)))) {
            return this._RouterLink_47_3.context;
        }
        if (((token === import16.TemplateRef) && (50 === requestNodeIndex))) {
            return this._TemplateRef_50_5;
        }
        if (((token === import18.NgIf) && (50 === requestNodeIndex))) {
            return this._NgIf_50_6.context;
        }
        return notFoundResult;
    };
    _View_PlayerDetailComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new import1.ValueUnwrapper();
        var currVal_47_0_0 = this._arr_62('/team');
        this._RouterLink_47_3.check_routerLink(currVal_47_0_0, throwOnChange, false);
        this._RouterLink_47_3.detectChangesInInputProps(this, this._el_47, throwOnChange);
        var currVal_50_0_0 = this.parent.context.player._id;
        this._NgIf_50_6.check_ngIf(currVal_50_0_0, throwOnChange, false);
        this._NgIf_50_6.detectChangesInInputProps(this, this._anchor_50, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_56 = import2.interpolate(1, '', this.parent.context.player.name, '');
        if (import2.checkBinding(throwOnChange, this._expr_56, currVal_56)) {
            this.renderer.setText(this._text_8, currVal_56);
            this._expr_56 = currVal_56;
        }
        var currVal_57 = import2.interpolate(1, '', this.parent.context.player.lastName, '');
        if (import2.checkBinding(throwOnChange, this._expr_57, currVal_57)) {
            this.renderer.setText(this._text_17, currVal_57);
            this._expr_57 = currVal_57;
        }
        valUnwrapper.reset();
        var currVal_58 = import2.interpolate(1, '', valUnwrapper.unwrap(import2.castByValue(this._pipe_date_0_0, this.parent._pipe_date_0.transform)(this.parent.context.player.birthday, 'dd-MMM-yyyy')), '');
        if ((valUnwrapper.hasWrappedValue || import2.checkBinding(throwOnChange, this._expr_58, currVal_58))) {
            this.renderer.setText(this._text_26, currVal_58);
            this._expr_58 = currVal_58;
        }
        var currVal_60 = import2.interpolate(1, '', this.parent.context.player.gender, '');
        if (import2.checkBinding(throwOnChange, this._expr_60, currVal_60)) {
            this.renderer.setText(this._text_35, currVal_60);
            this._expr_60 = currVal_60;
        }
        var currVal_61 = import2.interpolate(1, '', this.parent.context.player.email, '');
        if (import2.checkBinding(throwOnChange, this._expr_61, currVal_61)) {
            this.renderer.setText(this._text_44, currVal_61);
            this._expr_61 = currVal_61;
        }
        this._RouterLink_47_3.detectChangesInHostProps(this, this._el_47, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_PlayerDetailComponent1.prototype._handle_click_47_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_47_0 = (this._RouterLink_47_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_47_0);
    };
    return _View_PlayerDetailComponent1;
}(import3.AppView));
function viewFactory_PlayerDetailComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_PlayerDetailComponent1(viewUtils, parentInjector, declarationEl);
}
var _View_PlayerDetailComponent2 = (function (_super) {
    __extends(_View_PlayerDetailComponent2, _super);
    function _View_PlayerDetailComponent2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_PlayerDetailComponent2, renderType_PlayerDetailComponent, import8.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    _View_PlayerDetailComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'button', new import2.InlineArray2(2, 'class', 'btn btn-default pull-right'), null);
        this._text_1 = this.renderer.createText(this._el_0, 'Delete', null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [disposable_0], []);
        return null;
    };
    _View_PlayerDetailComponent2.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0_0 = (this.parent.parent.context.removePlayer() !== false);
        return (true && pd_0_0);
    };
    return _View_PlayerDetailComponent2;
}(import3.AppView));
function viewFactory_PlayerDetailComponent2(viewUtils, parentInjector, declarationEl) {
    return new _View_PlayerDetailComponent2(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=player.component.ngfactory.js.map