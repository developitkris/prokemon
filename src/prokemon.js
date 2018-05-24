export class Prokemon {

  constructor (name="", type="", level="1", hp="50", ability="") {
      this.name = name;
      this.type = type;
      this.level = level;
      this.hp = hp;
      this.ability = ability;
  }
  // public void attack(){
  //   Math.random()
  // }

  // function attack(){
  //   let damage=0;
  //   let heal="";
  //   if(Prokemon.ability > enemy.ability) {
  //     Prokemon.hp -= 10;
  //     damage += 20;
  //     if()
  //
  //
  //   }
}
// class RockType extends Prokemon{
//
//   skills(){
//
//   }
//
//
//
// }

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
