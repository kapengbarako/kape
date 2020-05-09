import React from 'react';

const NavLink = ({mobile, focus, children, text, location}) => {

    const focusCommon = "group flex items-center px-2 py-2 font-medium text-gray-900 rounded-md bg-gray-100 transition ease-in-out duration-150 focus:bg-gray-200 focus:outline-none ";
    const focusLinkStyle = mobile ? "text-base leading-6" : "text-sm leading-5 hover:text-gray-900 hover:bg-gray-100";

    const linkCommon = "mt-1 group flex font-medium text-gray-600 items-center px-2 py-2 transition ease-in-out duration-150 hover:bg-gray-50 focus:bg-gray-100 hover:text-gray-900 ";
    const linkStyle = mobile ? "text-base leading-6 focus:text-gray-900" : "text-sm leading-5 rounded-md focus:outline-none";

    const className = focus ? focusCommon + focusLinkStyle : linkCommon + linkStyle;

    return (
        <div>
            <a href={location}
               className={className}>
                {children}
                {text}
            </a>
        </div>

    )
};

export default NavLink
