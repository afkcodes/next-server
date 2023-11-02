import { config } from './configs/base';
import createServer from './server';
import Logger from './utils/logger';

const server = createServer();
const serverPort = config.PORT;

const startServer = async () => {
  try {
    // if (process.env.NODE_ENV !== 'development') {
    //   const conn = await getConnection();
    //   Logger.info(`Connected to database ${conn?.connections[0]?.name}`);
    // }
    server.listen({ port: serverPort as number }, (err, address) => {
      if (err) {
        Logger.error(`ERROR${err}`);
        process.exit(1);
      }
      Logger.info(`Server listening at ${address}`);
    });
  } catch (error) {
    Logger.error(`DB connection error: ${error?.message}`);
  }
};

startServer();
