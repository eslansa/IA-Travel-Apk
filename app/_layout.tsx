import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
  useFonts({
    'rubik': require('../assets/fonts/Rubik-Regular.ttf'),
    'rubik-medium': require('../assets/fonts/Rubik-Bold.ttf'),
    'rubik-bold': require('../assets/fonts/Rubik-Medium.ttf'),
  })
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
