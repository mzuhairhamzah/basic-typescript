import { Buyer } from "../src/buyer";
// interface on typescript
describe('Interface', function () {
    it('should support in typescript', function () {
        const buyer: Buyer = {
            id: 1,
            name: "Zuhair",
            nib: "23131",
            npwp: "323245"
        };
        buyer.name = "hamzah"
        console.info(buyer);
    });

    it('should support function interface', function () {
        interface AddFunction {
            (value1: number, value2: number): number;
        }
        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });

    it('should support indexable interface', function () {
        interface StringArray {
            [index: number]: string
        }
        const names: StringArray = ["Muhammad", "Zuhair", "Hamzah"];
        console.info(names);

    });

    it('should indexable interface (object) for non number index', function () {
        interface StringDictionary {
            [key: string]: string
        }
        const dictionary: StringDictionary = {
            name: "Zuhair",
            address: "Makassar",
            country : "Indonesia"
        };
        console.info(dictionary["name"]);
        console.info(dictionary["address"]);
        console.info(dictionary["country"]);
    });
});