import { sayHello } from "../src/say-hello";

describe('Hello', function(){
    it("should say hello", function(){
        const name = "Hello Zuhair";
        expect(name).toBe("Hello Zuhair");
    });
});