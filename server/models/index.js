const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://lex:password@ds123929.mlab.com:23929/warbler", {
  keepAlive: true
});

module.exports.User = require("./user");
module.exports.Message = require("./message");
