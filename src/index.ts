import express from "express";
import swaggerFile from "./swagger.json";
import swaggerUi from "swagger-ui-express";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/users", usersRoutes);

export { app };
