import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { OrderRepo } from "../src/db/order.repo";
import { Link } from "expo-router";

export default function OrdersScreen() {
  const [orders, setOrders] = useState<any[]>([]);

  const load = async () => {
    const list = await OrderRepo.listOrders();
    setOrders(list);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        data={orders}
        keyExtractor={(i) => i.order_id}
        renderItem={({ item }) => (
          <View style={{ padding: 12, borderBottomWidth: 1, borderColor: "#eee" }}>
            <Text style={{ fontWeight: "600" }}>Đơn hàng: {item.order_id}</Text>
            <Text>Ngày: {new Date(item.date).toLocaleString()}</Text>
            <Text>Tổng tiền: {item.total.toLocaleString()} ₫</Text>
          </View>
        )}
      />
      <View style={{ padding: 12, borderTopWidth: 1, borderColor: "#eee" }}>
        <Link href="/">⬅️ Quay lại mua hàng</Link>
      </View>
    </SafeAreaView>
  );
}
