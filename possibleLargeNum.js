//Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.
//Since the result may be very large, so you need to return a string instead of an integer.
//Example 1: Input: nums = [10,2] Output: "210". Example 2:Input: nums = [3,30,34,5,9], Output: "9534330"
console.log("\n5. Given a list of non-negative integers nums, arrange them such that they form the largest number and return it. Since the result may be very large, so you need to return a string instead of an integer. Example 1: Input: nums = [10,2] Output: '210'. Example 2:Input: nums = [3,30,34,5,9], Output: '9534330' ")
function possibleLargeNo (arr){
let temp = [], arrCopy= arr;
let a=arr.join('')
for (let k=0; k<arr.length;k++){            
    for(let j=k; j<arr.length; j++){        //to pick required part of the arr for shift(while every iteration starting index hold max value, so we can skip that and start from next index i.e 'k')
        let x=arr[arr.length-1]             //tracking last index value in 'x'
        for (let i=arr.length-1; i>k; i--){ //shifting
        arr[i]=arr[i-1]                     
        }
    arr[k]=x                                //assigning starting index value with last value(which tracked in 'x')
    b= arr.join('')                         //converting shifted arr to string 
    c= arr.join(' ')                
    if(parseInt(a)< parseInt(b)){           //comparing available arr(string) with shifted arr (string)
    a=b;                                    //if value less than new value, updated with new one
    temp = c.split(' ')                     //tracking updated array
    }
    }
arr= temp;
}
console.log("\nPossible large number using",arrCopy,"is",a)
}
possibleLargeNo([3,30,34,5,9]);
possibleLargeNo([3,300,31,50,9]);
