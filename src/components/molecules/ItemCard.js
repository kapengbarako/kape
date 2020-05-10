import React from 'react';

const ItemCard = ({name, address}) => {


    //https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80
    //The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.
    return (
        <div className="overflow-hidden rounded-lg">
            <div className="">
                <div className="relative h-48">
                    <img className="absolute h-full w-full object-cover rounded-lg shadow-md"
                         src="https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                         alt="restaurant"/>
                </div>
            </div>
            <div className="">
                <div className="px-1 py-3">
                    <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-no-wrap">

                        <div className="ml-2 mt-3">
                            <div className="flex items-center">
                                <div className="ml-4">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                                        {name}
                                    </h3>
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
                            </div>
                        </div>

                        <div className="ml-4 flex-shrink-0 flex">
                            <span className="sm:block ml-3 shadow-sm rounded-md">
                              <button type="button"
                                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
                                <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" fill="currentColor"
                                     viewBox="0 0 20 20">
                                  <path fill-rule="evenodd"
                                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                                        clip-rule="evenodd"/>
                                </svg>
                                View
                              </button>
                            </span>
                            <span className=" sm:block ml-3 shadow-sm rounded-md">
                              <button type="button"
                                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
                                  <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                                       fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/>
                                    </svg>
                                    Bookmark
                              </button>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default ItemCard;
