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
        
        return res.status(200).json({uploadImage});
    
    } catch (error) {
        return res.status(500).json({error : error.message});
    }
});

export default Router;