class Cipher {
    constructor(key) {
        this.key = key === undefined ? 'dddddddddd' : this._validateKey(key);
    }

    encode(plaintext) {
       const encoded = plaintext
        .split('')
        .map(letter => letter.charCodeAt(0) + 3);
        return String.fromCharCode(...encoded);
    }

    decode(encoded) {
        const decoded = encoded
            .split('')
            .map(letter => letter.charCodeAt(0) - 3);
        return String.fromCharCode(...decoded);
    }

    _validateKey(key) {
        switch (true) {
            case key.toUpperCase() === key:
            case Number.isInteger(key):
            case key.trim().length === 0:
                throw new Error('Bad key');
                break;
            default:
                return key;
        }
    }
}

export default Cipher;