# 萤火钱包轻应用接口api


## 示例

### 安装
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

### 获取萤火钱包版本号
`
  FFWProxy.version
`
或者
`
  FFWProxy.getVersion().then(version=>{
    console.log(version)
  }).catch(err=>{
    console.error(err)
  })
`

### 获取当前运行平台
`
  FFWProxy.platform
`
或者
`
  FFWProxy.getPlatform().then(platform=>{
    console.log(platform);
  }).catch(err=>{
    console.error(err);
  })
`

### 获取当前账户恒星公钥
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

### 获取当前设备uuid(做了sha259)
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

### 获取当前萤火钱包的语言
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

### 获取联系人信息
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

### 获取当前账户余额
`
FFWProxy.getBalances().then(balances=>{
  console.log(balances)
}).catch(err=>{
  console.error(err)
})
`

### 数据签名，待签名的数据必须为JSON格式
`
let data = { accountid: 'GG', time: new Date().getTime() }
FFWProxy.sign(data).then(result=>{
  console.log(result)
}).catch(err=>{
  console.error(err)
})
`

### 支付
`
FFWProxy.pay({
  destination: 'GCKKUWHT3ILQWWKQ3MUOCAC7LRJNLCOES7SEI6TCQVGZD4GCULO2PGNU', 
  code: 'XFF', 
  issuer: 'GAZEX2USUBMMWFRZFS77VDJYXUFLXI4ZGFPWX6TBNZCSTEQWNLFZMXFF', 
  amount: 1, 
  memo_type: 'TEXT', //取值见stellar的api文档
  memo: 'Hello,FFW'
}).then(data=>{
  console.log('pay success');
}).catch(err=>{
  console.error(err)
})
`

### 路径支付
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

### 授信
`
let code = 'XFF';
let issuer = 'GAZEX2USUBMMWFRZFS77VDJYXUFLXI4ZGFPWX6TBNZCSTEQWNLFZMXFF';
FFWProxy.trust(code,issuer).then(data=>{
    console.log('trust success')
  }).catch(err=>{
    console.error(err)
  })
`

### XDR签名（签名后的XDR可以提交到horizon）
`
let xdr = 'AAAAAEpng8wi7nIqz02/1bmC4I5jzz763WoadKIWy7M5MVc3AAAAZACHjkkAAAABAAAAAAAAAAAAAAABAAAAAAAAAAoAAAALaG9tZV9kb21haW4AAAAAAQAAABBodHRwOi8vZmNoYWluLmlvAAAAAAAAAAA='
FFWProxy.signXDR(xdr,"签名XDR").then(data=>{
    console.log(`签名后的XDR:${data}`)
  }).catch(err=>{
    console.error(err)
  })
`

### 扫描
`
FFWProxy.scan().then(data=>{
  console.log(`扫描结果：${data}`);
  this.scanResult = true
}).catch(err=>{
  console.error(err)
})
`

### 分享
`
let options = {
  message: '分享图片',
  files: ['base64格式的图片']
}
FFWProxy.share(options).then(data=>{
  console.log('share success')
}).catch(err=>{
  console.error(err)
})
`