import { View, Text } from "react-native";
import { useSharedValue, useDerivedValue } from "react-native-reanimated";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TestComponent number={0} />
    </View>
  );
}

const TestComponent = ({ number }) => {
  const indexToKey = useSharedValue(["foo", "bar", "baz"]);
  const keyToIndex = useDerivedValue(() =>
    Object.fromEntries(indexToKey.value.map((key, index) => [key, index]))
  );

  return <Text>{indexToKey.value[number] ?? "Not found"}</Text>;
};
