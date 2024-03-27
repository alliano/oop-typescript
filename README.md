# Setup
``` bash
yarn init
```

``` bash
yarn --dev add typescript @babel/preset-typescript @babel/preset-env @jest/globals @types/jest babel-jest jest ts-jest
```

`package.json`
``` json
"type": "module"
```
setup jest pada `package.json`
``` json
  "jest": {
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
  },
```

setup `babel.config.json`
``` json
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-typescript"
    ]
}
```

`tsconfig.json`
``` json
"include": ["./src/**/*", "./tests/**/*.test.ts"]
"module": "ES6"
```

# Class
``` ts
// membuat class
export class User { }
export class UserService { }
```

``` ts
describe('Class', function(): void {
    it('should can create Object from class', function(): void {
        const user: User = new User();
        const userService: UserService = new UserService();
        expect(typeof user).toBe("object");
        expect(typeof userService).toBe("object");  
    })
})
```

# Constructor
``` ts
export class User {
    constructor() {
        console.log("CONSTRUCOR HAS CREATED...");
    }
}
```

``` ts
describe('Class', function(): void {
    it('Should support create constructor', function(): void {
        const user: User = new User();
        expect(user);
    })
})
```

# Consturctor parameter dan filed/property
``` ts
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
}
```
``` ts
describe('Class', function(): void {
    it('should support constructor parameter', function(): void {
        const customer1: Customer = new Customer(1, "Audia");
        console.log(customer1);
    });
})
```

# Method
``` ts
export class Customer {
    readonly id: number;
    name: string;
    hobbies?: Array<string>;
    email?: string;
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
```

``` ts
describe('Class', function(): void {
    it('should support method', function(): void {
        const customer1: Customer = new Customer(1, "Audia");
        customer1.sayHello("Naila");
    });
})
```

# Setter Getter
``` ts
describe('Setter and Getter', (): void => {
    class User {
        _firstName?: string;
        _lastName?: string;

        set firstName(name: string) {
            if(name !== "") this._firstName = name;
        }
        get firstName(): string {
            return this._firstName == undefined || this._firstName == null || this._firstName == ""? "empty" : this._firstName;
        }
        public set lastName(lastName : string) {
            if(lastName !== "") this._lastName = lastName;
        }
        public get lastName() : string {
            return this._lastName == undefined || this._lastName == null || this._firstName == "" ? "empty" : this._lastName;
        }
        
    }
    it('Should support setter and getter', function(): void {
        const user1: User = new User();
        user1.firstName = "";
        console.log("First Name: "+user1.firstName);
        user1.firstName = "Alliano";
        console.log("First Name: "+user1.firstName);

        user1.lastName = ""
        console.log("Last Name: "+user1.lastName);
        user1.lastName = "Alli";
        console.log("Last Name: "+user1.lastName);
    });
});
```

# Inheritance
``` ts
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
```

``` ts
import { Employee, Engineer, Manager } from "../src/inheritance"

describe('Inheritance', function(): void {
    it('Should support inheritance', function(): void {
        const employee1: Employee = new Manager(1, "Audia", "adia@gmail.com", "Marketing");
        const employee2: Employee = new Engineer(2, "Abdillah", "abdillah@gmail.com", "IT");
        expect(employee1._name).toBe("Audia");
        expect(employee2._name).toBe("Abdillah");
    })
})
```

# Inheritance Interface
``` ts
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
```

``` ts
describe('Interface Inheritance', function(): void {
    it('should support inheritance interface', function(): void {
        const human1: Human = new Human(1, "Alliano");
        human1.eat("Nasi Padang");
        human1.run();
        human1.thinking();
        human1.walk();
        expect(human1._name).toBe("Alliano");
    })
})
```
# Super constructor
``` ts
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
```

``` ts
describe('Super', function(): void {
    it('Should support super constructor', function(): void {
        const employee1: Employee = new Employee("Abdillah", 30.000000, "IT");
        const employee2: Employee = new Employee("Audia", 30.000000, "FINANCE");
        expect(employee1._name).toBe("Abdillah");
        expect(employee1._selary).toBe(30.000000);
        expect(employee1._departement).toBe("IT");
        expect(employee2._name).toBe("Audia");
        expect(employee2._selary).toBe(30.000000);
        expect(employee2._departement).toBe("FINANCE");
    });
})
```

# Method Overriding
``` ts
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
}
```

``` ts
describe('Overriding Method', function(): void {
    it('Should support Overriding Method', function(): void {
        const enginner: Engineer = new Engineer('Abdillah', "IT");
        const employee: Employee = new Employee("Audia");
        enginner.greet();
        employee.greet();
    })
})
```

# Super Method
``` ts
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
```

``` ts
describe('Overriding Method', function(): void {
    it('Should support super to call parent method', function(): void {
        const engineer: Engineer = new Engineer("Alliano", "IT");
        engineer.greetWithSuper();
    })
})
```
# Encapsulation atau visibility atau access modifier
``` ts
class Counter {
    /**
     * visibility atau access modifier, encapsulation
     * 
     */
    private counterVal: number = 0;
    public increment():void {
        this.counterVal++;
    }
    public getCounter(): number {
        return this.counterVal;
    }
}
```
``` ts
describe('Encapsulation, Visibility, Access Modifier', function(): void {
    it('should support in typescript', function(): void {
        const counter: Counter = new Counter();
        for(let i: number = 0; i < 1000; i++) {
            counter.increment();
        }
        expect(counter.getCounter()).toEqual(1000);
    })
})
```
# Parameter properties
``` ts
describe('Paramter properties', function(): void {
    class Person {
        /**
         * kita bisa secara langsung membuat properties/filed pada
         * parameter contructor dengan catatan diikuti dengan 
         * access modifier nya atau visibility nya
         * @param name 
         * @param age 
         */
        constructor(public name: string, public age: number){}
    }
    it('Should support', function(): void {
        const person: Person = new Person("Alliano", 20);
        expect(person.name).toBe("Alliano");
        expect(person.age).toEqual(20);
    })
})
```
# InstaceOf
``` ts
describe('InstanceOf', function(): void {
    it('Should support InstanceOf', function(): void {
        class Employee{ }
        class Engineer{ }
        class Manager{ }
        
        const employee1: Employee = new Employee();
        const engineer: Engineer = new Engineer();
        const manager: Manager = new Manager();

        /**
         * instanceOf digunakan untuk mempriksa 
         * apakah sebuah objek merupakan instance dari suatu class
         */
        expect(employee1 instanceof Employee).toBeTruthy();
        expect(engineer instanceof Engineer).toBeTruthy();
        expect(manager instanceof Manager).toBeTruthy();
        expect(employee1 instanceof Manager).toBeFalsy();
        expect(engineer instanceof Employee).toBeFalsy();
        expect(Manager instanceof Engineer).toBeFalsy();
    })
})
```
# Polimorphisme
``` ts
class Employee {
    protected _name: string;
    constructor(name: string){
        this._name = name;
    }
    get name(): string {
        return this._name;
    }
}
class Engineer extends Employee { }
class Manager extends Employee { }
class VicePrcident extends Manager { }
export { Employee, Manager, Engineer, VicePrcident }
```

``` ts
describe('Polimorphisme', function(): void {
    it('should support polimorphisme', function(): void {
        /**
         * Polimorpishme adalah banyak bentuk
         * maksudnya 1 calss bisa berubah-ubah tipe nya
         * dengan ketentukan berubahnya menjadi tipe child class nya
         */
        let employee: Employee = new Employee("Abdillah");
        expect(employee.name).toBe("Abdillah");
        
        employee = new Engineer("Naila");
        expect(employee.name).toBe("Naila");
        
        let manager: Manager = employee;
        expect(employee.name).toBe("Naila");

        manager = new VicePrcident("Audia");
        expect(manager.name).toBe("Audia");
    })
})
```
# Method polimorpishme
``` ts
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
```

``` ts
describe('Polimorphisme', function(): void {
    it('Should support method polimorphisme', function(): void {
        const greet = (employee: Employee):void =>  console.log(`Hello im ${employee.name}, and my departement is ${employee.departement}`);
        let employee: Employee = new Employee("Audia", "Finance");
        greet(employee);

        const engineer: Engineer = new Engineer("Ali", "IT");
        greet(engineer);

        const vicePrcident:VicePrcident = new VicePrcident("Abdillah", "IT");
        greet(vicePrcident)
    })
})
```

# cast methhod argument 
``` ts
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
```
``` ts
describe('Polimorphisme', function(): void {
    it('should support cast poliimorpisme', function(): void {
        /**
         * ketika kita akan melakukan casting terhadapt tipe method argument polimorphisme
         * lebih baik kita menggunakan pengecekan instanceOf 
         * 
         * URGERNT: ketika kita menggunakan instanceOf untuk pengecekan method argument polimorphisme
         * kita harus memulainya dari child class yang paling akhir karena 
         * ketika kita menggunakan instanceOf selain kita mengecek sebah class merupakan 
         * instance dari suatu object tertentu, secara otomatis parent class nya juga akan di cek
         * 
         * misalnya pada kasus kita ini adalah Engineer dan VicePrecident
         * @param employee 
         */
        const greet = (employee: Employee): void => {
            if(employee instanceof Engineer) {
                const engineer: Engineer = employee as Engineer;
                console.log(`Hello im ${engineer.name}, my departement is ${engineer.departement}`);
            }
            
            if(employee instanceof VicePrcident) {
                const vicePrcident: VicePrcident = employee as VicePrcident;
                console.log(`Hello im ${vicePrcident.name}, my departement is ${vicePrcident.departement}`);
            }
            else if(employee instanceof Manager) {
                const manager: Manager = employee as Manager;
                console.log(`Hello im ${manager.name}, my departement is ${manager.departement}`);
            }
            else {
                console.log(`Hello ${employee.name}!`);
            }
        }
        let employee1: Employee = new Employee("Audia", "Finance");
            greet(employee1);

            employee1 = new Engineer("Naila", "IT");
            greet(employee1);

            let employee2: Employee = new Manager("Safa", "IT");
            greet(employee2);

            employee2 = new VicePrcident("Alliano", "Tech");
            greet(employee2);
    })
})
```

# Abstrac
``` ts
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
```

``` ts
describe('Abstrac', function(): void {
    it('Should support Abstrac class', function(): void {
        const user: User = new RegulerUser(1, "Alliano", "liano@gmail.com");
        expect(user._id).toEqual(1);
        expect(user._email).toBe("liano@gmail.com");
        expect(user._name).toBe("Alliano");
        user.greet();
    })
})
```

# Static
``` ts
describe('Static', function(): void {
    class ApplicationConfiguration {
        public static DB_PASSWORD: string = "password_here";
        public static DB_name: string = "db_name";
    }
    it('Should support static', function(): void {
        expect(ApplicationConfiguration.DB_PASSWORD).toBe("password_here");
        expect(ApplicationConfiguration.DB_name).toBe("db_name");
    })
})
```

# Static method
``` ts
describe('Static', function(): void {
    class MathUtil {
        public static sum(...arg: number[]): number {
            let value: number = 0;
            arg.forEach(e => value += e);
            return value;
        }
    }
    it('Static Method', function(): void {
        expect(MathUtil.sum(1, 2, 3, 4, 5, 6, 7)).toBe(28);
    })
})
```

# Error Handling
``` ts
export class ValidationError extends Error {
    constructor(public message: string){
        super(message);
    }
}
```

``` ts
describe('Error Handling', function(): void {
    function validateName(name: string): boolean {
        if(name == undefined || name == "" || name == null) throw new ValidationError("name is required !");
            else
        return true;
    }
    test('Should support Error handling', function(): void {
        expect(() => validateName("")).toThrow();
        expect(() => validateName("")).toThrow("name is required !");
        expect(() => validateName("")).toThrow(ValidationError);
        expect(validateName("Alliano")).toBeTruthy();
        try {
            validateName("");
        }
        catch(e) {
            if(e instanceof ValidationError) {
                const validationError: ValidationError = e as ValidationError;
                console.log(validationError.message);
            }
        }
    })
});
```