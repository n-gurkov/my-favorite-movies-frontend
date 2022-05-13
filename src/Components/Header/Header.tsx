import { MenuItem, Select } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import logo from "../LoginPage/assets/logo.svg";
import { HeaderWrapper, LogoWrapper } from "./assets/styles";

export const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <img src={logo} />
      </LogoWrapper>
      My favorite movies
      <Select
        defaultValue="en-US"
        onChange={(event) => i18n.changeLanguage(event.target.value as string)}
      >
        <MenuItem value="en-US">{t("header.en")}</MenuItem>

        <MenuItem value="ru-RU">{t("header.ru")}</MenuItem>
      </Select>
    </HeaderWrapper>
  );
};
