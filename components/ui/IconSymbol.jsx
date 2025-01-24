import React from "react";
import { Ionicons } from "@expo/vector-icons"; // Ensure the correct library is used

const IconSymbol = ({ name, size, color }) => {
  return <Ionicons name={name} size={size} color={color} />;
};

export default IconSymbol;
