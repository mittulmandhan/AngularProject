(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Areas-admin-admin-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Areas/admin/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Areas/admin/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>dashboard works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Areas/admin/product/product.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Areas/admin/product/product.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Create</h2>\n<hr>\n<form #form=\"ngForm\" (ngSubmit)=\"SaveData(form)\">\n    <div class=\"form-group\">\n        <label for=\"CategoryId\">Category</label>\n        <input type=\"number\" class=\"form-control\" id=\"CategoryId\" name=\"CategoryId\" #ProductId=\"ngModel\" [(ngModel)]=\"product.CategoryId\" />\n    </div>\n    <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"Name\" name=\"Name\" #Name=\"ngModel\" [(ngModel)]=\"product.Name\" />\n    </div>\n    <div class=\"form-group\">\n        <label for=\"Description\">Description</label>\n        <input type=\"text\" class=\"form-control\" id=\"Description\" name=\"Description\" #Description=\"ngModel\"\n            [(ngModel)]=\"product.Description\" />\n    </div>\n    <div class=\"form-group\">\n        <label for=\"UnitPrice\">Unit Price</label>\n        <input type=\"text\" class=\"form-control\" id=\"UnitPrice\" name=\"unitPrice\" #UnitPrice=\"ngModel\"\n            [(ngModel)]=\"product.UnitPrice\" />\n    </div>\n    <div class=\"form-group\">\n        <input type=\"text\" type=\"file\" id=\"files\" accept=\"image/*\" name=\"files\" (change)=\"handleFileChange($event)\" />\n    </div>\n    <img [src]=\"imageUrl\" [hidden]=\"!imageUrl\" style=\"width:250px;height:200px\">\n    <br>\n    <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Areas/admin/products/products.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Areas/admin/products/products.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Products</h2>\n<hr>\n<table class=\"table\">\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Image</th>\n            <th>Description</th>\n            <th>Contact</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let item of products\">\n            <td>{{item.Name}}</td>\n            <td><img [src]=\"item.ImagePath\" height=\"200\" /></td>\n            <td>{{item.Description}}</td>\n            <td>{{item.UnitPrice}}</td>\n        </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Areas/admin/shared/layout/adminlayout.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Areas/admin/shared/layout/adminlayout.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-light bg-light\">\n  <ul class=\"nav navbar-nav\">\n    <li class=\"nav-ite\">\n      <a class=\"nav-link\" [routerLink]=\"['/admin']\">Dashbord</a>\n    </li>\n    <li class=\"nav-ite\">\n      <a class=\"nav-link\" [routerLink]=\"['product']\">Product</a>\n    </li>\n    <li class=\"nav-ite\">\n      <a class=\"nav-link\" [routerLink]=\"['products']\">Products</a>\n    </li>\n  </ul>\n  <ul class=\"nav navbar-nav ml-auto\">\n    <li class=\"nav-item\" style=\"padding-top: 8px;\">\n      Welcome : {{user.Name}}\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"javascript:void(0);\" (click)=\"logOut()\">Logout</a>\n    </li>\n  </ul>\n</nav>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/Areas/admin/admin.module.ts":
/*!*********************************************!*\
  !*** ./src/app/Areas/admin/admin.module.ts ***!
  \*********************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/Areas/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/products.component */ "./src/app/Areas/admin/products/products.component.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin.routing.module */ "./src/app/Areas/admin/admin.routing.module.ts");
/* harmony import */ var _shared_layout_adminlayout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/layout/adminlayout.component */ "./src/app/Areas/admin/shared/layout/adminlayout.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product/product.component */ "./src/app/Areas/admin/product/product.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");











var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"], _shared_layout_adminlayout_component__WEBPACK_IMPORTED_MODULE_6__["AdminLayoutComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminRoutingModule"]
            ],
            providers: [src_app_services_product_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/Areas/admin/admin.routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/Areas/admin/admin.routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/Areas/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/products.component */ "./src/app/Areas/admin/products/products.component.ts");
/* harmony import */ var _shared_layout_adminlayout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/layout/adminlayout.component */ "./src/app/Areas/admin/shared/layout/adminlayout.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/product.component */ "./src/app/Areas/admin/product/product.component.ts");







var routes = [
    {
        path: '', component: _shared_layout_adminlayout_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutComponent"], children: [
            { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
            { path: 'product', component: _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"] },
            { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"] }
        ]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/Areas/admin/dashboard/dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Areas/admin/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/Areas/admin/dashboard/dashboard.component.html")
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/Areas/admin/product/product.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Areas/admin/product/product.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/product */ "./src/app/models/product.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ProductComponent = /** @class */ (function () {
    function ProductComponent(productService, router) {
        this.productService = productService;
        this.router = router;
        this.product = new src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["Product"]();
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.prototype.handleFileChange = function (e) {
        var _this = this;
        if (e.target.files.length > 0) {
            this.fileToUpload = e.target.files[0];
        }
        // Show image preview
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.fileToUpload);
    };
    ProductComponent.prototype.SaveData = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('File', this.fileToUpload);
        formData.append('CategoryId', this.product.CategoryId.toString());
        formData.append('Name', this.product.Name);
        formData.append('UnitPrice', this.product.UnitPrice);
        formData.append('Description', this.product.Description);
        this.productService.AddProduct(formData)
            .subscribe(function (res) {
            if (res.ProductId > 0) {
                _this.router.navigate(['admin/products']);
            }
        });
    };
    ProductComponent.ctorParameters = function () { return [
        { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/index.js!./src/app/Areas/admin/product/product.component.html")
        })
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/Areas/admin/products/products.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Areas/admin/products/products.component.ts ***!
  \************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");



var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productService) {
        this.productService = productService;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.GetProducts()
            .subscribe(function (res) {
            _this.products = res;
        });
    };
    ProductsComponent.ctorParameters = function () { return [
        { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
    ]; };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/index.js!./src/app/Areas/admin/products/products.component.html")
        })
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/Areas/admin/shared/layout/adminlayout.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/Areas/admin/shared/layout/adminlayout.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = this.authService.user;
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
    };
    AdminLayoutComponent.prototype.logOut = function () {
        this.authService.clearUserDetails();
        this.router.navigate(['/logout']);
    };
    AdminLayoutComponent.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AdminLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-layout',
            template: __webpack_require__(/*! raw-loader!./adminlayout.component.html */ "./node_modules/raw-loader/index.js!./src/app/Areas/admin/shared/layout/adminlayout.component.html")
        })
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/models/product.ts":
/*!***********************************!*\
  !*** ./src/app/models/product.ts ***!
  \***********************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



/***/ })

}]);
//# sourceMappingURL=Areas-admin-admin-module-es5.js.map