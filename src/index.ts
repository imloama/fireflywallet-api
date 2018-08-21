declare global {
  class FFW {
    static version: string;
    static platfrom: string;
    static address: string;
    static contacts: Array<any>;
    static uuid:string;
    static locale:string;
    static balances(cb:Function):void;
    static pay(data: any,cb:Function):void;
    static pathPayment(data: any,cb:Function):void;
    static trust(code:string,issuer:string|undefined,cb:Function):void;
    static signXDR(data: string, message: string|undefined,cb:Function):void;
    static scan(cb:Function):void;
    static share(options: any,cb:Function):void;
  }
};


export class FireFlyWallet {
  

  private _interval:number|undefined;
  private _intervalTime = 300;
  private _count = 50;

  /**
   * 监听是否存在
   */
  ready(){
    return new Promise((resolve,reject)=>{
      this._interval = setInterval(()=>{
        if(FFW){
          this.clear()
          resolve(FFW);
        }
        this._count --;
        if(this._count < 0){
          this.clear()
          reject('not firefly wallet environment');
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



  getVersion():Promise<string>{
    if(FFW){
      return Promise.resolve(FFW.version);
    }
    return Promise.reject('not firefly wallet environment')
  };

  getPlatform():Promise<string>{
    if(FFW){
      return Promise.resolve(FFW.platfrom);
    }
    return Promise.reject('not firefly wallet environment')
  };

  getAddress():Promise<string>{
    if(FFW){
      return Promise.resolve(FFW.address);
    }
    return Promise.reject('not firefly wallet environment')
  };

  getUuid():Promise<string>{
    if(FFW){
      return Promise.resolve(FFW.uuid);
    }
    return Promise.reject('not firefly wallet environment')
  };

  getLocale():Promise<string>{
    if(FFW){
      return Promise.resolve(FFW.locale);
    }
    return Promise.reject('not firefly wallet environment')
  };

  getContacts():Promise<Array<any>>{
    if(FFW){
      return Promise.resolve(FFW.contacts);
    }
    return Promise.reject('not firefly wallet environment')
  };



  getBalances():Promise<Array<any>>{
    if(FFW){
      return new Promise((resolve,reject) => {
        FFW.balances((response: any)=>{
          if(response.code === 'success'){
            resolve(response)
          }else{
            reject(response.message)
          }
        });  
      });
    } else {
      return Promise.reject('not firefly wallet environment')
    }
  };

  
  pay(data:{}):Promise<Array<any>>{
    if(FFW){
      return new Promise((resolve,reject) => {
        FFW.pay(data, (response: any)=>{
          if(response.code === 'success'){
            resolve(response.data);
          }else{
            reject(response.message);
          }
        });  
      });
    } else {
      return Promise.reject('not firefly wallet environment')
    }
  };

  pathPayment(data:{}):Promise<Array<any>>{
    if(FFW){
      return new Promise((resolve,reject) => {
        FFW.pathPayment(data, (response: any)=>{
          if(response.code === 'success'){
            resolve(response.data);
          }else{
            reject(response.message);
          }
        });  
      });
    } else {
      return Promise.reject('not firefly wallet environment')
    }
  };

  
  trust(code:string, issuer:string|undefined):Promise<Array<any>>{
    if(FFW){
      return new Promise((resolve,reject) => {
        FFW.trust(code, issuer , (response: any)=>{
          if(response.code === 'success'){
            resolve(response.data);
          }else{
            reject(response.message);
          }
        });  
      });
    } else {
      return Promise.reject('not firefly wallet environment')
    }
  };

  
  signXDR(data:string, message: string|undefined):Promise<Array<any>>{
    if(FFW){
      return new Promise((resolve,reject) => {
        FFW.signXDR(data, message, (response: any)=>{
          if(response.code === 'success'){
            resolve(response.data);
          }else{
            reject(response.message);
          }
        });  
      });
    } else {
      return Promise.reject('not firefly wallet environment')
    }
  };


  
  scan():Promise<Array<any>>{
    if(FFW){
      return new Promise((resolve,reject) => {
        FFW.scan((response: any)=>{
          if(response.code === 'success'){
            resolve(response.data);
          }else{
            reject(response.message);
          }
        });  
      });
    } else {
      return Promise.reject('not firefly wallet environment')
    }
  };

  share(data:{}):Promise<Array<any>>{
    if(FFW){
      return new Promise((resolve,reject) => {
        FFW.share(data, (response: any)=>{
          if(response.code === 'success'){
            resolve(response.data);
          }else{
            reject(response.message);
          }
        });  
      });
    } else {
      return Promise.reject('not firefly wallet environment')
    }
  };
  




  




}