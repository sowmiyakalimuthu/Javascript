//1. Find the sum of following multi dimentional array elements. [4,6,[6,7,[8,9]],true,"15",{name:"hello"}]
console.log('\n1. Find the sum of following multi dimentional array elements. [4,6,[6,7,[8,9]],true,"15",{name:"hello"}]')
let arr = [4,6,[6,7,[8,9]],true,"15",{name:"hello"}], sum = 0, res = [];
arr = arr.flat(Infinity)
for (let i = 0; i < arr.length; i++){
    if(arr[i] == true) {
        sum += arr[i];
    } else if(!isNaN(arr[i])){
        sum += parseInt(arr[i]);
    } 
}
console.log("\nSum :", sum)