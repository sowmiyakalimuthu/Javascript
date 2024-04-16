//Rewrite the words such that number comes first symbol next and alphabet. If we have hello1@ Then expected was 1@hello
console.log("\n4. Rewrite the words such that number comes first symbol next and alphabet. If we have hello1@ Then expected was 1@hello")
const rewriteOrder = (a) => {
    let arr = a.split(''), res='';
    let num = arr.filter ((a) => {
        return !isNaN(a)
    })
    // console.log(num)
    let sym = arr.filter ((a) => {
        if(isNaN(a)){
        return a <'A'
        }
    })
    // console.log(sym)
    let alpha = arr.filter ((a) => {
        if(isNaN(a)){
        return a >'A'
        }
    })
    // console.log(alpha)
    res= num.join('')+ sym.join('')+ alpha.join('')
    console.log("\nGiven word:",a,"\nRewrited word:",res)
}
rewriteOrder('Hello12@')
rewriteOrder('Welcome2Js!!')