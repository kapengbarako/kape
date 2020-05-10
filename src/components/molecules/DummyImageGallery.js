import React from 'react';

const DummyImageGallery = ({}) => {

    /*
        Sample images:
        https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80
        https://images.unsplash.com/photo-1581991717893-55f4b9f62be0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80
        https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80
     */


    return (
        <div className="flex flex-no-wrap bg-white h-full">
            <div className="w-2/5 flex-none p-2">
                <div className="text-gray-700 text-center p-2">
                    <img className="h-full w-full"
                         src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                         alt="restaurant"/>
                </div>
            </div>
            <div className="w-2/5 flex-none p-2">
                <div className="text-gray-700 text-center p-2">
                    <img className="h-full w-full"
                         src="https://images.unsplash.com/photo-1581991717893-55f4b9f62be0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                         alt="restaurant"/>
                </div>
            </div>
            <div className="w-2/5 flex-none p-2">
                <div className="text-gray-700 text-center p-2">
                    <img className="h-full w-full"
                         src="https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                         alt="restaurant"/>
                </div>
            </div>
        </div>

    )
};

export default DummyImageGallery
