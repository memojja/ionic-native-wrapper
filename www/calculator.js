var exec = require('cordova/exec');

module.exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'calculator', 'coolMethod', [arg0]);
};

module.exports.add = function (arg0,success,error) {
    exec(success,error,'calculator','add',[arg0])
};

module.exports.substract = function (arg0,success,error) {
    exec(success,error,'calculator','substract',[arg0])
};