import * as SQLite from "expo-sqlite";

// 🧩 Mở database (tự tạo nếu chưa có)
export async function openDatabase() {
  try {
    const db = await SQLite.openDatabaseAsync("shop.db");
    console.log("✅ SQLite database ready!");

    // 🏗️ Tạo bảng nếu chưa có
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS products (
        product_id TEXT PRIMARY KEY NOT NULL,
        name TEXT,
        price REAL,
        stock INTEGER
      );

      CREATE TABLE IF NOT EXISTS cart (
        product_id TEXT PRIMARY KEY NOT NULL,
        quantity INTEGER
      );

      CREATE TABLE IF NOT EXISTS orders (
        order_id TEXT PRIMARY KEY NOT NULL,
        date TEXT,
        total REAL
      );
    `);

    // 🌱 Thêm dữ liệu mẫu nếu chưa có
    const existing = await db.getAllAsync("SELECT * FROM products;");
    if (existing.length === 0) {
      await db.execAsync(`
        INSERT INTO products (product_id, name, price, stock) VALUES
        ('P001', '💪 Tạ tay 10kg', 300000, 10),
        ('P002', '🪑 Ghế tập bụng', 850000, 5),
        ('P003', '🏋️ Dây kháng lực', 120000, 20),
        ('P004', '🔥 Thảm yoga chống trượt', 250000, 15),
        ('P005', '💧 Bình nước thể thao', 150000, 30);
      `);
      console.log("🌱 Sample products inserted successfully!");
    } else {
      console.log(`📦 Found ${existing.length} existing products`);
    }

    return db;
  } catch (err) {
    console.error("❌ Failed to open SQLite DB:", err);
  }
}

// 🔁 Alias cho code cũ nếu bạn gọi initDb()
export const initDb = openDatabase;
