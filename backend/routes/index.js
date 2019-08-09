var express = require('express');

var router = express.Router();
var bitcoin = require('../node_modules/bitcoinjs-lib/')

function rng () { return Buffer.from('HelloWorldHelloWsrldHelloWorldXD') }

var keyPair = bitcoin.ECPair.makeRandom({ rng: rng });
var address = keyPair.getAddress();
var pubkey = keyPair.pubkey;
var privateKey = keyPair.toWIF();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).json("Server is up and running")
});

router.post('/generate', (req, res, next)=> {
  console.log(req.body);
  res.status(200).json({
    message: "Deterministic Key",
    address: address,
    pubkey: pubkey,
    privateKey: privateKey   
  })
})

module.exports = router;
