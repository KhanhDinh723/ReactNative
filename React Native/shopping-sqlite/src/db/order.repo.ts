import { openDatabase } from "./db";

export const OrderRepo = {
  async listOrders() {
    const db = await openDatabase();
    const rows = await db.getAllAsync(
      "SELECT * FROM orders ORDER BY date DESC;"
    );
    return rows;
  },
};
