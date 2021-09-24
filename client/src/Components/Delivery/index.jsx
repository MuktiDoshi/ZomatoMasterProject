import React, {useState} from 'react'

//components
import DeliveryCarousal from './DeliveryCarousal';
import Brand from './Brand';
import RestaurantCard from '../restaurantCard';

const Delivery = () => {
    const [restaurantList, setRestaurantList] = useState([
        {
            _id: "123456",
            photos: ["https://b.zmtcdn.com/data/pictures/7/32337/e3c01f24185cc794ba2d9df4c54478ab_o2_featured_v2.jpg"],
            name: "Parivar Veg Restaurant",
            cuisine: ["Chinese", "North Indian", "South Indian",  "Sandwich", "Biryani", "Beverages"],
            averageCost: 150,
            isPro: false,
            isOff: 20,
            durationOfDelivery: 25,
            restaurantReviewValue: 4.0,
        },
        {
            _id: "123456-2",
            photos: ["https://b.zmtcdn.com/data/pictures/chains/0/18386400/a637f7be26b117b3950c3b4d3b505cd8_o2_featured_v2.jpg?output-format=webp"],
            name: "Ovenstory Pizza",
            cuisine: ["Pizza", "Fast Food"],
            averageCost: 250,
            isPro: true,
            isOff: 50,
            durationOfDelivery: 31,
            restaurantReviewValue: 4.3,
        },
        {
            _id: "123456-3",
            photos: ["https://b.zmtcdn.com/data/pictures/chains/4/18609054/87bf3b1ee9778fb155abd4c41967bfcf.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"],
            name: "Naivedhya Veg Treat",
            cuisine: [ "North Indian", "Fast Food", "Desserts","Chinese" , "Beverages"],
            averageCost: 350,
            isPro: true,
            isOff: 70,
            durationOfDelivery: 40,
            restaurantReviewValue: 3.9,
        },
    ]);

    return (
        <>
           <DeliveryCarousal/> 
           {/*<Brand/>*/} 
           <div className="flex justify-between flex-wrap">
           {
               restaurantList.map((restaurant) => (
                <RestaurantCard {...restaurant} 
                key={restaurant._id} />
               ))
           };
           </div>
        </>
    )
};

export default Delivery;
