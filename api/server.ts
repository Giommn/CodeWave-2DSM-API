import express from "express";
import cors from "cors";
import router from "./src/routes/userControlerRoute";

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.use(router);

const Port: number = 3000;

app.listen(Port, () => {
  console.log("Server is running");
  console.log(`http://localhost:${Port}`);
});
