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

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/cart.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>My Cart</h2>\n<hr />\n<div class=\"row\">\n  <div class=\"col-sm-8\">\n    <div [hidden]=\"!cart.Items.length == 0\">\n      Your cart is empty!\n    </div>\n    <table class=\"table table-bordered\" *ngIf=\"cart.Items.length>0\">\n      <!-- header -->\n      <tr>\n        <th>Item</th>\n        <th>Quantity</th>\n        <th>Price</th>\n        <th>Actions</th>\n      </tr>\n      <tr *ngFor=\"let item of cart.Items\">\n        <td>{{item.Name}}</td>\n        <td>\n          <div class=\"input-group\">\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.Quantity\" style=\"width:60px\" /> &nbsp;\n            <button class=\"btn btn-success\" type=\"button\" [disabled]=\"item.Quantity < 1\" (click)=\"cartService.addToCart(item.ProductId, item.Name, item.UnitPrice, 1)\"> + </button>            &nbsp;\n            <button class=\"btn btn-inverse\" type=\"button\" [disabled]=\"item.Quantity <= 1\" (click)=\"cartService.addToCart(item.ProductId, item.Name, item.UnitPrice, -1)\"> - </button>\n          </div>\n        </td>\n        <td>{{item.UnitPrice * item.Quantity | currency:\"INR\"}}</td>\n        <td title=\"Remove from cart\">\n          <button class=\"btn btn-danger\" type=\"button\" (click)=\"cartService.deleteFromCart(item.ProductId)\"> X </button>\n        </td>\n      </tr>\n      <tr>\n        <td></td>\n        <td><b>Grand Total</b></td>\n        <td><b>{{cart.Total| currency :\"INR\"}}</b></td>\n        <td></td>\n      </tr>\n    </table>\n  </div>\n  <div class=\"col-sm-4\">\n    <p>\n      <a class=\"btn btn-block btn-success\" [routerLink]=\"['']\">Continue Shopping >> </a>\n      <button class=\"btn btn-block btn-danger\" (click)=\"cartService.clearCart()\" [disabled]=\"cart.Total < 1\"> Clear Cart </button>\n    </p>\n    <br /><br />\n    <p>\n      <button class=\"btn btn-block btn-primary\" (click)=\"checkout()\" [disabled]=\"cart.Total < 1\"> Check out using PayUmoney </button>\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>home works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Login</h2>\n<hr/>\n\n<form #form=\"ngForm\" (ngSubmit)=\"Login(form)\">\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" #username=\"ngModel\" [(ngModel)]=\"login.username\" />\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" #name=\"ngModel\" [(ngModel)]=\"login.password\" />\n    </div>\n   \n    <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/logout/logout.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/logout/logout.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>You have been logout successfully!</h3>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/notfound/notfound.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/notfound/notfound.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Page Not Found!</h2>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/layout/layout.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/layout/layout.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-light bg-light\">\n  <ul class=\"nav navbar-nav\">\n    <li class=\"nav-ite\">\n      <a class=\"nav-link\" [routerLink]=\"['/']\">Store</a>\n    </li>\n  </ul>\n  <ul class=\"nav navbar-nav ml-auto\">\n    <li class=\"nav-item\" style=\"padding-top: 8px;\" *ngIf=\"user.UserId>0\">\n      Welcome : {{user.Name}}\n    </li>\n    <li class=\"nav-item\" *ngIf=\"user.UserId>0\">\n      <a class=\"nav-link\" href=\"javascript:void(0);\" (click)=\"logOut()\">Logout</a>\n    </li>\n    <li *ngIf=\"cart.TotalItems>0\">\n      <a class=\"nav-link\" [routerLink]=\"['/cart']\">{{cart.TotalItems}} Items, {{cart.Total | currency:'INR'}}</a>\n    </li>\n    <li class=\"nav-item\" *ngIf=\"user.UserId==undefined\">\n      <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n    </li>\n    <li class=\"nav-item\" *ngIf=\"user.UserId==undefined\">\n      <a class=\"nav-link\" [routerLink]=\"['/signup']\">Sign Up</a>\n    </li>\n  </ul>\n</nav>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>signup works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/store/store.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/store/store.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>My Store</h2>\n\n<table class=\"table table-bordered\">\n  <tr>\n    <th>SNo.</th>\n    <th>Image</th>\n    <th>Description</th>\n    <th>Price</th>\n    <th>Actions</th>\n  </tr>\n  <tr *ngFor=\"let item of products; let i=index\">\n    <td>{{i+1}}</td>\n    <td>\n      <img [src]=\"item.ImagePath\" [alt]=\"item.Name\" height=\"200\" />\n    </td>\n    <td>{{item.Name}}</td>\n    <td>\n      {{item.UnitPrice}}\n    </td>\n    <td>\n      <button type=\"button\" (click)=\"cartService.addToCart(item.ProductId,item.Name,item.UnitPrice,1)\"\n        class=\"btn btn-primary\">Add</button>\n    </td>\n  </tr>\n</table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/unauthorize/unauthorize.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/unauthorize/unauthorize.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>You are not authorize to access the page!</h3>"

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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/layout/layout.component */ "./src/app/shared/layout/layout.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/auth.guard */ "./src/app/shared/auth.guard.ts");
/* harmony import */ var _unauthorize_unauthorize_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./unauthorize/unauthorize.component */ "./src/app/unauthorize/unauthorize.component.ts");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/store.component */ "./src/app/store/store.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");












const routes = [
    {
        path: '', component: _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"], children: [
            { path: '', component: _store_store_component__WEBPACK_IMPORTED_MODULE_10__["StoreComponent"] },
            { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_11__["CartComponent"] },
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
            { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"] },
            { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
            { path: 'notfound', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__["NotfoundComponent"] },
            { path: 'unauthorize', component: _unauthorize_unauthorize_component__WEBPACK_IMPORTED_MODULE_9__["UnauthorizeComponent"] },
        ]
    },
    { path: 'admin', loadChildren: () => __webpack_require__.e(/*! import() | Areas-admin-admin-module */ "Areas-admin-admin-module").then(__webpack_require__.bind(null, /*! ./Areas/admin/admin.module */ "./src/app/Areas/admin/admin.module.ts")).then(m => m.AdminModule), canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AdminAuthGuard"]] },
    { path: 'user', loadChildren: () => __webpack_require__.e(/*! import() | Areas-user-user-module */ "Areas-user-user-module").then(__webpack_require__.bind(null, /*! ./Areas/user/user.module */ "./src/app/Areas/user/user.module.ts")).then(m => m.UserModule), canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_8__["UserAuthGuard"]] },
    { path: '**', redirectTo: 'notfouund' }
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
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/layout/layout.component */ "./src/app/shared/layout/layout.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _unauthorize_unauthorize_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./unauthorize/unauthorize.component */ "./src/app/unauthorize/unauthorize.component.ts");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/auth.guard */ "./src/app/shared/auth.guard.ts");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./store/store.component */ "./src/app/store/store.component.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/store.service */ "./src/app/services/store.service.ts");





















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
            _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_11__["NotfoundComponent"],
            _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_13__["LayoutComponent"],
            _logout_logout_component__WEBPACK_IMPORTED_MODULE_14__["LogoutComponent"],
            _unauthorize_unauthorize_component__WEBPACK_IMPORTED_MODULE_16__["UnauthorizeComponent"],
            _store_store_component__WEBPACK_IMPORTED_MODULE_18__["StoreComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ],
        providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], _services_product_service__WEBPACK_IMPORTED_MODULE_15__["ProductService"], _shared_auth_guard__WEBPACK_IMPORTED_MODULE_17__["UserAuthGuard"], _shared_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AdminAuthGuard"], _services_cart_service__WEBPACK_IMPORTED_MODULE_19__["CartService"], _services_store_service__WEBPACK_IMPORTED_MODULE_20__["StoreService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let CartComponent = class CartComponent {
    constructor(cartService, authService, storeService, router) {
        this.cartService = cartService;
        this.authService = authService;
        this.storeService = storeService;
        this.router = router;
    }
    ngOnInit() {
        this.cart = this.cartService.getCart();
    }
    checkout() {
        if (this.authService.user.UserId > 0) {
            this.cart.UserId = this.authService.user.UserId;
            this.storeService.SaveCart(this.cart).subscribe(res => {
                this.cart.CartId = res;
                this.cartService.checkoutPayUmoney(this.authService.user);
            });
        }
        else {
            this.router.navigate(['login']);
        }
    }
};
CartComponent.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html")
    })
], CartComponent);



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
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html")
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/login */ "./src/app/models/login.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.login = new _models_login__WEBPACK_IMPORTED_MODULE_2__["Login"]();
    }
    ngOnInit() {
    }
    Login(form) {
        if (form.valid) {
            this.authService.ValiateUser(this.login).subscribe(res => {
                if (res != null) {
                    const user = res;
                    this.authService.SetAuthUser(user); //to do
                    if (this.authService.user.Roles.indexOf('Admin') > -1) {
                        return this.router.navigate(['/admin']);
                    }
                    else if (this.authService.user.Roles.indexOf('User') > -1) {
                        return this.router.navigate(['/user']);
                    }
                }
            });
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html")
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LogoutComponent = class LogoutComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: __webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/index.js!./src/app/logout/logout.component.html")
    })
], LogoutComponent);



/***/ }),

/***/ "./src/app/models/cart.ts":
/*!********************************!*\
  !*** ./src/app/models/cart.ts ***!
  \********************************/
/*! exports provided: Cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");

class Cart {
    constructor() {
        this.CartName = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].cartName;
        this.Items = [];
        this.TotalItems = 0;
        this.Total = 0;
    }
}


/***/ }),

/***/ "./src/app/models/cartItem.ts":
/*!************************************!*\
  !*** ./src/app/models/cartItem.ts ***!
  \************************************/
/*! exports provided: CartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return CartItem; });
class CartItem {
    constructor(ProductId, Name, UnitPrice, Quantity) {
        this.ProductId = ProductId;
        this.Name = Name;
        this.UnitPrice = UnitPrice;
        this.Quantity = Quantity;
    }
}
CartItem.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: Number },
    { type: Number }
];


/***/ }),

/***/ "./src/app/models/login.ts":
/*!*********************************!*\
  !*** ./src/app/models/login.ts ***!
  \*********************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
class Login {
}


/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
class UserModel {
}


/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotfoundComponent = class NotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notfound',
        template: __webpack_require__(/*! raw-loader!./notfound.component.html */ "./node_modules/raw-loader/index.js!./src/app/notfound/notfound.component.html")
    })
], NotfoundComponent);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");





let AuthService = class AuthService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'content-type': 'application/json' });
        this.LoadAuthUser();
    }
    SetAuthUser(user) {
        localStorage.setItem('authInfo', JSON.stringify(user));
        this.user = user;
    }
    LoadAuthUser() {
        const data = localStorage.getItem('authInfo');
        if (data !== undefined && data !== null) {
            this.user = JSON.parse(data);
        }
        else {
            this.user = new _models_user__WEBPACK_IMPORTED_MODULE_4__["UserModel"]();
        }
    }
    // ValiateUser(model: Login): Observable<any> {
    //      this.httpClient.post<any>(environment.apiAddress + '/auth/ValidateUser',
    //         JSON.stringify(model), { headers: this.headers, observe: 'body' })
    //         .subscribe(res => {
    //             console.log(res);
    //             if (res != null) {
    //                 const user: UserModel = res;
    //                 this.SetAuthUser(user);
    //                 return new Observable((observer) => {
    //                     // observable execution
    //                     observer.next(true);
    //                     observer.complete();
    //                 });
    //             } else {
    //                 return new Observable((observer) => {
    //                     // observable execution
    //                     observer.next(true);
    //                     observer.complete();
    //                 });
    //             }
    //         }, err => {
    //             return new Observable((observer) => {
    //                 // observable execution
    //                 observer.next(err);
    //                 observer.complete();
    //             });
    //         });
    // }
    ValiateUser(model) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiAddress + '/auth/validateUser', JSON.stringify(model), { headers: this.headers });
    }
    getUserDetails() {
        const data = localStorage.getItem('authInfo');
        if (data !== undefined && data !== null) {
            const user = JSON.parse(data);
            return user;
        }
        else {
            return null;
        }
    }
    clearUserDetails() {
        localStorage.removeItem('authInfo');
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthService);



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/cart */ "./src/app/models/cart.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_cartItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/cartItem */ "./src/app/models/cartItem.ts");





let CartService = class CartService {
    constructor() {
        this.cart = new _models_cart__WEBPACK_IMPORTED_MODULE_2__["Cart"]();
    }
    saveCart() {
        if (localStorage != null) {
            let data = JSON.stringify(this.cart.Items);
            let encData = CryptoJS.AES.encrypt(data, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].encKey);
            localStorage[this.cart.CartName] = encData;
        }
    }
    getCart() {
        if (localStorage != null && localStorage[this.cart.CartName] != undefined && localStorage[this.cart.CartName] != "") {
            var encData = localStorage[this.cart.CartName];
            var bytes = CryptoJS.AES.decrypt(encData.toString(), src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].encKey);
            var data = bytes.toString(CryptoJS.enc.Utf8);
            this.cart.Items = JSON.parse(data);
            this.calculateCart();
        }
        return this.cart;
    }
    clearCart() {
        this.cart.Items = [];
        this.cart.Total = 0;
        if (localStorage != null) {
            localStorage[this.cart.CartName] = '';
        }
        this.cart.TotalItems = 0;
        this.cart.Total = 0;
    }
    ;
    calculateCart() {
        let count = 0;
        let price = 0;
        for (let i = 0; i < this.cart.Items.length; i++) {
            const item = this.cart.Items[i];
            count += item.Quantity;
            price += this.cart.Items[i].Total = item.Quantity * item.UnitPrice;
        }
        this.cart.TotalItems = count;
        this.cart.Total = price;
    }
    addToCart(ProductId, Name, UnitPrice, Quantity) {
        if (Quantity !== undefined) {
            // update Quantity for existing item
            let found = false;
            for (let i = 0; i < this.cart.Items.length && !found; i++) {
                const item = this.cart.Items[i];
                if (item.ProductId === ProductId) {
                    found = true;
                    item.Quantity = item.Quantity + Quantity;
                }
            }
            // new item, add now
            if (!found) {
                const item = new _models_cartItem__WEBPACK_IMPORTED_MODULE_4__["CartItem"](ProductId, Name, UnitPrice, Quantity);
                this.cart.Items.push(item);
            }
            this.calculateCart();
            // save changes
            this.saveCart();
        }
    }
    deleteFromCart(ProductId) {
        for (let i = 0; i < this.cart.Items.length; i++) {
            const item = this.cart.Items[i];
            if (item.ProductId === ProductId) {
                this.cart.Items.splice(i, 1);
            }
        }
        this.calculateCart();
        // save changes
        this.saveCart();
    }
    checkoutPayUmoney(user) {
        const params = {
            url: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].paymentGatewayUrl,
            options: {
                key: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].paymentGatewaykey,
                salt: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].paymentGatewaysalt,
                txnid: (Math.random() * 10000000000).toFixed(0),
                amount: this.cart.Total,
                productinfo: this.cart.CartName + '_' + this.cart.Total,
                firstname: user.Name,
                email: user.Username,
                phone: user.ContactNo,
                surl: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseAddress + '/home/paymentstatus',
                furl: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseAddress + '/home/paymentstatus',
                service_provider: '',
                hash: '',
                udf1: this.cart.CartId,
                udf2: user.UserId
            }
        };
        const str = params.options.key + '|' + params.options.txnid + '|'
            + params.options.amount + '|' + params.options.productinfo + '|' + params.options.firstname + '|' +
            params.options.email + '|' + params.options.udf1 + '|' + params.options.udf2 + '|||||||||' + params.options.salt;
        // console.log(str);
        params.options.hash = CryptoJS.SHA512(str).toString();
        //  console.log(params.options.hash);
        // build form
        const form = $('<form/></form>');
        form.attr('action', params.url);
        form.attr('method', 'POST');
        form.attr('style', 'display:none;');
        this.addFormFields(form, params.options);
        $('body').append(form);
        // submit form
        this.clearCart();
        form.submit();
        form.remove();
    }
    // adding hidden fields to form
    addFormFields(form, data) {
        if (data != null) {
            $.each(data, function (Name, value) {
                if (value != null) {
                    const input = $('<input></input>').attr('type', 'hidden').attr('Name', Name).val(value);
                    form.append(input);
                }
            });
        }
    }
};
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CartService);



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");





let ProductService = class ProductService {
    constructor(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
        // this.user = this.authService.getUserDetails();
        console.log(this.authService.user.Token);
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'content-type': 'application/json', 'Authorization': `Bearer ${this.authService.user.Token}` });
    }
    AddProduct(form) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiAddress + '/product/add', form);
    }
    GetProducts() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiAddress + '/product/getall', { headers: this.headers });
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ProductService);



/***/ }),

/***/ "./src/app/services/store.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/store.service.ts ***!
  \*******************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");





let StoreService = class StoreService {
    constructor(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
        // this.headers = new HttpHeaders({ 'content-type': 'application/json'});
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'content-type': 'application/json', 'Authorization': `Bearer ${this.authService.user.Token}` });
    }
    GetProducts() {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiAddress + '/store/getproducts');
    }
    SaveCart(cart) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiAddress + '/store/savecart', JSON.stringify(cart), { headers: this.headers });
    }
};
StoreService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
StoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], StoreService);



/***/ }),

/***/ "./src/app/shared/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/shared/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AdminAuthGuard, UserAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthGuard", function() { return AdminAuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthGuard", function() { return UserAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let AdminAuthGuard = class AdminAuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (!(this.authService.user !== undefined)) {
            this.router.navigate(['login']);
            return false;
        }
        else if (this.authService.user.Roles.indexOf('Admin') > -1) {
            return true;
        }
        else {
            this.router.navigate(['unauthorize']);
            return false;
        }
    }
};
AdminAuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AdminAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AdminAuthGuard);

let UserAuthGuard = class UserAuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (!(this.authService.user !== undefined)) {
            this.router.navigate(['login']);
            return false;
        }
        else if (this.authService.user.Roles.indexOf('User') > -1) {
            return true;
        }
        else {
            this.router.navigate(['unauthorize']);
            return false;
        }
    }
};
UserAuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UserAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserAuthGuard);



/***/ }),

/***/ "./src/app/shared/layout/layout.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/layout/layout.component.ts ***!
  \***************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");





let LayoutComponent = class LayoutComponent {
    constructor(authService, router, cartService) {
        this.authService = authService;
        this.router = router;
        this.cartService = cartService;
        this.user = this.authService.user;
        this.cart = this.cartService.getCart();
    }
    ngOnInit() {
    }
    logOut() {
        this.authService.clearUserDetails();
        // this.router.navigate(['/logout']);
        window.location.href = '/logout';
    }
};
LayoutComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }
];
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/layout/layout.component.html")
    })
], LayoutComponent);



/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SignupComponent = class SignupComponent {
    constructor() { }
    ngOnInit() {
    }
};
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html")
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/store/store.component.ts":
/*!******************************************!*\
  !*** ./src/app/store/store.component.ts ***!
  \******************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/store.service */ "./src/app/services/store.service.ts");




let StoreComponent = class StoreComponent {
    constructor(storeService, cartService) {
        this.storeService = storeService;
        this.cartService = cartService;
    }
    ngOnInit() {
        this.storeService.GetProducts().subscribe(res => {
            this.products = res;
        });
    }
};
StoreComponent.ctorParameters = () => [
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }
];
StoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-store',
        template: __webpack_require__(/*! raw-loader!./store.component.html */ "./node_modules/raw-loader/index.js!./src/app/store/store.component.html")
    })
], StoreComponent);



/***/ }),

/***/ "./src/app/unauthorize/unauthorize.component.ts":
/*!******************************************************!*\
  !*** ./src/app/unauthorize/unauthorize.component.ts ***!
  \******************************************************/
/*! exports provided: UnauthorizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorizeComponent", function() { return UnauthorizeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UnauthorizeComponent = class UnauthorizeComponent {
    constructor() { }
    ngOnInit() {
    }
};
UnauthorizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unauthorize',
        template: __webpack_require__(/*! raw-loader!./unauthorize.component.html */ "./node_modules/raw-loader/index.js!./src/app/unauthorize/unauthorize.component.html")
    })
], UnauthorizeComponent);



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
    production: false,
    apiAddress: 'http://localhost:54129/api',
    cartName: 'mycart',
    encKey: 'mysecretkey',
    baseAddress: 'http://localhost:54129',
    paymentGatewayUrl: 'https://test.payu.in/_payment',
    paymentGatewaykey: 'gtKFFx',
    paymentGatewaysalt: 'eCwWELxi',
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

module.exports = __webpack_require__(/*! C:\Code\Weekend\AngularProject\AngularProject\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map