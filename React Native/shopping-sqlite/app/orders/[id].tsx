import { View, Text } from "react-native";

export default function OrderDetailScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "600" }}>
        Chi tiết đơn hàng
      </Text>
      <Text style={{ color: "#555", marginTop: 6 }}>
        (Màn hình hiển thị chi tiết đơn hàng)
      </Text>
    </View>
  );
}
