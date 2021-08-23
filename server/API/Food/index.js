//Libraries
import express from "express";
import passport from "passport";

//database modal
import {FoodModel} from "../../database/allModels";

const Router = express.Router();

/* 
Route - /
Descript - get all the restaurant details based on city
Params - None
Access - Public
Method - GET
*/
