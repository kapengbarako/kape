import React from 'react';
import ItemCard from "../molecules/ItemCard";

const ResultsContainer = ({}) => {

    const items = [
        {id: 1, name: "FooBakery", address: "123 Bakery St, Hon"},
        {id: 2, name: "Foo", address: "Bar"},
        {id: 3, name: "Foo", address: "Bar"},
        {id: 4, name: "Foo", address: "Bar"},
    ];

    const itemCard = (item) => {
        return (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <ItemCard name={item.name} address={item.address}/>
            </div>
        )
    };

    return (
        <div className="container my-12 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {items.map(i => itemCard(i))}

            </div>
        </div>

    )
};

export default ResultsContainer;
