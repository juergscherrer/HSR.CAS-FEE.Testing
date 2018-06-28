const Calculator = require("./calculator");


describe("A new Calculator", function () {
    beforeEach(function () {
        this.calculator = new Calculator();
    });

    it("return a Number", function () {
        expect(typeof this.calculator.sum(this.calculator.valueA, this.calculator.valueB)).toBe("number");
    })
    
    it("return the result with 2 input numbers", function () {
        expect(this.calculator.sum(1,2)).toBe(3);
    })

    it("return the result with 2 input numbers", function () {
        expect(this.calculator.sum(3)).toBe(3);
    })
});