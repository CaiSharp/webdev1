//logs TXT from Website
var dns = require('dns');
dns.resolve('caisharp.cc', 'TXT', function(err, addresses) {
    console.log(addresses);
});