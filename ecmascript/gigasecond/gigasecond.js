const timeDifference = 1000000000;

class Gigasecond {
    constructor(initialDate) {
        this.initialDate = new Date(initialDate);
        this.initialDate.setUTCSeconds(this.initialDate.getUTCSeconds() + timeDifference);
        this.gs = this.initialDate;
    }

    date() {
        return this.gs;
    }
}

export default Gigasecond;