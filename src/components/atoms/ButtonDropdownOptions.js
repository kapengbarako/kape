import React, {useState} from 'react';

const ButtonDropdownOptions = ({label, dropdownOptions}) => {
    return (
        <div className="pt-2 relative inline-block text-left">
              <span className="relative z-0 inline-flex shadow-sm">
              <span className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white">
                  {label}:
              </span>
              <select id="size"
                      className="-ml-px block form-select w-full pl-3 pr-9 py-2 rounded-l-none rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
                      {
                          dropdownOptions.map(o => {
                              return (
                                  <option key={o.value} value={o.value}>
                                      {o.text}
                                  </option>
                              )
                          })
                      }
              </select>
            </span>
        </div>
    )
};

export default ButtonDropdownOptions;
