import React from "react";
import LottieView from "lottie-react-native";

export default function AddLottie() {
  return (
    <LottieView
      source={require("../../../assets/lottieFiles/addLottie.json")}
      style={{width: 100, height: 100}}
      autoPlay
      loop
    />
  );
}