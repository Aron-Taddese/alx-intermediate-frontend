const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();
 
// Create a Teacher object
export const cTeacher = new Subjects.TeacherClass("Aron", "Alemu", 10);

// Cpp subject
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java subject
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React subject
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

