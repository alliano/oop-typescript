abstract class User {
    readonly _id: number;
    abstract _name: string;
    abstract _email: string;
    constructor(id: number) {
        this._id = id;
    }
    abstract greet(): void;
}

class RegulerUser extends User{
    _name: string;
    _email: string;
    constructor(id: number, name: string, email: string){
        super(id);
        this._email = email;
        this._name = name;
    }
    greet(): void {
        console.log(`Hello im ${this._name} my email ${this._email}`);
    }
}

export { RegulerUser, User }