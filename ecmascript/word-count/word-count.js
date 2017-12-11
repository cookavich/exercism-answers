class Words {
  count(words) {
    return words.replace(/[\t\n]+/g, ' ')
      .split(' ')
      .map(word => word.toLowerCase())
      .filter(word => word.trim().length > 0)
      .reduce((tally, word) => {
        tally[word] = (+tally[word] || 0) + 1
        return tally;
      }, {});
  }
}


export default Words;