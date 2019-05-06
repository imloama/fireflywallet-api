# firefly wallet dapp api

[中文说明](README_CN.MD)

## Example

### install
``` 
npm install fireflywallet-api --save
or
yarn add fireflywallet-api
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

or

  FFWProxy.getVersion().then(version=>{
    console.log(version)
  }).catch(err=>{
    console.error(err)
  })
```

### get platform of firefly wallet app
``` javascript
  FFWProxy.platform

or

  FFWProxy.getPlatform().then(platform=>{
    console.log(platform);
  }).catch(err=>{
    console.error(err);
  })
```

### get accountID
``` javascript
  FFWProxy.accountID

or

  FFWProxy.getAccountID().then(accountID=>{
    console.log(accountID)
  }).catch(err=>{
    console.log(err)
  })
```

### get accountName
```javascript
  FFWProxy.accountName

or

  FFWProxy.getAccountName().then(accountName=>{
    console.log(accountName)
  }).catch(err=>{
    console.log(err)
  })
```

### get UUID of phone(The raw data was processed with sha256)
``` javascript
  FFWProxy.UUID

or

  FFWProxy.getUUID().then(uuid=>{
    console.log(uuid);
  }).catch(err=>{
    console.error(err)
  })
```

### get locale of firefly wallet app
``` javascript
  FFWProxy.locale

or

  FFWProxy.getLocale().then(locale=>{
    console.log(locale)
  }).catch(err=>{
    console.error(err)
  })
```

### get horizonUrl
``` javascript
  FFWProxy.horizonUrl

or

  FFWProxy.getHorizonUrl().then(horizonUrl=>{
    console.log(horizonUrl)
  }).catch(err=>{
    console.error(err)
  })
```

### get network
``` javascript
  FFWProxy.network

or

  FFWProxy.getNetwork().then(network=>{
    console.log(network)
    //output: "Public Global Stellar Network ; September 2015" or "Test SDF Network ; September 2015"
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

### get origin object
``` javascript
FFWProxy.origin
//output: window.FFW

or

FFWProxy.getOrigin().then(FFW => {
  console.log(FFW)
}).catch(err => {
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