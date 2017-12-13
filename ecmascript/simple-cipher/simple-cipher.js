const alphabet = "abcdefghijklmnopqrstuvwxyz";

class Cipher {
  constructor(key) {
    this.key = key === undefined ? 'dddddddddd' : this._validateKey(key);
  }

  encode(plaintext) {
    if (this.key.length < plaintext.length) {
      this._extendKey(plaintext);
    }
    return plaintext.split('')
      .map((letter, index) => this._rotateForward(letter, this.key[index]))
      .join('');
  }

  decode(encoded) {
    return encoded.split('')
      .map((letter, index) => this._rotateBack(letter, this.key[index]))
      .join('');
  }

  _rotateForward(letter, keyEntry) {
    const distance = alphabet.indexOf(keyEntry);
    let newPosition = alphabet.indexOf(letter) + distance;
    if (newPosition > 25) {
      newPosition = newPosition - 26
    }
    return alphabet[newPosition];
  }

  _rotateBack(letter, keyEntry) {
    const distance = alphabet.indexOf(keyEntry);
    let newPosition = alphabet.indexOf(letter) - distance;
    if (newPosition < 0) {
      newPosition = newPosition + 26
    }
    return alphabet[newPosition];
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

  _extendKey(plaintext) {
    while (this.key.length < plaintext.length) {
      this.key = this.key + this.key;
    }
  }
}

export default Cipher;