"use strict";
describe('Union Type', function () {
    it('should support in typesciprt', function () {
        let sample = "Zuhair";
        console.info(sample);
        sample = 100;
        console.info(sample);
        sample = true;
        console.info(sample);
    });
    it('should support tyepof operator', function () {
        function process(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value + 2;
            }
            else {
                return !value;
            }
        }
        expect(process("Muhammad")).toBe("MUHAMMAD");
        expect(process(100)).toBe(102);
        expect(process(true)).toBe(false);
    });
});
