class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        if(target instanceof Unit) {
            target.res -= this.power;
            console.log(target.name + " " + "'s resilience was reduced by" + " " + this.power);
            console.log(target.name + " " + "'s resilience is now" + " " + target.res);
        }
        else {
            throw new Error("Target must be a unit.");
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        if(target instanceof Unit) {
            if(this.stat === "power") {
                target.power += this.magnitude;
                console.log(target.name +"'s power is now" + " " + target.power);
            }
            if(this.stat === "resilience") {
                target.res += this.magnitude;
                console.log(target.name +"'s resilience is now" + " " + target.res);
            }
        }
        else {
            throw new Error("Target must be a unit.");
        }
    }
}

let redNinja = new Unit("Red Belt Ninja", 3, 3, 4);
let blackNinja = new Unit("Black Belt Ninja", 4, 5, 4);

let hardAlgo = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
let promReject = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
let pairProg = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

hardAlgo.play(redNinja);
promReject.play(redNinja);
pairProg.play(redNinja);
redNinja.attack(blackNinja);