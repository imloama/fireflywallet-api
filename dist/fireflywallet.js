var NOT_FFW_ERROR = new Error('not firefly wallet environment');
var FireFlyWallet = /** @class */ (function () {
    function FireFlyWallet(appname, appid) {
        this._intervalTime = 300;
        this._count = 50;
        this._appname = appname;
        this._appid = appid;
    }
    /**
     * 监听是否存在
     */
    FireFlyWallet.prototype.ready = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._interval = setInterval(function () {
                if (window.FFW) {
                    _this.clear();
                    _this.register();
                    resolve(window.FFW);
                }
                _this._count--;
                if (_this._count < 0) {
                    _this.clear();
                    reject(NOT_FFW_ERROR);
                }
            }, _this._intervalTime);
        });
    };
    
    FireFlyWallet.prototype.clear = function () {
        if (this._interval != undefined) {
            clearInterval(this._interval);
        }
        this._interval = undefined;
    };
    
    FireFlyWallet.prototype.register = function () {
        if (window.FFW && window.FFW.register
            && this._appname != undefined && this._appid != undefined) {
            window.FFW.register(this._appname, this._appid);
        }
    };
    
    FireFlyWallet.prototype.getVersion = function () {
        return window.FFW ? Promise.resolve(window.FFW.version) : Promise.reject(NOT_FFW_ERROR);
    };
    
    Object.defineProperty(FireFlyWallet.prototype, "version", {
        get: function () {
            return window.FFW ? window.FFW.version : undefined;
        },
        enumerable: true,
        configurable: true
    });
    FireFlyWallet.prototype.getPlatform = function () {
        return window.FFW ? Promise.resolve(window.FFW.platform) : Promise.reject(NOT_FFW_ERROR);
    };
    
    Object.defineProperty(FireFlyWallet.prototype, "platform", {
        get: function () {
            return window.FFW ? window.FFW.platform : undefined;
        },
        enumerable: true,
        configurable: true
    });
    FireFlyWallet.prototype.getAccountID = function () {
        return window.FFW ? Promise.resolve(window.FFW.address) : Promise.reject(NOT_FFW_ERROR);
    };
    
    Object.defineProperty(FireFlyWallet.prototype, "accountID", {
        get: function () {
            return window.FFW ? window.FFW.address : undefined;
        },
        enumerable: true,
        configurable: true
    });
    FireFlyWallet.prototype.getUUID = function () {
        return window.FFW ? Promise.resolve(window.FFW.uuid) : Promise.reject(NOT_FFW_ERROR);
    };
    
    Object.defineProperty(FireFlyWallet.prototype, "UUID", {
        get: function () {
            return window.FFW ? window.FFW.uuid : undefined;
        },
        enumerable: true,
        configurable: true
    });
    FireFlyWallet.prototype.getLocale = function () {
        return window.FFW ? Promise.resolve(window.FFW.locale) : Promise.reject(NOT_FFW_ERROR);
    };
    
    Object.defineProperty(FireFlyWallet.prototype, "locale", {
        get: function () {
            return window.FFW ? window.FFW.locale : undefined;
        },
        enumerable: true,
        configurable: true
    });
    FireFlyWallet.prototype.getAccountName = function () {
        return window.FFW ? Promise.resolve(window.FFW.accountName) : Promise.reject(NOT_FFW_ERROR);
    };
    Object.defineProperty(FireFlyWallet.prototype, "accountName", {
        get: function () {
            return window.FFW ? window.FFW.accountName : undefined;
        },
        enumerable: true,
        configurable: true
    });
    FireFlyWallet.prototype.getHorizonUrl = function () {
        return window.FFW ? Promise.resolve(window.FFW.horizonUrl) : Promise.reject(NOT_FFW_ERROR);
    };
    Object.defineProperty(FireFlyWallet.prototype, "horizonUrl", {
        get: function () {
            return window.FFW ? window.FFW.horizonUrl : undefined;
        },
        enumerable: true,
        configurable: true
    });
    FireFlyWallet.prototype.getNetwork = function () {
        return window.FFW ? Promise.resolve(window.FFW.network) : Promise.reject(NOT_FFW_ERROR);
    };
    Object.defineProperty(FireFlyWallet.prototype, "network", {
        get: function () {
            return window.FFW ? window.FFW.network : undefined;
        },
        enumerable: true,
        configurable: true
    });
    FireFlyWallet.prototype.getBalances = function () {
        if (window.FFW) {
            return new Promise(function (resolve, reject) {
                window.FFW.balances(function (response) {
                    if (response.code === 'success') {
                        resolve(response.data);
                    }
                    else {
                        reject(response.message);
                    }
                });
            });
        }
        else {
            return Promise.reject(NOT_FFW_ERROR);
        }
    };
    
    FireFlyWallet.prototype.sign = function (data) {
        if (window.FFW) {
            return new Promise(function (resolve, reject) {
                window.FFW.sign(JSON.stringify(data), function (response) {
                    if (response.code === 'success') {
                        resolve(response.data);
                    }
                    else {
                        reject(response.message);
                    }
                });
            });
        }
        else {
            return Promise.reject(NOT_FFW_ERROR);
        }
    };
    
    FireFlyWallet.prototype.pay = function (data) {
        if (window.FFW) {
            return new Promise(function (resolve, reject) {
                window.FFW.pay(data, function (response) {
                    if (response.code === 'success') {
                        resolve(response.data);
                    }
                    else {
                        reject(response.message);
                    }
                });
            });
        }
        else {
            return Promise.reject(NOT_FFW_ERROR);
        }
    };
    
    FireFlyWallet.prototype.pathPayment = function (data) {
        if (window.FFW) {
            return new Promise(function (resolve, reject) {
                window.FFW.pathPayment(data, function (response) {
                    if (response.code === 'success') {
                        resolve(response.data);
                    }
                    else {
                        reject(response.message);
                    }
                });
            });
        }
        else {
            return Promise.reject(NOT_FFW_ERROR);
        }
    };
    
    FireFlyWallet.prototype.trust = function (code, issuer) {
        if (window.FFW) {
            return new Promise(function (resolve, reject) {
                window.FFW.trust(code, issuer, function (response) {
                    if (response.code === 'success') {
                        resolve(response.data);
                    }
                    else {
                        reject(response.message);
                    }
                });
            });
        }
        else {
            return Promise.reject(NOT_FFW_ERROR);
        }
    };
    
    FireFlyWallet.prototype.signXDR = function (data, message) {
        if (window.FFW) {
            return new Promise(function (resolve, reject) {
                window.FFW.signXDR(data, message, function (response) {
                    if (response.code === 'success') {
                        resolve(response.data);
                    }
                    else {
                        reject(response.message);
                    }
                });
            });
        }
        else {
            return Promise.reject(NOT_FFW_ERROR);
        }
    };
    
    FireFlyWallet.prototype.scan = function () {
        if (window.FFW) {
            return new Promise(function (resolve, reject) {
                window.FFW.scan(function (response) {
                    if (response.code === 'success') {
                        resolve(response.data);
                    }
                    else {
                        reject(response.message);
                    }
                });
            });
        }
        else {
            return Promise.reject(NOT_FFW_ERROR);
        }
    };
    
    FireFlyWallet.prototype.share = function (data) {
        if (window.FFW) {
            return new Promise(function (resolve, reject) {
                window.FFW.share(data, function (response) {
                    if (response.code === 'success') {
                        resolve(response.data);
                    }
                    else {
                        reject(response.message);
                    }
                });
            });
        }
        else {
            return Promise.reject(NOT_FFW_ERROR);
        }
    };
    
    // ajax请求
    FireFlyWallet.prototype.request = function (options) {
        if (window.FFW == undefined) {
            return Promise.reject(NOT_FFW_ERROR);
        }
        return new Promise(function (resolve, reject) {
            window.FFW.request(options, function (response) {
                if (response.statusCode == 200) {
                    resolve(response);
                }
                else {
                    reject(response);
                }
            });
        });
    };
    
    FireFlyWallet.prototype.toast = function (options) {
        if (window.FFW == undefined) {
            throw new Error('not init');
        }
        window.FFW.toast(options);
    };
    
    // 打开其他dapp
    FireFlyWallet.prototype.openDApp = function (appid) {
        if (window.FFW == undefined) {
            throw new Error('not init');
        }
        window.FFW.openDApp(appid);
    };
    
    // 初始化展示界面，主要用于导航栏的处理和导航部分的字体颜色处理
    FireFlyWallet.prototype.initWindow = function (options) {
        if (window.FFW == undefined) {
            throw new Error('not init');
        }
        window.FFW.initWindow(options);
    };
    
    return FireFlyWallet;
}());

export { FireFlyWallet };
