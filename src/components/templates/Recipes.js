import React from 'react';
import Shell from "./Shell";
import FilterHelper from "../molecules/FilterHelper";

const Recipes = ({handler, text}) => {
    const sizeOptions = [
        {text: "All", value: ""},
        {text: "Small", value: "small"},
        {text: "Medium", value: "medium"},
        {text: "Large", value: "large"},
    ];

    return (
        <Shell hideMenu={true}>
            <h1 className="text-2xl font-semibold text-gray-900">Hello</h1>


            <div>
                <label htmlFor="input_search" className="sr-only">Search</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>

                    </div>
                    <input id="input_search" className="form-input block w-full pl-10 sm:text-sm sm:leading-5"
                           placeholder="Type the name..."/>
                </div>
            </div>


            <FilterHelper dropdownOptions={sizeOptions}/>

        </Shell>
    )
};

export default Recipes;
