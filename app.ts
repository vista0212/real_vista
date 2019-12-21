import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";
import * as express from "express";
import * as morgan from "morgan";

import router from './routes/router';

import { connect } from './database/index';

dotenv.config();

const app: express.Application = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use('/api', router);

app.use((req, res, next) => {
  // err.status = 404;
  process.exit();
});

connect(true, true).then(() => console.log("db connect"));
export default app;
