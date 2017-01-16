'use strict'

const getHTML = require('./http-functions')

function printUpperCase (html) {
  let string = html.toString()
  // console.log(string)
  let uppercase = string.toUpperCase()
  // console.log(uppercase)
  return uppercase
}


let requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
}

console.log(getHTML(requestOptions, printUpperCase))
