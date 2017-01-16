'use strict'

const request = require('request')
const fs = require('fs')

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function (err) {
    throw err;
  })
  .on('response', function (response) {
    console.log('Downloading image...')
    console.log('Response Status Code: ', response.statusMessage, 'Content Type: ', response.headers['content-type']);
  })
  .pipe(fs.createWriteStream('./future.jpg'))
  .on('end', function () {
    console.log('Download complete.')
  })
