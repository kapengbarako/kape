import React from 'react';
import ItemCard from "../molecules/ItemCard";

const ResultsContainer = ({}) => {

    const items = [
        {id: 1, name: "Foo", bar: "Bar"},
        {id: 2, name: "Foo", bar: "Bar"},
        {id: 3, name: "Foo", bar: "Bar"},
        {id: 4, name: "Foo", bar: "Bar"},
    ];

    const itemCard = () => {
        return (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <ItemCard/>
            </div>
        )
    };

    return (
        <div className="container my-12 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {items.map(i => itemCard())}

            </div>
        </div>

    )
};

export default ResultsContainer;
