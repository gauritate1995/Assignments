function isprimeNumber(num: number): boolean {
    let count: number = 0;
    //using for loop to iterate each and every value in list
    for (let j: number = 1; j <= num; j++) {
        if (num % j === 0) {
            ++count;
        }
    }

    if (count === 2) {
        return true;    //checking the number has exactly two divisors or not
    } else if (count === 1) {
        return false;   //checking if the number has only divisor 1.
    } else {
        return false;   //checking if the number has more than two divisors
    }

}

console.log(isprimeNumber(7));
console.log(isprimeNumber(25));
console.log(isprimeNumber(1));


