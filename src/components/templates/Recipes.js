import React from 'react';
import Shell from "./Shell";
import FilterHelper from "../molecules/FilterHelper";
import ResultsContainer from "../organism/ResultsContainer";

const Recipes = ({handler, text}) => {
    const sizeOptions = [
        {text: "All", value: ""},
        {text: "Small", value: "small"},
        {text: "Medium", value: "medium"},
        {text: "Large", value: "large"},
    ];

    const searchOptions = [
        {text: "All", value: ""},
        {text: "Name", value: "name"},
        {text: "Address", value: "address"},
    ];

    return (
        <Shell hideMenu={true}>
            <h1 className="text-2xl font-semibold text-gray-900">Hello</h1>

            <div className="flex mb-4">
                <div className="w-4/5 h-12">
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
                <div className="w-1/5 h-12">
                    <span className="pt-1 pl-2 inline-flex rounded-md shadow-sm">
                      <button type="button"
                              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                            </svg>
                      </button>
                    </span>
                </div>
            </div>

            <div className="grid gap-1 grid-cols-2 w-full">
                <FilterHelper label={"Search"} dropdownOptions={searchOptions}/>
                <FilterHelper label={"Size"} dropdownOptions={sizeOptions}/>
            </div>

            <div className="">
                <ResultsContainer />
            </div>
        </Shell>
    )
};

export default Recipes;
