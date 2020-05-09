import React from 'react';
import NavLink from "./NavLink";

const NavLinks = ({className, mobile}) => {
    const iconStyle = "mr-4 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150";
    // Need to dynamically change focus
    return (
        <div>
            <nav className={className}>
                <NavLink
                    focus={true}
                    mobile={mobile}
                    text="Dashboard"
                    location="#">
                    <svg
                        className={iconStyle}
                        stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"/>
                    </svg>
                </NavLink>
                <NavLink
                    focus={false}
                    mobile={mobile}
                    text="Projects"
                    location="#">
                    <svg
                        className={iconStyle}
                        stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
                    </svg>
                </NavLink>

                <NavLink
                    focus={false}
                    mobile={mobile}
                    text="Reports"
                    location="#">
                    <svg
                        className={iconStyle}
                        stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                </NavLink>

            </nav>
        </div>

    )
};

export default NavLinks
