require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const databaseConfig = require("./config/database");
const validate = require("express-validation");
const Youch = require("youch");

class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== "production";

    this.database();
    this.middlewares();
    this.routes();
    this.exception();
  }

  database() {
    mongoose.connect(
      `mongodb://${databaseConfig.uri.host}:${databaseConfig.uri.port}/${
        databaseConfig.uri.database
      }`,
      databaseConfig.options
    );
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }

  exception() {
    this.express.use(async (err, req, res, next) => {
      if (err instanceof validate.ValidationError) {
        return res.status(err.status).json(err);
      }

      if (process.env.NODE.ENV !== "production") {
        const youch = new Youch(err);
        return res.json(await youch.toJSON());
      }

      return res
        .status(err.status || 500)
        .json({ error: "Internal server error" });
    });
  }
}

module.exports = new App().express;
