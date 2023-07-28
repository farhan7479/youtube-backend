import express from "express";
import { addVideo,updateVideo, addView, getByTag, getVideo, random, search, sub, trend, deleteVideo } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//create a video
router.post("/addvideo", verifyToken, addVideo)
router.put("/updateVideo/:id", verifyToken, updateVideo)
router.delete("/deleteVideo/:id", verifyToken, deleteVideo)
router.get("/fgetVideo/:id", getVideo)
router.put("/addView/:id", addView)
router.get("/trend", trend)
router.get("/random", random)
router.get("/sub",verifyToken, sub)
router.get("/getByTag", getByTag)
router.get("/search", search)

export default router;
