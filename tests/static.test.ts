describe('Static', function(): void {
    class ApplicationConfiguration {
        public static DB_PASSWORD: string = "password_here";
        public static DB_name: string = "db_name";
    }
    it('Should support static', function(): void {
        expect(ApplicationConfiguration.DB_PASSWORD).toBe("password_here");
        expect(ApplicationConfiguration.DB_name).toBe("db_name");
    })

    class MathUtil {
        public static sum(...arg: number[]): number {
            let value: number = 0;
            arg.forEach(e => value += e);
            return value;
        }
    }

    it('Static Method', function(): void {
        expect(MathUtil.sum(1, 2, 3, 4, 5, 6, 7)).toBe(28);
    })
})