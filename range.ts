function range(num: number): number[] {
  return num === 0 ? [] : [...range(num - 1), num - 1];
}
console.log(range(10));
//[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
