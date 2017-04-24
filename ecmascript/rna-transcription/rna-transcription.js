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
        return str.split('').map((currentItem) => {
            if(this.dnaRna[currentItem] === undefined)
                throw new Error('Invalid input DNA.');
            return this.dnaRna[currentItem];
        }).join('');
    }
}
export default Transcriptor;