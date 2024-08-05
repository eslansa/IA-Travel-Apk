import Login from "@/components/Login";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text
      style={{
        fontFamily: 'rubik',
        fontSize: 16,
      }}
      >Edit app/index.tsx to edit this screen.</Text>
      <Login />
    </View>
  );
}
