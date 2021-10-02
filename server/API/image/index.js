//Libraries
import express from "express";
import passport from "passport";
import multer from "multer";

//database modal
import {ImageModel} from "../../database/allModels";

// Utilities
import { s3Upload } from "../../Utils/AWS/s3";

//multer config
const storage = multer.memoryStorage();
const upload = multer({storage});

const Router = express.Router();

/*
Route     /
Des       Get Image details
Params    _id
Access    Public
Method    GET  
*/
Router.get("/:_id", async (req, res) => {
    try {
      const image = await ImageModel.findById(req.params._id);
  
      return res.json({ image });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  

/* 
Route - /
Descript - upload given image to S3 bucket, 
and save file link to MongoDB.
Params - none
Access - Public
Method - POST
*/

Router.post("/", upload.single("file"), async (req, res) => {
    try {
        const file = req.file;

        const bucketOptions = {
            Bucket : "zomatomasterproject123",
            Key : file.originalname,
            Body : file.buffer,
            ContentType : file.mimetype,
            ACL : "public-read",
        };

        const uploadImage = await s3Upload(bucketOptions);

        await ImageModel.create({images: [{location: uploadImage.Location}]});
        
        return res.status(200).json({uploadImage});
    
    } catch (error) {
        return res.status(500).json({error : error.message});
    }
});

export default Router;