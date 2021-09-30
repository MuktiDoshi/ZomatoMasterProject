import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoMdArrowDropright } from "react-icons/io";
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../../Components/CarousalArrow';
import ReactStars from "react-rating-stars-component";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {MdContentCopy} from "react-icons/md";
import {FaDirections} from "react-icons/fa";

//components
import MenuCollection from '../../Components/Restaurant/MenuCollection';
import MenuSimilarRestaurantCard from '../../Components/Restaurant/MenuSimilarRestaurantCard';
import ReviewCard from '../../Components/Restaurant/Reviews/ReviewCard';
import Mapview from '../../Components/Restaurant/Mapview';


const Overview = () => {
    const {id} = useParams();
    const settings = {
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

      const ratingChanged = (newRating) => {
        console.log(newRating);
      };

    return (
        <>
            <div className="flex flex-col md:flex-row relative">
                <div className="w-full md:w-8/12">
                    <h2 className="font-semibold text-lg md:text-xl my-4">
                        About this place
                    </h2>
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg font-medium">Menu</h4>
                        <Link to={`/restaurant/${id}/menu`}>
                            <span className="flex items-center gap-1 text-zomato-400">
                              See all menu <IoMdArrowDropright/>
                            </span>
                        </Link>
                    </div>
                    <div className="flex flex-wrap gap-3 my-4">
                            <MenuCollection 
                            menuTitle="Menu" 
                            pages="10"
                            image={["https://b.zmtcdn.com/data/menus/337/32337/f426a69636a2694e869991af864c45e7.jpg"]}
                            />
                    </div>
                    <h4 className="text-lg font-medium my-4">Cuisines</h4>
                    <div className="flex flex-wrap gap-2">
                        <span className="border border-gray-400 text-blue-500 px-2 py-1 rounded-full">
                            North Indian
                        </span>
                        <span className="border border-gray-400 text-blue-500 px-2 py-1 rounded-full">
                            North Indian
                        </span>
                        <span className="border border-gray-400 text-blue-500 px-2 py-1 rounded-full">
                            North Indian
                        </span>
                    </div>
                    <div className="my-4">
                       <h4 className="text-lg font-medium">Average Cost</h4>
                       <h6>₹1,000 for two people (approx.)</h6>
                        <small className="text-gray-500">
                           Exclusive of applicable taxes and charges, if any
                        </small>
                    </div>
                    <div className="my-4">
                    <h4 className="text-lg font-medium">Similar Restaurants</h4>
                    <Slider {...settings}>
                    <MenuSimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/1/32661/41e0db0f7c65959ca1efd465d953ddf5_featured_v2.jpg?output-format=webp"
                    title="Balaji" 
                    />
                    <MenuSimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/1/32661/41e0db0f7c65959ca1efd465d953ddf5_featured_v2.jpg?output-format=webp"
                    title="Balaji" 
                    />
                    <MenuSimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/1/32661/41e0db0f7c65959ca1efd465d953ddf5_featured_v2.jpg?output-format=webp"
                    title="Balaji" 
                    />
                    <MenuSimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/1/32661/41e0db0f7c65959ca1efd465d953ddf5_featured_v2.jpg?output-format=webp"
                    title="Balaji" 
                    />
                    <MenuSimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/1/32661/41e0db0f7c65959ca1efd465d953ddf5_featured_v2.jpg?output-format=webp"
                    title="Balaji" 
                    />
                    <MenuSimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/1/32661/41e0db0f7c65959ca1efd465d953ddf5_featured_v2.jpg?output-format=webp"
                    title="Balaji" 
                    />
                    </Slider>
                    </div>
                    <div className="my-4">
                    <h4 className="text-lg font-medium">
                        Rate your delivery experience
                    </h4>
                    <ReactStars
                         count={5}
                         onChange={ratingChanged}
                         size={24}
                         activeColor="#ffd700"
                    />
                    </div>
                    <div className="my-4 w-full md:hidden flex flex-col gap-4">
                    <Mapview 
                    title="Parivar Veg Restaurant"
                    phno="+912228555335"
                    mapLocation={[19.273607003041118, 72.86307818872021]}
                    address="1-5, Poonam Sagar Complex, 
                            Cooperative Housing Society, Sector 9, 
                            Mira Road, Mumbai"
                    />
                    </div>
                    <div className="my-4 flex flex-col gap-4">
                        <ReviewCard/>
                        <ReviewCard/>
                        <ReviewCard/>
                    </div>
                </div>
                <aside 
                style={{height: "fit-content"}} 
                className="hidden md:flex md:w-4/12 sticky rounded-xl top-2 bg-white p-3 shadow-md flex flex-col gap-4">
                   <Mapview 
                   title="Parivar Veg Restaurant"
                   phno="+912228555335"
                   mapLocation={[19.273607003041118, 72.86307818872021]}
                   address="1-5, Poonam Sagar Complex, 
                            Cooperative Housing Society, Sector 9, 
                            Mira Road, Mumbai"
                   />
                </aside>
            </div>
        </>
    )
};

export default Overview;
