function Bob() {
    this.hey = function(input) {
        if(!isNaN(input.replace(/[.,\/#!$%?\^&\*;:{}=\-_`~()]/g,"").replace(/\s/g,'')) && input.slice(-1) === '?')
            return 'Sure.';

        if(input.toUpperCase() === input && isNaN(input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s/g,'')))
            return 'Whoa, chill out!';

        if(input.slice(-1) === '?')
            return 'Sure.';

        if(!input.replace(/\s/g, ''))
            return 'Fine. Be that way!';

        return 'Whatever.';
    };
}

module.exports = Bob;
