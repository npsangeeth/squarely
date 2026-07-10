import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import healthRoutes from "./routes/health";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(morgan("dev"));
app.use(helmet());

app.use("/", healthRoutes);

export default app;
