import { backendSetup, connect } from "@/setups";

import { MESSAGES } from "@/consts";

import { Logger, Env } from "@/utils";

const setupServer =async () => {
  //initialize multiple environments
  Env.init();

  try {
    const db = connect();
    db.sequelize.sync({ force: false }).then(() => {
      console.log("Drop and re-sync db.");
    });
    Logger.info(MESSAGES.DATABASE.CONNECTION_SUCCESS);
  } catch (error: unknown) {
    Logger.info(MESSAGES.DATABASE.CONNECTION_FAILURE);
    Logger.error(error);

    process.exit(0)
  }

  try {
    await backendSetup();
    Logger.info(MESSAGES.SERVER.STARTING_SUCCESS);
  } catch (error: unknown) {
    Logger.info(MESSAGES.SERVER.STARTING_FAILURE);
    Logger.error(error);
  }
};

setupServer();
