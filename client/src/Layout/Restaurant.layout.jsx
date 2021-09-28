import React from 'react';
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from 'react-icons/ri';
import { BiBookmarkPlus } from 'react-icons/bi';


//components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from '../Components/Restaurant/ImageGrid';
import RestaurantInfo from '../Components/Restaurant/RestaurantInfo';
import InfoButtons from '../Components/Restaurant/InfoButtons';
import TabConatiner from '../Components/Restaurant/Tabs';

const RestaurantLayout = (props) => {

    return (
        <>
        <RestaurantNavbar/>
        <div className="container mx-auto px-4 lg:px-20">
            <ImageGrid images={[
                "https://b.zmtcdn.com/data/pictures/7/32337/e3c01f24185cc794ba2d9df4c54478ab.jpg",
                "https://b.zmtcdn.com/data/pictures/7/32337/e3c01f24185cc794ba2d9df4c54478ab.jpg",
                "https://b.zmtcdn.com/data/pictures/7/32337/e3c01f24185cc794ba2d9df4c54478ab.jpg",
                "https://b.zmtcdn.com/data/pictures/7/32337/e3c01f24185cc794ba2d9df4c54478ab.jpg",
                "https://b.zmtcdn.com/data/pictures/7/32337/e3c01f24185cc794ba2d9df4c54478ab.jpg"

            ]}
            />
            <RestaurantInfo 
            name="Parivar Veg Restaurant"
            restaurantRating = "3.4"
            deliveryRating = "4.0"
            cuisine = "Chinese, Fast Food, North Indian, South Indian, Pizza, Sandwich, Biryani, Beverages"
            address= "Mira Road, Mumbai"
            />
            <div className="my-4 flex flex-wrap gap-3">
                <InfoButtons isActive> 
                    <TiStarOutline/> Add Review 
                </InfoButtons>
                <InfoButtons > 
                    <RiDirectionLine/> Direction
                </InfoButtons>
                <InfoButtons > 
                    <BiBookmarkPlus/> Bookmark
                </InfoButtons>
                <InfoButtons > 
                    <RiShareForwardLine/> Share
                </InfoButtons>
            </div>
            <div className="my-10">
            <TabConatiner>
                
            </TabConatiner>
            </div>
            <div className="relative">
            {props.children}
            </div>
        </div>
        </>
    )
};

export default RestaurantLayout;
