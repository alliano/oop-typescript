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