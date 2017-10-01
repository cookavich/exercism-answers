function Hamming() {
    this.compute = function(strandOne, strandTwo) {
        var distance = 0;

        if(strandOne.length !== strandTwo.length)
            throw new Error('DNA strands must be of equal length.');

        for(var i = 0; i < strandOne.split('').length; i++)
            if(strandOne.split('')[i] !== strandTwo.split('')[i])
                distance++;

        return distance;
    };
}

module.exports = Hamming;