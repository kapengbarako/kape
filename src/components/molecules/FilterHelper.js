import React from 'react';
import ButtonDropdownOptions from "../atoms/ButtonDropdownOptions";

const FilterHelper = ({label, dropdownOptions}) => {


    return (
        <span>
            <ButtonDropdownOptions label={label} dropdownOptions={dropdownOptions}/>
        </span>
    )
};

export default FilterHelper;
