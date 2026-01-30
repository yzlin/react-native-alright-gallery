import { StyleSheet, View } from "react-native";
import Gallery from "react-native-alright-gallery";
import { SafeAreaProvider } from "react-native-safe-area-context";

const images = [
  "https://picsum.photos/seed/alright-1/1000/1000",
  "https://picsum.photos/seed/alright-2/1000/1000",
  "https://picsum.photos/seed/alright-3/1000/1000",
];

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Gallery
          data={images}
          onIndexChange={(newIndex) => {
            console.log("Index changed:", newIndex);
          }}
        />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
