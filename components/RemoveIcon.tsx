import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface RemoveIconProps {
  size?: number;
  color?: string;
}

const RemoveIcon: React.FC<RemoveIconProps> = ({
  size = 24,
  color = "#FFFFFF",
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18 6H7L3 12L7 18H18C18.5304 18 19.0391 17.7893 19.4142 17.4142C19.7893 17.0391 20 16.5304 20 16V8C20 7.46957 19.7893 6.96086 19.4142 6.58579C19.0391 6.21071 18.5304 6 18 6Z"
        stroke={color}
        strokeWidth={2}
        fill="none"
      />
      <Path
        d="M15 10L11 14M11 10l4 4"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default RemoveIcon;
