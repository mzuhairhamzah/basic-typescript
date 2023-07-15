describe('Type Alias', function () {
    it('should support in typescript', function () {
        const category = {
            id: "1",
            name: "Iphone"
        };
        const product = {
            id: "1",
            name: "Iphone 12 Pro",
            price: 3000000,
            category: category
        };
        console.info(category);
        console.info(product);
    });
});
export {};
