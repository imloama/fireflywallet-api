# firefly wallet dapp api

[中文说明](README_CN.MD)

## Example

### install
`
npm install fireflywallet-api --save
`

### ready

`
import { FireFlyWallet } from '../lib/fireflywallet';
const FFWProxy = new FireFlyWallet();
FFWProxy.ready().then(FFW=>{
  console.log('firefly wallet api is ready')
}).catch(err=>{
  console.error(err)
})
`

### get version of firefly wallet app
`
  FFWProxy.version
`

or

`
  FFWProxy.getVersion().then(version=>{
    console.log(version)
  }).catch(err=>{
    console.error(err)
  })
`

### get platform of firefly wallet app
`
  FFWProxy.platform
`

or

`
  FFWProxy.getPlatform().then(platform=>{
    console.log(platform);
  }).catch(err=>{
    console.error(err);
  })
`

### get accountid 
`
  FFWProxy.accountId
`

or

`
  FFWProxy.getAccountId().then(accountid=>{
    console.log(accountid)
  }).catch(err=>{
    console.log(err)
  })
`

### get uuid of phone
`
  FFWProxy.uuid
`
or
`
  FFWProxy.getUuid().then(uuid=>{
    console.log(uuid);
  }).catch(err=>{
    console.error(err)
  })
`

### get locale of firefly wallet app
`
  FFWProxy.locale
`
or
`
  FFWProxy.getLocale().then(locale=>{
    console.log(locale)
  }).catch(err=>{
    console.error(err)
  })
`

### get contacts
`
  FFWProxy.contacts
`
or
`
  FFWProxy.getContacts().then(contacts=>{
    console.log(contacts)
  }).catch(err=>{
    console.error(err)
  })
`

### get account balance
`
FFWProxy.getBalances().then(balances=>{
  console.log(balances)
}).catch(err=>{
  console.error(err)
})
`

### sign data(data is JSON type)
`
let data = { accountid: 'GG', time: new Date().getTime() }
FFWProxy.sign(data).then(result=>{
  console.log(result)
}).catch(err=>{
  console.error(err)
})
`

### pay
`
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
`

### pathPayment
`
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
`

### trust
`
let code = 'XFF';
let issuer = 'GAZEX2USUBMMWFRZFS77VDJYXUFLXI4ZGFPWX6TBNZCSTEQWNLFZMXFF';
FFWProxy.trust(code,issuer).then(data=>{
    console.log('trust success')
  }).catch(err=>{
    console.error(err)
  })
`

### signXDR
`
let xdr = 'AAAAAEpng8wi7nIqz02/1bmC4I5jzz763WoadKIWy7M5MVc3AAAAZACHjkkAAAABAAAAAAAAAAAAAAABAAAAAAAAAAoAAAALaG9tZV9kb21haW4AAAAAAQAAABBodHRwOi8vZmNoYWluLmlvAAAAAAAAAAA='
FFWProxy.signXDR(xdr,"sign XDR").then(data=>{
    console.log(`signed XDR:${data}`)
  }).catch(err=>{
    console.error(err)
  })
`

### scan
`
FFWProxy.scan().then(data=>{
  console.log(`scan result: ${data}`);
  this.scanResult = true
}).catch(err=>{
  console.error(err)
})
`

### share
`
let options = {
  message: 'share image',
  files: ['base64 of image']
}
FFWProxy.share(options).then(data=>{
  console.log('share success')
}).catch(err=>{
  console.error(err)
})
`