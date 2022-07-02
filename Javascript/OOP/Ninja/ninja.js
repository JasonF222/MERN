class Ninja {
    constructor (name, health = 100, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(this.name); 
    }

    showStats() {
        console.log(this.name + "'s stats: " + "Health: " + this.health + " " + "Speed: " + this.speed + " " + "Strength: " + this.strength);
    }

    drinkSake() {
        this.health += 10;
        console.log(this.name + " " + "gained 10 health.");
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();


class Sensei extends Ninja {
    constructor(name) {
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log('From one thing, know 10,000 things.');
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();

