# firefly wallet dapp api

[中文说明](README_CN.MD)

## Example

### install
``` 
npm install fireflywallet-api --save
```

### ready

``` javascript
import { FireFlyWallet } from 'fireflywallet-api';
const FFWProxy = new FireFlyWallet();
FFWProxy.ready().then(FFW=>{
  console.log('firefly wallet api is ready')
}).catch(err=>{
  console.error(err)
})
````

### get version of firefly wallet app
``` javascript
  FFWProxy.version
```
or
``` javascript
  FFWProxy.getVersion().then(version=>{
    console.log(version)
  }).catch(err=>{
    console.error(err)
  })
```

### get platform of firefly wallet app
``` javascript
  FFWProxy.platform
```
or
``` javascript
  FFWProxy.getPlatform().then(platform=>{
    console.log(platform);
  }).catch(err=>{
    console.error(err);
  })
```

### get accountid 
``` javascript
  FFWProxy.accountId
```
or
``` javascript
  FFWProxy.getAccountId().then(accountid=>{
    console.log(accountid)
  }).catch(err=>{
    console.log(err)
  })
```

### get uuid of phone
``` javascript
  FFWProxy.uuid
```
or
``` javascript
  FFWProxy.getUuid().then(uuid=>{
    console.log(uuid);
  }).catch(err=>{
    console.error(err)
  })
```

### get locale of firefly wallet app
``` javascript
  FFWProxy.locale
```
or
``` javascript
  FFWProxy.getLocale().then(locale=>{
    console.log(locale)
  }).catch(err=>{
    console.error(err)
  })
```

### get contacts
``` javascript
  FFWProxy.contacts
```
or
``` javascript
  FFWProxy.getContacts().then(contacts=>{
    console.log(contacts)
  }).catch(err=>{
    console.error(err)
  })
```

### get account balance
``` javascript
FFWProxy.getBalances().then(balances=>{
  console.log(balances)
}).catch(err=>{
  console.error(err)
})
```

### sign data(data is JSON type)
``` javascript
let data = { accountid: 'GG', time: new Date().getTime() }
FFWProxy.sign(data).then(result=>{
  console.log(result)
}).catch(err=>{
  console.error(err)
})
```

### pay
``` javascript
FFWProxy.pay({
  destination: 'GCKKUWHT3ILQWWKQ3MUOCAC7LRJNLCOES7SEI6TCQVGZD4GCULO2PGNU', 
  code: 'XFF', 
  issuer: 'GAZEX2USUBMMWFRZFS77VDJYXUFLXI4ZGFPWX6TBNZCSTEQWNLFZMXFF', 
  amount: 1, 
  memo_type: 'TEXT', //see documents from stellar.org/developers
  memo: 'Hello,FFW'
}).then(data=>{
  console.log('pay success');
}).catch(err=>{
  console.error(err)
})
```

### pathPayment
``` javascript
FFWProxy.pathPayment({
  destination: 'GCKKUWHT3ILQWWKQ3MUOCAC7LRJNLCOES7SEI6TCQVGZD4GCULO2PGNU', 
  code: 'XFF', 
  issuer: 'GAZEX2USUBMMWFRZFS77VDJYXUFLXI4ZGFPWX6TBNZCSTEQWNLFZMXFF', 
  amount: 1, 
  memo_type: 'TEXT', 
  memo: 'Hello,FFW'
}).then(data=>{
    console.log('pathpayment success')
    this.pathPaymentResult = true
  }).catch(err=>{
    console.error(err)
  })
```

### trust
``` javascript
let code = 'XFF';
let issuer = 'GAZEX2USUBMMWFRZFS77VDJYXUFLXI4ZGFPWX6TBNZCSTEQWNLFZMXFF';
FFWProxy.trust(code,issuer).then(data=>{
    console.log('trust success')
  }).catch(err=>{
    console.error(err)
  })
```

### signXDR
``` javascript
let xdr = 'AAAAAEpng8wi7nIqz02/1bmC4I5jzz763WoadKIWy7M5MVc3AAAAZACHjkkAAAABAAAAAAAAAAAAAAABAAAAAAAAAAoAAAALaG9tZV9kb21haW4AAAAAAQAAABBodHRwOi8vZmNoYWluLmlvAAAAAAAAAAA='
FFWProxy.signXDR(xdr,"sign XDR").then(data=>{
    console.log(`signed XDR:${data}`)
  }).catch(err=>{
    console.error(err)
  })
```

### scan
``` javascript
FFWProxy.scan().then(data=>{
  console.log(`scan result: ${data}`);
  this.scanResult = true
}).catch(err=>{
  console.error(err)
})
```

### share
``` javascript
let options = {
  message: 'share image',
  files: ['base64 of image']
}
FFWProxy.share(options).then(data=>{
  console.log('share success')
}).catch(err=>{
  console.error(err)
})
```

### in browser
``` javascript
  <script src="path\to\dist\fireflywallet.min.js"></script>
  <script>
    var FFWProxy = new FireFlyWallet();
    FFWProxy.ready().then(function(FFW){
      console.log('firefly wallet is ready!')
    }).catch(function(err){
      console.error(err);
    })
  </script>
```