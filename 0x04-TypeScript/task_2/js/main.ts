//DirectorInterface
interface DirectorInterface{
    workFromHome(): string;
    getCoffeeBreack(): string;
    workDirectorTask(): string;
}

//TeacherInterface
interface TeacherInterface{
    workFromHome(): string;
    getcoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Director class
class Director implements DirectorInterface{

    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreack(): string {
        return "Getting a coffee break";
    }
    workDirectorTask(): string {
        return "Getting to director tasks";
    }
}

//Teacher class
class Teacher implements TeacherInterface{
    workFromHome(): string {
        return "Cannot work from home";
    }
    getcoffeeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }
}
//createEmployee function
function createEmployee(salary: number | string): Teacher | Director{
        if(typeof(salary) === "number" && salary < 500)
                return new Teacher();
        else
                return new Director();
    }
console.log(createEmployee(400));
console.log(createEmployee(600));
console.log(createEmployee('$500'));

//function isDirector(employee: employee)

function isDirector(employee: Director | Teacher): employee is Director{
    return (employee as Director).workDirectorTask !== undefined;
}

//function to excute work based on employee type
function executeWork(employee: Director | Teacher): void{
    if(isDirector(employee)){
        console.log(employee.workDirectorTask());
    }else{
        console.log(employee.workTeacherTasks());
    }
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));

// String literal type for subjects
type subjects = 'Math' | 'History';

//function to teach a class based on the subject
function teachClass(todayClass: subjects): string{
    if(todayClass === 'Math') {
        return 'Teaching Math';
    }
    else if(todayClass === 'History'){
        return 'Teaching History';
    }
    return 'Unknown Subject'
}

console.log(teachClass('Math'));
console.log(teachClass('History'));