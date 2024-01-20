import React, { useState } from "react";
import { Text, View } from "react-native";
import { Candle } from "./Candle";
import HeaderRow from "./HeaderRow";

type Props = {
  candles: Candle[];
};

const formatValue = (amount: number) => {
  const nf = new Intl.NumberFormat();

  return nf.format(parseFloat(Number(amount).toFixed(2)));
};

const Header = ({ candles }: Props) => {
  const [{ date, open, close, high, low, volume }, _] = useState(candles[0]);
  const diff = `${((close - open) * 100) / open}`;
  const change = close - open < 0 ? diff.substring(0, 5) : diff.substring(0, 4);

  return (
    <View className="bg-black">
      <View className="flex flex-row p-4">
        <View
          className="flex-1"
          style={{
            gap: 8,
          }}
        >
          <HeaderRow label="Open" value={formatValue(open)} />
          <HeaderRow label="Close" value={formatValue(close)} />
          <HeaderRow label="Volume" value={formatValue(volume)} />
        </View>
        <View className="w-8" />
        <View
          className="flex-1"
          style={{
            gap: 8,
          }}
        >
          <HeaderRow label="High" value={formatValue(high)} />
          <HeaderRow label="Low" value={formatValue(low)} />
          <HeaderRow
            label="Change"
            value={`${change}%`}
            color={close - open > 0 ? "#4AFA9A" : "#E33F64"}
          />
        </View>
      </View>
      <View className="p-4">
        <Text className="text-white">
          {new Date(date).toLocaleString(undefined, {
            hour: "numeric",
            minute: "numeric",
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </Text>
      </View>
    </View>
  );
};

export default Header;
