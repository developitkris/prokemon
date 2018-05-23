export class Prokemon {
  // name:" ";
  // img:" ";
  // type:" ";
  // level:" ";
  // hp: " ";
  // ability: " ";
  // happiness: " ";

  constructor (name="", img="", type="", level="", hp="", ability="", happiness="") {
      this.name = name;
      this.img = img;
      this.type = type;
      this.level = level;
      this.hp = hp;
      this.ability = ability;
      this.happiness = happiness;
  }

  // public var getName(){
  //   return name;
  // }
}

class inventory {
  constructor (food, stone, medicine) {
      this.food = food;
      this.stone = stone;
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

class storage {
  constructor (backpack, lab) {
      this.backpack = backpack;
      this.lab = lab;
  }
}

class element {

}
