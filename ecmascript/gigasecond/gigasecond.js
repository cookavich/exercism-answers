class Gigasecond {
    constructor(initialDate) {
        this.initialDate = new Date(initialDate);
        this.initialDate.setUTCSeconds(this.initialDate.getUTCSeconds() + 1000000000);
        this.gs = this.initialDate;
    }

    date() {
        return this.gs;
    }
}

export default Gigasecond;