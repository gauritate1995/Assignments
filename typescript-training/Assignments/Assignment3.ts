function calculateAverageMarks(
    studentName: string[],
    studentMarks: number[],
): void {
    let updatedMarks: number[] = [];
    let tempValue: number = 0;

    //using for..of loop to iterate each and get marks from the list
    for (let marks of studentMarks) {
        //Adding 10 to each student marks using assignment operators        
        marks += 10;
        //storing marks into another array for each student
        updatedMarks.push(marks);
    }

    //storing sum of marks for all student in temporary variable
    for (let updatedMark of updatedMarks) {
        // Adding all students updated marks
        tempValue = tempValue + updatedMark;
    }

    // Display initial message
    console.log("Updated Marks:")

    //Print each student updated marks using normal for loop
    for (let i: number = 0; i < studentName.length && i < updatedMarks.length; i++) {
        //printing the updated marks for each student
        console.log(`${studentName[i]} : ${updatedMarks[i]}`);
    }

    //calculate and print average marks of all students
    let averageMarks = (tempValue / 3).toFixed(1);
    console.log(`Average Marks: ${averageMarks}`);
}

calculateAverageMarks(["Suresh", "Mahesh", "Naresh"], [75, 80, 82]);