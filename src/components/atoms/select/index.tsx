import React from "react";
import { Autocomplete } from '@material-ui/lab';
import { TextField } from "@material-ui/core";

type Props = {
  className: string;
  id: string;
  label: string;
  options: {
    title: string;
  }[];
  limit: number;
  placeholder?: string;
  isMultiple?: boolean;
  children?: never;
};

/**
 * 渡されたデータをプルダウンで表示するテキストフィールドを提供します。
 * 渡すパラメータは上の type Props を参照してください。
 */

const Select: React.FC<Props> = (props) => {
  const { className, id, label, options, limit, placeholder, isMultiple } = props;
  return (
    <Autocomplete
      id={id}
      options={options}
      getOptionLabel={(option) => option.title ? option.title : ""}
      limitTags={limit}
      defaultValue={[]}
      multiple={isMultiple}
      renderInput={(params) => (
        <TextField {...params} className={className} label={label} placeholder={placeholder} variant="outlined" />
      )} />
  );
};

export default Select;
