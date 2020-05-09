import React from 'react';
import Badge from "../atoms/Badge";

const ItemCard = ({name, address}) => {


    //https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80
    //The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.
    return (
        <div className="">
            <div className="relative h-48">
                <img className="absolute h-full w-full object-cover rounded-lg shadow-md"
                     src="https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                     alt="restaurant"/>
            </div>
            <div className="relative -mt-12">
                <div className="bg-white p-6 rounded-lg shadow-lg flex mb-4">
                    <div className="w-4/5 h-12">
                        <h4 className="mt-1 font-semibold text-lg leading-tight truncate ">{name}</h4>
                        <div className="flex mb-4 text-gray-600 text-sm mt-1">
                            <span>
                                <svg className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                            </span>
                            <span className="pl-1">
                                {address}
                            </span>
                        </div>
                    </div>
                    <div className="w-1/5 h-12">
                        <Badge text={"small"}/>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex mb-4 -mt-8 h-20">
                    <span className="relative z-0 inline-flex shadow-sm">
                      <button type="button"
                              className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
                        <svg className="-ml-1 mr-2 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/>
                        </svg>
                        Bookmark
                      </button>
                      <button type="button"
                              className="-ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
                            <svg className="-ml-1 mr-2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                            </svg>
                          View
                      </button>
                    </span>
                </div>
            </div>
        </div>
    )
};

export default ItemCard;
