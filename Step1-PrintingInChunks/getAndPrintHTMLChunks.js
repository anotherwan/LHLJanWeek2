const https = require('https')

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'systantris.github.io',
    path: '/http-examples/step1.html'
  }

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
console.log(getAndPrintHTMLChunks())
