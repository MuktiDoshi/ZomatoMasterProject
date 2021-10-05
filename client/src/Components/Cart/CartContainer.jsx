import React, {useState, useEffect} from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdArrowDropright} from 'react-icons/io';
import {IoCloseSharp } from "react-icons/io5";
import {useDispatch, useSelector} from "react-redux"

import FoodItem from './FoodItem';
import { getCart } from '../../Redux/Reducer/Cart/Cart.action';


const CartSm = ({toggle}) => {
    const reduxState = useSelector((global) => global.cart.cart);

    return (
        <>
        <div className="flex items-center justify-between md:hidden">
        <div className="flex flex-col items-start">
                    <small 
                    className="flex items-center gap-1"
                    onClick={toggle}
                    >
                        {reduxState.length} item <IoMdArrowDropup/>
                    </small>
                    <h4>
                        ₹{
                        reduxState.reduce((acc, curVal) => 
                        acc + curVal.totalPrice, 0)
                        }
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
    const reduxState = useSelector((global) => global.cart.cart);

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
                        Your Order ({reduxState.length})
                    </h4>
                </div>
                <div className="flex items-center gap-2">
                <h4 className="text-xl">
                        Subtotal: ₹{
                        reduxState.reduce((acc, curVal) => 
                        acc + curVal.totalPrice, 0)
                        }
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
    const [cartData, setCartData] = useState([]);

    const dispatch = useDispatch();
    const reduxState = useSelector((global) => global.cart.cart);


    const toggleCart = () => setIsOpen((prev) => !prev);
    const closeCart = () =>setIsOpen(false);



    return (
        <> 
        {isOpen && (
        <div className="fixed w-full overflow-y-scroll h-48 bg-white z-30 bottom-16 px-3 ">
            <div className="flex items-center justify-between md:px-20">
            <h3 className="text-xl fonyt-semibold">Your Orders</h3>
            <IoCloseSharp onClick={closeCart}/>
            </div>
            <hr className="my-3"/>
           
            <div className="flex flex-col gap-2 md:px-20">
            {
                reduxState.map((food) =>  
                (<FoodItem
                name={food.name}
                quantity={food.quantity}
                price={food.price}
                />)
                ) 
            }
            </div>
        </div>
        )} {reduxState.length && (
            <div className="fixed w-full bg-white z-30 bottom-0 p-2 px-3">
                <CartSm toggle={toggleCart}/>
                <CartLg toggle={toggleCart}/>
            </div>
        ) }
            
        </>
    )
}

export default CartContainer;
