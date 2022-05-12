import { MenuItem, Select } from "@mui/material";
import React from "react";
import i18n from "../../i18n";
import logo from "../LoginPage/assets/logo.svg";
import { HeaderWrapper } from "./assets/styles";

export const Header = () => {
  return (
    <HeaderWrapper>
      <img src={logo} width="55" height="55" />
      My favorite movies
      <Select
        defaultValue="en-US"
        onChange={(event) => i18n.changeLanguage(event.target.value as string)}
      >
        <MenuItem value="en-US">EN</MenuItem>

        <MenuItem value="ru-RU">RU</MenuItem>
      </Select>
    </HeaderWrapper>
  );
};
