const https = require('https')

function getAndPrintHTML () {

  var requestOptions = {
    host: 'systantris.github.io',
    path: '/http-examples/step1.html'
  }
  var buffered = ''
  https.get(requestOptions, function (response) {
    response.setEncoding('utf8')

    response.on('data', function (data) {
      console.log(data)
      var part = data.toString()
      buffered += part
      console.log('Data Buffered.', part)

    response.on('end', function() {
      console.log("Response stream complete")
    })
    })
  })

}
console.log(getAndPrintHTML())
