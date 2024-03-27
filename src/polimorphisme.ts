class Employee {
    protected _name: string;
    protected _departement?: string;
    constructor(name: string, departement?: string){
        this._departement = departement;
        this._name = name;
    }
    get name(): string {
        return this._name;
    }
    get departement(): string | undefined {
        return this._departement;
    }
}
class Engineer extends Employee { }
class Manager extends Employee { }
class VicePrcident extends Manager { }
export { Employee, Manager, Engineer, VicePrcident }