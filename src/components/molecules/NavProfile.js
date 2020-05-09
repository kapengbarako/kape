import React from 'react';

const NavProfile = ({mobile, text}) => {
    return (
        <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <a href="#" className="flex-shrink-0 group block focus:outline-none">
                <div className="flex items-center">
                    <div>
                        <img className="inline-block h-9 w-9 sm:h-10 sm:w-10 rounded-full"
                             src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                             alt=""/>
                    </div>
                    <div className="ml-3">
                        <p className="text-sm leading-5 font-medium text-gray-700 group-hover:text-gray-900 sm:text-base sm:leading-6">
                            Tom Cook
                        </p>
                        <p className="text-xs leading-4 font-medium sm:text-sm sm:leading-5 group-focus:underline
                            text-gray-500 group-hover:text-gray-700 transition ease-in-out duration-150">
                            View profile
                        </p>
                    </div>
                </div>
            </a>
        </div>
    )
};

export default NavProfile
