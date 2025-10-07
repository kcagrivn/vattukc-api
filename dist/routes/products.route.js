const express = require("express");
const router = express.Router();

// Dữ liệu mẫu (sẽ thay bằng DB sau)
const products = [
  {
    id: 1,
    name: "Béc cánh đập 1 tia",
    price: 19999,
    image: "/images/bec1.jpg",
    description: "Béc cánh đập hợp kim nhôm phun xa 10–20m.",
  },
  {
    id: 2,
    name: "Bộ béc tưới phun sương 10m dây 10 béc",
    price: 89900,
    image: "/images/becphunsuong.jpg",
    description:
      "Bộ tưới phun sương tiện dụng cho vườn cây, lan, sân vườn.",
  },
];

// ✅ Danh sách sản phẩm
router.get("/", (req, res) => {
  res.json(products);
});

// ✅ Chi tiết sản phẩm theo ID
router.get("/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
  }
  res.json(product);
});

module.exports = router;

