(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\n  <div class=\"column is-three-quarters\">\n    <section class=\"hero has-background-white-ter is-fullheight\">\n      <div class=\"hero-body\">\n        <div class=\"container\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </section>\n  </div>\n  <div class=\"column\">\n    <app-navbar></app-navbar>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title\" >{{ title }}</h1>\n<h2 >\n    <span >\n      <p>Hello World!</p>\n      <br />\n      <span typingAnimation [typeSpeed]=\"20\" [startDelay]=\"1000\" [hideCursorOnComplete]=\"true\">\n        I'm a Full Stack Developer\n      </span>\n    </span>\n    <section>\n      <div class=\"container\">\n        <div class=\"columns\">\n          <div class=\"column shake\">\n              <span class=\"shake icon\"><img src=\"../../assets/images/angular.svg\"></span>\n          </div>\n          <div class=\"column shake\">\n              <span class=\"shake icon\"><img src=\"../../assets/images/dotnetcore.svg\"></span>\n          </div>\n        </div>\n      </div>\n    </section>\n</h2>\n  \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-fullheight\">\n    <div class=\"hero-body\">\n        <div class=\"container\">\n            <div class=\"is-fullwidth\">\n                <a [routerLink]=\"['about']\" class=\"button is-rounded is-hovered is-warning magictime puffIn about-btn\">About</a>\n            </div>\n          <div class=\"is-fullwidth\">\n              <a [routerLink]=\"['skills']\" class=\"button is-rounded is-hovered is-warning magictime puffIn skill-btn\">Skills</a>\n          </div>\n          <div class=\"is-fullwidth\">\n              <a [routerLink]=\"['work']\" class=\"button is-rounded is-hovered is-warning magictime puffIn work-btn\">Work Experience</a>\n          </div>\n          <!--\n          <div class=\"is-fullwidth\">\n              <a [routerLink]=\"['projects']\" class=\"button is-rounded is-hovered is-warning magictime puffIn project-btn\">Projects</a>\n          </div>\n          -->\n          <div class=\"is-fullwidth\">\n              <a [routerLink]=\"['socials']\"  class=\"button is-rounded is-hovered is-warning magictime puffIn social-btn\">Socials</a>\n          </div>\n          <div class=\"is-fullwidth\">\n              <a class=\"button is-rounded is-hovered is-warning magictime puffIn resume-btn\" target=\"_blank\" href=\"../../assets/docs/Resume Roshan Krishnan Thirikkott.pdf\">Resume</a>\n          </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/projects.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  projects works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/skills/skill-item/skill-item.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skills/skill-item/skill-item.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2 class=\"title\">{{ skill.type }}</h2>\n</div>\n<div class=\"container\">\n    <div class=\"has-background-light\" >\n       <span class=\"tag is-warning is-medium\" *ngFor=\"let name of skill.names\">{{name}}</span>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/skills/skills.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skills/skills.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-skill-item class=\"skill-item\" *ngFor=\"let skill of skills\" [skill]=skill></app-skill-item>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/socials/socials.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/socials/socials.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  socials works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/work/work.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/work/work.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  work works!\n</p>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_shared/skill.model.ts":
/*!****************************************!*\
  !*** ./src/app/_shared/skill.model.ts ***!
  \****************************************/
/*! exports provided: Skill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skill", function() { return Skill; });
class Skill {
    constructor(names, type) {
        this.names = names;
        this.type = type;
    }
}


/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AboutComponent);



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
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _socials_socials_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./socials/socials.component */ "./src/app/socials/socials.component.ts");









const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], pathMatch: 'full' },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], pathMatch: 'full' },
    { path: 'skills', component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__["SkillsComponent"], pathMatch: 'full' },
    { path: 'work', component: _work_work_component__WEBPACK_IMPORTED_MODULE_6__["WorkComponent"], pathMatch: 'full' },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"], pathMatch: 'full' },
    { path: 'socials', component: _socials_socials_component__WEBPACK_IMPORTED_MODULE_8__["SocialsComponent"], pathMatch: 'full' },
    { path: '*', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], pathMatch: 'full' },
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var angular_typing_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-typing-animation */ "./node_modules/angular-typing-animation/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _socials_socials_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./socials/socials.component */ "./src/app/socials/socials.component.ts");
/* harmony import */ var _skills_skill_item_skill_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./skills/skill-item/skill-item.component */ "./src/app/skills/skill-item/skill-item.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            angular_typing_animation__WEBPACK_IMPORTED_MODULE_3__["TypingAnimationDirective"],
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
            _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__["SkillsComponent"],
            _work_work_component__WEBPACK_IMPORTED_MODULE_10__["WorkComponent"],
            _projects_projects_component__WEBPACK_IMPORTED_MODULE_11__["ProjectsComponent"],
            _socials_socials_component__WEBPACK_IMPORTED_MODULE_12__["SocialsComponent"],
            _skills_skill_item_skill_item_component__WEBPACK_IMPORTED_MODULE_13__["SkillItemComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".shake {\n    -webkit-animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;\n            animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -webkit-perspective: 1000px;\n            perspective: 1000px;\n  }\n  \n  @-webkit-keyframes shake {\n    10%, 90% {\n      -webkit-transform: translate3d(-1px, 0, 0);\n              transform: translate3d(-1px, 0, 0);\n    }\n    \n    20%, 80% {\n      -webkit-transform: translate3d(2px, 0, 0);\n              transform: translate3d(2px, 0, 0);\n    }\n  \n    30%, 50%, 70% {\n      -webkit-transform: translate3d(-4px, 0, 0);\n              transform: translate3d(-4px, 0, 0);\n    }\n  \n    40%, 60% {\n      -webkit-transform: translate3d(4px, 0, 0);\n              transform: translate3d(4px, 0, 0);\n    }\n  }\n  \n  @keyframes shake {\n    10%, 90% {\n      -webkit-transform: translate3d(-1px, 0, 0);\n              transform: translate3d(-1px, 0, 0);\n    }\n    \n    20%, 80% {\n      -webkit-transform: translate3d(2px, 0, 0);\n              transform: translate3d(2px, 0, 0);\n    }\n  \n    30%, 50%, 70% {\n      -webkit-transform: translate3d(-4px, 0, 0);\n              transform: translate3d(-4px, 0, 0);\n    }\n  \n    40%, 60% {\n      -webkit-transform: translate3d(4px, 0, 0);\n              transform: translate3d(4px, 0, 0);\n    }\n  }\n  \n  .icon {\n      width: 200px;\n      height: 200px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpRUFBeUQ7WUFBekQseURBQXlEO0lBQ3pELHVDQUErQjtZQUEvQiwrQkFBK0I7SUFDL0IsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQiwyQkFBbUI7WUFBbkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0U7TUFDRSwwQ0FBa0M7Y0FBbEMsa0NBQWtDO0lBQ3BDOztJQUVBO01BQ0UseUNBQWlDO2NBQWpDLGlDQUFpQztJQUNuQzs7SUFFQTtNQUNFLDBDQUFrQztjQUFsQyxrQ0FBa0M7SUFDcEM7O0lBRUE7TUFDRSx5Q0FBaUM7Y0FBakMsaUNBQWlDO0lBQ25DO0VBQ0Y7O0VBaEJBO0lBQ0U7TUFDRSwwQ0FBa0M7Y0FBbEMsa0NBQWtDO0lBQ3BDOztJQUVBO01BQ0UseUNBQWlDO2NBQWpDLGlDQUFpQztJQUNuQzs7SUFFQTtNQUNFLDBDQUFrQztjQUFsQyxrQ0FBa0M7SUFDcEM7O0lBRUE7TUFDRSx5Q0FBaUM7Y0FBakMsaUNBQWlDO0lBQ25DO0VBQ0Y7O0VBRUE7TUFDSSxZQUFZO01BQ1osYUFBYTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNoYWtlIHtcbiAgICBhbmltYXRpb246IHNoYWtlIDAuODJzIGN1YmljLWJlemllciguMzYsLjA3LC4xOSwuOTcpIGJvdGg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzaGFrZSB7XG4gICAgMTAlLCA5MCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcbiAgICB9XG4gICAgXG4gICAgMjAlLCA4MCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xuICAgIH1cbiAgXG4gICAgMzAlLCA1MCUsIDcwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00cHgsIDAsIDApO1xuICAgIH1cbiAgXG4gICAgNDAlLCA2MCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg0cHgsIDAsIDApO1xuICAgIH1cbiAgfVxuXG4gIC5pY29uIHtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIGhlaWdodDogMjAwcHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.title = 'Roshan Krishnan Thirikkott';
    }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-btn {\n    -webkit-animation-duration: .4s;\n            animation-duration: .4s;\n}\n.skill-btn {\n    -webkit-animation-duration: .8s;\n            animation-duration: .8s;\n}\n.work-btn {\n    -webkit-animation-duration: 1.2s;\n            animation-duration: 1.2s;\n}\n.project-btn {\n    -webkit-animation-duration: 1.6s;\n            animation-duration: 1.6s;\n}\n.social-btn {\n    -webkit-animation-duration: 2s;\n            animation-duration: 2s;\n}\n.resume-btn {\n    -webkit-animation-duration: 2.4s;\n            animation-duration: 2.4s;\n}\na {\n    padding : 20px !important;\n    margin: 10px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksK0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0NBQXdCO1lBQXhCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksZ0NBQXdCO1lBQXhCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksOEJBQXNCO1lBQXRCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZ0NBQXdCO1lBQXhCLHdCQUF3QjtBQUM1QjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1idG4ge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjRzO1xufVxuLnNraWxsLWJ0biB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuOHM7XG59XG4ud29yay1idG4ge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS4ycztcbn1cbi5wcm9qZWN0LWJ0biB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjZzO1xufVxuLnNvY2lhbC1idG4ge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG59XG4ucmVzdW1lLWJ0biB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyLjRzO1xufVxuXG5hIHtcbiAgICBwYWRkaW5nIDogMjBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavbarComponent);



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectsComponent = class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html"),
        styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProjectsComponent);



/***/ }),

/***/ "./src/app/skills/skill-item/skill-item.component.css":
/*!************************************************************!*\
  !*** ./src/app/skills/skill-item/skill-item.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tag {\n    padding: 10px;\n    margin: 10px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL3NraWxsLWl0ZW0vc2tpbGwtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NraWxscy9za2lsbC1pdGVtL3NraWxsLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWcge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/skills/skill-item/skill-item.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/skills/skill-item/skill-item.component.ts ***!
  \***********************************************************/
/*! exports provided: SkillItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillItemComponent", function() { return SkillItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_skill_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_shared/skill.model */ "./src/app/_shared/skill.model.ts");



let SkillItemComponent = class SkillItemComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_skill_model__WEBPACK_IMPORTED_MODULE_2__["Skill"])
], SkillItemComponent.prototype, "skill", void 0);
SkillItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skill-item',
        template: __webpack_require__(/*! raw-loader!./skill-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/skills/skill-item/skill-item.component.html"),
        styles: [__webpack_require__(/*! ./skill-item.component.css */ "./src/app/skills/skill-item/skill-item.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SkillItemComponent);



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/*!*********************************************!*\
  !*** ./src/app/skills/skills.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".column {\n    margin: 10px !important;\n    padding: 20px !important;\n}\n\n.tile {\n    margin: 50 px;\n    padding: 15px;\n}\n\n.skill-item {\n    margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NraWxscy9za2lsbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2x1bW4ge1xuICAgIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLnRpbGUge1xuICAgIG1hcmdpbjogNTAgcHg7XG4gICAgcGFkZGluZzogMTVweDtcbn1cblxuLnNraWxsLWl0ZW0ge1xuICAgIG1hcmdpbjogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _skills_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills.service */ "./src/app/skills/skills.service.ts");



let SkillsComponent = class SkillsComponent {
    constructor(skillsService) {
        this.skillsService = skillsService;
    }
    ngOnInit() {
        this.skills = this.skillsService.getSkills();
    }
};
SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skills',
        template: __webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/index.js!./src/app/skills/skills.component.html"),
        styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/skills/skills.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_skills_service__WEBPACK_IMPORTED_MODULE_2__["SkillsService"]])
], SkillsComponent);



/***/ }),

/***/ "./src/app/skills/skills.service.ts":
/*!******************************************!*\
  !*** ./src/app/skills/skills.service.ts ***!
  \******************************************/
/*! exports provided: SkillsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsService", function() { return SkillsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_skill_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_shared/skill.model */ "./src/app/_shared/skill.model.ts");



let SkillsService = class SkillsService {
    constructor() {
        this.skills = [
            new _shared_skill_model__WEBPACK_IMPORTED_MODULE_2__["Skill"](["C#", "JAVA", "TypeScript", "JavaScript"], "Programming Language"),
            new _shared_skill_model__WEBPACK_IMPORTED_MODULE_2__["Skill"]([".NET Core", ".NET Web API", "JAVA EE", "Node.js"], "Server side"),
            new _shared_skill_model__WEBPACK_IMPORTED_MODULE_2__["Skill"](["Angular", "AngularJS", "React", "CSS"], "Client side"),
            new _shared_skill_model__WEBPACK_IMPORTED_MODULE_2__["Skill"](["SQL Server", "Oracle", "MongoDB", "MySQL"], "Database"),
            new _shared_skill_model__WEBPACK_IMPORTED_MODULE_2__["Skill"](["xUnit", "MS Test", "Jasmine", "Protractor", "Selenium"], "Testing"),
            new _shared_skill_model__WEBPACK_IMPORTED_MODULE_2__["Skill"](["EF", "EF Core", "LINQ", "Docker", "Jenkins", "Kubernetes", "RabbitMQ", "Bootstrap", "Material", "Bulma"], "Other Tools and Frameworks")
        ];
    }
    getSkills() {
        return this.skills.slice();
    }
};
SkillsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SkillsService);



/***/ }),

/***/ "./src/app/socials/socials.component.css":
/*!***********************************************!*\
  !*** ./src/app/socials/socials.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbHMvc29jaWFscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/socials/socials.component.ts":
/*!**********************************************!*\
  !*** ./src/app/socials/socials.component.ts ***!
  \**********************************************/
/*! exports provided: SocialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialsComponent", function() { return SocialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SocialsComponent = class SocialsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SocialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-socials',
        template: __webpack_require__(/*! raw-loader!./socials.component.html */ "./node_modules/raw-loader/index.js!./src/app/socials/socials.component.html"),
        styles: [__webpack_require__(/*! ./socials.component.css */ "./src/app/socials/socials.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SocialsComponent);



/***/ }),

/***/ "./src/app/work/work.component.css":
/*!*****************************************!*\
  !*** ./src/app/work/work.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmsvd29yay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/work/work.component.ts":
/*!****************************************!*\
  !*** ./src/app/work/work.component.ts ***!
  \****************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WorkComponent = class WorkComponent {
    constructor() { }
    ngOnInit() {
    }
};
WorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-work',
        template: __webpack_require__(/*! raw-loader!./work.component.html */ "./node_modules/raw-loader/index.js!./src/app/work/work.component.html"),
        styles: [__webpack_require__(/*! ./work.component.css */ "./src/app/work/work.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WorkComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/stonemusic/Documents/Stack/workspace/angular/roshankrishnan7/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map