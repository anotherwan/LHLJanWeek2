const https = require('https')

function getHTML (options, callback) {
  https.get(options, function (response) {
    response.setEncoding('utf8')

    response.on('data', function (data) {
      console.log(printHTML(data))

    response.on('end', function() {
      console.log("Response stream complete")
      })
    })
  })
}

function printHTML (html) {
  console.log(html)
}
console.log(printHTML())

var requestOptions = {
  host: 'systantris.github.io',
  path: '/http-examples/step1.html'
}

console.log(getHTML(requestOptions))
