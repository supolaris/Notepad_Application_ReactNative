import React from "react";
import LottieView from "lottie-react-native";

export default function StartupLottie() {
  return (
    <LottieView
      source={require("../../../assets/lottieFiles/startupLottie.json")}
      style={{width: "90%", height: "100%"}}
      autoPlay
      loop
    />
  );
}