/*

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// function GameObject(anything){
//   this.createdAt = anything.createdAt;
//   this.name = anything.name;
//   this.dimensions = anything.dimensions;
// }
//
// GameObject.prototype.destroy = function(){
//   return `${this.name} was removed from the game`;
// }

class GameObject{
  constructor(props){
    this.createdAt = props.createdAt;
    this.name = props.name;
    this.dimensions = props.dimensions;
  }
  destroy(){
    return `${this.name} was removed from the game`;
  }
}



/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

  // function CharacterStats(atri){
  //   //so basically (yeet) I'm giving GameObject and its anythings to characterstats as atri
  //   GameObject.call(this, atri);
  //   this.healthPoints = atri.healthPoints
  // }
  //
  // //This gives CharacterStats the destroy function
  // CharacterStats.prototype = Object.create(GameObject.prototype);
  //
  // CharacterStats.prototype.takeDamage = function(){
  //   return `${this.name} took damage`;
  // }

  class CharacterStats extends GameObject{
    constructor(props){
      super(props);
      this.healthPoints = props.healthPoints;
    }
    takeDamage(){
      return `${this.name} took damage`;
    }
  }


/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

  // function Humanoid(attri){
  //   //giving Humanoid characterstats atributes as attri
  //   CharacterStats.call(this, attri);
  //   this.team = attri.team,
  //   this.weapons = attri.weapons,
  //   this.language = attri.language
  //
  // }
  //
  // Humanoid.prototype = Object.create(CharacterStats.prototype);
  //
  // Humanoid.prototype.greet = function(){
  //   return `${this.name} offers a greeting in ${this.language}`;
  // }

  class Humanoid extends CharacterStats{
    constructor(props){
      super(props);
      this.team = props.team;
      this.weapons = props.weapons;
      this.language = props.language;
    }
    greet(){
      return `${this.name} offers a greeting in ${this.language}`;
    }
  }





/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  console.log("-----------STRETCH BELOW--------------");






  // Stretch task:
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  // function Villain(attributes){
  //   Humanoid.call(this, attributes);
  //   this.battleType = attributes.battleType;
  //   this.speed = attributes.speed;
  // }
  //
  // Villain.prototype.evilAbility = function(){
  //   this.healthPoints *= 2;
  // }

  class Villain extends Humanoid{
    constructor(props){
      super(props);
      this.battleType = props.battleType;
      this.speed = props.speed;
    }
    evilAbility(){
      this.healthPoints *= 2;
    }
  }

  // function Hero(atributes){
  //   Humanoid.call(this, atributes);
  //   this.battleType = atributes.battleType;
  //   this.speed = atributes.speed;
  // }
  //
  // Hero.prototype.heroAbility = function(){
  //   this.speed *=6;
  // }

  class Hero extends Humanoid{
    constructor(props){
      super(props);
      this.battleType = props.battleType;
      this.speed = props.speed;
    }
    heroAbility(){
      this.speed *=6;
    }
  }

  ///////////////////////////////////////////////////////////////////////////
    const henna = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 6,
        width: 6,
        height: 6,
      },
      healthPoints: 20,
      name: 'Yeet',
      team: 'The Boys',
      weapons: [
        'Slatt!',
      ],
      language: 'Common Enlgiish',
      battleType: "Long Distance",
      speed: 10
    });

    const vic = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 6,
        width: 6,
        height: 6,
      },
      healthPoints: 20,
      name: 'Tracer',
      team: 'Overwatch',
      weapons: [
        'pweew pweew!',
      ],
      language: 'british Enlgiish',
      battleType: "Close Quarter Combat",
      speed: 15
    });


    /////////////////////////////////////////////
    console.log(`${henna.name} is a ${henna.battleType} type character`);
    console.log(`${henna.name} had ${henna.healthPoints} healthPoints before the powerup!`);
    henna.evilAbility();
    console.log(`Now ${henna.name} has ${henna.healthPoints} healthPoints and is basically OP`);

    console.log("But dont worry", `${vic.name} is here`);
    console.log(`${vic.name} has a ${this.battleType} battle type.`);
    console.log(`Her speed is ${vic.speed} before the powerup`);
    vic.heroAbility();
    console.log(`but now ${vic.name} has a speed of ${vic.speed} to quickly close the distance and overpower ${henna.name}`);
