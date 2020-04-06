const crypto = require('crypto')

function CryptoSHA1(texto){
    const text = crypto.createHash('sha1').update(texto).digest('hex')
    console.log(text)
  }
  
  CryptoSHA1("why do we never have time to do it right, but always have time to do it over? unknown")