import express from "express";
import passport from "passport";

//database modal
import {UserModel} from "../../database/allModels";

const Router = express.Router();

/* 
Route - /
Descript - get user data
Params - id
Access - Public
Method - GET
*/

Router.get("/:_id", async (req, res) => {
    try {
        const {_id} = req.params;
        
        const getUser = await UserModel.findById(_id);

        return res.json({user : getUser});
    
    } catch (error) {
        return res.status(500).json({error : error.message});
    }
});

/* 
Route - /update
Descript - update user id
Params - id
Access - Public
Method - PUT
*/

Router.put("/update/:_userID", async (req, res) => {
    try {
        const {_userID} = req.params;
        const {userData} = req.body;

        const updateUserData = await UserModel.findByIdAndUpdate(_userID, {
            $set : userData,
        }, 
        { 
            new : true
        });
        
        return res.json({user : updateUserData});

    } catch (error) {
        return res.status(500).json({error : error.message});
    }
});

export default Router;