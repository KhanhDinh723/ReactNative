import { useEffect, useState } from "react";
import { View, FlatList, Image, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type EditedImage = {
  id: string;
  originalUri: string;
  editedUri: string;
  savedAt: number;
};

const STORAGE_KEY = "edited_images_v1";

export default function GalleryScreen() {
  const [images, setImages] = useState<EditedImage[]>([]);

  useEffect(() => {
    (async () => {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      if (data) setImages(JSON.parse(data));
    })();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.editedUri }} style={styles.thumb} />
            <View style={{ flex: 1 }}>
              <Text style={styles.time}>{new Date(item.savedAt).toLocaleString()}</Text>
              <Text numberOfLines={1} style={styles.uri}>
                {item.editedUri}
              </Text>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Chưa có ảnh đã chỉnh sửa</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12, backgroundColor: "#f1f5f9" },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  thumb: { width: 80, height: 80, borderRadius: 8, marginRight: 10 },
  time: { fontWeight: "bold" },
  uri: { fontSize: 12, color: "#555" },
  empty: { textAlign: "center", marginTop: 20 },
});
