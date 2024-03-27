import { Human } from "../src/inheritance-interface"

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