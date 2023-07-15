import { Buyer } from "../src/buyer";

describe('Interface', function () {
    it('should support in typescript', function () {
        const buyer: Buyer = {
            id: 1,
            name: "Zuhair",
            nib : "23131",
            npwp : "323245"
        };
        buyer.name = "hamzah"
        console.info(buyer);
    });
});