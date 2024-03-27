/**
 * property atau filed boleh bersifat readonly optional dan 
 */
export class Customer {
    readonly id: number;
    name: string;
    hobbies?: Array<string>;
    email?: string;
    // property/ field dengan default value
    type: string = "PREMIUM";

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    // method
    sayHello(name: string): void {
        console.log(`Hello ${name}`);
        
    }
}