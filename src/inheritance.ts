class Employee {
    _id: number;
    _name: string;
    _email: string;
    _division: string;
    constructor(id: number, name: string, email: string, division: string) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._division = division;   
    }
}
class Manager extends Employee { }
class Engineer  extends Employee { }

export { Employee, Manager, Engineer }