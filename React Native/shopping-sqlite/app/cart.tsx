import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CartRepo } from "../src/db/cart.repo";
import { Link } from "expo-router";

export default function CartScreen() {
  const [cart, setCart] = useState<any[]>([]);

  const refresh = async () => {
    const items = await CartRepo.getAll();
    setCart(items);
  };

  useEffect(() => {
    refresh();
  }, []);

  const checkout = async () => {
    try {
      await CartRepo.checkout();
      Alert.alert("✅ Thành công", "Đơn hàng đã được tạo!");
      refresh();
    } catch (e) {
      Alert.alert("⚠️ Lỗi", (e as Error).message);
    }
  };

  const total = cart.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        data={cart}
        keyExtractor={(i) => i.product_id}
        renderItem={({ item }) => (
          <View style={{ padding: 12, borderBottomWidth: 1, borderColor: "#eee" }}>
            <Text style={{ fontWeight: "600" }}>{item.name}</Text>
            <Text>Số lượng: {item.quantity}</Text>
            <Text>Giá: {(item.price * item.quantity).toLocaleString()} ₫</Text>
          </View>
        )}
      />

      <View style={{ padding: 12, borderTopWidth: 1, borderColor: "#eee" }}>
        <Text style={{ fontSize: 16, fontWeight: "600" }}>
          Tổng cộng: {total.toLocaleString()} ₫
        </Text>
        <TouchableOpacity
          onPress={checkout}
          style={{
            marginTop: 10,
            backgroundColor: "#10B981",
            padding: 10,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>🧾 Thanh toán</Text>
        </TouchableOpacity>
        <Link href="/">⬅️ Quay lại mua hàng</Link>
      </View>
    </SafeAreaView>
  );
}
