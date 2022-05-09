// Express
import express from "express";
import cors from "cors";
import helmet from "helmet";

// Routes
import { userRouter } from "./api/routes/users_route";

// Check we've instantiated service with correct env vars
import { validateEnv } from "./utils/config_validator";
import { errorHandler } from "./api/middleware/error_middleware";
validateEnv();

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

// App Configuration
app.use(helmet()); // Security
app.use(cors()); // Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON body

// Routes
app.use("/api/user/", userRouter);
app.use(errorHandler);

// Server Activation
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
