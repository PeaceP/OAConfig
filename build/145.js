webpackJsonp([145],{

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/pages/add-employee/prompt/gongpai/gongpai.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_navigation_ionic_page__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
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
 * Generated class for the GongpaiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GongpaiPage = (function () {
    function GongpaiPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.isFinish = false;
        this.isShowOnAlert = true;
    }
    GongpaiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GongpaiPage');
    };
    GongpaiPage.prototype.openCertificationModal = function () {
        // let myModal = this.modalCtrl.create('PopmodalPage', {}, {
        //     cssClass: 'custom-modal'
        // });
        // myModal.present();
        this.isFinish = true;
    };
    return GongpaiPage;
}());
GongpaiPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_0_ionic_angular_navigation_ionic_page__["a" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"]({
        selector: 'page-gongpai',template:/*ion-inline-start:"/Users/bin/Downloads/MyOA 2/src/pages/add-employee/prompt/gongpai/gongpai.html"*/'<!--\n  Generated template for the GongpaiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="gongdan-color">\n    <ion-title>绑定工牌</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)=\'finish()\'>\n        完成\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-backdrop *ngIf="isFinish" style="opacity: 0.6;">\n  </ion-backdrop>\n\n\n</ion-header>\n\n\n<ion-content>\n  <button (click)="openCertificationModal()">\n    按钮\n  </button>\n\n  <ion-backdrop *ngIf="isFinish" disable-activated role="presentation" tappable style="opacity: 0.6; transition-delay: initial; transition-property: none;">\n  </ion-backdrop>\n  <div *ngIf="isFinish" class="alert_div_fail" style="opacity: 1.0;">\n    <div style="text-align:center">\n      <img style="width:60px;height:60px;margin-top:39px;" src="assets/img/finished.png">\n      <p style="font-size: 16px;\n                  color: #8a9199;\n                  line-height: 0px;margin-top:30px">绑定成功</p>\n      <p>\n    </div>\n  </div>\n  <div *ngIf="!isFinish">\n    <div style="text-align:center">\n      <img style="width:120px;height:120px;margin-top:39px;" src="assets/img/near_nfc.png">\n      <p style="font-size: 16px;\n          color: #8a9199;\n          line-height: 0px;margin-top:30px">请将NFC手机靠近工牌</p>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/bin/Downloads/MyOA 2/src/pages/add-employee/prompt/gongpai/gongpai.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ModalController */]])
], GongpaiPage);

//# sourceMappingURL=gongpai.js.map
// CONCATENATED MODULE: ./src/pages/add-employee/prompt/gongpai/gongpai.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GongpaiPageModule", function() { return GongpaiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var gongpai_module___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var gongpai_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GongpaiPageModule = (function () {
    function GongpaiPageModule() {
    }
    return GongpaiPageModule;
}());
GongpaiPageModule = gongpai_module___decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"]({
        declarations: [
            GongpaiPage,
        ],
        imports: [
            gongpai_module___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(GongpaiPage),
        ],
    })
], GongpaiPageModule);

//# sourceMappingURL=gongpai.module.js.map

/***/ })

});
//# sourceMappingURL=145.js.map