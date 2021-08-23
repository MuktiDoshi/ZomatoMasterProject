//Libraries
import express from "express";
import passport from "passport";

//database modal
import {RestaurantModel} from "../../database/allModels";

const Router = express.Router();

/* 
Route - /
Descript - get all the restaurant details based on city
Params - None
Access - Public
Method - GET
*/

Router.get("/", async (req, res) => {
    try {
        const {city} = req.query;
        const retaurants = await RestaurantModel.find({city});
        return res.json({restaurants});
    
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

/* 
Route - /
Descript - get individual restaurant details based on id
Params - id
Access - Public
Method - GET
*/

Router.get("/:_id",  async (req, res) => {
    try { 
        const {_id} = req.params;
        const restaurant = await RestaurantModel.findOne(_id);
        
        if(!restaurant) return res.status(404).json({
            error: "Restaurant Not Found" 
        });

        //but if the restaurant exists
        return res.json({restaurant});
    
    } catch (error) {
        return res.status(500).json({error: error.message});        
    }
});

/* 
Route - /search
Descript - get restaurant details based on search strings
Params - none
Body - searchString
Access - Public
Method - GET
*/

Router.get("/search", async (req, res) => {
    try {
        const {searchString} = req.body; 
        const restaurants = await RestaurantModel.find({
            name : { $regex : searchString, $options : "i" },
        });
        
        if(!restaurants) return res.status(404).json({
            error: `No Restaurant Matched With ${searchString}`
        });

        //but if the restaurant exists
        return res.json({restaurants});
    
    } catch (error) {
        return res.status(500).json({error: error.message});        
    }
});

export default Router;


