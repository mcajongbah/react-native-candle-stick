import { ScaleBand, ScaleLinear } from "d3-scale";
import React from "react";
import { G, Line, Rect } from "react-native-svg";

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
  scaleVolume: ScaleLinear<number, number>;
  VOLUME_HEIGHT: number;
}

const Candle: React.FC<CandleProps> = ({
  candle,
  index,
  scaleY,
  scaleX,
  scaleVolume,
  VOLUME_HEIGHT,
}) => {
  const { close, open, high, low, volume } = candle;
  const fill = close > open ? "#138a6e" : "#E33F64";
  const volumeBarHeight = scaleVolume(0) - scaleVolume(volume);
  const volumeBarY =
    scaleY(scaleY.domain()[0]) - volumeBarHeight + VOLUME_HEIGHT;

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
      <Rect
        x={-scaleX.bandwidth() / 2}
        y={volumeBarY}
        width={scaleX.bandwidth()}
        height={volumeBarHeight}
        fill={fill}
        opacity={0.4}
      />
    </G>
  );
};

export default Candle;
