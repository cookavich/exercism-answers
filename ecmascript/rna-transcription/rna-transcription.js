class Transcriptor {
    constructor() {
        this.dnaRna = {
            'G': 'C',
            'C': 'G',
            'T': 'A',
            'A': 'U'
        };
    }

    toRna(str) {
        let rnaStr = '';
        if(str.length > 1) {
            str.split('');
            for(let i = 0; i < str.length; i++) {
                if(str[i] in this.dnaRna !== true)
                    return new Error('Invalid input DNA.');
                rnaStr += this.dnaRna[str[i]];
            }
            return rnaStr;
        }
        return this.dnaRna[str];
    }
}
export default Transcriptor;