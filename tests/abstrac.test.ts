import { RegulerUser, User } from "../src/abstrac";

describe('Abstrac', function(): void {
    it('Should support Abstrac class', function(): void {
        const user: User = new RegulerUser(1, "Alliano", "liano@gmail.com");
        expect(user._id).toEqual(1);
        expect(user._email).toBe("liano@gmail.com");
        expect(user._name).toBe("Alliano");
        user.greet();
    })
})