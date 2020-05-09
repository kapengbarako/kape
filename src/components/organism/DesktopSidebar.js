import React from 'react';
import NavProfile from "../molecules/NavProfile";
import NavLinks from "../molecules/NavLinks";
import Logo from "../atoms/Logo";

const DesktopSidebar = ({handler, text}) => {
    return (
        <div className="hidden md:flex md:flex-shrink-0">
            <div className="flex flex-col w-64 border-r border-gray-200 bg-white">
                <div className="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                    <Logo/>
                    <NavLinks className="mt-5 flex-1 px-2 bg-white" mobile={false}/>

                </div>
                <NavProfile/>
            </div>
        </div>
    )
};

export default DesktopSidebar;
