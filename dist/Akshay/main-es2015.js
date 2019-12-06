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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-card class=\"size\" style=\"box-shadow: none;\">\n  <span style=\"font-size:1.3em;font-weight: bold;\">Hey, I'm Akshay</span>\n  <br />\n  <p style=\"text-align: justify;\">\n    I am a Fullstack Developer From India. I love coding on MEAN Stack, and I\n    love Angular the most. I am currently working as Junior Solutions Engineer\n    at an amazing company, <span style=\"color:#23AAAA;\">Meltwater</span>. I specialize in developing and designing custom web components, databse administation, backend server development and deployment engineering.\n  </p>\n  <p style=\"text-align: justify;\">\n    Do I have a life? Yes. What do I do when I'm not coding? Well,\n    I'm out there travelling on my motorcycle or probably watching Master Chef,\n    although I don't cook as much as I watch. <span style=\"color:silver\"\n    >( I don't cook at all, but let's keep that between us )</span\n  >\n  </p>\n  <p style=\"text-align: justify;\">That's all I have for now. More information coming soon. Building awesome websites is one of my hobby, so you will witness something really cool the next time you visit my website</p> -->\n  <!-- <img src=\"../assets/imgages/1.JPG\" style=\"width:100%\" /> -->\n<!-- </mat-card>\n<br> -->\n\n<!-- <div class=\"size\">\n  <mat-card>\n<mat-form-field appearance=\"outline\" class=\"example-full-width\" color=\"accent\">\n  <mat-label>Type your heart out!</mat-label>\n  <input matInput autofocus #something>\n  <button mat-flat-button color=\"warn\" (click)=\"next()\" style=\"float:right;\">Done</button>\n</mat-form-field>\n</mat-card>\n</div> -->\n<div class=\"size\" *ngIf=\"value == 0\">\n    <mat-card>\n        <p style=\"font-size:5em;font-weight: bold;margin: 0 auto !important;\">Hey, I'm Akshay</p>\n      <button mat-flat-button color=\"warn\" (click)=\"next()\" style=\"float:right;\">Next</button>\n    </mat-card>\n  </div>\n\n<div class=\"size\" *ngIf=\"value == 1\">\n  <mat-card>\n      <p style=\"text-align: justify;font-size:1.3em;\">\n          I am a Fullstack Developer From India. I love coding on MEAN Stack, and I\n          love Angular the most. I am currently working as Junior Solutions Engineer\n          at an amazing company, <span style=\"color:#23AAAA;\">Meltwater</span>. I specialize in developing and designing custom web components, databse administation, backend server development and deployment engineering.\n        </p>\n    <button mat-flat-button color=\"warn\" (click)=\"next()\" style=\"float:right;\">Next</button>\n  </mat-card>\n</div>\n\n<div class=\"size\" *ngIf=\"value == 2\">\n    <mat-card>\n        <p style=\"text-align: justify;font-size:1.3em;\">\n            Do I have a life? Yes. What do I do when I'm not coding? Well,\n            I'm out there travelling on my motorcycle or probably watching Master Chef,\n            although I don't cook as much as I watch. <span style=\"color:silver\"\n            >( I don't cook at all, but let's keep that between us )</span\n          >\n          </p>\n      <button mat-flat-button color=\"warn\" (click)=\"next()\" style=\"float:right;\">Next</button>\n    </mat-card>\n  </div>\n  <div class=\"size\" *ngIf=\"value == 3\">\n      <mat-card>\n          <p style=\"text-align: justify;font-size:1.3em;\">That's all I have for now. More information coming soon. Building awesome websites is one of my hobby, so you will witness something really cool the next time you visit my website</p>\n        <button mat-flat-button color=\"warn\" (click)=\"next()\" style=\"float:right;\" *ngIf=\"value > 3\">Next</button>\n        <button mat-flat-button color=\"warn\" (click)=\"start()\" style=\"float:right;\" *ngIf=\"value == 3\">Start Over</button>\n      </mat-card>\n    </div>\n<div class=\"content\">\n    \n    <div class=\"card\" *ngIf=\"value == 1\">\n      <p class=\"title\">Programmer</p>\n    </div>\n\n    <div class=\"card2\" *ngIf=\"value == 2\">\n      <p class=\"title\">Designer</p>\n    </div>\n\n    <div class=\"card3\" *ngIf=\"value == 3\">\n      <p class=\"title\">COMING SOON</p>\n\n    </div>\n    \n  </div>\n  <button mat-mini-fab color=\"warn\" id=\"reset\" (click)=\"start()\">\n      <i class=\"fas fa-undo-alt\" style=\"color:white;font-size:1em\"></i>\n  </button>\n\n  <p id=\"copyright\">&copy; Akshay Pramod</p>\n  <!-- <p class=\"title\">Contact</p>\n  <p class=\"text\">Coming soon</p> -->"

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



const routes = [];
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

module.exports = ".size{\nwidth:45%;\nmargin:0 auto !important;\nbackground-color: #121212;\n}\n\n\n@media only screen and (max-width: 768px) {\n    /* For mobile phones: */\n    [class*=\"size\"] {\n      width: 92%;\n    \n    }\n  }\n\n\n.content {\n    width: 100%;\n    padding: 0 0%;\n    padding-top: 20px;\n    margin: 0 auto;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    margin-top:-10em;\n  }\n\n\n@media screen and (max-width: 767px) {\n    .content {\n      padding-top: 30px;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column;\n      width:90%;\n    }\n  }\n\n\n.card {\n    width: 100%;\n    max-width: 500px;\n    min-width: 400px;\n    height: 250px;\n    background-color:#121212;\n    margin: 10px;\n    border-radius: 10px;\n    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);\n    border: 2px solid rgba(7, 7, 7, 0.12);\n    font-size: 16px;\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n    position: relative;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    cursor: pointer;\n    -webkit-transition: all 0.4s ease-in-out;\n    transition: all 0.4s ease-in-out;\n  }\n\n\n.icon {\n    margin: 0 auto;\n    width: 100%;\n    height: 80px;\n    max-width: 80px;\n    background: -webkit-gradient(linear, left top, right top, from(#434343), color-stop(40%, #000000));\n    background: linear-gradient(90deg, #434343 0%, #000000 40%);\n    border-radius: 100%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    color: white;\n    -webkit-transition: all 0.8s ease;\n    transition: all 0.8s ease;\n    background-position: 0px;\n    background-size: 200px;\n  }\n\n\n.material-icons.md-18 {\n    font-size: 18px;\n  }\n\n\n.material-icons.md-24 {\n    font-size: 24px;\n  }\n\n\n.material-icons.md-48 {\n    font-size: 48px;\n  }\n\n\n.card .title {\n    width: 100%;\n    margin: 0;\n    text-align: center;\n    margin-top: 30px;\n    color: white;\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: 4px;\n  }\n\n\n.card .text {\n    width: 80%;\n    margin: 0 auto;\n    font-size: 13px;\n    text-align: center;\n    margin-top: 20px;\n    color: white;\n    font-weight: 200;\n    letter-spacing: 2px;\n    opacity: 0;\n    max-height: 0;\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n  }\n\n\n.card:hover {\n    -webkit-transform: scale(1.1,1.1);\n            transform: scale(1.1,1.1);\n    background-color:#2c2c2c;\n    /* background-image:url('../assets/imgages/971.jpg'); */\n    background-size: 100%;\n    background-repeat: no-repeat;\n        mix-blend-mode: multiply;\n  }\n\n\n.card:hover .info {\n    height: 90%;\n  }\n\n\n.card:hover .text {\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n    opacity: 1;\n    max-height: 40px;\n  }\n\n\n.card:hover .icon {\n    background-position: -120px;\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n    background-color: transparent;\n  }\n\n\n.card:hover .icon i {\n    background: -webkit-gradient(linear, left top, right top, from(#ff7e7e), to(#ff4848));\n    background: linear-gradient(90deg, #ff7e7e, #ff4848);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    opacity: 1;\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n  }\n\n\n.card2 {\n    width: 100%;\n    max-width: 500px;\n    min-width: 400px;\n    height: 250px;\n    background-color:#121212;\n    margin: 10px;\n    border-radius: 10px;\n    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);\n    border: 2px solid rgba(7, 7, 7, 0.12);\n    font-size: 16px;\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n    position: relative;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    cursor: pointer;\n    -webkit-transition: all 0.4s ease-in-out;\n    transition: all 0.4s ease-in-out;\n  }\n\n\n.icon2 {\n    margin: 0 auto;\n    width: 100%;\n    height: 80px;\n    max-width: 80px;\n    background: -webkit-gradient(linear, left top, right top, from(#434343), color-stop(40%, #000000));\n    background: linear-gradient(90deg, #434343 0%, #000000 40%);\n    border-radius: 100%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    color: white;\n    -webkit-transition: all 0.8s ease;\n    transition: all 0.8s ease;\n    background-position: 0px;\n    background-size: 200px;\n  }\n\n\n.material-icons.md-18 {\n    font-size: 18px;\n  }\n\n\n.material-icons.md-24 {\n    font-size: 24px;\n  }\n\n\n.material-icons.md-36 {\n    font-size: 36px;\n  }\n\n\n.material-icons.md-48 {\n    font-size: 48px;\n  }\n\n\n.card2 .title {\n    width: 100%;\n    margin: 0;\n    text-align: center;\n    margin-top: 30px;\n    color: white;\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: 4px;\n  }\n\n\n.card2 .text {\n    width: 80%;\n    margin: 0 auto;\n    font-size: 13px;\n    text-align: center;\n    margin-top: 20px;\n    color: white;\n    font-weight: 200;\n    letter-spacing: 2px;\n    opacity: 0;\n    max-height: 0;\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n  }\n\n\n.card2:hover {\n    -webkit-transform: scale(1.1,1.1);\n            transform: scale(1.1,1.1);\n    /* background-image:url('../assets/imgages/3.jpg'); */\n    background-color:#2c2c2c;\n    background-size: 100%;\n    background-repeat: no-repeat;\n  }\n\n\n.card2:hover .info {\n    height: 90%;\n  }\n\n\n.card2:hover .text {\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n    opacity: 1;\n    max-height: 40px;\n  }\n\n\n.card2:hover .icon2 {\n    background-position: -120px;\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n  }\n\n\n.card2:hover .icon2 i {\n    background: -webkit-gradient(linear, left top, right top, from(#ff7e7e), to(#ff4848));\n    background: linear-gradient(90deg, #ff7e7e, #ff4848);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    opacity: 1;\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n  }\n\n\n.card3 {\n    width: 100%;\n    max-width: 500px;\n    min-width: 400px;\n    height: 250px;\n    background-color:#121212;\n    margin: 10px;\n    border-radius: 10px;\n    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);\n    border: 2px solid rgba(7, 7, 7, 0.12);\n    font-size: 16px;\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n    position: relative;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n\n\n.icon3 {\n    margin: 0 auto;\n    width: 100%;\n    height: 80px;\n    max-width: 80px;\n    background: -webkit-gradient(linear, left top, right top, from(#434343), color-stop(40%, #000000));\n    background: linear-gradient(90deg, #434343 0%, #000000 40%);\n    border-radius: 100%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    color: white;\n    -webkit-transition: all 0.8s ease;\n    transition: all 0.8s ease;\n    background-position: 0px;\n    background-size: 200px;\n  }\n\n\n.material-icons.md-18 {\n    font-size: 18px;\n  }\n\n\n.material-icons.md-24 {\n    font-size: 24px;\n  }\n\n\n.material-icons.md-36 {\n    font-size: 36px;\n  }\n\n\n.material-icons.md-48 {\n    font-size: 48px;\n  }\n\n\n.card3 .title {\n    width: 100%;\n    margin: 0;\n    text-align: center;\n    margin-top: 30px;\n    color: white;\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: 4px;\n  }\n\n\n.card3 .text {\n    width: 80%;\n    margin: 0 auto;\n    font-size: 13px;\n    text-align: center;\n    margin-top: 20px;\n    color: white;\n    font-weight: 200;\n    letter-spacing: 2px;\n    opacity: 0;\n    max-height: 0;\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n  }\n\n\n.card3:hover {\n    -webkit-transform: scale(1.1,1.1);\n            transform: scale(1.1,1.1);\n    background-color:#2c2c2c;\n\n  }\n\n\n.card3:hover .info {\n    height: 90%;\n  }\n\n\n.card3:hover .text {\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n    opacity: 1;\n    max-height: 40px;\n  }\n\n\n.card3:hover .icon3 {\n    background-position: -120px;\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n  }\n\n\n.card3:hover .icon3 i {\n    background: -webkit-gradient(linear, left top, right top, from(#ff7e7e), to(#ff4848));\n    background: linear-gradient(90deg, #ff7e7e, #ff4848);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    opacity: 1;\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n  }\n\n\n.example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n\n\n.example-full-width {\n    width: 100%;\n  }\n\n\n#reset{\n    position: fixed;\n    bottom: 7px;\n    right: 10px; \n}\n\n\n#copyright{\n  position: fixed;\n  bottom: -.5em;\n  left: 10px; \n  color:silver;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCLHlCQUF5QjtBQUN6Qjs7O0FBR0E7SUFDSSx1QkFBdUI7SUFDdkI7TUFDRSxVQUFVOztJQUVaO0VBQ0Y7OztBQUdBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsY0FBYztJQUNkLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7OztBQUVBO0lBQ0U7TUFDRSxpQkFBaUI7TUFDakIsNEJBQXNCO01BQXRCLDZCQUFzQjtjQUF0QixzQkFBc0I7TUFDdEIsU0FBUztJQUNYO0VBQ0Y7OztBQUNBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDRDQUE0QztJQUM1QyxxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLGlDQUF5QjtJQUF6Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysd0NBQWdDO0lBQWhDLGdDQUFnQztFQUNsQzs7O0FBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0dBQTJEO0lBQTNELDJEQUEyRDtJQUMzRCxtQkFBbUI7SUFDbkIsb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQ0FBeUI7SUFBekIseUJB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QkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixhQUFhO0lBQ2IsaUNBQXlCO0lBQXpCLHlCQUF5QjtFQUMzQjs7O0FBRUE7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLHdCQUF3Qjs7RUFFMUI7OztBQUVBO0lBQ0UsV0FBVztFQUNiOzs7QUFFQTtJQUNFLGlDQUF5QjtJQUF6Qix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGdCQUFnQjtFQUNsQjs7O0FBRUE7SUFDRSwyQkFBMkI7SUFDM0IsaUNBQXlCO0lBQXpCLHlCQUF5QjtFQUMzQjs7O0FBRUE7SUFDRSxxRkFBb0Q7SUFBcEQsb0RBQW9EO0lBQ3BELDZCQUE2QjtJQUM3QixvQ0FBb0M7SUFDcEMsVUFBVTtJQUNWLGlDQUF5QjtJQUF6Qix5QkFBeUI7RUFDM0I7OztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7OztBQUVBO0lBQ0UsV0FBVztFQUNiOzs7QUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztBQUNmOzs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsVUFBVTtFQUNWLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpemV7XG53aWR0aDo0NSU7XG5tYXJnaW46MCBhdXRvICFpbXBvcnRhbnQ7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAvKiBGb3IgbW9iaWxlIHBob25lczogKi9cbiAgICBbY2xhc3MqPVwic2l6ZVwiXSB7XG4gICAgICB3aWR0aDogOTIlO1xuICAgIFxuICAgIH1cbiAgfVxuXG4gIFxuICAuY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCAwJTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDotMTBlbTtcbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuY29udGVudCB7XG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB3aWR0aDo5MCU7XG4gICAgfVxuICB9XG4gIC5jYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxMjEyMTI7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSg3LCA3LCA3LCAwLjEyKTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICB9XG4gIFxuICAuaWNvbiB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIG1heC13aWR0aDogODBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM0MzQzNDMgMCUsICMwMDAwMDAgNDAlKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuOHMgZWFzZTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDBweDtcbiAgfVxuICBcbiAgLm1hdGVyaWFsLWljb25zLm1kLTE4IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgXG4gIC5tYXRlcmlhbC1pY29ucy5tZC0yNCB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG4gIFxuICAubWF0ZXJpYWwtaWNvbnMubWQtNDgge1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgfVxuICBcbiAgLmNhcmQgLnRpdGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICB9XG4gIFxuICAuY2FyZCAudGV4dCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgfVxuICBcbiAgLmNhcmQ6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLDEuMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMmMyYzJjO1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcuLi9hc3NldHMvaW1nYWdlcy85NzEuanBnJyk7ICovXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcbiAgfVxuICBcbiAgLmNhcmQ6aG92ZXIgLmluZm8ge1xuICAgIGhlaWdodDogOTAlO1xuICB9XG4gIFxuICAuY2FyZDpob3ZlciAudGV4dCB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gIH1cbiAgXG4gIC5jYXJkOmhvdmVyIC5pY29uIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTIwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICBcbiAgLmNhcmQ6aG92ZXIgLmljb24gaSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmY3ZTdlLCAjZmY0ODQ4KTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB9XG4gIFxuICAuY2FyZDIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IzEyMTIxMjtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDcsIDcsIDcsIDAuMTIpO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIC5pY29uMiB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIG1heC13aWR0aDogODBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM0MzQzNDMgMCUsICMwMDAwMDAgNDAlKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuOHMgZWFzZTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDBweDtcbiAgfVxuICBcbiAgLm1hdGVyaWFsLWljb25zLm1kLTE4IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgXG4gIC5tYXRlcmlhbC1pY29ucy5tZC0yNCB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG4gIFxuICAubWF0ZXJpYWwtaWNvbnMubWQtMzYge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgfVxuICBcbiAgLm1hdGVyaWFsLWljb25zLm1kLTQ4IHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gIH1cbiAgXG4gIC5jYXJkMiAudGl0bGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIH1cbiAgXG4gIC5jYXJkMiAudGV4dCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgfVxuICBcbiAgLmNhcmQyOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwxLjEpO1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcuLi9hc3NldHMvaW1nYWdlcy8zLmpwZycpOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IzJjMmMyYztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgfVxuICBcbiAgLmNhcmQyOmhvdmVyIC5pbmZvIHtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgfVxuICBcbiAgLmNhcmQyOmhvdmVyIC50ZXh0IHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgbWF4LWhlaWdodDogNDBweDtcbiAgfVxuICBcbiAgLmNhcmQyOmhvdmVyIC5pY29uMiB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIH1cbiAgXG4gIC5jYXJkMjpob3ZlciAuaWNvbjIgaSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmY3ZTdlLCAjZmY0ODQ4KTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB9XG4gIFxuXG4gIC5jYXJkMyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTIxMjEyO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoNywgNywgNywgMC4xMik7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB9XG4gIFxuICAuaWNvbjMge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODBweDtcbiAgICBtYXgtd2lkdGg6IDgwcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNDM0MzQzIDAlLCAjMDAwMDAwIDQwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2U7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjAwcHg7XG4gIH1cbiAgXG4gIC5tYXRlcmlhbC1pY29ucy5tZC0xOCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIFxuICAubWF0ZXJpYWwtaWNvbnMubWQtMjQge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICBcbiAgLm1hdGVyaWFsLWljb25zLm1kLTM2IHtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gIH1cbiAgXG4gIC5tYXRlcmlhbC1pY29ucy5tZC00OCB7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICB9XG4gIFxuICAuY2FyZDMgLnRpdGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICB9XG4gIFxuICAuY2FyZDMgLnRleHQge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICBtYXgtaGVpZ2h0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIH1cbiAgXG4gIC5jYXJkMzpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsMS4xKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyYzJjMmM7XG5cbiAgfVxuICBcbiAgLmNhcmQzOmhvdmVyIC5pbmZvIHtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgfVxuICBcbiAgLmNhcmQzOmhvdmVyIC50ZXh0IHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgbWF4LWhlaWdodDogNDBweDtcbiAgfVxuICBcbiAgLmNhcmQzOmhvdmVyIC5pY29uMyB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIH1cbiAgXG4gIC5jYXJkMzpob3ZlciAuaWNvbjMgaSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmY3ZTdlLCAjZmY0ODQ4KTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1mb3JtIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgI3Jlc2V0e1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDdweDtcbiAgICByaWdodDogMTBweDsgXG59XG5cbiNjb3B5cmlnaHR7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAtLjVlbTtcbiAgbGVmdDogMTBweDsgXG4gIGNvbG9yOnNpbHZlcjtcbn0iXX0= */"

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
        this.value = 0;
    }
    next() {
        this.value++;
    }
    start() {
        this.value = 0;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__["MatStepperModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_32__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_35__["ReactiveFormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/akshaypramod/Documents/GitHub/Akshay/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map