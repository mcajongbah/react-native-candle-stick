import { SafeAreaView } from "react-native";
import { Candle } from "./components/Candle";
import Chart from "./components/Chart";
import Header from "./components/Header";
import candles from "./components/data.json";

const data = candles.slice(-120);

const getDomain = (rows: Candle[]): [number, number] => {
  const values = rows.map(({ high, low }) => [high, low]).flat();
  return [Math.min(...values), Math.max(...values)];
};
const domain = getDomain(candles);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <Header candles={data} />
      <Chart {...{ data, domain }} />
    </SafeAreaView>
  );
}
