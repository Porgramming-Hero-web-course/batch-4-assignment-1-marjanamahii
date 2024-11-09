{
  //

  function removeDuplicates(numbers: number[]): number[] {
    return numbers.filter((num, index) => numbers.indexOf(num) === index);
  }

  // Sample Input
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

  //
}
