'use strict'

const getHTML = require('./http-functions');

function printHTML (html) {
  console.log(html)
}

let requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

console.log(getHTML(requestOptions, printHTML))
