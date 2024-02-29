
function printOddNumberPattern(n) {
  if (n < 0) {
    console.log("Please enter a non-negative number.");
    return;
  }

  for (let i = 0; i <= n; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}
const numberToPrintUpTo = 11;
printOddNumberPattern(numberToPrintUpTo);




