var whitelist = ['http://localhost:8888', 'http://portal.boisecodeworks.com']; //
var corsOptions = {
  origin: function (origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  }
};



module.exports = {
  corsOptions,
}