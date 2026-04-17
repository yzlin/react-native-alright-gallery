import { LegendList } from "@legendapp/list/react-native";
import { useState } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import Gallery from "react-native-alright-gallery";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const GRID_COLUMNS = 2;
const GRID_PADDING = 12;
const GRID_SPACING = 12;

const images = [
  "https://picsum.photos/seed/alright-1/1000/1000",
  "https://picsum.photos/seed/alright-2/1000/1000",
  "https://picsum.photos/seed/alright-3/1000/1000",
];

export default function App() {
  return (
    <SafeAreaProvider>
      <Content />
    </SafeAreaProvider>
  );
}

function Content() {
  const insets = useSafeAreaInsets();

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <View style={styles.container}>
      {selectedIndex === null ? (
        <LegendList
          columnWrapperStyle={styles.gridRow}
          contentContainerStyle={[
            styles.gridContent,
            {
              paddingTop: insets.top + GRID_PADDING,
              paddingBottom: insets.bottom + GRID_PADDING,
            },
          ]}
          data={images}
          keyExtractor={(item) => item}
          numColumns={GRID_COLUMNS}
          recycleItems
          renderItem={({ item, index }) => (
            <Pressable
              accessibilityRole="button"
              onPress={() => setSelectedIndex(index)}
              style={styles.tile}
            >
              <Image source={{ uri: item }} style={styles.tileImage} />
            </Pressable>
          )}
        />
      ) : (
        <Gallery
          key={selectedIndex}
          data={images}
          initialIndex={selectedIndex}
          onSwipeToClose={() => setSelectedIndex(null)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  gridContent: {
    flexGrow: 1,
    padding: GRID_PADDING,
  },
  gridRow: {
    columnGap: GRID_SPACING,
    rowGap: GRID_SPACING,
  },
  tile: {
    aspectRatio: 1,
    borderRadius: 20,
    overflow: "hidden",
    width: "100%",
  },
  tileImage: {
    ...StyleSheet.absoluteFillObject,
  },
});
