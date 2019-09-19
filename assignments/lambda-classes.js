// CODE here for your Lambda Classes

/////////------DOING THE SAME THING WITH OBJECT NOTATION----------------
// class Perrson{
//   constructor(props){
//     this.name = props.name;
//     this.age = props.age;
//     this.location = props.location;
//   }
//   speak(){
//     console.log(`PERRSON Hello my name is ${this.name}, I am from ${this.location}`);
//   }
// }
//
// let luck = new Perrson({
//   name: "karen",
//   age: 43,
//   location: "yeetland"
// })
//
// luck.speak();

///////////------------OBJECT TEST END------------------------------------

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
    console.log(`${this.name} has begun sprint challenge on ${subject}`);};
}

//Test-------------------------------------
let huck = new Student({
  name:"Kyle",
  age: 58,
  location: "lagrange",
  previousBackground: "c#",
  className: "WEB24",
  favSubjects: ["express", "Java", "JavaScript"]
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
  do(){
    console.log(this.FavLanguage);
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
