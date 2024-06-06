import React from "react";
import { Input as ANTInput } from "antd";
import { Text } from "./";

const Input = ({ label, labelSize, secure, ...rest }) => {
  return (
    <div className="p-1">
      {label && <Text size={labelSize} title={label} />}
      {secure ? <ANTInput.Password {...rest} /> : <ANTInput {...rest} />}
    </div>
  );
};

export default Input;
