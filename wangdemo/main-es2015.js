(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\t<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/scene-ui/scene-ui.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scene-ui/scene-ui.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"uiwrapper\" (click)=\"onOverlayClicked($event)\">\n\t<ng-template appInsertion> </ng-template>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/story-tester/scenes/test-blue-screen/test-blue-screen.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/story-tester/scenes/test-blue-screen/test-blue-screen.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"overlay\">\n\t<div class=\"dialog\">\n\t\t<div class=\"scenescreen\">test-blue-screen works!</div>\n\t\t<button (click)=\"onClose()\">BYE!</button>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/story-tester/scenes/test-green-screen/test-green-screen.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/story-tester/scenes/test-green-screen/test-green-screen.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"overlay\">\n\t<div class=\"dialog\">\n\t\t<div class=\"scenescreen\">test-green-screen works!</div>\n\t\t<button (click)=\"onClose()\">BYE!</button>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/story-tester/scenes/test-screen-generic/test-screen-generic.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/story-tester/scenes/test-screen-generic/test-screen-generic.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>test-screen-generic works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/story-tester/story-tester.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/story-tester/story-tester.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"storyteller-outside\">\n\n\t<div id=\"storyteller-tester\">\n\t\t<p>story-tester works!</p>\n\n\n\t\t<div id=\"scenerender-test\"></div>\n\n\n\t\t<button (click)=\"loadGreenScreen()\">GREEN</button>\n\t\t<button (click)=\"loadBlueScreen()\">BLUE</button>\n\t</div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/journey-step/journey-step.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/journey-step/journey-step.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"journeyrender\" #renderholder>\n\t<div id=\"viewrender\" #renderview></div>\n</div>\n\n<div id=\"journeyinfo\" #sceneinfo>\n\tTravelling {{getDirectionDescription()}} to {{journeyscene.dest.name}}, day {{journeyscene.stepid}}/{{journeyscene.course.length}};\n\n\t\t<br>\n\n\t<div class=\"journeycontrols\">\n\t<button class=\"journeychoice\" (click)=\"setCamp()\">SET CAMP</button> <button class=\"journeychoice\" (click)=\"continueJourney()\">JOURNEY ONWARDS</button> <button class=\"journeychoice\" (click)=\"showMap()\">SHOW MAP</button>\n\n\t</div>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/roaming-step/roaming-step.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/roaming-step/roaming-step.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"journeyrender\" #renderholder>\n\t<div id=\"viewrender\" #renderview></div>\n</div>\n\n<div id=\"journeyinfo\" #sceneinfo>\n\tTravelling {{getDirectionDescription()}}, day {{getDayOfTravel()}}<span *ngIf=\"roamingscene.startloc !== null\"> from {{roamingscene.startloc.name}}</span>.\n\n\t\t<br>\n\n\t<div class=\"journeycontrols\">\n\t\t<button class=\"journeychoice\" (click)=\"moveTurnLeft()\">LEFT 45</button>\n\t\t<button class=\"journeychoice\" (click)=\"moveForward()\">JOURNEY ONWARDS</button>\n\t\t<button class=\"journeychoice\" (click)=\"moveTurnRight()\">RIGHT 45</button>\n\t\t<br>\n\n\n\t\t<button class=\"journeychoice\" (click)=\"actionSetCamp()\">SET CAMP</button>  <button class=\"journeychoice\" (click)=\"showMap()\">SHOW MAP</button>\n\n\t</div>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/town-ui/town-ui.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/town-ui/town-ui.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"towninfo\" #sceneinfo>\nStanding before {{townscene.town.name}}.\n\n\t\t<br>\n\n\t<div class=\"movecontrols\">\n\t\t<button class=\"movecontrols\" (click)=\"leaveTown()\">LEAVE</button>\n\n\t</div>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/world-map-view/world-map-view.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/world-map-view/world-map-view.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"mapholder\" #mapholder>\n\t<div id=\"maprender\" #mapview></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/storyteller.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/storyteller.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"st-page\">\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _story_tester_story_tester_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./story-tester/story-tester.component */ "./src/app/story-tester/story-tester.component.ts");
/* harmony import */ var _storyteller_storyteller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storyteller/storyteller.component */ "./src/app/storyteller/storyteller.component.ts");





const routes = [
    { path: '', redirectTo: '/game', pathMatch: 'full' },
    { path: 'tester', component: _story_tester_story_tester_component__WEBPACK_IMPORTED_MODULE_3__["StoryTesterComponent"] },
    { path: 'game', component: _storyteller_storyteller_component__WEBPACK_IMPORTED_MODULE_4__["StorytellerComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'WanderANG';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _storyteller_storyteller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storyteller/storyteller.component */ "./src/app/storyteller/storyteller.component.ts");
/* harmony import */ var _scene_ui_scene_ui_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scene-ui/scene-ui.component */ "./src/app/scene-ui/scene-ui.component.ts");
/* harmony import */ var _story_tester_scenes_test_green_screen_test_green_screen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./story-tester/scenes/test-green-screen/test-green-screen.component */ "./src/app/story-tester/scenes/test-green-screen/test-green-screen.component.ts");
/* harmony import */ var _story_tester_scenes_test_blue_screen_test_blue_screen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./story-tester/scenes/test-blue-screen/test-blue-screen.component */ "./src/app/story-tester/scenes/test-blue-screen/test-blue-screen.component.ts");
/* harmony import */ var _scene_ui_scene_ui_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scene-ui/scene-ui.module */ "./src/app/scene-ui/scene-ui.module.ts");
/* harmony import */ var _story_tester_story_tester_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./story-tester/story-tester.component */ "./src/app/story-tester/story-tester.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _storyteller_scenes_world_map_view_world_map_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./storyteller/scenes/world-map-view/world-map-view.component */ "./src/app/storyteller/scenes/world-map-view/world-map-view.component.ts");
/* harmony import */ var _storyteller_scenes_journey_step_journey_step_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./storyteller/scenes/journey-step/journey-step.component */ "./src/app/storyteller/scenes/journey-step/journey-step.component.ts");
/* harmony import */ var _storyteller_scenes_town_ui_town_ui_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./storyteller/scenes/town-ui/town-ui.component */ "./src/app/storyteller/scenes/town-ui/town-ui.component.ts");
/* harmony import */ var _storyteller_scenes_roaming_step_roaming_step_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./storyteller/scenes/roaming-step/roaming-step.component */ "./src/app/storyteller/scenes/roaming-step/roaming-step.component.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _storyteller_storyteller_component__WEBPACK_IMPORTED_MODULE_5__["StorytellerComponent"],
            _story_tester_scenes_test_green_screen_test_green_screen_component__WEBPACK_IMPORTED_MODULE_7__["TestGreenScreenComponent"],
            _story_tester_scenes_test_blue_screen_test_blue_screen_component__WEBPACK_IMPORTED_MODULE_8__["TestBlueScreenComponent"],
            _story_tester_story_tester_component__WEBPACK_IMPORTED_MODULE_10__["StoryTesterComponent"],
            _storyteller_scenes_world_map_view_world_map_view_component__WEBPACK_IMPORTED_MODULE_12__["WorldMapViewComponent"],
            _storyteller_scenes_journey_step_journey_step_component__WEBPACK_IMPORTED_MODULE_13__["JourneyStepComponent"],
            _storyteller_scenes_town_ui_town_ui_component__WEBPACK_IMPORTED_MODULE_14__["TownUIComponent"],
            _storyteller_scenes_roaming_step_roaming_step_component__WEBPACK_IMPORTED_MODULE_15__["RoamingStepComponent"],
        ],
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _scene_ui_scene_ui_module__WEBPACK_IMPORTED_MODULE_9__["SceneUIModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        entryComponents: [
            _scene_ui_scene_ui_component__WEBPACK_IMPORTED_MODULE_6__["SceneUIComponent"],
            _story_tester_scenes_test_green_screen_test_green_screen_component__WEBPACK_IMPORTED_MODULE_7__["TestGreenScreenComponent"],
            _story_tester_scenes_test_blue_screen_test_blue_screen_component__WEBPACK_IMPORTED_MODULE_8__["TestBlueScreenComponent"],
            _storyteller_scenes_world_map_view_world_map_view_component__WEBPACK_IMPORTED_MODULE_12__["WorldMapViewComponent"],
            _storyteller_scenes_journey_step_journey_step_component__WEBPACK_IMPORTED_MODULE_13__["JourneyStepComponent"],
            _storyteller_scenes_roaming_step_roaming_step_component__WEBPACK_IMPORTED_MODULE_15__["RoamingStepComponent"],
            _storyteller_scenes_town_ui_town_ui_component__WEBPACK_IMPORTED_MODULE_14__["TownUIComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/rpg-engine/scenes/journey-departure.ts":
/*!********************************************************!*\
  !*** ./src/app/rpg-engine/scenes/journey-departure.ts ***!
  \********************************************************/
/*! exports provided: JourneyDeparture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JourneyDeparture", function() { return JourneyDeparture; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _wander_scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wander-scene */ "./src/app/rpg-engine/wander-scene.ts");
/* harmony import */ var _roaming__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roaming */ "./src/app/rpg-engine/scenes/roaming.ts");
/* harmony import */ var _world_world_position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../world/world-position */ "./src/app/rpg-engine/world/world-position.ts");




class JourneyDeparture extends _wander_scene__WEBPACK_IMPORTED_MODULE_1__["WanderScene"] {
    constructor(game) {
        super(game);
        this.worldmap = game.worldmap;
    }
    sceneFinished() {
        return !!this.destination;
    }
    setDestination(dest) {
        // let startingpos = this.game.hero.coordinates;
        // let destcoords = dest["coords"];
        this.destination = dest;
    }
    getFollowingScene() {
        // let next = new Journey(this.game, this.destination);
        let direction = _world_world_position__WEBPACK_IMPORTED_MODULE_3__["WorldPosition"].getRelativeGeneralDirection(this.game.hero.coordinates, this.destination.pos);
        let next = new _roaming__WEBPACK_IMPORTED_MODULE_2__["Roaming"](this.game, this.game.hero.coordinates, direction);
        // next.setStops(this.game.hero.coordinates, this.destination["coords"]);
        return next;
    }
}


/***/ }),

/***/ "./src/app/rpg-engine/scenes/journey.ts":
/*!**********************************************!*\
  !*** ./src/app/rpg-engine/scenes/journey.ts ***!
  \**********************************************/
/*! exports provided: Journey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Journey", function() { return Journey; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _wander_scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wander-scene */ "./src/app/rpg-engine/wander-scene.ts");


class Journey extends _wander_scene__WEBPACK_IMPORTED_MODULE_1__["WanderScene"] {
    // NOTE that start is optional and will default to player's position
    constructor(game, dest, start) {
        super(game);
        this.start = !start ? game.hero.coordinates : start;
        this.dest = dest;
        this.course = game.worldmap.getCourse(this.start, this.dest.pos);
        this.stepid = 0;
    }
    // TODO: add support for custom stops in case the player can  (interpolating)
    step() {
        this.stepid++;
    }
    getCurrentCoordinates() {
        if (this.stepid < this.course.length) {
            return this.course[this.stepid];
        }
        else {
            return this.dest.pos;
        }
    }
    sceneFinished() {
        return this.stepid >= this.course.length;
    }
    getStepDirection(stepid) {
        let cpos = this.course[stepid];
        let nextpos = stepid + 1 < this.course.length ? this.course[stepid + 1] : this.dest.pos;
        return [nextpos.x - cpos.x, nextpos.y - cpos.y];
    }
}


/***/ }),

/***/ "./src/app/rpg-engine/scenes/roaming.ts":
/*!**********************************************!*\
  !*** ./src/app/rpg-engine/scenes/roaming.ts ***!
  \**********************************************/
/*! exports provided: Roaming */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roaming", function() { return Roaming; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _wander_scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wander-scene */ "./src/app/rpg-engine/wander-scene.ts");


class Roaming extends _wander_scene__WEBPACK_IMPORTED_MODULE_1__["WanderScene"] {
    // NOTE that start is optional and will default to player's position, direction to N?
    constructor(game, start, direction) {
        super(game);
        this.direction = !direction ? [0, -1] : direction;
        this.start = !start ? this.game.hero.coordinates : start;
        this.current = this.start;
        this.steps = 0;
        this.startloc = this.game.worldmap.getLocationAt(this.start.getCoords());
    }
    sceneFinished() {
        // scene ends when you reach a Place
        return this.game.worldmap.getLocationAt(this.current.getCoords()) != null;
    }
    stepInto(pos) {
        this.direction = [pos.x - this.current.x, pos.y - this.current.y];
        this.current = pos;
    }
    stepForward() {
        this.steps++;
        this.stepInto(this.current.getShifted(this.direction[0], this.direction[1]));
    }
    getCurrentDirectionIndex() {
        for (let i = 0; i < Roaming.DIRECTIONS.length; i++) {
            if (Roaming.DIRECTIONS[i][0] === this.direction[0] && Roaming.DIRECTIONS[i][1] === this.direction[1]) {
                return i;
            }
        }
        return null;
    }
    // steps are in CLOCKWISE order
    changeDirection(steps) {
        let cidx = this.getCurrentDirectionIndex();
        let nidx = (cidx + Roaming.DIRECTIONS.length + steps) % Roaming.DIRECTIONS.length;
        this.direction = Roaming.DIRECTIONS[nidx];
    }
}
Roaming.DIRECTIONS = [
    [0, -1],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [-1, -1]
];


/***/ }),

/***/ "./src/app/rpg-engine/scenes/town-nav.ts":
/*!***********************************************!*\
  !*** ./src/app/rpg-engine/scenes/town-nav.ts ***!
  \***********************************************/
/*! exports provided: TownNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TownNav", function() { return TownNav; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _wander_scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wander-scene */ "./src/app/rpg-engine/wander-scene.ts");
/* harmony import */ var _journey_departure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./journey-departure */ "./src/app/rpg-engine/scenes/journey-departure.ts");



class TownNav extends _wander_scene__WEBPACK_IMPORTED_MODULE_1__["WanderScene"] {
    constructor(game, place) {
        super(game);
        this.town = place;
    }
    getFollowingScene() {
        return new _journey_departure__WEBPACK_IMPORTED_MODULE_2__["JourneyDeparture"](this.game);
    }
    sceneFinished() {
        return this.locpoint === -1;
    }
}
TownNav.LOC_LEAVE = -1;
TownNav.LOC_OUTSKIRTS = 0;
TownNav.LOC_GATES = 1;
TownNav.LOC_MAINSTREET = 2;
TownNav.LOC_MARKET = 3;


/***/ }),

/***/ "./src/app/rpg-engine/wander-game.ts":
/*!*******************************************!*\
  !*** ./src/app/rpg-engine/wander-game.ts ***!
  \*******************************************/
/*! exports provided: WanderGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WanderGame", function() { return WanderGame; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _world_world_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./world/world-map */ "./src/app/rpg-engine/world/world-map.ts");
/* harmony import */ var _wander_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wander-hero */ "./src/app/rpg-engine/wander-hero.ts");



class WanderGame {
    static loadGame(http, callback) {
        const loader = new GameFactory(http);
        loader.loadDemoGame(function (game, factory) {
            console.log("loaded game ", game);
            console.log("built from factory ", factory);
            callback(game);
        });
    }
    // DEBUG FUNCTIONS FOR QUICK TESTING
    setHero(hero) {
        this.hero = hero;
    }
    setWorldMap(worldmap) {
        this.worldmap = worldmap;
    }
    setActiveScene(scene) {
        console.log("setting activescene to ", scene);
        this.activescene = scene;
    }
    getActiveScene() {
        return this.activescene;
    }
}
class GameFactory {
    constructor(http) {
        this.http = http;
        this.dataset = {
            "locs": null,
            "terrain": null,
            "player": null
        };
    }
    loadDataFile(filepath, callback) {
        const locdata = this.http.get(filepath);
        locdata.subscribe(function (response) {
            console.log("LOAD RESULT", response);
            callback(response);
        });
    }
    loadDemoGame(callback) {
        const sources = {
            "locs": "./assets/gamedata/testlocations.json",
            "terrain": "./assets/gamedata/testmapgame.json",
            "player": "./assets/gamedata/playerdata.json"
        };
        let loader = this;
        function getCheckerFunction(key) {
            return function (data) {
                loader.setData(key, data, callback);
            };
        }
        for (let key of Object.keys(sources)) {
            let path = sources[key];
            let checker = getCheckerFunction(key);
            this.loadDataFile(path, checker);
        }
    }
    setData(key, data, completer) {
        this.dataset[key] = data;
        let has_all = true;
        for (let datakey of Object.keys(this.dataset)) {
            if (this.dataset[datakey] == null) {
                has_all = false;
            }
        }
        if (has_all) {
            // completer(this);
            this.createGameInstance(completer);
        }
    }
    createGameInstance(completer) {
        let game = new WanderGame();
        console.log("loaded terrain", this.dataset["terrain"]);
        console.log("loaded locs", this.dataset["locs"]);
        console.log("loaded player", this.dataset["player"]);
        let worldmap = _world_world_map__WEBPACK_IMPORTED_MODULE_1__["WorldMap"].fromJSON(this.dataset["terrain"], this.dataset["locs"]);
        let hero = _wander_hero__WEBPACK_IMPORTED_MODULE_2__["WanderHero"].fromJSON(this.dataset["player"]);
        game.setWorldMap(worldmap);
        game.setHero(hero);
        completer(game, this);
    }
}


/***/ }),

/***/ "./src/app/rpg-engine/wander-hero.ts":
/*!*******************************************!*\
  !*** ./src/app/rpg-engine/wander-hero.ts ***!
  \*******************************************/
/*! exports provided: WanderHero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WanderHero", function() { return WanderHero; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _world_world_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./world/world-position */ "./src/app/rpg-engine/world/world-position.ts");


class WanderHero {
    constructor() {
        this.coordinates = null;
    }
    static fromJSON(src) {
        let hero = new WanderHero();
        // TODO: add potentials etc
        // hero.setCoordinates(rawdata["coords"][0], rawdata["coords"][1]);
        hero.setCoordinates(_world_world_position__WEBPACK_IMPORTED_MODULE_1__["WorldPosition"].fromCoordsArray(src["position"]["coords"]));
        return hero;
    }
    setCoordinates(pos) {
        console.log("replacing coords", this.coordinates, "w pos ", pos);
        this.coordinates = pos;
    }
}


/***/ }),

/***/ "./src/app/rpg-engine/wander-scene.ts":
/*!********************************************!*\
  !*** ./src/app/rpg-engine/wander-scene.ts ***!
  \********************************************/
/*! exports provided: WanderScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WanderScene", function() { return WanderScene; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class WanderScene {
    constructor(game) {
        this.game = game;
        // narrative should be set outside the constructor
        this.narrative = null;
        // TODO: TBA (note: should get value AFTER constructor anyway?)
        this.leaf = null;
        this.driver = null;
    }
    setNarrative(narrative) {
        this.narrative = narrative;
    }
    /**
     * Acts as default, subclasses can override if they have specific return codes > 0 (for success and < -1 for failure?)
     * If the scene is unfinished, subclasses should still respect the UNFINISHED constant
     */
    returnState() {
        // Scenes that do not have a set of return values always return 0 on end OR -1 if not finished
        return this.sceneFinished() ? WanderScene.LEAVESTATE_FINISHED : WanderScene.LEAVESTATE_UNFINISHED;
    }
    /**
     * Acts as default, subclasses can override if they chain to a scene they create
     */
    getFollowingScene() {
        return this.narrative;
    }
}
WanderScene.LEAVESTATE_UNFINISHED = -1;
WanderScene.LEAVESTATE_FINISHED = 0;


/***/ }),

/***/ "./src/app/rpg-engine/world/locs/Place.ts":
/*!************************************************!*\
  !*** ./src/app/rpg-engine/world/locs/Place.ts ***!
  \************************************************/
/*! exports provided: Place */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Place", function() { return Place; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Place {
    constructor(pos) {
        this.pos = pos;
    }
    // public abstract getName (): string;
    getCoords() {
        return this.pos.getCoords();
    }
}


/***/ }),

/***/ "./src/app/rpg-engine/world/locs/PlaceFactory.ts":
/*!*******************************************************!*\
  !*** ./src/app/rpg-engine/world/locs/PlaceFactory.ts ***!
  \*******************************************************/
/*! exports provided: PlaceFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceFactory", function() { return PlaceFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Town__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Town */ "./src/app/rpg-engine/world/locs/Town.ts");
/* harmony import */ var _TerrainPass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TerrainPass */ "./src/app/rpg-engine/world/locs/TerrainPass.ts");



class PlaceFactory {
    static fromJSON(placetype, placeid, src) {
        let builderclass = PlaceFactory.CLASSES[placetype];
        return builderclass.fromJSON(placeid, src);
    }
}
PlaceFactory.CLASSES = {
    "towns": _Town__WEBPACK_IMPORTED_MODULE_1__["Town"],
    "passes": _TerrainPass__WEBPACK_IMPORTED_MODULE_2__["TerrainPass"]
};


/***/ }),

/***/ "./src/app/rpg-engine/world/locs/TerrainPass.ts":
/*!******************************************************!*\
  !*** ./src/app/rpg-engine/world/locs/TerrainPass.ts ***!
  \******************************************************/
/*! exports provided: TerrainPass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerrainPass", function() { return TerrainPass; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Place__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Place */ "./src/app/rpg-engine/world/locs/Place.ts");
/* harmony import */ var _world_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../world-position */ "./src/app/rpg-engine/world/world-position.ts");



class TerrainPass extends _Place__WEBPACK_IMPORTED_MODULE_1__["Place"] {
    constructor(locid, entrypos, exitpos, course) {
        super(entrypos);
        this.loctype = "passes";
        this.locid = locid;
        this.exitpoint = exitpos;
        this.course = course;
    }
    static fromJSON(placeid, desc) {
        let entrypoint = desc["entry"];
        let exitpoint = desc["exit"];
        let course = desc["sequence"];
        let loaded = new TerrainPass(placeid, new _world_position__WEBPACK_IMPORTED_MODULE_2__["WorldPosition"](entrypoint[0], entrypoint[1]), new _world_position__WEBPACK_IMPORTED_MODULE_2__["WorldPosition"](exitpoint[0], exitpoint[1]), course);
        loaded.name = desc["name"];
        return loaded;
    }
}


/***/ }),

/***/ "./src/app/rpg-engine/world/locs/Town.ts":
/*!***********************************************!*\
  !*** ./src/app/rpg-engine/world/locs/Town.ts ***!
  \***********************************************/
/*! exports provided: Town */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Town", function() { return Town; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Place__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Place */ "./src/app/rpg-engine/world/locs/Place.ts");
/* harmony import */ var _world_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../world-position */ "./src/app/rpg-engine/world/world-position.ts");



class Town extends _Place__WEBPACK_IMPORTED_MODULE_1__["Place"] {
    constructor(locid, coords) {
        super(coords);
        this.loctype = "towns";
        this.locid = locid;
    }
    static fromJSON(placeid, desc) {
        let coords = desc["coords"];
        let loaded = new Town(placeid, new _world_position__WEBPACK_IMPORTED_MODULE_2__["WorldPosition"](coords[0], coords[1]));
        loaded.name = desc["name"];
        return loaded;
    }
}


/***/ }),

/***/ "./src/app/rpg-engine/world/world-map.ts":
/*!***********************************************!*\
  !*** ./src/app/rpg-engine/world/world-map.ts ***!
  \***********************************************/
/*! exports provided: WorldMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldMap", function() { return WorldMap; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _locs_TerrainPass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locs/TerrainPass */ "./src/app/rpg-engine/world/locs/TerrainPass.ts");
/* harmony import */ var _locs_PlaceFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locs/PlaceFactory */ "./src/app/rpg-engine/world/locs/PlaceFactory.ts");
/* harmony import */ var _world_position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./world-position */ "./src/app/rpg-engine/world/world-position.ts");




class WorldMap {
    constructor(sizeX, sizeY) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.locs = [];
        this.terrain = [];
        for (let x = 0; x < sizeX; x++) {
            let tercol = [];
            let loccol = [];
            for (let y = 0; y < sizeY; y++) {
                tercol.push(null);
                loccol.push(null);
            }
            this.terrain.push(tercol);
            this.locs.push(loccol);
        }
        this.places_bytypebyid = new Map();
    }
    static getCoordsHash(coordX, coordY) {
        return coordX + ":" + coordY;
    }
    static fromJSON(griddata, locationdata) {
        // console.log(griddata);
        let gridsizeX = griddata["mapgrid"].length;
        let gridsizeY = griddata["mapgrid"][0].length;
        let worldmap = new WorldMap(gridsizeX, gridsizeY);
        // console.log(worldmap.terrain);
        for (let x = 0; x < gridsizeX; x++) {
            for (let y = 0; y < gridsizeY; y++) {
                worldmap.terrain[x][y] = griddata["mapgrid"][x][y];
            }
        }
        // loop not technically needed but we might want to run generations etc on data in the future
        // TODO : replace
        for (let placetype of Object.keys(locationdata)) {
            let places = locationdata[placetype];
            let listed = new Map();
            for (let placeid of Object.keys(places)) {
                let placedesc = places[placeid];
                let place = _locs_PlaceFactory__WEBPACK_IMPORTED_MODULE_2__["PlaceFactory"].fromJSON(placetype, placeid, placedesc);
                // let place = new Place(Position.fromCoords(placedesc["coords"]));
                // place.loctype = placetype;
                // place.locid = placeid;
                listed.set(placeid, place);
                // console.log("adding place", placetype, placedesc);
                let coords;
                worldmap.locs[place.pos.x][place.pos.y] = place;
                if (place instanceof _locs_TerrainPass__WEBPACK_IMPORTED_MODULE_1__["TerrainPass"]) {
                    let exitpos = place.exitpoint;
                    worldmap.locs[exitpos.x][exitpos.y] = place;
                }
            }
            worldmap.places_bytypebyid.set(placetype, listed);
        }
        return worldmap;
    }
    getAllLocations() {
        let listing = [];
        for (let placetype of this.places_bytypebyid.keys()) {
            // console.log("getting loctype ", loctype, this.places[loctype]);
            for (let loc of this.places_bytypebyid.get(placetype).values()) {
                listing.push(loc);
            }
        }
        // console.log("all locations: ", listing);
        return listing;
    }
    getLocationAt(coords) {
        let loc = null;
        try {
            loc = this.locs[coords[0]][coords[1]];
        }
        catch (err) {
            // return null;
        }
        // console.log("found loc ", loc);
        // TODO: DEBUG ONLY!
        // loc = null;
        return loc;
        /*
        var coordhash = WorldMap.getCoordsHash(coordX, coordY);
        // TODO: optimize so we don't go through the whole places data
        for (var placetype in this.places)
        {
            for (var placeid in this.places[placetype])
            {
                var placecoords = this.places[placetype][placeid]["coords"];
                if (WorldMap.getCoordsHash(placecoords[0], placecoords[1])==coordhash)
                {
                    return this.places[placetype][placeid];
                }
            }
        }
        return null;
        */
    }
    getCourse(cfrom, cto) {
        // TODO: straight course for now
        let distX = cto.x - cfrom.x;
        let distY = cto.y - cfrom.y;
        let maxdist = Math.max(Math.abs(distX), Math.abs(distY));
        let course = [];
        for (let i = 0; i < maxdist; i++) {
            let section = i / maxdist;
            let sectionX = Math.round(distX * section);
            let sectionY = Math.round(distY * section);
            course.push(new _world_position__WEBPACK_IMPORTED_MODULE_3__["WorldPosition"](cfrom.x + sectionX, cfrom.y + sectionY));
        }
        console.log("course from ", cfrom, " to ", cto, ": " + course.length + " steps (", course, ")");
        return course;
    }
    getTerrainAt(x, y) {
        try {
            return this.terrain[x][y];
        }
        catch (err) {
            return null;
        }
    }
}


/***/ }),

/***/ "./src/app/rpg-engine/world/world-position.ts":
/*!****************************************************!*\
  !*** ./src/app/rpg-engine/world/world-position.ts ***!
  \****************************************************/
/*! exports provided: WorldPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldPosition", function() { return WorldPosition; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class WorldPosition {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static fromCoordsArray(coords) {
        return new WorldPosition(coords[0], coords[1]);
    }
    getCoords() {
        return [this.x, this.y];
    }
    getShifted(x, y) {
        return new WorldPosition(this.x + x, this.y + y);
    }
    static getRelativeGeneralDirection(pfrom, pto) {
        const distX = pto.x - pfrom.x;
        const distY = pto.y - pfrom.y;
        let dirX = 0;
        let dirY = 0;
        if (distX === 0) {
            dirX = 0;
            dirY = distY > 0 ? 1 : -1;
        }
        else if (distY === 0) {
            dirY = 0;
            dirX = distX > 0 ? 1 : -1;
        }
        else {
            let absX = Math.abs(distX);
            let absY = Math.abs(distY);
            if (absY > 3 * absY) {
                dirX = 0;
                dirY = distY > 0 ? 1 : -1;
            }
            else if (absY * 3 < absX) {
                dirX = distX > 0 ? 1 : -1;
                dirY = 0;
            }
            else {
                dirX = distX > 0 ? 1 : -1;
                dirY = distY > 0 ? 1 : -1;
            }
        }
        return [dirX, dirY];
    }
}


/***/ }),

/***/ "./src/app/scene-ui/insertion.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/scene-ui/insertion.directive.ts ***!
  \*************************************************/
/*! exports provided: InsertionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertionDirective", function() { return InsertionDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InsertionDirective = class InsertionDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
};
InsertionDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
InsertionDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appInsertion]',
    })
], InsertionDirective);



/***/ }),

/***/ "./src/app/scene-ui/scene-injector.ts":
/*!********************************************!*\
  !*** ./src/app/scene-ui/scene-injector.ts ***!
  \********************************************/
/*! exports provided: SceneInjector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneInjector", function() { return SceneInjector; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SceneInjector {
    constructor(_parentInjector, _additionalTokens) {
        this._parentInjector = _parentInjector;
        this._additionalTokens = _additionalTokens;
    }
    get(token, notFoundValue, flags) {
        const value = this._additionalTokens.get(token);
        if (value) {
            return value;
        }
        return this._parentInjector.get(token, notFoundValue);
    }
}


/***/ }),

/***/ "./src/app/scene-ui/scene-ref.ts":
/*!***************************************!*\
  !*** ./src/app/scene-ui/scene-ref.ts ***!
  \***************************************/
/*! exports provided: SceneRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneRef", function() { return SceneRef; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


class SceneRef {
    constructor() {
        this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.afterClosed = this._afterClosed.asObservable();
        this._sceneCheck = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.sceneCheck = this._sceneCheck.asObservable();
    }
    setContext(scene) {
        this.scene = scene;
        this.game = scene.game;
    }
    close(result) {
        this._afterClosed.next(result);
    }
    triggerSceneCheck() {
        console.log("sending check event for scene ", this.scene, this.scene.sceneFinished());
        this._sceneCheck.next();
    }
}


/***/ }),

/***/ "./src/app/scene-ui/scene-ui.component.scss":
/*!**************************************************!*\
  !*** ./src/app/scene-ui/scene-ui.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".uiwrapper {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: transparent;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RyYWtlL0NvZGUvV2FuZGVyL1dhbmRlckFORy9zcmMvYXBwL3NjZW5lLXVpL3NjZW5lLXVpLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zY2VuZS11aS9zY2VuZS11aS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zY2VuZS11aS9zY2VuZS11aS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIiwiLnVpd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/scene-ui/scene-ui.component.ts":
/*!************************************************!*\
  !*** ./src/app/scene-ui/scene-ui.component.ts ***!
  \************************************************/
/*! exports provided: SceneUIComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneUIComponent", function() { return SceneUIComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _insertion_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insertion.directive */ "./src/app/scene-ui/insertion.directive.ts");




let SceneUIComponent = class SceneUIComponent {
    constructor(componentFactoryResolver, cd) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.cd = cd;
        this._onClose = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onClose = this._onClose.asObservable();
    }
    // LIFECYCLE
    // note: ngOnInit not strictly necessary for this use
    // ngOnInit() {
    // }
    ngAfterViewInit() {
        this.loadChildComponent(this.childComponentType);
        this.cd.detectChanges();
    }
    ngOnDestroy() {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    }
    // child loading
    loadChildComponent(componentType) {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        let viewContainerRef = this.insertionPoint.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef = viewContainerRef.createComponent(componentFactory);
    }
    // for dialog-like behaviour, revise
    onOverlayClicked(evt) {
        // close the scene
        console.warn("on overlay click");
        // console.log("closing sceneref");
        // console.log("removing ", this.componentRef);
        // this.componentRef.destroy();
    }
    onDialogClicked(evt) {
        evt.stopPropagation();
    }
};
SceneUIComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_insertion_directive__WEBPACK_IMPORTED_MODULE_3__["InsertionDirective"], { static: false })
], SceneUIComponent.prototype, "insertionPoint", void 0);
SceneUIComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scene-ui',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./scene-ui.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/scene-ui/scene-ui.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./scene-ui.component.scss */ "./src/app/scene-ui/scene-ui.component.scss")).default]
    })
], SceneUIComponent);



/***/ }),

/***/ "./src/app/scene-ui/scene-ui.module.ts":
/*!*********************************************!*\
  !*** ./src/app/scene-ui/scene-ui.module.ts ***!
  \*********************************************/
/*! exports provided: SceneUIModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneUIModule", function() { return SceneUIModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _insertion_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insertion.directive */ "./src/app/scene-ui/insertion.directive.ts");
/* harmony import */ var _scene_ui_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scene-ui.component */ "./src/app/scene-ui/scene-ui.component.ts");





let SceneUIModule = class SceneUIModule {
};
SceneUIModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_scene_ui_component__WEBPACK_IMPORTED_MODULE_4__["SceneUIComponent"], _insertion_directive__WEBPACK_IMPORTED_MODULE_3__["InsertionDirective"]],
        entryComponents: [_scene_ui_component__WEBPACK_IMPORTED_MODULE_4__["SceneUIComponent"]],
    })
], SceneUIModule);



/***/ }),

/***/ "./src/app/scene-ui/scene-ui.service.ts":
/*!**********************************************!*\
  !*** ./src/app/scene-ui/scene-ui.service.ts ***!
  \**********************************************/
/*! exports provided: SceneUIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneUIService", function() { return SceneUIService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _scene_ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene-ui.component */ "./src/app/scene-ui/scene-ui.component.ts");
/* harmony import */ var _scene_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scene-ref */ "./src/app/scene-ui/scene-ref.ts");
/* harmony import */ var _scene_injector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scene-injector */ "./src/app/scene-ui/scene-injector.ts");





let SceneUIService = class SceneUIService {
    constructor(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    bindStoryTellerUI(storyteller) {
        this.storyteller = storyteller;
    }
    open(componentType, scene) {
        let sceneref = this.appendSceneUI(scene);
        this.sceneRef.instance.childComponentType = componentType;
        return sceneref;
    }
    appendSceneUI(scene) {
        const map = new WeakMap();
        // map.set(DialogConfig, config);
        // add the DialogRef to dependency injection
        const sceneRef = new _scene_ref__WEBPACK_IMPORTED_MODULE_3__["SceneRef"]();
        sceneRef.setContext(scene);
        map.set(_scene_ref__WEBPACK_IMPORTED_MODULE_3__["SceneRef"], sceneRef);
        // we want to know when somebody called the close mehtod
        const sub = sceneRef.afterClosed.subscribe(() => {
            // close the dialog
            console.log("running AFTERCLOSE");
            this.removeSceneUI();
            sub.unsubscribe();
            console.log("getting follower scene ", scene.getFollowingScene());
            this.storyteller.checkUpdateSceneRender();
        });
        const checksub = sceneRef.sceneCheck.subscribe(() => {
            console.log("running SCENECHECK on scene ", scene);
            if (scene.sceneFinished()) {
                console.log("scene IS finished!");
            }
            else {
                console.log("scene NOT finished");
            }
            if (scene.sceneFinished()) {
                sceneRef.close();
            }
        });
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_scene_ui_component__WEBPACK_IMPORTED_MODULE_2__["SceneUIComponent"]);
        const componentRef = componentFactory.create(new _scene_injector__WEBPACK_IMPORTED_MODULE_4__["SceneInjector"](this.injector, map));
        this.appRef.attachView(componentRef.hostView);
        const domElem = componentRef.hostView.rootNodes[0];
        document.body.appendChild(domElem);
        this.sceneRef = componentRef;
        // console.log("SceneUI.sceneRef: ", this.sceneRef);
        // console.log("SceneUI.sceneRef.instance: ", this.sceneRef.instance);
        // console.log("SceneUI.sceneRef.childCompo: ", this.sceneRef.instance.componentRef);
        this.sceneRef.instance.onClose.subscribe(() => {
            console.log("running ONCLOSE");
            this.removeSceneUI();
            // console.log("getting follower scene ", scene.getFollowingScene());
            // this.storyteller.checkUpdateSceneRender();
        });
        // return the dialogRef
        return sceneRef;
    }
    removeSceneUI() {
        console.log("removing scene ref ", this.sceneRef);
        this.appRef.detachView(this.sceneRef.hostView);
        this.sceneRef.destroy();
    }
};
SceneUIService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
SceneUIService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SceneUIService);



/***/ }),

/***/ "./src/app/story-tester/scenes/test-blue-screen/test-blue-screen.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/story-tester/scenes/test-blue-screen/test-blue-screen.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scenescreen {\n  background-color: darkseagreen;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RyYWtlL0NvZGUvV2FuZGVyL1dhbmRlckFORy9zcmMvYXBwL3N0b3J5LXRlc3Rlci9zY2VuZXMvdGVzdC1ibHVlLXNjcmVlbi90ZXN0LWJsdWUtc2NyZWVuLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdG9yeS10ZXN0ZXIvc2NlbmVzL3Rlc3QtYmx1ZS1zY3JlZW4vdGVzdC1ibHVlLXNjcmVlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVDLDhCQUFBO0FDQUQiLCJmaWxlIjoic3JjL2FwcC9zdG9yeS10ZXN0ZXIvc2NlbmVzL3Rlc3QtYmx1ZS1zY3JlZW4vdGVzdC1ibHVlLXNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY2VuZXNjcmVlblxue1xuXHRiYWNrZ3JvdW5kLWNvbG9yOlx0XHRcdGRhcmtzZWFncmVlbjtcbn1cbiIsIi5zY2VuZXNjcmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzZWFncmVlbjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/story-tester/scenes/test-blue-screen/test-blue-screen.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/story-tester/scenes/test-blue-screen/test-blue-screen.component.ts ***!
  \************************************************************************************/
/*! exports provided: TestBlueScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestBlueScreenComponent", function() { return TestBlueScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../scene-ui/scene-ref */ "./src/app/scene-ui/scene-ref.ts");
/* harmony import */ var _test_screen_generic_test_screen_generic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../test-screen-generic/test-screen-generic.component */ "./src/app/story-tester/scenes/test-screen-generic/test-screen-generic.component.ts");




let TestBlueScreenComponent = class TestBlueScreenComponent extends _test_screen_generic_test_screen_generic_component__WEBPACK_IMPORTED_MODULE_3__["TestScreenGenericComponent"] {
    constructor(sceneref) {
        super();
        this.sceneref = sceneref;
    }
    ngOnInit() {
    }
    onClose() {
        this.sceneref.close('BYE BLUE');
    }
};
TestBlueScreenComponent.ctorParameters = () => [
    { type: _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_2__["SceneRef"] }
];
TestBlueScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test-blue-screen',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test-blue-screen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/story-tester/scenes/test-blue-screen/test-blue-screen.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../test-screen-generic/test-screen-generic.component.scss */ "./src/app/story-tester/scenes/test-screen-generic/test-screen-generic.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test-blue-screen.component.scss */ "./src/app/story-tester/scenes/test-blue-screen/test-blue-screen.component.scss")).default]
    })
], TestBlueScreenComponent);



/***/ }),

/***/ "./src/app/story-tester/scenes/test-green-screen/test-green-screen.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/story-tester/scenes/test-green-screen/test-green-screen.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scenescreen {\n  background-color: lightsteelblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RyYWtlL0NvZGUvV2FuZGVyL1dhbmRlckFORy9zcmMvYXBwL3N0b3J5LXRlc3Rlci9zY2VuZXMvdGVzdC1ncmVlbi1zY3JlZW4vdGVzdC1ncmVlbi1zY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0b3J5LXRlc3Rlci9zY2VuZXMvdGVzdC1ncmVlbi1zY3JlZW4vdGVzdC1ncmVlbi1zY3JlZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQyxnQ0FBQTtBQ0FEIiwiZmlsZSI6InNyYy9hcHAvc3RvcnktdGVzdGVyL3NjZW5lcy90ZXN0LWdyZWVuLXNjcmVlbi90ZXN0LWdyZWVuLXNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY2VuZXNjcmVlblxue1xuXHRiYWNrZ3JvdW5kLWNvbG9yOlx0XHRcdGxpZ2h0c3RlZWxibHVlO1xufVxuIiwiLnNjZW5lc2NyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzdGVlbGJsdWU7XG59Il19 */");

/***/ }),

/***/ "./src/app/story-tester/scenes/test-green-screen/test-green-screen.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/story-tester/scenes/test-green-screen/test-green-screen.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TestGreenScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestGreenScreenComponent", function() { return TestGreenScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../scene-ui/scene-ref */ "./src/app/scene-ui/scene-ref.ts");
/* harmony import */ var _test_screen_generic_test_screen_generic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../test-screen-generic/test-screen-generic.component */ "./src/app/story-tester/scenes/test-screen-generic/test-screen-generic.component.ts");




let TestGreenScreenComponent = class TestGreenScreenComponent extends _test_screen_generic_test_screen_generic_component__WEBPACK_IMPORTED_MODULE_3__["TestScreenGenericComponent"] {
    constructor(sceneref) {
        super();
        this.sceneref = sceneref;
    }
    ngOnInit() {
    }
    onClose() {
        this.sceneref.close('BYE GREEN');
    }
};
TestGreenScreenComponent.ctorParameters = () => [
    { type: _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_2__["SceneRef"] }
];
TestGreenScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test-green-screen',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test-green-screen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/story-tester/scenes/test-green-screen/test-green-screen.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../test-screen-generic/test-screen-generic.component.scss */ "./src/app/story-tester/scenes/test-screen-generic/test-screen-generic.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test-green-screen.component.scss */ "./src/app/story-tester/scenes/test-green-screen/test-green-screen.component.scss")).default]
    })
], TestGreenScreenComponent);



/***/ }),

/***/ "./src/app/story-tester/scenes/test-screen-generic/test-screen-generic.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/story-tester/scenes/test-screen-generic/test-screen-generic.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".overlay {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.7);\n  align-items: center;\n  justify-content: center;\n}\n\n.dialog {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  background-color: white;\n  width: 50%;\n  height: 50%;\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RyYWtlL0NvZGUvV2FuZGVyL1dhbmRlckFORy9zcmMvYXBwL3N0b3J5LXRlc3Rlci9zY2VuZXMvdGVzdC1zY3JlZW4tZ2VuZXJpYy90ZXN0LXNjcmVlbi1nZW5lcmljLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdG9yeS10ZXN0ZXIvc2NlbmVzL3Rlc3Qtc2NyZWVuLWdlbmVyaWMvdGVzdC1zY3JlZW4tZ2VuZXJpYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0RUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zdG9yeS10ZXN0ZXIvc2NlbmVzL3Rlc3Qtc2NyZWVuLWdlbmVyaWMvdGVzdC1zY3JlZW4tZ2VuZXJpYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVybGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kaWFsb2cge1xuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDhweDtcbn1cbiIsIi5vdmVybGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kaWFsb2cge1xuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDhweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/story-tester/scenes/test-screen-generic/test-screen-generic.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/story-tester/scenes/test-screen-generic/test-screen-generic.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TestScreenGenericComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestScreenGenericComponent", function() { return TestScreenGenericComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TestScreenGenericComponent = class TestScreenGenericComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
TestScreenGenericComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test-screen-generic',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test-screen-generic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/story-tester/scenes/test-screen-generic/test-screen-generic.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test-screen-generic.component.scss */ "./src/app/story-tester/scenes/test-screen-generic/test-screen-generic.component.scss")).default]
    })
], TestScreenGenericComponent);



/***/ }),

/***/ "./src/app/story-tester/story-tester.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/story-tester/story-tester.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#storyteller-outside {\n  background-color: #9a93ff;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n#storyteller-tester {\n  position: fixed;\n  top: 8px;\n  left: 8px;\n  right: 8px;\n  bottom: 8px;\n  /*background-color:\t\tlightgreen;*/\n  background-image: url(\"/assets/ui/temporaryparchment.jpg\");\n}\n\n#scenerender-test {\n  background-color: grey;\n  width: 200px;\n  height: 300px;\n  border: 2px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RyYWtlL0NvZGUvV2FuZGVyL1dhbmRlckFORy9zcmMvYXBwL3N0b3J5LXRlc3Rlci9zdG9yeS10ZXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0b3J5LXRlc3Rlci9zdG9yeS10ZXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQyx5QkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDQUQ7O0FESUE7RUFFQyxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsMERBQUE7QUNGRDs7QURPQTtFQUdDLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ05EIiwiZmlsZSI6InNyYy9hcHAvc3RvcnktdGVzdGVyL3N0b3J5LXRlc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzdG9yeXRlbGxlci1vdXRzaWRlXG57XG5cdGJhY2tncm91bmQtY29sb3I6ICM5YTkzZmY7XG5cdHBvc2l0aW9uOlx0XHRcdFx0Zml4ZWQ7XG5cdHRvcDpcdFx0XHRcdFx0MDtcblx0bGVmdDpcdFx0XHRcdFx0MDtcblx0cmlnaHQ6XHRcdFx0XHRcdDA7XG5cdGJvdHRvbTpcdFx0XHRcdFx0MDtcbn1cblxuXG4jc3Rvcnl0ZWxsZXItdGVzdGVyXG57XG5cdHBvc2l0aW9uOlx0XHRcdFx0Zml4ZWQ7XG5cdHRvcDpcdFx0XHRcdFx0OHB4O1xuXHRsZWZ0Olx0XHRcdFx0XHQ4cHg7XG5cdHJpZ2h0Olx0XHRcdFx0XHQ4cHg7XG5cdGJvdHRvbTpcdFx0XHRcdFx0OHB4O1xuXHQvKmJhY2tncm91bmQtY29sb3I6XHRcdGxpZ2h0Z3JlZW47Ki9cblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy91aS90ZW1wb3JhcnlwYXJjaG1lbnQuanBnXCIpO1xuXG59XG5cblxuI3NjZW5lcmVuZGVyLXRlc3RcbntcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOlx0XHRncmV5O1xuXHR3aWR0aDpcdFx0XHRcdFx0MjAwcHg7XG5cdGhlaWdodDpcdFx0XHRcdFx0MzAwcHg7XG5cdGJvcmRlcjpcdFx0XHRcdFx0MnB4IHNvbGlkIHdoaXRlO1xufVxuXG5cbiIsIiNzdG9yeXRlbGxlci1vdXRzaWRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlhOTNmZjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG5cbiNzdG9yeXRlbGxlci10ZXN0ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiA4cHg7XG4gIHJpZ2h0OiA4cHg7XG4gIGJvdHRvbTogOHB4O1xuICAvKmJhY2tncm91bmQtY29sb3I6XHRcdGxpZ2h0Z3JlZW47Ki9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy91aS90ZW1wb3JhcnlwYXJjaG1lbnQuanBnXCIpO1xufVxuXG4jc2NlbmVyZW5kZXItdGVzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/story-tester/story-tester.component.ts":
/*!********************************************************!*\
  !*** ./src/app/story-tester/story-tester.component.ts ***!
  \********************************************************/
/*! exports provided: StoryTesterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryTesterComponent", function() { return StoryTesterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _scene_ui_scene_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scene-ui/scene-ui.service */ "./src/app/scene-ui/scene-ui.service.ts");
/* harmony import */ var _scenes_test_blue_screen_test_blue_screen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/test-blue-screen/test-blue-screen.component */ "./src/app/story-tester/scenes/test-blue-screen/test-blue-screen.component.ts");
/* harmony import */ var _scenes_test_green_screen_test_green_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scenes/test-green-screen/test-green-screen.component */ "./src/app/story-tester/scenes/test-green-screen/test-green-screen.component.ts");
/* harmony import */ var _tester_scene__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tester-scene */ "./src/app/story-tester/tester-scene.ts");






let StoryTesterComponent = class StoryTesterComponent {
    constructor(sceneui) {
        this.sceneui = sceneui;
    }
    ngOnInit() {
    }
    loadBlueScreen() {
        let scene = new _tester_scene__WEBPACK_IMPORTED_MODULE_5__["TesterScene"]();
        let ref = this.sceneui.open(_scenes_test_blue_screen_test_blue_screen_component__WEBPACK_IMPORTED_MODULE_3__["TestBlueScreenComponent"], scene);
        ref.afterClosed.subscribe(result => {
            console.log('Scene (BLUE) closed', result);
        });
    }
    loadGreenScreen() {
        let scene = new _tester_scene__WEBPACK_IMPORTED_MODULE_5__["TesterScene"]();
        let ref = this.sceneui.open(_scenes_test_green_screen_test_green_screen_component__WEBPACK_IMPORTED_MODULE_4__["TestGreenScreenComponent"], scene);
        ref.afterClosed.subscribe(result => {
            console.log('Scene (GREEN) closed', result);
        });
    }
};
StoryTesterComponent.ctorParameters = () => [
    { type: _scene_ui_scene_ui_service__WEBPACK_IMPORTED_MODULE_2__["SceneUIService"] }
];
StoryTesterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-story-tester',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./story-tester.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/story-tester/story-tester.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./story-tester.component.scss */ "./src/app/story-tester/story-tester.component.scss")).default]
    })
], StoryTesterComponent);



/***/ }),

/***/ "./src/app/story-tester/tester-scene.ts":
/*!**********************************************!*\
  !*** ./src/app/story-tester/tester-scene.ts ***!
  \**********************************************/
/*! exports provided: TesterScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TesterScene", function() { return TesterScene; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _rpg_engine_wander_scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rpg-engine/wander-scene */ "./src/app/rpg-engine/wander-scene.ts");


/**
 * Empty scene object so test layouts can work without loading an actual game
 */
class TesterScene extends _rpg_engine_wander_scene__WEBPACK_IMPORTED_MODULE_1__["WanderScene"] {
    constructor() {
        super(null);
    }
    sceneFinished() {
        return false;
    }
}


/***/ }),

/***/ "./src/app/storyteller/scenes/journey-step/journey-step.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/storyteller/scenes/journey-step/journey-step.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#journeyrender {\n  position: fixed;\n  top: 8px;\n  left: 8px;\n  right: 8px;\n  bottom: 30vh;\n  border: 1px dashed black;\n  overflow: auto;\n}\n\n#viewrender {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n#journeyinfo {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 28vh;\n  font-size: 8vh;\n  text-align: center;\n}\n\nbutton.journeychoice {\n  border: 1px solid black;\n  padding: 2pt 8pt;\n  font-size: 4vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RyYWtlL0NvZGUvV2FuZGVyL1dhbmRlckFORy9zcmMvYXBwL3N0b3J5dGVsbGVyL3NjZW5lcy9qb3VybmV5LXN0ZXAvam91cm5leS1zdGVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdG9yeXRlbGxlci9zY2VuZXMvam91cm5leS1zdGVwL2pvdXJuZXktc3RlcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVDLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FDQUQ7O0FER0E7RUFFQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNERDs7QURJQTtFQUVDLGVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0FDSEQ7O0FET0E7RUFFQyx1QkFBQTtFQUNBLGdCQUFBO0VBRUEsY0FBQTtBQ05EIiwiZmlsZSI6InNyYy9hcHAvc3Rvcnl0ZWxsZXIvc2NlbmVzL2pvdXJuZXktc3RlcC9qb3VybmV5LXN0ZXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjam91cm5leXJlbmRlclxue1xuXHRwb3NpdGlvbjpcdFx0Zml4ZWQ7XG5cdHRvcDpcdFx0XHQ4cHg7XG5cdGxlZnQ6XHRcdFx0OHB4O1xuXHRyaWdodDpcdFx0XHQ4cHg7XG5cdGJvdHRvbTpcdFx0XHQzMHZoO1xuXHRib3JkZXI6XHRcdFx0MXB4IGRhc2hlZCBibGFjaztcblx0b3ZlcmZsb3c6XHRcdGF1dG87XG59XG5cbiN2aWV3cmVuZGVyXG57XG5cdHBvc2l0aW9uOlx0XHRhYnNvbHV0ZTtcblx0dG9wOlx0XHRcdDA7XG5cdGxlZnQ6XHRcdFx0MDtcblx0cmlnaHQ6XHRcdFx0MDtcblx0Ym90dG9tOlx0XHRcdDA7XG59XG5cbiNqb3VybmV5aW5mb1xue1xuXHRwb3NpdGlvbjpcdFx0Zml4ZWQ7XG5cdGxlZnQ6XHRcdFx0MDtcblx0cmlnaHQ6XHRcdFx0MDtcblx0Ym90dG9tOlx0XHRcdDA7XG5cdGhlaWdodDpcdFx0XHQyOHZoO1xuXHRmb250LXNpemU6XHRcdDh2aDtcblxuXHR0ZXh0LWFsaWduOlx0XHRjZW50ZXI7XG59XG5cblxuYnV0dG9uLmpvdXJuZXljaG9pY2Vcbntcblx0Ym9yZGVyOlx0XHRcdDFweCBzb2xpZCBibGFjaztcblx0cGFkZGluZzpcdFx0MnB0IDhwdDtcblxuXHRmb250LXNpemU6XHRcdDR2aDtcbn1cbiIsIiNqb3VybmV5cmVuZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDhweDtcbiAgbGVmdDogOHB4O1xuICByaWdodDogOHB4O1xuICBib3R0b206IDMwdmg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCBibGFjaztcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbiN2aWV3cmVuZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG5cbiNqb3VybmV5aW5mbyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAyOHZoO1xuICBmb250LXNpemU6IDh2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b24uam91cm5leWNob2ljZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAycHQgOHB0O1xuICBmb250LXNpemU6IDR2aDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/storyteller/scenes/journey-step/journey-step.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/storyteller/scenes/journey-step/journey-step.component.ts ***!
  \***************************************************************************/
/*! exports provided: JourneyStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JourneyStepComponent", function() { return JourneyStepComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _scene_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scene-renderer */ "./src/app/storyteller/scenes/scene-renderer.ts");
/* harmony import */ var _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../scene-ui/scene-ref */ "./src/app/scene-ui/scene-ref.ts");
/* harmony import */ var _lib_walk_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/walk-renderer */ "./src/app/storyteller/scenes/lib/walk-renderer.ts");





let JourneyStepComponent = class JourneyStepComponent extends _scene_renderer__WEBPACK_IMPORTED_MODULE_2__["SceneRenderer"] {
    constructor(sceneref) {
        super(sceneref);
        this.sceneref = sceneref;
        // TILESBYTERRRAIN = {
        // 	"M": "basetilemountain400.png",
        // 	"H": "basetilehills400.png",
        // 	"F": "basetileforest400.png",
        // 	"P": "basetileplains400.png",
        // };
        this.TILESBYTERRRAIN = {
            "M": "basetilemountain.png",
            "H": "basetilehills.png",
            "F": "basetileforest.png",
            "P": "basetileplains.png",
        };
        this.PATH_TILES = "assets/graph/fptiles/";
        this.MARKERSBYID = {
            "towns": "basetilecitadel.png",
        };
        this.PATH_MARKERS = "assets/graph/fptiles/";
        this.EXTRAIMGS = {
            // "skybgr": "/assets/graph/bgr/sunspearsky.jpg",
            "skybgr": "assets/graph/bgr/sunspearsky_gscale.png"
        };
        this.journeyscene = this.sceneref.scene;
        console.log("journey path: ", JSON.stringify(this.journeyscene.course));
    }
    ngOnInit() {
        // this.loadAssets();
        // this.prepareAssetsHolders();
    }
    ngAfterViewInit() {
        this.viewrenderer = new _lib_walk_renderer__WEBPACK_IMPORTED_MODULE_4__["WalkRenderer"](this.journeyscene.game.worldmap, this.renderview);
        let ui = this;
        this.viewrenderer.loadAssets(function () {
            ui.renderStep();
        });
    }
    setCamp() {
        console.log("clicked SET CAMP");
    }
    continueJourney() {
        console.log("clicked JOURNEY ONWARDs");
        this.journeyscene.step();
        this.journeyscene.game.hero.setCoordinates(this.journeyscene.getCurrentCoordinates());
        if (!this.journeyscene.sceneFinished()) {
            this.renderStep();
        }
        else {
            this.sceneref.triggerSceneCheck();
        }
    }
    renderStep() {
        const vector = this.journeyscene.getStepDirection(this.journeyscene.stepid);
        this.viewrenderer.renderView(this.journeyscene.getCurrentCoordinates(), vector);
    }
    showMap() {
        console.log("clicked SHOW MAP");
    }
    getDirectionDescription() {
        let vector = this.journeyscene.getStepDirection(this.journeyscene.stepid);
        let dirstring = "";
        if (vector[1] > 0) {
            dirstring += "South";
        }
        else if (vector[1] < 0) {
            dirstring += "North";
        }
        if (vector[0] > 0) {
            dirstring += "East";
        }
        else if (vector[0] < 0) {
            dirstring += "West";
        }
        return dirstring;
    }
};
JourneyStepComponent.ctorParameters = () => [
    { type: _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_3__["SceneRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("renderholder", { static: false })
], JourneyStepComponent.prototype, "renderholder", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("renderview", { static: false })
], JourneyStepComponent.prototype, "renderview", void 0);
JourneyStepComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-journey-step',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./journey-step.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/journey-step/journey-step.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./journey-step.component.scss */ "./src/app/storyteller/scenes/journey-step/journey-step.component.scss")).default]
    })
], JourneyStepComponent);



/***/ }),

/***/ "./src/app/storyteller/scenes/lib/walk-renderer.ts":
/*!*********************************************************!*\
  !*** ./src/app/storyteller/scenes/lib/walk-renderer.ts ***!
  \*********************************************************/
/*! exports provided: WalkRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkRenderer", function() { return WalkRenderer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! konva */ "./node_modules/konva/lib/index.js");
/* harmony import */ var konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(konva__WEBPACK_IMPORTED_MODULE_1__);


class WalkRenderer {
    constructor(worldmap, target) {
        // NOTE: these could be configured via a tileset theme
        // TILESBYTERRRAIN = {
        // 	"M": "basetilemountain400.png",
        // 	"H": "basetilehills400.png",
        // 	"F": "basetileforest400.png",
        // 	"P": "basetileplains400.png",
        // };
        this.TILESBYTERRRAIN = {
            "M": "basetilemountain.png",
            "H": "basetilehills.png",
            "F": "basetileforest.png",
            "P": "basetileplains.png",
        };
        this.PATH_TILES = "assets/graph/fptiles/";
        this.MARKERSBYID = {
            "towns": "basetilecitadel.png",
        };
        this.PATH_MARKERS = "assets/graph/fptiles/";
        this.EXTRAIMGS = {
            // "skybgr": "/assets/graph/bgr/sunspearsky.jpg",
            "skybgr": "assets/graph/bgr/sunspearsky_gscale.png"
        };
        this.worldmap = worldmap;
        this.renderview = target;
        console.log(this.renderview);
        console.log("render view id", this.renderview.nativeElement.id);
    }
    loadAssets(callback) {
        this.terraintiles = new Map();
        this.tileimages = new Map();
        this.markerfiles = new Map();
        this.markerimages = new Map();
        this.extrafiles = new Map();
        this.extraimages = new Map();
        for (let key in this.TILESBYTERRRAIN) {
            this.terraintiles.set(key, this.PATH_TILES + this.TILESBYTERRRAIN[key]);
        }
        this.tileimages = new Map();
        for (let terrain of this.terraintiles.keys()) {
            this.tileimages.set(terrain, null);
        }
        for (let key in this.MARKERSBYID) {
            this.markerfiles.set(key, this.PATH_MARKERS + this.MARKERSBYID[key]);
        }
        this.markerimages = new Map();
        for (let markerid of this.markerfiles.keys()) {
            this.markerimages.set(markerid, null);
        }
        for (let key in this.EXTRAIMGS) {
            this.extrafiles.set(key, this.EXTRAIMGS[key]);
        }
        this.extraimages = new Map();
        for (let fileid of this.extrafiles.keys()) {
            this.extraimages.set(fileid, null);
        }
        // LOADING ASSETS
        let ui = this;
        for (let terrain of this.terraintiles.keys()) {
            let imageObj = new Image();
            imageObj.onload = function () {
                ui.tileimages.set(terrain, imageObj);
                ui.checkReadyRender(callback);
            };
            imageObj.src = this.terraintiles.get(terrain);
        }
        for (let markerid of this.markerfiles.keys()) {
            let imageObj = new Image();
            imageObj.onload = function () {
                ui.markerimages.set(markerid, imageObj);
                ui.checkReadyRender(callback);
            };
            imageObj.src = this.markerfiles.get(markerid);
        }
        for (let fileid of this.extrafiles.keys()) {
            let imageObj = new Image();
            imageObj.onload = function () {
                ui.extraimages.set(fileid, imageObj);
                ui.checkReadyRender(callback);
            };
            imageObj.src = this.extrafiles.get(fileid);
        }
    }
    checkReadyRender(callback) {
        for (let terrain of this.tileimages.keys()) {
            if (this.tileimages.get(terrain) == null) {
                // console.log("missing maptile", terrain, "wait");
                return;
            }
        }
        for (let markerid of this.markerimages.keys()) {
            if (this.markerimages.get(markerid) == null) {
                // console.log("missing mapmarker", markerid, "wait");
                return;
            }
        }
        for (let fileid of this.extraimages.keys()) {
            if (this.extraimages.get(fileid) == null) {
                // console.log("missing mapmarker", markerid, "wait");
                return;
            }
        }
        callback();
    }
    renderView(pos, vector) {
        // console.log("rendering step ", this.journeyscene.stepid);
        // const vector = this.journeyscene.getStepDirection(this.journeyscene.stepid);
        // console.log("checking step view in dir ", vector, "from", this.journeyscene.getCurrentCoordinates().getCoords());
        const FOV = 90;
        let rect = this.renderview.nativeElement.getBoundingClientRect();
        console.log("RECT:", rect);
        const VPW = this.renderview.nativeElement.clientWidth;
        const VPH = this.renderview.nativeElement.clientHeight;
        const PANWIDTH = VPW / (FOV / 360);
        console.log("using fov", FOV, "on " + VPW + "*" + VPH + ": pan to " + PANWIDTH + "px");
        const MAXDIST = 9;
        let rendergrid = this.getRenderGrid(pos, vector, MAXDIST);
        let stage = new konva__WEBPACK_IMPORTED_MODULE_1___default.a.Stage({
            container: this.renderview.nativeElement.id,
            width: VPW,
            height: VPH,
        });
        // console.log(rendergrid);
        // NOTE: following works ONLY with 90 FOV
        // also we are actually half step inside each tile but since dist and angle stay the same we ignore
        const HCENTER = VPW * 0.5;
        const VCENTER = VPH * 0.4;
        const PHEIGHT = VPH - VCENTER;
        let tilelayer = new konva__WEBPACK_IMPORTED_MODULE_1___default.a.Layer({});
        stage.add(tilelayer);
        // BGR + CUT
        let bgrimg = this.extraimages.get("skybgr");
        // let filename = terraintiles.get(terrain);
        let bgr = new konva__WEBPACK_IMPORTED_MODULE_1___default.a.Image({
            image: bgrimg,
            x: 0,
            y: 0,
            width: VPW,
            height: VPH * 0.8
        });
        tilelayer.add(bgr);
        let bgrcut = VCENTER + PHEIGHT / MAXDIST;
        let rect1 = new konva__WEBPACK_IMPORTED_MODULE_1___default.a.Rect({
            x: 0,
            y: bgrcut,
            width: VPW,
            height: VPH - (bgrcut),
            fill: 'white',
        });
        // add the shape to the layer
        tilelayer.add(rect1);
        for (let gp of rendergrid) {
            // field size at dist:
            // 1: 1, 2: 3, 3: 5, 4: 7
            // y = x + (x-1)
            let fsize = gp.dist + (gp.dist - 1);
            let gsize = VPH / fsize;
            gsize = VPW / fsize;
            // let relpos = gp.angrel - 0.5;
            // let hpixpos = HCENTER + ();
            let hpixpos = gp.angrel * VPW - (gsize * 0.5);
            hpixpos = VPW - hpixpos - gsize; // fix mirroring
            let vpixpos = (VCENTER + PHEIGHT / gp.dist) - gsize;
            let terrain = this.worldmap.getTerrainAt(gp.coords[0], gp.coords[1]);
            let loc = this.worldmap.getLocationAt(gp.coords);
            if (terrain == null && loc == null) {
                continue;
            }
            let tileimg;
            if (terrain != null) {
                tileimg = this.tileimages.get(terrain);
                // let filename = terraintiles.get(terrain);
                let tile = new konva__WEBPACK_IMPORTED_MODULE_1___default.a.Image({
                    image: tileimg,
                    x: hpixpos,
                    y: vpixpos,
                    width: gsize,
                    height: gsize
                });
                tilelayer.add(tile);
            }
            if (loc != null) {
                tileimg = this.markerimages.get(loc.loctype);
                // let filename = terraintiles.get(terrain);
                let tile = new konva__WEBPACK_IMPORTED_MODULE_1___default.a.Image({
                    image: tileimg,
                    x: hpixpos,
                    y: vpixpos,
                    width: gsize,
                    height: gsize
                });
                tilelayer.add(tile);
            }
        }
        tilelayer.batchDraw();
        function parchifyWhite(imageData) {
            // let ctx = canvas.getContext('2d');
            // let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            let nPixels = imageData.data.length;
            for (let i = 0; i < nPixels; i += 4) {
                let r = imageData.data[i];
                let g = imageData.data[i + 1];
                let b = imageData.data[i + 2];
                let a = imageData.data[i + 3];
                if (a > 200) {
                    // using brightness (0.21 × R) + (0.72 × G) + (0.07 × B)
                    // instead of average ((r + g + b) / 3)
                    imageData.data[i + 3] = 255 - ((0.21 * r) + (0.72 * g) + (0.07 * b));
                }
            }
            //
            // for (let i = 3; i < nPixels; i += 4) {
            // 	if (imageData.data[i] > 0) {
            // 		imageData.data[i] = 255;
            // 	}
            // }
            // ctx.clearRect(0, 0, canvas.width, canvas.height);
            // ctx.putImageData(imageData, 0, 0);
            // return canvas;
        }
        tilelayer.cache();
        tilelayer.filters([parchifyWhite]);
        // tilelayer.filters([Konva.Filters.Brighten]);
        // tilelayer.brightness(0.8);
        tilelayer.batchDraw();
    }
    getRenderGrid(pov, vector, maxdist) {
        // const pov = this.journeyscene.getCurrentCoordinates();
        const povX = pov.x;
        const povY = pov.y;
        // const vector = this.journeyscene.getStepDirection(this.journeyscene.stepid);
        const angle = WalkRenderer.calcAngleDegreesEast(vector[0], vector[1]);
        // base angle is EAST
        const FOV = 90;
        let angmin = ((angle - FOV / 2) + 360) % 360;
        let angmax = ((angle + FOV / 2) + 360) % 360;
        let angflip = angmin > angmax;
        if (angflip) {
            angmax += 360;
        }
        let angv = (angle + 360) % 360;
        let angdiff = angmax - angmin;
        console.log("dir angle is ", angv, "checking between ", angmin, angmax);
        let totvis = 0;
        let tfrom = new Date().getTime();
        let rendergrid = [];
        for (let x = povX - maxdist; x <= povX + maxdist; x++) {
            for (let y = povY - maxdist; y <= povY + maxdist; y++) {
                if (x === povX && y === povY) {
                    continue;
                }
                let deltaX = x - povX;
                let deltaY = y - povY;
                let angr = WalkRenderer.calcAngleDegreesEast(deltaX, deltaY);
                angr = (angr + 360) % 360;
                if (angflip && angr <= 45) {
                    angr += 360;
                }
                if (angmin <= angr && angr <= angmax) {
                    totvis++;
                    let angrel = (angmax - angr) / FOV;
                    let dist = Math.sqrt((Math.pow(deltaX, 2)) + (Math.pow(deltaY, 2)));
                    if (dist <= maxdist) {
                        // we are using a SQUARE box to get the points
                        // console.log(x, y, angr);
                        rendergrid.push({ coords: [x, y], angrel: angrel, dist: dist });
                    }
                }
            }
        }
        let tto = new Date().getTime();
        console.log("tot vis tiles", totvis, tto - tfrom);
        // sorting far to close THEN left to right, second sort is not strictily necessary
        rendergrid.sort(function (a, b) {
            // if (a.dist !== b.dist)
            // {
            // 	return b.dist - a.dist;
            // }
            // else {
            // 	return a.angrel - b.angrel;
            // }
            return b.dist - a.dist;
        });
        return rendergrid;
    }
    static calcAngleDegreesEast(x, y) {
        return Math.atan2(y, x) * 180 / Math.PI;
    }
}


/***/ }),

/***/ "./src/app/storyteller/scenes/roaming-step/roaming-step.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/storyteller/scenes/roaming-step/roaming-step.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#journeyrender {\n  position: fixed;\n  top: 8px;\n  left: 8px;\n  right: 8px;\n  bottom: 30vh;\n  border: 1px dashed black;\n  overflow: auto;\n}\n\n#viewrender {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n#journeyinfo {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 28vh;\n  font-size: 8vh;\n  text-align: center;\n}\n\nbutton.journeychoice {\n  border: 1px solid black;\n  padding: 2pt 8pt;\n  font-size: 4vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RyYWtlL0NvZGUvV2FuZGVyL1dhbmRlckFORy9zcmMvYXBwL3N0b3J5dGVsbGVyL3NjZW5lcy9yb2FtaW5nLXN0ZXAvcm9hbWluZy1zdGVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdG9yeXRlbGxlci9zY2VuZXMvcm9hbWluZy1zdGVwL3JvYW1pbmctc3RlcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVDLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FDQUQ7O0FER0E7RUFFQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNERDs7QURJQTtFQUVDLGVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0FDSEQ7O0FET0E7RUFFQyx1QkFBQTtFQUNBLGdCQUFBO0VBRUEsY0FBQTtBQ05EIiwiZmlsZSI6InNyYy9hcHAvc3Rvcnl0ZWxsZXIvc2NlbmVzL3JvYW1pbmctc3RlcC9yb2FtaW5nLXN0ZXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjam91cm5leXJlbmRlclxue1xuXHRwb3NpdGlvbjpcdFx0Zml4ZWQ7XG5cdHRvcDpcdFx0XHQ4cHg7XG5cdGxlZnQ6XHRcdFx0OHB4O1xuXHRyaWdodDpcdFx0XHQ4cHg7XG5cdGJvdHRvbTpcdFx0XHQzMHZoO1xuXHRib3JkZXI6XHRcdFx0MXB4IGRhc2hlZCBibGFjaztcblx0b3ZlcmZsb3c6XHRcdGF1dG87XG59XG5cbiN2aWV3cmVuZGVyXG57XG5cdHBvc2l0aW9uOlx0XHRhYnNvbHV0ZTtcblx0dG9wOlx0XHRcdDA7XG5cdGxlZnQ6XHRcdFx0MDtcblx0cmlnaHQ6XHRcdFx0MDtcblx0Ym90dG9tOlx0XHRcdDA7XG59XG5cbiNqb3VybmV5aW5mb1xue1xuXHRwb3NpdGlvbjpcdFx0Zml4ZWQ7XG5cdGxlZnQ6XHRcdFx0MDtcblx0cmlnaHQ6XHRcdFx0MDtcblx0Ym90dG9tOlx0XHRcdDA7XG5cdGhlaWdodDpcdFx0XHQyOHZoO1xuXHRmb250LXNpemU6XHRcdDh2aDtcblxuXHR0ZXh0LWFsaWduOlx0XHRjZW50ZXI7XG59XG5cblxuYnV0dG9uLmpvdXJuZXljaG9pY2Vcbntcblx0Ym9yZGVyOlx0XHRcdDFweCBzb2xpZCBibGFjaztcblx0cGFkZGluZzpcdFx0MnB0IDhwdDtcblxuXHRmb250LXNpemU6XHRcdDR2aDtcbn1cbiIsIiNqb3VybmV5cmVuZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDhweDtcbiAgbGVmdDogOHB4O1xuICByaWdodDogOHB4O1xuICBib3R0b206IDMwdmg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCBibGFjaztcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbiN2aWV3cmVuZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG5cbiNqb3VybmV5aW5mbyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAyOHZoO1xuICBmb250LXNpemU6IDh2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b24uam91cm5leWNob2ljZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAycHQgOHB0O1xuICBmb250LXNpemU6IDR2aDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/storyteller/scenes/roaming-step/roaming-step.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/storyteller/scenes/roaming-step/roaming-step.component.ts ***!
  \***************************************************************************/
/*! exports provided: RoamingStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoamingStepComponent", function() { return RoamingStepComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _lib_walk_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/walk-renderer */ "./src/app/storyteller/scenes/lib/walk-renderer.ts");
/* harmony import */ var _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../scene-ui/scene-ref */ "./src/app/scene-ui/scene-ref.ts");
/* harmony import */ var _scene_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scene-renderer */ "./src/app/storyteller/scenes/scene-renderer.ts");





let RoamingStepComponent = class RoamingStepComponent extends _scene_renderer__WEBPACK_IMPORTED_MODULE_4__["SceneRenderer"] {
    constructor(sceneref) {
        super(sceneref);
        this.sceneref = sceneref;
        this.roamingscene = this.sceneref.scene;
        console.log("roaming scene: ", this.roamingscene);
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.viewrenderer = new _lib_walk_renderer__WEBPACK_IMPORTED_MODULE_2__["WalkRenderer"](this.roamingscene.game.worldmap, this.renderview);
        let ui = this;
        this.viewrenderer.loadAssets(function () {
            ui.renderStep();
        });
    }
    renderStep() {
        const vector = this.roamingscene.direction;
        this.viewrenderer.renderView(this.roamingscene.current, vector);
    }
    getDirectionDescription() {
        let vector = this.roamingscene.direction;
        let dirstring = "";
        if (vector[1] > 0) {
            dirstring += "South";
        }
        else if (vector[1] < 0) {
            dirstring += "North";
        }
        if (vector[0] > 0) {
            dirstring += "East";
        }
        else if (vector[0] < 0) {
            dirstring += "West";
        }
        return dirstring;
    }
    getDayOfTravel() {
        return this.roamingscene.steps + 1;
    }
    moveTurnLeft() {
        this.roamingscene.changeDirection(-1);
        this.renderStep();
    }
    moveTurnRight() {
        this.roamingscene.changeDirection(1);
        this.renderStep();
    }
    moveForward() {
        this.roamingscene.stepForward();
        this.roamingscene.game.hero.setCoordinates(this.roamingscene.current);
        if (!this.roamingscene.sceneFinished()) {
            this.renderStep();
        }
        else {
            this.sceneref.triggerSceneCheck();
        }
    }
    actionSetCamp() {
    }
    showMap() {
        // tba
    }
};
RoamingStepComponent.ctorParameters = () => [
    { type: _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_3__["SceneRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("renderholder", { static: false })
], RoamingStepComponent.prototype, "renderholder", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("renderview", { static: false })
], RoamingStepComponent.prototype, "renderview", void 0);
RoamingStepComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-roaming-step',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./roaming-step.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/roaming-step/roaming-step.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./roaming-step.component.scss */ "./src/app/storyteller/scenes/roaming-step/roaming-step.component.scss")).default]
    })
], RoamingStepComponent);



/***/ }),

/***/ "./src/app/storyteller/scenes/scene-renderer.ts":
/*!******************************************************!*\
  !*** ./src/app/storyteller/scenes/scene-renderer.ts ***!
  \******************************************************/
/*! exports provided: SceneRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneRenderer", function() { return SceneRenderer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SceneRenderer {
    constructor(sceneref) {
        this.sceneref = sceneref;
    }
}


/***/ }),

/***/ "./src/app/storyteller/scenes/town-ui/town-ui.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/storyteller/scenes/town-ui/town-ui.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#towninfo {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 48vh;\n  font-size: 8vh;\n  text-align: center;\n}\n\n.movecontrols {\n  border: 1px solid black;\n  padding: 2pt 8pt;\n  font-size: 4vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RyYWtlL0NvZGUvV2FuZGVyL1dhbmRlckFORy9zcmMvYXBwL3N0b3J5dGVsbGVyL3NjZW5lcy90b3duLXVpL3Rvd24tdWkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0b3J5dGVsbGVyL3NjZW5lcy90b3duLXVpL3Rvd24tdWkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQyxlQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFFQSxrQkFBQTtBQ0REOztBREtBO0VBRUMsdUJBQUE7RUFDQSxnQkFBQTtFQUVBLGNBQUE7QUNKRCIsImZpbGUiOiJzcmMvYXBwL3N0b3J5dGVsbGVyL3NjZW5lcy90b3duLXVpL3Rvd24tdWkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdG93bmluZm9cbntcblx0cG9zaXRpb246XHRcdGZpeGVkO1xuXHRsZWZ0Olx0XHRcdDA7XG5cdHJpZ2h0Olx0XHRcdDA7XG5cdGJvdHRvbTpcdFx0XHQwO1xuXHRoZWlnaHQ6XHRcdFx0NDh2aDtcblx0Zm9udC1zaXplOlx0XHQ4dmg7XG5cblx0dGV4dC1hbGlnbjpcdFx0Y2VudGVyO1xufVxuXG5cbi5tb3ZlY29udHJvbHNcbntcblx0Ym9yZGVyOlx0XHRcdDFweCBzb2xpZCBibGFjaztcblx0cGFkZGluZzpcdFx0MnB0IDhwdDtcblxuXHRmb250LXNpemU6XHRcdDR2aDtcbn1cbiIsIiN0b3duaW5mbyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA0OHZoO1xuICBmb250LXNpemU6IDh2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubW92ZWNvbnRyb2xzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDJwdCA4cHQ7XG4gIGZvbnQtc2l6ZTogNHZoO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/storyteller/scenes/town-ui/town-ui.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/storyteller/scenes/town-ui/town-ui.component.ts ***!
  \*****************************************************************/
/*! exports provided: TownUIComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TownUIComponent", function() { return TownUIComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../scene-ui/scene-ref */ "./src/app/scene-ui/scene-ref.ts");
/* harmony import */ var _scene_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scene-renderer */ "./src/app/storyteller/scenes/scene-renderer.ts");
/* harmony import */ var _rpg_engine_scenes_town_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../rpg-engine/scenes/town-nav */ "./src/app/rpg-engine/scenes/town-nav.ts");





let TownUIComponent = class TownUIComponent extends _scene_renderer__WEBPACK_IMPORTED_MODULE_3__["SceneRenderer"] {
    constructor(sceneref) {
        super(sceneref);
        this.sceneref = sceneref;
        this.townscene = this.sceneref.scene;
        console.log("town info: ", JSON.stringify(this.townscene.town));
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    leaveTown() {
        this.townscene.locpoint = _rpg_engine_scenes_town_nav__WEBPACK_IMPORTED_MODULE_4__["TownNav"].LOC_LEAVE;
        this.sceneref.triggerSceneCheck();
    }
};
TownUIComponent.ctorParameters = () => [
    { type: _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_2__["SceneRef"] }
];
TownUIComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-town-ui',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./town-ui.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/town-ui/town-ui.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./town-ui.component.scss */ "./src/app/storyteller/scenes/town-ui/town-ui.component.scss")).default]
    })
], TownUIComponent);



/***/ }),

/***/ "./src/app/storyteller/scenes/world-map-view/world-map-view.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/storyteller/scenes/world-map-view/world-map-view.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#mapholder {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RyYWtlL0NvZGUvV2FuZGVyL1dhbmRlckFORy9zcmMvYXBwL3N0b3J5dGVsbGVyL3NjZW5lcy93b3JsZC1tYXAtdmlldy93b3JsZC1tYXAtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3Rvcnl0ZWxsZXIvc2NlbmVzL3dvcmxkLW1hcC12aWV3L3dvcmxkLW1hcC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUMsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDQUQiLCJmaWxlIjoic3JjL2FwcC9zdG9yeXRlbGxlci9zY2VuZXMvd29ybGQtbWFwLXZpZXcvd29ybGQtbWFwLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwaG9sZGVyXG57XG5cdHBvc2l0aW9uOlx0YWJzb2x1dGU7XG5cdHRvcDpcdFx0MDtcblx0bGVmdDpcdFx0MDtcblx0cmlnaHQ6XHRcdDA7XG5cdGJvdHRvbTpcdFx0MDtcblx0Ly9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL2Fzc2V0cy91aS90ZW1wb3JhcnlwYXJjaG1lbnQuanBnXCIpO1xufVxuXG4iLCIjbWFwaG9sZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/storyteller/scenes/world-map-view/world-map-view.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/storyteller/scenes/world-map-view/world-map-view.component.ts ***!
  \*******************************************************************************/
/*! exports provided: WorldMapViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldMapViewComponent", function() { return WorldMapViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../scene-ui/scene-ref */ "./src/app/scene-ui/scene-ref.ts");
/* harmony import */ var konva__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! konva */ "./node_modules/konva/lib/index.js");
/* harmony import */ var konva__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(konva__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scene_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scene-renderer */ "./src/app/storyteller/scenes/scene-renderer.ts");





let WorldMapViewComponent = class WorldMapViewComponent extends _scene_renderer__WEBPACK_IMPORTED_MODULE_4__["SceneRenderer"] {
    constructor(sceneref) {
        super(sceneref);
        this.sceneref = sceneref;
        this.scenecheck = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.TILESIZE = 48;
        this.TILESBYTERRRAIN = {
            "M": "worldmaptile_mountains_trans.png",
            "H": "worldmaptile_hills_trans.png",
            "F": "worldmaptile_woods_trans.png",
            "P": "worldmaptile_empty.png",
        };
        this.PATH_TILES = "assets/graph/maptiles/";
        this.MARKERSBYID = {
            "towns": "worldmapmarker_castle_trans.png",
            "passes": "worldmapmarker_mountainpass_trans.png",
            "hero": "worldmapmarker_hero_trans.png",
        };
        this.PATH_MARKERS = "assets/graph/mapmarkers/";
        console.log("constructor w sref game ", this.sceneref.game);
        this.mapscene = this.sceneref.scene;
        this.prepareAssetsHolders();
    }
    prepareAssetsHolders() {
        this.terraintiles = new Map();
        this.tileimages = new Map();
        this.markerfiles = new Map();
        this.markerimages = new Map();
        for (let key in this.TILESBYTERRRAIN) {
            this.terraintiles.set(key, this.PATH_TILES + this.TILESBYTERRRAIN[key]);
        }
        this.tileimages = new Map();
        for (let terrain of this.terraintiles.keys()) {
            this.tileimages.set(terrain, null);
        }
        for (let key in this.MARKERSBYID) {
            this.markerfiles.set(key, this.PATH_MARKERS + this.MARKERSBYID[key]);
        }
        this.markerimages = new Map();
        for (let markerid of this.markerfiles.keys()) {
            this.markerimages.set(markerid, null);
        }
    }
    ngOnInit() {
        console.log("starting worldmap w sref game ", this.sceneref);
        this.worldmap = this.sceneref.game.worldmap;
        this.loadAssets();
    }
    ngAfterViewInit() {
        // this.loadAssets();
    }
    loadAssets() {
        let ui = this;
        for (let terrain of this.terraintiles.keys()) {
            let imageObj = new Image();
            imageObj.onload = function () {
                ui.tileimages.set(terrain, imageObj);
                ui.checkReadyRender();
            };
            imageObj.src = this.terraintiles.get(terrain);
        }
        for (let markerid of this.markerfiles.keys()) {
            let imageObj = new Image();
            imageObj.onload = function () {
                ui.markerimages.set(markerid, imageObj);
                ui.checkReadyRender();
            };
            imageObj.src = this.markerfiles.get(markerid);
        }
    }
    checkReadyRender() {
        for (let terrain of this.tileimages.keys()) {
            if (this.tileimages.get(terrain) == null) {
                // console.log("missing maptile", terrain, "wait");
                return;
            }
        }
        for (let markerid of this.markerimages.keys()) {
            if (this.markerimages.get(markerid) == null) {
                // console.log("missing mapmarker", markerid, "wait");
                return;
            }
        }
        // console.log("ready on all terrains");
        this.initRender();
    }
    initRender() {
        const vpw = this.container.nativeElement.offsetWidth;
        const vph = this.container.nativeElement.offsetHeight;
        this.TILESIZE = Math.min(vpw, vph) / 18;
        let tilesX = this.worldmap.sizeX;
        let tilesY = this.worldmap.sizeY;
        let mapWidth = tilesX * this.TILESIZE;
        let mapHeight = tilesY * this.TILESIZE;
        // console.log(this.TILESIZE, tilesX, tilesY, mapWidth, mapHeight);
        let stage = new konva__WEBPACK_IMPORTED_MODULE_3___default.a.Stage({
            container: "mapholder",
            width: mapWidth,
            height: mapHeight,
        });
        let container = this.container.nativeElement;
        let contwidth = container.offsetWidth;
        let contheight = container.offsetHeight;
        // console.log("stage ", contwidth, contheight);
        let bound_sx = -(mapWidth - contwidth);
        let bound_dx = 0;
        let bound_top = -(mapHeight - contheight);
        let bound_bottom = 0;
        // console.log("bounds", bound_sx, bound_top, bound_dx, bound_bottom);
        let tilelayer = new konva__WEBPACK_IMPORTED_MODULE_3___default.a.Layer({
            draggable: true,
            dragBoundFunc: function (pos) {
                // console.log("tilelayer at", tilelayer.x(), tilelayer.y());
                // console.log("mouse at", pos.x, pos.y);
                let x = Math.min(Math.max(bound_sx, pos.x), bound_dx);
                let y = Math.min(Math.max(bound_top, pos.y), bound_bottom);
                return ({
                    x: x,
                    y: y
                });
            }
        });
        stage.add(tilelayer);
        // let ts_a = new Date();
        for (let x = 0; x < tilesX; x++) {
            for (let y = 0; y < tilesY; y++) {
                let terrain = this.worldmap.getTerrainAt(x, y);
                // console.log(x, y, terrain);
                if (terrain != null) {
                    // let imageObj = new Image();
                    // imageObj.src = terraintiles.get(terrain);
                    // let filename = terraintiles.get(terrain);
                    let tile = new konva__WEBPACK_IMPORTED_MODULE_3___default.a.Image({
                        image: this.tileimages.get(terrain),
                        x: x * this.TILESIZE,
                        y: y * this.TILESIZE,
                        width: this.TILESIZE,
                        height: this.TILESIZE,
                    });
                    tilelayer.add(tile);
                    // console.log("added ", tile, x * this.TILESIZE, y * this.TILESIZE);
                }
            }
        }
        // create location markers
        let widget = this;
        let locs = this.worldmap.getAllLocations();
        for (let loc of locs) {
            // console.log("adding location to map: ", loc, "w coords", loc["coords"]);
            // let coords = loc["coords"];
            // let loctype = loc["loctype"];
            let marker = new konva__WEBPACK_IMPORTED_MODULE_3___default.a.Image({
                image: this.markerimages.get(loc.loctype),
                x: loc.pos.x * this.TILESIZE,
                y: loc.pos.y * this.TILESIZE,
                width: this.TILESIZE,
                height: this.TILESIZE,
            });
            // console.log("creating marker at", loc.pos.x, loc.pos.y)
            tilelayer.add(marker);
            marker.on("click", function (ev) {
                console.log("marker click ", ev, "on", this, "for loc", loc);
                widget.chooseDestination(loc);
                ev.cancelBubble = true;
            });
        }
        // create hero marker
        let game = this.sceneref.game;
        let playerpos = game.hero.coordinates.getCoords();
        let imageref = this.markerimages.get("hero");
        // let imagepath = this.markerfiles.get("hero");
        let marker = new konva__WEBPACK_IMPORTED_MODULE_3___default.a.Image({
            image: imageref,
            x: playerpos[0] * this.TILESIZE,
            y: playerpos[1] * this.TILESIZE,
            width: this.TILESIZE,
            height: this.TILESIZE,
        });
        tilelayer.add(marker);
        tilelayer.batchDraw();
        // loclayer.batchDraw();
        // console.log("redraw");
        // console.log("mapdom size", this.mapdom.nativeElement.offsetHeight, this.mapdom.nativeElement.offsetWidth);
        // console.log("container size", this.container.nativeElement.offsetHeight, this.container.nativeElement.offsetWidth);
        let shiftX = playerpos[0] * this.TILESIZE - this.container.nativeElement.offsetWidth / 2;
        let shiftY = playerpos[1] * this.TILESIZE - this.container.nativeElement.offsetHeight / 2;
        tilelayer.setAbsolutePosition({ x: -shiftX, y: -shiftY });
        // console.log("map ready");
    }
    onClose() {
        this.sceneref.close('BYE WORLD MAP');
    }
    chooseDestination(destination) {
        console.log("chose destination ", destination, this.sceneref.scene);
        /*
        Place location =  caller.game.map.getPlace(vtag);
        Position locpos = location.getCoords();

        if ((locpos.x != heropos.x) || (locpos.y != heropos.y))
        {
            caller.startScene(new Journey(caller.game, caller.game.map.getPlace((String)view.getTag())));
        }
        else
        {
            // back to town gate screen, same as back
            caller.startScene(new TownNav(caller.game));
        }
        */
        // TODO: handle back to current
        this.mapscene.setDestination(destination);
        this.sceneref.triggerSceneCheck();
    }
};
WorldMapViewComponent.ctorParameters = () => [
    { type: _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_2__["SceneRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mapview", { static: false })
], WorldMapViewComponent.prototype, "mapdom", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mapholder", { static: false })
], WorldMapViewComponent.prototype, "container", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], WorldMapViewComponent.prototype, "scenecheck", void 0);
WorldMapViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-world-map-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./world-map-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/world-map-view/world-map-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./world-map-view.component.scss */ "./src/app/storyteller/scenes/world-map-view/world-map-view.component.scss")).default]
    })
], WorldMapViewComponent);



/***/ }),

/***/ "./src/app/storyteller/storyteller.component.scss":
/*!********************************************************!*\
  !*** ./src/app/storyteller/storyteller.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#st-page {\n  background-image: url(\"/assets/ui/temporaryparchment.jpg\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RyYWtlL0NvZGUvV2FuZGVyL1dhbmRlckFORy9zcmMvYXBwL3N0b3J5dGVsbGVyL3N0b3J5dGVsbGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdG9yeXRlbGxlci9zdG9yeXRlbGxlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVDLDBEQUFBO0FDQUQiLCJmaWxlIjoic3JjL2FwcC9zdG9yeXRlbGxlci9zdG9yeXRlbGxlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzdC1wYWdlXG57XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvdWkvdGVtcG9yYXJ5cGFyY2htZW50LmpwZ1wiKTtcbn1cbiIsIiNzdC1wYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy91aS90ZW1wb3JhcnlwYXJjaG1lbnQuanBnXCIpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/storyteller/storyteller.component.ts":
/*!******************************************************!*\
  !*** ./src/app/storyteller/storyteller.component.ts ***!
  \******************************************************/
/*! exports provided: StorytellerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorytellerComponent", function() { return StorytellerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _scene_ui_scene_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scene-ui/scene-ui.service */ "./src/app/scene-ui/scene-ui.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _rpg_engine_wander_game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rpg-engine/wander-game */ "./src/app/rpg-engine/wander-game.ts");
/* harmony import */ var _scenes_world_map_view_world_map_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scenes/world-map-view/world-map-view.component */ "./src/app/storyteller/scenes/world-map-view/world-map-view.component.ts");
/* harmony import */ var _rpg_engine_scenes_journey_departure__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rpg-engine/scenes/journey-departure */ "./src/app/rpg-engine/scenes/journey-departure.ts");
/* harmony import */ var _rpg_engine_scenes_journey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rpg-engine/scenes/journey */ "./src/app/rpg-engine/scenes/journey.ts");
/* harmony import */ var _scenes_journey_step_journey_step_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scenes/journey-step/journey-step.component */ "./src/app/storyteller/scenes/journey-step/journey-step.component.ts");
/* harmony import */ var _rpg_engine_world_locs_Town__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../rpg-engine/world/locs/Town */ "./src/app/rpg-engine/world/locs/Town.ts");
/* harmony import */ var _rpg_engine_scenes_town_nav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../rpg-engine/scenes/town-nav */ "./src/app/rpg-engine/scenes/town-nav.ts");
/* harmony import */ var _scenes_town_ui_town_ui_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scenes/town-ui/town-ui.component */ "./src/app/storyteller/scenes/town-ui/town-ui.component.ts");
/* harmony import */ var _rpg_engine_scenes_roaming__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../rpg-engine/scenes/roaming */ "./src/app/rpg-engine/scenes/roaming.ts");
/* harmony import */ var _scenes_roaming_step_roaming_step_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./scenes/roaming-step/roaming-step.component */ "./src/app/storyteller/scenes/roaming-step/roaming-step.component.ts");














let StorytellerComponent = class StorytellerComponent {
    constructor(sceneui, http) {
        this.sceneui = sceneui;
        this.http = http;
    }
    ngOnInit() {
        this.sceneui.bindStoryTellerUI(this);
        this.loadGameData();
    }
    loadGameData() {
        let stui = this;
        _rpg_engine_wander_game__WEBPACK_IMPORTED_MODULE_4__["WanderGame"].loadGame(this.http, function (game) {
            stui.game = game;
            stui.checkReadyGame();
        });
    }
    checkReadyGame() {
        console.log("running Wander Game ", this.game);
        this.checkUpdateSceneRender();
    }
    getLocationSensitiveScene() {
        let ppos = this.game.hero.coordinates;
        let place = this.game.worldmap.getLocationAt(ppos.getCoords());
        console.log("place is town? ", place instanceof _rpg_engine_world_locs_Town__WEBPACK_IMPORTED_MODULE_9__["Town"]);
        let scene = null;
        if (place instanceof _rpg_engine_world_locs_Town__WEBPACK_IMPORTED_MODULE_9__["Town"]) {
            scene = new _rpg_engine_scenes_town_nav__WEBPACK_IMPORTED_MODULE_10__["TownNav"](this.game, place);
        }
        else {
            // if all fails, go to map
            scene = new _rpg_engine_scenes_journey_departure__WEBPACK_IMPORTED_MODULE_6__["JourneyDeparture"](this.game);
        }
        return scene;
    }
    checkUpdateSceneRender() {
        console.log("checkUpdateSceneRender");
        let scene = this.game.getActiveScene();
        console.log("checking update on scene ", scene);
        if (!!scene && scene.sceneFinished()) {
            console.log("having scene finisher");
            scene = scene.getFollowingScene();
            console.log("following scene is ", scene);
        }
        if (!scene) {
            scene = this.getLocationSensitiveScene();
        }
        this.game.setActiveScene(scene);
        console.log("using scene ", scene);
        let renderer = this.getSceneRenderer(scene);
        console.log("opening renderer ", renderer, "for scene", scene);
        let ref = this.sceneui.open(renderer, scene);
        console.log("opened as sceneref", ref);
        ref.afterClosed.subscribe(result => {
            console.log('Closed scene', scene, renderer, "w result", result);
        });
    }
    getSceneRenderer(scene) {
        let renderer;
        if (scene instanceof _rpg_engine_scenes_journey_departure__WEBPACK_IMPORTED_MODULE_6__["JourneyDeparture"]) {
            renderer = _scenes_world_map_view_world_map_view_component__WEBPACK_IMPORTED_MODULE_5__["WorldMapViewComponent"];
        }
        else if (scene instanceof _rpg_engine_scenes_journey__WEBPACK_IMPORTED_MODULE_7__["Journey"]) {
            renderer = _scenes_journey_step_journey_step_component__WEBPACK_IMPORTED_MODULE_8__["JourneyStepComponent"];
        }
        else if (scene instanceof _rpg_engine_scenes_town_nav__WEBPACK_IMPORTED_MODULE_10__["TownNav"]) {
            renderer = _scenes_town_ui_town_ui_component__WEBPACK_IMPORTED_MODULE_11__["TownUIComponent"];
        }
        else if (scene instanceof _rpg_engine_scenes_roaming__WEBPACK_IMPORTED_MODULE_12__["Roaming"]) {
            renderer = _scenes_roaming_step_roaming_step_component__WEBPACK_IMPORTED_MODULE_13__["RoamingStepComponent"];
        }
        return renderer;
    }
};
StorytellerComponent.ctorParameters = () => [
    { type: _scene_ui_scene_ui_service__WEBPACK_IMPORTED_MODULE_2__["SceneUIService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
StorytellerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-storyteller',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./storyteller.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/storyteller.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./storyteller.component.scss */ "./src/app/storyteller/storyteller.component.scss")).default]
    })
], StorytellerComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/drake/Code/Wander/WanderANG/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map