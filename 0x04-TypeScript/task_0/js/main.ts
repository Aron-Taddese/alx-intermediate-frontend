// main.ts

 interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Creating two student objects
const student1: Student = {
  firstName: "Aron",
  lastName: "Alemu",
  age: 28,
  location: "Piassa, Addis Ababa"
};

const student2: Student = {
  firstName: "Misrak",
  lastName: "Getnet",
  age: 22,
  location: "Goro, Addis Ababa"
};

// Creating an array of students
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(students: Student[]) {
  // Create a table element
  const table = document.createElement("table");
  const headerRow = table.insertRow();
  headerRow.insertCell().textContent = "First Name";
  headerRow.insertCell().textContent = "Location";

  // Append rows for each student
  students.forEach(student => {
    const row = table.insertRow();
    row.insertCell().textContent = student.firstName;
    row.insertCell().textContent = student.location;
  });

  // Append the table to the body
  document.body.appendChild(table);
}

// Call the function to render the table
renderTable(studentsList);