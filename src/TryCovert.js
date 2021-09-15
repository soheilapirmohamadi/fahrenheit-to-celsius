import React from "react";
import reactDom from "react-dom";
// import Farens from "./Farens";

export function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

export function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }

export function tryConvert(Farens, convert) {
    const input = parseFloat(Farens);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }