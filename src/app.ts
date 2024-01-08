import { handleErrors, notFound } from "./middleware/errorHandlers";
import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import routes from "./routes";
import morganMiddleware from "./config/morganMiddleware";

const app: Application = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morganMiddleware);
app.use(cors());
app.use(helmet());

app.use("/api/v1", routes);
// Error Handling
app.use(notFound);
app.use(handleErrors);

export default app;
