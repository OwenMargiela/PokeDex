import React from "react";
import Select from "react-select";
import styled from "styled-components";


const options = [
  { value: "Kanto", label: "Kanto" },
  { value: "Jhoto", label: "Jhoto" },
  { value: "Hoenn", label: "Hoenn" },
  { value: "Sinnoh", label: "Sinnoh" },
  { value: "Unova", label: "Unova" },
  { value: "Kalos", label: "Kalos" },
  { value: "Alola", label: "Alola" },
  { value: "Galar", label: "Galar" },
  { value: "Paldea", label: "Paldea" },
];

const Dropdown = () => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "white",
      borderRadius: "10px",
      borderColor: "transparent",
      boxShadow: "none",
      "&:hover": {
        borderColor: "transparent",
      },
    }),
  };

  const handleChange = (selectedOption) => {
    
    window.location.href = `generation/${selectedOption.value}`;
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
