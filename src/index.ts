interface IPet {
    name: string;
    age: number;

    feed(food: string, amount: number): void;
}

class Pet implements IPet {
    name: string = '';
    age: number = 0;
    public hasIdentifier: boolean = false;
    private assignedVetName: string = '';
    #assignedVetAddress: string = '';

    constructor(name: string, age: number) { }
    feed(food: string, amount: number): void {
        console.log(`Pet eats ${amount}kg of ${food}.`);
    }
}

const kitty = new Pet('kitty', 2);
kitty.feed('fish food', 0.5);

class FarmAnimal extends Pet {
    // override property
    name = 'Daze'
    constructor(name: string, age: number, isFreeRange: boolean) {
        super(name, age);
    }
}

abstract class Deploy {
    abstract connectionString: string;
    hasDeployed: boolean = false;
    abstract deployObject(environment: string, sourceDirectory: string): void;

    confirmDeployment(): boolean {
        return this.hasDeployed;
    };
}

// const hen = new FarmAnimal('Wolfy', 3, true);
// hen.feed('seeds', 1.7);

class Circle {
    radius: number = 0;
    static pi: number = 3.14;

    constructor(radius: number) {
        this.radius = radius;
    }
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);
console.log(`Circle area: ${Circle.pi * circle1.radius ** 2}`);
console.log(`Circle area: ${Circle.pi * circle2.radius ** 2}`);