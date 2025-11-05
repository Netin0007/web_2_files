const range = function (start, end, step = 1) {
  if (end === undefined) {
    [start, end] = [1, start];
  }

  const isAsc = start < end;
  const intervalo = [];

  for (let i = start; isAsc ? i <= end : i >= end; isAsc ? i += step : i -= step) {
    intervalo.push(i);
  }

  return intervalo;
}

console.log(range(4));     // [1, 2, 3, 4]
console.log(range(3, 7));  // [3, 4, 5, 6, 7]
console.log(range(7, 3));  // [7, 6, 5, 4, 3]
