class Person {
    _name: string;
    constructor(name: string) {
        this._name = name;
    }
}

class Employee extends Person {
    _selary: number;
    _departement: string;
    constructor(name: string, selary: number, departement: string){
        super(name);
        this._selary = selary;
        this._departement = departement;
    }
    get selary(): number {
        return this._selary;
    }
    get name(): string {
        return this._name;
    }
    get departement(): string {
        return this._departement;
    }
}

export { Person, Employee }