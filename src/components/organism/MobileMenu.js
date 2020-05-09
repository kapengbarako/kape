import React from 'react';
import NavProfile from "../molecules/NavProfile";
import NavLinks from "../molecules/NavLinks";
import Logo from "../atoms/Logo";

const MobileMenu = ({hidden, handler}) => {
    const hideMenu = hidden ? "hidden transition ease-in-out duration-300 transform" : "md:hidden";

    return (
        // Off-canvas menu for mobile
        <div className={hideMenu}>
            <div className="fixed inset-0 flex z-40">
                <div className="fixed inset-0">
                    <div className="absolute inset-0 bg-gray-600 opacity-75"/>
                </div>
                <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                    <div className="absolute top-0 right-0 -mr-14 p-1">
                        <button onClick={handler}
                            className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                            aria-label="Close sidebar">
                            <svg className="h-6 w-6 text-white" stroke="currentColor" fill="none"
                                 viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                        <Logo/>
                        <NavLinks className="mt-5 px-2" mobile={true}/>
                    </div>
                    <NavProfile/>
                </div>
                <div className="flex-shrink-0 w-14">
                </div>
            </div>
        </div>
    )
};

export default MobileMenu;
