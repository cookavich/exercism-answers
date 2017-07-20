class PerfectNumbers {
    classify(int) {
        if(int <= 0)
            throw new Error('Classification is only possible for natural numbers.');
        else if (this.getAliquotSum(int) === int)
            return 'perfect';
        else if (this.getAliquotSum(int) > int)
            return 'abundant';
        else
            return 'deficient';
    }

    getAliquotSum(int) {
        let aliquotSum = 0;
        for (let i = 0; i < int; i++)
            if (i !== int && int % i === 0)
                aliquotSum += i;
        return aliquotSum;
    }
}

export default PerfectNumbers;