// CODE here for your Lambda Classes

class Person{
  constructor(props){
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
  }
  speak(){
    console.log(`PERRSON Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

//Test--------------------------------------------------------------------
let kye = new Person({
  name: "karen",
  age: 43,
  location: "yeetland"
})

kye.speak();
//-------------------------------------------------------------------------------

class Student extends Person{
  constructor(props){
    super(props);
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
    this.Grade = props.grade;
  }

  listSubjects(){
    this.favSubjects.forEach(function(sub){
      console.log("one of my favorite subjects is: ",sub);
    })
  };
  PRAssignment(subject){
    console.log(`${this.name} has submitted a PR for ${subject}`);
  };
  sprintChallenge(subject){
    console.log(`${this.name} has begun sprint challenge on ${subject}`);}
  graduate(){
    if(this.Grade > 70){
      console.log("I'm so happy to graduate!");
    }else{
      console.log("Welp, looks like I'm not graduating. Time to pull on those bootstraps harder");
    }
  }
}

//Test-------------------------------------
let huck = new Student({
  name:"Kyle",
  age: 58,
  location: "lagrange",
  previousBackground: "c#",
  className: "WEB24",
  favSubjects: ["express", "Java", "JavaScript"],
  grade: 80
})

huck.listSubjects();
huck.PRAssignment("Back-end");
huck.sprintChallenge("Front-end");

//--------------------------------------------------------------------

class Instructor extends Person{
  constructor(props){
    super(props);
    this.specialty = props.specialty;
    this.FavLanguage = props.FavLanguage;
    this.catchPhrase = props.catchPhrase;
  }
  demo(subject){
    console.log(`Today we are learning about ${subject}`);
  }
  grade(Student,subject){
    console.log(`${Student.name} recieves a perfect score on ${subject}`);
  }

  assignGrade(Student){
    console.log(`So starting out ${Student.name}'s grade is ${Student.Grade}`);
    let ranNum = Math.round(Math.random());
    let randGrade = Math.floor(Math.random()* Math.floor(20));

    if(ranNum){
      Student.Grade += randGrade;
    }else{
      Student.Grade -= randGrade;
    }
    console.log(`Now I,${this.name}, will make ${Student.name}'s grade a ${Student.Grade} LMAOOOOOOO!`);
  }

}
//Test--------------------------------------------
let yeet = new Instructor({
  name: "brit",
  age: 59,
  location: "baltimore",
  specialty: "talking fast",
  FavLanguage: "Python",
  catchPhrase: "YeetOrBeYate"
});

yeet.demo("ghosts");
yeet.grade(huck, "PHP");

//-----------------------------------------------------------

class ProjectManager extends Instructor{
  constructor(props){
    super(props);
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;
  }
  standUp(channel){
    console.log(`${this.name} announces to ${channel}@channel standy times!`);
  }
  debugsCode(Student, subject){
    console.log(`${this.name} debugs ${Student.name}'s code on ${subject}`);
  }

}

//Test-----------------------------

let goody = new ProjectManager({
  name: "Juan",
  age: 99,
  location: "Texas",
  gradClassName: "WEBPT17",
  favInstructor: "brit"
});

goody.standUp("JuanWEB24");
goody.debugsCode(huck, "Python");
goody.assignGrade(huck);
huck.graduate();

/*
                                                  Stretch Problem

    Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.XXXXX

    Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) that will randomly add or subtract points to a student's grade. Math.random will help.

    Add a graduate method to a student.
    his method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
    If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.

*/
