'use strict'

const https = require('https')

const options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
}

let callback = function(response) {
  console.log('I\'m response handler callback!')

  response.on('data', function(chunk) {
    console.log(`[-- CHUNK OF LENGTH ${chunk.length} --]`)
    console.log(chunk.toString())
  })
}

console.log("I'm about to make the request!")

https.request(options, callback).end()

console.log("I've made the request!")
