import { Text, type TextProps } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";

interface CustomTextProps extends TextProps {
  variant?: "result" | "operation" | "memory" | "error";
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  variant = "result",
  style,
  ...rest
}) => {
  const textStyles = [
    { fontFamily: "SpaceMono", color: Colors.textPrimary },
    variant === "result" && globalStyles.result,
    variant === "operation" && globalStyles.operation,
    variant === "memory" && globalStyles.memory,
    variant === "error" && globalStyles.error,
    style,
  ];

  return (
    <Text style={textStyles} numberOfLines={1} adjustsFontSizeToFit {...rest}>
      {children}
    </Text>
  );
};

export default CustomText;
