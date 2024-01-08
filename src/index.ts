import app from "./app";
import Logger from "./lib/logger";

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  Logger.info(`Server is running on port ${PORT}.`);
  Logger.info(`Send requests to http://localhost:${PORT}/api/v1`);
  Logger.info(`Press CTRL + C to stop server.`);
});
