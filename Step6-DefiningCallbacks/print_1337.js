'use strict'

const getHTML = require('./http-functions')

function print1337 (html) {
  return html.replace(/a/g, '4').replace(/e/g, '3').replace(/l/g, '1').replace(/o/g, '0').replace(/s/g, '5').replace(/t/g, '7').replace(/ck/g, 'x')
}


let requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
}

console.log(getHTML(requestOptions, print1337))
