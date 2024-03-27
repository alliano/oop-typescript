import { Employee } from "../src/SuperConstrucort";

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