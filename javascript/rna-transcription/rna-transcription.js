function DnaTranscriber() {
    this.dnaRna = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U'
    };

    this.toRna = function(input) {
        var rnaStr = '';
        if(input.length > 1) {
            input.split('');
            for (var i = 0; i < input.length; i++)
                rnaStr += this.dnaRna[input[i]];
            return rnaStr;
        }

        return this.dnaRna[input]
    };
}

module.exports = DnaTranscriber;