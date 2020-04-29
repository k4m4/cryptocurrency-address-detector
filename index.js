'use strict'
const arrify           = require('arrify');
const pAny             = require('p-any');
const pify             = require('pify');
const pTimeout         = require('p-timeout');
const bitcoinRegex     = require('bitcoin-regex');
const ethereumRegex    = require('ethereum-regex');
const litecoinRegex    = require('litecoin-regex');
const dogecoinRegex    = require('dogecoin-regex');
const bitcoincashRegex = require('bitcoincash-regex');
const dashRegex        = require('dash-regex');
const moneroRegex      = require('monero-regex');
const rippleRegex      = require('ripple-regex');
const neoRegex         = require('neo-regex');
const TronWeb          = require('tronweb');

function detectCrypto(address) {
	if (bitcoinRegex({exact: true}).test(address)) return 'BTC/BCH';
	else if (ethereumRegex({exact: true}).test(address)) return 'ETH';
	else if (litecoinRegex({exact: true}).test(address)) return 'LTC';
	else if (dogecoinRegex({exact: true}).test(address)) return 'DOGE';
	else if (dashRegex({exact: true}).test(address)) return 'DASH';
	else if (moneroRegex({exact: true}).test(address)) return 'XMR';
	else if (rippleRegex({exact: true}).test(address)) return 'XRP';
	else if (bitcoincashRegex.format('cashaddr', {exact: true}).test(address)) return 'BCH';
	else if (neoRegex({exact: true}).test(address)) return 'NEO';
	else if (TronWeb.utils.crypto.isAddressValid(address)) return 'TRON';
	else return 'Cryptocurrency could not be detected'
}

module.exports = (dests, opts) => {
  opts = opts || {};
  opts.timeout = typeof opts.timeout === 'number' ? opts.timeout : 5000;

  const p = pAny(arrify(dests).map(detectCrypto));
  return pTimeout(p, opts.timeout).catch(() => 'Cryptocurrency could not be detected');
};