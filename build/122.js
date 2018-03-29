webpackJsonp([122],{

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/pages/work-bench/journal-sheet/visit-biaoqian/visit-biaoqian.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_Utils__ = __webpack_require__(238);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the VisitBiaoqianPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VisitBiaoqianPage = (function () {
    function VisitBiaoqianPage(navCtrl, navParams, statusBar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.statusBar = statusBar;
        this.person_id = -1;
        this.teamPerson = this.navParams.get('item');
        this.frontPage = __WEBPACK_IMPORTED_MODULE_3__providers_Utils__["a" /* Utils */].getViewController("VisitListPage", navCtrl);
        console.log(this.teamPerson);
    }
    VisitBiaoqianPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VisitBiaoqianPage');
    };
    VisitBiaoqianPage.prototype.ionViewWillEnter = function () {
        this.statusBar.backgroundColorByHexString("#2597ec");
        this.statusBar.styleLightContent();
    };
    VisitBiaoqianPage.prototype.goBack = function () {
        this.statusBar.backgroundColorByHexString("#f8f8f8");
        this.statusBar.styleDefault();
        this.navCtrl.pop();
    };
    //重置
    VisitBiaoqianPage.prototype.cancel_biaoqian = function () {
        this.person_id = -1;
        for (var _i = 0, _a = this.teamPerson; _i < _a.length; _i++) {
            var items = _a[_i];
            if (items.user_id == -1) {
                items.is_choose = true;
                this.isCheck(items);
            }
            else {
                items.is_choose = false;
            }
        }
    };
    //完成
    VisitBiaoqianPage.prototype.confirm_biaoqian = function () {
        console.log('biaoqian=>person_id = ' + this.person_id);
        this.frontPage.data.person_id = this.person_id;
        this.navCtrl.popTo(this.frontPage);
    };
    VisitBiaoqianPage.prototype.isCheck = function (item) {
        var isChoose = false;
        isChoose = item.is_choose;
        return isChoose;
    };
    VisitBiaoqianPage.prototype.checkOther = function (item) {
        var personId = item.user_id;
        this.person_id = personId;
        console.log('personId = ' + personId);
        for (var _i = 0, _a = this.teamPerson; _i < _a.length; _i++) {
            var items = _a[_i];
            if (items.user_id == personId) {
                items.is_choose = true;
            }
            else {
                items.is_choose = false;
            }
        }
    };
    return VisitBiaoqianPage;
}());
VisitBiaoqianPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"]({
        selector: 'page-visit-biaoqian',template:/*ion-inline-start:"/Users/bin/Downloads/MyOA 2/src/pages/work-bench/journal-sheet/visit-biaoqian/visit-biaoqian.html"*/'<!--\n  Generated template for the VisitBiaoqianPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="gongdan-color" hideBackButton="true">\n      <ion-buttons left>\n          <button ion-button icon-only (click)="goBack()">\n            <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>筛选</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div text-aligh:center style="background:#f0f2f5;padding:1px;">\n        <p  style="font-size:12px;color:#8a9399;padding-left:15px;line-height:5px">销售员</p>\n    </div>\n    <ion-grid>\n        <ion-row style="text-align:center;height:50px;line-height:50px">\n            <ion-col  col-3 *ngFor=\'let item of teamPerson\' tappable (click)="checkOther(item)">\n              <div style="padding:1px;" [ngClass]="{true:\'backcolor1\',false:\'backcolor_normal\'}[isCheck(item)]">\n                <p text-wrap  style="font-size:13px;height:25px;line-height:10px;padding-top:5px">\n                    {{item.user_name}}\n                </p>\n              </div>\n            </ion-col>\n          </ion-row>\n    </ion-grid>\n</ion-content>\n\n<ion-footer >\n    <div style="background:white">\n<span align="center" style=\'width:50%;float:left; background-color:#fba958;height:44px;line-height:44px;font-size:15px;color:white\' tappable (click)="cancel_biaoqian()">\n重置\n</span>\n<span align="center" style=\'width:50%;float:right;background-color:#1eabfe;height:44px;line-height:44px;font-size:15px;color:white\' tappable (click)="confirm_biaoqian()">\n完成\n</span>\n</div>\n</ion-footer>\n'/*ion-inline-end:"/Users/bin/Downloads/MyOA 2/src/pages/work-bench/journal-sheet/visit-biaoqian/visit-biaoqian.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]])
], VisitBiaoqianPage);

//# sourceMappingURL=visit-biaoqian.js.map
// CONCATENATED MODULE: ./src/pages/work-bench/journal-sheet/visit-biaoqian/visit-biaoqian.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitBiaoqianPageModule", function() { return VisitBiaoqianPageModule; });
/* harmony import */ var visit_biaoqian_module___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var visit_biaoqian_module___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var visit_biaoqian_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VisitBiaoqianPageModule = (function () {
    function VisitBiaoqianPageModule() {
    }
    return VisitBiaoqianPageModule;
}());
VisitBiaoqianPageModule = visit_biaoqian_module___decorate([
    visit_biaoqian_module___WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"]({
        declarations: [
            VisitBiaoqianPage,
        ],
        imports: [
            visit_biaoqian_module___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(VisitBiaoqianPage),
        ],
    })
], VisitBiaoqianPageModule);

//# sourceMappingURL=visit-biaoqian.module.js.map

/***/ })

});
//# sourceMappingURL=122.js.map