import "dotenv/config";
import express from "express";
import connectDB from "./config/db.js";
import authRoute from "./routes/auth.route.js"
import messageRoute from "./routes/message.route.js"
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();



app.use("/api/auth",authRoute);
app.use("/api/message",messageRoute);


if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.use((req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}


app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server is running on port ${PORT}`);
});
