'use strict'

const https = require('https')

module.exports = function getHTML (options, callback) {
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
