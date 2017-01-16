'use strict'

const getHTML = require('./http-functions')

function printLowerCase (html) {
  let string = html.toString()
  // console.log(string)
  let lowercase = string.toLowerCase()
  // console.log(lowercase)
  return lowercase
}


let requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
}

console.log(getHTML(requestOptions, printLowerCase))
