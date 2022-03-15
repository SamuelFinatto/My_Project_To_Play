// import * as express from 'express';
// const app = express();
// app.use("/", (req: express.Request, res: express.Response) => res.send("Samuel"));
// app.listen(3000, () => console.log("listening"));

import * as http from "http";
import handler from "serve-handler";

const server = http.createServer((request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/zeit/serve-handler#options
  return handler(request, response, { public: "public/" })
})

const port = process.env.PORT || 3000
server.listen(port, () => {
  console.log("Running at http://localhost:" + port)
})