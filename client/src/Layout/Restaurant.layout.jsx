import React from 'react';
import { AiOutlineCamera } from 'react-icons/ai';

//components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from '../Components/Restaurant/ImageGrid';

const RestaurantLayout = () => {

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

            ]}/>
        </div>
        </>
    )
}

export default RestaurantLayout;
