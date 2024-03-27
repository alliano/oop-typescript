interface UserInf {
    _id: number;
    _name: string;
}
interface CanDO {
    run(): void;
    eat(food: string): void;
    walk(): void;
    thinking(): void;
}

class Human implements UserInf, CanDO {
    _id: number;
    _name: string;
    constructor(id: number, name: string){
        this._id = id;
        this._name = name;
    }
    run(): void {
        console.log(`Hello i am ${this._name} i can runing`);
    }
    eat(food: string): void {
        console.log(`Hello im eating ${food}`);
    }
    walk(): void {
        console.log(`Hello im ${this._name} i can walk`);
    }
    thinking(): void {
        console.log(`Hello my name is ${this._name} i can thinking`);
    }   
}  

export { UserInf, CanDO, Human }