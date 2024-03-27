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