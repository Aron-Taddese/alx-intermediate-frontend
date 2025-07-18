namespace Subjects {
    export interface Teacher{
        firstName: string;
        lastName: string;
        experienceTeachingC?: number;
        experienceTeachingReact?: number;
        experienceTeachingJava?: number;
    }
    export class TeacherClass implements Teacher {
    public firstName: string;
    public lastName: string;
    public experienceTeachingC?: number;
    public experienceTeachingReact?: number;
    public experienceTeachingJava?: number;

    constructor(
      firstName: string,
      lastName: string,
      experienceTeachingC?: number,
      experienceTeachingReact?: number,
      experienceTeachingJava?: number
    ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.experienceTeachingC = experienceTeachingC;
      this.experienceTeachingReact = experienceTeachingReact;
      this.experienceTeachingJava = experienceTeachingJava;
    }
  }
}