// CODE here for your Lambda Classes
class Person{
  constructor(name, age, location){
    this.name = name;
    this.age = age;
    this.location = location;
  }
  speak(){
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}
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


//Test--------------------------------------------------------------------
let kye = new Person('kyle', 32, 'atlanta');
kye.speak();

class Student extends Person{
  constructor(name, age, location, special, favLang)
}

class Instructor extends Person{
  constructor(name, age, location, special, favLang, catchPhrase){
    super(name, age, location);
    this.specialty = special;
    this.FavLanguage = favLang;
    this.catchPhrase = catchPhrase;
  }
  demo(subject){
    console.log(`Today we are learning about ${subject}`);
  }
  grade(Person){
    console.log(`${Person.name} is the person I declared earlier, thier age is ${Person.age}`);
  }

}
//Test--------------------------------------------
let yeet = new Instructor('keel', 23, 'lametown', "redux", 'C#', "YeetOrBeYate");
yeet.demo("ghosts");
yeet.grade(kye);
