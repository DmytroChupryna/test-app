webpackJsonp(["products.module"],{

/***/ "../../../../../src/app/prod-item/prod-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".description{\n    height: 88px;\n    overflow: hidden;\n    margin-bottom: 20px!important;\n}\n.price{\n    font-weight: 700;\n    font-size: 18px;\n    width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.card-title{\n    font-weight: 700;\n}\n.card-image{\n    height: 250px;\n    overflow: hidden;\n}\n.card-image img{\n    width: 100%;\n    height: 250px;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n.card-action{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/prod-item/prod-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div >\n    <div class=\"card\">\n        <a class=\"card-image\" [routerLink]=\"['/products',item.link]\">\n            <img src=\"{{item.image}}\">\n            <span class=\"card-title  grey-text text-darken-4\">{{item.title}}</span>\n        </a>\n        <div class=\"card-content\">\n            <p class=\"description\">\n                {{item.description}}\n            </p>\n            <p class=\"price right-align\">{{item.price | currency:'USD':true}}</p>\n        </div>\n        <div class=\"card-action\">\n            <a [routerLink]=\"['/products',item.link]\" >Read more</a>\n            <a role=\"button\" (click)=\"removeProd(index)\" >Delete</a>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/prod-item/prod-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_uppdate_products_service__ = __webpack_require__("../../../../../src/app/services/uppdate-products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProdItemComponent = (function () {
    function ProdItemComponent(UppdateProductsService_) {
        this.UppdateProductsService_ = UppdateProductsService_;
        this.item = '';
        this.removeElementEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ProdItemComponent.prototype.ngOnInit = function () {
    };
    ProdItemComponent.prototype.removeProd = function (index) {
        this.UppdateProductsService_.deleteProduct(index);
        this.removeElementEmitter.emit(index);
    };
    return ProdItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ProdItemComponent.prototype, "item", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], ProdItemComponent.prototype, "index", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], ProdItemComponent.prototype, "removeElementEmitter", void 0);
ProdItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-prod-item',
        template: __webpack_require__("../../../../../src/app/prod-item/prod-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/prod-item/prod-item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_uppdate_products_service__["a" /* UppdateProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_uppdate_products_service__["a" /* UppdateProductsService */]) === "function" && _b || Object])
], ProdItemComponent);

var _a, _b;
//# sourceMappingURL=prod-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/prod-list/prod-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-my{\n    position: fixed;\n    width: 300px;\n    background: rgba(0,0,0,.8);\n    color: #fff;\n    font: 500 16px 'Roboto', sans-serif;\n    transition: all 0.375s;\n    opacity: 0;\n    top: -300px;\n    left: calc( 50% - 150px );\n    z-index: 2;\n    text-align: center;\n    border-radius: 10px;\n}\n.modal-my.active {\n    opacity: 1;\n    top: 200px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/prod-list/prod-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <app-prod-item *ngFor=\"let item of listProducts; let i = index;\"\n                       [item]=\"item\"\n                       [index]=\"i\"\n                       (removeElementEmitter)=\"removeElementFromList($event)\"\n                       class=\"col s12 m6 l4 xl4\"></app-prod-item>\n    </div>\n</div>\n<div class=\"modal-my\" [ngClass]=\"{'active': confirmation}\">\n    <p>Are you sure?</p>\n    <div class=\"row valign-wrapper\">\n        <div class=\"col s6\"><button class=\"btn\" (click)=\"confirmDelete(true)\">YES</button> </div>\n        <div class=\"col s6\"><a role=\"button\" (click)=\"confirmDelete(false)\">NO</a> </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/prod-list/prod-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProdListComponent = (function () {
    function ProdListComponent() {
        this.listProducts = [];
        this.confirmation = false;
    }
    ProdListComponent.prototype.ngOnInit = function () { };
    ProdListComponent.prototype.removeElementFromList = function (event) {
        this.confirmation = true;
        this.bufferIndex = event;
    };
    ProdListComponent.prototype.confirmDelete = function (res) {
        if (res) {
            this.listProducts.splice(this.bufferIndex, 1);
            this.confirmation = false;
        }
        else {
            this.confirmation = false;
        }
    };
    return ProdListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], ProdListComponent.prototype, "listProducts", void 0);
ProdListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-prod-list',
        template: __webpack_require__("../../../../../src/app/prod-list/prod-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/prod-list/prod-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProdListComponent);

//# sourceMappingURL=prod-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/product-details/product-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1{\n    font-weight: 500;\n    font-size: 2.5em;\n}\n.price{\n    font-size: 2.1em;\n    font-weight: 700;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-details/product-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col col m12 l6 xl6\">\n      <img class=\"responsive-img\" src=\"{{product.image}}\">\n    </div>\n    <div class=\"col m12 l6 xl6\">\n      <div class=\"row valign-wrapper\">\n        <h1 class=\"col m12 l8 xl8\">{{product.title}}</h1>\n        <p class=\"col m12 l4 xl right-align price\">{{product.price | currency:'USD':true}}</p>\n      </div>\n      <div>\n        <p>{{product.description}}</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/product-details/product-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_product_model__ = __webpack_require__("../../../../../src/app/models/product.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_uppdate_products_service__ = __webpack_require__("../../../../../src/app/services/uppdate-products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductDetailsComponent = (function () {
    function ProductDetailsComponent(route, uppdateProductsService_) {
        this.route = route;
        this.uppdateProductsService_ = uppdateProductsService_;
        this.productId = '';
        this.product = new __WEBPACK_IMPORTED_MODULE_2__models_product_model__["a" /* productModel */]('', '', '', '', 0);
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.productId = params["item"];
            var allProduct = _this.uppdateProductsService_.getListData(localStorage.getItem('listProducts'));
            allProduct.map(function (obj) {
                if (obj.link == _this.productId) {
                    _this.product = new __WEBPACK_IMPORTED_MODULE_2__models_product_model__["a" /* productModel */](obj.title, obj.link, obj.image, obj.description, obj.price);
                }
            });
        });
    };
    return ProductDetailsComponent;
}());
ProductDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-product-details',
        template: __webpack_require__("../../../../../src/app/product-details/product-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product-details/product-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_uppdate_products_service__["a" /* UppdateProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_uppdate_products_service__["a" /* UppdateProductsService */]) === "function" && _b || Object])
], ProductDetailsComponent);

var _a, _b;
//# sourceMappingURL=product-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<app-prod-list [listProducts]=\"listData\"></app-prod-list>\n"

/***/ }),

/***/ "../../../../../src/app/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_uppdate_products_service__ = __webpack_require__("../../../../../src/app/services/uppdate-products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsComponent = (function () {
    function ProductsComponent(UppdateProductsService_) {
        this.UppdateProductsService_ = UppdateProductsService_;
        this.listData = [];
        this.localStorageData = [
            {
                image: 'http://myprinthub.com.ua/wp-content/uploads/2017/05/14-poster.jpg',
                title: 'Posters',
                price: '50.99',
                description: 'The poster is an effective advertising tool that, in a local, bright manner, will convey the key message of the target audience',
                link: 'prod1'
            },
            {
                image: 'http://myprinthub.com.ua/wp-content/uploads/2017/05/05-broshure.jpg',
                title: 'Brochure',
                price: '84.79',
                description: 'A brochure is a printed matter that is usually used when necessary to deliver a short list of goods or services to the consumer, or other overview information. Usually a catalog is called a brochure if the number of pages in it is less than 8.',
                link: 'prod2'
            },
            {
                image: 'http://myprinthub.com.ua/wp-content/uploads/2017/05/17-photo.jpg',
                title: 'Photograph',
                price: '12.99',
                description: 'Print highlights and share them!',
                link: 'prod3'
            }
        ];
    }
    ProductsComponent.prototype.ngOnInit = function () {
        if (!localStorage.getItem('listProducts')) {
            localStorage.setItem('listProducts', JSON.stringify(this.localStorageData));
        }
        this.listData = this.UppdateProductsService_.getListData(localStorage.getItem('listProducts'));
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-products',
        template: __webpack_require__("../../../../../src/app/products/products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/products.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_uppdate_products_service__["a" /* UppdateProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_uppdate_products_service__["a" /* UppdateProductsService */]) === "function" && _a || Object])
], ProductsComponent);

var _a;
//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/products.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_routing__ = __webpack_require__("../../../../../src/app/products/products.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_details_product_details_component__ = __webpack_require__("../../../../../src/app/product-details/product-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__prod_item_prod_item_component__ = __webpack_require__("../../../../../src/app/prod-item/prod-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__prod_list_prod_list_component__ = __webpack_require__("../../../../../src/app/prod-list/prod-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_uppdate_products_service__ = __webpack_require__("../../../../../src/app/services/uppdate-products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ProductsModule = (function () {
    function ProductsModule() {
    }
    return ProductsModule;
}());
ProductsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__prod_list_prod_list_component__["a" /* ProdListComponent */],
            __WEBPACK_IMPORTED_MODULE_5__prod_item_prod_item_component__["a" /* ProdItemComponent */],
            __WEBPACK_IMPORTED_MODULE_3__products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_4__product_details_product_details_component__["a" /* ProductDetailsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__products_routing__["a" /* productsRouting */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__services_uppdate_products_service__["a" /* UppdateProductsService */]
        ],
    })
], ProductsModule);

//# sourceMappingURL=products.module.js.map

/***/ }),

/***/ "../../../../../src/app/products/products.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return productsRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_details_product_details_component__ = __webpack_require__("../../../../../src/app/product-details/product-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");



var productsRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_2__products_component__["a" /* ProductsComponent */]
            }, {
                path: ':item',
                component: __WEBPACK_IMPORTED_MODULE_1__product_details_product_details_component__["a" /* ProductDetailsComponent */]
            }]
    },
];
var productsRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(productsRoutes);
//# sourceMappingURL=products.routing.js.map

/***/ })

});
//# sourceMappingURL=products.module.chunk.js.map