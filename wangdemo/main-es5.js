var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n\t<router-outlet></router-outlet>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/scene-ui/scene-ui.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scene-ui/scene-ui.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"uiwrapper\" (click)=\"onOverlayClicked($event)\">\n\t<ng-template appInsertion> </ng-template>\n</div>\n\n<div id=gamecontrols>\n    \n    <a (click)=\"doLoadGame()\" >LOAD</a>\n        &nbsp;\n\t<a (click)=\"doSaveGame()\" >SAVE</a>\n\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/story-tester/scenes/test-blue-screen/test-blue-screen.component.html": 
        /*!****************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/story-tester/scenes/test-blue-screen/test-blue-screen.component.html ***!
          \****************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"overlay\">\n\t<div class=\"dialog\">\n\t\t<div class=\"scenescreen\">test-blue-screen works!</div>\n\t\t<button (click)=\"onClose()\">BYE!</button>\n\t</div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/story-tester/scenes/test-green-screen/test-green-screen.component.html": 
        /*!******************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/story-tester/scenes/test-green-screen/test-green-screen.component.html ***!
          \******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"overlay\">\n\t<div class=\"dialog\">\n\t\t<div class=\"scenescreen\">test-green-screen works!</div>\n\t\t<button (click)=\"onClose()\">BYE!</button>\n\t</div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/story-tester/story-tester.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/story-tester/story-tester.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"storyteller-outside\">\n\n\t<div id=\"storyteller-tester\">\n\t\t<p>story-tester works!</p>\n\n\n\t\t<div id=\"scenerender-test\"></div>\n\n\n\t\t<button (click)=\"loadGreenScreen()\">GREEN</button>\n\t\t<button (click)=\"loadBlueScreen()\">BLUE</button>\n\t</div>\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/journey-step/journey-step.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/journey-step/journey-step.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"journeyrender\" #renderholder>\n\t<div id=\"viewrender\" #renderview></div>\n</div>\n\n<div id=\"journeyinfo\" #sceneinfo>\n\tTravelling {{getDirectionDescription()}} to {{journeyscene.dest.name}}, day {{journeyscene.stepid}}/{{journeyscene.course.length}};\n\n\t\t<br>\n\n\t<div class=\"journeycontrols\">\n\t\t<button class=\"journeychoice\" (click)=\"setCamp()\">SET CAMP</button> <button class=\"journeychoice\" (click)=\"continueJourney()\">JOURNEY ONWARDS</button> <button class=\"journeychoice\" (click)=\"showMap()\">SHOW MAP</button>\n\n\t</div>\n\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/narration-pages/narration-pages.component.html": 
        /*!*************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/narration-pages/narration-pages.component.html ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"narration_scene\" >\n\t<div id=\"narration_render\">\n\t\t    {{tale.paragraphs[tale.progress]}}\n\t</div>\n</div>\n\n\n\n<div id=\"narration_info\" #sceneinfo>\n\n\n\t<div class=\"narration_controls\">\n\n\t\t<button class=\"pageturn\" *ngIf=\"tale.progress > 0 || !tale.allowReadBack\" (click)=\"readBackwards()\">BACK</button>\n\t\t<button class=\"pageturn\" *ngIf=\"tale.progress < tale.paragraphs.length - 1\" (click)=\"readForward()\">FORWARD</button>\n\t\t<button class=\"pageturn\" *ngIf=\"tale.progress === tale.paragraphs.length - 1\" (click)=\"readOut()\">END</button>\n\t</div>\n\n\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/passage-through/passage-through.component.html": 
        /*!*************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/passage-through/passage-through.component.html ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ng-template *ngIf=\"isTrailing(); then TrailingScene; else AccessScene\">\n\n</ng-template>\n\n<ng-template #AccessScene>\n\n\t<div class=\"trailview\"></div>\n\t<div class=\"trailcontext\">\n\n\t\t<div class=\"traildescdebug\">\n\t\t\tAt the start of {{ trail.passage.name }}, {{trail.passage.length()}} days journey.\n\t\t</div>\n\n\t\t\t<button class=\"trailcontrols\"  (click)=\"journeyOnwards()\">ENTER</button>\n\t\t\t<button class=\"trailcontrols\" (click)=\"leaveTrail()\">LEAVE</button>\n\t</div>\n\n</ng-template>\n\n<ng-template #TrailingScene>\n\n\t<div class=\"trailview\"></div>\n\t<div class=\"trailcontext\">\n\n\t\t<div class=\"traildescdebug\">\n\t\t\tDay {{trail.progress + 1}} of {{trail.passage.length()}} through the {{ trail.passage.name }}.\n\t\t</div>\n\n\t\t<button class=\"trailcontrols\" (click)=\"journeyOnwards()\">FORWARD</button>\n\n\t</div>\n\n\n</ng-template>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/roaming-step/roaming-step.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/roaming-step/roaming-step.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"journeyrender\" #renderholder>\n\t<div id=\"viewrender\" #renderview></div>\n</div>\n\n<div id=\"journeyinfo\" #sceneinfo>\n\tTravelling {{getDirectionDescription()}}, day {{getDayOfTravel()}}<span *ngIf=\"roamingscene.startloc !== null\"> from {{roamingscene.startloc.name}}</span>.\n\n\t\t<br>\n\n\t<div class=\"journeycontrols\">\n\t\t<button class=\"journeychoice\" (click)=\"moveTurnLeft()\">TURN LEFT</button>\n\t\t<button class=\"journeychoice\" (click)=\"moveForward()\">JOURNEY ONWARDS</button>\n\t\t<button class=\"journeychoice\" (click)=\"moveTurnRight()\">TURN RIGHT</button>\n\t\t<br>\n\n\n\t\t<button class=\"journeychoice\" (click)=\"actionSetCamp()\">SET CAMP</button>  <button class=\"journeychoice\" (click)=\"showMap()\">SHOW MAP</button>\n\n\t</div>\n\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/skill-action/skill-action.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/skill-action/skill-action.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"choicescenery\" >\n\t<div id=\"sceneryview\" #scenerender></div>\n</div>\n\n\n\n<div id=\"choiceinfo\" #sceneinfo>\n\n\n\t<div class=\"choicecontrols\" *ngIf=\"narr_done == null\">\n\n\t\t<span>{{this.skilltest.situation}}</span>\n\t\t<br>\n\t\t<span *ngIf=\"narr_fail != null\">\n\t\t\t{{narr_fail}}\n\t\t</span>\n\n\t\t<table>\n\t\t\t<tr *ngFor=\"let option of this.skilltest.options\">\n\t\t\t\t<td style=\"text-align: left\">{{option.description}}</td>\n\t\t\t\t<td>({{option.tried}}/{{option.max_tries}}></td>\n\t\t\t\t<td>\n\t\t\t\t\t<button class=\"skillchoice\" (click)=\"this.tryOption(option, true)\">DO</button>\n\t\t\t\t\t<button class=\"skillchoice\"(click)=\"this.tryOption(option, false)\">FAIL</button>\n<!--\t\t\t\t\t<span (click)=\"this.tryOption(option, true)\">[DO]</span>-->\n<!--\t\t\t\t\t<span (click)=\"this.tryOption(option, false)\">[FAIL]</span>-->\n\t\t\t\t</td>\n\n\t\t\t</tr>\n\t\t</table>\n\n\t\t<!--\n\t\t<ul class=\"choices-prompt\">\n\n\t\t\t<li *ngFor=\"let option of this.skilltest.options\">{{option.description}} ({{option.tried}}/{{option.max_tries}})\n\t\t\t\t<span (click)=\"this.tryOption(option, true)\">[DO]</span>\n\t\t\t\t<span (click)=\"this.tryOption(option, false)\">[FAIL]</span>\n\t\t\t</li>\n\t\t</ul>\n\t\t-->\n\n\t</div>\n\n\t<div class=\"choicecontrols\" *ngIf=\"narr_done != null\">\n\t\t<span>{{this.narr_done}}</span>\n\t\t<ul class=\"choices-prompt\">\n\t\t\t<li><span (click)=\"this.leaveScene()\">[OK]</span></li>\n\t\t</ul>\n\n\t</div>\n\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/story-choice/story-choice.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/story-choice/story-choice.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"choicescenery\" >\n\t<div id=\"sceneryview\" #scenerender></div>\n</div>\n\n\n\n<div id=\"choiceinfo\" #sceneinfo>\n\n\n\t<div class=\"choicecontrols\">\n\n\t\t<span>{{this.choice.prompt}}</span>\n\n\t\t<ul class=\"choices-prompt\">\n\n\t\t\t<li *ngFor=\"let option of this.choice.options\" (click)=\"selectOption(option)\">{{option.description}}</li>\n\t\t</ul>\n\n\n\t</div>\n\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/town-ui/town-ui.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/town-ui/town-ui.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"townscene\" >\n\t<div id=\"locrender\" #locrender></div>\n</div>\n\n\n\n<div id=\"towninfo\" #sceneinfo>\n\n\n\t<div class=\"movecontrols\">\n\n\t\t<span>{{this.localizeTextAsset(this.townscene.currentloc.description)}}</span>\n\n\t\t<ul class=\"townnav-prompt\">\n\t\t\t<li (click)=\"moveToLoc(direction.target)\" *ngFor=\"let direction of this.townscene.currentloc.moves\">{{this.localizeTextAsset(direction.prompt)}}</li>\n\t\t\t<li (click)=\"activatePrompt(task)\" *ngFor=\"let task of this.taskprompts\">{{task.prompt}}</li>\n\t\t</ul>\n\n\n\t</div>\n\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/world-map-view/world-map-view.component.html": 
        /*!***********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/world-map-view/world-map-view.component.html ***!
          \***********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"mapholder\" #mapholder>\n\t<div id=\"maprender\" #mapview></div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/storyteller.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/storyteller.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"st-page\">\n\n\n</div>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _story_tester_story_tester_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./story-tester/story-tester.component */ "./src/app/story-tester/story-tester.component.ts");
            /* harmony import */ var _storyteller_storyteller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storyteller/storyteller.component */ "./src/app/storyteller/storyteller.component.ts");
            var routes = [
                { path: '', redirectTo: '/game', pathMatch: 'full' },
                { path: 'tester', component: _story_tester_story_tester_component__WEBPACK_IMPORTED_MODULE_3__["StoryTesterComponent"] },
                { path: 'game', component: _storyteller_storyteller_component__WEBPACK_IMPORTED_MODULE_4__["StorytellerComponent"] },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'WanderANG';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
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
            /* harmony import */ var _storyteller_scenes_passage_through_passage_through_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./storyteller/scenes/passage-through/passage-through.component */ "./src/app/storyteller/scenes/passage-through/passage-through.component.ts");
            /* harmony import */ var _storyteller_scenes_narration_pages_narration_pages_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./storyteller/scenes/narration-pages/narration-pages.component */ "./src/app/storyteller/scenes/narration-pages/narration-pages.component.ts");
            /* harmony import */ var _storyteller_scenes_story_choice_story_choice_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./storyteller/scenes/story-choice/story-choice.component */ "./src/app/storyteller/scenes/story-choice/story-choice.component.ts");
            /* harmony import */ var _storyteller_scenes_skill_action_skill_action_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./storyteller/scenes/skill-action/skill-action.component */ "./src/app/storyteller/scenes/skill-action/skill-action.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
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
                        _storyteller_scenes_passage_through_passage_through_component__WEBPACK_IMPORTED_MODULE_16__["PassageThroughComponent"],
                        _storyteller_scenes_narration_pages_narration_pages_component__WEBPACK_IMPORTED_MODULE_17__["NarrationPagesComponent"],
                        _storyteller_scenes_story_choice_story_choice_component__WEBPACK_IMPORTED_MODULE_18__["StoryChoiceComponent"],
                        _storyteller_scenes_skill_action_skill_action_component__WEBPACK_IMPORTED_MODULE_19__["SkillActionComponent"],
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
                        _storyteller_scenes_town_ui_town_ui_component__WEBPACK_IMPORTED_MODULE_14__["TownUIComponent"],
                        _storyteller_scenes_passage_through_passage_through_component__WEBPACK_IMPORTED_MODULE_16__["PassageThroughComponent"],
                        _storyteller_scenes_narration_pages_narration_pages_component__WEBPACK_IMPORTED_MODULE_17__["NarrationPagesComponent"],
                        _storyteller_scenes_story_choice_story_choice_component__WEBPACK_IMPORTED_MODULE_18__["StoryChoiceComponent"],
                        _storyteller_scenes_skill_action_skill_action_component__WEBPACK_IMPORTED_MODULE_19__["SkillActionComponent"]
                    ]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/rpg-engine/quests/quest-ref.ts": 
        /*!************************************************!*\
          !*** ./src/app/rpg-engine/quests/quest-ref.ts ***!
          \************************************************/
        /*! exports provided: QuestRef */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestRef", function () { return QuestRef; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _quest_task_condition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quest-task-condition */ "./src/app/rpg-engine/quests/quest-task-condition.ts");
            /* harmony import */ var _wander_scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wander-scene */ "./src/app/rpg-engine/wander-scene.ts");
            /**
             * QuestRef representes a pointer to all quest resources with a specific ID.
             * It contains a number of QuestTaskState object describing the internal "live" state of the quest and can be used by QuestLoader to know which data must be loaded to provide a certain Scene inside it
             */
            var QuestRef = /** @class */ (function () {
                function QuestRef(questid, fileref) {
                    this.questid = questid;
                    this.fileref = fileref;
                    this.conditions = new Map();
                    this.completers = [];
                    this.completed = false;
                    this.states = new Map();
                }
                QuestRef.fromJSON = function (src, fileref) {
                    var generated = new QuestRef(src["questid"], fileref);
                    for (var taskid in src["tasks"]) {
                        var taskraw = src["tasks"][taskid];
                        var taskconditions = [];
                        if (!!taskraw["conditions"]) {
                            for (var _i = 0, _a = taskraw["conditions"]; _i < _a.length; _i++) {
                                var conditionraw = _a[_i];
                                taskconditions.push(_quest_task_condition__WEBPACK_IMPORTED_MODULE_1__["QuestTaskCondition"].fromJSON(conditionraw));
                            }
                        }
                        // an unconditional task would appear ALWAYS
                        if (taskconditions.length > 0) {
                            generated.conditions.set(taskid, taskconditions);
                            generated.states.set(taskid, -1);
                        }
                    }
                    return generated;
                };
                QuestRef.prototype.isTaskCompleted = function (taskid) {
                    return this.states.get(taskid) !== _wander_scene__WEBPACK_IMPORTED_MODULE_2__["WanderScene"].LEAVESTATE_UNFINISHED;
                };
                QuestRef.prototype.setCompletedTask = function (task) {
                    var taskid = task.taskid;
                    // let ctask = this.loadTask(taskid);
                    // TODO: re-add journal entry
                    // this.journal_entry = task.journal_after;
                    var returnstates = task.getReturnStates();
                    // Map<String, Integer> returnstates = ctask.getReturnStates();
                    for (var _i = 0, _a = returnstates.keys(); _i < _a.length; _i++) {
                        var tasksceneid = _a[_i];
                        this.states.set(tasksceneid, returnstates.get(tasksceneid));
                    }
                    if (this.completers.indexOf(taskid) !== -1) {
                        this.completed = true;
                    }
                };
                QuestRef.prototype.getAvailableTasks = function (game) {
                    var available = [];
                    for (var _i = 0, _a = this.conditions.keys(); _i < _a.length; _i++) {
                        var taskid = _a[_i];
                        // let task = this.tasks.get(taskid);
                        // console.log("checking quest task ", taskid, " w conditions", this.conditions, "for ", this.conditions);
                        if ((!this.isTaskCompleted(taskid)) && this.conditions.has(taskid)) {
                            var satisfied = true;
                            for (var _b = 0, _c = this.conditions.get(taskid); _b < _c.length; _b++) {
                                var current = _c[_b];
                                if (!current.verifyCondition(game, this)) {
                                    satisfied = false;
                                    break;
                                }
                            }
                            if (satisfied) {
                                available.push(taskid);
                            }
                        }
                    }
                    return available;
                };
                return QuestRef;
            }());
            /***/ 
        }),
        /***/ "./src/app/rpg-engine/quests/quest-task-condition.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/rpg-engine/quests/quest-task-condition.ts ***!
          \***********************************************************/
        /*! exports provided: QuestTaskCondition, QuestTaskConditionType */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestTaskCondition", function () { return QuestTaskCondition; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestTaskConditionType", function () { return QuestTaskConditionType; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var QuestTaskCondition = /** @class */ (function () {
                function QuestTaskCondition(type, target_value) {
                    this.type = type;
                    this.target = target_value;
                }
                QuestTaskCondition.prototype.verifyCondition = function (game, quest) {
                    // console.log("checking condition ", this, " type ", this.type, " target ", this.target);
                    if (this.type === QuestTaskConditionType.LOCATION) {
                        return this.verifyConditionLocation(game, quest);
                    }
                    else if (this.type === QuestTaskConditionType.COMPLETION) {
                        return this.verifyConditionCompletion(game, quest);
                    }
                    else if (this.type === QuestTaskConditionType.TRIGGER) {
                        return this.verifyConditionTrigger(game, quest);
                    }
                    // no extra case since the enum cannot run over?
                };
                QuestTaskCondition.fromJSON = function (src) {
                    return new QuestTaskCondition(src["test"], src["target"]);
                };
                // NOTE: we might want to subclass conditions if the handling becomes more complex
                QuestTaskCondition.prototype.verifyConditionLocation = function (game, quest) {
                    try {
                        // console.log("matching pos ", game.hero.pos, game.hero.locpos, "w", this.target);
                        var loc = game.worldmap.getLocationById(this.target["locid"]);
                        var hasloc = game.hero.pos != null && game.hero.pos.matches(loc.pos);
                        if (hasloc && this.target["roomid"]) {
                            hasloc = game.hero.locpos["roomid"] === this.target["roomid"];
                        }
                        return hasloc;
                    }
                    catch (err) {
                        console.warn("illegal loc target for location condition: ", this.target);
                        return false;
                    }
                };
                QuestTaskCondition.prototype.verifyConditionCompletion = function (game, quest) {
                    return quest.isTaskCompleted(this.target);
                };
                QuestTaskCondition.prototype.verifyConditionTrigger = function (game, quest) {
                    // technically the TRIGGER condition is implicit so this should not be needed but we keep it just in case
                    return quest.isTaskCompleted(this.target);
                };
                return QuestTaskCondition;
            }());
            var QuestTaskConditionType;
            (function (QuestTaskConditionType) {
                QuestTaskConditionType["LOCATION"] = "location";
                QuestTaskConditionType["TRIGGER"] = "trigger";
                QuestTaskConditionType["COMPLETION"] = "completed";
            })(QuestTaskConditionType || (QuestTaskConditionType = {}));
            /***/ 
        }),
        /***/ "./src/app/rpg-engine/quests/quest-task.ts": 
        /*!*************************************************!*\
          !*** ./src/app/rpg-engine/quests/quest-task.ts ***!
          \*************************************************/
        /*! exports provided: QuestTask */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestTask", function () { return QuestTask; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _scene_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scene-factory */ "./src/app/rpg-engine/scene-factory.ts");
            var QuestTask = /** @class */ (function () {
                function QuestTask(taskid, scene, prompt, journal_after) {
                    this.taskid = taskid;
                    this.scene = scene;
                    this.journal_after = journal_after;
                    this.prompt = prompt;
                    this.completed = false;
                    this.caller = null;
                    this.triggered = null;
                }
                QuestTask.prototype.getReturnStates = function () {
                    var states = new Map();
                    // TODO: handle multiscene per Java example
                    /*
                    if (this.scene instanceof MultiScene)
                    {
                        // this should flatten the hierarchy under it
                        Map<String, Integer> scenestates = ((MultiScene)this.scene).returnStates();
                        for (String sceneid: scenestates.keySet())
                        {
                            String sceneidcombo = this.taskid+"."+sceneid;
                            states.put(sceneidcombo, scenestates.get(sceneid));
                        }
                    }
                    else
                    {
                        states.put(this.taskid, this.scene.returnState());
                    }
                    */
                    states.set(this.taskid, this.scene.returnState());
                    return states;
                };
                QuestTask.prototype.setCaller = function (questref) {
                    this.caller = questref;
                };
                QuestTask.prototype.isCompleted = function () {
                    return this.completed;
                };
                QuestTask.prototype.setCompleted = function () {
                    this.completed = true;
                    if (this.caller != null) {
                        this.caller.setCompletedTask(this);
                    }
                };
                QuestTask.prototype.setTriggered = function (taskid) {
                    this.triggered = taskid;
                };
                QuestTask.fromJSON = function (src) {
                    // NOTE: we may want to generate the scene ON THE FLY later
                    var taskid = src["taskid"];
                    var scene = _scene_factory__WEBPACK_IMPORTED_MODULE_1__["SceneFactory"].fromJSON(src["scene"]);
                    var prompt = src["prompt"];
                    var journal_after = !src["journal_after"] ? src["journal_after"] : null;
                    var task = new QuestTask(taskid, scene, prompt, journal_after);
                    return task;
                };
                return QuestTask;
            }());
            /***/ 
        }),
        /***/ "./src/app/rpg-engine/scene-factory.ts": 
        /*!*********************************************!*\
          !*** ./src/app/rpg-engine/scene-factory.ts ***!
          \*********************************************/
        /*! exports provided: SceneFactory */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneFactory", function () { return SceneFactory; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _scenes_narration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/narration */ "./src/app/rpg-engine/scenes/narration.ts");
            /* harmony import */ var _scenes_branching_meta_scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/branching-meta-scene */ "./src/app/rpg-engine/scenes/branching-meta-scene.ts");
            /* harmony import */ var _scenes_story_branch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/story-branch */ "./src/app/rpg-engine/scenes/story-branch.ts");
            /* harmony import */ var _scenes_skill_test__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scenes/skill-test */ "./src/app/rpg-engine/scenes/skill-test.ts");
            /* harmony import */ var _scenes_struct_wander_scene_trigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scenes/struct/wander-scene-trigger */ "./src/app/rpg-engine/scenes/struct/wander-scene-trigger.ts");
            /* harmony import */ var _scenes_meta_scene__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scenes/meta-scene */ "./src/app/rpg-engine/scenes/meta-scene.ts");
            var SceneFactory = /** @class */ (function () {
                function SceneFactory() {
                }
                SceneFactory.fromJSON = function (src) {
                    var GENERATORS_BYTYPE = {
                        "narrative": SceneFactory.createSceneNarration,
                        "branching": SceneFactory.createSceneBranchingMeta,
                        "choice": SceneFactory.createSceneStoryBranch,
                        "skill": SceneFactory.createSceneSkillTest
                    };
                    // console.log("generating scen from json: ", src["type"], src["data"]);
                    try {
                        return GENERATORS_BYTYPE[src["type"]](src["data"]);
                    }
                    catch (err) {
                        console.error(err);
                        console.warn("cannot yet create scene of type ", src["type"]);
                        return null;
                    }
                };
                // NOTE: we CANNOT put the individual factory methods in the respective classes
                // because some of them will need to use others (e.g. metascenes) and create a circular import
                SceneFactory.createSceneNarration = function (src) {
                    var paragraphs = src["text"];
                    if (!paragraphs) {
                        throw "Narrative type scene needs at least one text paragraph";
                    }
                    // TODO: TBA
                    var title = null;
                    var images = null;
                    return new _scenes_narration__WEBPACK_IMPORTED_MODULE_1__["Narration"](null, null, paragraphs, images);
                };
                SceneFactory.createSceneStoryBranch = function (src) {
                    // console.warn ("generating STORYBRANCH scene from ", src);
                    var generated = new _scenes_story_branch__WEBPACK_IMPORTED_MODULE_3__["StoryBranch"](null);
                    generated.prompt = src["prompt"];
                    for (var _i = 0, _a = src["options"]; _i < _a.length; _i++) {
                        var optdesc = _a[_i];
                        var endstate = optdesc.hasOwnProperty("value") ? optdesc["value"] : 0;
                        var note = optdesc.hasOwnProperty("note") ? optdesc["note"] : null;
                        generated.addOption(optdesc["description"], endstate, note);
                    }
                    generated.setImage(src["image"]);
                    return generated;
                };
                SceneFactory.createSceneSkillTest = function (src) {
                    var scene = new _scenes_skill_test__WEBPACK_IMPORTED_MODULE_4__["SkillTest"](null);
                    if (!!src["description"]) {
                        scene.setDesc(src["description"]);
                    }
                    for (var _i = 0, _a = src["options"]; _i < _a.length; _i++) {
                        var optdesc = _a[_i];
                        scene.addAction(_scenes_skill_test__WEBPACK_IMPORTED_MODULE_4__["SkillTestOption"].fromJSON(optdesc));
                    }
                    if (!!src["image"]) {
                        scene.setImage(src["image"]);
                    }
                    return scene;
                };
                SceneFactory.createSceneMeta = function (src) {
                    var generated = new _scenes_meta_scene__WEBPACK_IMPORTED_MODULE_6__["MetaScene"](null);
                    for (var _i = 0, _a = src["scenes"]; _i < _a.length; _i++) {
                        var json_scene = _a[_i];
                        var sceneid = json_scene["id"];
                        var scene = SceneFactory.fromJSON(json_scene);
                        // console.log("Generated sceneobject ", scene, " w id " + sceneid);
                        scene.setNarrative(generated);
                        if (scene != null) {
                            generated.addScene(scene, sceneid);
                        }
                    }
                    for (var key in src["triggers"]) {
                        generated.setTrigger(key, src["triggers"][key]);
                    }
                    generated.setStarter(src["starter"]);
                    return generated;
                };
                SceneFactory.createSceneBranchingMeta = function (src) {
                    var generated = new _scenes_branching_meta_scene__WEBPACK_IMPORTED_MODULE_2__["BranchingMetaScene"](null);
                    // console.log("Creating BMS from ", src);
                    for (var _i = 0, _a = src["scenes"]; _i < _a.length; _i++) {
                        var json_scene = _a[_i];
                        var sceneid = json_scene["id"];
                        var scene = SceneFactory.fromJSON(json_scene);
                        // console.log("QUEST", "Generated sceneobject ", scene, " w id " + sceneid);
                        if (scene != null) {
                            scene.setNarrative(generated);
                            generated.addScene(scene, sceneid);
                        }
                    }
                    for (var sceneid in src["triggers"]) {
                        var trigger = _scenes_struct_wander_scene_trigger__WEBPACK_IMPORTED_MODULE_5__["WanderSceneTrigger"].fromJSON(src["triggers"][sceneid]);
                        generated.setTriggered(sceneid, trigger);
                    }
                    generated.setStarter(src["starter"]);
                    return generated;
                };
                return SceneFactory;
            }());
            /***/ 
        }),
        /***/ "./src/app/rpg-engine/scenes/branching-meta-scene.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/rpg-engine/scenes/branching-meta-scene.ts ***!
          \***********************************************************/
        /*! exports provided: BranchingMetaScene */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchingMetaScene", function () { return BranchingMetaScene; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _wander_scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wander-scene */ "./src/app/rpg-engine/wander-scene.ts");
            /* harmony import */ var _meta_scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meta-scene */ "./src/app/rpg-engine/scenes/meta-scene.ts");
            var BranchingMetaScene = /** @class */ (function (_super) {
                __extends(BranchingMetaScene, _super);
                function BranchingMetaScene(game) {
                    var _this = _super.call(this, game) || this;
                    _this.initStructure();
                    return _this;
                }
                BranchingMetaScene.prototype.initStructure = function () {
                    this.subs = new Map();
                    this.triggers_byscene = new Map();
                    this.returncodes = new Map();
                    this.starter = null;
                    this.activesub = null;
                };
                BranchingMetaScene.prototype.setTriggered = function (sceneid, trigger) {
                    this.triggers_byscene.set(sceneid, trigger);
                };
                BranchingMetaScene.prototype.moveOn = function () {
                    // NOTE: this method ASSUMES we have a sceneFinished call returning true right before
                    console.log("Quest/BranchingScene: MetaScene " + this + " MoveOn from " + this.activesub);
                    this.returncodes.set(this.activesub, this.getCurrent().returnState());
                    // switches to the next scene in the flow
                    // NOTE: it takes the FIRST active trigger, conflicts are not handled
                    this.activesub = null;
                    for (var _i = 0, _a = this.triggers_byscene.keys(); _i < _a.length; _i++) {
                        var candidate = _a[_i];
                        var trigger = this.triggers_byscene.get(candidate);
                        var candidatestate = this.returncodes.get(candidate);
                        if (trigger.isActive(this.returncodes) && candidatestate === _wander_scene__WEBPACK_IMPORTED_MODULE_1__["WanderScene"].LEAVESTATE_UNFINISHED) {
                            // we have triggered a new scene
                            this.activesub = candidate;
                        }
                    }
                    console.log("Quest/MetaScene", "MetaScene " + this + " MoveOn to " + this.activesub);
                };
                return BranchingMetaScene;
            }(_meta_scene__WEBPACK_IMPORTED_MODULE_2__["MetaScene"]));
            /***/ 
        }),
        /***/ "./src/app/rpg-engine/scenes/journey-departure.ts": 
        /*!********************************************************!*\
          !*** ./src/app/rpg-engine/scenes/journey-departure.ts ***!
          \********************************************************/
        /*! exports provided: JourneyDeparture */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JourneyDeparture", function () { return JourneyDeparture; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _wander_scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wander-scene */ "./src/app/rpg-engine/wander-scene.ts");
            /* harmony import */ var _roaming__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roaming */ "./src/app/rpg-engine/scenes/roaming.ts");
            /* harmony import */ var _world_world_position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../world/world-position */ "./src/app/rpg-engine/world/world-position.ts");
            var JourneyDeparture = /** @class */ (function (_super) {
                __extends(JourneyDeparture, _super);
                function JourneyDeparture(game) {
                    var _this = _super.call(this, game) || this;
                    _this.worldmap = game.worldmap;
                    return _this;
                }
                JourneyDeparture.prototype.sceneFinished = function () {
                    return !!this.destination;
                };
                JourneyDeparture.prototype.setDestination = function (dest) {
                    // let startingpos = this.game.hero.coordinates;
                    // let destcoords = dest["coords"];
                    this.destination = dest;
                };
                JourneyDeparture.prototype.getFollowingScene = function () {
                    var next = null;
                    if (!this.destination.matchesPosition(this.game.hero.pos)) {
                        var direction = _world_world_position__WEBPACK_IMPORTED_MODULE_3__["WorldPosition"].getRelativeGeneralDirection(this.game.hero.pos, this.destination.pos);
                        next = new _roaming__WEBPACK_IMPORTED_MODULE_2__["Roaming"](this.game, this.game.hero.pos, direction);
                        // next.setStops(this.game.hero.coordinates, this.destination["coords"]);
                    }
                    return next;
                };
                return JourneyDeparture;
            }(_wander_scene__WEBPACK_IMPORTED_MODULE_1__["WanderScene"]));
            /***/ 
        }),
        /***/ "./src/app/rpg-engine/scenes/journey.ts": 
        /*!**********************************************!*\
          !*** ./src/app/rpg-engine/scenes/journey.ts ***!
          \**********************************************/
        /*! exports provided: Journey */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Journey", function () { return Journey; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _wander_scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wander-scene */ "./src/app/rpg-engine/wander-scene.ts");
            var Journey = /** @class */ (function (_super) {
                __extends(Journey, _super);
                // NOTE that start is optional and will default to player's position
                function Journey(game, dest, start) {
                    var _this = _super.call(this, game) || this;
                    _this.start = !start ? game.hero.pos : start;
                    _this.dest = dest;
                    _this.course = game.worldmap.getCourse(_this.start, _this.dest.pos);
                    _this.stepid = 0;
                    return _this;
                }
                // TODO: add support for custom stops in case the player can  (interpolating)
                Journey.prototype.step = function () {
                    this.stepid++;
                };
                Journey.prototype.getCurrentCoordinates = function () {
                    if (this.stepid < this.course.length) {
                        return this.course[this.stepid];
                    }
                    else {
                        return this.dest.pos;
                    }
                };
                Journey.prototype.sceneFinished = function () {
                    return this.stepid >= this.course.length;
                };
                Journey.prototype.getStepDirection = function (stepid) {
                    var cpos = this.course[stepid];
                    var nextpos = stepid + 1 < this.course.length ? this.course[stepid + 1] : this.dest.pos;
                    return [nextpos.x - cpos.x, nextpos.y - cpos.y];
                };
                return Journey;
            }(_wander_scene__WEBPACK_IMPORTED_MODULE_1__["WanderScene"]));
            /***/ 
        }),
        /***/ "./src/app/rpg-engine/scenes/meta-scene.ts": 
        /*!*************************************************!*\
          !*** ./src/app/rpg-engine/scenes/meta-scene.ts ***!
          \*************************************************/
        /*! exports provided: MetaScene */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaScene", function () { return MetaScene; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _struct_multi_scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./struct/multi-scene */ "./src/app/rpg-engine/scenes/struct/multi-scene.ts");
            /* harmony import */ var _wander_scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wander-scene */ "./src/app/rpg-engine/wander-scene.ts");
            /**
             *  MetaScene is a Scene that contains several different scenes and has a logic to connect them all
             *  as such it seems to transparently work like a normal scene, but its getFollowing checks on the internal scene graph before giving back the narrative.
             *  Technically each sub-scene is the current active scene except all calls are mediated by the MetaScene above them
             *  NOTE: due to how this works the MetaScene cannot be leaved, the same as with a normal scene.
             *  While it incorporates several scenes, for the purpose of the game all of these act as a single multi-interface scene
             */
            var MetaScene = /** @class */ (function (_super) {
                __extends(MetaScene, _super);
                // NOTE: the following may not be needed for now since we check getFollowing
                // only after checking that the current scene is finished. Keep in mind this can be easily
                // broken if the storyteller flow gets messed up. WATCH THIS FOR DEBUG then
                // completion status IF COMPLETED ONLY is set in this map for quicker checking
                // when the trigger sequence is rechecked so we can quickly see if the whole chain is complete
                // NOTE: we use a map because in the future conditions may be more complex and we may have
                // chains completed without all possible scenes completed
                // (or we could template the thing so we create a complex set of scene but only enable
                // chaining on a subset of them)
                // private Map<String, Boolean> completion;
                function MetaScene(game) {
                    var _this = _super.call(this, game) || this;
                    _this.initStructure();
                    return _this;
                }
                MetaScene.prototype.initStructure = function () {
                    this.subs = new Map();
                    this.triggers = new Map();
                    this.returncodes = new Map();
                    this.starter = null;
                    this.activesub = null;
                };
                MetaScene.prototype.getFollowing = function () {
                    this.moveOn();
                    if (this.subs.has(this.activesub)) {
                        return this;
                    }
                    else {
                        return this.getNarrative();
                    }
                };
                MetaScene.prototype.getCurrent = function () {
                    var current = this.getSceneById(this.activesub);
                    if (current instanceof _struct_multi_scene__WEBPACK_IMPORTED_MODULE_1__["MultiScene"]) {
                        var ms = current;
                        return ms.getCurrent();
                    }
                    else {
                        return current;
                    }
                };
                MetaScene.prototype.returnStates = function () {
                    return this.returncodes;
                };
                MetaScene.prototype.sceneFinished = function () {
                    return this.activesub == null || this.getSceneById(this.activesub).sceneFinished();
                };
                // addScene, setTrigger, setStarter are separated
                // so it's easier to use factory methods or static fromjson creators
                MetaScene.prototype.addScene = function (candidate, sceneid) {
                    this.subs.set(sceneid, candidate);
                    this.returncodes.set(sceneid, _wander_scene__WEBPACK_IMPORTED_MODULE_2__["WanderScene"].LEAVESTATE_UNFINISHED);
                };
                MetaScene.prototype.setTrigger = function (triggerer, triggered) {
                    this.triggers.set(triggerer, triggered);
                };
                MetaScene.prototype.setStarter = function (sceneid) {
                    console.log("Quest/MetaScene", "Setting starter for metascene to " + sceneid);
                    this.starter = sceneid;
                    if (this.activesub == null) {
                        this.activesub = this.starter;
                    }
                };
                MetaScene.prototype.getSceneById = function (sceneid) {
                    console.log("Loading META SUB scene " + sceneid + " from ", this.subs);
                    try {
                        return this.subs.get(sceneid);
                    }
                    catch (err) {
                        console.warn("error retrieving sub " + sceneid + ": ", err);
                        return null;
                    }
                };
                MetaScene.prototype.moveOn = function () {
                    // NOTE: this method ASSUMES we have a sceneFinished call returning true right before
                    console.warn("Quest/MetaScene", "MetaScene " + this + " MoveOn from " + this.activesub);
                    // retrieving and adding return codes for subscenes if current active is a MultiScene
                    var active = this.subs.get(this.activesub);
                    if (active instanceof _struct_multi_scene__WEBPACK_IMPORTED_MODULE_1__["MultiScene"]) {
                        var ms = active;
                        var states = ms.returnStates();
                        for (var _i = 0, _a = states.keys(); _i < _a.length; _i++) {
                            var sceneid = _a[_i];
                            var sceneidcombo = this.activesub + "." + sceneid;
                            this.returncodes.set(sceneidcombo, states.get(sceneid));
                        }
                    }
                    this.returncodes.set(this.activesub, active.returnState());
                    // switches to the next scene in the flow
                    // so we can remove flow control from getFollowing
                    if (this.triggers.has(this.activesub)) {
                        // we have triggered a new scene
                        this.activesub = this.triggers.get(this.activesub);
                    }
                    else {
                        // there was already no active subscene OR we are at the end of our trigger chain
                        this.activesub = null;
                    }
                    console.log("Quest/MetaScene", "MetaScene " + this + " MoveOn to " + this.activesub);
                };
                return MetaScene;
            }(_struct_multi_scene__WEBPACK_IMPORTED_MODULE_1__["MultiScene"]));
            /***/ 
        }),
        /***/ "./src/app/rpg-engine/scenes/narration.ts": 
        /*!************************************************!*\
          !*** ./src/app/rpg-engine/scenes/narration.ts ***!
          \************************************************/
        /*! exports provided: Narration */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Narration", function () { return Narration; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _wander_scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wander-scene */ "./src/app/rpg-engine/wander-scene.ts");
            var Narration = /** @class */ (function (_super) {
                __extends(Narration, _super);
                function Narration(game, title, paragraphs, images) {
                    if (images === void 0) { images = []; }
                    var _this = _super.call(this, game) || this;
                    _this.progress = 0;
                    _this.allowReadBack = true;
                    _this.keepTitleOn = true;
                    _this.paragraphs = paragraphs;
                    _this.images = images;
                    _this.title = title;
                    return _this;
                }
                Narration.prototype.sceneFinished = function () {
                    return this.progress >= this.paragraphs.length - 1;
                };
                Narration.prototype.advanceNarration = function () {
                    this.progress = Math.min(this.progress + 1, this.paragraphs.length - 1);
                };
                Narration.prototype.backtrackNarration = function () {
                    this.progress = Math.max(this.progress - 1, 0);
                };
                Narration.prototype.getCurrent = function () {
                    return this.paragraphs[this.progress];
                };
                return Narration;
            }(_wander_scene__WEBPACK_IMPORTED_MODULE_1__["WanderScene"]));
            /***/ 
        }),
        /***/ "./src/app/rpg-engine/scenes/passage-trail.ts": 
        /*!****************************************************!*\
          !*** ./src/app/rpg-engine/scenes/passage-trail.ts ***!
          \****************************************************/
        /*! exports provided: PassageTrail */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassageTrail", function () { return PassageTrail; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _wander_scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wander-scene */ "./src/app/rpg-engine/wander-scene.ts");
            /* harmony import */ var _journey_departure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./journey-departure */ "./src/app/rpg-engine/scenes/journey-departure.ts");
            var PassageTrail = /** @class */ (function (_super) {
                __extends(PassageTrail, _super);
                function PassageTrail(game, passage, started) {
                    if (started === void 0) { started = false; }
                    var _this = _super.call(this, game) || this;
                    _this.passage = passage;
                    // progress is the speed, negative allows to go back and reverse
                    _this.resetTrail(started);
                    _this.days = 0;
                    _this.leaving = false;
                    return _this;
                }
                PassageTrail.prototype.resetTrail = function (started) {
                    if (started === void 0) { started = false; }
                    var reversed = this.passage.exitpoint.matches(this.game.hero.pos);
                    this.trail_start = reversed ? this.passage.exitpoint : this.passage.pos;
                    this.trail_end = reversed ? this.passage.pos : this.passage.exitpoint;
                    this.trail_length = this.passage.length();
                    this.progress = started ? 0 : -1;
                };
                PassageTrail.prototype.sceneFinished = function () {
                    // boolean set by UI
                    console.log("is at exit? " + this.isAtExitPoint() + "is leaving? " + this.leaving);
                    return this.isAtExitPoint() && this.leaving;
                };
                PassageTrail.prototype.getFollowingScene = function () {
                    return new _journey_departure__WEBPACK_IMPORTED_MODULE_2__["JourneyDeparture"](this.game);
                };
                PassageTrail.prototype.isAtExitPoint = function () {
                    return this.progress === -1 || this.progress === this.passage.length();
                };
                PassageTrail.prototype.step = function () {
                    this.progress += 1;
                    // this.progress += direction;
                    this.progress = Math.min(Math.max(this.progress, -1), this.passage.length());
                    if (this.progress === this.passage.length()) {
                        this.game.hero.setCoordinates(this.trail_end);
                        this.resetTrail();
                    }
                };
                return PassageTrail;
            }(_wander_scene__WEBPACK_IMPORTED_MODULE_1__["WanderScene"]));
            /***/ 
        }),
        /***/ "./src/app/rpg-engine/scenes/roaming.ts": 
        /*!**********************************************!*\
          !*** ./src/app/rpg-engine/scenes/roaming.ts ***!
          \**********************************************/
        /*! exports provided: Roaming */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roaming", function () { return Roaming; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _wander_scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wander-scene */ "./src/app/rpg-engine/wander-scene.ts");
            var Roaming = /** @class */ (function (_super) {
                __extends(Roaming, _super);
                // NOTE that start is optional and will default to player's position, direction to N?
                function Roaming(game, start, direction) {
                    var _this = _super.call(this, game) || this;
                    _this.direction = !direction ? [0, -1] : direction;
                    _this.start = !start ? _this.game.hero.pos : start;
                    _this.current = _this.start;
                    _this.steps = 0;
                    _this.startloc = _this.game.worldmap.getLocationAt(_this.start.getCoords());
                    return _this;
                }
                Roaming.prototype.sceneFinished = function () {
                    // scene ends when you reach a Place
                    return this.game.worldmap.getLocationAt(this.current.getCoords()) != null;
                };
                Roaming.prototype.stepInto = function (pos) {
                    this.direction = [pos.x - this.current.x, pos.y - this.current.y];
                    this.current = pos;
                };
                Roaming.prototype.stepForward = function () {
                    this.steps++;
                    this.stepInto(this.current.getShifted(this.direction[0], this.direction[1]));
                };
                Roaming.prototype.getCurrentDirectionIndex = function () {
                    for (var i = 0; i < Roaming.DIRECTIONS.length; i++) {
                        if (Roaming.DIRECTIONS[i][0] === this.direction[0] && Roaming.DIRECTIONS[i][1] === this.direction[1]) {
                            return i;
                        }
                    }
                    return null;
                };
                // steps are in CLOCKWISE order
                Roaming.prototype.changeDirection = function (steps) {
                    var cidx = this.getCurrentDirectionIndex();
                    var nidx = (cidx + Roaming.DIRECTIONS.length + steps) % Roaming.DIRECTIONS.length;
                    this.direction = Roaming.DIRECTIONS[nidx];
                };
                return Roaming;
            }(_wander_scene__WEBPACK_IMPORTED_MODULE_1__["WanderScene"]));
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
            /***/ 
        }),
        /***/ "./src/app/rpg-engine/scenes/skill-test.ts": 
        /*!*************************************************!*\
          !*** ./src/app/rpg-engine/scenes/skill-test.ts ***!
          \*************************************************/
        /*! exports provided: SkillTest, SkillTestOption */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillTest", function () { return SkillTest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillTestOption", function () { return SkillTestOption; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _wander_scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wander-scene */ "./src/app/rpg-engine/wander-scene.ts");
            var SkillTest = /** @class */ (function (_super) {
                __extends(SkillTest, _super);
                function SkillTest(game) {
                    var _this = _super.call(this, game) || this;
                    // a skill test is a scene in which the player is given a set of possible skill throws, each with its own return code
                    _this.options = [];
                    _this.canleave = true;
                    _this.success = 0;
                    _this.played = false;
                    _this.image = null;
                    return _this;
                }
                SkillTest.prototype.sceneFinished = function () {
                    console.log("checking scene finished for SkillTest", this.played);
                    return this.played;
                };
                SkillTest.prototype.setImage = function (filename) {
                    this.image = filename;
                };
                SkillTest.prototype.returnState = function () {
                    // 0 is not finished/played yet
                    // all alternatives are X for success, -X for failure
                    // TODO: add other standard return codes (plus handling for custom results)
                    // also see the addAction todo note
                    // NOTE: Leaving the skilltest without trying (when allowed by the scene design)
                    // implies getting a status of 0 and a sceneFinished = True
                    // TODO: find a way to set this
                    return this.success;
                };
                SkillTest.prototype.setDesc = function (situation) {
                    this.situation = situation;
                };
                SkillTest.prototype.setCanLeave = function (allow) {
                    this.canleave = allow;
                };
                SkillTest.prototype.addAction = function (option) {
                    this.options.push(option);
                };
                SkillTest.prototype.playActionDebug = function (option, succeed) {
                    // ONLY for debug, dev can force success or fail while we develop and balance the skill system
                    if (succeed) {
                        this.success = option.returncode;
                        this.played = true;
                        return true;
                    }
                    else {
                        // 0 is infinitely repeatable
                        if (!option.isInfinitelyRepeatable()) {
                            option.addTry();
                            if (!option.isStillRepeatable()) {
                                this.success = -option.returncode;
                                this.played = true;
                            }
                        }
                        return false;
                    }
                };
                SkillTest.prototype.playAction = function (option, rules, user) {
                    // TODO: get SkillSystem and AgentEntity from game
                    var actionid = option.skillactionid;
                    var target = option.target;
                    var performance = rules.applySkill(actionid, user);
                    if (performance >= target) {
                        this.success = option.returncode;
                        this.played = true;
                        return true;
                    }
                    else {
                        // 0 is infinitely repeatable
                        if (!option.isInfinitelyRepeatable()) {
                            option.addTry();
                            if (!option.isStillRepeatable()) {
                                this.success = -option.returncode;
                                this.played = true;
                            }
                        }
                        return false;
                    }
                };
                SkillTest.prototype.leaveAction = function () {
                    this.played = true;
                    // redundant, for clarity
                    this.success = 0;
                };
                return SkillTest;
            }(_wander_scene__WEBPACK_IMPORTED_MODULE_1__["WanderScene"]));
            var SkillTestOption = /** @class */ (function () {
                function SkillTestOption(skillactionid, target) {
                    this.skillactionid = skillactionid;
                    this.target = target;
                    // default is infinite retries
                    this.max_tries = 0;
                    this.tried = 0;
                }
                SkillTestOption.prototype.addTry = function () {
                    this.tried++;
                };
                SkillTestOption.prototype.isStillRepeatable = function () {
                    return this.max_tries != 0 || this.tried < this.max_tries;
                };
                SkillTestOption.prototype.isRepeatable = function () {
                    return this.max_tries != 1;
                };
                SkillTestOption.prototype.isInfinitelyRepeatable = function () {
                    return this.max_tries == 0;
                };
                SkillTestOption.prototype.setRepeatable = function (max_tries) {
                    this.max_tries = max_tries;
                };
                SkillTestOption.prototype.setText = function (description, success, failure) {
                    this.description = description;
                    this.story_success = success;
                    this.story_failure = failure;
                };
                SkillTestOption.prototype.getFeedbackSuccess = function () {
                    if (this.story_success != null) {
                        return this.story_success;
                    }
                    else {
                        return "You succeed";
                    }
                };
                SkillTestOption.prototype.getFeedbackFailure = function () {
                    if (this.story_failure != null) {
                        return this.story_failure;
                    }
                    else {
                        return "You failed";
                    }
                };
                SkillTestOption.prototype.getDescription = function () {
                    if (this.description != null) {
                        return this.description;
                    }
                    else {
                        return "Try your " + this.skillactionid + " ability";
                    }
                };
                SkillTestOption.fromJSON = function (src) {
                    var actionid = src["action"];
                    var target = src["target"];
                    var created = new SkillTestOption(actionid, target);
                    if (src.hasOwnProperty("repeatable")) {
                        created.setRepeatable(src["repeat"]);
                    }
                    var description = !!src["prompt"] ? src["prompt"] : "Use your ability at " + actionid;
                    var success = !!src["success"] ? src["successs"] : "Succeded in " + actionid;
                    var failure = !!src["failure"] ? src["failure"] : "Failed at " + actionid;
                    created.setText(description, success, failure);
                    // note that the match does not get LEAVESTATE_FINISHED as a value, but falls back to it anyway
                    created.returncode = !!src["returncode"] ? src["returncode"] : _wander_scene__WEBPACK_IMPORTED_MODULE_1__["WanderScene"].LEAVESTATE_FINISHED;
                    return created;
                };
                return SkillTestOption;
            }());
            /***/ 
        }),
        /***/ "./src/app/rpg-engine/scenes/story-branch.ts": 
        /*!***************************************************!*\
          !*** ./src/app/rpg-engine/scenes/story-branch.ts ***!
          \***************************************************/
        /*! exports provided: StoryBranch */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryBranch", function () { return StoryBranch; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _wander_scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wander-scene */ "./src/app/rpg-engine/wander-scene.ts");
            var StoryBranch = /** @class */ (function (_super) {
                __extends(StoryBranch, _super);
                function StoryBranch(game) {
                    var _this = 
                    // a skill test is a scene in which the player is given a set of possible skill throws, each with its own return code
                    _super.call(this, game) || this;
                    _this.prompt = null;
                    _this.options = [];
                    // this.options = new Map<number, number>();
                    // this.descriptions = new Map<number, string>();
                    // this.notes = new Map<number, string>();
                    _this.selected = null;
                    _this.image = null;
                    return _this;
                }
                StoryBranch.prototype.sceneFinished = function () {
                    return this.returnState() !== _wander_scene__WEBPACK_IMPORTED_MODULE_1__["WanderScene"].LEAVESTATE_UNFINISHED;
                };
                StoryBranch.prototype.setImage = function (filename) {
                    this.image = filename;
                };
                StoryBranch.prototype.addOption = function (desc, endstate, note) {
                    if (endstate === void 0) { endstate = 0; }
                    if (note === void 0) { note = null; }
                    var nextcode = this.options.length + 1;
                    this.options.push({
                        optionid: nextcode,
                        leavestate: endstate,
                        description: desc,
                        notes: note
                    });
                };
                StoryBranch.prototype.setSelected = function (opt) {
                    this.selected = opt;
                };
                StoryBranch.prototype.returnState = function () {
                    return !!this.selected ? this.selected.leavestate : -1;
                };
                return StoryBranch;
            }(_wander_scene__WEBPACK_IMPORTED_MODULE_1__["WanderScene"]));
            /***/ 
        }),
        /***/ "./src/app/rpg-engine/scenes/struct/multi-scene.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/rpg-engine/scenes/struct/multi-scene.ts ***!
          \*********************************************************/
        /*! exports provided: MultiScene */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiScene", function () { return MultiScene; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _wander_scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../wander-scene */ "./src/app/rpg-engine/wander-scene.ts");
            var MultiScene = /** @class */ (function (_super) {
                __extends(MultiScene, _super);
                function MultiScene() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return MultiScene;
            }(_wander_scene__WEBPACK_IMPORTED_MODULE_1__["WanderScene"]));
            /***/ 
        }),
        /***/ "./src/app/rpg-engine/scenes/struct/wander-scene-trigger-condition.ts": 
        /*!****************************************************************************!*\
          !*** ./src/app/rpg-engine/scenes/struct/wander-scene-trigger-condition.ts ***!
          \****************************************************************************/
        /*! exports provided: WanderSceneTriggerCondition */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WanderSceneTriggerCondition", function () { return WanderSceneTriggerCondition; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _wander_scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../wander-scene */ "./src/app/rpg-engine/wander-scene.ts");
            var WanderSceneTriggerCondition = /** @class */ (function () {
                function WanderSceneTriggerCondition(sceneid, valuestate, mustmeet) {
                    this.sceneid = sceneid;
                    this.statevalue = valuestate;
                    this.mustmeet = mustmeet;
                }
                WanderSceneTriggerCondition.prototype.checkCondition = function (leavestates) {
                    var leavestate = leavestates.has(this.sceneid) ? leavestates.get(this.sceneid) : _wander_scene__WEBPACK_IMPORTED_MODULE_1__["WanderScene"].LEAVESTATE_UNFINISHED;
                    return this.mustmeet ? leavestate === this.statevalue : leavestate !== this.statevalue;
                };
                WanderSceneTriggerCondition.fromJSON = function (src) {
                    var sceneid = src["sceneid"];
                    var statevalue = src["endstate"];
                    var mustmeet = true;
                    if (src.hasOwnProperty("mustnot")) {
                        mustmeet = !src["mustnot"];
                    }
                    return new WanderSceneTriggerCondition(sceneid, statevalue, mustmeet);
                };
                return WanderSceneTriggerCondition;
            }());
            /***/ 
        }),
        /***/ "./src/app/rpg-engine/scenes/struct/wander-scene-trigger.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/rpg-engine/scenes/struct/wander-scene-trigger.ts ***!
          \******************************************************************/
        /*! exports provided: WanderSceneTrigger */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WanderSceneTrigger", function () { return WanderSceneTrigger; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _wander_scene_trigger_condition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wander-scene-trigger-condition */ "./src/app/rpg-engine/scenes/struct/wander-scene-trigger-condition.ts");
            var WanderSceneTrigger = /** @class */ (function () {
                function WanderSceneTrigger() {
                    this.needed = [];
                    this.blockers = [];
                }
                /**
                 * Adds a condition, by default as needed unless specified as blocker
                 * @param condition trigger condition for this scene
                 * @param asblocker whether the condition is a blocker, defaults to needed
                 */
                WanderSceneTrigger.prototype.addCondition = function (condition, asblocker) {
                    if (asblocker === void 0) { asblocker = false; }
                    (asblocker ? this.blockers : this.needed).push(condition);
                };
                WanderSceneTrigger.prototype.isActive = function (leavestates) {
                    for (var _i = 0, _a = this.blockers; _i < _a.length; _i++) {
                        var triggercondition = _a[_i];
                        if (triggercondition.checkCondition(leavestates)) {
                            return false;
                        }
                    }
                    for (var _b = 0, _c = this.needed; _b < _c.length; _b++) {
                        var triggercondition = _c[_b];
                        if (!triggercondition.checkCondition(leavestates)) {
                            return false;
                        }
                    }
                    return true;
                };
                WanderSceneTrigger.fromJSON = function (src) {
                    var trigger = new WanderSceneTrigger();
                    if (src.hasOwnProperty("c_for")) {
                        for (var _i = 0, _a = src["c_for"]; _i < _a.length; _i++) {
                            var conditiondef = _a[_i];
                            trigger.addCondition(_wander_scene_trigger_condition__WEBPACK_IMPORTED_MODULE_1__["WanderSceneTriggerCondition"].fromJSON(conditiondef), false);
                        }
                    }
                    if (src.hasOwnProperty("c_against")) {
                        for (var _b = 0, _c = src["c_against"]; _b < _c.length; _b++) {
                            var conditiondef = _c[_b];
                            trigger.addCondition(_wander_scene_trigger_condition__WEBPACK_IMPORTED_MODULE_1__["WanderSceneTriggerCondition"].fromJSON(conditiondef), true);
                        }
                    }
                    return trigger;
                };
                return WanderSceneTrigger;
            }());
            /***/ 
        }),
        /***/ "./src/app/rpg-engine/scenes/town-nav.ts": 
        /*!***********************************************!*\
          !*** ./src/app/rpg-engine/scenes/town-nav.ts ***!
          \***********************************************/
        /*! exports provided: TownNav */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TownNav", function () { return TownNav; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _wander_scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wander-scene */ "./src/app/rpg-engine/wander-scene.ts");
            /* harmony import */ var _journey_departure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./journey-departure */ "./src/app/rpg-engine/scenes/journey-departure.ts");
            var TownNav = /** @class */ (function (_super) {
                __extends(TownNav, _super);
                function TownNav(game, place) {
                    var _this = _super.call(this, game) || this;
                    _this.town = place;
                    console.log(game.worldmeta);
                    _this.townstruct = game.worldmeta["townstructure"]["major"];
                    _this.locpoint = TownNav.LOC_OUTSKIRTS;
                    _this.updateLocation();
                    return _this;
                }
                TownNav.prototype.updateLocation = function () {
                    this.currentloc = this.getLocStructure();
                    if (this.locpoint !== TownNav.LOC_LEAVE) {
                        this.game.hero.locpos = {
                            "locid": this.town.locid,
                            "roomid": this.locpoint
                        };
                    }
                    else {
                        this.game.hero.locpos = null;
                    }
                };
                TownNav.prototype.getFollowingScene = function () {
                    return new _journey_departure__WEBPACK_IMPORTED_MODULE_2__["JourneyDeparture"](this.game);
                };
                TownNav.prototype.sceneFinished = function () {
                    return this.locpoint === TownNav.LOC_LEAVE;
                };
                TownNav.prototype.getLocStructure = function () {
                    return this.townstruct["locs"][this.locpoint];
                };
                TownNav.prototype.moveToLoc = function (locid) {
                    this.locpoint = locid;
                    this.updateLocation();
                };
                return TownNav;
            }(_wander_scene__WEBPACK_IMPORTED_MODULE_1__["WanderScene"]));
            TownNav.LOC_LEAVE = "OUT";
            TownNav.LOC_OUTSKIRTS = "LEAVE";
            /***/ 
        }),
        /***/ "./src/app/rpg-engine/skill-system/simple-skill-set.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/rpg-engine/skill-system/simple-skill-set.ts ***!
          \*************************************************************/
        /*! exports provided: SimpleSkillSet */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleSkillSet", function () { return SimpleSkillSet; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var SimpleSkillSet = /** @class */ (function () {
                function SimpleSkillSet() {
                    this.potentials = new Map();
                    this.developments = new Map();
                }
                SimpleSkillSet.prototype.registerPotential = function (id, basevalue) {
                    this.potentials.set(id, basevalue);
                };
                SimpleSkillSet.prototype.registerDevelopment = function (id, basevalue) {
                    this.developments.set(id, basevalue);
                };
                SimpleSkillSet.prototype.getPotential = function (id) {
                    return this.potentials.has(id) ? this.potentials.get(id) : 0;
                };
                SimpleSkillSet.prototype.getDevelopment = function (id) {
                    return this.developments.has(id) ? this.developments.get(id) : 0;
                };
                return SimpleSkillSet;
            }());
            /***/ 
        }),
        /***/ "./src/app/rpg-engine/skill-system/simple-skill-system.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/rpg-engine/skill-system/simple-skill-system.ts ***!
          \****************************************************************/
        /*! exports provided: SimpleSkillSystem */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleSkillSystem", function () { return SimpleSkillSystem; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _simple_skill_throw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple-skill-throw */ "./src/app/rpg-engine/skill-system/simple-skill-throw.ts");
            var SimpleSkillSystem = /** @class */ (function () {
                function SimpleSkillSystem() {
                    this.potentials = [];
                    this.actions = new Map();
                }
                SimpleSkillSystem.fromJSON = function (src) {
                    var created = new SimpleSkillSystem();
                    created.potentials = src["potentials"];
                    for (var actionid in src["actions"]) {
                        created.actions.set(actionid, _simple_skill_throw__WEBPACK_IMPORTED_MODULE_1__["SimpleSkillThrow"].fromJson(src["actions"][actionid]));
                    }
                    return created;
                };
                SimpleSkillSystem.getLowestBalanced = function (series) {
                    var lowest = series[0];
                    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
                        var current = series_1[_i];
                        lowest = Math.min(lowest, current);
                    }
                    var numlowest = 0;
                    for (var _a = 0, series_2 = series; _a < series_2.length; _a++) {
                        var current = series_2[_a];
                        if (current === lowest) {
                            numlowest++;
                        }
                    }
                    if (numlowest < 2) {
                        return numlowest + 1;
                    }
                    else {
                        return numlowest;
                    }
                };
                SimpleSkillSystem.getHighest = function (series) {
                    var highest = series[0];
                    for (var _i = 0, series_3 = series; _i < series_3.length; _i++) {
                        var current = series_3[_i];
                        highest = Math.max(highest, current);
                    }
                    return highest;
                };
                SimpleSkillSystem.prototype.applySkill = function (actionid, agent) {
                    var agentskills = agent.getSkills();
                    var action = this.actions.get(actionid);
                    var pot_vals = [];
                    for (var _i = 0, _a = action.potentials; _i < _a.length; _i++) {
                        var potential = _a[_i];
                        pot_vals.push(agentskills.getPotential(potential));
                    }
                    var dev_vals = [];
                    for (var _b = 0, _c = action.developments; _b < _c.length; _b++) {
                        var development = _c[_b];
                        dev_vals.push(agentskills.getDevelopment(development));
                    }
                    var potval = pot_vals.length > 1 ? SimpleSkillSystem.getLowestBalanced(pot_vals) : pot_vals[0];
                    var devval = dev_vals.length > 1 ? SimpleSkillSystem.getHighest(dev_vals) : dev_vals[0];
                    var dicethrow = 0;
                    for (var i = 0; i < devval; i++) {
                        dicethrow += Math.floor(Math.random() * potval) + 1;
                    }
                    return dicethrow;
                };
                return SimpleSkillSystem;
            }());
            /***/ 
        }),
        /***/ "./src/app/rpg-engine/skill-system/simple-skill-throw.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/rpg-engine/skill-system/simple-skill-throw.ts ***!
          \***************************************************************/
        /*! exports provided: SimpleSkillThrow */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleSkillThrow", function () { return SimpleSkillThrow; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var SimpleSkillThrow = /** @class */ (function () {
                function SimpleSkillThrow(req_pots, req_devs) {
                    this.potentials = req_pots;
                    this.developments = req_devs;
                }
                SimpleSkillThrow.fromJson = function (src) {
                    return new SimpleSkillThrow(src["pot"], src["dev"]);
                };
                return SimpleSkillThrow;
            }());
            /***/ 
        }),
        /***/ "./src/app/rpg-engine/wander-game-state.ts": 
        /*!*************************************************!*\
          !*** ./src/app/rpg-engine/wander-game-state.ts ***!
          \*************************************************/
        /*! exports provided: WanderGameState */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WanderGameState", function () { return WanderGameState; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /**
             * Saves game state to a SINGLE save space
             */
            var WanderGameState = /** @class */ (function () {
                function WanderGameState() {
                }
                WanderGameState.loadFromBrowser = function () {
                    console.log("loading game state from browser WebStorage");
                    var loaded = localStorage.getItem(WanderGameState.KEY_SAVESTATE_DATA);
                    console.log("loaded", loaded);
                    if (loaded !== null) {
                        loaded = JSON.parse(loaded);
                        if (!loaded["qstates"]) {
                            loaded["qstates"] = {};
                        }
                    }
                    return loaded;
                };
                WanderGameState.saveToBrowser = function (game) {
                    console.log("saving game state to browser for Game");
                    console.log("saving hero state, position", game.hero.pos);
                    var qstates = {};
                    for (var _i = 0, _a = game.quests.values(); _i < _a.length; _i++) {
                        var quest = _a[_i];
                        var tasks = {};
                        // console.log("saving state for quest ", quest.questid, quest);
                        // console.log(quest.states.keys());
                        for (var _b = 0, _c = quest.states.keys(); _b < _c.length; _b++) {
                            var taskid = _c[_b];
                            // console.log("checking quest ",quest.questid,"task", taskid);
                            tasks[taskid] = quest.states.get(taskid);
                        }
                        qstates[quest.questid] = {
                            "tasks": tasks,
                            "completed": quest.completed
                        };
                    }
                    var savegame = {
                        hero: {
                            position: [game.hero.pos.x, game.hero.pos.y]
                        },
                        quests: qstates
                    };
                    console.log("saving game as ", savegame);
                    localStorage.setItem(WanderGameState.KEY_SAVESTATE_DATA, JSON.stringify(savegame));
                };
                return WanderGameState;
            }());
            WanderGameState.KEY_SAVESTATE_DATA = "WanderSaveGame";
            /***/ 
        }),
        /***/ "./src/app/rpg-engine/wander-game.ts": 
        /*!*******************************************!*\
          !*** ./src/app/rpg-engine/wander-game.ts ***!
          \*******************************************/
        /*! exports provided: WanderGame */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WanderGame", function () { return WanderGame; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _world_world_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./world/world-map */ "./src/app/rpg-engine/world/world-map.ts");
            /* harmony import */ var _wander_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wander-hero */ "./src/app/rpg-engine/wander-hero.ts");
            /* harmony import */ var _quests_quest_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quests/quest-ref */ "./src/app/rpg-engine/quests/quest-ref.ts");
            /* harmony import */ var _support_res_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../support/res-loader */ "./src/app/support/res-loader.ts");
            /* harmony import */ var _skill_system_simple_skill_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skill-system/simple-skill-system */ "./src/app/rpg-engine/skill-system/simple-skill-system.ts");
            /* harmony import */ var _scenes_meta_scene__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scenes/meta-scene */ "./src/app/rpg-engine/scenes/meta-scene.ts");
            var WanderGame = /** @class */ (function () {
                function WanderGame(loader) {
                    this.loader = loader;
                    this.quests = new Map();
                }
                WanderGame.loadGame = function (http, callback) {
                    var loader = new GameFactory(http);
                    loader.loadDemoGame(function (game, factory) {
                        console.log("loaded game ", game);
                        console.log("built from factory ", factory);
                        callback(game);
                    });
                };
                // DEBUG FUNCTIONS FOR QUICK TESTING
                WanderGame.prototype.setHero = function (hero) {
                    this.hero = hero;
                };
                WanderGame.prototype.setWorldMap = function (worldmap) {
                    this.worldmap = worldmap;
                };
                WanderGame.prototype.setWorldMeta = function (src) {
                    // TODO: placeholder
                    this.worldmeta = src;
                };
                WanderGame.prototype.setSkillSystem = function (skillsys) {
                    this.skillsystem = skillsys;
                };
                WanderGame.prototype.setActiveScene = function (scene) {
                    console.log("setting activescene to ", scene);
                    if (scene instanceof _scenes_meta_scene__WEBPACK_IMPORTED_MODULE_6__["MetaScene"]) {
                        console.log("should switch to internal scene for metascene");
                        this.activescene = scene.getCurrent();
                    }
                    else {
                        this.activescene = scene;
                    }
                    console.log("ACTIVESCENE:", this.activescene);
                };
                WanderGame.prototype.getActiveScene = function () {
                    return this.activescene;
                };
                WanderGame.prototype.addQuest = function (qref) {
                    this.quests.set(qref.questid, qref);
                };
                return WanderGame;
            }());
            var GameFactory = /** @class */ (function () {
                function GameFactory(http) {
                    this.http = http;
                    this.dataset = {
                        "locs": null,
                        "terrain": null,
                        "player": null,
                        "quests": null,
                        "worldmeta": null,
                        "skillsys": null
                    };
                    this.loader = new _support_res_loader__WEBPACK_IMPORTED_MODULE_4__["ResLoader"](this.http);
                }
                GameFactory.prototype.loadDemoGame = function (callback) {
                    var sources = {
                        "locs": "./assets/gamedata/testlocations.json",
                        "terrain": "./assets/gamedata/testmapgame.json",
                        "player": "./assets/gamedata/playerdata.json",
                        "worldmeta": "./assets/gamedata/worlddesign.json",
                        "skillsys": "./assets/gamedata/simpleskillactions.json"
                    };
                    var loader = this;
                    function getCheckerFunction(key) {
                        return function (data) {
                            loader.setData(key, data, callback);
                        };
                    }
                    for (var _i = 0, _a = Object.keys(sources); _i < _a.length; _i++) {
                        var key = _a[_i];
                        var path = sources[key];
                        var checker = getCheckerFunction(key);
                        this.loader.loadDataFile(path, checker);
                    }
                    var QPATH = "./assets/gamedata/quests/";
                    var QUESTS = [
                        QPATH + "drunkquest.json",
                        QPATH + "sidestreetquest.json",
                        // QPATH + "simpleskillactions.json",
                        QPATH + "testquest.json",
                        QPATH + "triggerquest.json"
                    ];
                    this.loader.loadDataFiles(QUESTS, function (quests) {
                        loader.setData("quests", quests, callback);
                    });
                };
                GameFactory.prototype.setData = function (key, data, completer) {
                    this.dataset[key] = data;
                    var has_all = true;
                    for (var _i = 0, _a = Object.keys(this.dataset); _i < _a.length; _i++) {
                        var datakey = _a[_i];
                        if (this.dataset[datakey] == null) {
                            has_all = false;
                        }
                    }
                    if (has_all) {
                        // completer(this);
                        this.createGameInstance(completer);
                    }
                };
                GameFactory.prototype.createGameInstance = function (completer) {
                    var game = new WanderGame(new _support_res_loader__WEBPACK_IMPORTED_MODULE_4__["ResLoader"](this.http));
                    console.log("loaded terrain", this.dataset["terrain"]);
                    console.log("loaded locs", this.dataset["locs"]);
                    console.log("loaded player", this.dataset["player"]);
                    console.log("loaded quests: ", this.dataset["quests"]);
                    var worldmap = _world_world_map__WEBPACK_IMPORTED_MODULE_1__["WorldMap"].fromJSON(this.dataset["terrain"], this.dataset["locs"]);
                    var hero = _wander_hero__WEBPACK_IMPORTED_MODULE_2__["WanderHero"].fromJSON(this.dataset["player"]);
                    var skillsys = _skill_system_simple_skill_system__WEBPACK_IMPORTED_MODULE_5__["SimpleSkillSystem"].fromJSON(this.dataset["skillsys"]);
                    game.setWorldMap(worldmap);
                    game.setHero(hero);
                    game.setWorldMeta(this.dataset["worldmeta"]);
                    game.setSkillSystem(skillsys);
                    for (var questfile in this.dataset["quests"]) {
                        var qref = _quests_quest_ref__WEBPACK_IMPORTED_MODULE_3__["QuestRef"].fromJSON(this.dataset["quests"][questfile], questfile);
                        console.log("created from ", questfile, "questref ", qref);
                        // let quest = Quest.fromJSON(this.dataset["quests"][questfile]);
                        // console.log("created from ", questfile, " quest object ", quest);
                        game.addQuest(qref);
                    }
                    completer(game, this);
                };
                return GameFactory;
            }());
            /***/ 
        }),
        /***/ "./src/app/rpg-engine/wander-hero.ts": 
        /*!*******************************************!*\
          !*** ./src/app/rpg-engine/wander-hero.ts ***!
          \*******************************************/
        /*! exports provided: WanderHero */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WanderHero", function () { return WanderHero; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _world_world_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./world/world-position */ "./src/app/rpg-engine/world/world-position.ts");
            /* harmony import */ var _skill_system_simple_skill_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skill-system/simple-skill-set */ "./src/app/rpg-engine/skill-system/simple-skill-set.ts");
            var WanderHero = /** @class */ (function () {
                function WanderHero() {
                    this.pos = null;
                    this.locpos = null;
                    this.skills = new _skill_system_simple_skill_set__WEBPACK_IMPORTED_MODULE_2__["SimpleSkillSet"]();
                }
                WanderHero.fromJSON = function (src) {
                    var hero = new WanderHero();
                    hero.setCoordinates(_world_world_position__WEBPACK_IMPORTED_MODULE_1__["WorldPosition"].fromCoordsArray(src["position"]["coords"]));
                    for (var potential in src["record"]["potentials"]) {
                        var range_1 = src["record"]["potentials"][potential];
                        var value = Math.round(Math.random() * range_1[1] - range_1[0]) + (range_1[1] - range_1[0]);
                        hero.skills.registerPotential(potential, value);
                    }
                    for (var development in src["record"]["developments"]) {
                        var range_2 = src["record"]["developments"][development];
                        var value = Math.round(Math.random() * range_2[1] - range_2[0]) + (range_2[1] - range_2[0]);
                        hero.skills.registerDevelopment(development, value);
                    }
                    var range = src["record"]["health"];
                    hero.maxhealth = Math.round(Math.random() * range[1] - range[0]) + (range[1] - range[0]);
                    hero.health = hero.maxhealth;
                    return hero;
                };
                WanderHero.prototype.setCoordinates = function (pos) {
                    // console.log("replacing coords", this.pos, "w pos ", pos);
                    this.pos = pos;
                };
                WanderHero.prototype.getSkills = function () {
                    return this.skills;
                };
                return WanderHero;
            }());
            /***/ 
        }),
        /***/ "./src/app/rpg-engine/wander-scene.ts": 
        /*!********************************************!*\
          !*** ./src/app/rpg-engine/wander-scene.ts ***!
          \********************************************/
        /*! exports provided: WanderScene, LeaveStatesMap */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WanderScene", function () { return WanderScene; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveStatesMap", function () { return LeaveStatesMap; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var WanderScene = /** @class */ (function () {
                function WanderScene(game) {
                    this.game = game;
                    // narrative should be set outside the constructor
                    this.narrative = null;
                    // TODO: TBA (note: should get value AFTER constructor anyway?)
                    this.leaf = null;
                    this.driver = null;
                }
                WanderScene.prototype.setNarrative = function (narrative) {
                    this.narrative = narrative;
                };
                WanderScene.prototype.getNarrative = function () {
                    return this.narrative;
                };
                /**
                 * Acts as default, subclasses can override if they have specific return codes > 0 (for success and < -1 for failure?)
                 * If the scene is unfinished, subclasses should still respect the UNFINISHED constant
                 */
                WanderScene.prototype.returnState = function () {
                    // Scenes that do not have a set of return values always return 0 on end OR -1 if not finished
                    return this.sceneFinished() ? WanderScene.LEAVESTATE_FINISHED : WanderScene.LEAVESTATE_UNFINISHED;
                };
                /**
                 * Acts as default, subclasses can override if they chain to a scene they create
                 */
                WanderScene.prototype.getFollowingScene = function () {
                    return this.narrative;
                };
                WanderScene.fromJSON = function (src) {
                    // TODO: placeholder, implement for all the scenes that can be JSON-generated
                    return null;
                };
                return WanderScene;
            }());
            WanderScene.LEAVESTATE_UNFINISHED = -1;
            WanderScene.LEAVESTATE_FINISHED = 0;
            /**
             * Wrapper for Map type for syntactical cleanup
             */
            var LeaveStatesMap = /** @class */ (function (_super) {
                __extends(LeaveStatesMap, _super);
                function LeaveStatesMap() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return LeaveStatesMap;
            }(Map));
            /***/ 
        }),
        /***/ "./src/app/rpg-engine/world/locs/Place.ts": 
        /*!************************************************!*\
          !*** ./src/app/rpg-engine/world/locs/Place.ts ***!
          \************************************************/
        /*! exports provided: Place */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Place", function () { return Place; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Place = /** @class */ (function () {
                function Place(pos) {
                    this.pos = pos;
                }
                // public abstract getName (): string;
                Place.prototype.getCoords = function () {
                    return this.pos.getCoords();
                };
                Place.prototype.matchesPosition = function (pos) {
                    return this.pos.matches(pos);
                };
                return Place;
            }());
            /***/ 
        }),
        /***/ "./src/app/rpg-engine/world/locs/PlaceFactory.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/rpg-engine/world/locs/PlaceFactory.ts ***!
          \*******************************************************/
        /*! exports provided: PlaceFactory */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceFactory", function () { return PlaceFactory; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _Town__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Town */ "./src/app/rpg-engine/world/locs/Town.ts");
            /* harmony import */ var _TerrainPass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TerrainPass */ "./src/app/rpg-engine/world/locs/TerrainPass.ts");
            var PlaceFactory = /** @class */ (function () {
                function PlaceFactory() {
                }
                PlaceFactory.fromJSON = function (placetype, placeid, src) {
                    var builderclass = PlaceFactory.CLASSES[placetype];
                    return builderclass.fromJSON(placeid, src);
                };
                return PlaceFactory;
            }());
            PlaceFactory.CLASSES = {
                "towns": _Town__WEBPACK_IMPORTED_MODULE_1__["Town"],
                "passes": _TerrainPass__WEBPACK_IMPORTED_MODULE_2__["TerrainPass"]
            };
            /***/ 
        }),
        /***/ "./src/app/rpg-engine/world/locs/TerrainPass.ts": 
        /*!******************************************************!*\
          !*** ./src/app/rpg-engine/world/locs/TerrainPass.ts ***!
          \******************************************************/
        /*! exports provided: TerrainPass */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerrainPass", function () { return TerrainPass; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _Place__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Place */ "./src/app/rpg-engine/world/locs/Place.ts");
            /* harmony import */ var _world_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../world-position */ "./src/app/rpg-engine/world/world-position.ts");
            var TerrainPass = /** @class */ (function (_super) {
                __extends(TerrainPass, _super);
                function TerrainPass(locid, entrypos, exitpos, course) {
                    var _this = _super.call(this, entrypos) || this;
                    _this.loctype = "passes";
                    _this.locid = locid;
                    _this.exitpoint = exitpos;
                    _this.course = course;
                    return _this;
                }
                TerrainPass.prototype.length = function () {
                    return this.course.length;
                };
                TerrainPass.fromJSON = function (placeid, desc) {
                    var entrypoint = desc["entry"];
                    var exitpoint = desc["exit"];
                    var course = desc["sequence"];
                    var loaded = new TerrainPass(placeid, new _world_position__WEBPACK_IMPORTED_MODULE_2__["WorldPosition"](entrypoint[0], entrypoint[1]), new _world_position__WEBPACK_IMPORTED_MODULE_2__["WorldPosition"](exitpoint[0], exitpoint[1]), course);
                    loaded.name = desc["name"];
                    return loaded;
                };
                TerrainPass.prototype.matchesPosition = function (pos) {
                    return this.pos.matches(pos) || this.exitpoint.matches(pos);
                };
                return TerrainPass;
            }(_Place__WEBPACK_IMPORTED_MODULE_1__["Place"]));
            /***/ 
        }),
        /***/ "./src/app/rpg-engine/world/locs/Town.ts": 
        /*!***********************************************!*\
          !*** ./src/app/rpg-engine/world/locs/Town.ts ***!
          \***********************************************/
        /*! exports provided: Town */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Town", function () { return Town; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _Place__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Place */ "./src/app/rpg-engine/world/locs/Place.ts");
            /* harmony import */ var _world_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../world-position */ "./src/app/rpg-engine/world/world-position.ts");
            var Town = /** @class */ (function (_super) {
                __extends(Town, _super);
                function Town(locid, coords) {
                    var _this = _super.call(this, coords) || this;
                    _this.loctype = "towns";
                    _this.locid = locid;
                    return _this;
                }
                Town.fromJSON = function (placeid, desc) {
                    var coords = desc["coords"];
                    var loaded = new Town(placeid, new _world_position__WEBPACK_IMPORTED_MODULE_2__["WorldPosition"](coords[0], coords[1]));
                    loaded.name = desc["name"];
                    return loaded;
                };
                return Town;
            }(_Place__WEBPACK_IMPORTED_MODULE_1__["Place"]));
            /***/ 
        }),
        /***/ "./src/app/rpg-engine/world/world-map.ts": 
        /*!***********************************************!*\
          !*** ./src/app/rpg-engine/world/world-map.ts ***!
          \***********************************************/
        /*! exports provided: WorldMap */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldMap", function () { return WorldMap; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _locs_TerrainPass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locs/TerrainPass */ "./src/app/rpg-engine/world/locs/TerrainPass.ts");
            /* harmony import */ var _locs_PlaceFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locs/PlaceFactory */ "./src/app/rpg-engine/world/locs/PlaceFactory.ts");
            /* harmony import */ var _world_position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./world-position */ "./src/app/rpg-engine/world/world-position.ts");
            var WorldMap = /** @class */ (function () {
                function WorldMap(sizeX, sizeY) {
                    this.sizeX = sizeX;
                    this.sizeY = sizeY;
                    this.locs = [];
                    this.terrain = [];
                    for (var x = 0; x < sizeX; x++) {
                        var tercol = [];
                        var loccol = [];
                        for (var y = 0; y < sizeY; y++) {
                            tercol.push(null);
                            loccol.push(null);
                        }
                        this.terrain.push(tercol);
                        this.locs.push(loccol);
                    }
                    this.places_bytypebyid = new Map();
                }
                WorldMap.getCoordsHash = function (coordX, coordY) {
                    return coordX + ":" + coordY;
                };
                WorldMap.fromJSON = function (griddata, locationdata) {
                    // console.log(griddata);
                    var gridsizeX = griddata["mapgrid"].length;
                    var gridsizeY = griddata["mapgrid"][0].length;
                    var worldmap = new WorldMap(gridsizeX, gridsizeY);
                    // console.log(worldmap.terrain);
                    for (var x = 0; x < gridsizeX; x++) {
                        for (var y = 0; y < gridsizeY; y++) {
                            worldmap.terrain[x][y] = griddata["mapgrid"][x][y];
                        }
                    }
                    // loop not technically needed but we might want to run generations etc on data in the future
                    // TODO : replace
                    for (var _i = 0, _a = Object.keys(locationdata); _i < _a.length; _i++) {
                        var placetype = _a[_i];
                        var places = locationdata[placetype];
                        var listed = new Map();
                        for (var _b = 0, _c = Object.keys(places); _b < _c.length; _b++) {
                            var placeid = _c[_b];
                            var placedesc = places[placeid];
                            var place = _locs_PlaceFactory__WEBPACK_IMPORTED_MODULE_2__["PlaceFactory"].fromJSON(placetype, placeid, placedesc);
                            // let place = new Place(Position.fromCoords(placedesc["coords"]));
                            // place.loctype = placetype;
                            // place.locid = placeid;
                            listed.set(placeid, place);
                            // console.log("adding place", placetype, placedesc);
                            var coords = void 0;
                            worldmap.locs[place.pos.x][place.pos.y] = place;
                            if (place instanceof _locs_TerrainPass__WEBPACK_IMPORTED_MODULE_1__["TerrainPass"]) {
                                var exitpos = place.exitpoint;
                                worldmap.locs[exitpos.x][exitpos.y] = place;
                            }
                        }
                        worldmap.places_bytypebyid.set(placetype, listed);
                    }
                    return worldmap;
                };
                WorldMap.prototype.getLocationById = function (locid) {
                    for (var _i = 0, _a = this.places_bytypebyid.values(); _i < _a.length; _i++) {
                        var places_byid = _a[_i];
                        if (places_byid.has(locid)) {
                            return places_byid.get(locid);
                        }
                    }
                    return null;
                };
                WorldMap.prototype.getAllLocations = function () {
                    var listing = [];
                    for (var _i = 0, _a = this.places_bytypebyid.keys(); _i < _a.length; _i++) {
                        var placetype = _a[_i];
                        // console.log("getting loctype ", loctype, this.places[loctype]);
                        for (var _b = 0, _c = this.places_bytypebyid.get(placetype).values(); _b < _c.length; _b++) {
                            var loc = _c[_b];
                            listing.push(loc);
                        }
                    }
                    // console.log("all locations: ", listing);
                    return listing;
                };
                WorldMap.prototype.getLocationAt = function (coords) {
                    var loc = null;
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
                };
                WorldMap.prototype.getCourse = function (cfrom, cto) {
                    // TODO: straight course for now
                    var distX = cto.x - cfrom.x;
                    var distY = cto.y - cfrom.y;
                    var maxdist = Math.max(Math.abs(distX), Math.abs(distY));
                    var course = [];
                    for (var i = 0; i < maxdist; i++) {
                        var section = i / maxdist;
                        var sectionX = Math.round(distX * section);
                        var sectionY = Math.round(distY * section);
                        course.push(new _world_position__WEBPACK_IMPORTED_MODULE_3__["WorldPosition"](cfrom.x + sectionX, cfrom.y + sectionY));
                    }
                    console.log("course from ", cfrom, " to ", cto, ": " + course.length + " steps (", course, ")");
                    return course;
                };
                WorldMap.prototype.getTerrainAt = function (x, y) {
                    try {
                        return this.terrain[x][y];
                    }
                    catch (err) {
                        return null;
                    }
                };
                return WorldMap;
            }());
            /***/ 
        }),
        /***/ "./src/app/rpg-engine/world/world-position.ts": 
        /*!****************************************************!*\
          !*** ./src/app/rpg-engine/world/world-position.ts ***!
          \****************************************************/
        /*! exports provided: WorldPosition */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldPosition", function () { return WorldPosition; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var WorldPosition = /** @class */ (function () {
                function WorldPosition(x, y) {
                    this.x = x;
                    this.y = y;
                }
                WorldPosition.fromCoordsArray = function (coords) {
                    return new WorldPosition(coords[0], coords[1]);
                };
                WorldPosition.prototype.getCoords = function () {
                    return [this.x, this.y];
                };
                WorldPosition.prototype.getShifted = function (x, y) {
                    return new WorldPosition(this.x + x, this.y + y);
                };
                WorldPosition.prototype.matches = function (other) {
                    // console.log("checking if we have a match between ", this, "and", other);
                    return this.x === other.x && this.y === other.y;
                };
                WorldPosition.getRelativeGeneralDirection = function (pfrom, pto) {
                    var distX = pto.x - pfrom.x;
                    var distY = pto.y - pfrom.y;
                    var dirX = 0;
                    var dirY = 0;
                    if (distX === 0) {
                        dirX = 0;
                        dirY = distY > 0 ? 1 : -1;
                    }
                    else if (distY === 0) {
                        dirY = 0;
                        dirX = distX > 0 ? 1 : -1;
                    }
                    else {
                        var absX = Math.abs(distX);
                        var absY = Math.abs(distY);
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
                };
                return WorldPosition;
            }());
            /***/ 
        }),
        /***/ "./src/app/scene-ui/insertion.directive.ts": 
        /*!*************************************************!*\
          !*** ./src/app/scene-ui/insertion.directive.ts ***!
          \*************************************************/
        /*! exports provided: InsertionDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertionDirective", function () { return InsertionDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var InsertionDirective = /** @class */ (function () {
                function InsertionDirective(viewContainerRef) {
                    this.viewContainerRef = viewContainerRef;
                }
                return InsertionDirective;
            }());
            InsertionDirective.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
            ]; };
            InsertionDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: '[appInsertion]',
                })
            ], InsertionDirective);
            /***/ 
        }),
        /***/ "./src/app/scene-ui/scene-injector.ts": 
        /*!********************************************!*\
          !*** ./src/app/scene-ui/scene-injector.ts ***!
          \********************************************/
        /*! exports provided: SceneInjector */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneInjector", function () { return SceneInjector; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var SceneInjector = /** @class */ (function () {
                function SceneInjector(_parentInjector, _additionalTokens) {
                    this._parentInjector = _parentInjector;
                    this._additionalTokens = _additionalTokens;
                }
                SceneInjector.prototype.get = function (token, notFoundValue, flags) {
                    var value = this._additionalTokens.get(token);
                    if (value) {
                        return value;
                    }
                    return this._parentInjector.get(token, notFoundValue);
                };
                return SceneInjector;
            }());
            /***/ 
        }),
        /***/ "./src/app/scene-ui/scene-ref.ts": 
        /*!***************************************!*\
          !*** ./src/app/scene-ui/scene-ref.ts ***!
          \***************************************/
        /*! exports provided: SceneRef */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneRef", function () { return SceneRef; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var SceneRef = /** @class */ (function () {
                function SceneRef() {
                    this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
                    this.afterClosed = this._afterClosed.asObservable();
                    this._sceneCheck = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
                    this.sceneCheck = this._sceneCheck.asObservable();
                    this._subSwitch = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
                    this.subSwitch = this._subSwitch.asObservable();
                }
                SceneRef.prototype.setContext = function (scene) {
                    this.scene = scene;
                    this.game = scene.game;
                };
                SceneRef.prototype.close = function (result) {
                    this._afterClosed.next(result);
                };
                SceneRef.prototype.triggerSceneCheck = function () {
                    console.log("sending check event for scene ", this.scene, this.scene.sceneFinished());
                    this._sceneCheck.next();
                };
                SceneRef.prototype.triggerSubScene = function (scene) {
                    this._subSwitch.next(scene);
                };
                return SceneRef;
            }());
            /***/ 
        }),
        /***/ "./src/app/scene-ui/scene-ui.component.scss": 
        /*!**************************************************!*\
          !*** ./src/app/scene-ui/scene-ui.component.scss ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".uiwrapper {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: transparent;\n  align-items: center;\n  justify-content: center;\n}\n\n#gamecontrols {\n  position: fixed;\n  top: 0;\n  right: 0;\n  text-align: right;\n  border-bottom: 1px solid black;\n  border-left: 1px solid black;\n  border-bottom-left-radius: 8px;\n  padding: 4px 8px 4px 16px;\n  background-image: url(\"/assets/ui/temporaryparchment.jpg\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RyYWtlL0NvZGUvV2FuZGVyL1dhbmRlckFORy9zcmMvYXBwL3NjZW5lLXVpL3NjZW5lLXVpLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zY2VuZS11aS9zY2VuZS11aS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FER0E7RUFFRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0QsMERBQUE7QUNERCIsImZpbGUiOiJzcmMvYXBwL3NjZW5lLXVpL3NjZW5lLXVpLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuI2dhbWVjb250cm9sc1xue1xuICBwb3NpdGlvbjogICBmaXhlZDtcbiAgdG9wOiAgICAgICAgMDtcbiAgcmlnaHQ6ICAgICAgMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJvcmRlci1ib3R0b206ICAgICAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1sZWZ0OiAgICAgMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6ICAgICAgNHB4IDhweCA0cHggMTZweDtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy91aS90ZW1wb3JhcnlwYXJjaG1lbnQuanBnXCIpO1xuXG4gIC8vIHotaW5kZXg6XHRcdDk5OTk5OTk7XG59XG4iLCIudWl3cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI2dhbWVjb250cm9scyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiA0cHggOHB4IDRweCAxNnB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3VpL3RlbXBvcmFyeXBhcmNobWVudC5qcGdcIik7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/scene-ui/scene-ui.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/scene-ui/scene-ui.component.ts ***!
          \************************************************/
        /*! exports provided: SceneUIComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneUIComponent", function () { return SceneUIComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _insertion_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insertion.directive */ "./src/app/scene-ui/insertion.directive.ts");
            /**
             * Holder component for {@link SceneRenderer} objects.
             * Is instantiated by {@link SceneUIService} for {@link StorytellerComponent} and injected with the chosen renderer.
             */
            var SceneUIComponent = /** @class */ (function () {
                function SceneUIComponent(componentFactoryResolver, cd) {
                    this.componentFactoryResolver = componentFactoryResolver;
                    this.cd = cd;
                    this._onClose = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    this.onClose = this._onClose.asObservable();
                }
                // LIFECYCLE
                // note: ngOnInit not strictly necessary for this use
                // ngOnInit() {
                // }
                SceneUIComponent.prototype.ngAfterViewInit = function () {
                    this.loadChildComponent(this.childComponentType);
                    this.cd.detectChanges();
                };
                SceneUIComponent.prototype.ngOnDestroy = function () {
                    if (this.componentRef) {
                        this.componentRef.destroy();
                    }
                };
                // child loading
                SceneUIComponent.prototype.loadChildComponent = function (componentType) {
                    var componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
                    var viewContainerRef = this.insertionPoint.viewContainerRef;
                    viewContainerRef.clear();
                    this.componentRef = viewContainerRef.createComponent(componentFactory);
                };
                // for dialog-like behaviour, revise
                SceneUIComponent.prototype.onOverlayClicked = function (evt) {
                    // close the scene
                    console.warn("on overlay click");
                    // console.log("closing sceneref");
                    // console.log("removing ", this.componentRef);
                    // this.componentRef.destroy();
                };
                SceneUIComponent.prototype.onDialogClicked = function (evt) {
                    evt.stopPropagation();
                };
                SceneUIComponent.prototype.doSaveGame = function () {
                    console.log("Saving game state... to outer Storyteller", this.controller);
                    // WanderGameState.saveToBrowser(this.game);
                    this.controller.doSaveGame();
                };
                SceneUIComponent.prototype.doLoadGame = function () {
                    console.log("Loading game state... to outer Storyteller", this.controller);
                    this.controller.doLoadGame();
                };
                return SceneUIComponent;
            }());
            SceneUIComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
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
            /***/ 
        }),
        /***/ "./src/app/scene-ui/scene-ui.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/scene-ui/scene-ui.module.ts ***!
          \*********************************************/
        /*! exports provided: SceneUIModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneUIModule", function () { return SceneUIModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _insertion_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insertion.directive */ "./src/app/scene-ui/insertion.directive.ts");
            /* harmony import */ var _scene_ui_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scene-ui.component */ "./src/app/scene-ui/scene-ui.component.ts");
            var SceneUIModule = /** @class */ (function () {
                function SceneUIModule() {
                }
                return SceneUIModule;
            }());
            SceneUIModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                    declarations: [_scene_ui_component__WEBPACK_IMPORTED_MODULE_4__["SceneUIComponent"], _insertion_directive__WEBPACK_IMPORTED_MODULE_3__["InsertionDirective"]],
                    entryComponents: [_scene_ui_component__WEBPACK_IMPORTED_MODULE_4__["SceneUIComponent"]],
                })
            ], SceneUIModule);
            /***/ 
        }),
        /***/ "./src/app/scene-ui/scene-ui.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/scene-ui/scene-ui.service.ts ***!
          \**********************************************/
        /*! exports provided: SceneUIService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneUIService", function () { return SceneUIService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _scene_ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene-ui.component */ "./src/app/scene-ui/scene-ui.component.ts");
            /* harmony import */ var _scene_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scene-ref */ "./src/app/scene-ui/scene-ref.ts");
            /* harmony import */ var _scene_injector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scene-injector */ "./src/app/scene-ui/scene-injector.ts");
            /* harmony import */ var _storyteller_storyteller_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storyteller/storyteller-interface */ "./src/app/storyteller/storyteller-interface.ts");
            var SceneUIService = /** @class */ (function () {
                function SceneUIService(componentFactoryResolver, appRef, injector) {
                    this.componentFactoryResolver = componentFactoryResolver;
                    this.appRef = appRef;
                    this.injector = injector;
                }
                SceneUIService.prototype.bindStoryTellerUI = function (stref) {
                    this.stref = stref;
                };
                SceneUIService.prototype.open = function (componentType, scene) {
                    var sceneref = this.appendSceneUI(scene);
                    this.sceneRef.instance.childComponentType = componentType;
                    return sceneref;
                };
                SceneUIService.prototype.appendSceneUI = function (scene) {
                    var _this = this;
                    var map = new WeakMap();
                    // map.set(DialogConfig, config);
                    // add the DialogRef to dependency injection
                    var sceneRef = new _scene_ref__WEBPACK_IMPORTED_MODULE_3__["SceneRef"]();
                    sceneRef.setContext(scene);
                    map.set(_scene_ref__WEBPACK_IMPORTED_MODULE_3__["SceneRef"], sceneRef);
                    map.set(_storyteller_storyteller_interface__WEBPACK_IMPORTED_MODULE_5__["StorytellerInterface"], this.stref);
                    // we want to know when somebody called the close mehtod
                    var sub = sceneRef.afterClosed.subscribe(function () {
                        // close the dialog
                        console.log("running AFTERCLOSE");
                        _this.removeSceneUI();
                        sub.unsubscribe();
                        console.log("getting follower scene ", scene.getFollowingScene());
                        _this.stref.checkUpdateSceneRender();
                    });
                    var checksub = sceneRef.sceneCheck.subscribe(function () {
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
                    var componentFactory = this.componentFactoryResolver.resolveComponentFactory(_scene_ui_component__WEBPACK_IMPORTED_MODULE_2__["SceneUIComponent"]);
                    console.warn("istancing sceneUI: component factory", componentFactory, "params map", map);
                    var sceneInject = new _scene_injector__WEBPACK_IMPORTED_MODULE_4__["SceneInjector"](this.injector, map);
                    var componentRef = componentFactory.create(sceneInject);
                    console.warn("used injector ", sceneInject, " to add component", componentRef, "w hostview", componentRef.hostView);
                    this.appRef.attachView(componentRef.hostView);
                    var domElem = componentRef.hostView.rootNodes[0];
                    document.body.appendChild(domElem);
                    this.sceneRef = componentRef;
                    // console.log("SceneUI.sceneRef: ", this.sceneRef);
                    // console.log("SceneUI.sceneRef.instance: ", this.sceneRef.instance);
                    this.sceneRef.instance.controller = this.stref.getStoryteller();
                    // console.log("SceneUI.sceneRef.childCompo: ", this.sceneRef.instance.componentRef);
                    this.sceneRef.instance.onClose.subscribe(function () {
                        console.log("running ONCLOSE");
                        _this.removeSceneUI();
                        // console.log("getting follower scene ", scene.getFollowingScene());
                        // this.storyteller.checkUpdateSceneRender();
                    });
                    // return the dialogRef
                    return sceneRef;
                };
                SceneUIService.prototype.removeSceneUI = function () {
                    console.log("removing scene ref ", this.sceneRef);
                    this.appRef.detachView(this.sceneRef.hostView);
                    this.sceneRef.destroy();
                };
                return SceneUIService;
            }());
            SceneUIService.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
            ]; };
            SceneUIService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], SceneUIService);
            /***/ 
        }),
        /***/ "./src/app/story-tester/scenes/test-blue-screen/test-blue-screen.component.scss": 
        /*!**************************************************************************************!*\
          !*** ./src/app/story-tester/scenes/test-blue-screen/test-blue-screen.component.scss ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".scenescreen {\n  background-color: darkseagreen;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RyYWtlL0NvZGUvV2FuZGVyL1dhbmRlckFORy9zcmMvYXBwL3N0b3J5LXRlc3Rlci9zY2VuZXMvdGVzdC1ibHVlLXNjcmVlbi90ZXN0LWJsdWUtc2NyZWVuLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdG9yeS10ZXN0ZXIvc2NlbmVzL3Rlc3QtYmx1ZS1zY3JlZW4vdGVzdC1ibHVlLXNjcmVlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVDLDhCQUFBO0FDQUQiLCJmaWxlIjoic3JjL2FwcC9zdG9yeS10ZXN0ZXIvc2NlbmVzL3Rlc3QtYmx1ZS1zY3JlZW4vdGVzdC1ibHVlLXNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY2VuZXNjcmVlblxue1xuXHRiYWNrZ3JvdW5kLWNvbG9yOlx0XHRcdGRhcmtzZWFncmVlbjtcbn1cbiIsIi5zY2VuZXNjcmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzZWFncmVlbjtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/story-tester/scenes/test-blue-screen/test-blue-screen.component.ts": 
        /*!************************************************************************************!*\
          !*** ./src/app/story-tester/scenes/test-blue-screen/test-blue-screen.component.ts ***!
          \************************************************************************************/
        /*! exports provided: TestBlueScreenComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestBlueScreenComponent", function () { return TestBlueScreenComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../scene-ui/scene-ref */ "./src/app/scene-ui/scene-ref.ts");
            /* harmony import */ var _test_screen_generic_test_screen_generic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../test-screen-generic/test-screen-generic.component */ "./src/app/story-tester/scenes/test-screen-generic/test-screen-generic.component.ts");
            /* harmony import */ var _storyteller_storyteller_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../storyteller/storyteller-interface */ "./src/app/storyteller/storyteller-interface.ts");
            var TestBlueScreenComponent = /** @class */ (function (_super) {
                __extends(TestBlueScreenComponent, _super);
                function TestBlueScreenComponent(sceneref, sti) {
                    if (sti === void 0) { sti = null; }
                    var _this = _super.call(this) || this;
                    _this.sceneref = sceneref;
                    return _this;
                }
                TestBlueScreenComponent.prototype.ngOnInit = function () {
                };
                TestBlueScreenComponent.prototype.onClose = function () {
                    this.sceneref.close('BYE BLUE');
                };
                return TestBlueScreenComponent;
            }(_test_screen_generic_test_screen_generic_component__WEBPACK_IMPORTED_MODULE_3__["TestScreenGenericComponent"]));
            TestBlueScreenComponent.ctorParameters = function () { return [
                { type: _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_2__["SceneRef"] },
                { type: _storyteller_storyteller_interface__WEBPACK_IMPORTED_MODULE_4__["StorytellerInterface"] }
            ]; };
            TestBlueScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-test-blue-screen',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test-blue-screen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/story-tester/scenes/test-blue-screen/test-blue-screen.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../test-screen-generic/test-screen-generic.component.scss */ "./src/app/story-tester/scenes/test-screen-generic/test-screen-generic.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test-blue-screen.component.scss */ "./src/app/story-tester/scenes/test-blue-screen/test-blue-screen.component.scss")).default]
                })
            ], TestBlueScreenComponent);
            /***/ 
        }),
        /***/ "./src/app/story-tester/scenes/test-green-screen/test-green-screen.component.scss": 
        /*!****************************************************************************************!*\
          !*** ./src/app/story-tester/scenes/test-green-screen/test-green-screen.component.scss ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".scenescreen {\n  background-color: lightsteelblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RyYWtlL0NvZGUvV2FuZGVyL1dhbmRlckFORy9zcmMvYXBwL3N0b3J5LXRlc3Rlci9zY2VuZXMvdGVzdC1ncmVlbi1zY3JlZW4vdGVzdC1ncmVlbi1zY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0b3J5LXRlc3Rlci9zY2VuZXMvdGVzdC1ncmVlbi1zY3JlZW4vdGVzdC1ncmVlbi1zY3JlZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQyxnQ0FBQTtBQ0FEIiwiZmlsZSI6InNyYy9hcHAvc3RvcnktdGVzdGVyL3NjZW5lcy90ZXN0LWdyZWVuLXNjcmVlbi90ZXN0LWdyZWVuLXNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY2VuZXNjcmVlblxue1xuXHRiYWNrZ3JvdW5kLWNvbG9yOlx0XHRcdGxpZ2h0c3RlZWxibHVlO1xufVxuIiwiLnNjZW5lc2NyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzdGVlbGJsdWU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/story-tester/scenes/test-green-screen/test-green-screen.component.ts": 
        /*!**************************************************************************************!*\
          !*** ./src/app/story-tester/scenes/test-green-screen/test-green-screen.component.ts ***!
          \**************************************************************************************/
        /*! exports provided: TestGreenScreenComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestGreenScreenComponent", function () { return TestGreenScreenComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../scene-ui/scene-ref */ "./src/app/scene-ui/scene-ref.ts");
            /* harmony import */ var _test_screen_generic_test_screen_generic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../test-screen-generic/test-screen-generic.component */ "./src/app/story-tester/scenes/test-screen-generic/test-screen-generic.component.ts");
            /* harmony import */ var _storyteller_storyteller_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../storyteller/storyteller-interface */ "./src/app/storyteller/storyteller-interface.ts");
            var TestGreenScreenComponent = /** @class */ (function (_super) {
                __extends(TestGreenScreenComponent, _super);
                function TestGreenScreenComponent(sceneref, sti) {
                    if (sti === void 0) { sti = null; }
                    var _this = _super.call(this) || this;
                    _this.sceneref = sceneref;
                    return _this;
                }
                TestGreenScreenComponent.prototype.ngOnInit = function () {
                };
                TestGreenScreenComponent.prototype.onClose = function () {
                    this.sceneref.close('BYE GREEN');
                };
                return TestGreenScreenComponent;
            }(_test_screen_generic_test_screen_generic_component__WEBPACK_IMPORTED_MODULE_3__["TestScreenGenericComponent"]));
            TestGreenScreenComponent.ctorParameters = function () { return [
                { type: _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_2__["SceneRef"] },
                { type: _storyteller_storyteller_interface__WEBPACK_IMPORTED_MODULE_4__["StorytellerInterface"] }
            ]; };
            TestGreenScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-test-green-screen',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test-green-screen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/story-tester/scenes/test-green-screen/test-green-screen.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../test-screen-generic/test-screen-generic.component.scss */ "./src/app/story-tester/scenes/test-screen-generic/test-screen-generic.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test-green-screen.component.scss */ "./src/app/story-tester/scenes/test-green-screen/test-green-screen.component.scss")).default]
                })
            ], TestGreenScreenComponent);
            /***/ 
        }),
        /***/ "./src/app/story-tester/scenes/test-screen-generic/test-screen-generic.component.scss": 
        /*!********************************************************************************************!*\
          !*** ./src/app/story-tester/scenes/test-screen-generic/test-screen-generic.component.scss ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".overlay {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.7);\n  align-items: center;\n  justify-content: center;\n}\n\n.dialog {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  background-color: white;\n  width: 50%;\n  height: 50%;\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RyYWtlL0NvZGUvV2FuZGVyL1dhbmRlckFORy9zcmMvYXBwL3N0b3J5LXRlc3Rlci9zY2VuZXMvdGVzdC1zY3JlZW4tZ2VuZXJpYy90ZXN0LXNjcmVlbi1nZW5lcmljLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdG9yeS10ZXN0ZXIvc2NlbmVzL3Rlc3Qtc2NyZWVuLWdlbmVyaWMvdGVzdC1zY3JlZW4tZ2VuZXJpYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0RUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zdG9yeS10ZXN0ZXIvc2NlbmVzL3Rlc3Qtc2NyZWVuLWdlbmVyaWMvdGVzdC1zY3JlZW4tZ2VuZXJpYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVybGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kaWFsb2cge1xuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDhweDtcbn1cbiIsIi5vdmVybGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kaWFsb2cge1xuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDhweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/story-tester/scenes/test-screen-generic/test-screen-generic.component.ts": 
        /*!******************************************************************************************!*\
          !*** ./src/app/story-tester/scenes/test-screen-generic/test-screen-generic.component.ts ***!
          \******************************************************************************************/
        /*! exports provided: TestScreenGenericComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestScreenGenericComponent", function () { return TestScreenGenericComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // @Component({
            // 	selector: 'app-test-screen-generic',
            // 	templateUrl: './test-screen-generic.component.html',
            // 	styleUrls: ['./test-screen-generic.component.scss']
            // })
            var TestScreenGenericComponent = /** @class */ (function () {
                function TestScreenGenericComponent() {
                    this.stint = null;
                }
                TestScreenGenericComponent.prototype.ngOnInit = function () {
                };
                return TestScreenGenericComponent;
            }());
            /***/ 
        }),
        /***/ "./src/app/story-tester/story-tester.component.scss": 
        /*!**********************************************************!*\
          !*** ./src/app/story-tester/story-tester.component.scss ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#storyteller-outside {\n  background-color: #9a93ff;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n#storyteller-tester {\n  position: fixed;\n  top: 8px;\n  left: 8px;\n  right: 8px;\n  bottom: 8px;\n  /*background-color:\t\tlightgreen;*/\n  background-image: url(\"/assets/ui/temporaryparchment.jpg\");\n}\n\n#scenerender-test {\n  background-color: grey;\n  width: 200px;\n  height: 300px;\n  border: 2px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RyYWtlL0NvZGUvV2FuZGVyL1dhbmRlckFORy9zcmMvYXBwL3N0b3J5LXRlc3Rlci9zdG9yeS10ZXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0b3J5LXRlc3Rlci9zdG9yeS10ZXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQyx5QkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDQUQ7O0FESUE7RUFFQyxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsMERBQUE7QUNGRDs7QURPQTtFQUdDLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ05EIiwiZmlsZSI6InNyYy9hcHAvc3RvcnktdGVzdGVyL3N0b3J5LXRlc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzdG9yeXRlbGxlci1vdXRzaWRlXG57XG5cdGJhY2tncm91bmQtY29sb3I6ICM5YTkzZmY7XG5cdHBvc2l0aW9uOlx0XHRcdFx0Zml4ZWQ7XG5cdHRvcDpcdFx0XHRcdFx0MDtcblx0bGVmdDpcdFx0XHRcdFx0MDtcblx0cmlnaHQ6XHRcdFx0XHRcdDA7XG5cdGJvdHRvbTpcdFx0XHRcdFx0MDtcbn1cblxuXG4jc3Rvcnl0ZWxsZXItdGVzdGVyXG57XG5cdHBvc2l0aW9uOlx0XHRcdFx0Zml4ZWQ7XG5cdHRvcDpcdFx0XHRcdFx0OHB4O1xuXHRsZWZ0Olx0XHRcdFx0XHQ4cHg7XG5cdHJpZ2h0Olx0XHRcdFx0XHQ4cHg7XG5cdGJvdHRvbTpcdFx0XHRcdFx0OHB4O1xuXHQvKmJhY2tncm91bmQtY29sb3I6XHRcdGxpZ2h0Z3JlZW47Ki9cblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy91aS90ZW1wb3JhcnlwYXJjaG1lbnQuanBnXCIpO1xuXG59XG5cblxuI3NjZW5lcmVuZGVyLXRlc3RcbntcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOlx0XHRncmV5O1xuXHR3aWR0aDpcdFx0XHRcdFx0MjAwcHg7XG5cdGhlaWdodDpcdFx0XHRcdFx0MzAwcHg7XG5cdGJvcmRlcjpcdFx0XHRcdFx0MnB4IHNvbGlkIHdoaXRlO1xufVxuXG5cbiIsIiNzdG9yeXRlbGxlci1vdXRzaWRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlhOTNmZjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG5cbiNzdG9yeXRlbGxlci10ZXN0ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiA4cHg7XG4gIHJpZ2h0OiA4cHg7XG4gIGJvdHRvbTogOHB4O1xuICAvKmJhY2tncm91bmQtY29sb3I6XHRcdGxpZ2h0Z3JlZW47Ki9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy91aS90ZW1wb3JhcnlwYXJjaG1lbnQuanBnXCIpO1xufVxuXG4jc2NlbmVyZW5kZXItdGVzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/story-tester/story-tester.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/story-tester/story-tester.component.ts ***!
          \********************************************************/
        /*! exports provided: StoryTesterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryTesterComponent", function () { return StoryTesterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _scene_ui_scene_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scene-ui/scene-ui.service */ "./src/app/scene-ui/scene-ui.service.ts");
            /* harmony import */ var _scenes_test_blue_screen_test_blue_screen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/test-blue-screen/test-blue-screen.component */ "./src/app/story-tester/scenes/test-blue-screen/test-blue-screen.component.ts");
            /* harmony import */ var _scenes_test_green_screen_test_green_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scenes/test-green-screen/test-green-screen.component */ "./src/app/story-tester/scenes/test-green-screen/test-green-screen.component.ts");
            /* harmony import */ var _tester_scene__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tester-scene */ "./src/app/story-tester/tester-scene.ts");
            /* harmony import */ var _storyteller_storyteller_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../storyteller/storyteller-interface */ "./src/app/storyteller/storyteller-interface.ts");
            var StoryTesterComponent = /** @class */ (function () {
                function StoryTesterComponent(sceneui, sti) {
                    if (sti === void 0) { sti = null; }
                    this.sceneui = sceneui;
                }
                StoryTesterComponent.prototype.ngOnInit = function () {
                };
                StoryTesterComponent.prototype.loadBlueScreen = function () {
                    var scene = new _tester_scene__WEBPACK_IMPORTED_MODULE_5__["TesterScene"]();
                    var ref = this.sceneui.open(_scenes_test_blue_screen_test_blue_screen_component__WEBPACK_IMPORTED_MODULE_3__["TestBlueScreenComponent"], scene);
                    ref.afterClosed.subscribe(function (result) {
                        console.log('Scene (BLUE) closed', result);
                    });
                };
                StoryTesterComponent.prototype.loadGreenScreen = function () {
                    var scene = new _tester_scene__WEBPACK_IMPORTED_MODULE_5__["TesterScene"]();
                    var ref = this.sceneui.open(_scenes_test_green_screen_test_green_screen_component__WEBPACK_IMPORTED_MODULE_4__["TestGreenScreenComponent"], scene);
                    ref.afterClosed.subscribe(function (result) {
                        console.log('Scene (GREEN) closed', result);
                    });
                };
                return StoryTesterComponent;
            }());
            StoryTesterComponent.ctorParameters = function () { return [
                { type: _scene_ui_scene_ui_service__WEBPACK_IMPORTED_MODULE_2__["SceneUIService"] },
                { type: _storyteller_storyteller_interface__WEBPACK_IMPORTED_MODULE_6__["StorytellerInterface"] }
            ]; };
            StoryTesterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-story-tester',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./story-tester.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/story-tester/story-tester.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./story-tester.component.scss */ "./src/app/story-tester/story-tester.component.scss")).default]
                })
            ], StoryTesterComponent);
            /***/ 
        }),
        /***/ "./src/app/story-tester/tester-scene.ts": 
        /*!**********************************************!*\
          !*** ./src/app/story-tester/tester-scene.ts ***!
          \**********************************************/
        /*! exports provided: TesterScene */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TesterScene", function () { return TesterScene; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _rpg_engine_wander_scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rpg-engine/wander-scene */ "./src/app/rpg-engine/wander-scene.ts");
            /**
             * Empty scene object so test layouts can work without loading an actual game
             */
            var TesterScene = /** @class */ (function (_super) {
                __extends(TesterScene, _super);
                function TesterScene() {
                    return _super.call(this, null) || this;
                }
                TesterScene.prototype.sceneFinished = function () {
                    return false;
                };
                return TesterScene;
            }(_rpg_engine_wander_scene__WEBPACK_IMPORTED_MODULE_1__["WanderScene"]));
            /***/ 
        }),
        /***/ "./src/app/storyteller/scenes/journey-step/journey-step.component.scss": 
        /*!*****************************************************************************!*\
          !*** ./src/app/storyteller/scenes/journey-step/journey-step.component.scss ***!
          \*****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#journeyrender {\n  position: fixed;\n  top: 8px;\n  left: 8px;\n  right: 8px;\n  bottom: 30vh;\n  border: 1px dashed black;\n  overflow: auto;\n}\n\n#viewrender {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n#journeyinfo {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 28vh;\n  font-size: 8vh;\n  text-align: center;\n}\n\nbutton.journeychoice {\n  border: 1px solid black;\n  padding: 2pt 8pt;\n  font-size: 4vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RyYWtlL0NvZGUvV2FuZGVyL1dhbmRlckFORy9zcmMvYXBwL3N0b3J5dGVsbGVyL3NjZW5lcy9qb3VybmV5LXN0ZXAvam91cm5leS1zdGVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdG9yeXRlbGxlci9zY2VuZXMvam91cm5leS1zdGVwL2pvdXJuZXktc3RlcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVDLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FDQUQ7O0FER0E7RUFFQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNERDs7QURJQTtFQUVDLGVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0FDSEQ7O0FET0E7RUFFQyx1QkFBQTtFQUNBLGdCQUFBO0VBRUEsY0FBQTtBQ05EIiwiZmlsZSI6InNyYy9hcHAvc3Rvcnl0ZWxsZXIvc2NlbmVzL2pvdXJuZXktc3RlcC9qb3VybmV5LXN0ZXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjam91cm5leXJlbmRlclxue1xuXHRwb3NpdGlvbjpcdFx0Zml4ZWQ7XG5cdHRvcDpcdFx0XHQ4cHg7XG5cdGxlZnQ6XHRcdFx0OHB4O1xuXHRyaWdodDpcdFx0XHQ4cHg7XG5cdGJvdHRvbTpcdFx0XHQzMHZoO1xuXHRib3JkZXI6XHRcdFx0MXB4IGRhc2hlZCBibGFjaztcblx0b3ZlcmZsb3c6XHRcdGF1dG87XG59XG5cbiN2aWV3cmVuZGVyXG57XG5cdHBvc2l0aW9uOlx0XHRhYnNvbHV0ZTtcblx0dG9wOlx0XHRcdDA7XG5cdGxlZnQ6XHRcdFx0MDtcblx0cmlnaHQ6XHRcdFx0MDtcblx0Ym90dG9tOlx0XHRcdDA7XG59XG5cbiNqb3VybmV5aW5mb1xue1xuXHRwb3NpdGlvbjpcdFx0Zml4ZWQ7XG5cdGxlZnQ6XHRcdFx0MDtcblx0cmlnaHQ6XHRcdFx0MDtcblx0Ym90dG9tOlx0XHRcdDA7XG5cdGhlaWdodDpcdFx0XHQyOHZoO1xuXHRmb250LXNpemU6XHRcdDh2aDtcblxuXHR0ZXh0LWFsaWduOlx0XHRjZW50ZXI7XG59XG5cblxuYnV0dG9uLmpvdXJuZXljaG9pY2Vcbntcblx0Ym9yZGVyOlx0XHRcdDFweCBzb2xpZCBibGFjaztcblx0cGFkZGluZzpcdFx0MnB0IDhwdDtcblxuXHRmb250LXNpemU6XHRcdDR2aDtcbn1cbiIsIiNqb3VybmV5cmVuZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDhweDtcbiAgbGVmdDogOHB4O1xuICByaWdodDogOHB4O1xuICBib3R0b206IDMwdmg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCBibGFjaztcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbiN2aWV3cmVuZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG5cbiNqb3VybmV5aW5mbyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAyOHZoO1xuICBmb250LXNpemU6IDh2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b24uam91cm5leWNob2ljZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAycHQgOHB0O1xuICBmb250LXNpemU6IDR2aDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/storyteller/scenes/journey-step/journey-step.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/storyteller/scenes/journey-step/journey-step.component.ts ***!
          \***************************************************************************/
        /*! exports provided: JourneyStepComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JourneyStepComponent", function () { return JourneyStepComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _scene_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scene-renderer */ "./src/app/storyteller/scenes/scene-renderer.ts");
            /* harmony import */ var _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../scene-ui/scene-ref */ "./src/app/scene-ui/scene-ref.ts");
            /* harmony import */ var _lib_walk_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/walk-renderer */ "./src/app/storyteller/scenes/lib/walk-renderer.ts");
            var JourneyStepComponent = /** @class */ (function (_super) {
                __extends(JourneyStepComponent, _super);
                function JourneyStepComponent(sceneref) {
                    var _this = _super.call(this, sceneref) || this;
                    _this.sceneref = sceneref;
                    _this.journeyscene = _this.sceneref.scene;
                    console.log("journey path: ", JSON.stringify(_this.journeyscene.course));
                    return _this;
                }
                JourneyStepComponent.prototype.ngOnInit = function () {
                };
                JourneyStepComponent.prototype.ngAfterViewInit = function () {
                    this.viewrenderer = new _lib_walk_renderer__WEBPACK_IMPORTED_MODULE_4__["WalkRenderer"](this.journeyscene.game.worldmap, this.renderview);
                    var ui = this;
                    this.viewrenderer.loadAssets(function () {
                        ui.renderStep();
                    });
                };
                JourneyStepComponent.prototype.setCamp = function () {
                    console.log("clicked SET CAMP");
                };
                JourneyStepComponent.prototype.continueJourney = function () {
                    console.log("clicked JOURNEY ONWARDs");
                    this.journeyscene.step();
                    this.journeyscene.game.hero.setCoordinates(this.journeyscene.getCurrentCoordinates());
                    if (!this.journeyscene.sceneFinished()) {
                        this.renderStep();
                    }
                    else {
                        this.sceneref.triggerSceneCheck();
                    }
                };
                JourneyStepComponent.prototype.renderStep = function () {
                    var vector = this.journeyscene.getStepDirection(this.journeyscene.stepid);
                    this.viewrenderer.renderView(this.journeyscene.getCurrentCoordinates(), vector);
                };
                JourneyStepComponent.prototype.showMap = function () {
                    console.log("clicked SHOW MAP");
                };
                JourneyStepComponent.prototype.getDirectionDescription = function () {
                    var vector = this.journeyscene.getStepDirection(this.journeyscene.stepid);
                    var dirstring = "";
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
                };
                return JourneyStepComponent;
            }(_scene_renderer__WEBPACK_IMPORTED_MODULE_2__["SceneRenderer"]));
            JourneyStepComponent.ctorParameters = function () { return [
                { type: _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_3__["SceneRef"] }
            ]; };
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
            /***/ 
        }),
        /***/ "./src/app/storyteller/scenes/lib/art-renderer.ts": 
        /*!********************************************************!*\
          !*** ./src/app/storyteller/scenes/lib/art-renderer.ts ***!
          \********************************************************/
        /*! exports provided: ArtRenderer */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtRenderer", function () { return ArtRenderer; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! konva */ "./node_modules/konva/lib/index.js");
            /* harmony import */ var konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(konva__WEBPACK_IMPORTED_MODULE_1__);
            var ArtRenderer = /** @class */ (function () {
                function ArtRenderer(target) {
                    console.log("creating art renderer on element ", target);
                    this.renderview = target;
                }
                ArtRenderer.prototype.loadRenderImage = function (urlpath) {
                    console.log("trying render on ", this.renderview, "for", urlpath);
                    var ui = this;
                    var imageObj = new Image();
                    imageObj.onload = function () {
                        ui.renderLoadedImage(imageObj);
                    };
                    imageObj.src = urlpath;
                };
                ArtRenderer.prototype.renderLoadedImage = function (image) {
                    var VPW = this.renderview.nativeElement.clientWidth;
                    var VPH = this.renderview.nativeElement.clientHeight;
                    var stage = new konva__WEBPACK_IMPORTED_MODULE_1___default.a.Stage({
                        container: this.renderview.nativeElement.id,
                        width: VPW,
                        height: VPH,
                    });
                    var composer = new konva__WEBPACK_IMPORTED_MODULE_1___default.a.Layer({});
                    stage.add(composer);
                    var widthratio = image.width / VPW;
                    var heightratio = image.height / VPH;
                    var ratio = Math.max(widthratio, heightratio);
                    var renderwidth = image.width / ratio;
                    var renderheight = image.height / ratio;
                    var msg = "rendering " + image.width + "*" + image.height + " backdrop on " + VPW + "*" + VPH + " stage as " + renderwidth + "*" + renderheight + " px";
                    console.log(msg);
                    var backdrop = new konva__WEBPACK_IMPORTED_MODULE_1___default.a.Image({
                        image: image,
                        x: (VPW - renderwidth) / 2,
                        y: (VPH - renderheight) / 2,
                        width: renderwidth,
                        height: renderheight
                    });
                    console.log("adding", backdrop, "to", composer);
                    composer.add(backdrop);
                    composer.batchDraw();
                    function parchifyWhite(imageData) {
                        // let ctx = canvas.getContext('2d');
                        // let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                        var nPixels = imageData.data.length;
                        for (var i = 0; i < nPixels; i += 4) {
                            var r = imageData.data[i];
                            var g = imageData.data[i + 1];
                            var b = imageData.data[i + 2];
                            var a = imageData.data[i + 3];
                            if (a > 200) {
                                // using brightness (0.21 × R) + (0.72 × G) + (0.07 × B)
                                var brightness = (0.21 * r) + (0.72 * g) + (0.07 * b);
                                var greyavrg = brightness / 3;
                                greyavrg = Math.round(greyavrg / 32) * 32;
                                imageData.data[i] = greyavrg;
                                imageData.data[i + 1] = greyavrg;
                                imageData.data[i + 2] = greyavrg;
                                imageData.data[i + 3] = 255 - brightness;
                            }
                        }
                    }
                    composer.cache();
                    composer.filters([konva__WEBPACK_IMPORTED_MODULE_1___default.a.Filters.Brighten]);
                    composer.brightness(0.8);
                    composer.filters([parchifyWhite]);
                    composer.batchDraw();
                };
                return ArtRenderer;
            }());
            /***/ 
        }),
        /***/ "./src/app/storyteller/scenes/lib/walk-renderer.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/storyteller/scenes/lib/walk-renderer.ts ***!
          \*********************************************************/
        /*! exports provided: WalkRenderer */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkRenderer", function () { return WalkRenderer; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! konva */ "./node_modules/konva/lib/index.js");
            /* harmony import */ var konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(konva__WEBPACK_IMPORTED_MODULE_1__);
            var WalkRenderer = /** @class */ (function () {
                function WalkRenderer(worldmap, target) {
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
                WalkRenderer.prototype.loadAssets = function (callback) {
                    this.terraintiles = new Map();
                    this.tileimages = new Map();
                    this.markerfiles = new Map();
                    this.markerimages = new Map();
                    this.extrafiles = new Map();
                    this.extraimages = new Map();
                    for (var key in this.TILESBYTERRRAIN) {
                        this.terraintiles.set(key, this.PATH_TILES + this.TILESBYTERRRAIN[key]);
                    }
                    this.tileimages = new Map();
                    for (var _i = 0, _a = this.terraintiles.keys(); _i < _a.length; _i++) {
                        var terrain = _a[_i];
                        this.tileimages.set(terrain, null);
                    }
                    for (var key in this.MARKERSBYID) {
                        this.markerfiles.set(key, this.PATH_MARKERS + this.MARKERSBYID[key]);
                    }
                    this.markerimages = new Map();
                    for (var _b = 0, _c = this.markerfiles.keys(); _b < _c.length; _b++) {
                        var markerid = _c[_b];
                        this.markerimages.set(markerid, null);
                    }
                    for (var key in this.EXTRAIMGS) {
                        this.extrafiles.set(key, this.EXTRAIMGS[key]);
                    }
                    this.extraimages = new Map();
                    for (var _d = 0, _e = this.extrafiles.keys(); _d < _e.length; _d++) {
                        var fileid = _e[_d];
                        this.extraimages.set(fileid, null);
                    }
                    // LOADING ASSETS
                    var ui = this;
                    var _loop_1 = function (terrain) {
                        var imageObj = new Image();
                        imageObj.onload = function () {
                            ui.tileimages.set(terrain, imageObj);
                            ui.checkReadyRender(callback);
                        };
                        imageObj.src = this_1.terraintiles.get(terrain);
                    };
                    var this_1 = this;
                    for (var _f = 0, _g = this.terraintiles.keys(); _f < _g.length; _f++) {
                        var terrain = _g[_f];
                        _loop_1(terrain);
                    }
                    var _loop_2 = function (markerid) {
                        var imageObj = new Image();
                        imageObj.onload = function () {
                            ui.markerimages.set(markerid, imageObj);
                            ui.checkReadyRender(callback);
                        };
                        imageObj.src = this_2.markerfiles.get(markerid);
                    };
                    var this_2 = this;
                    for (var _h = 0, _j = this.markerfiles.keys(); _h < _j.length; _h++) {
                        var markerid = _j[_h];
                        _loop_2(markerid);
                    }
                    var _loop_3 = function (fileid) {
                        var imageObj = new Image();
                        imageObj.onload = function () {
                            ui.extraimages.set(fileid, imageObj);
                            ui.checkReadyRender(callback);
                        };
                        imageObj.src = this_3.extrafiles.get(fileid);
                    };
                    var this_3 = this;
                    for (var _k = 0, _l = this.extrafiles.keys(); _k < _l.length; _k++) {
                        var fileid = _l[_k];
                        _loop_3(fileid);
                    }
                };
                WalkRenderer.prototype.checkReadyRender = function (callback) {
                    for (var _i = 0, _a = this.tileimages.keys(); _i < _a.length; _i++) {
                        var terrain = _a[_i];
                        if (this.tileimages.get(terrain) == null) {
                            // console.log("missing maptile", terrain, "wait");
                            return;
                        }
                    }
                    for (var _b = 0, _c = this.markerimages.keys(); _b < _c.length; _b++) {
                        var markerid = _c[_b];
                        if (this.markerimages.get(markerid) == null) {
                            // console.log("missing mapmarker", markerid, "wait");
                            return;
                        }
                    }
                    for (var _d = 0, _e = this.extraimages.keys(); _d < _e.length; _d++) {
                        var fileid = _e[_d];
                        if (this.extraimages.get(fileid) == null) {
                            // console.log("missing mapmarker", markerid, "wait");
                            return;
                        }
                    }
                    callback();
                };
                WalkRenderer.prototype.renderView = function (pos, vector) {
                    // console.log("rendering step ", this.journeyscene.stepid);
                    // const vector = this.journeyscene.getStepDirection(this.journeyscene.stepid);
                    // console.log("checking step view in dir ", vector, "from", this.journeyscene.getCurrentCoordinates().getCoords());
                    var FOV = 90;
                    var rect = this.renderview.nativeElement.getBoundingClientRect();
                    console.log("RECT:", rect);
                    var VPW = this.renderview.nativeElement.clientWidth;
                    var VPH = this.renderview.nativeElement.clientHeight;
                    var PANWIDTH = VPW / (FOV / 360);
                    console.log("using fov", FOV, "on " + VPW + "*" + VPH + ": pan to " + PANWIDTH + "px");
                    var MAXDIST = 9;
                    var rendergrid = this.getRenderGrid(pos, vector, MAXDIST);
                    var stage = new konva__WEBPACK_IMPORTED_MODULE_1___default.a.Stage({
                        container: this.renderview.nativeElement.id,
                        width: VPW,
                        height: VPH,
                    });
                    // console.log(rendergrid);
                    // NOTE: following works ONLY with 90 FOV
                    // also we are actually half step inside each tile but since dist and angle stay the same we ignore
                    var HCENTER = VPW * 0.5;
                    var VCENTER = VPH * 0.4;
                    var PHEIGHT = VPH - VCENTER;
                    var tilelayer = new konva__WEBPACK_IMPORTED_MODULE_1___default.a.Layer({});
                    stage.add(tilelayer);
                    // BGR + CUT
                    var bgrimg = this.extraimages.get("skybgr");
                    // let filename = terraintiles.get(terrain);
                    var bgr = new konva__WEBPACK_IMPORTED_MODULE_1___default.a.Image({
                        image: bgrimg,
                        x: 0,
                        y: 0,
                        width: VPW,
                        height: VPH * 0.8
                    });
                    tilelayer.add(bgr);
                    var bgrcut = VCENTER + PHEIGHT / MAXDIST;
                    var rect1 = new konva__WEBPACK_IMPORTED_MODULE_1___default.a.Rect({
                        x: 0,
                        y: bgrcut,
                        width: VPW,
                        height: VPH - (bgrcut),
                        fill: 'white',
                    });
                    // add the shape to the layer
                    tilelayer.add(rect1);
                    for (var _i = 0, rendergrid_1 = rendergrid; _i < rendergrid_1.length; _i++) {
                        var gp = rendergrid_1[_i];
                        // field size at dist:
                        // 1: 1, 2: 3, 3: 5, 4: 7
                        // y = x + (x-1)
                        var fsize = gp.dist + (gp.dist - 1);
                        var gsize = VPH / fsize;
                        gsize = VPW / fsize;
                        // let relpos = gp.angrel - 0.5;
                        // let hpixpos = HCENTER + ();
                        var hpixpos = gp.angrel * VPW - (gsize * 0.5);
                        hpixpos = VPW - hpixpos - gsize; // fix mirroring
                        var vpixpos = (VCENTER + PHEIGHT / gp.dist) - gsize;
                        var terrain = this.worldmap.getTerrainAt(gp.coords[0], gp.coords[1]);
                        var loc = this.worldmap.getLocationAt(gp.coords);
                        if (terrain == null && loc == null) {
                            continue;
                        }
                        var tileimg = void 0;
                        if (terrain != null) {
                            tileimg = this.tileimages.get(terrain);
                            // let filename = terraintiles.get(terrain);
                            var tile = new konva__WEBPACK_IMPORTED_MODULE_1___default.a.Image({
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
                            var tile = new konva__WEBPACK_IMPORTED_MODULE_1___default.a.Image({
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
                        var nPixels = imageData.data.length;
                        for (var i = 0; i < nPixels; i += 4) {
                            var r = imageData.data[i];
                            var g = imageData.data[i + 1];
                            var b = imageData.data[i + 2];
                            var a = imageData.data[i + 3];
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
                };
                WalkRenderer.prototype.getRenderGrid = function (pov, vector, maxdist) {
                    // const pov = this.journeyscene.getCurrentCoordinates();
                    var povX = pov.x;
                    var povY = pov.y;
                    // const vector = this.journeyscene.getStepDirection(this.journeyscene.stepid);
                    var angle = WalkRenderer.calcAngleDegreesEast(vector[0], vector[1]);
                    // base angle is EAST
                    var FOV = 90;
                    var angmin = ((angle - FOV / 2) + 360) % 360;
                    var angmax = ((angle + FOV / 2) + 360) % 360;
                    var angflip = angmin > angmax;
                    if (angflip) {
                        angmax += 360;
                    }
                    var angv = (angle + 360) % 360;
                    var angdiff = angmax - angmin;
                    console.log("dir angle is ", angv, "checking between ", angmin, angmax);
                    var totvis = 0;
                    var tfrom = new Date().getTime();
                    var rendergrid = [];
                    for (var x = povX - maxdist; x <= povX + maxdist; x++) {
                        for (var y = povY - maxdist; y <= povY + maxdist; y++) {
                            if (x === povX && y === povY) {
                                continue;
                            }
                            var deltaX = x - povX;
                            var deltaY = y - povY;
                            var angr = WalkRenderer.calcAngleDegreesEast(deltaX, deltaY);
                            angr = (angr + 360) % 360;
                            if (angflip && angr <= 45) {
                                angr += 360;
                            }
                            if (angmin <= angr && angr <= angmax) {
                                totvis++;
                                var angrel = (angmax - angr) / FOV;
                                var dist = Math.sqrt((Math.pow(deltaX, 2)) + (Math.pow(deltaY, 2)));
                                if (dist <= maxdist) {
                                    // we are using a SQUARE box to get the points
                                    // console.log(x, y, angr);
                                    rendergrid.push({ coords: [x, y], angrel: angrel, dist: dist });
                                }
                            }
                        }
                    }
                    var tto = new Date().getTime();
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
                };
                WalkRenderer.calcAngleDegreesEast = function (x, y) {
                    return Math.atan2(y, x) * 180 / Math.PI;
                };
                return WalkRenderer;
            }());
            /***/ 
        }),
        /***/ "./src/app/storyteller/scenes/narration-pages/narration-pages.component.scss": 
        /*!***********************************************************************************!*\
          !*** ./src/app/storyteller/scenes/narration-pages/narration-pages.component.scss ***!
          \***********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#narration_render {\n  position: fixed;\n  left: 16px;\n  top: 24px;\n  right: 24px;\n  height: 42vh;\n  font-size: 8vh;\n  text-align: center;\n}\n\n#narration_info {\n  text-align: center;\n  position: fixed;\n  bottom: 16px;\n  left: 16px;\n  right: 16px;\n}\n\nbutton.pageturn {\n  border: 1px solid black;\n  padding: 2pt 8pt;\n  font-size: 4vh;\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RyYWtlL0NvZGUvV2FuZGVyL1dhbmRlckFORy9zcmMvYXBwL3N0b3J5dGVsbGVyL3NjZW5lcy9uYXJyYXRpb24tcGFnZXMvbmFycmF0aW9uLXBhZ2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdG9yeXRlbGxlci9zY2VuZXMvbmFycmF0aW9uLXBhZ2VzL25hcnJhdGlvbi1wYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdDLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFFQSxZQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0FDSEQ7O0FET0E7RUFFQyxrQkFBQTtFQUVBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNORDs7QURTQTtFQUtDLHVCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxjQUFBO0VBRUEsNkJBQUE7QUNaRCIsImZpbGUiOiJzcmMvYXBwL3N0b3J5dGVsbGVyL3NjZW5lcy9uYXJyYXRpb24tcGFnZXMvbmFycmF0aW9uLXBhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hcnJhdGlvbl9yZW5kZXJcbntcblxuXHRwb3NpdGlvbjpcdFx0Zml4ZWQ7XG5cdGxlZnQ6XHRcdFx0MTZweDtcblx0dG9wOlx0XHRcdDI0cHg7XG5cdHJpZ2h0Olx0XHRcdDI0cHg7XG5cblx0aGVpZ2h0Olx0XHRcdDQydmg7XG5cdGZvbnQtc2l6ZTpcdFx0OHZoO1xuXG5cdHRleHQtYWxpZ246XHRcdGNlbnRlcjtcbn1cblxuXG4jbmFycmF0aW9uX2luZm9cbntcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXG5cdHBvc2l0aW9uOlx0XHRmaXhlZDtcblx0Ym90dG9tOlx0XHRcdDE2cHg7XG5cdGxlZnQ6XHRcdFx0MTZweDtcblx0cmlnaHQ6XHRcdFx0MTZweDtcbn1cblxuYnV0dG9uLnBhZ2V0dXJuXG57XG5cblxuXG5cdGJvcmRlcjpcdFx0XHQxcHggc29saWQgYmxhY2s7XG5cdHBhZGRpbmc6XHRcdDJwdCA4cHQ7XG5cblx0Zm9udC1zaXplOlx0XHQ0dmg7XG5cblx0YmFja2dyb3VuZC1jb2xvcjpcdHRyYW5zcGFyZW50O1xufVxuIiwiI25hcnJhdGlvbl9yZW5kZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDE2cHg7XG4gIHRvcDogMjRweDtcbiAgcmlnaHQ6IDI0cHg7XG4gIGhlaWdodDogNDJ2aDtcbiAgZm9udC1zaXplOiA4dmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI25hcnJhdGlvbl9pbmZvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTZweDtcbiAgbGVmdDogMTZweDtcbiAgcmlnaHQ6IDE2cHg7XG59XG5cbmJ1dHRvbi5wYWdldHVybiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAycHQgOHB0O1xuICBmb250LXNpemU6IDR2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/storyteller/scenes/narration-pages/narration-pages.component.ts": 
        /*!*********************************************************************************!*\
          !*** ./src/app/storyteller/scenes/narration-pages/narration-pages.component.ts ***!
          \*********************************************************************************/
        /*! exports provided: NarrationPagesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NarrationPagesComponent", function () { return NarrationPagesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../scene-ui/scene-ref */ "./src/app/scene-ui/scene-ref.ts");
            /* harmony import */ var _scene_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scene-renderer */ "./src/app/storyteller/scenes/scene-renderer.ts");
            var NarrationPagesComponent = /** @class */ (function (_super) {
                __extends(NarrationPagesComponent, _super);
                function NarrationPagesComponent(sceneref) {
                    var _this = _super.call(this, sceneref) || this;
                    _this.sceneref = sceneref;
                    _this.tale = _this.sceneref.scene;
                    console.log("tale info", _this.tale);
                    return _this;
                }
                NarrationPagesComponent.prototype.ngOnInit = function () {
                };
                NarrationPagesComponent.prototype.ngAfterViewInit = function () {
                };
                NarrationPagesComponent.prototype.readForward = function () {
                    this.tale.advanceNarration();
                    this.lastpage = this.tale.sceneFinished();
                };
                NarrationPagesComponent.prototype.readBackwards = function () {
                    this.tale.backtrackNarration();
                };
                NarrationPagesComponent.prototype.readOut = function () {
                    if (this.tale.sceneFinished()) {
                        this.sceneref.triggerSceneCheck();
                    }
                };
                return NarrationPagesComponent;
            }(_scene_renderer__WEBPACK_IMPORTED_MODULE_3__["SceneRenderer"]));
            NarrationPagesComponent.ctorParameters = function () { return [
                { type: _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_2__["SceneRef"] }
            ]; };
            NarrationPagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-narration-pages',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./narration-pages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/narration-pages/narration-pages.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./narration-pages.component.scss */ "./src/app/storyteller/scenes/narration-pages/narration-pages.component.scss")).default]
                })
            ], NarrationPagesComponent);
            /***/ 
        }),
        /***/ "./src/app/storyteller/scenes/passage-through/passage-through.component.scss": 
        /*!***********************************************************************************!*\
          !*** ./src/app/storyteller/scenes/passage-through/passage-through.component.scss ***!
          \***********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".trailview {\n  position: fixed;\n  left: 1vw;\n  right: 1vw;\n  top: 1vw;\n  height: 48vh;\n  border: 2px dashed black;\n}\n\n.trailcontext {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 48vh;\n  font-size: 8vh;\n  text-align: center;\n}\n\n.trailcontrols {\n  border: 1px solid black;\n  padding: 2pt 8pt;\n  font-size: 4vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RyYWtlL0NvZGUvV2FuZGVyL1dhbmRlckFORy9zcmMvYXBwL3N0b3J5dGVsbGVyL3NjZW5lcy9wYXNzYWdlLXRocm91Z2gvcGFzc2FnZS10aHJvdWdoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdG9yeXRlbGxlci9zY2VuZXMvcGFzc2FnZS10aHJvdWdoL3Bhc3NhZ2UtdGhyb3VnaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVDLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUNBRDs7QURHQTtFQUVDLGVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0FDRkQ7O0FETUE7RUFFQyx1QkFBQTtFQUNBLGdCQUFBO0VBRUEsY0FBQTtBQ0xEIiwiZmlsZSI6InNyYy9hcHAvc3Rvcnl0ZWxsZXIvc2NlbmVzL3Bhc3NhZ2UtdGhyb3VnaC9wYXNzYWdlLXRocm91Z2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhaWx2aWV3XG57XG5cdHBvc2l0aW9uOlx0XHRmaXhlZDtcblx0bGVmdDpcdFx0XHQxdnc7XG5cdHJpZ2h0Olx0XHRcdDF2dztcblx0dG9wOlx0XHRcdDF2dztcblx0aGVpZ2h0Olx0XHRcdDQ4dmg7XG5cdGJvcmRlcjpcdFx0XHQycHggZGFzaGVkIGJsYWNrO1xufVxuXG4udHJhaWxjb250ZXh0XG57XG5cdHBvc2l0aW9uOlx0XHRmaXhlZDtcblx0bGVmdDpcdFx0XHQwO1xuXHRyaWdodDpcdFx0XHQwO1xuXHRib3R0b206XHRcdFx0MDtcblx0aGVpZ2h0Olx0XHRcdDQ4dmg7XG5cdGZvbnQtc2l6ZTpcdFx0OHZoO1xuXG5cdHRleHQtYWxpZ246XHRcdGNlbnRlcjtcbn1cblxuXG4udHJhaWxjb250cm9sc1xue1xuXHRib3JkZXI6XHRcdFx0MXB4IHNvbGlkIGJsYWNrO1xuXHRwYWRkaW5nOlx0XHQycHQgOHB0O1xuXG5cdGZvbnQtc2l6ZTpcdFx0NHZoO1xufVxuIiwiLnRyYWlsdmlldyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMXZ3O1xuICByaWdodDogMXZ3O1xuICB0b3A6IDF2dztcbiAgaGVpZ2h0OiA0OHZoO1xuICBib3JkZXI6IDJweCBkYXNoZWQgYmxhY2s7XG59XG5cbi50cmFpbGNvbnRleHQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogNDh2aDtcbiAgZm9udC1zaXplOiA4dmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRyYWlsY29udHJvbHMge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMnB0IDhwdDtcbiAgZm9udC1zaXplOiA0dmg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/storyteller/scenes/passage-through/passage-through.component.ts": 
        /*!*********************************************************************************!*\
          !*** ./src/app/storyteller/scenes/passage-through/passage-through.component.ts ***!
          \*********************************************************************************/
        /*! exports provided: PassageThroughComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassageThroughComponent", function () { return PassageThroughComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _scene_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scene-renderer */ "./src/app/storyteller/scenes/scene-renderer.ts");
            /* harmony import */ var _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../scene-ui/scene-ref */ "./src/app/scene-ui/scene-ref.ts");
            var PassageThroughComponent = /** @class */ (function (_super) {
                __extends(PassageThroughComponent, _super);
                function PassageThroughComponent(sceneref) {
                    var _this = _super.call(this, sceneref) || this;
                    _this.sceneref = sceneref;
                    _this.trail = _this.sceneref.scene;
                    return _this;
                }
                PassageThroughComponent.prototype.isTrailing = function () {
                    return this.trail.progress > -1 && this.trail.progress < this.trail.passage.length();
                };
                PassageThroughComponent.prototype.journeyOnwards = function () {
                    this.trail.step();
                };
                PassageThroughComponent.prototype.leaveTrail = function () {
                    this.trail.leaving = true;
                    this.sceneref.triggerSceneCheck();
                };
                PassageThroughComponent.prototype.ngOnInit = function () {
                };
                PassageThroughComponent.prototype.ngAfterViewInit = function () {
                };
                return PassageThroughComponent;
            }(_scene_renderer__WEBPACK_IMPORTED_MODULE_2__["SceneRenderer"]));
            PassageThroughComponent.ctorParameters = function () { return [
                { type: _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_3__["SceneRef"] }
            ]; };
            PassageThroughComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-passage-through',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./passage-through.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/passage-through/passage-through.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./passage-through.component.scss */ "./src/app/storyteller/scenes/passage-through/passage-through.component.scss")).default]
                })
            ], PassageThroughComponent);
            /***/ 
        }),
        /***/ "./src/app/storyteller/scenes/roaming-step/roaming-step.component.scss": 
        /*!*****************************************************************************!*\
          !*** ./src/app/storyteller/scenes/roaming-step/roaming-step.component.scss ***!
          \*****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#journeyrender {\n  position: fixed;\n  top: 8px;\n  left: 8px;\n  right: 8px;\n  bottom: 30vh;\n  border: 1px dashed black;\n  overflow: auto;\n}\n\n#viewrender {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n#journeyinfo {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 28vh;\n  font-size: 8vh;\n  text-align: center;\n}\n\nbutton.journeychoice {\n  border: 1px solid black;\n  padding: 2pt 8pt;\n  font-size: 4vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RyYWtlL0NvZGUvV2FuZGVyL1dhbmRlckFORy9zcmMvYXBwL3N0b3J5dGVsbGVyL3NjZW5lcy9yb2FtaW5nLXN0ZXAvcm9hbWluZy1zdGVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdG9yeXRlbGxlci9zY2VuZXMvcm9hbWluZy1zdGVwL3JvYW1pbmctc3RlcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVDLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FDQUQ7O0FER0E7RUFFQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNERDs7QURJQTtFQUVDLGVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0FDSEQ7O0FET0E7RUFFQyx1QkFBQTtFQUNBLGdCQUFBO0VBRUEsY0FBQTtBQ05EIiwiZmlsZSI6InNyYy9hcHAvc3Rvcnl0ZWxsZXIvc2NlbmVzL3JvYW1pbmctc3RlcC9yb2FtaW5nLXN0ZXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjam91cm5leXJlbmRlclxue1xuXHRwb3NpdGlvbjpcdFx0Zml4ZWQ7XG5cdHRvcDpcdFx0XHQ4cHg7XG5cdGxlZnQ6XHRcdFx0OHB4O1xuXHRyaWdodDpcdFx0XHQ4cHg7XG5cdGJvdHRvbTpcdFx0XHQzMHZoO1xuXHRib3JkZXI6XHRcdFx0MXB4IGRhc2hlZCBibGFjaztcblx0b3ZlcmZsb3c6XHRcdGF1dG87XG59XG5cbiN2aWV3cmVuZGVyXG57XG5cdHBvc2l0aW9uOlx0XHRhYnNvbHV0ZTtcblx0dG9wOlx0XHRcdDA7XG5cdGxlZnQ6XHRcdFx0MDtcblx0cmlnaHQ6XHRcdFx0MDtcblx0Ym90dG9tOlx0XHRcdDA7XG59XG5cbiNqb3VybmV5aW5mb1xue1xuXHRwb3NpdGlvbjpcdFx0Zml4ZWQ7XG5cdGxlZnQ6XHRcdFx0MDtcblx0cmlnaHQ6XHRcdFx0MDtcblx0Ym90dG9tOlx0XHRcdDA7XG5cdGhlaWdodDpcdFx0XHQyOHZoO1xuXHRmb250LXNpemU6XHRcdDh2aDtcblxuXHR0ZXh0LWFsaWduOlx0XHRjZW50ZXI7XG59XG5cblxuYnV0dG9uLmpvdXJuZXljaG9pY2Vcbntcblx0Ym9yZGVyOlx0XHRcdDFweCBzb2xpZCBibGFjaztcblx0cGFkZGluZzpcdFx0MnB0IDhwdDtcblxuXHRmb250LXNpemU6XHRcdDR2aDtcbn1cbiIsIiNqb3VybmV5cmVuZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDhweDtcbiAgbGVmdDogOHB4O1xuICByaWdodDogOHB4O1xuICBib3R0b206IDMwdmg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCBibGFjaztcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbiN2aWV3cmVuZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG5cbiNqb3VybmV5aW5mbyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAyOHZoO1xuICBmb250LXNpemU6IDh2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b24uam91cm5leWNob2ljZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAycHQgOHB0O1xuICBmb250LXNpemU6IDR2aDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/storyteller/scenes/roaming-step/roaming-step.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/storyteller/scenes/roaming-step/roaming-step.component.ts ***!
          \***************************************************************************/
        /*! exports provided: RoamingStepComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoamingStepComponent", function () { return RoamingStepComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _lib_walk_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/walk-renderer */ "./src/app/storyteller/scenes/lib/walk-renderer.ts");
            /* harmony import */ var _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../scene-ui/scene-ref */ "./src/app/scene-ui/scene-ref.ts");
            /* harmony import */ var _scene_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scene-renderer */ "./src/app/storyteller/scenes/scene-renderer.ts");
            var RoamingStepComponent = /** @class */ (function (_super) {
                __extends(RoamingStepComponent, _super);
                function RoamingStepComponent(sceneref) {
                    var _this = _super.call(this, sceneref) || this;
                    _this.sceneref = sceneref;
                    _this.roamingscene = _this.sceneref.scene;
                    console.log("roaming scene: ", _this.roamingscene);
                    return _this;
                }
                RoamingStepComponent.prototype.ngOnInit = function () {
                };
                RoamingStepComponent.prototype.ngAfterViewInit = function () {
                    this.viewrenderer = new _lib_walk_renderer__WEBPACK_IMPORTED_MODULE_2__["WalkRenderer"](this.roamingscene.game.worldmap, this.renderview);
                    var ui = this;
                    this.viewrenderer.loadAssets(function () {
                        ui.renderStep();
                    });
                };
                RoamingStepComponent.prototype.renderStep = function () {
                    var vector = this.roamingscene.direction;
                    this.viewrenderer.renderView(this.roamingscene.current, vector);
                };
                RoamingStepComponent.prototype.getDirectionDescription = function () {
                    var vector = this.roamingscene.direction;
                    var dirstring = "";
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
                };
                RoamingStepComponent.prototype.getDayOfTravel = function () {
                    return this.roamingscene.steps + 1;
                };
                RoamingStepComponent.prototype.moveTurnLeft = function () {
                    this.roamingscene.changeDirection(-1);
                    this.renderStep();
                };
                RoamingStepComponent.prototype.moveTurnRight = function () {
                    this.roamingscene.changeDirection(1);
                    this.renderStep();
                };
                RoamingStepComponent.prototype.moveForward = function () {
                    this.roamingscene.stepForward();
                    this.roamingscene.game.hero.setCoordinates(this.roamingscene.current);
                    if (!this.roamingscene.sceneFinished()) {
                        this.renderStep();
                    }
                    else {
                        this.sceneref.triggerSceneCheck();
                    }
                };
                RoamingStepComponent.prototype.actionSetCamp = function () {
                };
                RoamingStepComponent.prototype.showMap = function () {
                    // tba
                };
                return RoamingStepComponent;
            }(_scene_renderer__WEBPACK_IMPORTED_MODULE_4__["SceneRenderer"]));
            RoamingStepComponent.ctorParameters = function () { return [
                { type: _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_3__["SceneRef"] }
            ]; };
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
            /***/ 
        }),
        /***/ "./src/app/storyteller/scenes/scene-renderer-loader.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/storyteller/scenes/scene-renderer-loader.ts ***!
          \*************************************************************/
        /*! exports provided: SceneRendererLoader */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneRendererLoader", function () { return SceneRendererLoader; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _rpg_engine_scenes_journey_departure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../rpg-engine/scenes/journey-departure */ "./src/app/rpg-engine/scenes/journey-departure.ts");
            /* harmony import */ var _world_map_view_world_map_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./world-map-view/world-map-view.component */ "./src/app/storyteller/scenes/world-map-view/world-map-view.component.ts");
            /* harmony import */ var _rpg_engine_scenes_journey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../rpg-engine/scenes/journey */ "./src/app/rpg-engine/scenes/journey.ts");
            /* harmony import */ var _journey_step_journey_step_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./journey-step/journey-step.component */ "./src/app/storyteller/scenes/journey-step/journey-step.component.ts");
            /* harmony import */ var _rpg_engine_scenes_town_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../rpg-engine/scenes/town-nav */ "./src/app/rpg-engine/scenes/town-nav.ts");
            /* harmony import */ var _town_ui_town_ui_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./town-ui/town-ui.component */ "./src/app/storyteller/scenes/town-ui/town-ui.component.ts");
            /* harmony import */ var _rpg_engine_scenes_roaming__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../rpg-engine/scenes/roaming */ "./src/app/rpg-engine/scenes/roaming.ts");
            /* harmony import */ var _roaming_step_roaming_step_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./roaming-step/roaming-step.component */ "./src/app/storyteller/scenes/roaming-step/roaming-step.component.ts");
            /* harmony import */ var _rpg_engine_scenes_passage_trail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../rpg-engine/scenes/passage-trail */ "./src/app/rpg-engine/scenes/passage-trail.ts");
            /* harmony import */ var _passage_through_passage_through_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./passage-through/passage-through.component */ "./src/app/storyteller/scenes/passage-through/passage-through.component.ts");
            /* harmony import */ var _rpg_engine_scenes_narration__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../rpg-engine/scenes/narration */ "./src/app/rpg-engine/scenes/narration.ts");
            /* harmony import */ var _narration_pages_narration_pages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./narration-pages/narration-pages.component */ "./src/app/storyteller/scenes/narration-pages/narration-pages.component.ts");
            /* harmony import */ var _rpg_engine_scenes_story_branch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../rpg-engine/scenes/story-branch */ "./src/app/rpg-engine/scenes/story-branch.ts");
            /* harmony import */ var _story_choice_story_choice_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./story-choice/story-choice.component */ "./src/app/storyteller/scenes/story-choice/story-choice.component.ts");
            /* harmony import */ var _skill_action_skill_action_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./skill-action/skill-action.component */ "./src/app/storyteller/scenes/skill-action/skill-action.component.ts");
            /* harmony import */ var _rpg_engine_scenes_skill_test__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../rpg-engine/scenes/skill-test */ "./src/app/rpg-engine/scenes/skill-test.ts");
            var SceneRendererLoader = /** @class */ (function () {
                function SceneRendererLoader() {
                }
                SceneRendererLoader.getSceneRendererClass = function (scene) {
                    var renderer;
                    if (scene instanceof _rpg_engine_scenes_journey_departure__WEBPACK_IMPORTED_MODULE_1__["JourneyDeparture"]) {
                        renderer = _world_map_view_world_map_view_component__WEBPACK_IMPORTED_MODULE_2__["WorldMapViewComponent"];
                    }
                    else if (scene instanceof _rpg_engine_scenes_journey__WEBPACK_IMPORTED_MODULE_3__["Journey"]) {
                        renderer = _journey_step_journey_step_component__WEBPACK_IMPORTED_MODULE_4__["JourneyStepComponent"];
                    }
                    else if (scene instanceof _rpg_engine_scenes_town_nav__WEBPACK_IMPORTED_MODULE_5__["TownNav"]) {
                        renderer = _town_ui_town_ui_component__WEBPACK_IMPORTED_MODULE_6__["TownUIComponent"];
                    }
                    else if (scene instanceof _rpg_engine_scenes_roaming__WEBPACK_IMPORTED_MODULE_7__["Roaming"]) {
                        renderer = _roaming_step_roaming_step_component__WEBPACK_IMPORTED_MODULE_8__["RoamingStepComponent"];
                    }
                    else if (scene instanceof _rpg_engine_scenes_passage_trail__WEBPACK_IMPORTED_MODULE_9__["PassageTrail"]) {
                        renderer = _passage_through_passage_through_component__WEBPACK_IMPORTED_MODULE_10__["PassageThroughComponent"];
                    }
                    else if (scene instanceof _rpg_engine_scenes_narration__WEBPACK_IMPORTED_MODULE_11__["Narration"]) {
                        renderer = _narration_pages_narration_pages_component__WEBPACK_IMPORTED_MODULE_12__["NarrationPagesComponent"];
                    }
                    else if (scene instanceof _rpg_engine_scenes_story_branch__WEBPACK_IMPORTED_MODULE_13__["StoryBranch"]) {
                        renderer = _story_choice_story_choice_component__WEBPACK_IMPORTED_MODULE_14__["StoryChoiceComponent"];
                    }
                    else if (scene instanceof _rpg_engine_scenes_skill_test__WEBPACK_IMPORTED_MODULE_16__["SkillTest"]) {
                        renderer = _skill_action_skill_action_component__WEBPACK_IMPORTED_MODULE_15__["SkillActionComponent"];
                    }
                    return renderer;
                };
                return SceneRendererLoader;
            }());
            /***/ 
        }),
        /***/ "./src/app/storyteller/scenes/scene-renderer.ts": 
        /*!******************************************************!*\
          !*** ./src/app/storyteller/scenes/scene-renderer.ts ***!
          \******************************************************/
        /*! exports provided: SceneRenderer */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneRenderer", function () { return SceneRenderer; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var SceneRenderer = /** @class */ (function () {
                function SceneRenderer(sceneref, storytellerinterface) {
                    if (storytellerinterface === void 0) { storytellerinterface = null; }
                    this.sceneref = sceneref;
                    this.stint = storytellerinterface;
                }
                return SceneRenderer;
            }());
            /***/ 
        }),
        /***/ "./src/app/storyteller/scenes/skill-action/skill-action.component.scss": 
        /*!*****************************************************************************!*\
          !*** ./src/app/storyteller/scenes/skill-action/skill-action.component.scss ***!
          \*****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#choiceinfo {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 42vh;\n  font-size: 8vh;\n  text-align: center;\n}\n\n#choicescenery {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  height: 54vh;\n  overflow: hidden;\n}\n\n/*\n\n.locimageholder\n{\n\tposition:\t\tabsolute;\n\n\tleft:\t\t\t16px;\n\tright:\t\t\t16px;\n\tbottom:\t\t\t8px;\n\ttop:\t\t\t8px;\n\n\ttext-align:\t\tcenter;\n\t//border:\t\t\t1px solid red;\n}\n\n.locimage\n{\n\tmax-width:\t\t\t100%;\n\tmax-height:\t\t\t100%;\n\tobject-fit: \t\tcover;\n\n}\n*/\n\n.choicecontrols {\n  border: 1px solid black;\n  padding: 2pt 8pt;\n  font-size: 4vh;\n}\n\n#sceneryview {\n  position: absolute;\n  left: 16px;\n  right: 16px;\n  bottom: 8px;\n  top: 8px;\n}\n\nul.choices-prompt * {\n  cursor: pointer;\n}\n\nbutton.skillchoice {\n  border: 1px solid black;\n  padding: 2pt 8pt;\n  font-size: 4vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RyYWtlL0NvZGUvV2FuZGVyL1dhbmRlckFORy9zcmMvYXBwL3N0b3J5dGVsbGVyL3NjZW5lcy9za2lsbC1hY3Rpb24vc2tpbGwtYWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdG9yeXRlbGxlci9zY2VuZXMvc2tpbGwtYWN0aW9uL3NraWxsLWFjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVDLGVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0FDREQ7O0FES0E7RUFFQyxlQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBRUEsWUFBQTtFQUdBLGdCQUFBO0FDTkQ7O0FEU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTs7QUF3QkE7RUFFQyx1QkFBQTtFQUNBLGdCQUFBO0VBRUEsY0FBQTtBQ1REOztBRFlBO0VBRUMsa0JBQUE7RUFFQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FDWEQ7O0FEY0E7RUFFQyxlQUFBO0FDWkQ7O0FEZUE7RUFFQyx1QkFBQTtFQUNBLGdCQUFBO0VBRUEsY0FBQTtBQ2REIiwiZmlsZSI6InNyYy9hcHAvc3Rvcnl0ZWxsZXIvc2NlbmVzL3NraWxsLWFjdGlvbi9za2lsbC1hY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2hvaWNlaW5mb1xue1xuXHRwb3NpdGlvbjpcdFx0Zml4ZWQ7XG5cdGxlZnQ6XHRcdFx0MDtcblx0cmlnaHQ6XHRcdFx0MDtcblx0Ym90dG9tOlx0XHRcdDA7XG5cdGhlaWdodDpcdFx0XHQ0MnZoO1xuXHRmb250LXNpemU6XHRcdDh2aDtcblxuXHR0ZXh0LWFsaWduOlx0XHRjZW50ZXI7XG59XG5cblxuI2Nob2ljZXNjZW5lcnlcbntcblx0cG9zaXRpb246XHRcdGZpeGVkO1xuXHRsZWZ0Olx0XHRcdDA7XG5cdHJpZ2h0Olx0XHRcdDA7XG5cdHRvcDpcdFx0XHQwO1xuXG5cdGhlaWdodDpcdFx0XHQ1NHZoO1xuXG5cdC8vYm9yZGVyOlx0XHRcdDFweCBzb2xpZCBibGFjaztcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblxufVxuLypcblxuLmxvY2ltYWdlaG9sZGVyXG57XG5cdHBvc2l0aW9uOlx0XHRhYnNvbHV0ZTtcblxuXHRsZWZ0Olx0XHRcdDE2cHg7XG5cdHJpZ2h0Olx0XHRcdDE2cHg7XG5cdGJvdHRvbTpcdFx0XHQ4cHg7XG5cdHRvcDpcdFx0XHQ4cHg7XG5cblx0dGV4dC1hbGlnbjpcdFx0Y2VudGVyO1xuXHQvL2JvcmRlcjpcdFx0XHQxcHggc29saWQgcmVkO1xufVxuXG4ubG9jaW1hZ2Vcbntcblx0bWF4LXdpZHRoOlx0XHRcdDEwMCU7XG5cdG1heC1oZWlnaHQ6XHRcdFx0MTAwJTtcblx0b2JqZWN0LWZpdDogXHRcdGNvdmVyO1xuXG59XG4qL1xuXG4uY2hvaWNlY29udHJvbHNcbntcblx0Ym9yZGVyOlx0XHRcdDFweCBzb2xpZCBibGFjaztcblx0cGFkZGluZzpcdFx0MnB0IDhwdDtcblxuXHRmb250LXNpemU6XHRcdDR2aDtcbn1cblxuI3NjZW5lcnl2aWV3XG57XG5cdHBvc2l0aW9uOlx0XHRhYnNvbHV0ZTtcblxuXHRsZWZ0Olx0XHRcdDE2cHg7XG5cdHJpZ2h0Olx0XHRcdDE2cHg7XG5cdGJvdHRvbTpcdFx0XHQ4cHg7XG5cdHRvcDpcdFx0XHQ4cHg7XG59XG5cbnVsLmNob2ljZXMtcHJvbXB0ICpcbntcblx0Y3Vyc29yOlx0cG9pbnRlcjtcbn1cblxuYnV0dG9uLnNraWxsY2hvaWNlXG57XG5cdGJvcmRlcjpcdFx0XHQxcHggc29saWQgYmxhY2s7XG5cdHBhZGRpbmc6XHRcdDJwdCA4cHQ7XG5cblx0Zm9udC1zaXplOlx0XHQ0dmg7XG59XG4iLCIjY2hvaWNlaW5mbyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA0MnZoO1xuICBmb250LXNpemU6IDh2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jY2hvaWNlc2NlbmVyeSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiA1NHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKlxuXG4ubG9jaW1hZ2Vob2xkZXJcbntcblx0cG9zaXRpb246XHRcdGFic29sdXRlO1xuXG5cdGxlZnQ6XHRcdFx0MTZweDtcblx0cmlnaHQ6XHRcdFx0MTZweDtcblx0Ym90dG9tOlx0XHRcdDhweDtcblx0dG9wOlx0XHRcdDhweDtcblxuXHR0ZXh0LWFsaWduOlx0XHRjZW50ZXI7XG5cdC8vYm9yZGVyOlx0XHRcdDFweCBzb2xpZCByZWQ7XG59XG5cbi5sb2NpbWFnZVxue1xuXHRtYXgtd2lkdGg6XHRcdFx0MTAwJTtcblx0bWF4LWhlaWdodDpcdFx0XHQxMDAlO1xuXHRvYmplY3QtZml0OiBcdFx0Y292ZXI7XG5cbn1cbiovXG4uY2hvaWNlY29udHJvbHMge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMnB0IDhwdDtcbiAgZm9udC1zaXplOiA0dmg7XG59XG5cbiNzY2VuZXJ5dmlldyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTZweDtcbiAgcmlnaHQ6IDE2cHg7XG4gIGJvdHRvbTogOHB4O1xuICB0b3A6IDhweDtcbn1cblxudWwuY2hvaWNlcy1wcm9tcHQgKiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uLnNraWxsY2hvaWNlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDJwdCA4cHQ7XG4gIGZvbnQtc2l6ZTogNHZoO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/storyteller/scenes/skill-action/skill-action.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/storyteller/scenes/skill-action/skill-action.component.ts ***!
          \***************************************************************************/
        /*! exports provided: SkillActionComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillActionComponent", function () { return SkillActionComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../scene-ui/scene-ref */ "./src/app/scene-ui/scene-ref.ts");
            /* harmony import */ var _storyteller_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../storyteller-interface */ "./src/app/storyteller/storyteller-interface.ts");
            /* harmony import */ var _scene_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scene-renderer */ "./src/app/storyteller/scenes/scene-renderer.ts");
            var SkillActionComponent = /** @class */ (function (_super) {
                __extends(SkillActionComponent, _super);
                function SkillActionComponent(sceneref, storytellerinterface) {
                    if (storytellerinterface === void 0) { storytellerinterface = null; }
                    var _this = _super.call(this, sceneref, storytellerinterface) || this;
                    _this.sceneref = sceneref;
                    console.log("StoryChoice injected w stinterface: ", storytellerinterface);
                    _this.skilltest = _this.sceneref.scene;
                    console.log("current choice set is ", _this.skilltest);
                    _this.narr_fail = null;
                    _this.narr_done = null;
                    return _this;
                }
                SkillActionComponent.prototype.ngOnInit = function () {
                };
                SkillActionComponent.prototype.ngAfterViewInit = function () {
                };
                SkillActionComponent.prototype.tryOption = function (option, succeed) {
                    console.log("picked option ", option, " for trying");
                    var success = this.skilltest.playActionDebug(option, succeed);
                    if (success) {
                        this.narr_fail = null;
                        this.narr_done = option.story_success;
                    }
                    else {
                        this.narr_fail = option.story_failure;
                    }
                };
                SkillActionComponent.prototype.leaveScene = function () {
                    this.sceneref.triggerSceneCheck();
                };
                return SkillActionComponent;
            }(_scene_renderer__WEBPACK_IMPORTED_MODULE_4__["SceneRenderer"]));
            SkillActionComponent.ctorParameters = function () { return [
                { type: _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_2__["SceneRef"] },
                { type: _storyteller_interface__WEBPACK_IMPORTED_MODULE_3__["StorytellerInterface"] }
            ]; };
            SkillActionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-skill-action',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skill-action.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/skill-action/skill-action.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skill-action.component.scss */ "./src/app/storyteller/scenes/skill-action/skill-action.component.scss")).default]
                })
            ], SkillActionComponent);
            /***/ 
        }),
        /***/ "./src/app/storyteller/scenes/story-choice/story-choice.component.scss": 
        /*!*****************************************************************************!*\
          !*** ./src/app/storyteller/scenes/story-choice/story-choice.component.scss ***!
          \*****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#choiceinfo {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 42vh;\n  font-size: 8vh;\n  text-align: center;\n}\n\n#choicescenery {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  height: 54vh;\n  overflow: hidden;\n}\n\n/*\n\n.locimageholder\n{\n\tposition:\t\tabsolute;\n\n\tleft:\t\t\t16px;\n\tright:\t\t\t16px;\n\tbottom:\t\t\t8px;\n\ttop:\t\t\t8px;\n\n\ttext-align:\t\tcenter;\n\t//border:\t\t\t1px solid red;\n}\n\n.locimage\n{\n\tmax-width:\t\t\t100%;\n\tmax-height:\t\t\t100%;\n\tobject-fit: \t\tcover;\n\n}\n*/\n\n.choicecontrols {\n  border: 1px solid black;\n  padding: 2pt 8pt;\n  font-size: 4vh;\n}\n\n#sceneryview {\n  position: absolute;\n  left: 16px;\n  right: 16px;\n  bottom: 8px;\n  top: 8px;\n}\n\nul.choices-prompt * {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RyYWtlL0NvZGUvV2FuZGVyL1dhbmRlckFORy9zcmMvYXBwL3N0b3J5dGVsbGVyL3NjZW5lcy9zdG9yeS1jaG9pY2Uvc3RvcnktY2hvaWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdG9yeXRlbGxlci9zY2VuZXMvc3RvcnktY2hvaWNlL3N0b3J5LWNob2ljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVDLGVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0FDREQ7O0FES0E7RUFFQyxlQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBRUEsWUFBQTtFQUdBLGdCQUFBO0FDTkQ7O0FEU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTs7QUF3QkE7RUFFQyx1QkFBQTtFQUNBLGdCQUFBO0VBRUEsY0FBQTtBQ1REOztBRFlBO0VBRUMsa0JBQUE7RUFFQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FDWEQ7O0FEY0E7RUFFQyxlQUFBO0FDWkQiLCJmaWxlIjoic3JjL2FwcC9zdG9yeXRlbGxlci9zY2VuZXMvc3RvcnktY2hvaWNlL3N0b3J5LWNob2ljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjaG9pY2VpbmZvXG57XG5cdHBvc2l0aW9uOlx0XHRmaXhlZDtcblx0bGVmdDpcdFx0XHQwO1xuXHRyaWdodDpcdFx0XHQwO1xuXHRib3R0b206XHRcdFx0MDtcblx0aGVpZ2h0Olx0XHRcdDQydmg7XG5cdGZvbnQtc2l6ZTpcdFx0OHZoO1xuXG5cdHRleHQtYWxpZ246XHRcdGNlbnRlcjtcbn1cblxuXG4jY2hvaWNlc2NlbmVyeVxue1xuXHRwb3NpdGlvbjpcdFx0Zml4ZWQ7XG5cdGxlZnQ6XHRcdFx0MDtcblx0cmlnaHQ6XHRcdFx0MDtcblx0dG9wOlx0XHRcdDA7XG5cblx0aGVpZ2h0Olx0XHRcdDU0dmg7XG5cblx0Ly9ib3JkZXI6XHRcdFx0MXB4IHNvbGlkIGJsYWNrO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXG59XG4vKlxuXG4ubG9jaW1hZ2Vob2xkZXJcbntcblx0cG9zaXRpb246XHRcdGFic29sdXRlO1xuXG5cdGxlZnQ6XHRcdFx0MTZweDtcblx0cmlnaHQ6XHRcdFx0MTZweDtcblx0Ym90dG9tOlx0XHRcdDhweDtcblx0dG9wOlx0XHRcdDhweDtcblxuXHR0ZXh0LWFsaWduOlx0XHRjZW50ZXI7XG5cdC8vYm9yZGVyOlx0XHRcdDFweCBzb2xpZCByZWQ7XG59XG5cbi5sb2NpbWFnZVxue1xuXHRtYXgtd2lkdGg6XHRcdFx0MTAwJTtcblx0bWF4LWhlaWdodDpcdFx0XHQxMDAlO1xuXHRvYmplY3QtZml0OiBcdFx0Y292ZXI7XG5cbn1cbiovXG5cbi5jaG9pY2Vjb250cm9sc1xue1xuXHRib3JkZXI6XHRcdFx0MXB4IHNvbGlkIGJsYWNrO1xuXHRwYWRkaW5nOlx0XHQycHQgOHB0O1xuXG5cdGZvbnQtc2l6ZTpcdFx0NHZoO1xufVxuXG4jc2NlbmVyeXZpZXdcbntcblx0cG9zaXRpb246XHRcdGFic29sdXRlO1xuXG5cdGxlZnQ6XHRcdFx0MTZweDtcblx0cmlnaHQ6XHRcdFx0MTZweDtcblx0Ym90dG9tOlx0XHRcdDhweDtcblx0dG9wOlx0XHRcdDhweDtcbn1cblxudWwuY2hvaWNlcy1wcm9tcHQgKlxue1xuXHRjdXJzb3I6XHRwb2ludGVyO1xufVxuIiwiI2Nob2ljZWluZm8ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogNDJ2aDtcbiAgZm9udC1zaXplOiA4dmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2Nob2ljZXNjZW5lcnkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGhlaWdodDogNTR2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLypcblxuLmxvY2ltYWdlaG9sZGVyXG57XG5cdHBvc2l0aW9uOlx0XHRhYnNvbHV0ZTtcblxuXHRsZWZ0Olx0XHRcdDE2cHg7XG5cdHJpZ2h0Olx0XHRcdDE2cHg7XG5cdGJvdHRvbTpcdFx0XHQ4cHg7XG5cdHRvcDpcdFx0XHQ4cHg7XG5cblx0dGV4dC1hbGlnbjpcdFx0Y2VudGVyO1xuXHQvL2JvcmRlcjpcdFx0XHQxcHggc29saWQgcmVkO1xufVxuXG4ubG9jaW1hZ2Vcbntcblx0bWF4LXdpZHRoOlx0XHRcdDEwMCU7XG5cdG1heC1oZWlnaHQ6XHRcdFx0MTAwJTtcblx0b2JqZWN0LWZpdDogXHRcdGNvdmVyO1xuXG59XG4qL1xuLmNob2ljZWNvbnRyb2xzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDJwdCA4cHQ7XG4gIGZvbnQtc2l6ZTogNHZoO1xufVxuXG4jc2NlbmVyeXZpZXcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE2cHg7XG4gIHJpZ2h0OiAxNnB4O1xuICBib3R0b206IDhweDtcbiAgdG9wOiA4cHg7XG59XG5cbnVsLmNob2ljZXMtcHJvbXB0ICoge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/storyteller/scenes/story-choice/story-choice.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/storyteller/scenes/story-choice/story-choice.component.ts ***!
          \***************************************************************************/
        /*! exports provided: StoryChoiceComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryChoiceComponent", function () { return StoryChoiceComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _scene_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scene-renderer */ "./src/app/storyteller/scenes/scene-renderer.ts");
            /* harmony import */ var _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../scene-ui/scene-ref */ "./src/app/scene-ui/scene-ref.ts");
            /* harmony import */ var _storyteller_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../storyteller-interface */ "./src/app/storyteller/storyteller-interface.ts");
            var StoryChoiceComponent = /** @class */ (function (_super) {
                __extends(StoryChoiceComponent, _super);
                function StoryChoiceComponent(sceneref, storytellerinterface) {
                    if (storytellerinterface === void 0) { storytellerinterface = null; }
                    var _this = _super.call(this, sceneref, storytellerinterface) || this;
                    _this.sceneref = sceneref;
                    console.log("StoryChoice injected w stinterface: ", storytellerinterface);
                    _this.choice = _this.sceneref.scene;
                    console.log("current choice set is ", _this.choice);
                    return _this;
                }
                StoryChoiceComponent.prototype.ngOnInit = function () {
                };
                StoryChoiceComponent.prototype.ngAfterViewInit = function () {
                };
                StoryChoiceComponent.prototype.selectOption = function (opt) {
                    this.choice.setSelected(opt);
                    this.sceneref.triggerSceneCheck();
                };
                return StoryChoiceComponent;
            }(_scene_renderer__WEBPACK_IMPORTED_MODULE_2__["SceneRenderer"]));
            StoryChoiceComponent.ctorParameters = function () { return [
                { type: _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_3__["SceneRef"] },
                { type: _storyteller_interface__WEBPACK_IMPORTED_MODULE_4__["StorytellerInterface"] }
            ]; };
            StoryChoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-story-choice',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./story-choice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/story-choice/story-choice.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./story-choice.component.scss */ "./src/app/storyteller/scenes/story-choice/story-choice.component.scss")).default]
                })
            ], StoryChoiceComponent);
            /***/ 
        }),
        /***/ "./src/app/storyteller/scenes/town-ui/town-ui.component.scss": 
        /*!*******************************************************************!*\
          !*** ./src/app/storyteller/scenes/town-ui/town-ui.component.scss ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#towninfo {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 42vh;\n  font-size: 8vh;\n  text-align: center;\n}\n\n#townscene {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  height: 54vh;\n  overflow: hidden;\n}\n\n.locimageholder {\n  position: absolute;\n  left: 16px;\n  right: 16px;\n  bottom: 8px;\n  top: 8px;\n  text-align: center;\n}\n\n.locimage {\n  max-width: 100%;\n  max-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.movecontrols {\n  border: 1px solid black;\n  padding: 2pt 8pt;\n  font-size: 4vh;\n}\n\n#locrender {\n  position: absolute;\n  left: 16px;\n  right: 16px;\n  bottom: 8px;\n  top: 8px;\n}\n\nul.townnav-prompt * {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RyYWtlL0NvZGUvV2FuZGVyL1dhbmRlckFORy9zcmMvYXBwL3N0b3J5dGVsbGVyL3NjZW5lcy90b3duLXVpL3Rvd24tdWkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0b3J5dGVsbGVyL3NjZW5lcy90b3duLXVpL3Rvd24tdWkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQyxlQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFFQSxrQkFBQTtBQ0REOztBREtBO0VBRUMsZUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUVBLFlBQUE7RUFHQSxnQkFBQTtBQ05EOztBRFVBO0VBRUMsa0JBQUE7RUFFQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBRUEsa0JBQUE7QUNWRDs7QURjQTtFQUVDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNaRDs7QURnQkE7RUFFQyx1QkFBQTtFQUNBLGdCQUFBO0VBRUEsY0FBQTtBQ2ZEOztBRGtCQTtFQUVDLGtCQUFBO0VBRUEsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQ2pCRDs7QURvQkE7RUFFQyxlQUFBO0FDbEJEIiwiZmlsZSI6InNyYy9hcHAvc3Rvcnl0ZWxsZXIvc2NlbmVzL3Rvd24tdWkvdG93bi11aS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0b3duaW5mb1xue1xuXHRwb3NpdGlvbjpcdFx0Zml4ZWQ7XG5cdGxlZnQ6XHRcdFx0MDtcblx0cmlnaHQ6XHRcdFx0MDtcblx0Ym90dG9tOlx0XHRcdDA7XG5cdGhlaWdodDpcdFx0XHQ0MnZoO1xuXHRmb250LXNpemU6XHRcdDh2aDtcblxuXHR0ZXh0LWFsaWduOlx0XHRjZW50ZXI7XG59XG5cblxuI3Rvd25zY2VuZVxue1xuXHRwb3NpdGlvbjpcdFx0Zml4ZWQ7XG5cdGxlZnQ6XHRcdFx0MDtcblx0cmlnaHQ6XHRcdFx0MDtcblx0dG9wOlx0XHRcdDA7XG5cblx0aGVpZ2h0Olx0XHRcdDU0dmg7XG5cblx0Ly9ib3JkZXI6XHRcdFx0MXB4IHNvbGlkIGJsYWNrO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXG59XG5cbi5sb2NpbWFnZWhvbGRlclxue1xuXHRwb3NpdGlvbjpcdFx0YWJzb2x1dGU7XG5cblx0bGVmdDpcdFx0XHQxNnB4O1xuXHRyaWdodDpcdFx0XHQxNnB4O1xuXHRib3R0b206XHRcdFx0OHB4O1xuXHR0b3A6XHRcdFx0OHB4O1xuXG5cdHRleHQtYWxpZ246XHRcdGNlbnRlcjtcblx0Ly9ib3JkZXI6XHRcdFx0MXB4IHNvbGlkIHJlZDtcbn1cblxuLmxvY2ltYWdlXG57XG5cdG1heC13aWR0aDpcdFx0XHQxMDAlO1xuXHRtYXgtaGVpZ2h0Olx0XHRcdDEwMCU7XG5cdG9iamVjdC1maXQ6IFx0XHRjb3ZlcjtcblxufVxuXG4ubW92ZWNvbnRyb2xzXG57XG5cdGJvcmRlcjpcdFx0XHQxcHggc29saWQgYmxhY2s7XG5cdHBhZGRpbmc6XHRcdDJwdCA4cHQ7XG5cblx0Zm9udC1zaXplOlx0XHQ0dmg7XG59XG5cbiNsb2NyZW5kZXJcbntcblx0cG9zaXRpb246XHRcdGFic29sdXRlO1xuXG5cdGxlZnQ6XHRcdFx0MTZweDtcblx0cmlnaHQ6XHRcdFx0MTZweDtcblx0Ym90dG9tOlx0XHRcdDhweDtcblx0dG9wOlx0XHRcdDhweDtcbn1cblxudWwudG93bm5hdi1wcm9tcHQgKlxue1xuXHRjdXJzb3I6XHRwb2ludGVyO1xufSIsIiN0b3duaW5mbyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA0MnZoO1xuICBmb250LXNpemU6IDh2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jdG93bnNjZW5lIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDU0dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5sb2NpbWFnZWhvbGRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTZweDtcbiAgcmlnaHQ6IDE2cHg7XG4gIGJvdHRvbTogOHB4O1xuICB0b3A6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9jaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4ubW92ZWNvbnRyb2xzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDJwdCA4cHQ7XG4gIGZvbnQtc2l6ZTogNHZoO1xufVxuXG4jbG9jcmVuZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNnB4O1xuICByaWdodDogMTZweDtcbiAgYm90dG9tOiA4cHg7XG4gIHRvcDogOHB4O1xufVxuXG51bC50b3dubmF2LXByb21wdCAqIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/storyteller/scenes/town-ui/town-ui.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/storyteller/scenes/town-ui/town-ui.component.ts ***!
          \*****************************************************************/
        /*! exports provided: TownUIComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TownUIComponent", function () { return TownUIComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../scene-ui/scene-ref */ "./src/app/scene-ui/scene-ref.ts");
            /* harmony import */ var _scene_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scene-renderer */ "./src/app/storyteller/scenes/scene-renderer.ts");
            /* harmony import */ var _lib_art_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/art-renderer */ "./src/app/storyteller/scenes/lib/art-renderer.ts");
            /* harmony import */ var _storyteller_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../storyteller-interface */ "./src/app/storyteller/storyteller-interface.ts");
            var TownUIComponent = /** @class */ (function (_super) {
                __extends(TownUIComponent, _super);
                function TownUIComponent(sceneref, storytellerinterface) {
                    if (storytellerinterface === void 0) { storytellerinterface = null; }
                    var _this = _super.call(this, sceneref, storytellerinterface) || this;
                    _this.sceneref = sceneref;
                    console.log("TownNav injected w stinterface: ", storytellerinterface);
                    _this.townscene = _this.sceneref.scene;
                    console.log("town info: ", JSON.stringify(_this.townscene.town));
                    _this.taskprompts = [];
                    return _this;
                }
                TownUIComponent.prototype.ngOnInit = function () {
                };
                TownUIComponent.prototype.ngAfterViewInit = function () {
                    this.viewrenderer = new _lib_art_renderer__WEBPACK_IMPORTED_MODULE_4__["ArtRenderer"](this.locrender);
                    this.moveToLoc(this.townscene.locpoint);
                };
                TownUIComponent.prototype.moveToLoc = function (target) {
                    this.townscene.moveToLoc(target);
                    this.sceneref.triggerSceneCheck();
                    this.renderView();
                    this.updateTaskPrompts();
                };
                TownUIComponent.prototype.updateTaskPrompts = function () {
                    var quests = this.sceneref.game.quests.values();
                    var qtrefs = [];
                    for (var _i = 0, quests_1 = quests; _i < quests_1.length; _i++) {
                        var quest = quests_1[_i];
                        // console.log("checking quest", quest);
                        var available = quest.getAvailableTasks(this.sceneref.game);
                        // console.log("found available tasks", available);
                        var qtasks = [];
                        for (var _a = 0, available_1 = available; _a < available_1.length; _a++) {
                            var taskid = available_1[_a];
                            // console.log("TASK AVAILABLE: ", taskid, "for quest", quest, "w state", quest.states.get(taskid));
                            // this.st
                            // prompts.push(quest.loadTask(taskid));
                            qtrefs.push({
                                quest: quest,
                                taskid: taskid
                            });
                        }
                    }
                    this.taskprompts = [];
                    var ui = this;
                    this.stint.loadQuestTasks(qtrefs, function (tasks) {
                        var prompts = [];
                        for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
                            var qtask = tasks_1[_i];
                            prompts.push(qtask);
                        }
                        // console.log("TownUI reaction to qtasks load", tasks," to prompts ", prompts);
                        ui.taskprompts = prompts;
                    });
                };
                TownUIComponent.prototype.renderView = function () {
                    var urlpath = this.townscene.currentloc.image;
                    if (urlpath) {
                        var fullpath = "./assets/graph/sceneviews/" + urlpath;
                        this.viewrenderer.loadRenderImage(fullpath);
                    }
                };
                TownUIComponent.prototype.localizeTextAsset = function (text) {
                    while (text.includes("$TOWN$")) {
                        text = text.replace("$TOWN$", this.townscene.town.name);
                    }
                    return text;
                };
                TownUIComponent.prototype.activatePrompt = function (task) {
                    console.log("prompt activation for task", task, "in", task.caller);
                    task.scene.driver = task;
                    // narrative should be set by StoryTeller
                    this.sceneref.triggerSubScene(task.scene);
                };
                return TownUIComponent;
            }(_scene_renderer__WEBPACK_IMPORTED_MODULE_3__["SceneRenderer"]));
            TownUIComponent.ctorParameters = function () { return [
                { type: _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_2__["SceneRef"] },
                { type: _storyteller_interface__WEBPACK_IMPORTED_MODULE_5__["StorytellerInterface"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("locrender", { static: false })
            ], TownUIComponent.prototype, "locrender", void 0);
            TownUIComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-town-ui',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./town-ui.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/scenes/town-ui/town-ui.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./town-ui.component.scss */ "./src/app/storyteller/scenes/town-ui/town-ui.component.scss")).default]
                })
            ], TownUIComponent);
            /***/ 
        }),
        /***/ "./src/app/storyteller/scenes/world-map-view/world-map-view.component.scss": 
        /*!*********************************************************************************!*\
          !*** ./src/app/storyteller/scenes/world-map-view/world-map-view.component.scss ***!
          \*********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#mapholder {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RyYWtlL0NvZGUvV2FuZGVyL1dhbmRlckFORy9zcmMvYXBwL3N0b3J5dGVsbGVyL3NjZW5lcy93b3JsZC1tYXAtdmlldy93b3JsZC1tYXAtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3Rvcnl0ZWxsZXIvc2NlbmVzL3dvcmxkLW1hcC12aWV3L3dvcmxkLW1hcC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUMsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDQUQiLCJmaWxlIjoic3JjL2FwcC9zdG9yeXRlbGxlci9zY2VuZXMvd29ybGQtbWFwLXZpZXcvd29ybGQtbWFwLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwaG9sZGVyXG57XG5cdHBvc2l0aW9uOlx0YWJzb2x1dGU7XG5cdHRvcDpcdFx0MDtcblx0bGVmdDpcdFx0MDtcblx0cmlnaHQ6XHRcdDA7XG5cdGJvdHRvbTpcdFx0MDtcbn1cblxuIiwiI21hcGhvbGRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/storyteller/scenes/world-map-view/world-map-view.component.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/storyteller/scenes/world-map-view/world-map-view.component.ts ***!
          \*******************************************************************************/
        /*! exports provided: WorldMapViewComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldMapViewComponent", function () { return WorldMapViewComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../scene-ui/scene-ref */ "./src/app/scene-ui/scene-ref.ts");
            /* harmony import */ var konva__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! konva */ "./node_modules/konva/lib/index.js");
            /* harmony import */ var konva__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(konva__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _scene_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scene-renderer */ "./src/app/storyteller/scenes/scene-renderer.ts");
            var WorldMapViewComponent = /** @class */ (function (_super) {
                __extends(WorldMapViewComponent, _super);
                function WorldMapViewComponent(sceneref) {
                    var _this = _super.call(this, sceneref) || this;
                    _this.sceneref = sceneref;
                    _this.scenecheck = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    _this.TILESIZE = 48;
                    _this.TILESBYTERRRAIN = {
                        "M": "worldmaptile_mountains_trans.png",
                        "H": "worldmaptile_hills_trans.png",
                        "F": "worldmaptile_woods_trans.png",
                        "P": "worldmaptile_empty.png",
                    };
                    _this.PATH_TILES = "assets/graph/maptiles/";
                    _this.MARKERSBYID = {
                        "towns": "worldmapmarker_castle_trans.png",
                        "passes": "worldmapmarker_mountainpass_trans.png",
                        "hero": "worldmapmarker_hero_trans.png",
                    };
                    _this.PATH_MARKERS = "assets/graph/mapmarkers/";
                    console.log("constructor w sref game ", _this.sceneref.game);
                    _this.mapscene = _this.sceneref.scene;
                    _this.prepareAssetsHolders();
                    return _this;
                }
                WorldMapViewComponent.prototype.prepareAssetsHolders = function () {
                    this.terraintiles = new Map();
                    this.tileimages = new Map();
                    this.markerfiles = new Map();
                    this.markerimages = new Map();
                    for (var key in this.TILESBYTERRRAIN) {
                        this.terraintiles.set(key, this.PATH_TILES + this.TILESBYTERRRAIN[key]);
                    }
                    this.tileimages = new Map();
                    for (var _i = 0, _a = this.terraintiles.keys(); _i < _a.length; _i++) {
                        var terrain = _a[_i];
                        this.tileimages.set(terrain, null);
                    }
                    for (var key in this.MARKERSBYID) {
                        this.markerfiles.set(key, this.PATH_MARKERS + this.MARKERSBYID[key]);
                    }
                    this.markerimages = new Map();
                    for (var _b = 0, _c = this.markerfiles.keys(); _b < _c.length; _b++) {
                        var markerid = _c[_b];
                        this.markerimages.set(markerid, null);
                    }
                };
                WorldMapViewComponent.prototype.ngOnInit = function () {
                    console.log("starting worldmap w sref game ", this.sceneref);
                    this.worldmap = this.sceneref.game.worldmap;
                    this.loadAssets();
                };
                WorldMapViewComponent.prototype.ngAfterViewInit = function () {
                    // this.loadAssets();
                };
                WorldMapViewComponent.prototype.loadAssets = function () {
                    var ui = this;
                    var _loop_4 = function (terrain) {
                        var imageObj = new Image();
                        imageObj.onload = function () {
                            ui.tileimages.set(terrain, imageObj);
                            ui.checkReadyRender();
                        };
                        imageObj.src = this_4.terraintiles.get(terrain);
                    };
                    var this_4 = this;
                    for (var _i = 0, _a = this.terraintiles.keys(); _i < _a.length; _i++) {
                        var terrain = _a[_i];
                        _loop_4(terrain);
                    }
                    var _loop_5 = function (markerid) {
                        var imageObj = new Image();
                        imageObj.onload = function () {
                            ui.markerimages.set(markerid, imageObj);
                            ui.checkReadyRender();
                        };
                        imageObj.src = this_5.markerfiles.get(markerid);
                    };
                    var this_5 = this;
                    for (var _b = 0, _c = this.markerfiles.keys(); _b < _c.length; _b++) {
                        var markerid = _c[_b];
                        _loop_5(markerid);
                    }
                };
                WorldMapViewComponent.prototype.checkReadyRender = function () {
                    for (var _i = 0, _a = this.tileimages.keys(); _i < _a.length; _i++) {
                        var terrain = _a[_i];
                        if (this.tileimages.get(terrain) == null) {
                            // console.log("missing maptile", terrain, "wait");
                            return;
                        }
                    }
                    for (var _b = 0, _c = this.markerimages.keys(); _b < _c.length; _b++) {
                        var markerid = _c[_b];
                        if (this.markerimages.get(markerid) == null) {
                            // console.log("missing mapmarker", markerid, "wait");
                            return;
                        }
                    }
                    // console.log("ready on all terrains");
                    this.initRender();
                };
                WorldMapViewComponent.prototype.initRender = function () {
                    var vpw = this.container.nativeElement.offsetWidth;
                    var vph = this.container.nativeElement.offsetHeight;
                    this.TILESIZE = Math.min(vpw, vph) / 18;
                    var tilesX = this.worldmap.sizeX;
                    var tilesY = this.worldmap.sizeY;
                    var mapWidth = tilesX * this.TILESIZE;
                    var mapHeight = tilesY * this.TILESIZE;
                    // console.log(this.TILESIZE, tilesX, tilesY, mapWidth, mapHeight);
                    var stage = new konva__WEBPACK_IMPORTED_MODULE_3___default.a.Stage({
                        container: "mapholder",
                        width: mapWidth,
                        height: mapHeight,
                    });
                    var container = this.container.nativeElement;
                    var contwidth = container.offsetWidth;
                    var contheight = container.offsetHeight;
                    // console.log("stage ", contwidth, contheight);
                    var bound_sx = -(mapWidth - contwidth);
                    var bound_dx = 0;
                    var bound_top = -(mapHeight - contheight);
                    var bound_bottom = 0;
                    // console.log("bounds", bound_sx, bound_top, bound_dx, bound_bottom);
                    var tilelayer = new konva__WEBPACK_IMPORTED_MODULE_3___default.a.Layer({
                        draggable: true,
                        dragBoundFunc: function (pos) {
                            // console.log("tilelayer at", tilelayer.x(), tilelayer.y());
                            // console.log("mouse at", pos.x, pos.y);
                            var x = Math.min(Math.max(bound_sx, pos.x), bound_dx);
                            var y = Math.min(Math.max(bound_top, pos.y), bound_bottom);
                            return ({
                                x: x,
                                y: y
                            });
                        }
                    });
                    stage.add(tilelayer);
                    // let ts_a = new Date();
                    for (var x = 0; x < tilesX; x++) {
                        for (var y = 0; y < tilesY; y++) {
                            var terrain = this.worldmap.getTerrainAt(x, y);
                            // console.log(x, y, terrain);
                            if (terrain != null) {
                                // let imageObj = new Image();
                                // imageObj.src = terraintiles.get(terrain);
                                // let filename = terraintiles.get(terrain);
                                var tile = new konva__WEBPACK_IMPORTED_MODULE_3___default.a.Image({
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
                    var widget = this;
                    var locs = this.worldmap.getAllLocations();
                    var _loop_6 = function (loc) {
                        // console.log("adding location to map: ", loc, "w coords", loc["coords"]);
                        // let coords = loc["coords"];
                        // let loctype = loc["loctype"];
                        var marker_1 = new konva__WEBPACK_IMPORTED_MODULE_3___default.a.Image({
                            image: this_6.markerimages.get(loc.loctype),
                            x: loc.pos.x * this_6.TILESIZE,
                            y: loc.pos.y * this_6.TILESIZE,
                            width: this_6.TILESIZE,
                            height: this_6.TILESIZE,
                        });
                        // console.log("creating marker at", loc.pos.x, loc.pos.y)
                        tilelayer.add(marker_1);
                        marker_1.on("click", function (ev) {
                            console.log("marker click ", ev, "on", this, "for loc", loc);
                            widget.chooseDestination(loc);
                            ev.cancelBubble = true;
                        });
                    };
                    var this_6 = this;
                    for (var _i = 0, locs_1 = locs; _i < locs_1.length; _i++) {
                        var loc = locs_1[_i];
                        _loop_6(loc);
                    }
                    // create hero marker
                    var game = this.sceneref.game;
                    var playerpos = game.hero.pos.getCoords();
                    var imageref = this.markerimages.get("hero");
                    // let imagepath = this.markerfiles.get("hero");
                    var marker = new konva__WEBPACK_IMPORTED_MODULE_3___default.a.Image({
                        image: imageref,
                        x: playerpos[0] * this.TILESIZE,
                        y: playerpos[1] * this.TILESIZE,
                        width: this.TILESIZE,
                        height: this.TILESIZE,
                    });
                    marker.on("click", function (ev) {
                        // console.log("marker click ", ev, "on", this, "for loc", loc);
                        var loc = game.worldmap.getLocationAt(playerpos);
                        if (!!loc) {
                            widget.chooseDestination(loc);
                            ev.cancelBubble = true;
                        }
                    });
                    tilelayer.add(marker);
                    tilelayer.batchDraw();
                    // loclayer.batchDraw();
                    // console.log("redraw");
                    // console.log("mapdom size", this.mapdom.nativeElement.offsetHeight, this.mapdom.nativeElement.offsetWidth);
                    // console.log("container size", this.container.nativeElement.offsetHeight, this.container.nativeElement.offsetWidth);
                    var shiftX = playerpos[0] * this.TILESIZE - this.container.nativeElement.offsetWidth / 2;
                    var shiftY = playerpos[1] * this.TILESIZE - this.container.nativeElement.offsetHeight / 2;
                    tilelayer.setAbsolutePosition({ x: -shiftX, y: -shiftY });
                    // console.log("map ready");
                };
                WorldMapViewComponent.prototype.onClose = function () {
                    this.sceneref.close('BYE WORLD MAP');
                };
                WorldMapViewComponent.prototype.chooseDestination = function (destination) {
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
                };
                return WorldMapViewComponent;
            }(_scene_renderer__WEBPACK_IMPORTED_MODULE_4__["SceneRenderer"]));
            WorldMapViewComponent.ctorParameters = function () { return [
                { type: _scene_ui_scene_ref__WEBPACK_IMPORTED_MODULE_2__["SceneRef"] }
            ]; };
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
            /***/ 
        }),
        /***/ "./src/app/storyteller/storyteller-interface.ts": 
        /*!******************************************************!*\
          !*** ./src/app/storyteller/storyteller-interface.ts ***!
          \******************************************************/
        /*! exports provided: StorytellerInterface */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorytellerInterface", function () { return StorytellerInterface; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _rpg_engine_quests_quest_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rpg-engine/quests/quest-task */ "./src/app/rpg-engine/quests/quest-task.ts");
            /**
             * StorytellerInterface gives access to the {@link StorytellerComponent} functionalities without creating circular imports (similar to {@link SceneRendererLoader}).
             * Its main use case is loading data during play, to avoid front-loading the whole world and quests.
             * The idea is to add only one object for the {@link SceneUIComponent} objects to use to interact with and keep initialization through {@link SceneUIService} as simple as possible.
             */
            var StorytellerInterface = /** @class */ (function () {
                function StorytellerInterface(stref) {
                    this.stref = stref;
                }
                StorytellerInterface.prototype.checkUpdateSceneRender = function () {
                    this.stref.checkUpdateSceneRender();
                };
                StorytellerInterface.prototype.getStoryteller = function () {
                    return this.stref;
                };
                StorytellerInterface.prototype.loadQuestTasks = function (refs, callback) {
                    var filerefs = [];
                    var byQuest = new Map();
                    for (var _i = 0, refs_1 = refs; _i < refs_1.length; _i++) {
                        var ref = refs_1[_i];
                        var inQuest = byQuest.has(ref.quest) ? byQuest.get(ref.quest) : [];
                        inQuest.push(ref.taskid);
                        byQuest.set(ref.quest, inQuest);
                        filerefs.push(ref.quest.fileref);
                    }
                    this.stref.loader.loadDataFiles(filerefs, function (data) {
                        var tasks = [];
                        for (var _i = 0, refs_2 = refs; _i < refs_2.length; _i++) {
                            var ref = refs_2[_i];
                            var rawtask = data[ref.quest.fileref]["tasks"][ref.taskid];
                            var qtask = _rpg_engine_quests_quest_task__WEBPACK_IMPORTED_MODULE_1__["QuestTask"].fromJSON(rawtask);
                            qtask.setCaller(ref.quest);
                            tasks.push(qtask);
                        }
                        callback(tasks);
                    });
                };
                return StorytellerInterface;
            }());
            /***/ 
        }),
        /***/ "./src/app/storyteller/storyteller.component.scss": 
        /*!********************************************************!*\
          !*** ./src/app/storyteller/storyteller.component.scss ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#st-page {\n  background-image: url(\"/assets/ui/temporaryparchment.jpg\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RyYWtlL0NvZGUvV2FuZGVyL1dhbmRlckFORy9zcmMvYXBwL3N0b3J5dGVsbGVyL3N0b3J5dGVsbGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdG9yeXRlbGxlci9zdG9yeXRlbGxlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVDLDBEQUFBO0FDQUQiLCJmaWxlIjoic3JjL2FwcC9zdG9yeXRlbGxlci9zdG9yeXRlbGxlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzdC1wYWdlXG57XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvdWkvdGVtcG9yYXJ5cGFyY2htZW50LmpwZ1wiKTtcbn1cblxuIiwiI3N0LXBhZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3VpL3RlbXBvcmFyeXBhcmNobWVudC5qcGdcIik7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/storyteller/storyteller.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/storyteller/storyteller.component.ts ***!
          \******************************************************/
        /*! exports provided: StorytellerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorytellerComponent", function () { return StorytellerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _scene_ui_scene_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scene-ui/scene-ui.service */ "./src/app/scene-ui/scene-ui.service.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _rpg_engine_wander_game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rpg-engine/wander-game */ "./src/app/rpg-engine/wander-game.ts");
            /* harmony import */ var _rpg_engine_scenes_journey_departure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rpg-engine/scenes/journey-departure */ "./src/app/rpg-engine/scenes/journey-departure.ts");
            /* harmony import */ var _rpg_engine_world_locs_Town__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rpg-engine/world/locs/Town */ "./src/app/rpg-engine/world/locs/Town.ts");
            /* harmony import */ var _rpg_engine_scenes_town_nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rpg-engine/scenes/town-nav */ "./src/app/rpg-engine/scenes/town-nav.ts");
            /* harmony import */ var _rpg_engine_scenes_passage_trail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../rpg-engine/scenes/passage-trail */ "./src/app/rpg-engine/scenes/passage-trail.ts");
            /* harmony import */ var _rpg_engine_world_locs_TerrainPass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../rpg-engine/world/locs/TerrainPass */ "./src/app/rpg-engine/world/locs/TerrainPass.ts");
            /* harmony import */ var _rpg_engine_wander_game_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../rpg-engine/wander-game-state */ "./src/app/rpg-engine/wander-game-state.ts");
            /* harmony import */ var _rpg_engine_world_world_position__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../rpg-engine/world/world-position */ "./src/app/rpg-engine/world/world-position.ts");
            /* harmony import */ var util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
            /* harmony import */ var util__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_12__);
            /* harmony import */ var _storyteller_interface__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./storyteller-interface */ "./src/app/storyteller/storyteller-interface.ts");
            /* harmony import */ var _scenes_scene_renderer_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./scenes/scene-renderer-loader */ "./src/app/storyteller/scenes/scene-renderer-loader.ts");
            /* harmony import */ var _support_res_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../support/res-loader */ "./src/app/support/res-loader.ts");
            /* harmony import */ var _rpg_engine_scenes_meta_scene__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../rpg-engine/scenes/meta-scene */ "./src/app/rpg-engine/scenes/meta-scene.ts");
            var StorytellerComponent = /** @class */ (function () {
                function StorytellerComponent(sceneui, http) {
                    this.sceneui = sceneui;
                    this.http = http;
                    this.loader = new _support_res_loader__WEBPACK_IMPORTED_MODULE_15__["ResLoader"](http);
                }
                StorytellerComponent.prototype.ngOnInit = function () {
                    this.sceneui.bindStoryTellerUI(this.getInterface());
                    this.loadGameData();
                };
                StorytellerComponent.prototype.loadGameData = function () {
                    var stui = this;
                    _rpg_engine_wander_game__WEBPACK_IMPORTED_MODULE_4__["WanderGame"].loadGame(this.http, function (game) {
                        stui.game = game;
                        stui.checkReadyGame();
                    });
                };
                StorytellerComponent.prototype.checkReadyGame = function () {
                    console.log("running Wander Game ", this.game);
                    this.checkUpdateSceneRender();
                };
                StorytellerComponent.prototype.getLocationSensitiveScene = function () {
                    var ppos = this.game.hero.pos;
                    var place = this.game.worldmap.getLocationAt(ppos.getCoords());
                    console.log("place is town? ", place instanceof _rpg_engine_world_locs_Town__WEBPACK_IMPORTED_MODULE_6__["Town"]);
                    var scene = null;
                    if (place instanceof _rpg_engine_world_locs_Town__WEBPACK_IMPORTED_MODULE_6__["Town"]) {
                        scene = new _rpg_engine_scenes_town_nav__WEBPACK_IMPORTED_MODULE_7__["TownNav"](this.game, place);
                    }
                    else if (place instanceof _rpg_engine_world_locs_TerrainPass__WEBPACK_IMPORTED_MODULE_9__["TerrainPass"]) {
                        scene = new _rpg_engine_scenes_passage_trail__WEBPACK_IMPORTED_MODULE_8__["PassageTrail"](this.game, place);
                    }
                    else {
                        // if all fails, go to map
                        scene = new _rpg_engine_scenes_journey_departure__WEBPACK_IMPORTED_MODULE_5__["JourneyDeparture"](this.game);
                    }
                    return scene;
                };
                StorytellerComponent.prototype.checkUpdateSceneRender = function () {
                    console.log("checkUpdateSceneRender");
                    var scene = this.game.getActiveScene();
                    console.log("checking update on scene ", scene);
                    if (!!scene && scene.sceneFinished()) {
                        // note : this was done INSIDE scene in Java/Android, but we want to be able to affect external quest references and use "pure" references instead of whole quest objects
                        if (!!scene.driver) {
                            scene.driver.setCompleted();
                        }
                        if (!!scene.narrative && scene.narrative instanceof _rpg_engine_scenes_meta_scene__WEBPACK_IMPORTED_MODULE_16__["MetaScene"]) {
                            // console.log("FINISHING SUB SCENE, UPDATE STATES in UBER SCENE!!!!!");
                            scene.narrative.moveOn();
                            // console.log("updated narrative for sub scene", scene.narrative.returnStates());
                        }
                        // console.log("SCENE TYPECHECK: typeof scene", scene.constructor.name);
                        // console.log("having scene finisher");
                        scene = scene.getFollowingScene();
                        // console.log("following scene is ", scene);
                        // console.log("IS FOLLOWING SCENE A METASCENE?", scene instanceof MetaScene);
                        // console.log("SCENE TYPECHECK: typeof following", scene.constructor.name);
                    }
                    if (scene instanceof _rpg_engine_scenes_meta_scene__WEBPACK_IMPORTED_MODULE_16__["MetaScene"]) {
                        var ms = scene;
                        if (ms.getCurrent() == null) {
                            // console.log("SET METASCENE AS FINISHED!");
                            if (!!ms.driver) {
                                // console.log("SET METASCENE DRIVER AS COMPLETE!");
                                ms.driver.setCompleted();
                            }
                            scene = null;
                        }
                    }
                    if (!scene) {
                        scene = this.getLocationSensitiveScene();
                    }
                    // console.log("SCENE TYPECHECK: typeof switchto", scene.constructor.name);
                    this.switchSceneUI(scene);
                };
                StorytellerComponent.prototype.enterSubScene = function (scene) {
                    // NOTE: subscenes ALWAYS come from MetaScenes
                    // TODO: Refactor to enforce MetaScene type checking
                    console.log("entering sub scene ", scene, "from narrative", this.game.activescene);
                    scene.setNarrative(this.game.activescene);
                    this.game.setActiveScene(scene);
                    this.switchSceneUI(scene);
                };
                StorytellerComponent.prototype.switchSceneUI = function (scene) {
                    try {
                        // console.log("removing previous sceneUI for switch to ", scene);
                        this.sceneui.removeSceneUI();
                    }
                    catch (err) {
                        // console.warn("no scene to remove");
                    }
                    if (scene instanceof _rpg_engine_scenes_meta_scene__WEBPACK_IMPORTED_MODULE_16__["MetaScene"]) {
                        // console.log("should switch to internal scene for metascene");
                        var sub = scene.getCurrent();
                        if (sub != null) {
                            // switch to sub ONLY if there is still another scene
                            scene = sub;
                        }
                    }
                    this.game.setActiveScene(scene);
                    console.log("using scene ", scene);
                    var renderer = this.getSceneRenderer(scene);
                    // console.log("opening renderer ", renderer, "for scene", scene);
                    var ref = this.sceneui.open(renderer, scene);
                    // console.log("opened as sceneref", ref);
                    ref.afterClosed.subscribe(function (result) {
                        // console.log('Closed scene', scene, renderer, "w result", result);
                    });
                    var st = this;
                    ref.subSwitch.subscribe(function (subscene) {
                        // console.log("received switch to sub scene ", subscene, "from current", this.game.activescene, "by", ref);
                        st.enterSubScene(subscene);
                    });
                };
                StorytellerComponent.prototype.getSceneRenderer = function (scene) {
                    return _scenes_scene_renderer_loader__WEBPACK_IMPORTED_MODULE_14__["SceneRendererLoader"].getSceneRendererClass(scene);
                };
                StorytellerComponent.prototype.doSaveGame = function () {
                    console.log("Saving game state...");
                    _rpg_engine_wander_game_state__WEBPACK_IMPORTED_MODULE_10__["WanderGameState"].saveToBrowser(this.game);
                };
                StorytellerComponent.prototype.doLoadGame = function () {
                    // console.log("Loading game state...");
                    var loaded = _rpg_engine_wander_game_state__WEBPACK_IMPORTED_MODULE_10__["WanderGameState"].loadFromBrowser();
                    // console.log("loaded game state ", loaded);
                    if (!Object(util__WEBPACK_IMPORTED_MODULE_12__["isUndefined"])(loaded) && loaded !== null) {
                        var pos = loaded["hero"]["position"];
                        this.game.hero.setCoordinates(new _rpg_engine_world_world_position__WEBPACK_IMPORTED_MODULE_11__["WorldPosition"](pos[0], pos[1]));
                        this.game.setActiveScene(null);
                        var qstates = loaded["quests"];
                        for (var questid in qstates) {
                            var quest = this.game.quests.get(questid);
                            for (var taskid in qstates[questid]["tasks"]) {
                                var tstate = qstates[questid]["tasks"][taskid];
                                // console.log("setting ", taskid, "to state", tstate, "in", quest.states);
                                quest.states.set(taskid, tstate);
                            }
                            quest.completed = qstates[questid]["completed"];
                        }
                        this.checkUpdateSceneRender();
                    }
                };
                StorytellerComponent.prototype.getInterface = function () {
                    return new _storyteller_interface__WEBPACK_IMPORTED_MODULE_13__["StorytellerInterface"](this);
                };
                return StorytellerComponent;
            }());
            StorytellerComponent.ctorParameters = function () { return [
                { type: _scene_ui_scene_ui_service__WEBPACK_IMPORTED_MODULE_2__["SceneUIService"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            StorytellerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-storyteller',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./storyteller.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/storyteller/storyteller.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./storyteller.component.scss */ "./src/app/storyteller/storyteller.component.scss")).default]
                })
            ], StorytellerComponent);
            /***/ 
        }),
        /***/ "./src/app/support/res-loader.ts": 
        /*!***************************************!*\
          !*** ./src/app/support/res-loader.ts ***!
          \***************************************/
        /*! exports provided: ResLoader */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResLoader", function () { return ResLoader; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var ResLoader = /** @class */ (function () {
                function ResLoader(http) {
                    this.http = http;
                }
                ResLoader.prototype.loadDataFile = function (filepath, callback) {
                    var locdata = this.http.get(filepath);
                    locdata.subscribe(function (response) {
                        console.log("LOAD RESULT", response);
                        callback(response);
                    });
                };
                ResLoader.prototype.loadDataFiles = function (filepaths, multicallback) {
                    var loaded = {};
                    function getCheckerFunction(key) {
                        return function (data) {
                            loaded[key] = data;
                            if (Object.keys(loaded).length === filepaths.length) {
                                multicallback(loaded);
                            }
                        };
                    }
                    var _loop_7 = function (filepath) {
                        var checker = getCheckerFunction(filepath);
                        this_7.loadDataFile(filepath, checker);
                        this_7.http.get(filepath).subscribe(function (response) {
                            loaded[filepath] = response;
                        });
                    };
                    var this_7 = this;
                    // ADD ERROR HANDLING
                    for (var _i = 0, filepaths_1 = filepaths; _i < filepaths_1.length; _i++) {
                        var filepath = filepaths_1[_i];
                        _loop_7(filepath);
                    }
                };
                return ResLoader;
            }());
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
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
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/drake/Code/Wander/WanderANG/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map