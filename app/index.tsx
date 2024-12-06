import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import CustomText from "@/components/CustomText";
import CustomButton from "@/components/CustomButton";
import { useCalculator } from "@/hooks/useCalculator";
import RemoveIcon from "@/components/RemoveIcon";

export default function CalculatorApp() {
  const {
    formula,
    number,
    prevNumber,
    buildNumber,
    clean,
    toggleSign,
    deleteLastNumber,
    hasOperation,
    divideOperation,
    multiplyOperation,
    substractOperation,
    addOperation,
    moduleOperation,
    calculateResult,
    hasError,
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <CustomText variant="operation">{formula}</CustomText>
        <CustomText variant={hasError ? "error" : "result"}>
          {number}
        </CustomText>
      </View>

      <View style={globalStyles.row}>
        {hasOperation && !hasError ? (
          <CustomButton
            label={<RemoveIcon size={45} color={Colors.textPrimary} />}
            color={Colors.lightGray}
            onPress={deleteLastNumber}
          />
        ) : (
          <CustomButton label="AC" color={Colors.lightGray} onPress={clean} />
        )}
        <CustomButton
          label="±"
          color={Colors.lightGray}
          onPress={toggleSign}
          fontSize="large"
        />
        <CustomButton
          label="%"
          color={Colors.lightGray}
          fontSize="large"
          onPress={moduleOperation}
        />
        <CustomButton
          label="÷"
          color={Colors.rose}
          fontSize="large"
          onPress={divideOperation}
        />
      </View>
      <View style={globalStyles.row}>
        <CustomButton label="7" onPress={() => buildNumber("7")} />
        <CustomButton label="8" onPress={() => buildNumber("8")} />
        <CustomButton label="9" onPress={() => buildNumber("9")} />
        <CustomButton
          label="×"
          color={Colors.rose}
          fontSize="large"
          onPress={multiplyOperation}
        />
      </View>
      <View style={globalStyles.row}>
        <CustomButton label="4" onPress={() => buildNumber("4")} />
        <CustomButton label="5" onPress={() => buildNumber("5")} />
        <CustomButton label="6" onPress={() => buildNumber("6")} />
        <CustomButton
          label="-"
          color={Colors.rose}
          fontSize="large"
          onPress={substractOperation}
        />
      </View>
      <View style={globalStyles.row}>
        <CustomButton label="1" onPress={() => buildNumber("1")} />
        <CustomButton label="2" onPress={() => buildNumber("2")} />
        <CustomButton label="3" onPress={() => buildNumber("3")} />
        <CustomButton
          label="+"
          color={Colors.rose}
          fontSize="large"
          onPress={addOperation}
        />
      </View>
      <View style={globalStyles.row}>
        <CustomButton label="0" doubleSize onPress={() => buildNumber("0")} />
        <CustomButton label="." onPress={() => buildNumber(".")} />
        <CustomButton
          label="="
          color={Colors.rose}
          fontSize="large"
          onPress={calculateResult}
        />
      </View>
    </View>
  );
}
