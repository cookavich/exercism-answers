class Gigasecond {
    constructor(initialDate) {
        this.initialDate = initialDate;
        this.timeDifference = 1000000000
    }

    date() {
        let gigaSecond = new Date(0);
        return gigaSecond.setUTCSeconds(this.initialDate.setSeconds(this.initialDate.getSeconds() + this.gigaSecond));
    }
}

export default Gigasecond;