import * as React from "react";
import Switch from "@mui/material/Switch";

export const SwitchMenu = ({ checked, handleChange }) => {
  //   const [checked, setChecked] = React.useState(true);

  //   const handleChange = (event) => {
  //     setChecked(event.target.checked);
  //   };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};
