import React from 'react';
import { TiStarFullOutline } from "react-icons/ti";

const ReviewCard = () => {
    return (
        <>
           <div className="my-3 flex flex-col gap-3">
               <div className="flex items-center justify-between">
                   <div className="flex items-center gap-2">
                   <div className="w-10 h-10 rounded-full">
                       <img 
                       src="https://b.zmtcdn.com/images/user_avatars/cupcake.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" 
                       alt="avatar"
                       className="w-full h-full rounded-full object-cover"
                       />
                   </div>
                   <div className="flex flex-col">
                       <h3 className="text-lg font-semibold">Mukti Doshi</h3>
                        <small className="text-gray-500">
                           5 reviews &#8226; 3 Followers
                        </small>
                   </div>
                   </div>
                    <button className="text-zomato-300 border border-zomato-300 py-2 rounded-lg px-4">
                       Follow
                    </button>
               </div>
               <div className="flex flex-col gap-3">
                   <div className="flex items-center gap-3">
                        <span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1">
                           5 <TiStarFullOutline/>
                        </span>
                        <h5 className="font-regular uppercase">Delivery</h5>
                        <small className="text-gray-500">3 days ago</small>
                   </div>
                   <div className="w-full">
                        <p className="w-full text-gray-600 font-light text-base">
                           I ordered paneer tikka masala and butter nan this time. 
                           Paneer tikka was good in quality, quantity and taste. 
                           Nan was also soft and hot. Overall good.
                        </p>
                   </div>
               </div>
           </div> 
        </>
    )
}

export default ReviewCard;
