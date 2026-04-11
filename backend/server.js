import express, { urlencoded } from "express";
import connectDB from "./lib/db.js";
import authRoute from "./routes/auth.route.js"
import messageRoute from "./routes/message.route.js"
import path from "path";
import { ENV } from "./lib/env.js";

const app = express();
const PORT = ENV.PORT || 3000;
const __dirname = path.resolve();
app.use(express.json());
app.use(urlencoded({extended:true}));


app.use("/api/auth",authRoute);
app.use("/api/message",messageRoute);


if(ENV.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.use((req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}



app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server is running on port ${PORT}`);
});
