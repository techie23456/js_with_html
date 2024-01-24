let str = "my name is avinash";
let strArr = str.split(" ")
let reversedWordArr = [];

let findReverse = (myWord) =>{

    let rev = "";
        for(i=0;i<myWord.length;i++)
        {
        let temp = myWord[i];
        rev = temp + rev;   
        }
    return rev;
}

strArr.forEach((item) =>
{
    let temp = findReverse(item);
    reversedWordArr.push(temp);
});

let reverse_word_string = reversedWordArr.join(" ");
console.log("Reversed string is : ",reverse_word_string);