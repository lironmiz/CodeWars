function findOdd(A) {
  let count = {};
  for (let i = 0; i < A.length; i++) {
    if (count[A[i]]) {
      count[A[i]]++;
    } else {
      count[A[i]] = 1;
    }
  }
  for (let key in count) {
    if (count[key] % 2 !== 0) {
      return Number(key);
    }
  }
}
