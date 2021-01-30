import * as express from "express";
import * as http from "http";
import swaggerUi from "swagger-ui-express";
import UserRouter from "./UserRouter";
import cors from "cors";
//import authenticate from '../config/middleware/oAuth';
let swaggerDoc:Object;
try {
  //to build
  swaggerDoc = require("../../../swagger.json");
  // swaggerDoc = require("../../swagger.json");
} catch (error) {
  console.log("***************************************************");
  console.log("  Seems like you doesn`t have swagger.json file");
  console.log("  Please, run: ");
  console.log("  $ swagger-jsdoc -d swaggerDef.js -o swagger.json");
  console.log("***************************************************");
}

/**
 * @export
 * @param {express.Application} app
 */
export function init(app: express.Application): void {
  const router: express.Router = express.Router();

  /**
   *
   */
  app.use(
    cors({
      optionsSuccessStatus: 200,
    })
  );

  /**
   * middlewares
   */
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ extended: false, limit: "50mb" }));
  /**
   * @description
   *  Forwards any requests to the /v1/users URI to our UserRouter
   *  Also, check if user authenticated
   * @constructs
   */
  //app.use('/v1/users', authenticate(), UserRouter);

  /**
   * @description Forwards any requests to the /auth URI to our AuthRouter
   * @constructs
   */
  app.use("/home", UserRouter);

  app.get("/test", async (req, res) => {
    const user = {
      id: 5,
      name: "Elias Daniel",
      lastname: "Sanchez Lopez"
    }
    res.send(user);
  });

  /**
   * @description
   *  If swagger.json file exists in root folder, shows swagger api description
   *  else send commands, how to get swagger.json file
   * @constructs
   */
  if (swaggerDoc) {
    app.use("/docs", swaggerUi.serve);
    app.get("/docs", swaggerUi.setup(swaggerDoc));
  } else {
    app.get("/docs", (req, res) => {
      res.send(
        "<p>Seems like you doesn't have <code>swagger.json</code> file.</p>" +
          "<p>For generate doc file use: <code>swagger-jsdoc -d swaggerDef.js -o swagger.json</code> in terminal</p>" +
          "<p>Then, restart your application</p>"
      );
    });
  }

  /**
   * @description No results returned mean the object is not found
   * @constructs
   */
  app.use((req, res, next) => {
    res.status(404).send(http.STATUS_CODES[404]);
  });

  /**
   * @constructs all routes
   */
  app.use(router);
}
