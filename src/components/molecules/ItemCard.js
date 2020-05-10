import React from 'react';

const ItemCard = ({name, address}) => {


    //https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80
    //The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.
    return (
        <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="">
                <img className="h-full w-full"
                     src="https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                     alt="restaurant"/>
            </div>

            <div className="flex mb-4">
                <div className="w-4/6">
                    <div className="col-span-2 ml-4 mt-4">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            {name}
                        </h3>
                        <p className="mt-1 text-sm leading-5 text-gray-500">
                            {address}
                        </p>
                    </div>
                </div>
                <div className="w-2/6 pt-4">
                    <span className="relative z-0 inline-flex shadow-sm">
                      <button type="button"
                              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                            </svg>
                      </button>
                      <button type="button"
                              className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150">
                       <svg className="h-5 w-5"
                            fill="currentColor" viewBox="0 0 20 20">
                          <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/>
                      </svg>
                      </button>
                    </span>
                </div>
            </div>


        </div>
    )
};

export default ItemCard;
