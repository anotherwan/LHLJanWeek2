'use strict'

const https = require('https')

function getHTML (options, callback) {
  https.get(options, function (response) {
    response.setEncoding('utf8')

    response.on('data', function (data) {
      console.log(callback(data))

    response.on('end', function() {
      console.log("Response stream complete")
      })
    })
  })
}

function printHTML (html) {
  console.log(html)
}
// console.log(printHTML())

let requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
}

console.log(getHTML(requestOptions, printHTML))
