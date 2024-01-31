import { scaleBand, scaleLinear } from "d3-scale";
import React from "react";
import { Dimensions } from "react-native";
import { Svg } from "react-native-svg";
import Candle, { Candle as CandleModel } from "./Candle";

export const { width: size } = Dimensions.get("window");
const HEIGHT = size;
const VOLUME_HEIGHT = 100;

interface ChartProps {
  data: CandleModel[];
  domain: [number, number];
}

const Chart: React.FC<ChartProps> = ({ data, domain }) => {
  const maxVolume = Math.max(...data.map((d) => d.volume));

  const scaleY = scaleLinear().domain(domain).rangeRound([HEIGHT, 0]);
  const scaleX = scaleBand()
    .domain(data.map((candle) => candle.date))
    .range([0, size])
    .padding(0.2);

  const scaleVolume = scaleLinear()
    .domain([0, maxVolume])
    .range([VOLUME_HEIGHT, 0]);

  return (
    <Svg width={size} height={HEIGHT * 1.2}>
      {data.map((candle, index) => {
        return (
          <Candle
            key={candle.date}
            {...{ candle, index, scaleY, scaleX, scaleVolume, VOLUME_HEIGHT }}
          />
        );
      })}
    </Svg>
  );
};

export default Chart;
