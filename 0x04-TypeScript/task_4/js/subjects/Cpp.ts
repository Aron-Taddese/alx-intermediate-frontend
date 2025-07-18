
 

namespace Subjects {
  export class Cpp extends Subject {
    public getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    public getAvailableTeacher(): string {
      if (!this.teacher|| this.teacher.experienceTeachingC === 0) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}