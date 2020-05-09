import React from 'react';
import Badge from "../atoms/Badge";

const ItemCard = ({name, address}) => {


    //https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80
    //The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.
    return (
        <div>
            <div className="relative pb-5/6">
                <img className="absolute h-full w-full object-cover rounded-lg shadow-md"
                     src="https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                     alt="restaurant"/>
            </div>
            <div className="relative px-4 -mt-16">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-baseline">
                        <Badge text={"small"}/>
                    </div>
                    <h4 className="mt-1 font-semibold text-lg leading-tight truncate">{name}</h4>
                    <div className="flex mb-4 text-gray-600 text-sm mt-1">
                        <span>
                            <svg className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>

                        </span>
                        <span className="pl-1">
                            {address}
                        </span>

                    </div>
                    <button type="button"
                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                        View
                    </button>
                </div>
            </div>
        </div>
    )
};

export default ItemCard;
