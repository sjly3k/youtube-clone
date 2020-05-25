import { videos } from "./db" 
import app from "./app";
import dotenv from "dotenv"
import video from "./models/Video"
import comment from "./models/Comment"

dotenv.config()

const PORT = process.env.PORT || 4000;
const handleListening = (res, req) => console.log(`Listening on : https://localhost:${PORT}`)

app.listen(PORT, handleListening);