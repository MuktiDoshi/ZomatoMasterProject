import React from 'react';

const FoodItem = (props) => {
    
    return (
        <>
             <div className="flex items-center justify-between">
                    <h5>{props.name}</h5>
                    <div className="flex flex-col items-end">
                        <small>₹{parseInt(props.price) * parseInt(props.quantity)}</small>
                        <div className="px-2 bg-zomato-300 text-white rounded flex items-center gap-1">
                            <button className="p-1 bg-zomato-300 text-white rounded">-</button>
                            <small className="">1</small>
                            <button className="p-1 bg-zomato-300 text-white rounded">+</button>
                        </div>
                    </div>
             </div>
             <hr className="my-1" />
        </>
    )
}

export default FoodItem;
