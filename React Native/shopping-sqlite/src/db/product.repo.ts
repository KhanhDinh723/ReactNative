import { openDatabase } from "./db";

export const ProductRepo = {
  async getAll() {
    try {
      const db = await openDatabase();
      const rows = await db.getAllAsync("SELECT * FROM products;");
      return rows;
    } catch (err) {
      console.error("❌ ProductRepo.getAll error:", err);
      return [];
    }
  },
};
