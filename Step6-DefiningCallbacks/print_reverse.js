'use strict'

const getHTML = require('./http-functions')

function printReversed (html) {
  let arr = html.split("")
  return arr.reverse().join("")
}


let requestOptions = {
  host: 'systantris.github.io',
  path: '/http-examples/step6/reverse.html'
}

console.log(getHTML(requestOptions, printReversed))
