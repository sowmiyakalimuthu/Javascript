// Rewrite the words in sentence if there is vowel word present
// Examples: Input ->This is a java, Output->iths is a ajav
console.log("\n3. Rewrite the words in sentence if there is vowel word present","\n","Examples: Input ->This is a java, Output->iths is a ajav")
const rewriteVowel = (a) => {
    let vowelLet = ['a','e','i','o','u','A','E','I','O','U'], res='', resWord='';//vowels to compare
    let b = a.split(" ")                                       //to convert sentence to array of words
    for (let word of b) {                                       //to access each word
        word = word.split('')
        for (let i=0; i< word.length;i++){                        //to access each letter of words
            if (vowelLet.includes(word[i])){                     //check whether the letter is vowel
                let k=i;
                let temp = word[i]; 
                for (let j=0; j<=k;j+=2)                        //to figureout odd places
                if(i==j){                                       //when all previous odd places have vowels and respective vowel letter already in odd place, it set to its own place
                    word[j] = word [i]
                } else if((vowelLet.includes(word[j])) && j == k-1) {//useful when we have all letters as vowels=> even places left empty and odd places filled with vowels
                        k+=2;
                        word[i]=' '
                } else if (!vowelLet.includes(word[j]) && k>word.length){
                        word[j] = temp
                        word[k-2] = ' '
                } else if(!vowelLet.includes(word[j])){            //to confirm whether odd places have vowels
                            for (let x=k; x>j; x--){                //shifting vowels
                                word[x] = word [x-1]
                            }
                            word[j] = temp;
                } 
            }
            resWord=word.join('').toLowerCase()
        }
        res+= resWord+" "
    }
    console.log('\nGiven sentence:',a)
    console.log('\nRewrited sentence:',res)
}
rewriteVowel('This is a java')
rewriteVowel('Most commonly used language')
rewriteVowel('Following are vowels aeiou')