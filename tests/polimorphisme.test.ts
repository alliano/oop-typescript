import { Employee, Engineer, Manager, VicePrcident } from "../src/polimorphisme"

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
    });

    it('Should support method polimorphisme', function(): void {
        const greet = (employee: Employee):void =>  console.log(`Hello im ${employee.name}, and my departement is ${employee.departement}`);
        let employee: Employee = new Employee("Audia", "Finance");
        greet(employee);

        const engineer: Engineer = new Engineer("Ali", "IT");
        greet(engineer);

        const vicePrcident:VicePrcident = new VicePrcident("Abdillah", "IT");
        greet(vicePrcident)
    });

    it('should support cast poliimorpisme', function(): void {
        /**
         * ketika kita akan melakukan casting terhadapt tipe method argument polimorphisme
         * lebih baik kita menggunakan pengecekan instanceOf 
         * 
         * URGERNT: ketika kita menggunakan instanceOf untuk pengecekan method argument polimorphisme
         * kita harus memulainya dari child class yang paling akhir
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