import { ScaleBand, ScaleLinear } from "d3-scale";
import React from "react";
import { G, Line } from "react-native-svg";

export interface Candle {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  adj_close: number;
}

interface CandleProps {
  candle: Candle;
  index: number;
  scaleY: ScaleLinear<number, number>;
  scaleX: ScaleBand<string>;
}

const Candle: React.FC<CandleProps> = ({ candle, index, scaleY, scaleX }) => {
  const { close, open, high, low } = candle;
  const fill = close > open ? "#4AFA9A" : "#E33F64";

  return (
    <G key={index} x={scaleX(candle.date)}>
      <Line
        x1={0}
        x2={0}
        y1={scaleY(low)}
        y2={scaleY(high)}
        stroke={fill}
        strokeLinecap="round"
      />

      <Line
        x1={0}
        x2={0}
        y1={scaleY(open)}
        y2={scaleY(close)}
        stroke={fill}
        strokeLinecap="round"
        strokeWidth={scaleX.bandwidth()}
      />
    </G>
  );
};

export default Candle;
