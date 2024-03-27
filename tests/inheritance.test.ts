import { Employee, Engineer, Manager } from "../src/inheritance"

describe('Inheritance', function(): void {
    it('Should support inheritance', function(): void {
        const employee1: Employee = new Manager(1, "Audia", "adia@gmail.com", "Marketing");
        const employee2: Employee = new Engineer(2, "Abdillah", "abdillah@gmail.com", "IT");
        expect(employee1._name).toBe("Audia");
        expect(employee2._name).toBe("Abdillah");
    })
})