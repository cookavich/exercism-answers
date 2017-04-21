class Hamming {
    compute(str1, str2) {
        let distance = 0;
        if(str1.length != str2.length)
            return new Error('DNA strands must be of equal length.');
        for (let i = 0; i < str1.length; i++)
            if(str1[i] != str2[i])
                distance++;
        return distance;
    }
}

export default Hamming;