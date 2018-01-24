const EasyRabbit = require('./easy-rabbit');

module.exports = function(options, implOptions) {
  return new EasyRabbit(options, implOptions);
};

module.exports.createConnection = function(options, implOptions) {
  return new EasyRabbit(options, implOptions);
};
