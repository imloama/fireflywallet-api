;
var FireFlyWallet = /** @class */ (function () {
    function FireFlyWallet() {
        this._intervalTime = 300;
        this._count = 50;
    }
    /**
     * 监听是否存在
     */
    FireFlyWallet.prototype.ready = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._interval = setInterval(function () {
                if (FFW) {
                    _this.clear();
                    resolve(FFW);
                }
                _this._count--;
                if (_this._count < 0) {
                    _this.clear();
                    reject('not firefly wallet environment');
                }
            }, _this._intervalTime);
        });
    };
    ;
    FireFlyWallet.prototype.clear = function () {
        if (this._interval != undefined) {
            clearInterval(this._interval);
        }
        this._interval = undefined;
    };
    ;
    FireFlyWallet.prototype.getVersion = function () {
        if (FFW) {
            return Promise.resolve(FFW.version);
        }
        return Promise.reject('not firefly wallet environment');
    };
    ;
    FireFlyWallet.prototype.getPlatform = function () {
        if (FFW) {
            return Promise.resolve(FFW.platfrom);
        }
        return Promise.reject('not firefly wallet environment');
    };
    ;
    FireFlyWallet.prototype.getAddress = function () {
        if (FFW) {
            return Promise.resolve(FFW.address);
        }
        return Promise.reject('not firefly wallet environment');
    };
    ;
    FireFlyWallet.prototype.getUuid = function () {
        if (FFW) {
            return Promise.resolve(FFW.uuid);
        }
        return Promise.reject('not firefly wallet environment');
    };
    ;
    FireFlyWallet.prototype.getLocale = function () {
        if (FFW) {
            return Promise.resolve(FFW.locale);
        }
        return Promise.reject('not firefly wallet environment');
    };
    ;
    FireFlyWallet.prototype.getContacts = function () {
        if (FFW) {
            return Promise.resolve(FFW.contacts);
        }
        return Promise.reject('not firefly wallet environment');
    };
    ;
    FireFlyWallet.prototype.getBalances = function () {
        if (FFW) {
            return new Promise(function (resolve, reject) {
                FFW.balances(function (response) {
                    if (response.code === 'success') {
                        resolve(response);
                    }
                    else {
                        reject(response.message);
                    }
                });
            });
        }
        else {
            return Promise.reject('not firefly wallet environment');
        }
    };
    ;
    FireFlyWallet.prototype.pay = function (data) {
        if (FFW) {
            return new Promise(function (resolve, reject) {
                FFW.pay(data, function (response) {
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
            return Promise.reject('not firefly wallet environment');
        }
    };
    ;
    FireFlyWallet.prototype.pathPayment = function (data) {
        if (FFW) {
            return new Promise(function (resolve, reject) {
                FFW.pathPayment(data, function (response) {
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
            return Promise.reject('not firefly wallet environment');
        }
    };
    ;
    FireFlyWallet.prototype.trust = function (code, issuer) {
        if (FFW) {
            return new Promise(function (resolve, reject) {
                FFW.trust(code, issuer, function (response) {
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
            return Promise.reject('not firefly wallet environment');
        }
    };
    ;
    FireFlyWallet.prototype.signXDR = function (data, message) {
        if (FFW) {
            return new Promise(function (resolve, reject) {
                FFW.signXDR(data, message, function (response) {
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
            return Promise.reject('not firefly wallet environment');
        }
    };
    ;
    FireFlyWallet.prototype.scan = function () {
        if (FFW) {
            return new Promise(function (resolve, reject) {
                FFW.scan(function (response) {
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
            return Promise.reject('not firefly wallet environment');
        }
    };
    ;
    FireFlyWallet.prototype.share = function (data) {
        if (FFW) {
            return new Promise(function (resolve, reject) {
                FFW.share(data, function (response) {
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
            return Promise.reject('not firefly wallet environment');
        }
    };
    ;
    return FireFlyWallet;
}());
export { FireFlyWallet };
