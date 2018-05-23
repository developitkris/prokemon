import { Prokemon } from './../src/prokemon.js';
import { Inventory} from './../src/prokemon.js';
import { Environment } from './../src/prokemon.js';
import { Storage } from './../src/prokemon.js';

describe('prokemon', function() {
  it('should check if Prokemon can be successfully created', function() {
    var myProkemon = new Prokemon("alex", "image", "water", "30", "500p", "scratch", "40");
    expect(myProkemon.name).toEqual("alex");
    expect(myProkemon.img).toEqual("image");
    expect(myProkemon.type).toEqual("water");
    expect(myProkemon.level).toEqual("30");
    expect(myProkemon.hp).toEqual("500p");
    expect(myProkemon.ability).toEqual("scratch");
    expect(myProkemon.happiness).toEqual("40");
  });
});

describe('environment', function() {
  it('should check if environment is correctly chosen', function() {
    var myEnvironment = new Environment("sapphire","", "celadon");
    expect(myEnvironment.gym).toEqual("sapphire");
    expect(myProkemon.img).toEqual("to the mountain");
    expect(myEnvironment.hospital).toEqual("celadon");
  });
});
