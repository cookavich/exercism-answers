var HelloWorld = function() {};

HelloWorld.prototype.hello = function(input) {
    if (input === undefined || input === '')
        return 'Hello, world!';
    else
        return 'Hello, ' + input + '!';
};

module.exports = HelloWorld;