import { View, Text, Pressable, Image, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const [uri, setUri] = useState<string | null>(null);
  const router = useRouter();

  const pickImage = async () => {
    const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!perm.granted) {
      Alert.alert("Thiếu quyền", "Cần quyền truy cập thư viện ảnh.");
      return;
    }

    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!res.canceled) {
      setUri(res.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chọn ảnh để chỉnh sửa</Text>
      <Pressable style={styles.primary} onPress={pickImage}>
        <Text style={styles.primaryText}>Mở thư viện ảnh</Text>
      </Pressable>

      {uri && (
        <>
          <Image source={{ uri }} style={styles.preview} resizeMode="contain" />
          <Pressable
            style={styles.secondary}
            onPress={() => router.push(`/editor?uri=${encodeURIComponent(uri!)}`)}

          >
            <Text style={styles.secondaryText}>Chỉnh sửa ảnh này</Text>
          </Pressable>
        </>
      )}

      <Pressable style={styles.link} onPress={() => router.push("/gallery")}>
        <Text style={styles.linkText}>Xem ảnh đã chỉnh</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12, backgroundColor: "#f8fafc" },
  title: { fontSize: 20, fontWeight: "bold" },
  primary: {
    backgroundColor: "#16a34a",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  primaryText: { color: "#fff", fontSize: 16, fontWeight: "700" },
  preview: { width: "100%", height: 300, marginVertical: 10, borderRadius: 10 },
  secondary: {
    backgroundColor: "#0ea5e9",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  secondaryText: { color: "#fff", fontSize: 16, fontWeight: "700" },
  link: { alignItems: "center", marginTop: "auto", paddingVertical: 12 },
  linkText: { color: "#2563eb", fontWeight: "700" },
});
