import React from 'react';

const Badge = ({text}) => {
    const color = (type) => {
      if (type.toUpperCase() === "SMALL" )
          return "bg-teal-200 text-teal-800";
      else {
          return "bg-gray-200 text-gray-800";
      }
    };

    return (
        <span className={"inline-block text-xs px-2 rounded-full uppercase font-semibold tracking-wide " + color(text)} >{text}</span>
    )
};

export default Badge;
