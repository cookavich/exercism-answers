class Bob {
    hey(message) {
        if (this.isSilent(message))
            return 'Fine. Be that way!';
        if (this.isShouting(message) && message.match(/[a-zA-Z]/))
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
}
export default Bob;