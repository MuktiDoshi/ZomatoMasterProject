import React from 'react';
import Slider from 'react-slick';

//components
import DeliveryCategory from './DeliveryCategory';
import { NextArrow, PrevArrow } from '../CarousalArrow';

const DeliveryCarousal = () => {
    
    const categories = [
    {
        image: "https://b.zmtcdn.com/data/pictures/8/18543098/aba865cd9bff568c684aa4b63c4299a1_o2_featured_v2.jpg?output-format=webp",
        title: "Momos",
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/9/18447029/342faffc3b4eb2976cd7509ebe6506f7_o2_featured_v2.jpg",
        title: "Parathas",
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/2/18621482/461fc416f1580fe0e03b7eee1c2bb9e7_o2_featured_v2.jpg",
        title: "Pizza",
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/chains/4/35004/75d199829038cdcd50e25bf3f43bc5eb_o2_featured_v2.jpg",
        title: "Subway",
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/3/42353/53a6f2ea78fe487906a32fd7f57773b2_o2_featured_v2.jpg",
        title: "Chicken",
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/chains/4/18636604/836bc2572a402c3a00a0b4681e1dbb8c_o2_featured_v2.jpg",
        title: "Cake",
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/0/19472060/c71ffc5bc5518532e15722cf29fdd6c3_o2_featured_v2.jpg",
        title: "Chat",
    },
 ];

 const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  };

    return (
        <>
        <h1 className="text-xl mb-4 font-semibold">
            Inspiration for your first order
        </h1>
        <div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">

            {
                categories.map((food) => (
                < DeliveryCategory {...food} />
                ))
            };

        </div> 
        <div className="hidden lg:block">
        <Slider {...settings}>
          {categories.map((food) => (
            <DeliveryCategory {...food} />
          ))}
        </Slider>
      </div>

        </>
    )
}

export default DeliveryCarousal;
