interface customerDetails{
    customerName : string,
    creditScore : number,
    income : number,
    isEmployed :boolean,
    debtToIncomeRatio : number
}

let customerInfo : customerDetails = {
    customerName: "John Doe",
    creditScore: 720,
    income : 55000.0,
    isEmployed : true,
    debtToIncomeRatio : 35.0
};

//Checking whether user is eligible to get the loan or not
if (customerInfo.creditScore > 750){
    console.log("The loan is approved.");
}else if (customerInfo.creditScore >=650 && customerInfo.creditScore<=750){
    if(customerInfo.income >= 50000){
        if(customerInfo.isEmployed === true){
            if(customerInfo.debtToIncomeRatio <= 40){
                console.log("The loan is approved.");
            }else{
                console.log("The loan is denied.");
            }
        }
    }
}else if(customerInfo.creditScore < 650){
    console.log("The loan is denied.");
}