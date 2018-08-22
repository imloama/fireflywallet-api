declare namespace window {
  class FFW {
    static version: string;
    static platform: string;
    static address: string;
    static contacts: Array<any>;
    static uuid:string;
    static locale:string;
    static balances(cb:Function):void;
    static sign(data:{}, cb:Function):void;
    static pay(data: any,cb:Function):void;
    static pathPayment(data: any,cb:Function):void;
    static trust(code:string,issuer:string|undefined,cb:Function):void;
    static signXDR(data: string, message: string|undefined,cb:Function):void;
    static scan(cb:Function):void;
    static share(options: any,cb:Function):void;
    static register(appname:string, appid:string):void;
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
    if(window.FFW){
      return Promise.resolve(window.FFW.version);
    }
    return Promise.reject(NOT_FFW_ERROR);
  };

  get version():string|undefined{
    return window.FFW ? window.FFW.version : undefined;
  }

  getPlatform():Promise<string>{
    if(window.FFW){
      return Promise.resolve(window.FFW.platform);
    }
    return Promise.reject(NOT_FFW_ERROR)
  };

  get platform():string|undefined{
    return window.FFW ? window.FFW.platform : undefined;
  }

  getAccountId():Promise<string>{
    if(window.FFW){
      return Promise.resolve(window.FFW.address);
    }
    return Promise.reject(NOT_FFW_ERROR)
  };

  get accountId():string|undefined{
    return window.FFW? window.FFW.address:undefined;
  }

  getUuid():Promise<string>{
    if(window.FFW){
      return Promise.resolve(window.FFW.uuid);
    }
    return Promise.reject(NOT_FFW_ERROR)
  };

  get uuid():string|undefined{
    return window.FFW ? window.FFW.uuid : undefined;
  }

  getLocale():Promise<string>{
    if(window.FFW){
      return Promise.resolve(window.FFW.locale);
    }
    return Promise.reject(NOT_FFW_ERROR)
  };

  get locale():string|undefined{
    return window.FFW ? window.FFW.locale : undefined;
  }

  getContacts():Promise<Array<any>>{
    if(window.FFW){
      return Promise.resolve(window.FFW.contacts);
    }
    return Promise.reject(NOT_FFW_ERROR)
  };

  get contacts():Array<any>|undefined{
    return window.FFW ? window.FFW.contacts : undefined;
  };

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
  




  




}