import { Employee, Engineer } from "../src/methodOverriding"

describe('Overriding Method', function(): void {
    it('Should support Overriding Method', function(): void {
        const enginner: Engineer = new Engineer('Abdillah', "IT");
        const employee: Employee = new Employee("Audia");
        enginner.greet();
        employee.greet();
    });

    it('Should support super to call parent method', function(): void {
        const engineer: Engineer = new Engineer("Alliano", "IT");
        engineer.greetWithSuper();
    })
})