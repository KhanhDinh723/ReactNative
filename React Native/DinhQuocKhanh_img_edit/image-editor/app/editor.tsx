import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState, useMemo } from "react";
import { View, Image, StyleSheet, ActivityIndicator, Alert } from "react-native";
import * as ImageManipulator from "expo-image-manipulator";
import * as MediaLibrary from "expo-media-library";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";
import EditorToolbar from "../components/EditorToolbar";

type EditedImage = {
  id: string;
  originalUri: string;
  editedUri: string;
  savedAt: number;
};

const STORAGE_KEY = "edited_images_v1";

export default function EditorScreen() {
  const { uri } = useLocalSearchParams<{ uri: string }>();
  const router = useRouter();
  const [imageUri, setImageUri] = useState(uri || "");
  const [saving, setSaving] = useState(false);
  const [rotate, setRotate] = useState(0);
  const [flipH, setFlipH] = useState(false);
  const [flipV, setFlipV] = useState(false);
  const [cropSquare, setCropSquare] = useState(false);

  if (!imageUri) return null;

  const transforms = useMemo(() => {
    const t: any[] = [];
    if (rotate) t.push({ rotate: `${rotate}deg` });
    if (flipH) t.push({ scaleX: -1 });
    if (flipV) t.push({ scaleY: -1 });
    return t;
  }, [rotate, flipH, flipV]);

  const handleSave = async () => {
    try {
      setSaving(true);
      const perm = await MediaLibrary.requestPermissionsAsync();
      if (!perm.granted) throw new Error("Thiếu quyền truy cập thư viện ảnh.");

      const actions: ImageManipulator.Action[] = [];
      if (rotate) actions.push({ rotate });
      if (flipH || flipV) actions.push({ flip: { horizontal: flipH, vertical: flipV } });
      if (cropSquare) actions.push({ crop: { originX: 0, originY: 0, width: 600, height: 600 } });

      const result = await ImageManipulator.manipulateAsync(imageUri, actions, {
        compress: 1,
        format: ImageManipulator.SaveFormat.JPEG,
      });

      const asset = await MediaLibrary.createAssetAsync(result.uri);
      const album = await MediaLibrary.getAlbumAsync("ImageEditor");
      if (album) await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
      else await MediaLibrary.createAlbumAsync("ImageEditor", asset, false);

      const record: EditedImage = {
        id: uuidv4(),
        originalUri: imageUri,
        editedUri: result.uri,
        savedAt: Date.now(),
      };

      const existing = await AsyncStorage.getItem(STORAGE_KEY);
      const parsed = existing ? JSON.parse(existing) : [];
      parsed.unshift(record);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));

      Alert.alert("✅ Thành công", "Ảnh đã được lưu!", [
        { text: "Xem danh sách", onPress: () => router.push("/gallery") },
        { text: "OK" },
      ]);
    } catch (e: any) {
      Alert.alert("Lỗi", e.message || "Không thể lưu ảnh.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.previewWrap}>
        <Image source={{ uri: imageUri }} style={[styles.image, { transform: transforms }]} resizeMode="contain" />
        {saving && (
          <View style={styles.overlay}>
            <ActivityIndicator size="large" />
          </View>
        )}
      </View>

      <EditorToolbar
        onRotate={() => setRotate((r) => (r + 90) % 360)}
        onFlipH={() => setFlipH((v) => !v)}
        onFlipV={() => setFlipV((v) => !v)}
        onCropSquare={() => setCropSquare((v) => !v)}
        onReset={() => {
          setRotate(0);
          setFlipH(false);
          setFlipV(false);
          setCropSquare(false);
        }}
        onSave={handleSave}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc" },
  previewWrap: {
    flex: 1,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  image: { width: "100%", height: "100%" },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
});
