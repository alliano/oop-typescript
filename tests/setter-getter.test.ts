describe('Setter and Getter', (): void => {
    class User {
        _firstName?: string;
        _lastName?: string;

        set firstName(name: string) {
            if(name !== "") this._firstName = name;
        }
        get firstName(): string {
            return this._firstName == undefined || this._firstName == null || this._firstName == ""? "empty" : this._firstName;
        }
        public set lastName(lastName : string) {
            if(lastName !== "") this._lastName = lastName;
        }
        public get lastName() : string {
            return this._lastName == undefined || this._lastName == null || this._firstName == "" ? "empty" : this._lastName;
        }
        
    }
    it('Should support setter and getter', function(): void {
        const user1: User = new User();
        user1.firstName = "";
        console.log("First Name: "+user1.firstName);
        user1.firstName = "Alliano";
        console.log("First Name: "+user1.firstName);

        user1.lastName = ""
        console.log("Last Name: "+user1.lastName);
        user1.lastName = "Alli";
        console.log("Last Name: "+user1.lastName);
    });
})