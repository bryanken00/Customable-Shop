import React from "react";
import { Typography } from "antd";

const { Text: ANTText } = Typography;

const fontSize = {
  sm: "0.875rem", // Small size (14px)
  md: "1rem", // Medium size (16px)
  lg: "1.25rem", // Large size (20px)
  xl: "1.5rem", // Extra large size (24px)
  "2xl": "2rem", // Double extra large size (32px)
  "3xl": "2.5rem", // Triple extra large size (40px)
};

const Text = ({ color, size = "sm", bold, title, ...rest }) => {
  return (
    <ANTText
      style={{
        color: color ? color : "",
        fontSize: fontSize[size],
        fontWeight: bold ? "bold" : "",
      }}
      {...rest}
    >
      {title}
    </ANTText>
  );
};

export default Text;
