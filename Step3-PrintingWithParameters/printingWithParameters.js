const https = require('https')

function getAndPrintHTML (options) {
  https.get(requestOptions, function (response) {
    response.setEncoding('utf8')

    response.on('data', function (data) {
      console.log('Chunk Received.', data)

    response.on('end', function() {
      console.log("Response stream complete")
      })
    })
  })

}

var requestOptions = {
  host: 'systantris.github.io',
  path: '/http-examples/step1.html'
}

console.log(getAndPrintHTML())
