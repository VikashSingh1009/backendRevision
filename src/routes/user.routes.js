import { Router } from "express";
import { regiterUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";


const router = Router()

router.route("/register").post
(
    upload.fields([
    //file handling
    {
        name: "avatar",
        maxCount: 1
    },
    {
        name: "coverImage",
        maxCount: 1
    }  //ye hai midddle ware inject
    ]),
    regiterUser
)


export default router