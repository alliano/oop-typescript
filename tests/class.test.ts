import { Customer } from "../src/Customer";
import { User } from "../src/User"
import { UserService } from "../src/UserService";

describe('Class', function(): void {
    it('should can create Object from class', function(): void {
        const user: User = new User();
        const userService: UserService = new UserService();
        expect(typeof user).toBe("object");
        expect(typeof userService).toBe("object");  
    })

    it('Should support create constructor', function(): void {
        const user: User = new User();
        expect(user);
    })

    it('should support constructor parameter', function(): void {
        const customer1: Customer = new Customer(1, "Audia");
        console.log(customer1);
    });
    it('should support method', function(): void {
        const customer1: Customer = new Customer(1, "Audia");
        customer1.sayHello("Naila");
    });
})