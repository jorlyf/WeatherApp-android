import React from "react";
import CitySelect from "./city-select";
import Logo from "../assets/icon.png";
import "./header.css";

const Header = ({
  selectedCityName,
  setSelectedCityName,
}) => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} width={42} height={42} />
      </div>

      <CitySelect
        selectedCityName={selectedCityName}
        setSelectedCityName={setSelectedCityName}
      />
    </header>
  );
};

export default Header;
