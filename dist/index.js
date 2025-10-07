const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Khởi tạo app
const app = express();

// Middleware cơ bản
app.use(cors());
app.use(bodyParser.json());

// ✅ Import route sản phẩm
const productRoutes = require("./routes/products.route");

// ✅ Kết nối route sản phẩm
app.use("/api/products", productRoutes);

// ✅ Route test kiểm tra server
app.get("/api/health", (req, res) => {
  res.json({ message: "✅ API VATTUKC đang hoạt động" });
});

// ✅ Route mặc định (chống 404)
app.get("/", (req, res) => {
  res.send("🌿 VATTUKC API server đang chạy");
});

// ✅ Khởi động server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ API VATTUKC đang chạy tại http://localhost:${PORT}`);
});

