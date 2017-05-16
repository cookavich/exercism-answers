class Bob {
    hey(message) {
        if (this.isSilent(message))
            return 'Fine. Be that way!';
        if(this.isOnlyNumbers(message))
            return this.numbersResult(message);
        if (this.isShouting(message))
            return 'Whoa, chill out!';
        if (this.isQuestion(message))
            return 'Sure.';
        return 'Whatever.'
    }

    isShouting(message) {
        return message === message.toUpperCase();
    }

    isQuestion(message) {
        return message.slice(-1) === '?';
    }

    isSilent(message) {
        return message.trim().length === 0;
    }

    isOnlyNumbers(message) {
        return /^[0-9,.? ]*$/.test(message);
    }

    numbersResult(message) {
        if(this.isQuestion(message))
            return 'Sure.';
        return 'Whatever.';
    }
}
export default Bob;