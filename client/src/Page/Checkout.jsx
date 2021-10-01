import React from 'react';
import {BsFillShieldLockFill, BsShieldLockFill} from "react-icons/bs"

import FoodItem from '../Components/Cart/FoodItem';
import AddressList from '../Components/Checkout/AddressList';

const Checkout = () => {
    const address = [
    {
        name: "Home",
        address: "India"
    },
    {
        name: "Gym",
        address: "India"
    },
    {
        name: "Office",
        address: "India"
    }
]
    return (
        
           <div className="my-3 flex flex-col gap-3 items-center">
               <h1 className="text-xl text-center md:text-2xl font-medium">Checkout</h1>
               <div className="w-full md:w-3/5 rounded-lg py-3 shadow-lg bg-white flex flex-col items-center">
                   <h3 className="text-lg font-semibold">Summary</h3>
                   <div className="flex flex-col w-full gap-2 items-center">
                       <h5 className="text-base tracking-wider">ORDER FROM</h5>
                      <div className="flex flex-col w-full items-center text-gray-400">
                      <h4>Parivar Veg Restaurant</h4>
                        <small>
                           1-5, Poonam Sagar Complex, 
                           Cooperative Housing Society, Sector 9, 
                           Mira Road, Mumbai
                        </small>
                      </div>
                      <div className="my-4 px-4 flex flex-col gap-2 w-full md:w-3/5">
                          <FoodItem
                          name="Paneer Butter Masala"
                          quantity={3}
                          price={220}
                          />
                          <FoodItem
                          name="Paneer Butter Masala"
                          quantity={3}
                          price={220}
                          />
                          <FoodItem
                          name="Paneer Butter Masala"
                          quantity={3}
                          price={220}
                          />
                      </div>
                      <div className="flex flex-col gap-3 w-full md:w-3/5">
                          <h4 className="text-xl font-semibold">Choose Address</h4>
                      <AddressList address={address} />
                      </div>
                   </div>
                   <button className=" flex items-center gap-2 justify-center w-full px-4 md:w-4/5 my-4 md:my-8 h-14 text-white font-medium text-lg bg-zomato-300 rounded-lg">
                       Pay Securely <BsShieldLockFill/>
                    </button>
               </div>
           </div> 
        
    )
}

export default Checkout;
