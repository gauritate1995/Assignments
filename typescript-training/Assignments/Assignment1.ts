//1. Temperature of a city in degrees Celsius: 25.5
let temperature : number = 25.5;
console.log(`Temperature of a city in degrees Celsius: ${temperature}`);

//2. Whether a customer has placed an order: true or false
let order : boolean = true;
console.log(`Whether a customer has placed an order: ${order}`);

//4. Amount of money in a customer's bank account: 1000.50
let amount : number = 1000.50;
console.log(`Amount of money in a customer's bank account: ${amount}`);

//6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194
let location : number[] = [37.7749, -122.4194] ;
console.log(`Coordinates of a location (latitude, longitude): ${location}`);


interface personDetails{
    phoneNumber : string
    emailAddress: string
    maritalStatus : boolean;
    occupation : string;
    favouriteColour : string;
    bloodType: string;
    eyeColor: string;
    birthplace: string;
}

let personInfo : personDetails ={
    phoneNumber : "123-456-7890",
    emailAddress :"john.doe@example.com",
    maritalStatus: false,
    occupation: "Software Engineer",
    favouriteColour: "Blue",
    bloodType: "A",
    eyeColor: "Brown",
    birthplace: "New York City"
};

//3. Person's phone number: "123-456-7890"
console.log("Person's phone number: ", personInfo.phoneNumber);

//5. Person's email address: "john.doe@example.com"
console.log("Person's email address: ", personInfo.emailAddress);

//7. Person's marital status: true or false
console.log("Person's marital status: ", personInfo.maritalStatus);

//8. Person's occupation: "Software Engineer"
console.log("Person's occupation: ", personInfo.occupation);

//9. Person's favourite colour: "Blue"
console.log("Person's occupation: ", personInfo.favouriteColour);

//13.Person's blood type: 'A'
console.log("Person's blood type: ", personInfo.bloodType);

//18.Person's eye color: "Brown"
console.log("Person's eye color: ", personInfo.eyeColor);

//19.Person's birthplace: "New York City"
console.log("Person's birthplace: ", personInfo.birthplace);

//10.Current year: 2023
let year: number = 2023;
console.log(`Current year: ${year}`);

//11.Number of followers on a social media platform: 1,000,000
let followersCount: string = "1,000,000";
console.log(`Number of followers on a social media platform: ${followersCount}`);

//12.Rating of a movie: 7.5
let movieRating: number = 7.5;
console.log(`Rating of a movie: ${movieRating}`);

//14.Title of a book: "To Kill a Mockingbird"
let bookTitle: string = "To Kill a Mockingbird";
console.log(`Rating of a movie: ${bookTitle}`);

//15.Number of employees in a company: 500
let empCount: number = 500;
console.log(`Number of employees in a company: ${empCount}`);

//16.Time of an event: 2:30 PM
let time: string = "2:30 PM";
console.log(`Time of an event: ${time}`);

//17.Name of a country: "United States"
let country: string = "United States";
console.log(`Name of a country: ${country}`);

//20. Distance between two cities: 200.5
let distance: string = "200.5";
console.log(`Distance between two cities: ${distance}`);