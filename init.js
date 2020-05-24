import app from "./app";

const PORT = 4000;
const handleListening = (res, req) => console.log(`Listening on : https://localhost:${PORT}`)

app.listen(PORT, handleListening);