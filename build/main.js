webpackJsonp([146],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HttpService = HttpService_1 = (function () {
    function HttpService(http, loading, storage, ctrl) {
        this.http = http;
        this.loading = loading;
        this.storage = storage;
        this.ctrl = ctrl;
    }
    HttpService.prototype.getAppPath = function (url, type) {
        if (type === void 0) { type = 0; }
        if (type == 1) {
            return HttpService_1.appUrl + __WEBPACK_IMPORTED_MODULE_1__Constants__["b" /* APPSUBPATH */] + url;
        }
        else {
            return HttpService_1.appUrl + __WEBPACK_IMPORTED_MODULE_1__Constants__["f" /* OAUBPATH */] + url;
        }
    };
    HttpService.prototype.getWithUrl = function (url) {
        var _this = this;
        var loading = this.loadingCreate(true);
        return this.http.get(url)
            .map(function (data) { return _this.dealRe(data, loading); })
            .toPromise()
            .then(function (res) { return _this.handleSuccess(res.json()); })
            .catch(function (error) { return _this.handleError(error); });
    };
    HttpService.prototype.getLocationWithUrl = function (url) {
        var _this = this;
        var loading = this.loadingCreate(true);
        return this.http.get(url)
            .map(function (data) { return _this.dealRe(data, loading); })
            .toPromise()
            .then(function (res) { return _this.handleSuccess(_this.deleteBy(res)); })
            .catch(function (error) { return _this.handleError(error); });
    };
    HttpService.prototype.deleteBy = function (res) {
        // var num1=res._body.split("(")  //["deleteChild", "236737)"]
        // var num2=num1[1].split(")") //["236737", ""]
        // var result= num2[0]
        var result = res._body.substring(29, res._body.length - 1);
        return JSON.parse(result);
    };
    HttpService.prototype.getWithUrlNoLoading = function (url) {
        var _this = this;
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return _this.handleSuccess(res.json()); })
            .catch(function (error) { return _this.handleError(error); });
    };
    //type 不填是OA,填1是linkloving_app_apu
    HttpService.prototype.get = function (url, paramObj, type) {
        var _this = this;
        if (type === void 0) { type = 0; }
        var loading = this.loadingCreate(true);
        return this.http.get(this.getAppPath(url, type) + this.toQueryString(paramObj))
            .map(function (data) { return _this.dealRe(data, loading); })
            .toPromise()
            .then(function (res) { return _this.handleSuccess(res.json()); })
            .catch(function (error) { return _this.handleError(error); });
    };
    //type 不填是OA,填1是linkloving_app_apu
    HttpService.prototype.getNoLoading = function (url, paramObj, type) {
        var _this = this;
        if (type === void 0) { type = 0; }
        return this.http.get(this.getAppPath(url, type) + this.toQueryString(paramObj))
            .toPromise()
            .then(function (res) { return _this.handleSuccess(res.json()); })
            .catch(function (error) { return _this.handleError(error); });
    };
    HttpService.prototype.post = function (url, paramObj, type) {
        var _this = this;
        if (type === void 0) { type = 0; }
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        headers.append("Accept", "application/json");
        return this.http.post(this.getAppPath(url, type), this.toBodyString(paramObj), new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers }))
            .toPromise()
            .then(function (res) { return _this.handleSuccess(res.json()); })
            .catch(function (error) { return _this.handleError(error); });
    };
    //加载  
    HttpService.prototype.loadingCreate = function (isLoading, pageIndex) {
        var loading = this.loading.create({
            content: '加载中',
            enableBackdropDismiss: true
        });
        pageIndex = typeof (pageIndex) == 'undefined' ? 1 : pageIndex;
        isLoading = typeof (isLoading) == 'undefined' ? true : isLoading;
        if (isLoading == true && pageIndex == 1) {
            loading.present();
        }
        return loading;
    };
    //返回处理  
    HttpService.prototype.dealRe = function (re, loading) {
        loading.dismiss();
        return re;
    };
    HttpService.prototype.postBody = function (url, paramObj, type) {
        var _this = this;
        if (type === void 0) { type = 0; }
        var loading = this.loadingCreate(true);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.getAppPath(url, type), paramObj, new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers
        }))
            .map(function (data) { return _this.dealRe(data, loading); })
            .toPromise()
            .then(function (res) {
            return _this.handleSuccess(res.json());
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    HttpService.prototype.postBodyNoLoading = function (url, paramObj, type) {
        var _this = this;
        if (type === void 0) { type = 0; }
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.getAppPath(url, type), paramObj, new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers }))
            .toPromise()
            .then(function (res) {
            return _this.handleSuccess(res.json());
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    HttpService.prototype.handleSuccess = function (result) {
        console.log(result);
        if (result.error) {
            this.ctrl.create({
                title: "错误:",
                subTitle: result.error.data.message,
                buttons: [{
                        text: '确定',
                        handler: function () {
                        }
                    }
                ]
            }).present();
            return result;
        }
        else {
            return result;
        }
    };
    HttpService.prototype.handleError = function (error) {
        var msg = '请求失败';
        if (error.status == 0) {
            msg = '请求地址错误';
        }
        if (error.status == 400) {
            msg = '请求无效';
            console.log('请检查参数类型是否匹配');
        }
        if (error.status == 404) {
            msg = '请求资源不存在';
            console.error(msg + '，请检查路径是否正确');
        }
        console.log(error);
        alert(msg); //这里使用ToastController
        return { success: false, msg: msg };
    };
    /**
     * @param obj　参数对象
     * @return {string}　参数字符串
     * @example
     *  声明: var obj= {'name':'小军',age:23};
     *  调用: toQueryString(obj);
     *  返回: "?name=%E5%B0%8F%E5%86%9B&age=23"
     */
    HttpService.prototype.toQueryString = function (obj) {
        var ret = [];
        for (var key in obj) {
            key = encodeURIComponent(key);
            var values = obj[key];
            if (values && values.constructor == Array) {
                var queryValues = [];
                for (var i = 0, len = values.length, value = void 0; i < len; i++) {
                    value = values[i];
                    queryValues.push(this.toQueryPair(key, value));
                }
                ret = ret.concat(queryValues);
            }
            else {
                ret.push(this.toQueryPair(key, values));
            }
        }
        return '?' + ret.join('&');
    };
    /**
     *
     * @param obj
     * @return {string}
     *  声明: var obj= {'name':'小军',age:23};
     *  调用: toQueryString(obj);
     *  返回: "name=%E5%B0%8F%E5%86%9B&age=23"
     */
    HttpService.prototype.toBodyString = function (obj) {
        var ret = [];
        for (var key in obj) {
            key = encodeURIComponent(key);
            var values = obj[key];
            if (values && values.constructor == Array) {
                var queryValues = [];
                for (var i = 0, len = values.length, value = void 0; i < len; i++) {
                    value = values[i];
                    queryValues.push(this.toQueryPair(key, value));
                }
                ret = ret.concat(queryValues);
            }
            else {
                ret.push(this.toQueryPair(key, values));
            }
        }
        return ret.join('&');
    };
    HttpService.prototype.toQueryPair = function (key, value) {
        if (typeof value == 'undefined') {
            return key;
        }
        return key + '=' + encodeURIComponent(value === null ? '' : String(value));
    };
    return HttpService;
}());
HttpService = HttpService_1 = __decorate([
    __WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"](),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["r" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */]])
], HttpService);

var HttpService_1;
//# sourceMappingURL=HttpService.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by yanxiaojun on 2017/4/13.
 */

var GlobalData = (function () {
    function GlobalData() {
        this._showLoading = true; //请求是否显示loading,注意:设置为true,当请求执行后需要设置为false
    }
    Object.defineProperty(GlobalData.prototype, "userId", {
        get: function () {
            return this._userId;
        },
        set: function (value) {
            this._userId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalData.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalData.prototype, "token", {
        get: function () {
            return this._token;
        },
        set: function (value) {
            this._token = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalData.prototype, "showLoading", {
        get: function () {
            return this._showLoading;
        },
        set: function (value) {
            this._showLoading = value;
        },
        enumerable: true,
        configurable: true
    });
    return GlobalData;
}());
GlobalData = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"]()
], GlobalData);

//# sourceMappingURL=GlobalData.js.map

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-employee/add-employee.module": [
		585,
		1
	],
	"../pages/add-employee/create-account/create-account.module": [
		586,
		37
	],
	"../pages/add-employee/employee-detail/employee-detail.module": [
		587,
		0
	],
	"../pages/add-employee/prompt/gongpai/gongpai.module": [
		589,
		145
	],
	"../pages/add-employee/prompt/gongpai/popmodal/popmodal.module": [
		590,
		144
	],
	"../pages/add-employee/prompt/prompt.module": [
		588,
		102
	],
	"../pages/add-employee/q-rcode/q-rcode.module": [
		591,
		143
	],
	"../pages/contact-person/contact-person.module": [
		557,
		36
	],
	"../pages/contact-person/employee-list/employee-list.module": [
		592,
		101
	],
	"../pages/customer/add-customer/add-customer.module": [
		593,
		97
	],
	"../pages/customer/biao-qian/biao-qian.module": [
		602,
		96
	],
	"../pages/customer/cam-card/cam-card.module": [
		600,
		4
	],
	"../pages/customer/choose/choose.module": [
		598,
		95
	],
	"../pages/customer/create-info/create-info.module": [
		603,
		99
	],
	"../pages/customer/customer-detail/customer-detail.module": [
		595,
		10
	],
	"../pages/customer/customer.module": [
		597,
		35
	],
	"../pages/customer/edit-card/edit-card.module": [
		601,
		34
	],
	"../pages/customer/productlist/productlist.module": [
		599,
		94
	],
	"../pages/customer/xiansuo-detail/xiansuo-detail.module": [
		596,
		93
	],
	"../pages/login/login-popover/login-popover.module": [
		604,
		142
	],
	"../pages/login/login.module": [
		554,
		33
	],
	"../pages/me/edit-information/edit-information.module": [
		580,
		91
	],
	"../pages/me/me.module": [
		581,
		92
	],
	"../pages/me/phone-number/phone-number.module": [
		579,
		141
	],
	"../pages/msg/msg-detail/msg-detail.module": [
		582,
		140
	],
	"../pages/msg/msg.module": [
		583,
		139
	],
	"../pages/rangtest/rangtest.module": [
		605,
		138
	],
	"../pages/tabs/tabs.module": [
		553,
		137
	],
	"../pages/work-bench/apply/apply-detail/apply-detail.module": [
		608,
		90
	],
	"../pages/work-bench/apply/apply.module": [
		607,
		3
	],
	"../pages/work-bench/apply/baoxiao-apply/add-apply-detail/add-apply-detail.module": [
		610,
		136
	],
	"../pages/work-bench/apply/baoxiao-apply/baoxiao-apply.module": [
		609,
		89
	],
	"../pages/work-bench/apply/baoxiao-apply/shengou-item/shengou-item.module": [
		611,
		88
	],
	"../pages/work-bench/apply/leave-apply/leave-apply.module": [
		612,
		87
	],
	"../pages/work-bench/apply/leave-detail/leave-detail.module": [
		613,
		135
	],
	"../pages/work-bench/baobiao/baobiao-detail/baobiao-detail.module": [
		615,
		86
	],
	"../pages/work-bench/baobiao/baobiao.module": [
		614,
		85
	],
	"../pages/work-bench/baobiao/hk-baobiao/hk-baobiao.module": [
		616,
		134
	],
	"../pages/work-bench/cardinfo/cardinfo.module": [
		617,
		133
	],
	"../pages/work-bench/change-kucun/change-kucun-detail/change-kucun-detail.module": [
		619,
		32
	],
	"../pages/work-bench/change-kucun/change-kucun.module": [
		618,
		31
	],
	"../pages/work-bench/contact-list/contact-list.module": [
		594,
		132
	],
	"../pages/work-bench/create-apply/create-apply.module": [
		606,
		84
	],
	"../pages/work-bench/delivery-extra/delivery-extra.module": [
		621,
		131
	],
	"../pages/work-bench/delivery-initial-request/delivery-initial-request.module": [
		622,
		130
	],
	"../pages/work-bench/delivery-notes-detail/delivery-notes-detail.module": [
		574,
		129
	],
	"../pages/work-bench/delivery-notes/delivery-notes.module": [
		575,
		81
	],
	"../pages/work-bench/delivery/delivery.module": [
		620,
		128
	],
	"../pages/work-bench/gongdan/at-me-list/at-me-list.module": [
		624,
		80
	],
	"../pages/work-bench/gongdan/change-biaoqian/change-biaoqian.module": [
		625,
		26
	],
	"../pages/work-bench/gongdan/create-gongdan/assign-people/assign-people.module": [
		627,
		100
	],
	"../pages/work-bench/gongdan/create-gongdan/biaoqian/biaoqian.module": [
		628,
		25
	],
	"../pages/work-bench/gongdan/create-gongdan/choose-department/choose-department.module": [
		629,
		127
	],
	"../pages/work-bench/gongdan/create-gongdan/create-gongdan.module": [
		626,
		79
	],
	"../pages/work-bench/gongdan/create-gongdan/delete-picture/delete-picture.module": [
		630,
		126
	],
	"../pages/work-bench/gongdan/create-gongdan/who-can-see/who-can-see.module": [
		631,
		78
	],
	"../pages/work-bench/gongdan/gongdan-biaoqian/gongdan-biaoqian.module": [
		632,
		24
	],
	"../pages/work-bench/gongdan/gongdan-chat/gongdan-chat.module": [
		633,
		77
	],
	"../pages/work-bench/gongdan/gongdan-choose-people/gongdan-choose-people.module": [
		634,
		76
	],
	"../pages/work-bench/gongdan/gongdan-detail/gongdan-detail.module": [
		635,
		75
	],
	"../pages/work-bench/gongdan/gongdan-new-chat/gongdan-new-chat.module": [
		636,
		74
	],
	"../pages/work-bench/gongdan/gongdan-search/gongdan-search.module": [
		637,
		23
	],
	"../pages/work-bench/gongdan/gongdan-zhipai/gongdan-zhipai.module": [
		638,
		73
	],
	"../pages/work-bench/gongdan/gongdan.module": [
		623,
		72
	],
	"../pages/work-bench/gongdan/my-gongdan-list/my-gongdan-list.module": [
		639,
		71
	],
	"../pages/work-bench/gongdan/reback-gongdan/reback-gongdan.module": [
		640,
		70
	],
	"../pages/work-bench/incoming-detail/incoming-detail.module": [
		573,
		125
	],
	"../pages/work-bench/incoming/incoming.module": [
		571,
		69
	],
	"../pages/work-bench/inspection-detail/inspection-detail.module": [
		572,
		124
	],
	"../pages/work-bench/journal-sheet/journal-sheet.module": [
		641,
		68
	],
	"../pages/work-bench/journal-sheet/new-delete/new-delete.module": [
		642,
		123
	],
	"../pages/work-bench/journal-sheet/visit-biaoqian/visit-biaoqian.module": [
		643,
		122
	],
	"../pages/work-bench/journal-sheet/visit-detail/visit-detail.module": [
		644,
		121
	],
	"../pages/work-bench/journal-sheet/visit-list/visit-list.module": [
		645,
		67
	],
	"../pages/work-bench/journal-sheet/write-journal/write-journal.module": [
		646,
		66
	],
	"../pages/work-bench/kaoqin/choose-location/choose-location.module": [
		648,
		22
	],
	"../pages/work-bench/kaoqin/delete-kaoqin-photo/delete-kaoqin-photo.module": [
		649,
		120
	],
	"../pages/work-bench/kaoqin/kaoqin-people/kaoqin-people.module": [
		650,
		65
	],
	"../pages/work-bench/kaoqin/kaoqin-photo/kaoqin-photo.module": [
		651,
		21
	],
	"../pages/work-bench/kaoqin/kaoqin.module": [
		647,
		64
	],
	"../pages/work-bench/material-request/edit-material-request/edit-material-request.module": [
		653,
		63
	],
	"../pages/work-bench/material-request/material-request-detail/material-request-detail.module": [
		654,
		119
	],
	"../pages/work-bench/material-request/material-request.module": [
		652,
		20
	],
	"../pages/work-bench/material-request/shenhe-material-request/shenhe-material-request.module": [
		655,
		19
	],
	"../pages/work-bench/new-production/more-level-list/more-level-list.module": [
		657,
		62
	],
	"../pages/work-bench/new-production/new-product-detail/new-product-detail.module": [
		658,
		61
	],
	"../pages/work-bench/new-production/new-product-list/new-product-list.module": [
		659,
		9
	],
	"../pages/work-bench/new-production/new-production.module": [
		656,
		8
	],
	"../pages/work-bench/new-production/new-stock-move/new-stock-move.module": [
		660,
		118
	],
	"../pages/work-bench/order-detail/order-detail.module": [
		663,
		60
	],
	"../pages/work-bench/order-detail/product-detail/product-detail.module": [
		664,
		59
	],
	"../pages/work-bench/order/approve-order/approve-order.module": [
		662,
		58
	],
	"../pages/work-bench/order/order.module": [
		661,
		18
	],
	"../pages/work-bench/pay-request/bill-detail/bill-detail.module": [
		666,
		54
	],
	"../pages/work-bench/pay-request/pay-request-detail/pay-request-detail.module": [
		667,
		53
	],
	"../pages/work-bench/pay-request/pay-request.module": [
		665,
		17
	],
	"../pages/work-bench/po-contact/po-contact.module": [
		576,
		16
	],
	"../pages/work-bench/popover-order/popover-order.module": [
		668,
		2
	],
	"../pages/work-bench/production-search/production-detail/bom/bom.module": [
		556,
		117
	],
	"../pages/work-bench/production-search/production-detail/production-detail.module": [
		558,
		116
	],
	"../pages/work-bench/production-search/production-detail/warehouse-move/warehouse-move.module": [
		555,
		115
	],
	"../pages/work-bench/production-search/production-search.module": [
		559,
		52
	],
	"../pages/work-bench/reimbursement/my-apply/my-apply.module": [
		670,
		114
	],
	"../pages/work-bench/reimbursement/reimbursement-detail/edit-reimbursement/edit-reimbursement.module": [
		672,
		113
	],
	"../pages/work-bench/reimbursement/reimbursement-detail/reimbursement-detail.module": [
		671,
		30
	],
	"../pages/work-bench/reimbursement/reimbursement.module": [
		669,
		5
	],
	"../pages/work-bench/reimbursement/wait-me-apply/wait-me-apply.module": [
		673,
		112
	],
	"../pages/work-bench/return-order-detail/return-order-detail.module": [
		674,
		111
	],
	"../pages/work-bench/return-order-detail/return-product-detail/return-product-detail.module": [
		675,
		57
	],
	"../pages/work-bench/return-popover/return-popover.module": [
		676,
		7
	],
	"../pages/work-bench/salesOrder/create-quotes/add-production/add-production.module": [
		566,
		110
	],
	"../pages/work-bench/salesOrder/create-quotes/create-quotes.module": [
		568,
		51
	],
	"../pages/work-bench/salesOrder/create-quotes/customer-list/customer-list.module": [
		561,
		98
	],
	"../pages/work-bench/salesOrder/create-quotes/improve-quotation/billing-info/billing-info.module": [
		564,
		109
	],
	"../pages/work-bench/salesOrder/create-quotes/improve-quotation/delivery-info/delivery-info.module": [
		563,
		50
	],
	"../pages/work-bench/salesOrder/create-quotes/improve-quotation/improve-quotation.module": [
		567,
		49
	],
	"../pages/work-bench/salesOrder/create-quotes/improve-quotation/sales-info/sales-info.module": [
		562,
		48
	],
	"../pages/work-bench/salesOrder/create-quotes/production-list/production-list.module": [
		565,
		47
	],
	"../pages/work-bench/salesOrder/jiaohuo-list/jiaohuo-detail/jiaohuo-detail.module": [
		678,
		108
	],
	"../pages/work-bench/salesOrder/jiaohuo-list/jiaohuo-list.module": [
		677,
		46
	],
	"../pages/work-bench/salesOrder/jiaohuo-list/wuliu-detail/wuliu-detail.module": [
		679,
		107
	],
	"../pages/work-bench/salesOrder/sales-detail/baojia-detail/baojia-detail.module": [
		680,
		56
	],
	"../pages/work-bench/salesOrder/sales-detail/create-invoice/create-invoice.module": [
		560,
		15
	],
	"../pages/work-bench/salesOrder/sales-detail/delivery/delivery.module": [
		569,
		106
	],
	"../pages/work-bench/salesOrder/sales-detail/popover/popover.module": [
		681,
		55
	],
	"../pages/work-bench/salesOrder/sales-detail/purchase-back-order/purchase-back-order.module": [
		682,
		105
	],
	"../pages/work-bench/salesOrder/sales-detail/sales-detail.module": [
		577,
		6
	],
	"../pages/work-bench/salesOrder/salesOrder.module": [
		570,
		14
	],
	"../pages/work-bench/share-knowledge/share-knowledge.module": [
		683,
		45
	],
	"../pages/work-bench/share-knowledge/shareknowledgedetail/shareknowledgedetail.module": [
		684,
		44
	],
	"../pages/work-bench/share-knowledge/shareknowlelist/shareknowlelist.module": [
		685,
		104
	],
	"../pages/work-bench/shengoupage/audited-purchase/audited-purchase.module": [
		687,
		43
	],
	"../pages/work-bench/shengoupage/create-shengou/add-shengou-detail/add-shengou-detail.module": [
		689,
		42
	],
	"../pages/work-bench/shengoupage/create-shengou/create-shengou.module": [
		688,
		29
	],
	"../pages/work-bench/shengoupage/edit-add-shengou/edit-add-shengou.module": [
		690,
		41
	],
	"../pages/work-bench/shengoupage/edit-new-shengou/edit-new-shengou.module": [
		691,
		40
	],
	"../pages/work-bench/shengoupage/edit-shengou/edit-shengou.module": [
		692,
		39
	],
	"../pages/work-bench/shengoupage/myshengoudetail/myshengoudetail.module": [
		693,
		38
	],
	"../pages/work-bench/shengoupage/shengoupage.module": [
		686,
		13
	],
	"../pages/work-bench/supplier-detail/supplier-detail.module": [
		694,
		12
	],
	"../pages/work-bench/supplier-list/supplier-list.module": [
		584,
		11
	],
	"../pages/work-bench/wait-approval/wait-approval.module": [
		695,
		103
	],
	"../pages/work-bench/work-bench.module": [
		578,
		28
	],
	"../pages/work-bench/zanzhi/zanzhi-apply/zanzhi-apply.module": [
		697,
		83
	],
	"../pages/work-bench/zanzhi/zanzhi-detail/zanzhi-detail.module": [
		698,
		82
	],
	"../pages/work-bench/zanzhi/zanzhi.module": [
		696,
		27
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 133;

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export APP_SERVER_URL_T */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return APPSUBPATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return OAUBPATH; });
/* unused harmony export APP_SERVER_URL */
/* unused harmony export PAGE_SIZE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return IMAGE_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return QUALITY_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return APP_DOWNLOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AndroidAppVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APK_DOWNLOAD; });
var APP_SERVER_URL_T = 'http://erp.robotime.com/';
var APPSUBPATH = 'linkloving_app_api/';
var OAUBPATH = 'linkloving_oa_api/';
// export const APP_SERVER_URL= 'http://192.168.88.117:8069/';
// export const APP_SERVER_URL= 'http://192.168.2.51:8069/';
//export const APP_SERVER_URL= 'http://erp.robotime.com/';
// export const APP_SERVER_URL= 'http://192.168.2.38:8111/';
var APP_SERVER_URL = 'http://192.168.2.64:8069/';
var PAGE_SIZE = 5; //默认分页大小
//默认分页大小
var IMAGE_SIZE = 1024; //默认分页大小
//默认分页大小
var QUALITY_SIZE = 100; //图像质量，范围为0 - 100
//图像质量，范围为0 - 100
var APP_DOWNLOAD = 'http://api.fir.im/apps/latest/5987b68b959d696541000004?api_token=f2a3d1973878abb5ba921a0176a5c1fb'; //app下载地址
//app下载地址
var AndroidAppVersion = 'http://api.fir.im/apps/latest/5987b68b959d696541000004?api_token=f2a3d1973878abb5ba921a0176a5c1fb';
// export const AndroidAppVersion = 'http://api.fir.im/apps/latest/5961a838548b7a7a16000060?api_token=64719ce59bbb6f8f408b0dcfa5da129e';
var APK_DOWNLOAD = 'http://download.fir.im/v2/app/install/5987b68b959d696541000004?download_token=62db5d0976e9a53c2efc4117b535a723&source=update'; //apk下载完整地址
//# sourceMappingURL=Constants.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Utils = (function () {
    function Utils() {
    }
    Utils.getViewController = function (pageName, navController) {
        for (var _i = 0, _a = navController.getViews(); _i < _a.length; _i++) {
            var viewController = _a[_i];
            if (viewController.name == pageName) {
                return viewController;
            }
        }
        return null;
    };
    Utils.toastButtom = function (toastString, toastCtrl) {
        var toast = toastCtrl.create({
            message: toastString,
            duration: 2000,
            position: 'buttom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    Utils.conformAlert = function (alertString, alert) {
        alert.create({
            title: '提示',
            subTitle: alertString,
            buttons: [
                {
                    text: '确定',
                    handler: function () {
                    }
                }
            ]
        }).present();
    };
    /**
       * 日期对象转为日期字符串
       * @param date 需要格式化的日期对象
       * @param sFormat 输出格式,默认为yyyy-MM-dd                        年：y，月：M，日：d，时：h，分：m，秒：s
       * @example  dateFormat(new Date())                               "2017-02-28"
       * @example  dateFormat(new Date(),'yyyy-MM-dd')                  "2017-02-28"
       * @example  dateFormat(new Date(),'yyyy-MM-dd HH:mm:ss')         "2017-02-28 13:24:00"   ps:HH:24小时制
       * @example  dateFormat(new Date(),'yyyy-MM-dd hh:mm:ss')         "2017-02-28 01:24:00"   ps:hh:12小时制
       * @example  dateFormat(new Date(),'hh:mm')                       "09:24"
       * @example  dateFormat(new Date(),'yyyy-MM-ddTHH:mm:ss+08:00')   "2017-02-28T13:24:00+08:00"
       * @example  dateFormat(new Date('2017-02-28 13:24:00'),'yyyy-MM-ddTHH:mm:ss+08:00')   "2017-02-28T13:24:00+08:00"
       * @returns {string}
       */
    Utils.dateFormat = function (date, sFormat) {
        if (sFormat === void 0) { sFormat = 'yyyy-MM-dd'; }
        var time = {
            Year: 0,
            TYear: '0',
            Month: 0,
            TMonth: '0',
            Day: 0,
            TDay: '0',
            Hour: 0,
            THour: '0',
            hour: 0,
            Thour: '0',
            Minute: 0,
            TMinute: '0',
            Second: 0,
            TSecond: '0',
            Millisecond: 0
        };
        time.Year = date.getFullYear();
        time.TYear = String(time.Year).substr(2);
        time.Month = date.getMonth() + 1;
        time.TMonth = time.Month < 10 ? "0" + time.Month : String(time.Month);
        time.Day = date.getDate();
        time.TDay = time.Day < 10 ? "0" + time.Day : String(time.Day);
        time.Hour = date.getHours();
        time.THour = time.Hour < 10 ? "0" + time.Hour : String(time.Hour);
        time.hour = time.Hour < 13 ? time.Hour : time.Hour - 12;
        time.Thour = time.hour < 10 ? "0" + time.hour : String(time.hour);
        time.Minute = date.getMinutes();
        time.TMinute = time.Minute < 10 ? "0" + time.Minute : String(time.Minute);
        time.Second = date.getSeconds();
        time.TSecond = time.Second < 10 ? "0" + time.Second : String(time.Second);
        time.Millisecond = date.getMilliseconds();
        return sFormat.replace(/yyyy/ig, String(time.Year))
            .replace(/yyy/ig, String(time.Year))
            .replace(/yy/ig, time.TYear)
            .replace(/y/ig, time.TYear)
            .replace(/MM/g, time.TMonth)
            .replace(/M/g, String(time.Month))
            .replace(/dd/ig, time.TDay)
            .replace(/d/ig, String(time.Day))
            .replace(/HH/g, time.THour)
            .replace(/H/g, String(time.Hour))
            .replace(/hh/g, time.Thour)
            .replace(/h/g, String(time.hour))
            .replace(/mm/g, time.TMinute)
            .replace(/m/g, String(time.Minute))
            .replace(/ss/ig, time.TSecond)
            .replace(/s/ig, String(time.Second))
            .replace(/fff/ig, String(time.Millisecond));
    };
    return Utils;
}());
Utils = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"]()
], Utils);

//# sourceMappingURL=Utils.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JPush; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NativeService__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JPush = (function () {
    function JPush(nativeService) {
        this.nativeService = nativeService;
    }
    JPush.prototype.initJpush = function () {
        if (!this.nativeService.isMobile()) {
            return;
        }
        window['plugins'].jPushPlugin.init();
        if (this.nativeService.isIos()) {
            window['plugins'].jPushPlugin.setDebugModeFromIos();
            window['plugins'].jPushPlugin.setApplicationIconBadgeNumber(0);
        }
        else {
            window['plugins'].jPushPlugin.setDebugMode(true);
            window['plugins'].jPushPlugin.setStatisticsOpen(true);
        }
        this.jPushAddEventListener();
    };
    JPush.prototype.jPushAddEventListener = function () {
        var _this = this;
        //判断系统设置中是否允许当前应用推送
        window['plugins'].jPushPlugin.getUserNotificationSettings(function (result) {
            console.log("++--++" + result);
            if (result == 0) {
                console.log('系统设置中已关闭应用推送');
            }
            else if (result > 0) {
                console.log('系统设置中打开了应用推送');
            }
        });
        //点击通知进入应用程序时会触发的事件
        document.addEventListener("jpush.openNotification", function (event) {
            var content = _this.nativeService.isIos() ? event['aps'].alert : event['alert'];
            console.log("jpush.openNotification" + content);
        }, false);
        //收到通知时会触发该事件
        document.addEventListener("jpush.receiveNotification", function (event) {
            var content = _this.nativeService.isIos() ? event['aps'].alert : event['alert'];
            console.log("jpush.receiveNotification" + content);
        }, false);
        //收到自定义消息时触发这个事件
        document.addEventListener("jpush.receiveMessage", function (event) {
            var message = _this.nativeService.isIos() ? event['content'] : event['message'];
            console.log("jpush.receiveMessage" + message);
        }, false);
        //设置标签/别名回调函数
        document.addEventListener("jpush.setTagsWithAlias", function (event) {
            console.log("onTagsWithAlias");
            var result = "result code:" + event['resultCode'] + " ";
            result += "tags:" + event['tags'] + " ";
            result += "alias:" + event['alias'] + " ";
            console.log(result);
        }, false);
        // this.setAlias(124);
    };
    //设置标签
    JPush.prototype.setTags = function () {
        if (!this.nativeService.isMobile()) {
            return;
        }
        var tags = this.nativeService.isAndroid() ? ['android'] : ['ios'];
        console.log('设置setTags:' + tags);
        window['plugins'].jPushPlugin.setTags(tags);
    };
    //设置别名,一个用户只有一个别名
    JPush.prototype.setAlias = function (userId) {
        if (!this.nativeService.isMobile()) {
            return;
        }
        console.log('设置setAlias:' + userId);
        //ios设置setAlias有bug,值必须为string类型,不能是number类型
        window['plugins'].jPushPlugin.setAlias('' + userId);
    };
    return JPush;
}());
JPush = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"](),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__NativeService__["a" /* NativeService */]])
], JPush);

//# sourceMappingURL=JPush.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/app/FirService.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FirService = (function () {
    function FirService(http, loading) {
        this.http = http;
        this.loading = loading;
    }
    FirService.prototype.getAppPath = function (url, type) {
        if (type === void 0) { type = 0; }
        return 'http://api.fir.im/apps/latest/5961a838548b7a7a16000060?api_token=fd574d0078c5b11777cb3d8a7d4c1d5b';
    };
    //type 不填是OA,填1是linkloving_app_apu
    FirService.prototype.get = function (url, paramObj, type) {
        var _this = this;
        if (type === void 0) { type = 0; }
        // let loading = this.loadingCreate(true);  
        console.log(this.getAppPath(url, type));
        return this.http.get(this.getAppPath(url, type))
            .map(function (data) { return _this.dealRe(data, null); })
            .toPromise()
            .then(function (res) { return _this.handleSuccess(res.json()); })
            .catch(function (error) { return _this.handleError(error); });
    };
    FirService.prototype.post = function (url, paramObj, type) {
        var _this = this;
        if (type === void 0) { type = 0; }
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        headers.append("Accept", "application/json");
        return this.http.post(this.getAppPath(url, type), this.toBodyString(paramObj), new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers }))
            .toPromise()
            .then(function (res) { return _this.handleSuccess(res.json()); })
            .catch(function (error) { return _this.handleError(error); });
    };
    //加载  
    FirService.prototype.loadingCreate = function (isLoading, pageIndex) {
        var loading = this.loading.create({
            content: '加载中'
        });
        pageIndex = typeof (pageIndex) == 'undefined' ? 1 : pageIndex;
        isLoading = typeof (isLoading) == 'undefined' ? true : isLoading;
        if (isLoading == true && pageIndex == 1) {
            loading.present();
        }
        return loading;
    };
    //返回处理  
    FirService.prototype.dealRe = function (re, loading) {
        // loading.dismiss();  
        return re;
    };
    FirService.prototype.postBody = function (url, paramObj, type) {
        var _this = this;
        if (type === void 0) { type = 0; }
        var loading = this.loadingCreate(true);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.getAppPath(url, type), paramObj, new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers }))
            .map(function (data) { return _this.dealRe(data, loading); })
            .toPromise()
            .then(function (res) {
            return _this.handleSuccess(res.json());
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    FirService.prototype.handleSuccess = function (result) {
        return result;
    };
    FirService.prototype.handleError = function (error) {
        var msg = '请求失败';
        if (error.status == 0) {
            msg = '请求地址错误';
        }
        if (error.status == 400) {
            msg = '请求无效';
            console.log('请检查参数类型是否匹配');
        }
        if (error.status == 404) {
            msg = '请求资源不存在';
            console.error(msg + '，请检查路径是否正确');
        }
        console.log(error);
        alert(msg); //这里使用ToastController
        return { success: false, msg: msg };
    };
    /**
     * @param obj　参数对象
     * @return {string}　参数字符串
     * @example
     *  声明: var obj= {'name':'小军',age:23};
     *  调用: toQueryString(obj);
     *  返回: "?name=%E5%B0%8F%E5%86%9B&age=23"
     */
    FirService.prototype.toQueryString = function (obj) {
        var ret = [];
        for (var key in obj) {
            key = encodeURIComponent(key);
            var values = obj[key];
            if (values && values.constructor == Array) {
                var queryValues = [];
                for (var i = 0, len = values.length, value = void 0; i < len; i++) {
                    value = values[i];
                    queryValues.push(this.toQueryPair(key, value));
                }
                ret = ret.concat(queryValues);
            }
            else {
                ret.push(this.toQueryPair(key, values));
            }
        }
        return '?' + ret.join('&');
    };
    /**
     *
     * @param obj
     * @return {string}
     *  声明: var obj= {'name':'小军',age:23};
     *  调用: toQueryString(obj);
     *  返回: "name=%E5%B0%8F%E5%86%9B&age=23"
     */
    FirService.prototype.toBodyString = function (obj) {
        var ret = [];
        for (var key in obj) {
            key = encodeURIComponent(key);
            var values = obj[key];
            if (values && values.constructor == Array) {
                var queryValues = [];
                for (var i = 0, len = values.length, value = void 0; i < len; i++) {
                    value = values[i];
                    queryValues.push(this.toQueryPair(key, value));
                }
                ret = ret.concat(queryValues);
            }
            else {
                ret.push(this.toQueryPair(key, values));
            }
        }
        return ret.join('&');
    };
    FirService.prototype.toQueryPair = function (key, value) {
        if (typeof value == 'undefined') {
            return key;
        }
        return key + '=' + encodeURIComponent(value === null ? '' : String(value));
    };
    return FirService;
}());
FirService = __decorate([
    __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"](),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["r" /* LoadingController */]])
], FirService);

//# sourceMappingURL=FirService.js.map
// CONCATENATED MODULE: ./src/app/app.component.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_NativeService__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_version__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_JPush__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__ = __webpack_require__(71);
var app_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var app_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, appVersion, nativeService, firService, alertCtrl, inAppBrowser, storage, jpush) {
        var _this = this;
        this.platform = platform;
        this.appVersion = appVersion;
        this.nativeService = nativeService;
        this.firService = firService;
        this.alertCtrl = alertCtrl;
        this.inAppBrowser = inAppBrowser;
        this.storage = storage;
        this.jpush = jpush;
        this.rootPage = 'LoginPage';
        platform.ready().then(function () {
            _this.jpush.initJpush();
            storage.get('user')
                .then(function (res) {
                _this.user_env = res.result.res_data;
                _this.jpush.setAlias(res.result.res_data.user_id);
            });
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.overlaysWebView(false);
            statusBar.styleDefault();
            // statusBar.backgroundColorByHexString("#2597ec");
            // statusBar.styleLightContent();
            statusBar.backgroundColorByHexString('#f8f8f8');
            splashScreen.hide();
            if (_this.platform.is("android")) {
                _this.getVersionNumber();
            }
            else if (_this.platform.is('ios')) {
                _this.getiOSVersionNumber();
            }
        });
    }
    MyApp.prototype.getVersionNumber = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.appVersion.getVersionCode().then(function (value) {
                resolve(value);
                _this.version = value;
                console.log(_this.version);
                _this.nativeService.detectionUpgrade(_this.version);
            }).catch(function (err) {
            });
        });
    };
    MyApp.prototype.getiOSVersionNumber = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.appVersion.getVersionNumber().then(function (value) {
                _this.firService.get('fir_ios', 1).then(function (res) {
                    console.log(res);
                    if (res.version > value) {
                        _this.alertCtrl.create({
                            title: '发现新版本,是否立即升级？',
                            subTitle: "更新内容：" + res.changelog,
                            buttons: [{ text: '稍后再说' },
                                {
                                    text: '立即升级',
                                    handler: function () {
                                        _this.openUrlByBrowser('http://fir.im/MyOa');
                                    }
                                }
                            ]
                        }).present();
                    }
                });
            }).catch(function (err) {
            });
        });
    };
    MyApp.prototype.openUrlByBrowser = function (url) {
        this.inAppBrowser.create(url, '_system');
    };
    return MyApp;
}());
MyApp = app_component___decorate([
    __WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"]({template:/*ion-inline-start:"/Users/bin/Downloads/MyOA 2/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/bin/Downloads/MyOA 2/src/app/app.html"*/,
        providers: [FirService, __WEBPACK_IMPORTED_MODULE_7__providers_JPush__["a" /* JPush */]]
    }),
    app_component___metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["x" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_version__["a" /* AppVersion */],
        __WEBPACK_IMPORTED_MODULE_1__providers_NativeService__["a" /* NativeService */], FirService, __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__providers_JPush__["a" /* JPush */]])
], MyApp);

//# sourceMappingURL=app.component.js.map
// CONCATENATED MODULE: ./src/app/app.module.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_tree__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_tree__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_GlobalData__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_minimize__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_transfer__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_toast__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_app_version__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_web_intent__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_HttpService__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_Utils__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_storage__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_date_picker__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ionic_img_viewer__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_qrcode__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_screenshot__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_nfc__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_photo_library__ = __webpack_require__(250);
var app_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























// import { AutocompleteServiceProvider } from '../providers/autocomplete-service/autocomplete-service';
// import { BLE } from '@ionic-native/ble';

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = app_module___decorate([
    __WEBPACK_IMPORTED_MODULE_13__angular_core__["NgModule"]({
        declarations: [
            MyApp,
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_15_ionic_angular__["o" /* IonicModule */].forRoot(MyApp, {
                backButtonText: '',
            }, {
                links: [
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/production-search/production-detail/warehouse-move/warehouse-move.module#WarehouseMovePageModule', name: 'WarehouseMovePage', segment: 'warehouse-move', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/production-search/production-detail/bom/bom.module#BomPageModule', name: 'BomPage', segment: 'bom', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contact-person/contact-person.module#ContactPersonPageModule', name: 'ContactPersonPage', segment: 'contact-person', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/production-search/production-detail/production-detail.module#ProductionDetailPageModule', name: 'ProductionDetailPage', segment: 'production-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/production-search/production-search.module#ProductionSearchPageModule', name: 'ProductionSearchPage', segment: 'production-search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/salesOrder/sales-detail/create-invoice/create-invoice.module#CreateInvoicePageModule', name: 'CreateInvoicePage', segment: 'create-invoice', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/salesOrder/create-quotes/customer-list/customer-list.module#CustomerListPageModule', name: 'CustomerListPage', segment: 'customer-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/salesOrder/create-quotes/improve-quotation/sales-info/sales-info.module#SalesInfoPageModule', name: 'SalesInfoPage', segment: 'sales-info', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/salesOrder/create-quotes/improve-quotation/delivery-info/delivery-info.module#DeliveryInfoPageModule', name: 'DeliveryInfoPage', segment: 'delivery-info', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/salesOrder/create-quotes/improve-quotation/billing-info/billing-info.module#BillingInfoPageModule', name: 'BillingInfoPage', segment: 'billing-info', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/salesOrder/create-quotes/production-list/production-list.module#ProductionListPageModule', name: 'ProductionListPage', segment: 'production-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/salesOrder/create-quotes/add-production/add-production.module#AddProductionPageModule', name: 'AddProductionPage', segment: 'add-production', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/salesOrder/create-quotes/improve-quotation/improve-quotation.module#ImproveQuotationPageModule', name: 'ImproveQuotationPage', segment: 'improve-quotation', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/salesOrder/create-quotes/create-quotes.module#CreateQuotesPageModule', name: 'CreateQuotesPage', segment: 'create-quotes', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/salesOrder/sales-detail/delivery/delivery.module#DeliveryPageModule', name: 'DeliveryPage', segment: 'delivery', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/salesOrder/salesOrder.module#SalesOrderPageModule', name: 'SalesOrderPage', segment: 'salesOrder', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/incoming/incoming.module#IncomingPageModule', name: 'IncomingPage', segment: 'incoming', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/inspection-detail/inspection-detail.module#InspectionDetailPageModule', name: 'InspectionDetailPage', segment: 'inspection-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/incoming-detail/incoming-detail.module#IncomingDetailPageModule', name: 'IncomingDetailPage', segment: 'incoming-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/delivery-notes-detail/delivery-notes-detail.module#DeliveryNotesDetailPageModule', name: 'DeliveryNotesDetailPage', segment: 'delivery-notes-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/delivery-notes/delivery-notes.module#DeliveryNotesPageModule', name: 'DeliveryNotesPage', segment: 'delivery-notes', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/po-contact/po-contact.module#PoContactPageModule', name: 'PoContactPage', segment: 'po-contact', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/salesOrder/sales-detail/sales-detail.module#SalesDetailPageModule', name: 'SalesDetailPage', segment: 'sales-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/work-bench.module#WorkBenchPageModule', name: 'WorkBenchPage', segment: 'work-bench', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/me/phone-number/phone-number.module#PhoneNumberPageModule', name: 'PhoneNumberPage', segment: 'phone-number', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/me/edit-information/edit-information.module#EditInformationPageModule', name: 'EditInformationPage', segment: 'edit-information', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/me/me.module#MePageModule', name: 'MePage', segment: 'me', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/msg/msg-detail/msg-detail.module#MsgDetailPageModule', name: 'MsgDetailPage', segment: 'msg-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/msg/msg.module#MsgPageModule', name: 'MsgPage', segment: 'msg', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/supplier-list/supplier-list.module#SupplierListPageModule', name: 'SupplierListPage', segment: 'supplier-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-employee/add-employee.module#AddEmployeePageModule', name: 'AddEmployeePage', segment: 'add-employee', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-employee/create-account/create-account.module#CreateAccountPageModule', name: 'CreateAccountPage', segment: 'create-account', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-employee/employee-detail/employee-detail.module#EmployeeDetailPageModule', name: 'EmployeeDetailPage', segment: 'employee-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-employee/prompt/prompt.module#PromptPageModule', name: 'PromptPage', segment: 'prompt', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-employee/prompt/gongpai/gongpai.module#GongpaiPageModule', name: 'GongpaiPage', segment: 'gongpai', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-employee/prompt/gongpai/popmodal/popmodal.module#PopmodalPageModule', name: 'PopmodalPage', segment: 'popmodal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-employee/q-rcode/q-rcode.module#QRcodePageModule', name: 'QRcodePage', segment: 'q-rcode', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contact-person/employee-list/employee-list.module#EmployeeListPageModule', name: 'EmployeeListPage', segment: 'employee-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/customer/add-customer/add-customer.module#AddCustomerPageModule', name: 'AddCustomerPage', segment: 'add-customer', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/contact-list/contact-list.module#ContactListPageModule', name: 'ContactListPage', segment: 'contact-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/customer/customer-detail/customer-detail.module#CustomerDetailPageModule', name: 'CustomerDetailPage', segment: 'customer-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/customer/xiansuo-detail/xiansuo-detail.module#XiansuoDetailPageModule', name: 'XiansuoDetailPage', segment: 'xiansuo-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/customer/customer.module#CustomerPageModule', name: 'CustomerPage', segment: 'customer', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/customer/choose/choose.module#ChoosePageModule', name: 'ChoosePage', segment: 'choose', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/customer/productlist/productlist.module#ProductlistPageModule', name: 'ProductlistPage', segment: 'productlist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/customer/cam-card/cam-card.module#CamCardPageModule', name: 'CamCardPage', segment: 'cam-card', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/customer/edit-card/edit-card.module#EditCardPageModule', name: 'EditCardPage', segment: 'edit-card', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/customer/biao-qian/biao-qian.module#BiaoQianPageModule', name: 'BiaoQianPage', segment: 'biao-qian', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/customer/create-info/create-info.module#CreateInfoPageModule', name: 'CreateInfoPage', segment: 'create-info', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login-popover/login-popover.module#LoginPopoverPageModule', name: 'LoginPopoverPage', segment: 'login-popover', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/rangtest/rangtest.module#RangtestPageModule', name: 'RangtestPage', segment: 'rangtest', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/create-apply/create-apply.module#CreateApplyPageModule', name: 'CreateApplyPage', segment: 'create-apply', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/apply/apply.module#ApplyPageModule', name: 'ApplyPage', segment: 'apply', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/apply/apply-detail/apply-detail.module#ApplyDetailPageModule', name: 'ApplyDetailPage', segment: 'apply-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/apply/baoxiao-apply/baoxiao-apply.module#BaoxiaoApplyPageModule', name: 'BaoxiaoApplyPage', segment: 'baoxiao-apply', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/apply/baoxiao-apply/add-apply-detail/add-apply-detail.module#AddApplyDetailPageModule', name: 'AddApplyDetailPage', segment: 'add-apply-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/apply/baoxiao-apply/shengou-item/shengou-item.module#ShengouItemPageModule', name: 'ShengouItemPage', segment: 'shengou-item', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/apply/leave-apply/leave-apply.module#LeaveApplyPageModule', name: 'LeaveApplyPage', segment: 'leave-apply', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/apply/leave-detail/leave-detail.module#LeaveDetailPageModule', name: 'LeaveDetailPage', segment: 'leave-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/baobiao/baobiao.module#BaobiaoPageModule', name: 'BaobiaoPage', segment: 'baobiao', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/baobiao/baobiao-detail/baobiao-detail.module#BaobiaoDetailPageModule', name: 'BaobiaoDetailPage', segment: 'baobiao-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/baobiao/hk-baobiao/hk-baobiao.module#HkBaobiaoPageModule', name: 'HkBaobiaoPage', segment: 'hk-baobiao', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/cardinfo/cardinfo.module#CardinfoPageModule', name: 'CardinfoPage', segment: 'cardinfo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/change-kucun/change-kucun.module#ChangeKucunPageModule', name: 'ChangeKucunPage', segment: 'change-kucun', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/change-kucun/change-kucun-detail/change-kucun-detail.module#ChangeKucunDetailPageModule', name: 'ChangeKucunDetailPage', segment: 'change-kucun-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/delivery/delivery.module#DeliveryPageModule', name: 'DeliveryPage', segment: 'delivery', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/delivery-extra/delivery-extra.module#DeliveryExtraPageModule', name: 'DeliveryExtraPage', segment: 'delivery-extra', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/delivery-initial-request/delivery-initial-request.module#DeliveryInitialRequestPageModule', name: 'DeliveryInitialRequestPage', segment: 'delivery-initial-request', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/gongdan/gongdan.module#GongdanPageModule', name: 'GongdanPage', segment: 'gongdan', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/gongdan/at-me-list/at-me-list.module#AtMeListPageModule', name: 'AtMeListPage', segment: 'at-me-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/gongdan/change-biaoqian/change-biaoqian.module#ChangeBiaoqianPageModule', name: 'ChangeBiaoqianPage', segment: 'change-biaoqian', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/gongdan/create-gongdan/create-gongdan.module#CreateGongdanPageModule', name: 'CreateGongdanPage', segment: 'create-gongdan', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/gongdan/create-gongdan/assign-people/assign-people.module#AssignPeoplePageModule', name: 'AssignPeoplePage', segment: 'assign-people', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/gongdan/create-gongdan/biaoqian/biaoqian.module#BiaoqianPageModule', name: 'BiaoqianPage', segment: 'biaoqian', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/gongdan/create-gongdan/choose-department/choose-department.module#ChooseDepartmentPageModule', name: 'ChooseDepartmentPage', segment: 'choose-department', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/gongdan/create-gongdan/delete-picture/delete-picture.module#DeletePicturePageModule', name: 'DeletePicturePage', segment: 'delete-picture', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/gongdan/create-gongdan/who-can-see/who-can-see.module#WhoCanSeePageModule', name: 'WhoCanSeePage', segment: 'who-can-see', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/gongdan/gongdan-biaoqian/gongdan-biaoqian.module#GongdanBiaoqianPageModule', name: 'GongdanBiaoqianPage', segment: 'gongdan-biaoqian', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/gongdan/gongdan-chat/gongdan-chat.module#GongdanChatPageModule', name: 'GongdanChatPage', segment: 'gongdan-chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/gongdan/gongdan-choose-people/gongdan-choose-people.module#GongdanChoosePeoplePageModule', name: 'GongdanChoosePeoplePage', segment: 'gongdan-choose-people', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/gongdan/gongdan-detail/gongdan-detail.module#GongdanDetailPageModule', name: 'GongdanDetailPage', segment: 'gongdan-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/gongdan/gongdan-new-chat/gongdan-new-chat.module#GongdanNewChatPageModule', name: 'GongdanNewChatPage', segment: 'gongdan-new-chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/gongdan/gongdan-search/gongdan-search.module#GongdanSearchPageModule', name: 'GongdanSearchPage', segment: 'gongdan-search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/gongdan/gongdan-zhipai/gongdan-zhipai.module#GongdanZhipaiPageModule', name: 'GongdanZhipaiPage', segment: 'gongdan-zhipai', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/gongdan/my-gongdan-list/my-gongdan-list.module#MyGongdanListPageModule', name: 'MyGongdanListPage', segment: 'my-gongdan-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/gongdan/reback-gongdan/reback-gongdan.module#RebackGongdanPageModule', name: 'RebackGongdanPage', segment: 'reback-gongdan', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/journal-sheet/journal-sheet.module#JournalSheetPageModule', name: 'JournalSheetPage', segment: 'journal-sheet', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/journal-sheet/new-delete/new-delete.module#NewDeletePageModule', name: 'NewDeletePage', segment: 'new-delete', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/journal-sheet/visit-biaoqian/visit-biaoqian.module#VisitBiaoqianPageModule', name: 'VisitBiaoqianPage', segment: 'visit-biaoqian', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/journal-sheet/visit-detail/visit-detail.module#VisitDetailPageModule', name: 'VisitDetailPage', segment: 'visit-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/journal-sheet/visit-list/visit-list.module#VisitListPageModule', name: 'VisitListPage', segment: 'visit-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/journal-sheet/write-journal/write-journal.module#WriteJournalPageModule', name: 'WriteJournalPage', segment: 'write-journal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/kaoqin/kaoqin.module#KaoqinPageModule', name: 'KaoqinPage', segment: 'kaoqin', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/kaoqin/choose-location/choose-location.module#ChooseLocationPageModule', name: 'ChooseLocationPage', segment: 'choose-location', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/kaoqin/delete-kaoqin-photo/delete-kaoqin-photo.module#DeleteKaoqinPhotoPageModule', name: 'DeleteKaoqinPhotoPage', segment: 'delete-kaoqin-photo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/kaoqin/kaoqin-people/kaoqin-people.module#KaoqinPeoplePageModule', name: 'KaoqinPeoplePage', segment: 'kaoqin-people', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/kaoqin/kaoqin-photo/kaoqin-photo.module#KaoqinPhotoPageModule', name: 'KaoqinPhotoPage', segment: 'kaoqin-photo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/material-request/material-request.module#MaterialRequestPageModule', name: 'MaterialRequestPage', segment: 'material-request', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/material-request/edit-material-request/edit-material-request.module#EditMaterialRequestPageModule', name: 'EditMaterialRequestPage', segment: 'edit-material-request', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/material-request/material-request-detail/material-request-detail.module#MaterialRequestDetailPageModule', name: 'MaterialRequestDetailPage', segment: 'material-request-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/material-request/shenhe-material-request/shenhe-material-request.module#ShenheMaterialRequestPageModule', name: 'ShenheMaterialRequestPage', segment: 'shenhe-material-request', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/new-production/new-production.module#NewProductionPageModule', name: 'NewProductionPage', segment: 'new-production', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/new-production/more-level-list/more-level-list.module#MoreLevelListPageModule', name: 'MoreLevelListPage', segment: 'more-level-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/new-production/new-product-detail/new-product-detail.module#NewProductDetailPageModule', name: 'NewProductDetailPage', segment: 'new-product-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/new-production/new-product-list/new-product-list.module#NewProductListPageModule', name: 'NewProductListPage', segment: 'new-product-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/new-production/new-stock-move/new-stock-move.module#NewStockMovePageModule', name: 'NewStockMovePage', segment: 'new-stock-move', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/order/order.module#OrderPageModule', name: 'OrderPage', segment: 'order', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/order/approve-order/approve-order.module#ApproveOrderPageModule', name: 'ApproveOrderPage', segment: 'approve-order', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/order-detail/order-detail.module#OrderDetailPageModule', name: 'OrderDetailPage', segment: 'order-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/order-detail/product-detail/product-detail.module#ProductDetailPageModule', name: 'ProductDetailPage', segment: 'product-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/pay-request/pay-request.module#PayRequestPageModule', name: 'PayRequestPage', segment: 'pay-request', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/pay-request/bill-detail/bill-detail.module#BillDetailPageModule', name: 'BillDetailPage', segment: 'bill-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/pay-request/pay-request-detail/pay-request-detail.module#PayRequestDetailPageModule', name: 'PayRequestDetailPage', segment: 'pay-request-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/popover-order/popover-order.module#PopoverOrderPageModule', name: 'PopoverOrderPage', segment: 'popover-order', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/reimbursement/reimbursement.module#ReimbursementPageModule', name: 'ReimbursementPage', segment: 'reimbursement', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/reimbursement/my-apply/my-apply.module#MyApplyPageModule', name: 'MyApplyPage', segment: 'my-apply', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/reimbursement/reimbursement-detail/reimbursement-detail.module#ReimbursementDetailPageModule', name: 'ReimbursementDetailPage', segment: 'reimbursement-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/reimbursement/reimbursement-detail/edit-reimbursement/edit-reimbursement.module#EditReimbursementPageModule', name: 'EditReimbursementPage', segment: 'edit-reimbursement', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/reimbursement/wait-me-apply/wait-me-apply.module#WaitMeApplyPageModule', name: 'WaitMeApplyPage', segment: 'wait-me-apply', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/return-order-detail/return-order-detail.module#ReturnOrderDetailPageModule', name: 'ReturnOrderDetailPage', segment: 'return-order-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/return-order-detail/return-product-detail/return-product-detail.module#ReturnProductDetailPageModule', name: 'ReturnProductDetailPage', segment: 'return-product-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/return-popover/return-popover.module#ReturnPopoverPageModule', name: 'ReturnPopoverPage', segment: 'return-popover', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/salesOrder/jiaohuo-list/jiaohuo-list.module#JiaohuoListPageModule', name: 'JiaohuoListPage', segment: 'jiaohuo-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/salesOrder/jiaohuo-list/jiaohuo-detail/jiaohuo-detail.module#JiaohuoDetailPageModule', name: 'JiaohuoDetailPage', segment: 'jiaohuo-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/salesOrder/jiaohuo-list/wuliu-detail/wuliu-detail.module#WuliuDetailPageModule', name: 'WuliuDetailPage', segment: 'wuliu-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/salesOrder/sales-detail/baojia-detail/baojia-detail.module#BaojiaDetailPageModule', name: 'BaojiaDetailPage', segment: 'baojia-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/salesOrder/sales-detail/popover/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/salesOrder/sales-detail/purchase-back-order/purchase-back-order.module#PurchaseBackOrderPageModule', name: 'PurchaseBackOrderPage', segment: 'purchase-back-order', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/share-knowledge/share-knowledge.module#ShareKnowledgePageModule', name: 'ShareKnowledgePage', segment: 'share-knowledge', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/share-knowledge/shareknowledgedetail/shareknowledgedetail.module#ShareknowledgedetailPageModule', name: 'ShareknowledgedetailPage', segment: 'shareknowledgedetail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/share-knowledge/shareknowlelist/shareknowlelist.module#ShareknowlelistPageModule', name: 'ShareknowlelistPage', segment: 'shareknowlelist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/shengoupage/shengoupage.module#ShengoupagePageModule', name: 'ShengoupagePage', segment: 'shengoupage', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/shengoupage/audited-purchase/audited-purchase.module#AuditedPurchasePageModule', name: 'AuditedPurchasePage', segment: 'audited-purchase', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/shengoupage/create-shengou/create-shengou.module#CreateShengouPageModule', name: 'CreateShengouPage', segment: 'create-shengou', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/shengoupage/create-shengou/add-shengou-detail/add-shengou-detail.module#AddShengouDetailPageModule', name: 'AddShengouDetailPage', segment: 'add-shengou-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/shengoupage/edit-add-shengou/edit-add-shengou.module#EditAddShengouPageModule', name: 'EditAddShengouPage', segment: 'edit-add-shengou', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/shengoupage/edit-new-shengou/edit-new-shengou.module#EditNewShengouPageModule', name: 'EditNewShengouPage', segment: 'edit-new-shengou', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/shengoupage/edit-shengou/edit-shengou.module#EditShengouPageModule', name: 'EditShengouPage', segment: 'edit-shengou', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/shengoupage/myshengoudetail/myshengoudetail.module#MyshengoudetailPageModule', name: 'MyshengoudetailPage', segment: 'myshengoudetail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/supplier-detail/supplier-detail.module#SupplierDetailPageModule', name: 'SupplierDetailPage', segment: 'supplier-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/wait-approval/wait-approval.module#WaitApprovalPageModule', name: 'WaitApprovalPage', segment: 'wait-approval', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/zanzhi/zanzhi.module#ZanzhiPageModule', name: 'ZanzhiPage', segment: 'zanzhi', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/zanzhi/zanzhi-apply/zanzhi-apply.module#ZanzhiApplyPageModule', name: 'ZanzhiApplyPage', segment: 'zanzhi-apply', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work-bench/zanzhi/zanzhi-detail/zanzhi-detail.module#ZanzhiDetailPageModule', name: 'ZanzhiDetailPage', segment: 'zanzhi-detail', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_22__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0_ng2_tree__["TreeModule"],
            __WEBPACK_IMPORTED_MODULE_25_ionic_img_viewer__["a" /* IonicImageViewerModule */],
            __WEBPACK_IMPORTED_MODULE_26_angular2_qrcode__["a" /* QRCodeModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_15_ionic_angular__["m" /* IonicApp */]],
        entryComponents: [
            MyApp,
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_13__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_15_ionic_angular__["n" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_20__providers_HttpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_web_intent__["a" /* WebIntent */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_minimize__["a" /* AppMinimize */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_GlobalData__["a" /* GlobalData */],
            __WEBPACK_IMPORTED_MODULE_21__providers_Utils__["a" /* Utils */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_screenshot__["a" /* Screenshot */],
            __WEBPACK_IMPORTED_MODULE_28__ionic_native_nfc__["a" /* NFC */], __WEBPACK_IMPORTED_MODULE_28__ionic_native_nfc__["b" /* Ndef */],
            __WEBPACK_IMPORTED_MODULE_29__ionic_native_photo_library__["a" /* PhotoLibrary */]
            // BLE,
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map
// CONCATENATED MODULE: ./src/app/main.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(253);


// import { enableProdMode } from '@angular/core';
// enableProdMode();
__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */]().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HttpService__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_version__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_toast__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_transfer__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_image_picker__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_app_minimize__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Constants__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__GlobalData__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_rxjs__);
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
 * Created by yanxiaojun617@163.com on 12-27.
 */
















var NativeService = (function () {
    function NativeService(platform, toastCtrl, alertCtrl, statusBar, splashScreen, appVersion, camera, toast, transfer, file, inAppBrowser, imagePicker, network, appMinimize, loadingCtrl, globalData, httpService) {
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.appVersion = appVersion;
        this.camera = camera;
        this.toast = toast;
        this.transfer = transfer;
        this.file = file;
        this.inAppBrowser = inAppBrowser;
        this.imagePicker = imagePicker;
        this.network = network;
        this.appMinimize = appMinimize;
        this.loadingCtrl = loadingCtrl;
        this.globalData = globalData;
        this.httpService = httpService;
        this.loadingIsOpen = false;
    }
    NativeService.prototype.log = function (info) {
        console.log('%cNativeService/' + info, 'color:#C41A16');
    };
    /**
     * 使用默认状态栏
     */
    NativeService.prototype.statusBarStyleDefault = function () {
        this.statusBar.styleDefault();
    };
    /**
     * 隐藏启动页面
     */
    NativeService.prototype.splashScreenHide = function () {
        this.splashScreen.hide();
    };
    /**
     * 获取网络类型 如`unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
     */
    NativeService.prototype.getNetworkType = function () {
        if (!this.isMobile()) {
            return 'wifi';
        }
        return this.network.type;
    };
    /**
     * 判断是否有网络
     */
    NativeService.prototype.isConnecting = function () {
        return this.getNetworkType() != 'none';
    };
    /**
     * 调用最小化app插件
     */
    NativeService.prototype.minimize = function () {
        this.appMinimize.minimize();
    };
    /**
     * 通过浏览器打开url
     */
    NativeService.prototype.openUrlByBrowser = function (url) {
        this.inAppBrowser.create(url, '_system');
    };
    NativeService.prototype.checkNeedToUpdate = function (version) {
        var _this = this;
        return this.httpService.getWithUrlNoLoading(__WEBPACK_IMPORTED_MODULE_14__Constants__["d" /* AndroidAppVersion */]).then(function (res) {
            console.log(res);
            console.log(res.changelog);
            var changelog = res.changelog;
            if (res.version) {
                if (res.version > version) {
                    _this.alertCtrl.create({
                        title: '发现新版本,是否立即升级?',
                        subTitle: changelog,
                        buttons: [{ text: '稍后再说' },
                            {
                                text: '立即升级',
                                handler: function () {
                                    _this.downloadApp();
                                }
                            }
                        ]
                    }).present();
                }
            }
        });
    };
    /**
     * 检查app是否需要升级
     */
    NativeService.prototype.detectionUpgrade = function (version) {
        //这里连接后台判断是否需要升级,不需要升级就return
        var needToUpdate = this.checkNeedToUpdate(version);
    };
    /**
     * 下载安装app
     */
    NativeService.prototype.downloadApp = function () {
        if (this.isAndroid()) {
            // let alert = this.alertCtrl.create({
            //   title: '下载进度：0%',
            //   enableBackdropDismiss: false,
            //   // buttons: ['后台下载']
            // });
            // alert.present();
            // const fileTransfer: TransferObject = this.transfer.create();
            // const apk = this.file.externalRootDirectory + 'android.apk'; //apk保存的目录
            // fileTransfer.download(APK_DOWNLOAD, apk).then(() => {
            //   window['install'].install(apk.replace('file://', ''));
            // });
            // fileTransfer.onProgress((event: ProgressEvent) => {
            //   let num = Math.floor(event.loaded / event.total * 100);
            //   if (num === 100) {
            //     alert.dismiss();
            //   } else {
            //     let title = document.getElementsByClassName('alert-title')[0];
            //     title && (title.innerHTML = '下载进度：' + num + '%');
            //   }
            // });
            this.openUrlByBrowser(__WEBPACK_IMPORTED_MODULE_14__Constants__["a" /* APK_DOWNLOAD */]);
        }
        if (this.isIos()) {
            this.openUrlByBrowser(__WEBPACK_IMPORTED_MODULE_14__Constants__["c" /* APP_DOWNLOAD */]);
        }
    };
    /**
     * 是否真机环境
     */
    NativeService.prototype.isMobile = function () {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    };
    /**
     * 是否android真机环境
     */
    NativeService.prototype.isAndroid = function () {
        return this.isMobile() && this.platform.is('android');
    };
    /**
     * 是否ios真机环境
     */
    NativeService.prototype.isIos = function () {
        return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
    };
    NativeService.prototype.alert = function (title) {
        this.alertCtrl.create({
            title: title,
            buttons: [{ text: '确定' }]
        }).present();
    };
    /**
     * 统一调用此方法显示提示信息
     * @param message 信息内容
     * @param duration 显示时长
     */
    NativeService.prototype.showToast = function (message, duration) {
        if (message === void 0) { message = '操作完成'; }
        if (duration === void 0) { duration = 2000; }
        if (this.isMobile()) {
            this.toast.show(message, String(duration), 'center').subscribe();
        }
        else {
            this.toastCtrl.create({
                message: message,
                duration: duration,
                position: 'middle',
                showCloseButton: false
            }).present();
        }
    };
    ;
    /**
     * 统一调用此方法显示loading
     * @param content 显示的内容
     */
    NativeService.prototype.showLoading = function (content) {
        var _this = this;
        if (content === void 0) { content = ''; }
        if (!this.globalData.showLoading) {
            return;
        }
        if (!this.loadingIsOpen) {
            this.loadingIsOpen = true;
            this.loading = this.loadingCtrl.create({
                content: content
            });
            this.loading.present();
            setTimeout(function () {
                _this.loadingIsOpen && _this.loading.dismiss();
                _this.loadingIsOpen = false;
            }, 15000);
        }
    };
    ;
    /**
     * 关闭loading
     */
    NativeService.prototype.hideLoading = function () {
        if (!this.globalData.showLoading) {
            this.globalData.showLoading = true;
        }
        this.loadingIsOpen && this.loading.dismiss();
        this.loadingIsOpen = false;
    };
    ;
    /**
     * 使用cordova-plugin-camera获取照片
     * @param options
     */
    NativeService.prototype.getPicture = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var ops = Object.assign({
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 10,
            allowEdit: true,
            encodingType: this.camera.EncodingType.JPEG,
            // targetWidth: 1024,//缩放图像的宽度（像素） 
            // targetHeight: 1024,//缩放图像的高度（像素）
            saveToPhotoAlbum: false,
            correctOrientation: true //设置摄像机拍摄的图像是否为正确的方向
        }, options);
        return __WEBPACK_IMPORTED_MODULE_16_rxjs__["Observable"].create(function (observer) {
            _this.camera.getPicture(ops).then(function (imgData) {
                if (ops.destinationType === _this.camera.DestinationType.DATA_URL) {
                    observer.next('data:image/jpg;base64,' + imgData);
                }
                else {
                    observer.next(imgData);
                }
            }).catch(function (err) {
                if (err == 20) {
                    _this.alert('没有权限,请在设置中开启权限');
                    return;
                }
                if (String(err).indexOf('cancel') != -1) {
                    return;
                }
                _this.log('getPicture:' + err);
            });
        });
    };
    ;
    /**
     * 通过拍照获取照片
     * @param options
     */
    NativeService.prototype.getPictureByCamera = function (options) {
        if (options === void 0) { options = {}; }
        var ops = Object.assign({
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL //DATA_URL: 0 base64字符串, FILE_URI: 1图片路径
        }, options);
        return this.getPicture(ops);
    };
    ;
    /**
     * 通过图库获取照片
     * @param options
     */
    NativeService.prototype.getPictureByPhotoLibrary = function (options) {
        if (options === void 0) { options = {}; }
        var ops = Object.assign({
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL //DATA_URL: 0 base64字符串, FILE_URI: 1图片路径
        }, options);
        return this.getPicture(ops);
    };
    ;
    /**
     * 通过图库选择多图
     * @param options
     */
    NativeService.prototype.getMultiplePicture = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var that = this;
        var ops = Object.assign({
            maximumImagesCount: 6,
            width: __WEBPACK_IMPORTED_MODULE_14__Constants__["e" /* IMAGE_SIZE */],
            height: __WEBPACK_IMPORTED_MODULE_14__Constants__["e" /* IMAGE_SIZE */],
            quality: __WEBPACK_IMPORTED_MODULE_14__Constants__["g" /* QUALITY_SIZE */] //图像质量，范围为0 - 100
        }, options);
        return __WEBPACK_IMPORTED_MODULE_16_rxjs__["Observable"].create(function (observer) {
            _this.imagePicker.getPictures(ops).then(function (files) {
                var destinationType = options['destinationType'] || 0; //0:base64字符串,1:图片url
                if (destinationType === 1) {
                    observer.next(files);
                }
                else {
                    var imgBase64s_1 = []; //base64字符串数组
                    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                        var fileUrl = files_1[_i];
                        that.convertImgToBase64(fileUrl).subscribe(function (base64) {
                            imgBase64s_1.push(base64);
                            if (imgBase64s_1.length === files.length) {
                                observer.next(imgBase64s_1);
                            }
                        });
                    }
                }
            }).catch(function (err) {
                _this.log('getMultiplePicture:' + err);
                _this.alert('获取照片失败');
            });
        });
    };
    ;
    /**
     * 根据图片绝对路径转化为base64字符串
     * @param path 绝对路径
     */
    NativeService.prototype.convertImgToBase64 = function (path) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_16_rxjs__["Observable"].create(function (observer) {
            _this.file.resolveLocalFilesystemUrl(path).then(function (fileEnter) {
                fileEnter.file(function (file) {
                    var reader = new FileReader();
                    reader.onloadend = function (e) {
                        observer.next(this.result);
                    };
                    reader.readAsDataURL(file);
                });
            }).catch(function (err) {
                _this.log('convertImgToBase64:' + err);
            });
        });
    };
    /**
     * 获得app版本号,如0.01
     * @description  对应/config.xml中version的值
     */
    NativeService.prototype.getVersionNumber = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_16_rxjs__["Observable"].create(function (observer) {
            _this.appVersion.getVersionNumber().then(function (value) {
                observer.next(value);
            }).catch(function (err) {
                _this.log('getVersionNumber:' + err);
            });
        });
    };
    /**
     * 获得app name,如ionic2_tabs
     * @description  对应/config.xml中name的值
     */
    NativeService.prototype.getAppName = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_16_rxjs__["Observable"].create(function (observer) {
            _this.appVersion.getAppName().then(function (value) {
                observer.next(value);
            }).catch(function (err) {
                _this.log('getAppName:' + err);
            });
        });
    };
    /**
     * 获得app包名/id,如com.kit.ionic2tabs
     * @description  对应/config.xml中id的值
     */
    NativeService.prototype.getPackageName = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_16_rxjs__["Observable"].create(function (observer) {
            _this.appVersion.getPackageName().then(function (value) {
                observer.next(value);
            }).catch(function (err) {
                _this.log('getPackageName:' + err);
            });
        });
    };
    /**
     * 获得用户当前坐标
     */
    NativeService.prototype.getUserLocation = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_16_rxjs__["Observable"].create(function (observer) {
            if (_this.isMobile()) {
                LocationPlugin.getLocation(function (data) {
                    observer.next({ 'lng': data.longitude, 'lat': data.latitude });
                }, function (msg) {
                    _this.log('getUserLocation:' + msg);
                    _this.alert(msg.indexOf('缺少定位权限') == -1 ? ('错误消息：' + msg) : '缺少定位权限，请在手机设置中开启');
                    observer.error('获取位置失败');
                });
            }
            else {
                console.log('非手机环境,即测试环境返回固定坐标');
                observer.next({ 'lng': 113.350912, 'lat': 23.119495 });
            }
        });
    };
    /**
     * 地图导航
     * @param startPoint 开始坐标
     * @param endPoint 结束坐标
     * @param type 0实时导航,1模拟导航,默认为模拟导航
     */
    NativeService.prototype.navigation = function (startPoint, endPoint, type) {
        var _this = this;
        if (type === void 0) { type = 1; }
        return __WEBPACK_IMPORTED_MODULE_16_rxjs__["Observable"].create(function (observer) {
            if (_this.platform.is('mobile') && !_this.platform.is('mobileweb')) {
                AMapNavigation.navigation({
                    lng: startPoint.lng,
                    lat: startPoint.lat
                }, {
                    lng: endPoint.lng,
                    lat: endPoint.lat
                }, type, function (message) {
                    observer.next(message);
                }, function (err) {
                    _this.log('navigation:' + err);
                    _this.alert('导航失败');
                });
            }
            else {
                _this.alert('非手机环境不能导航');
            }
        });
    };
    return NativeService;
}());
NativeService = __decorate([
    __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"](),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["B" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_version__["a" /* AppVersion */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_toast__["a" /* Toast */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_transfer__["a" /* Transfer */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_image_picker__["a" /* ImagePicker */],
        __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__["a" /* Network */],
        __WEBPACK_IMPORTED_MODULE_13__ionic_native_app_minimize__["a" /* AppMinimize */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_15__GlobalData__["a" /* GlobalData */],
        __WEBPACK_IMPORTED_MODULE_0__HttpService__["a" /* HttpService */]])
], NativeService);

//# sourceMappingURL=NativeService.js.map

/***/ })

},[252]);
//# sourceMappingURL=main.js.map