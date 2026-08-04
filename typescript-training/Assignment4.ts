function totalNumberOTransaction(transaction: Set<number>, credit: number, debit: number): void {
    let totalcreditedAmout: number = 0;
    let totaldebitedAmout: number = 0;
    let suspiciousCount: number = 0;

    //using for...of loop to iterate each and every amount in give list
    for (let transactionAmount of transaction) {
        //checking total number of credit and debit transaction
        if (transactionAmount > 0) {
            //Incrementing credit count
            credit = ++credit;

            //calculate total amount credited in bank
            totalcreditedAmout = transactionAmount + totalcreditedAmout;
        } else {
            //Incrementing debit count
            debit = ++debit;

            //calculate total amount debited in bank
            totaldebitedAmout = transactionAmount + totaldebitedAmout;
        }

        //checking transaction limit if execeeds
        if (transactionAmount > 10000 || transactionAmount < -10000) {
            suspiciousCount = ++suspiciousCount;
            //printing suspiciou credit/debit amount
            console.log(`Suspicious credit/ debit Transaction with Amount: ${transactionAmount}`);
        }
    }

    //4. If any transaction limit exceeds +/- 10000 then print total number of suspicious transactions
    console.log(`Total number of Suspicious Amount: ${suspiciousCount}`);

    //1. Print total number of credit and debit transactions completed
    console.log(`Total number of Credit transaction: ${credit}`);
    console.log(`Total number of Debit transaction: ${debit}`);

    //2. Print the total amount credited and debited in account
    totaldebitedAmout = totalcreditedAmout + totaldebitedAmout;

    //print the total amount credited in bank
    console.log(`Total amount of Credited transaction: ${totalcreditedAmout}`);
    console.log(`Total amount of Debited transaction: ${totaldebitedAmout}`);

    //calculate total amount remaining at the end in Bank Account
    let totalAmount = totalcreditedAmout - totaldebitedAmout;

    //3. Print total amount remaining at the end in Bank Account
    console.log(`Total amount remaining in Bank: ${totalAmount}`);
}

function totalAmountCredited(transaction: Set<number>): void {

}

let bankTransaction: Set<number> = new Set();
bankTransaction.add(50000);
bankTransaction.add(-2000);
bankTransaction.add(3000);
bankTransaction.add(-15000);
bankTransaction.add(-200);
bankTransaction.add(-300);
bankTransaction.add(4000);
bankTransaction.add(-3000);

let creditCount: number = 0;
let debitCount: number = 0;

totalNumberOTransaction(bankTransaction, creditCount, debitCount);
totalAmountCredited(bankTransaction);