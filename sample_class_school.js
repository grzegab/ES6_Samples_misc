class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  
  get name(){
    return this._name;
  }
  
  get level(){
    return this._level;
  }
  
  get numberOfStudents() {
    return this._numberOfStudents;
  }

	set numberOfStudents(number) {
    if (typeof number == 'Integer') {
      this._numberOfStudents = number;
    } else {
      console.log("Please give number of students");
    }
  }

	quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
  }

	static pickSubstituteTeacher(substituteTeachers) {
    let random = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[random];
  }
  
}

class Primary extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class Middle extends School {
  constructor() {
    
  }
}

class High extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  
  get sportsTeams() {
    return this._sportsTeams;
  }
  
  randomTeam(){
    let random = Math.floor(Math.random() * this._sportsTeams.length);
    return this._sportsTeams[random];
  }
}

const loraneHubspury = new Primary('Lorraine Hansbury', 555, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

const warsawLow = new Primary('Warsaw Low', 123, 'Students must be picked up by a parent or a family.');

const warsawHigh = new High('Warsaw High', 3782, ['Lions', 'Dophins', 'Mustard']);

loraneHubspury.quickFacts();
console.log(warsawHigh.randomTeam());

console.log(Primary.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));









