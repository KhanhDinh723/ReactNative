import { useEffect, useState } from "react";
import { FlatList, View, Text, TouchableOpacity, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductRepo } from "../src/db/product.repo";
import { CartRepo } from "../src/db/cart.repo";
import { Link } from "expo-router";

export default function ProductScreen() {
  const [data, setData] = useState<any[]>([]);
  const [load, setLoad] = useState(false);

  const refresh = async () => {
    setLoad(true);
    const list = await ProductRepo.getAll();
    setData(list);
    setLoad(false);
  };

  useEffect(() => {
    refresh();
  }, []);

  const add = async (p: any) => {
    await CartRepo.addOrIncrement(p.product_id, p.stock);
    alert("Đã thêm vào giỏ!");
    refresh();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        refreshControl={<RefreshControl refreshing={load} onRefresh={refresh} />}
        data={data}
        keyExtractor={(i) => i.product_id}
        renderItem={({ item }) => (
          <View style={{ padding: 12, borderBottomWidth: 1, borderColor: "#eee" }}>
            <Text style={{ fontWeight: "700", fontSize: 16 }}>{item.name}</Text>
            <Text>{item.price.toLocaleString()} ₫</Text>
            <Text>Tồn: {item.stock}</Text>
            <TouchableOpacity
              disabled={item.stock <= 0}
              onPress={() => add(item)}
              style={{
                marginTop: 8,
                backgroundColor: item.stock > 0 ? "#4F46E5" : "#aaa",
                padding: 10,
                borderRadius: 8,
              }}
            >
              <Text style={{ color: "white", textAlign: "center" }}>Thêm vào giỏ</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View
        style={{
          padding: 12,
          borderTopWidth: 1,
          borderColor: "#eee",
          flexDirection: "row",
          justifyContent: "center",
          gap: 12,
          backgroundColor: "#fff",
        }}
      >
        <Link href="/cart" style={{ fontSize: 16 }}>🛒 Giỏ hàng</Link>
        <Text>|</Text>
        <Link href="/orders" style={{ fontSize: 16 }}>🧾 Đơn hàng</Link>
      </View>
    </SafeAreaView>
  );
}
