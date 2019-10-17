// CODE here for your Lambda Classes

class Person {
    constructor(param){
        this.name = param.name;
        this.age = param.age;
        this.location = param.location;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(param){
        super(param);
        this.specialty = param.specialty;
        this.favLanguage = param.favLanguage;
        this.catchphrase = param.catchphrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }

    grade(student, subject) {
        return `${student} receives a perfect score on ${subject}.`;
    }
}

class Student extends Person {
    constructor (param){
        super(param);
        this.previousBackground = param.previousBackground;
        this.className = param.className;
        this.favSubjects = param.favSubjects;
    }

    listSubjects(){
        return `${this.favSubjects}.`;
    }

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(param){
        super(param);
        this.gradClassName = param.gradClassName;
        this.favInstructor = param.favInstructor;
    }

    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(student, subject){
        return `${this.name} debugs ${student}'s code on ${subject}`;
    }
}

const jagen = new Instructor({
    name: 'Jagen',
    location: 'Archanea',
    age: 50,
    favLanguage: 'JavaScript',
    specialty: 'Debugging',
    catchPhrase: 'Beware the bugs'
  });

  const seth = new Instructor({
    name: 'Seth',
    location: 'Magvel',
    age: 30,
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: 'Very Seth'
  });

  const erika = new ProjectManager({
      name: 'Erika',
      location: 'Bermuda',
      age: 27,
      favLanguage: 'HTML',
      specialty: 'Supporting',
      catchPhrase: 'Dont code the cheese',
      gradClassName: 'WEB22',
      favInstructor: 'Seth'
  });

  const marth = new ProjectManager({
    name: 'Marth',
    location: 'Tokyo',
    age: 25,
    favLanguage: 'C++',
    specialty: 'Leading',
    catchPhrase: 'I teach all my students',
    gradClassName: 'WEB21',
    favInstructor: 'Jagen'
});

  const cain = new Student({
    name: 'Cain',
    location: 'USA',
    age: 24,
    previousBackground: 'Soldier',
    className: 'WEB25',
    favSubjects: [
        'User Interface',
        'JavaScript',
    ]
  });

  const abel = new Student({
    name: 'Abel',
    location: 'Canada',
    age: 22,
    previousBackground: 'Artist',
    className: 'WEB26',
    favSubjects: [
        'Preprocessing',
        'User Interface'
    ]
  });

  console.log(jagen.name); //Jagen
  console.log(seth.age); //30
  console.log(cain.favSubjects); //User Interface, Javascript
  console.log(abel.location); //Canada
  console.log(jagen.demo('User Interface')); //Jagen demo User Interface
  console.log(seth.grade('Cain','Preprocessing')); //Seth grade Cain for Preprocessing
  console.log(abel.listSubjects()); //Preprocessing, User Interface