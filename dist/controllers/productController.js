"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = void 0;
const getAllProducts = (req, res) => {
    res.json([
        { id: 1, name: "Béc cánh đập 1 tia", price: 19999 },
        { id: 2, name: "Bộ béc tưới phun sương 10m dây 10 béc", price: 89900 },
    ]);
};
exports.getAllProducts = getAllProducts;
//# sourceMappingURL=productController.js.map