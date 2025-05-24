import http from "http";
import app from "./app.js";
import connectDB from "./db.js";
import authRoutes from "../routes/authRoutes.js";

connectDB();

// use authentication routes
app.use("/api/auth", authRoutes);

//server port
const PORT = process.env.PORT || 8001;
//create a server
const server = http.createServer(app);

//listen the server
server.listen(PORT, async () => {
  try {
    //db connection
  } catch (error) {
    process.exit(1);
  }
  console.log(`Server is running on port http://localhost:${PORT}`);
});

export default server;
