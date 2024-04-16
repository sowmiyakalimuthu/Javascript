// Find the most repeated even no in given array
console.log("\n1. Find the most repeated even no in given array");
const repeatedEvenNum = (a) => {
  let temp = 0,
    evenNum = [],
    count = 0,
    res = "",
    trackElement = "";
  for (let b of a) {
    if (b % 2 == 0 && !trackElement.includes(b)) {
      trackElement += b;
      evenNum = a.filter((a) => {
        return a == b;
      });
      if (evenNum.length > temp) {
        res = b;
        temp = evenNum.length;
      } else if (evenNum.length == temp) {
        res += " " + b;
      }
    }
  }
  res.length > 1 ? console.log("\nGiven array",a,"\n\n", "Most repeated even Nos :", res, "(each repeated",temp,"times)") : console.log("\nGiven array", a,"\n\n", "Most repeated even No :", res, "(repeated", temp, "times)" );
};
repeatedEvenNum([1, 2, 3, 4, 6, 6, 2, 8, 8, 8]);
repeatedEvenNum([1, 2, 3, 4, 6, 6]);
repeatedEvenNum([1, 2, 23, 50, 3, 4, 30, 50, 4, 6, 6]);