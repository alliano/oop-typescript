class Employee {
    _name: string;
    constructor(name: string) {
        this._name = name;
    }
    greet(): void {
        console.log(`Hello my name is ${this._name} and i'm Employee`);
    }
}

class Engineer extends Employee {
    _departement: string;
    constructor(name: string, departement: string) {
        super(name);
        this._departement = departement;
    }
    // method overriding
    greet(): void {
        console.log(`Hello my name ${this._name} and my departement is ${this._departement}`);
    }
    greetWithSuper(): void {
        // memanggil method greet milik paren class | Employee -> greet();
        super.greet();
        // memanggil method greet milik current class | Engineer -> greet();
        this.greet();
    }
}
export { Employee, Engineer }