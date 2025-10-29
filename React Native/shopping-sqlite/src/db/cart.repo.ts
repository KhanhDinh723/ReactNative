import { openDatabase } from "./db";

export const CartRepo = {
  async getAll() {
    const db = await openDatabase();
    return await db.getAllAsync(`
      SELECT c.product_id, p.name, p.price, c.quantity
      FROM cart c
      JOIN products p ON p.product_id = c.product_id;
    `);
  },

  async addOrIncrement(product_id: string) {
    const db = await openDatabase();
    const existing = await db.getAllAsync(
      "SELECT * FROM cart WHERE product_id = ?;",
      [product_id]
    );

    if (existing.length > 0) {
      await db.runAsync(
        "UPDATE cart SET quantity = quantity + 1 WHERE product_id = ?;",
        [product_id]
      );
    } else {
      await db.runAsync(
        "INSERT INTO cart (product_id, quantity) VALUES (?, 1);",
        [product_id]
      );
    }

    await db.runAsync(
      "UPDATE products SET stock = stock - 1 WHERE product_id = ? AND stock > 0;",
      [product_id]
    );
  },

  async clear() {
    const db = await openDatabase();
    await db.execAsync("DELETE FROM cart;");
  },

  async checkout() {
    const db = await openDatabase();
    const cart = await this.getAll();

    if (cart.length === 0) throw new Error("Giỏ hàng trống");

    const total = cart.reduce(
      (sum: number, i: any) => sum + i.price * i.quantity,
      0
    );
    const id = "O" + Date.now();
    const date = new Date().toISOString();

    await db.runAsync(
      "INSERT INTO orders (order_id, date, total) VALUES (?, ?, ?);",
      [id, date, total]
    );

    await this.clear();
    console.log(`✅ Đã tạo đơn ${id} (${total}₫)`);
  },
};
