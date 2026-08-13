let value: number = 5;

//using for loop to iterate in rows
for (let i: number = 1; i <= value; i++) {
    let rowValue: string = "";
    for (let j: number = i; j < value; j++) { //using for loop to iterate in to add space
        rowValue = rowValue + " ";
    }
    for (let k: number = 1; k <= i; k++) { //using for loop to iterate in to print star
        rowValue = rowValue+ " "+ k + " ";
    }
    //printing the star pattern
    console.log(rowValue);
}   

for (let i: number = value; i >= 1; i--) {
    let rowValue2: string = "";
    for (let j: number = i; j <= value; j++) { //using for loop to iterate in to add space
        rowValue2 = rowValue2 + " ";
    }
    for (let k: number = 1; k < i; k++) { //using for loop to iterate in to print star
        rowValue2 = rowValue2+ " " + k + " ";
    }
    //printing the star pattern
    console.log(rowValue2);
}