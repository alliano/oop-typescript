export class Counter {
    /**
     * visibility atau access modifier, encapsulation
     * 
     */
    private counterVal: number = 0;
    public increment():void {
        this.counterVal++;
    }
    public getCounter(): number {
        return this.counterVal;
    }
}