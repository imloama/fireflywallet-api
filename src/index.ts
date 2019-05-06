declare namespace window {
  class FFW {
    static version: string;
    static platform: string;
    static address: string;
    static accountName: string;
    static uuid:string;
    static locale:string;
    static appid:string;
    static appname:string;
    static horizonUrl: string;
    // network passphrase
    static network: string;
    static balances(cb:Function):void;
    static sign(data:{}, cb:Function):void;
    static pay(data: any,cb:Function):void;
    static pathPayment(data: any,cb:Function):void;
    static trust(code:string,issuer:string|undefined,cb:Function):void;
    static signXDR(data: string, message: string|undefined,cb:Function):void;
    static scan(cb:Function):void;
    static share(options: any,cb:Function):void;
    static register(appname:string, appid:string):void;
    static request(options: any, cb:Function):void;
    static toast(options:any):void;
    static openDApp(appid:string):void;
    static initWindow(options:any):void;
  }
};

const NOT_FFW_ERROR = new Error('not firefly wallet environment');

export class FireFlyWallet {

  private _interval:number|undefined;
  private _intervalTime = 300;
  private _count = 50;
  // 当前应用的信息
  private _appname:string|undefined;
  private _appid:string|undefined;
  
  constructor(appname:string|undefined,appid:string|undefined){
    this._appname = appname;
    this._appid = appid;
  }

  /**
   * 监听是否存在
   */
  ready(){
    return new Promise((resolve,reject)=>{
      this._interval = setInterval(()=>{
        if(window.FFW){
          this.clear();
          this.register();
          resolve(window.FFW);
        }
        this._count --;
        if(this._count < 0){
          this.clear()
          reject(NOT_FFW_ERROR);
        }
      }, this._intervalTime);
    });
  };

  clear(){
    if(this._interval!=undefined){
      clearInterval(this._interval);
    }
    this._interval = undefined;
  };

  register(){
    if(window.FFW && window.FFW.register 
      && this._appname!=undefined && this._appid!=undefined){
      window.FFW.register(this._appname, this._appid);
    }
  };


  getVersion():Promise<string>{
    return window.FFW ? Promise.resolve(window.FFW.version) : Promise.reject(NOT_FFW_ERROR);
  };

  get version():string|undefined{
    return window.FFW ? window.FFW.version : undefined;
  }

  getPlatform():Promise<string>{
    return window.FFW ? Promise.resolve(window.FFW.platform) : Promise.reject(NOT_FFW_ERROR);
  };

  get platform():string|undefined{
    return window.FFW ? window.FFW.platform : undefined;
  }

  getAccountID():Promise<string>{
    return window.FFW ? Promise.resolve(window.FFW.address) : Promise.reject(NOT_FFW_ERROR);
  };

  get accountID():string|undefined{
    return window.FFW? window.FFW.address:undefined;
  }

  getUUID():Promise<string>{
    return window.FFW ? Promise.resolve(window.FFW.uuid) : Promise.reject(NOT_FFW_ERROR);
  };

  get UUID():string|undefined{
    return window.FFW ? window.FFW.uuid : undefined;
  }

  getLocale():Promise<string>{
    return window.FFW ? Promise.resolve(window.FFW.locale) : Promise.reject(NOT_FFW_ERROR);
  };

  get locale():string|undefined{
    return window.FFW ? window.FFW.locale : undefined;
  }

  getAccountName(): Promise<string>{
    return window.FFW ? Promise.resolve(window.FFW.accountName) : Promise.reject(NOT_FFW_ERROR);
  }

  get accountName():string|undefined{
    return window.FFW ? window.FFW.accountName : undefined;
  }

  getHorizonUrl():Promise<string>{
    return window.FFW ? Promise.resolve(window.FFW.horizonUrl) : Promise.reject(NOT_FFW_ERROR);
  }

  get horizonUrl():string|undefined{
    return window.FFW ? window.FFW.horizonUrl : undefined;
  }

  getNetwork():Promise<string>{
    return window.FFW ? Promise.resolve(window.FFW.network) : Promise.reject(NOT_FFW_ERROR);
  }

  get network():string|undefined{
    return window.FFW? window.FFW.network:undefined
  }

  getBalances():Promise<Array<any>>{
    if(window.FFW){
      return new Promise((resolve,reject) => {
        window.FFW.balances((response: any)=>{
          if(response.code === 'success'){
            resolve(response.data)
          }else{
            reject(response.message)
          }
        });  
      });
    } else {
      return Promise.reject(NOT_FFW_ERROR)
    }
  };

  sign(data:{}):Promise<any>{
    if(window.FFW){
      return new Promise((resolve,reject) => {
        window.FFW.sign(JSON.stringify(data), (response: any)=>{
          if(response.code === 'success'){
            resolve(response.data);
          }else{
            reject(response.message);
          }
        });  
      });
    } else {
      return Promise.reject(NOT_FFW_ERROR)
    }
  };

  
  pay(data:{}):Promise<any>{
    if(window.FFW){
      return new Promise((resolve,reject) => {
        window.FFW.pay(data, (response: any)=>{
          if(response.code === 'success'){
            resolve(response.data);
          }else{
            reject(response.message);
          }
        });  
      });
    } else {
      return Promise.reject(NOT_FFW_ERROR)
    }
  };

  pathPayment(data:{}):Promise<any>{
    if(window.FFW){
      return new Promise((resolve,reject) => {
        window.FFW.pathPayment(data, (response: any)=>{
          if(response.code === 'success'){
            resolve(response.data);
          }else{
            reject(response.message);
          }
        });  
      });
    } else {
      return Promise.reject(NOT_FFW_ERROR)
    }
  };

  
  trust(code:string, issuer:string|undefined):Promise<any>{
    if(window.FFW){
      return new Promise((resolve,reject) => {
        window.FFW.trust(code, issuer , (response: any)=>{
          if(response.code === 'success'){
            resolve(response.data);
          }else{
            reject(response.message);
          }
        });  
      });
    } else {
      return Promise.reject(NOT_FFW_ERROR)
    }
  };

  
  signXDR(data:string, message: string|undefined):Promise<any>{
    if(window.FFW){
      return new Promise((resolve,reject) => {
        window.FFW.signXDR(data, message, (response: any)=>{
          if(response.code === 'success'){
            resolve(response.data);
          }else{
            reject(response.message);
          }
        });  
      });
    } else {
      return Promise.reject(NOT_FFW_ERROR)
    }
  };


  
  scan():Promise<any>{
    if(window.FFW){
      return new Promise((resolve,reject) => {
        window.FFW.scan((response: any)=>{
          if(response.code === 'success'){
            resolve(response.data);
          }else{
            reject(response.message);
          }
        });  
      });
    } else {
      return Promise.reject(NOT_FFW_ERROR)
    }
  };

  share(data:{}):Promise<Array<any>>{
    if(window.FFW){
      return new Promise((resolve,reject) => {
        window.FFW.share(data, (response: any)=>{
          if(response.code === 'success'){
            resolve(response.data);
          }else{
            reject(response.message);
          }
        });  
      });
    } else {
      return Promise.reject(NOT_FFW_ERROR)
    }
  };

  // ajax请求
  request(options:{}):Promise<any>{
    if(window.FFW == undefined){
      return Promise.reject(NOT_FFW_ERROR);
    }
    return new Promise((resolve, reject) => {
      window.FFW.request(options, (response: any) => {
        if(response.statusCode == 200){
          resolve(response);
        }else{
          reject(response);
        }
      })
    });
  };
  
  toast(options:{}):void{
    if(window.FFW == undefined){
      throw new Error('not init');
    }
    window.FFW.toast(options);
  };

  // 打开其他dapp
  openDApp(appid:string):void{
    if(window.FFW == undefined){
      throw new Error('not init');
    }
    window.FFW.openDApp(appid);
  };

  // 初始化展示界面，主要用于导航栏的处理和导航部分的字体颜色处理
  initWindow(options:{}):void{
    if(window.FFW == undefined){
      throw new Error('not init');
    }
    window.FFW.initWindow(options);
  };


}