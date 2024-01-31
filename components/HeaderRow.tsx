import React from "react";
import { Text, View } from "react-native";

type Props = {
  label: string;
  value: string;
  color?: string;
};

const HeaderRow = ({ label, value, color }: Props) => {
  return (
    <View className="flex flex-row justify-between">
      <Text className="text-[18px] text-gray-800">{label}</Text>
      <Text
        style={{
          fontVariant: ["tabular-nums"],
          color: color || "black",
          fontSize: 18,
        }}
      >
        {value}
      </Text>
    </View>
  );
};

export default HeaderRow;
