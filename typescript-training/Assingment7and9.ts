//Assignment a:
const sentence: string = "Java programming is fun and challenging";

//1. Count the total number of words in the sentence.
console.log("Total word count: " + sentence.length);

//2. Print the sentence words in reverse order.
let value: string[] = sentence.split(" ");
let reverseValue: string = " ";
// Using for loop to iterate each value
for (let i: number = value.length - 1; i >= 0; i--) {
    reverseValue = reverseValue + " " + value[i];
}
console.log(`Reverse of the above sentence is: ${reverseValue}`);

//3. Convert the first character of each word to uppercase and print original sentence
let uppercaseValue: string = "";
// Using for loop to iterate each value
for (let i: number = 0; i < value.length; i++) {
    let word = value[i]!.charAt(0).toUpperCase() + "" + value[i]!.substring(1);
    uppercaseValue = uppercaseValue + " " + word;
}
console.log(`Reverse of the above sentence is: ${uppercaseValue}`);


//Assignment b:
let sentence2: string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";
let value2: string[] = sentence2.split(" ");
let occurrences: number = 0;
let countWord: number = 0;
let indexValue: string[] = [];
// Using for loop to iterate each value
for (let i: number = 0; i < value2.length; i++) {
    if (value2[i]!.includes("Java")) {
        countWord = value2[i]!.length;

        ++occurrences;
    }
    indexValue.push(value2[i]!);
}

//1. Find total number of occurrences
console.log(`Total occurences of 'Java' : ${occurrences}`);
//2. Print count and Indexes of the word
console.log(`Count: ${countWord} and Index of 'Java' : ${indexValue.indexOf("Java")}`);

//Assignment d:
let row: number = 5;

//using for loop to iterate in rows
for (let i: number = row; i >= 1; i--) {
    let rowValue: string = "";
    let space: string = "";
    for (let j: number = i; j > 1; j--) { //using for loop to iterate in to add space
        rowValue = rowValue + " ";
    }
    for (let k: number = row; k >= i; k--) { //using for loop to iterate in to print star
        rowValue = rowValue + "*";
    }
    //printing the star pattern
    console.log(rowValue);
}