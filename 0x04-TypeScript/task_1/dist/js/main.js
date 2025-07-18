"use strict";
const teacher1 = {
    firstName: "Aron",
    lastName: "Alemu",
    fullTimeEmployee: true,
    location: "Piassa, Addis Ababa",
    contract: true, // Additional attribute
};
// Example of initializing another Teacher object with optional and additional attributes
const teacher2 = {
    firstName: "Misrak",
    lastName: "Getnet",
    fullTimeEmployee: false,
    yearsOfExperience: 5, // Optional attribute
    location: "goro, Addis Ababa",
    contract: false
};
function displayTeacherInfo(teacher) {
    console.log(`Name: ${teacher.firstName} ${teacher.lastName}`);
    console.log(`Full Time: ${teacher.fullTimeEmployee}`);
    console.log(`Location ${teacher.location}`);
    if (teacher.yearsOfExperiance != undefined)
        console.log(`Years of Experiance: ${teacher.yearsOfExperiance}`);
    //Display additional attributes
    for (const key in teacher) {
        if (!['firstName', 'lastName', 'fullTimeEmployee', 'yearsOfExperience', 'location'].includes(key)) {
            console.log(`${key}: ${teacher[key]}`);
        }
    }
}
// Display information for both teachers
displayTeacherInfo(teacher1);
displayTeacherInfo(teacher2);
// Example of initializing a Directors object
const director1 = {
    firstName: "Misre",
    lastName: "Gech",
    fullTimeEmployee: true,
    location: "Addis Ababa",
    numberOfReports: 5, // Required attribute
    contract: true, // Additional attribute
};
const director2 = {
    firstName: "Abel",
    lastName: "Taddese",
    fullTimeEmployee: true,
    location: "Addis Ababa",
    numberOfReports: 5, // Required attribute
    contract: true, // Additional attribute
};
// Function to display director details
function displayDirectorInfo(director) {
    console.log(`Name: ${director.firstName} ${director.lastName}`);
    console.log(`Full Time: ${director.fullTimeEmployee}`);
    console.log(`Location: ${director.location}`);
    console.log(`Number of Reports: ${director.numberOfReports}`);
    if (director.yearsOfExperience !== undefined) {
        console.log(`Years of Experience: ${director.yearsOfExperience}`);
    }
    // Display additional attributes
    for (const key in director) {
        if (!['firstName', 'lastName', 'fullTimeEmployee', 'yearsOfExperience', 'location', 'numberOfReports'].includes(key)) {
            console.log(`${key}: ${director[key]}`);
        }
    }
}
// Display information for both directors
displayDirectorInfo(director1);
displayDirectorInfo(director2);
const printTeacher = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};
console.log(printTeacher("Misrak", "Getnet"));
console.log(printTeacher("Aron", "Taddese"));
//# sourceMappingURL=main.js.map