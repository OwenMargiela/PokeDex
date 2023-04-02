import React from "react";
import Select from "react-select";
import styled from "styled-components";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
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
    window.location.href = `${url}/${selectedOption.value}`;
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
