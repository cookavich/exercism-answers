class Words {
  count(words) {
    return words.trim()
      .toLowerCase()
      .replace(/[\t\n]+/g, ' ')
      .split(/\s+/)
      .reduce((tally, word) => {
        tally[word] = (+tally[word] || 0) + 1
        return tally;
      }, Object.create(null));
  }
}


export default Words;