import { ValidationError } from "../src/ValidationError";

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