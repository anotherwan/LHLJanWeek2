'use strict'
const https = require('https')

function getAndPrintHTML () {

  let requestOptions = {
    host: 'systantris.github.io',
    path: '/http-examples/step2.html'
  }
  let buffered = ''
  https.get(requestOptions, function (response) {
    response.setEncoding('utf8')

    response.on('data', function (data) {
      console.log(data)
      let part = data.toString()
      buffered += part
      console.log('Data Buffered.', part)

    response.on('end', function() {
      console.log("Response stream complete")
    })
    })
  })

}
console.log(getAndPrintHTML())
