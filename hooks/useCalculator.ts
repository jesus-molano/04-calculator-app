import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  substract = "-",
  multiply = "×",
  divide = "÷",
  module = "%",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState("0");
  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("0");
  const [hasOperation, setHasOperation] = useState(false);
  const [hasError, setHasError] = useState(false);
  const lastOperation = useRef<Operator>();

  const setError = () => {
    setNumber("Error");
    setFormula("Error");
    setHasError(true);
    setHasOperation(false);
    lastOperation.current = undefined;
  };

  const calculateSubResult = () => {
    if (!lastOperation.current) return Number(number);

    const num1 = Number(prevNumber);
    const num2 = Number(number);

    if (isNaN(num1) || isNaN(num2)) {
      setError();
      return NaN;
    }

    switch (lastOperation.current) {
      case Operator.add:
        return num1 + num2;
      case Operator.substract:
        return num1 - num2;
      case Operator.multiply:
        return num1 * num2;
      case Operator.divide:
        if (num2 === 0) {
          setError();
          return NaN;
        }
        return num1 / num2;
      case Operator.module:
        if (num2 === 0) {
          setError();
          return NaN;
        }
        return (num1 * num2) / 100;
      default:
        return Number(number);
    }
  };

  const buildNumber = (value: string) => {
    if (hasError) {
      setNumber(value);
      setHasError(false);
      setHasOperation(true);
      return;
    }

    setHasOperation(true);
    if (number.includes(".") && value === ".") return;
    if (number.startsWith("0") || number.startsWith("-0")) {
      if (value === ".") {
        return setNumber(number + value);
      }
      if (value === "0" && number.includes(".")) {
        return setNumber(number + value);
      }
      if (value !== "0" && !number.includes(".")) {
        return setNumber(value);
      }
      if (value === "0" && !number.includes(".")) return;
    }
    setNumber(number + value);
  };

  const toggleSign = () => {
    if (number.includes("-")) {
      return setNumber(number.replace("-", ""));
    }
    setNumber("-" + number);
  };

  const deleteLastNumber = () => {
    if (number.length === 1 || (number.length === 2 && number.includes("-"))) {
      setNumber("0");
      setHasOperation(false);
      return;
    }
    setNumber(number.slice(0, -1));
  };

  const handleOperation = (operation: Operator) => {
    if (hasError) {
      return;
    }

    setHasOperation(true);

    if (lastOperation.current) {
      const result = calculateSubResult();
      if (isNaN(result)) {
        return;
      }
      setPrevNumber(result.toString());
      setNumber("0");
      lastOperation.current = operation;
      setFormula(`${result} ${operation}`);
    } else {
      if (number.endsWith(".")) {
        setPrevNumber(number.slice(0, -1));
      } else {
        setPrevNumber(number);
      }
      setNumber("0");
      lastOperation.current = operation;
      setFormula(`${number} ${operation}`);
    }
  };

  const calculateResult = () => {
    if (!lastOperation.current || hasError) return;

    const result = calculateSubResult();
    if (isNaN(result)) {
      return;
    }
    setNumber(result.toString());
    setFormula(result.toString());
    lastOperation.current = undefined;
    setPrevNumber("0");
    setHasOperation(false);
  };

  return {
    // States
    formula,
    number,
    prevNumber,
    hasOperation: hasOperation && !hasError,
    hasError,

    // Methods
    buildNumber,
    clean: () => {
      setNumber("0");
      setPrevNumber("0");
      setFormula("0");
      setHasOperation(false);
      setHasError(false);
      lastOperation.current = undefined;
    },
    toggleSign,
    deleteLastNumber,
    calculateResult,

    // Operations
    addOperation: () => handleOperation(Operator.add),
    substractOperation: () => handleOperation(Operator.substract),
    multiplyOperation: () => handleOperation(Operator.multiply),
    divideOperation: () => handleOperation(Operator.divide),
    moduleOperation: () => handleOperation(Operator.module),
  };
};
