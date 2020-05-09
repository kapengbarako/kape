import React from 'react';
import ButtonDropdownOptions from "../atoms/ButtonDropdownOptions";

const FilterHelper = ({dropdownOptions}) => {


    return (
        <div>
            <ButtonDropdownOptions label={"Size"} dropdownOptions={dropdownOptions}/>
        </div>
    )
};

export default FilterHelper;
