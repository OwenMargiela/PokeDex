import React from "react";
import Select from "react-select";
import styled from "styled-components";

const options = [
  { value: "option1", label: "Kanto" },
  { value: "option2", label: "Jhoto" },
  { value: "option3", label: "Hoenn" },
  { value: "option3", label: "Hoenn" },
  { value: "option3", label: "Sinnoh" },
  { value: "option3", label: "Unova" },
  { value: "option3", label: "Kalos" },
  { value: "option3", label: "Alola" },
  { value: "option3", label: "Galar" },
  { value: "option3", label: "Paldea" },
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
    console.log(`generation/${selectedOption.value}`);
    // window.location.href = `${url}/${selectedOption.value}`;
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
