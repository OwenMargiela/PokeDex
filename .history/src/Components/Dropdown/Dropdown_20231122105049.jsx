import React from "react";
import Select from "react-select";
import styled from "styled-components";

const options = [
  { value: "1", label: "Kanto" },
  { value: "2", label: "Johoto" },
  { value: "3", label: "Hoenn" },
  { value: "4", label: "Sinnoh" },
  { value: "5", label: "Unova" },
  { value: "6", label: "Kalos" },
  { value: "7", label: "Alola" },
  { value: "8", label: "Galar" },
  { value: "10", label: "Paldea" },
];

const Dropdown = () => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "white",
      borderRadius: "10px",
      borderColor: "transparent",
      boxShadow: "none",
      cursor: "not-allowed",
      "&:hover": {
        borderColor: "transparent",
      },
    }),
  };

  const handleChange = (selectedOption) => {
    window.location.href = `/generation/${selectedOption.value}`;
  };

  return (
    <StyledDropdown>
      <Select
        options={options}
        styles={customStyles}
        placeholder="Generations"
        onChange={handleChange}
      />
    </StyledDropdown>
  );
};

const StyledDropdown = styled.div`
  width: 150px;
`;

export default Dropdown;
