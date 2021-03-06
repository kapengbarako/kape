import React from 'react';

const Logo = ({handler, text}) => {
    return (
        <div className="flex-shrink-0 flex items-center px-4">
            <img className="h-8 w-auto" src="/img/logos/workflow-logo-on-white.svg" alt="Workflow"/>
        </div>
    )
};

export default Logo;
