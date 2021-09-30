import React from 'react';
import {AiOutlineCompass} from "react-icons/ai";
import {BiTimeFive} from "react-icons/bi";

//components
import FloatMenuBtn from '../../Components/Restaurant/Order-Online/FloatMenuBtn';
import MenuListContainer from '../../Components/Restaurant/Order-Online/MenuListContainer';
import FoodItem from '../../Components/Restaurant/Order-Online/FoodItem';
import FoodList from '../../Components/Restaurant/Order-Online/FoodList';

const OrderOnline = () => {
    return (
        <>
            <div className="w-full h-screen flex">
                <aside className="hidden md:flex flex-col gap-3 border-r border-gray-200 h-screen overflow-y-scroll  w-1/4">
                    <MenuListContainer/>
                    <MenuListContainer/>
                </aside>
                <div className="w-full px-3 md:w-3/4">
                    <div className="pl-3 mb-4">
                    <h2 className="text-xl font-semibold">Order Online</h2>
                    <h4 className="flex items-center gap-2 font-light text-gray-500">
                        <AiOutlineCompass/> Live Track Your Order | <BiTimeFive/> 29 min
                    </h4>
                    </div>                   
                    <section className="flex flex-col h-screen overflow-y-scroll gap-3 md:gap-5">
                        <FoodList
                         title="Recommended"
                         items= {[
                             {   
                                 price: "220",
                                 rating: 4,
                                 title: "Paneer Butter Masala",
                                 description:"Lorem ipsum dolor sit amet consectetur adipisicing elit Vero sit et porro enim a!Ratione labore laudantium adipisci veritatis?Tempora rem culpa atque voluptatum, dolor cum laboriosam quis magni ut",
                                 image: "https://b.zmtcdn.com/data/dish_photos/396/e4edf762307aea7fff5bf1609b8e8396.jpg?output-format=webp"
                             },                           
                        ]}
                        />                      
                    </section>
                </div>
            </div>
            <FloatMenuBtn/>
        </>
    )
};

export default OrderOnline;
