import React from "react";
import { Pressable, Text, View } from "react-native";
import { globalStyles } from "@/styles/global-styles";
import { Colors } from "@/constants/Colors";
import * as Haptics from "expo-haptics";

interface CustomButtonProps {
  label: string | React.ReactNode;
  color?: string;
  textColor?: string;
  doubleSize?: boolean;
  onPress?: () => void;
  fontSize?: "small" | "medium" | "large";
}

const CustomButton = ({
  label,
  color = Colors.darkGray,
  textColor = Colors.textPrimary,
  doubleSize = false,
  onPress,
  fontSize = "medium",
}: CustomButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.6 : 1,
        width: doubleSize ? 180 : 80,
      })}
      onPress={() => {
        onPress && onPress();
        Haptics.selectionAsync();
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      }}
    >
      {typeof label === "string" ? (
        <Text
          style={{
            ...globalStyles.buttonText,
            ...globalStyles[fontSize],
            color: textColor,
          }}
        >
          {label}
        </Text>
      ) : (
        <View style={{ alignItems: "center" }}>{label}</View>
      )}
    </Pressable>
  );
};

export default CustomButton;
