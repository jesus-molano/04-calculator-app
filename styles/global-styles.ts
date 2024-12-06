import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  result: {
    color: Colors.textPrimary,
    fontSize: 70,
    textAlign: "right",
    fontWeight: "400",
  },
  operation: {
    color: Colors.textSecondary,
    fontSize: 35,
    textAlign: "right",
    fontWeight: "300",
  },
  memory: {
    color: Colors.textSecondary,
    fontSize: 25,
    textAlign: "right",
  },
  error: {
    color: Colors.rose,
    fontSize: 40,
    textAlign: "right",
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  button: {
    height: 80,
    width: 80,
    backgroundColor: Colors.darkGray,
    borderRadius: 100,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  buttonText: {
    color: Colors.textPrimary,
    fontSize: 30,
    textAlign: "center",
    padding: 10,
    fontWeight: "300",
    fontFamily: "SpaceMono",
  },
  small: {
    fontSize: 22,
  },
  medium: {
    fontSize: 30,
  },
  large: {
    fontSize: 40,
  },
});
