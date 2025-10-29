import { useEffect, useState } from "react";
import { FlatList, View, Text, Switch, TouchableOpacity } from "react-native";
import { CartRepo } from "../src/db/cart.repo";
import { OrderRepo } from "../src/db/order.repo";
import { currency } from "../src/models/types";
import type { CartLine } from "../src/models/types";
import { Link } from "expo-router";

export default function InvoiceScreen() {
  const [lines, set] = useState<CartLine[]>([]);
  const [vatOn, setVatOn] = useState(false);
  const VAT_RATE = 0.1;

  const load = async () => set(await CartRepo.getCartLines());
  useEffect(() => {
    load();
  }, []);

  const subtotal = lines.reduce((s, l) => s + l.lineTotal, 0);
  const vat = vatOn ? subtotal * VAT_RATE : 0;
  const total = subtotal + vat;

  const pay = async () => {
    if (!lines.length) return alert("Giỏ hàng trống!");
    const order = await OrderRepo.place(lines, vatOn ? VAT_RATE : 0);
    alert(`✅ Thanh toán thành công!\nMã đơn: ${order.order_id}`);
    set([]);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={lines}
        keyExtractor={(i) => String(i.id)}
        renderItem={({ item }) => (
          <View style={{ padding: 12, borderBottomWidth: 1, borderColor: "#eee" }}>
            <Text style={{ fontWeight: "600" }}>{item.name}</Text>
            <Text>{item.qty} × {currency(item.price)}</Text>
            <Text>Thành tiền: {currency(item.lineTotal)}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={{ padding: 24, textAlign: "center" }}>🛒 Giỏ hàng đang trống</Text>
        }
      />

      <View style={{ padding: 16, borderTopWidth: 1, borderColor: "#eee" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Tạm tính</Text>
          <Text>{currency(subtotal)}</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 6 }}>
          <Text>VAT (10%)</Text>
          <Switch value={vatOn} onValueChange={setVatOn} />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 8 }}>
          <Text style={{ fontWeight: "700" }}>Tổng cộng</Text>
          <Text style={{ fontWeight: "700" }}>{currency(total)}</Text>
        </View>

        <TouchableOpacity
          onPress={pay}
          style={{
            backgroundColor: "#0d6efd",
            padding: 12,
            borderRadius: 8,
            marginTop: 8,
          }}
        >
          <Text style={{ color: "white", textAlign: "center", fontWeight: "600" }}>
            💳 Thanh toán
          </Text>
        </TouchableOpacity>

        <View style={{ marginTop: 12, alignItems: "center" }}>
          <Link href="/orders">Xem lịch sử đơn hàng →</Link>
        </View>
      </View>
    </View>
  );
}
