import { View, Pressable, Text, StyleSheet } from "react-native";

type Props = {
  onRotate: () => void;
  onFlipH: () => void;
  onFlipV: () => void;
  onCropSquare: () => void;
  onReset: () => void;
  onSave: () => void;
};

export default function EditorToolbar(props: Props) {
  return (
    <View style={styles.bar}>
      <Button label="↻ Xoay" onPress={props.onRotate} />
      <Button label="⇋ Lật ngang" onPress={props.onFlipH} />
      <Button label="⇵ Lật dọc" onPress={props.onFlipV} />
      <Button label="▢ Cắt vuông" onPress={props.onCropSquare} />
      <Button label="⟲ Reset" onPress={props.onReset} />
      <Button label="💾 Lưu" onPress={props.onSave} />
    </View>
  );
}

function Button({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable style={styles.btn} onPress={onPress}>
      <Text style={styles.txt}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#fff",
  },
  btn: {
    backgroundColor: "#2563eb",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    marginVertical: 4,
  },
  txt: { color: "#fff", fontWeight: "bold" },
});
