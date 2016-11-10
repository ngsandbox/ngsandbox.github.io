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
import * as import0 from '../../../app/TourOfHeroes/team.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/router/src/router';
import * as import9 from '../../../app/TourOfHeroes/services/team.service';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import13 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import14 from '@angular/router/src/router_state';
import * as import15 from '@angular/common/src/location/location_strategy';
import * as import16 from '@angular/core/src/linker/template_ref';
import * as import17 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import18 from '@angular/router/src/directives/router_link';
import * as import19 from '@angular/common/src/directives/ng_for';
export var Wrapper_TeamComponent = (function () {
    function Wrapper_TeamComponent(p0, p1) {
        this.changed = false;
        this.context = new import0.TeamComponent(p0, p1);
    }
    Wrapper_TeamComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_TeamComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_TeamComponent;
}());
var renderType_TeamComponent_Host = null;
var _View_TeamComponent_Host0 = (function (_super) {
    __extends(_View_TeamComponent_Host0, _super);
    function _View_TeamComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TeamComponent_Host0, renderType_TeamComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TeamComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'my-team', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_TeamComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._TeamComponent_0_4 = new Wrapper_TeamComponent(this.parentInjector.get(import8.Router), this.parentInjector.get(import9.TeamService));
        this._appEl_0.initComponent(this._TeamComponent_0_4.context, [], compView_0);
        compView_0.create(this._TeamComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_TeamComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.TeamComponent) && (0 === requestNodeIndex))) {
            return this._TeamComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_TeamComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._TeamComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._TeamComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_TeamComponent_Host0;
}(import1.AppView));
function viewFactory_TeamComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TeamComponent_Host === null)) {
        (renderType_TeamComponent_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_TeamComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var TeamComponentNgFactory = new import11.ComponentFactory('my-team', viewFactory_TeamComponent_Host0, import0.TeamComponent);
var styles_TeamComponent = [];
var renderType_TeamComponent = null;
var _View_TeamComponent0 = (function (_super) {
    __extends(_View_TeamComponent0, _super);
    function _View_TeamComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TeamComponent0, renderType_TeamComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._arr_38 = import4.pureProxy1(function (p0) {
            return [p0];
        });
    }
    _View_TeamComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'button', new import4.InlineArray2(2, 'class', 'btn btn-primary pull-right'), null);
        this._RouterLink_0_3 = new import12.Wrapper_RouterLink(this.parentInjector.get(import8.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'span', new import4.InlineArray4(4, 'aria-hidden', 'true', 'class', 'glyphicon glyphicon-plus'), null);
        this._text_3 = this.renderer.createText(this._el_0, ' New player\n', null);
        this._text_4 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_5 = import4.createRenderElement(this.renderer, parentRenderNode, 'table', new import4.InlineArray2(2, 'class', 'table table-striped'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n    ', null);
        this._el_7 = import4.createRenderElement(this.renderer, this._el_5, 'thead', import4.EMPTY_INLINE_ARRAY, null);
        this._text_8 = this.renderer.createText(this._el_7, '\n    ', null);
        this._el_9 = import4.createRenderElement(this.renderer, this._el_7, 'tr', import4.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_9, '\n        ', null);
        this._el_11 = import4.createRenderElement(this.renderer, this._el_9, 'th', new import4.InlineArray2(2, 'style', 'width: 50px;'), null);
        this._text_12 = this.renderer.createText(this._el_11, '#', null);
        this._text_13 = this.renderer.createText(this._el_9, '\n        ', null);
        this._el_14 = import4.createRenderElement(this.renderer, this._el_9, 'th', import4.EMPTY_INLINE_ARRAY, null);
        this._text_15 = this.renderer.createText(this._el_14, 'First name', null);
        this._text_16 = this.renderer.createText(this._el_9, '\n        ', null);
        this._el_17 = import4.createRenderElement(this.renderer, this._el_9, 'th', import4.EMPTY_INLINE_ARRAY, null);
        this._text_18 = this.renderer.createText(this._el_17, 'Last name', null);
        this._text_19 = this.renderer.createText(this._el_9, '\n        ', null);
        this._text_20 = this.renderer.createText(this._el_9, '\n        ', null);
        this._el_21 = import4.createRenderElement(this.renderer, this._el_9, 'th', import4.EMPTY_INLINE_ARRAY, null);
        this._text_22 = this.renderer.createText(this._el_21, 'Gender', null);
        this._text_23 = this.renderer.createText(this._el_9, '\n        ', null);
        this._el_24 = import4.createRenderElement(this.renderer, this._el_9, 'th', import4.EMPTY_INLINE_ARRAY, null);
        this._text_25 = this.renderer.createText(this._el_24, 'Email', null);
        this._text_26 = this.renderer.createText(this._el_9, '\n    ', null);
        this._text_27 = this.renderer.createText(this._el_7, '\n    ', null);
        this._text_28 = this.renderer.createText(this._el_5, '\n    ', null);
        this._el_29 = import4.createRenderElement(this.renderer, this._el_5, 'tbody', import4.EMPTY_INLINE_ARRAY, null);
        this._text_30 = this.renderer.createText(this._el_29, '\n    ', null);
        this._anchor_31 = this.renderer.createTemplateAnchor(this._el_29, null);
        this._appEl_31 = new import3.AppElement(31, 29, this, this._anchor_31);
        this._TemplateRef_31_5 = new import16.TemplateRef_(this._appEl_31, viewFactory_TeamComponent1);
        this._NgFor_31_6 = new import13.Wrapper_NgFor(this._appEl_31.vcRef, this._TemplateRef_31_5, this.parentInjector.get(import17.IterableDiffers), this.ref);
        this._text_32 = this.renderer.createText(this._el_29, '\n    ', null);
        this._text_33 = this.renderer.createText(this._el_5, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._text_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._anchor_31,
            this._text_32,
            this._text_33
        ], [disposable_0], []);
        return null;
    };
    _View_TeamComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import18.RouterLink) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._RouterLink_0_3.context;
        }
        if (((token === import16.TemplateRef) && (31 === requestNodeIndex))) {
            return this._TemplateRef_31_5;
        }
        if (((token === import19.NgFor) && (31 === requestNodeIndex))) {
            return this._NgFor_31_6.context;
        }
        return notFoundResult;
    };
    _View_TeamComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this._arr_38('/team/player/new');
        this._RouterLink_0_3.check_routerLink(currVal_0_0_0, throwOnChange, false);
        this._RouterLink_0_3.detectChangesInInputProps(this, this._el_0, throwOnChange);
        var currVal_31_0_0 = this.context.team;
        this._NgFor_31_6.check_ngForOf(currVal_31_0_0, throwOnChange, false);
        this._NgFor_31_6.detectChangesInInputProps(this, this._anchor_31, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._RouterLink_0_3.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_TeamComponent0.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0_0 = (this._RouterLink_0_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0_0);
    };
    return _View_TeamComponent0;
}(import1.AppView));
export function viewFactory_TeamComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TeamComponent === null)) {
        (renderType_TeamComponent = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, styles_TeamComponent, {}));
    }
    return new _View_TeamComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_TeamComponent1 = (function (_super) {
    __extends(_View_TeamComponent1, _super);
    function _View_TeamComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TeamComponent1, renderType_TeamComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._arr_19 = import4.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
        this._expr_20 = import7.UNINITIALIZED;
        this._expr_21 = import7.UNINITIALIZED;
        this._expr_22 = import7.UNINITIALIZED;
        this._expr_23 = import7.UNINITIALIZED;
        this._expr_24 = import7.UNINITIALIZED;
    }
    _View_TeamComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'tr', new import4.InlineArray2(2, 'style', 'cursor: pointer;'), null);
        this._RouterLink_0_3 = new import12.Wrapper_RouterLink(this.parent.parentInjector.get(import8.Router), this.parent.parentInjector.get(import14.ActivatedRoute), this.parent.parentInjector.get(import15.LocationStrategy));
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'td', import4.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_5 = import4.createRenderElement(this.renderer, this._el_0, 'td', import4.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_8 = import4.createRenderElement(this.renderer, this._el_0, 'td', import4.EMPTY_INLINE_ARRAY, null);
        this._text_9 = this.renderer.createText(this._el_8, '', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n        ', null);
        this._text_11 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_12 = import4.createRenderElement(this.renderer, this._el_0, 'td', import4.EMPTY_INLINE_ARRAY, null);
        this._text_13 = this.renderer.createText(this._el_12, '', null);
        this._text_14 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_15 = import4.createRenderElement(this.renderer, this._el_0, 'td', import4.EMPTY_INLINE_ARRAY, null);
        this._text_16 = this.renderer.createText(this._el_15, '', null);
        this._text_17 = this.renderer.createText(this._el_0, '\n    ', null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17
        ], [disposable_0], []);
        return null;
    };
    _View_TeamComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import18.RouterLink) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._RouterLink_0_3.context;
        }
        return notFoundResult;
    };
    _View_TeamComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this._arr_19('/team/player/edit', this.context.$implicit._id);
        this._RouterLink_0_3.check_routerLink(currVal_0_0_0, throwOnChange, false);
        this._RouterLink_0_3.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._RouterLink_0_3.detectChangesInHostProps(this, this._el_0, throwOnChange);
        var currVal_20 = import4.interpolate(1, '', (this.context.index + 1), '');
        if (import4.checkBinding(throwOnChange, this._expr_20, currVal_20)) {
            this.renderer.setText(this._text_3, currVal_20);
            this._expr_20 = currVal_20;
        }
        var currVal_21 = import4.interpolate(1, '', this.context.$implicit.name, '');
        if (import4.checkBinding(throwOnChange, this._expr_21, currVal_21)) {
            this.renderer.setText(this._text_6, currVal_21);
            this._expr_21 = currVal_21;
        }
        var currVal_22 = import4.interpolate(1, '', this.context.$implicit.lastName, '');
        if (import4.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this.renderer.setText(this._text_9, currVal_22);
            this._expr_22 = currVal_22;
        }
        var currVal_23 = import4.interpolate(1, '', this.context.$implicit.gender, '');
        if (import4.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this.renderer.setText(this._text_13, currVal_23);
            this._expr_23 = currVal_23;
        }
        var currVal_24 = import4.interpolate(1, '', this.context.$implicit.email, '');
        if (import4.checkBinding(throwOnChange, this._expr_24, currVal_24)) {
            this.renderer.setText(this._text_16, currVal_24);
            this._expr_24 = currVal_24;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_TeamComponent1.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0_0 = (this._RouterLink_0_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0_0);
    };
    return _View_TeamComponent1;
}(import1.AppView));
function viewFactory_TeamComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_TeamComponent1(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=team.component.ngfactory.js.map