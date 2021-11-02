function min([head, ...tail]: number[]): number {
  return tail.length === 0 ? head : min(head < tail[0] ? [head, ...tail.slice(1)] : tail);
}
console.log(min([5, 2, 3, 4, 6]));
console.log(min([]));
