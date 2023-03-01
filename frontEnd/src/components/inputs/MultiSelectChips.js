import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { ComponentContext } from "../../context/ComponentContext";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultiSelectChips({
  chipLabel,
  chipsArray,
  onChangeHandler,
  defaultTileValueProp,
}) {
  const theme = useTheme();

  const [personName, setPersonName] = React.useState([]);
  const [defaultValue, setDefaultValue] = React.useState([]);

  React.useEffect(() => {
    defaultTileValueProp && setDefaultValueHandler();
  }, [defaultTileValueProp]);

  React.useEffect(() => {
    onChangeHandler(personName);
  }, [personName]);

  const handleChange = (event) => {
    // console.log("event", event.target.value);
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const setDefaultValueHandler = () => {
    if (typeof defaultTileValueProp != "object") {
      return setDefaultValue([defaultTileValueProp]);
    }
    setDefaultValue(defaultTileValueProp);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 350, display: "flex", flexWrap: "wrap" }}>
        <InputLabel id="demo-multiple-chip-label">{chipLabel}</InputLabel>
        <Select
          multiple={true}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          value={personName.length > 0 ? personName : defaultValue}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label={chipLabel} />}
          renderValue={(selected) => (
            <Box
              sx={{
                width: "35inch",
                display: "flex",
                flexWrap: "wrap",
                gap: 0.5,
              }}
            >
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {chipsArray.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
