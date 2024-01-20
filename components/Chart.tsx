import { scaleBand, scaleLinear } from "d3-scale";
import React from "react";
import { Dimensions } from "react-native";
import { Svg } from "react-native-svg";
import Candle, { Candle as CandleModel } from "./Candle";

export const { width: size } = Dimensions.get("window");
const HEIGHT = size * 1.8;

interface ChartProps {
  data: CandleModel[];
  domain: [number, number];
}

const Chart: React.FC<ChartProps> = ({ data, domain }) => {
  const scaleY = scaleLinear().domain(domain).rangeRound([HEIGHT, 0]);
  const scaleX = scaleBand()
    .domain(data.map((candle) => candle.date))
    .range([0, size])
    .padding(0.2);

  return (
    <Svg width={size} height={HEIGHT}>
      {data.map((candle, index) => {
        return (
          <Candle
            key={candle.date}
            {...{ candle, index, scaleY, scaleX }}
          />
        );
      })}
    </Svg>
  );
};

export default Chart;
