import React from 'react';
import {AiOutlineCompass} from "react-icons/ai";
import {BiTimeFive} from "react-icons/bi";

//components
import FloatMenuBtn from '../../Components/Restaurant/Order-Online/FloatMenuBtn';
import MenuListContainer from '../../Components/Restaurant/Order-Online/MenuListContainer';
import FoodItem from '../../Components/Restaurant/Order-Online/FoodItem';

const OrderOnline = () => {
    return (
        <>
            <div className="w-full flex">
                <aside className="hidden md:flex flex-col gap-3 border-r border-gray-200 h-screen overflow-y-scroll w-1/4">
                    <MenuListContainer/>
                    <MenuListContainer/>
                </aside>
                <div className="w-full md:w-3/4">
                    <h2 className="text-xl font-semibold">Order Online</h2>
                    <h4 className="flex items-center gap-2 font-light text-gray-500">
                        <AiOutlineCompass/> Live Track Your Order | <BiTimeFive/> 29 min
                    </h4>                   
                    <section>
                        <FoodItem 
                         image="https://b.zmtcdn.com/data/dish_photos/396/e4edf762307aea7fff5bf1609b8e8396.jpg?output-format=webp"
                         price="220"
                         rating={4}
                         description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                      Vero sit et porro enim a! 
                                      Ratione labore laudantium adipisci veritatis? 
                                      Tempora rem culpa atque voluptatum, 
                                      dolor cum laboriosam quis magni ut"
                         title="Paneer Butter Masala"
                        />
                    </section>
                </div>
            </div>
            <FloatMenuBtn/>
        </>
    )
};

export default OrderOnline;
