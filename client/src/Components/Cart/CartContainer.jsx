import React, {useState} from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdArrowDropright} from 'react-icons/io';
import {IoCloseSharp } from "react-icons/io5";

import FoodItem from './FoodItem';

const CartSm = ({toggle}) => {
    return (
        <>
        <div className="flex items-center justify-between md:hidden">
        <div className="flex flex-col items-start">
                    <small 
                    className="flex items-center gap-1"
                    onClick={toggle}
                    >
                        1 item <IoMdArrowDropup/>
                    </small>
                    <h4>
                        ₹300 
                    <sub>
                        (plus tax)
                    </sub>
                    </h4>
                </div>
                <button className="flex items-center gap-1 bg-zomato-300 text-white px-5 py-3 rounded-lg">
                    Continue <IoMdArrowDropright/>
                </button>
        </div>
        </>
    )
}

const CartLg = ({toggle}) => {
    return (
        <>
        <div className=" hidden md:flex items-center justify-between conatiner px-20 mx-auto">
        <div className="flex gap-2 text-xl items-start">
                    <span 
                    className="border bg-white border-gray-300 p-1 rounded"
                    onClick={toggle}
                    >
                        <IoMdArrowDropup/>
                    </span>
                    <h4>
                        Your Order (1)
                    </h4>
                </div>
                <div className="flex items-center gap-2">
                <h4 className="text-xl">
                        Subtotal: ₹300 
                </h4>
                <button className="flex items-center text-lg font-light h-12 gap-1 bg-zomato-300 text-white px-6 py-5 rounded-lg">
                    Continue <IoMdArrowDropright/>
                </button>
                </div>
        </div>
        </>
    )
}

const CartContainer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCart = () => setIsOpen((prev) => !prev);
    const closeCart = () =>setIsOpen(false);

    return (
        <>
        {isOpen && (
        <div className="fixed w-full overflow-y-scroll h-48 bg-white z-30 bottom-16 px-3">
            <div className="flex items-center justify-between">
            <h3 className="text-xl fonyt-semibold">Your Orders</h3>
            <IoCloseSharp onClick={closeCart}/>
            </div>
            <hr className="my-3"/>
            <div className="flex flex-col gap-2">
               <FoodItem
               name="Paneer Butter Masala"
               quantity="3"
               price="220"
               />
                <FoodItem
               name="Paneer Butter Masala"
               quantity="3"
               price="220"
               />
                 <FoodItem
               name="Paneer Butter Masala"
               quantity="3"
               price="220"
               />

            </div>
        </div>
        )}
            <div className="fixed w-full bg-white z-30 bottom-0 p-2 px-3">
                <CartSm toggle={toggleCart}/>
                <CartLg toggle={toggleCart}/>
            </div>
        </>
    )
}

export default CartContainer;
