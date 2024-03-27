import { Counter } from "../src/Counter"

describe('Encapsulation, Visibility, Access Modifier', function(): void {
    it('should support in typescript', function(): void {
        const counter: Counter = new Counter();
        for(let i: number = 0; i < 1000; i++) {
            counter.increment();
        }
        expect(counter.getCounter()).toEqual(1000);
    })
})