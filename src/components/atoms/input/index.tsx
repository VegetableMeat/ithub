import React from "react";
import { TextField } from "@material-ui/core";

type Props = {
  className: string;
  id: string;
  label: string;
  type: string;
  isStandard?: boolean;
};

/**
 * テキストフィールドを提供します。
 * 渡すパラメータは上の type Props を参照してください。
 */

const Input: React.FC<Props> = (props) => {
  const { className, id, label, type, isStandard } = props;
  return (
    <TextField
      className={className}
      id={id}
      label={label}
      type={type}
      variant={isStandard ? "standard" : "outlined"}
    />
  );
};

export default Input;
