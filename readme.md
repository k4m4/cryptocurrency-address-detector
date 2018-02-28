# cryptocurrency-address-detector [![Build Status](https://travis-ci.org/k4m4/cryptocurrency-address-detector.svg?branch=master)](https://travis-ci.org/k4m4/cryptocurrency-address-detector)

> Detect which cryptocurrency an address corresponds to.


## Install

```
~ ❯❯❯ npm install cryptocurrency-address-detector
```


## Usage

```js
const addressDetect = require('cryptocurrency-address-detector');

addressDetect().test('nodejsrocks 0x281055afc982d96fab65b3a49cac8b878184cb16');
//=> 'ETH'

addressDetect().test('nodejsrocks 1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp');
//=> 'BTC/BCH'

addressDetect({exact: true}).test('nodejsrocks 1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp foo');
//=> 'Crypto-currency could not be detected'

addressDetect({exact: true}).test('LQL9pVH1LsMfKwt82Y2wGhNGkrjF8vwUst');
//=> 'LTC'

'nodejsrocks rG2ZJRab3EGBmpoxUyiF2guB3GoQTwMGEC unicorn XbtvGzi2JgjYTbTqabUjSREWeovDxznoyh rainbow'.match(addressDetect());
//=> ['XRP', 'DASH']
```


## API

### addressDetect([options])

Returns the cryptocurrency that an address corresponds to.

#### options.exact

Type: `boolean`<br>
Default: `false` *(Detects any cryptocurrency address in a string)*

Only match an exact string. Useful with `RegExp#test()` to check what cryptocurrency a string is.


## Supported Cryptocurrencies

- [`Bitcoin/BTC`](https://github.com/kevva/bitcoin-regex) & [`Bitcoin Cash/BCH`](https://github.com/k4m4/bitcoincash-regex)
- [`Ethereum/ETH`](https://github.com/k4m4/ethereum-regex)
- [`Litecoin/LTC`](https://github.com/k4m4/litecoin-regex)
- [`Monero/XMR`](https://github.com/k4m4/monero-regex)
- [`Dash/DASH`](https://github.com/k4m4/dash-regex)
- [`Ripple/XRP`](https://github.com/k4m4/ripple-regex)
- [`NEO/NEO`](https://github.com/k4m4/neo-regex)
- [`Dogecoin/DOGE`](https://github.com/k4m4/dogecoin-regex)


## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)