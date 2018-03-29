webpackJsonp([26],{

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/pages/work-bench/gongdan/change-biaoqian/change-biaoqian-auto.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangeBiaoQianAutoService = (function () {
    function ChangeBiaoQianAutoService(http) {
        this.http = http;
        this.labelAttribute = "name";
    }
    ChangeBiaoQianAutoService.prototype.getResults = function (keyword) {
        //   this.labelAttribute = keyword;
        console.log(keyword);
        var obj1 = {
            name: "",
            id: 1,
        };
        var obj2 = {
            name: "",
            id: 2,
        };
        var obj3 = {
            name: "",
            id: 3,
        };
        var arr = [];
        obj1.name = "搜 品牌：" + keyword;
        arr.push(obj1);
        obj2.name = "搜 部门：" + keyword;
        arr.push(obj2);
        obj3.name = "搜 产品：" + keyword;
        arr.push(obj3);
        return arr;
    };
    return ChangeBiaoQianAutoService;
}());
ChangeBiaoQianAutoService = __decorate([
    __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"](),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
], ChangeBiaoQianAutoService);

//# sourceMappingURL=change-biaoqian-auto.js.map
// CONCATENATED MODULE: ./src/pages/work-bench/gongdan/change-biaoqian/change-biaoqian.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gongdanService__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_Utils__ = __webpack_require__(238);
var change_biaoqian___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var change_biaoqian___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ChangeBiaoqianPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangeBiaoqianPage = (function () {
    function ChangeBiaoqianPage(navCtrl, navParams, gongdanService, changeBiaoQianAutoService, gongDanService, toast, statusbar) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gongdanService = gongdanService;
        this.changeBiaoQianAutoService = changeBiaoQianAutoService;
        this.gongDanService = gongDanService;
        this.toast = toast;
        this.statusbar = statusbar;
        this.brand_select_ids = [];
        this.area_select_ids = [];
        this.cate_select_ids = [];
        this.brandList = [];
        this.areaList = [];
        this.cateList = [];
        this.allSelectList = [];
        this.frontPage = __WEBPACK_IMPORTED_MODULE_4__providers_Utils__["a" /* Utils */].getViewController("GongdanPage", navCtrl);
        this.gongdan_item = this.navParams.get('gongdan_item');
        this.gongdanService.get_all_biaoqian().then(function (res) {
            if (res.result.res_data && res.result.res_code == 1) {
                if (res.result.res_data.brand_list) {
                    _this.brandList = res.result.res_data.brand_list.res_data;
                }
                if (res.result.res_data.area_list) {
                    _this.areaList = res.result.res_data.area_list.res_data;
                }
                if (res.result.res_data.category_list) {
                    _this.cateList = res.result.res_data.category_list.res_data;
                }
            }
        });
    }
    ChangeBiaoqianPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangeBiaoqianPage');
    };
    ChangeBiaoqianPage.prototype.ionViewWillEnter = function () {
        this.statusbar.backgroundColorByHexString("#2597ec");
        this.statusbar.styleLightContent();
    };
    ChangeBiaoqianPage.prototype.cancel_biaoqian = function () {
        for (var _i = 0, _a = this.brand_select_ids; _i < _a.length; _i++) {
            var items = _a[_i];
            for (var _b = 0, _c = this.brandList; _b < _c.length; _b++) {
                var items_in = _c[_b];
                if (items == items_in.id) {
                    items_in.ischeck = false;
                    this.brandList[this.brandList.indexOf(items_in)] = items_in;
                }
            }
        }
        for (var _d = 0, _e = this.cate_select_ids; _d < _e.length; _d++) {
            var items = _e[_d];
            for (var _f = 0, _g = this.cateList; _f < _g.length; _f++) {
                var items_in = _g[_f];
                if (items == items_in.id) {
                    items_in.ischeck = false;
                    this.cateList[this.cateList.indexOf(items_in)] = items_in;
                }
            }
        }
        for (var _h = 0, _j = this.area_select_ids; _h < _j.length; _h++) {
            var items = _j[_h];
            for (var _k = 0, _l = this.areaList; _k < _l.length; _k++) {
                var items_in = _l[_k];
                if (items == items_in.id) {
                    items_in.ischeck = false;
                    this.areaList[this.areaList.indexOf(items_in)] = items_in;
                }
            }
        }
        this.cate_select_ids = [];
        this.brand_select_ids = [];
        this.area_select_ids = [];
        this.allSelectList = [];
    };
    ChangeBiaoqianPage.prototype.confirm_biaoqian = function () {
        var _this = this;
        this.gongDanService.update_biaoqian(this.gongdan_item.work_order_id, this.cate_select_ids, this.brand_select_ids, this.area_select_ids).then(function (res) {
            if (res.result.res_code == 1) {
                __WEBPACK_IMPORTED_MODULE_4__providers_Utils__["a" /* Utils */].toastButtom("修改标签成功", _this.toast);
                _this.frontPage.data.need_fresh = true;
                _this.navCtrl.popTo(_this.frontPage);
            }
        });
    };
    ChangeBiaoqianPage.prototype.goBack = function () {
        // this.cancel_biaoqian()
        // this.frontPage.data.brand_list = this.brand_select_ids;
        // this.frontPage.data.area_list = this.area_select_ids;
        // this.frontPage.data.category_list = this.cate_select_ids
        this.frontPage.data.need_fresh = true;
        this.navCtrl.popTo(this.frontPage);
    };
    ChangeBiaoqianPage.prototype.itemSelected = function (event) {
        var _this = this;
        var search_type;
        var search_text;
        if (event.id == 1) {
            search_type = "brand";
            search_text = event.name.replace("搜 品牌：", "");
        }
        else if (event.id == 2) {
            search_type = "area";
            search_text = event.name.replace("搜 部门：", "");
        }
        else if (event.id == 3) {
            search_type = "category";
            search_text = event.name.replace("搜 产品：", "");
        }
        this.gongdanService.search_biaoqian(search_type, search_text).then(function (res) {
            if (res.result.res_data && res.result.res_code == 1) {
                _this.brandList = [];
                _this.areaList = [];
                _this.cateList = [];
                if (res.result.res_data.type == "category") {
                    _this.cateList = res.result.res_data.data.res_data;
                    for (var _i = 0, _a = _this.cate_select_ids; _i < _a.length; _i++) {
                        var items = _a[_i];
                        for (var _b = 0, _c = _this.cateList; _b < _c.length; _b++) {
                            var items_in = _c[_b];
                            if (items == items_in.id) {
                                items_in.ischeck = true;
                                _this.cateList[_this.cateList.indexOf(items_in)] = items_in;
                            }
                        }
                    }
                }
                if (res.result.res_data.type == "brand") {
                    _this.brandList = res.result.res_data.data.res_data;
                    for (var _d = 0, _e = _this.brand_select_ids; _d < _e.length; _d++) {
                        var items = _e[_d];
                        for (var _f = 0, _g = _this.brandList; _f < _g.length; _f++) {
                            var items_in = _g[_f];
                            if (items == items_in.id) {
                                items_in.ischeck = true;
                                _this.brandList[_this.brandList.indexOf(items_in)] = items_in;
                            }
                        }
                    }
                }
                if (res.result.res_data.type == "area") {
                    _this.areaList = res.result.res_data.data.res_data;
                    for (var _h = 0, _j = _this.area_select_ids; _h < _j.length; _h++) {
                        var items = _j[_h];
                        for (var _k = 0, _l = _this.areaList; _k < _l.length; _k++) {
                            var items_in = _l[_k];
                            if (items == items_in.id) {
                                items_in.ischeck = true;
                                _this.areaList[_this.areaList.indexOf(items_in)] = items_in;
                            }
                        }
                    }
                }
            }
        });
    };
    ChangeBiaoqianPage.prototype.all_tag = function () {
        var _this = this;
        this.brandList = [];
        this.areaList = [];
        this.cateList = [];
        this.gongdanService.get_all_biaoqian().then(function (res) {
            console.log(res);
            if (res.result.res_data && res.result.res_code == 1) {
                if (res.result.res_data.brand_list) {
                    _this.brandList = res.result.res_data.brand_list.res_data;
                    for (var _i = 0, _a = _this.brand_select_ids; _i < _a.length; _i++) {
                        var items = _a[_i];
                        for (var _b = 0, _c = _this.brandList; _b < _c.length; _b++) {
                            var items_in = _c[_b];
                            if (items == items_in.id) {
                                items_in.ischeck = true;
                                _this.brandList[_this.brandList.indexOf(items_in)] = items_in;
                            }
                        }
                    }
                }
                if (res.result.res_data.area_list) {
                    _this.areaList = res.result.res_data.area_list.res_data;
                    for (var _d = 0, _e = _this.area_select_ids; _d < _e.length; _d++) {
                        var items = _e[_d];
                        for (var _f = 0, _g = _this.areaList; _f < _g.length; _f++) {
                            var items_in = _g[_f];
                            if (items == items_in.id) {
                                items_in.ischeck = true;
                                _this.areaList[_this.areaList.indexOf(items_in)] = items_in;
                            }
                        }
                    }
                }
                if (res.result.res_data.category_list) {
                    _this.cateList = res.result.res_data.category_list.res_data;
                    for (var _h = 0, _j = _this.cate_select_ids; _h < _j.length; _h++) {
                        var items = _j[_h];
                        for (var _k = 0, _l = _this.cateList; _k < _l.length; _k++) {
                            var items_in = _l[_k];
                            if (items == items_in.id) {
                                items_in.ischeck = true;
                                _this.cateList[_this.cateList.indexOf(items_in)] = items_in;
                            }
                        }
                    }
                }
            }
        });
    };
    ChangeBiaoqianPage.prototype.chooseBrandItem = function (item) {
        item.ischeck = !item.ischeck;
        if (item.ischeck) {
            this.brand_select_ids.push(item.id);
            this.allSelectList.push(item);
        }
        else {
            this.brand_select_ids.splice(this.brand_select_ids.indexOf(item.id), 1);
            this.allSelectList.splice(this.allSelectList.indexOf(item), 1);
        }
    };
    ChangeBiaoqianPage.prototype.chooseAreaItem = function (item) {
        item.ischeck = !item.ischeck;
        if (item.ischeck) {
            this.area_select_ids.push(item.id);
            this.allSelectList.push(item);
        }
        else {
            this.area_select_ids.splice(this.area_select_ids.indexOf(item.id), 1);
            this.allSelectList.splice(this.allSelectList.indexOf(item), 1);
        }
        console.log(this.areaList);
    };
    ChangeBiaoqianPage.prototype.chooseCategoryItem = function (item) {
        item.ischeck = !item.ischeck;
        if (item.ischeck) {
            this.cate_select_ids.push(item.id);
            this.allSelectList.push(item);
        }
        else {
            this.cate_select_ids.splice(this.cate_select_ids.indexOf(item.id), 1);
            this.allSelectList.splice(this.allSelectList.indexOf(item), 1);
        }
    };
    return ChangeBiaoqianPage;
}());
ChangeBiaoqianPage = change_biaoqian___decorate([
    __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"]({
        selector: 'page-change-biaoqian',template:/*ion-inline-start:"/Users/bin/Downloads/MyOA 2/src/pages/work-bench/gongdan/change-biaoqian/change-biaoqian.html"*/'<!--\n  Generated template for the ChangeBiaoqianPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton="true" color="gongdan-color">\n    <ion-buttons left>\n      <button ion-button icon-only (click)="goBack()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>修改工单标签</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)=\'all_tag()\'>\n        所有标签\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div style="justify-content:space-around">\n    <span round style=\'background-color:#f5a623;flex :1 1 100%\' *ngFor="let item of allSelectList"  ion-button>\n      {{item.name}}\n    </span>\n  </div>\n  <ion-auto-complete style="width: 94vw;margin-left:3vw" (itemSelected) = "itemSelected($event)"  [dataProvider]="changeBiaoQianAutoService"></ion-auto-complete>\n  <div style="background:#e4e5e6;padding:4px;padding-left:10px">\n    品牌\n  </div>\n\n  <ion-list>\n    <ion-item *ngFor="let item of brandList;let i = index">\n      <ion-label> {{item.name}}</ion-label>\n      <ion-checkbox (click)="chooseBrandItem(item)" [checked]=item.ischeck></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n\n  <div style="background:#e4e5e6;padding:4px;padding-left:10px">\n    区域\n  </div>\n\n  <ion-list>\n    <ion-item *ngFor="let item of areaList;let i = index">\n      <ion-label> {{item.name}}</ion-label>\n      <ion-checkbox (click)="chooseAreaItem(item)" [checked]=item.ischeck></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n  <div style="background:#e4e5e6;padding:4px;padding-left:10px">\n    产品\n  </div>\n\n  <ion-list>\n    <ion-item *ngFor="let item of cateList;let i = index">\n      <ion-label> {{item.name}}</ion-label>\n      <ion-checkbox (click)="chooseCategoryItem(item)" [checked]=item.ischeck></ion-checkbox>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer >\n          <div style="background:white">\n    <span align="center" style=\'width:50%;float:left; background-color:#fba958;height:44px;line-height:44px;font-size:15px;color:white\' tappable (click)="cancel_biaoqian()">\n      重置\n    </span>\n    <span align="center" style=\'width:50%;float:right;background-color:#1eabfe;height:44px;line-height:44px;font-size:15px;color:white\' tappable (click)="confirm_biaoqian()">\n      确定\n    </span>\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/bin/Downloads/MyOA 2/src/pages/work-bench/gongdan/change-biaoqian/change-biaoqian.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__gongdanService__["a" /* GongDanService */], ChangeBiaoQianAutoService]
    }),
    change_biaoqian___metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__gongdanService__["a" /* GongDanService */],
        ChangeBiaoQianAutoService, __WEBPACK_IMPORTED_MODULE_3__gongdanService__["a" /* GongDanService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]])
], ChangeBiaoqianPage);

//# sourceMappingURL=change-biaoqian.js.map
// CONCATENATED MODULE: ./src/pages/work-bench/gongdan/change-biaoqian/change-biaoqian.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeBiaoqianPageModule", function() { return ChangeBiaoqianPageModule; });
/* harmony import */ var change_biaoqian_module___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var change_biaoqian_module___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_auto_complete__ = __webpack_require__(700);
var change_biaoqian_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChangeBiaoqianPageModule = (function () {
    function ChangeBiaoqianPageModule() {
    }
    return ChangeBiaoqianPageModule;
}());
ChangeBiaoqianPageModule = change_biaoqian_module___decorate([
    change_biaoqian_module___WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"]({
        declarations: [
            ChangeBiaoqianPage,
        ],
        imports: [
            change_biaoqian_module___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(ChangeBiaoqianPage), __WEBPACK_IMPORTED_MODULE_3_ionic2_auto_complete__["a" /* AutoCompleteModule */]
        ],
    })
], ChangeBiaoqianPageModule);

//# sourceMappingURL=change-biaoqian.module.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoCompleteModule; });
/* unused harmony export AutoCompleteComponent */
/* unused harmony export BoldPrefix */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(20);






// searchbar default options
var defaultOpts = {
    cancelButtonText: 'Cancel',
    showCancelButton: false,
    debounce: 250,
    placeholder: '搜索',
    autocomplete: 'off',
    autocorrect: 'off',
    spellcheck: 'off',
    type: 'search',
    value: '',
    noItems: '',
    clearOnEdit: false,
    clearInput: false
};
var AutoCompleteComponent = (function () {
    /**
     * create a new instace
     */
    function AutoCompleteComponent() {
        this.hideListOnSelection = true;
        this.showListChanged = false;
        this.keyword = null;
        this.suggestions = [];
        this._showList = false;
        this.itemSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.itemsShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.itemsHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.ionAutoInput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.autoFocus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.autoBlur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.options = {};
        // set default options
        this.defaultOpts = defaultOpts;
    }
    Object.defineProperty(AutoCompleteComponent.prototype, "showList", {
        /**
         * @return {?}
         */
        get: function () {
            return this._showList;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (this._showList === value) {
                return;
            }
            this._showList = value;
            this.showListChanged = true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AutoCompleteComponent.prototype.ngAfterViewChecked = function () {
        if (this.showListChanged) {
            this.showListChanged = false;
            this.showList ? this.itemsShown.emit() : this.itemsHidden.emit();
        }
    };
    /**
     * get items for auto-complete
     * @return {?}
     */
    AutoCompleteComponent.prototype.getItems = function () {
        var _this = this;
        var /** @type {?} */ result;
        if (this.showResultsFirst && !this.keyword) {
            this.keyword = '';
        }
        else if (this.keyword.trim() === '') {
            this.suggestions = [];
            return;
        }
        if (typeof this.dataProvider === 'function') {
            result = this.dataProvider(this.keyword);
        }
        else {
            result = this.dataProvider.getResults(this.keyword);
        }
        // if result is instanceof Subject, use it asObservable
        if (result instanceof __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]) {
            result = result.asObservable();
        }
        // if query is async
        if (result instanceof __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"]) {
            result
                .subscribe(function (results) {
                _this.suggestions = results;
                _this.showItemList();
            }, function (error) { return console.error(error); });
        }
        else {
            this.suggestions = result;
            this.showItemList();
        }
        // emit event
        this.ionAutoInput.emit(this.keyword);
    };
    /**
     * show item list
     * @return {?}
     */
    AutoCompleteComponent.prototype.showItemList = function () {
        this.showList = true;
    };
    /**
     * hide item list
     * @return {?}
     */
    AutoCompleteComponent.prototype.hideItemList = function () {
        this.showList = this.alwaysShowList;
    };
    /**
     * select item from list
     *
     * @param {?} selection
     *
     * @return {?}
     */
    AutoCompleteComponent.prototype.select = function (selection) {
        // this.keyword = this.dataProvider.labelAttribute == null || selection[this.dataProvider.labelAttribute] == null
        //     ? selection : selection[this.dataProvider.labelAttribute];
        // if (this.hideListOnSelection) {
        //     this.hideItemList();
        // }
        // // emit selection event
        this.hideItemList();
        this.itemSelected.emit(selection);
        this.selection = selection;
    };
    /**
     * get current selection
     * @return {?}
     */
    AutoCompleteComponent.prototype.getSelection = function () {
        return this.selection;
    };
    /**
     * get current input value
     * @return {?}
     */
    AutoCompleteComponent.prototype.getValue = function () {
        return this.keyword;
    };
    /**
     * set current input value
     * @param {?} value
     * @return {?}
     */
    AutoCompleteComponent.prototype.setValue = function (value) {
        this.keyword = value;
        return;
    };
    /**
     * /**
     * clear current input value
     * @param {?=} hideItemList
     * @return {?}
     */
    AutoCompleteComponent.prototype.clearValue = function (hideItemList) {
        if (hideItemList === void 0) { hideItemList = false; }
        this.keyword = null;
        this.selection = null;
        if (hideItemList) {
            this.hideItemList();
        }
        return;
    };
    /**
     * set focus of searchbar
     * @return {?}
     */
    AutoCompleteComponent.prototype.setFocus = function () {
        if (this.searchbarElem) {
            this.searchbarElem.setFocus();
        }
    };
    /**
     * fired when the input focused
     * @return {?}
     */
    AutoCompleteComponent.prototype.onFocus = function () {
        this.autoFocus.emit();
    };
    /**
     * fired when the input focused
     * @return {?}
     */
    AutoCompleteComponent.prototype.onBlur = function () {
        this.autoBlur.emit();
    };
    /**
     * handle document click
     * @param {?} event
     * @return {?}
     */
    AutoCompleteComponent.prototype.documentClickHandler = function (event) {
        if ((this.searchbarElem
            && !this.searchbarElem._elementRef.nativeElement.contains(event.target))
            ||
                (!this.inputElem && this.inputElem._elementRef.nativeElement.contains(event.target))) {
            this.hideItemList();
        }
    };
    return AutoCompleteComponent;
}());
AutoCompleteComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                host: {
                    '(document:click)': 'documentClickHandler($event)',
                },
                template: "\n      <ion-input\n              #inputElem\n              (keyup)=\"getItems($event)\"\n              (tap)=\"showResultsFirst && getItems()\"\n              [(ngModel)]=\"keyword\"\n              [placeholder]=\"options.placeholder == null ? defaultOpts.placeholder : options.placeholder\"\n              [type]=\"options.type == null ? defaultOpts.type : options.type\"\n              [clearOnEdit]=\"options.clearOnEdit == null ? defaultOpts.clearOnEdit : options.clearOnEdit\"\n              [clearInput]=\"options.clearInput == null ? defaultOpts.clearInput : options.clearInput\"\n              [ngClass]=\"{'hidden': !useIonInput}\"\n              (ionFocus)=\"onFocus()\"\n              (ionBlur)=\"onBlur()\"\n      >\n      </ion-input>\n      <ion-searchbar\n              #searchbarElem\n              (ionInput)=\"getItems($event)\"\n              (tap)=\"showResultsFirst && getItems()\"\n              [(ngModel)]=\"keyword\"\n              [cancelButtonText]=\"options.cancelButtonText == null ? defaultOpts.cancelButtonText : options.cancelButtonText\"\n              [showCancelButton]=\"options.showCancelButton == null ? defaultOpts.showCancelButton : options.showCancelButton\"\n              [debounce]=\"options.debounce == null ? defaultOpts.debounce : options.debounce\"\n              [placeholder]=\"options.placeholder == null ? defaultOpts.placeholder : options.placeholder\"\n              [autocomplete]=\"options.autocomplete == null ? defaultOpts.autocomplete : options.autocomplete\"\n              [autocorrect]=\"options.autocorrect == null ? defaultOpts.autocorrect : options.autocorrect\"\n              [spellcheck]=\"options.spellcheck == null ? defaultOpts.spellcheck : options.spellcheck\"\n              [type]=\"options.type == null ? defaultOpts.type : options.type\"\n              [ngClass]=\"{'hidden': useIonInput}\"\n              (ionClear)=\"clearValue(true)\"\n              (ionFocus)=\"onFocus()\"\n              (ionBlur)=\"onBlur()\"\n      >\n      </ion-searchbar>\n      <ng-template #defaultTemplate let-attrs=\"attrs\">\n          <span [innerHTML]='(attrs.labelAttribute ? attrs.data[attrs.labelAttribute] : attrs.data) | boldprefix:attrs.keyword'></span>\n      </ng-template>\n      <ul *ngIf=\"suggestions.length > 0 && showList\">\n          <li *ngFor=\"let suggestion of suggestions\" (tap)=\"select(suggestion);$event.srcEvent.stopPropagation()\">\n              <ng-template\n                      [ngTemplateOutlet]=\"template || defaultTemplate\"\n                      [ngOutletContext]=\"\n                        {attrs:{ data: suggestion, keyword: keyword, labelAttribute: dataProvider.labelAttribute }}\"></ng-template>\n          </li>\n      </ul>\n      <p *ngIf=\"suggestions.length == 0 && showList && options.noItems\">{{ options.noItems }}</p>\n  ",
                selector: 'ion-auto-complete'
            },] },
];
/**
 * @nocollapse
 */
AutoCompleteComponent.ctorParameters = function () { return []; };
AutoCompleteComponent.propDecorators = {
    'dataProvider': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'options': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'keyword': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showResultsFirst': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'alwaysShowList': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'hideListOnSelection': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'template': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'useIonInput': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'autoFocus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'autoBlur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'itemSelected': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'itemsShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'itemsHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'ionAutoInput': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'searchbarElem': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['searchbarElem',] },],
    'inputElem': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['inputElem',] },],
};

/**
 * bolds the beggining of the matching string in the item
 */
var BoldPrefix = (function () {
    function BoldPrefix() {
    }
    /**
     * @param {?} value
     * @param {?} keyword
     * @return {?}
     */
    BoldPrefix.prototype.transform = function (value, keyword) {
        if (!keyword)
            return value;
        var /** @type {?} */ escaped_keyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return value.replace(new RegExp(escaped_keyword, 'gi'), function (str) { return str.bold(); });
    };
    return BoldPrefix;
}());
BoldPrefix.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'boldprefix'
            },] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
BoldPrefix.ctorParameters = function () { return []; };

var AutoCompleteModule = (function () {
    function AutoCompleteModule() {
    }
    /**
     * @return {?}
     */
    AutoCompleteModule.forRoot = function () {
        return {
            ngModule: AutoCompleteModule,
            providers: []
        };
    };
    return AutoCompleteModule;
}());
AutoCompleteModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [
                    __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                    __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* IonicModule */]
                ],
                declarations: [
                    AutoCompleteComponent,
                    BoldPrefix
                ],
                exports: [
                    AutoCompleteComponent,
                    BoldPrefix
                ]
            },] },
];
/**
 * @nocollapse
 */
AutoCompleteModule.ctorParameters = function () { return []; };




/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GongDanService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_HttpService__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GongDanService = (function () {
    function GongDanService(httpservice) {
        this.httpservice = httpservice;
    }
    GongDanService.prototype.create_work_order = function (body) {
        return this.httpservice.postBody("create_work_order", body, 1);
    };
    GongDanService.prototype.my_work_order_statistics = function () {
        var body = JSON.stringify({
            uid: __WEBPACK_IMPORTED_MODULE_0__providers_HttpService__["a" /* HttpService */].user_id
        });
        return this.httpservice.postBody("my_work_order_statistics", body, 1);
    };
    GongDanService.prototype.work_order_search = function (body) {
        return this.httpservice.postBody("work_order_search", body, 1);
    };
    GongDanService.prototype.work_order_searchNoLoading = function (body) {
        return this.httpservice.postBodyNoLoading("work_order_search", body, 1);
    };
    GongDanService.prototype.work_order_statistics = function (start_date, end_date, brand_ids, area_ids, category_ids, user_id) {
        var body = JSON.stringify({
            uid: user_id,
            start_date: start_date,
            end_date: end_date,
            brand_ids: brand_ids,
            area_ids: area_ids,
            category_ids: category_ids,
        });
        return this.httpservice.postBodyNoLoading("work_order_statistics", body, 1);
    };
    GongDanService.prototype.work_order_statistics_search = function (start_date, end_date, tag_ids, search_type, search_text) {
        var body = JSON.stringify({
            uid: __WEBPACK_IMPORTED_MODULE_0__providers_HttpService__["a" /* HttpService */].user_id,
            start_date: start_date,
            end_date: end_date,
            tag_ids: tag_ids,
            search_type: search_type,
            search_text: search_text,
        });
        return this.httpservice.postBodyNoLoading("work_order_statistics_search", body, 1);
    };
    GongDanService.prototype.work_order_statisticsWithTime = function (start_date, end_date) {
        var body = JSON.stringify({
            uid: __WEBPACK_IMPORTED_MODULE_0__providers_HttpService__["a" /* HttpService */].user_id,
            start_date: start_date,
            end_date: end_date
        });
        return this.httpservice.postBody("work_order_statistics", body, 1);
    };
    GongDanService.prototype.searchAtMe = function (body) {
        return this.httpservice.postBodyNoLoading("searchAtMe", body, 1);
    };
    GongDanService.prototype.searchAtMeWithLoading = function (body) {
        return this.httpservice.postBody("searchAtMe", body, 1);
    };
    GongDanService.prototype.getDepartment = function () {
        var body = JSON.stringify({
            partner_id: 1
        });
        return this.httpservice.postBody("get_all_departments", body);
    };
    GongDanService.prototype.getGongdanDetail = function (id) {
        var body = JSON.stringify({
            work_order_id: id,
            uid: __WEBPACK_IMPORTED_MODULE_0__providers_HttpService__["a" /* HttpService */].user_id
        });
        return this.httpservice.postBody("work_order_search_by_id", body, 1);
    };
    GongDanService.prototype.work_order_add_record = function (content, reply_uid, record_type, work_order_id, parent_id, record_imgs) {
        var body = JSON.stringify({
            content: content,
            reply_uid: reply_uid,
            record_type: record_type,
            work_order_id: work_order_id,
            parent_id: parent_id,
            uid: __WEBPACK_IMPORTED_MODULE_0__providers_HttpService__["a" /* HttpService */].user_id,
            record_imgs: record_imgs,
        });
        return this.httpservice.postBody("work_order_add_record", body, 1);
    };
    GongDanService.prototype.get_all_employees = function () {
        var body = JSON.stringify({});
        return this.httpservice.postBody("get_all_employees", body);
    };
    GongDanService.prototype.get_department_employees = function (department_ids) {
        var body = JSON.stringify({
            department_ids: department_ids
        });
        return this.httpservice.postBody("get_department_employees", body);
    };
    GongDanService.prototype.work_order_action = function (uid, work_order_id, action_type, assign_uid) {
        var body = JSON.stringify({
            uid: uid,
            work_order_id: work_order_id,
            action_type: action_type,
            assign_uid: assign_uid,
        });
        return this.httpservice.postBody("work_order_action", body, 1);
    };
    GongDanService.prototype.work_order_retract = function (uid, work_order_id, need_unlink) {
        var body = JSON.stringify({
            uid: uid,
            work_order_id: work_order_id,
            need_unlink: need_unlink,
        });
        return this.httpservice.postBody("work_order_retract", body, 1);
    };
    GongDanService.prototype.commit_draft = function (body) {
        return this.httpservice.postBody("commit_draft", body, 1);
    };
    GongDanService.prototype.search_gongdan = function (search_text, search_type) {
        var body = JSON.stringify({
            uid: __WEBPACK_IMPORTED_MODULE_0__providers_HttpService__["a" /* HttpService */].user_id,
            search_text: search_text,
            search_type: search_type,
        });
        return this.httpservice.postBody("search_gongdan", body, 1);
    };
    GongDanService.prototype.get_all_biaoqian = function () {
        return this.httpservice.postBody("get_all_biaoqian", {}, 1);
    };
    GongDanService.prototype.update_biaoqian = function (work_order_id, category_ids, brand_ids, area_ids) {
        var body = JSON.stringify({
            uid: __WEBPACK_IMPORTED_MODULE_0__providers_HttpService__["a" /* HttpService */].user_id,
            work_order_id: work_order_id,
            category_ids: category_ids,
            brand_ids: brand_ids,
            area_ids: area_ids,
        });
        return this.httpservice.postBody("update_biaoqian", body, 1);
    };
    GongDanService.prototype.get_employee_detail = function (user_id) {
        var body = JSON.stringify({
            user_id: user_id,
        });
        return this.httpservice.postBody("get_employee_detail", body, 1);
    };
    GongDanService.prototype.search_biaoqian = function (search_type, search_text) {
        var body = JSON.stringify({
            search_type: search_type,
            search_text: search_text
        });
        return this.httpservice.postBody("search_biaoqian", body, 1);
    };
    return GongDanService;
}());
GongDanService = __decorate([
    __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"](),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_HttpService__["a" /* HttpService */]])
], GongDanService);

//# sourceMappingURL=gongdanService.js.map

/***/ })

});
//# sourceMappingURL=26.js.map