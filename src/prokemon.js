//start Proke stats
export class Prokemon {

  constructor (name="", level="1", hp="50", ability="") {
      this.name = name;
      this.level = level;
      this.hp = hp;
      this.ability = ability;
  }

  attack(otherProkemon){
    if(this.ability > otherProkemon.ability) {
      this.hp += 10;
    } else {
      this.hp -= 10;
    }
  }
  defend(otherProkemon) {
    if(this.ability >= otherProkemon.ability) {
      this.hp += 5;
    } else {
      this.hp -+ 5;
    }
  }
  surrender(otherProkemon) {
      this.hp = 0;
  }
}

// instance of Prokemon
export class Fire extends Prokemon {
    constructor(hp) {
      super();
      this.ability = 50;
      this.hp = hp;
    }
  }
  let myProkemon = new Prokemon(300);
  let myFireType = new Fire ("firey", 4, 70, "fly");
  myFireType.attack();

//start inventory stats
export class Inventory {
  constructor (food="", spell="", medicine="") {
      this.food = food;
      this.stone = spell;
      this.medicine = medicine;
  }
}

export class Environment {
  constructor (gym="", travel="", hospital="") {
      this.gym = gym;
      this.travel = travel;
      this.hospital = hospital;
  }
}

export class Storage {
  constructor (backpack="", lab="") {
      this.backpack = backpack;
      this.lab = lab;
  }
}
