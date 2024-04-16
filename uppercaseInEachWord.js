// Find the uppercase letter in each word
console.log("\n2. Find the uppercase letter in each word");
function uppercaseLetter(a) {
  let b = a.split("");
  let upperCase = b.filter((a) => {
    if(a>='A' || a == " "){
    return a == a.toUpperCase() || a == " ";
    }
  });
  console.log("\nGiven sentence:", a,  "\nUppercase letters in each word:", upperCase.join('') );
}
uppercaseLetter("Hi WelCome");
uppercaseLetter("Have a GooD DaY!!");
uppercaseLetter("yoUR TABle NO is AP236");