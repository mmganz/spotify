let express = require('express'), // Express web server framework
    bodyParser = require('body-parser'),
    request = require('request'), // "Request" library
    querystring = require('querystring'),
    cookieParser = require('cookie-parser'), 
    // spotify = require('angular-spotify')
    // cors = require('cors'),
    server = express(),
    port = process.env.PORT || 8888;

var client_id = '1d3d7645fbd64ae39e73297e348556ce'; // Your client id
var client_secret = '1b483f4353fa430a84adf032c63c58bb'; // Your secret
var redirect_uri = 'http://localhost:8888/#/home'; // Your redirect uri

server.use('/', express.static(`${__dirname}/public/`))
// server.use(cors(handlers.corsOptions))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:true}))

server.listen(port, function(){
    console.log(`server is running on port: ${port}`)
})