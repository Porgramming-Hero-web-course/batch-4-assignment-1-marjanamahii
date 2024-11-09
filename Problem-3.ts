{
  //

  function countWordOccurrences(sentence: string, word: string): number {
    const lowerCaseWord = word.toLowerCase();
    const lowerCaseSentence = sentence.toLowerCase().split(" ");
    let count = 0;

    for (const words of lowerCaseSentence) {
      if (words === lowerCaseWord) {
        count++;
      }
    }

    return count;
  }

  // Sample Input
  console.log(countWordOccurrences("I love typescript", "typescript"));

  //
}
