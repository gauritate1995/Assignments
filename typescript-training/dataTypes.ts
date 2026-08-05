//Map => Map is a data type that represents a collection of key-value pairs,
//where key and value can be any data type, but key should be unique. 
let empValues: Map<number, string> = new Map();
empValues.set(1234, "Bharath");
empValues.set(1235, "Bharath");
empValues.set(1236, "Sarath");
empValues.set(1236, "ABC");
console.log(empValues);