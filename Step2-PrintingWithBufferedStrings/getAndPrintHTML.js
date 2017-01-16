'use strict'
const https = require('https')

function getAndPrintHTML () {
  let buffered = ''

  let requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  }

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8')

    response.on('data', function (data) {
      let part = data.toString()
      buffered += part
      // console.log('Data Buffered.')
    })

    response.on('end', function() {
      console.log("Response stream complete.", buffered)
    })
  })

}
console.log(getAndPrintHTML())
