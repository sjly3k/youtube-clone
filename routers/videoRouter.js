import express from "express";
import routes from "../routes"
import { upload, videoDetail, editVideo, deleteVideo, getUpload, postUpload } from "../controllers/videoControllers";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload)
videoRouter.post(routes.upload, postUpload)

videoRouter.get(routes.videoDetail(), videoDetail)
videoRouter.get(routes.editVideo, editVideo)
videoRouter.get(routes.deleteVideo, deleteVideo)

export default videoRouter;