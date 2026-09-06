interface empInfo {
    empNo: number,
    empName: string,
    salary: number,
    experience: number,
    rating: number        
}

let empRecords: empInfo[] = [
    {
        empNo: 1,
        empName: "Alice Johnson",
        salary: 75000.0,
        experience: 5.1,
        rating: 4.2,
    }, {
        empNo: 2,
        empName: "Bob Smith",
        salary: 68000.0,
        experience: 3.2,
        rating: 3.8
    }, {
        empNo: 3,
        empName: "Carol Davis",
        salary: 82000.0,
        experience: 7.1,
        rating: 4.5
    }, {
        empNo: 4,
        empName: "David Brown",
        salary: 90000.0,
        experience: 10.2,
        rating: 2.5
    }, {
        empNo: 4,
        empName: "Eva Green",
        salary: 60000.0,
        experience: 2.4,
        rating: 3.5
    }
];


let variablePay: number = 0;
let bonus: number = 0;
let rewards: number = 0;
let empValue: Map<string, number> = new Map();

//using for..of loop to iterate each and every empRecords in given list
for (let emp of empRecords) {
    //checking hike rating, variable and bonus
    if (emp.rating >= 4.0) {
        variablePay = 15.0;
        bonus = 1500;
    } else if (emp.rating >= 3 && emp.rating < 4) {
        variablePay = 10.0;
        bonus = 1200;
    } else if (emp.rating < 3.0) {
        variablePay = 3.0;
        bonus = 300;
    }

    //if Employees with Experience >= 5 Years get extra Reward of 5000;
    if (emp.experience > 5) {
        rewards = 5000;
    }

    //formula to calculate hike and hike %
    let hike: number = (emp.salary * variablePay) + bonus + rewards;
    let hikePercent = hike / emp.salary;

    empValue.set(emp.empName, hikePercent);
}

console.log(empValue);