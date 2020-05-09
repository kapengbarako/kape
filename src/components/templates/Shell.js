import React, {useState} from 'react';
import MobileMenu from "../organism/MobileMenu";
import DesktopSidebar from "../organism/DesktopSidebar";

const Shell = ({children, handler, text}) => {
    const [hide, setHide] = useState(false);
    const closeMobileMenu = (e) => {
        setHide(true);
    };
    const openMobileMenu = (e) => {
        setHide(false);
    };

    return (
        <div className="h-screen flex overflow-hidden bg-white">
            <MobileMenu handler={closeMobileMenu} hidden={hide}/>
            <DesktopSidebar/>


            <div className="flex flex-col w-0 flex-1 overflow-hidden">
                <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
                    <button onClick={openMobileMenu}
                        className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
                        aria-label="Open sidebar">
                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>
                <main className="flex-1 relative z-0 overflow-y-auto pt-2 pb-6 focus:outline-none md:py-6" tabIndex="0">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
};

export default Shell;
