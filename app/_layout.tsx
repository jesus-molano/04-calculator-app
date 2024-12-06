import { useEffect } from "react";
import { Platform, View } from "react-native";
import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { globalStyles } from "@/styles/global-styles";
import * as NavigationBar from "expo-navigation-bar";

const isAndroid = Platform.OS === "android";
if (isAndroid) {
  NavigationBar.setBackgroundColorAsync("black");
}

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (!loaded) {
      return;
    }
  }, [loaded]);

  return (
    <View style={globalStyles.background}>
      <Slot />
      <StatusBar style="light" />
    </View>
  );
}
