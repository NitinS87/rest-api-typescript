import { PrismaClient } from "@prisma/client";
import app from "./app";
import Logger from "./lib/logger";

export const prisma = new PrismaClient();

async function main() {
  const PORT: number = parseInt(process.env.PORT!) || 8000;

  app.listen(PORT, () => {
    Logger.info(`🚀 Server is running on port ${PORT}.`);
    Logger.info(`Send requests to http://localhost:${PORT}/api/v1`);
    Logger.info(`Press CTRL + C to stop server.`);
  });
}

main()
  .then(async () => {
    await prisma
      .$connect()
      .then(() => Logger.info("🟢 The database is connected."));
  })
  .catch(async (e) => {
    Logger.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
