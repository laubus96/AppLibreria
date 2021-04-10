import app from "./app";
import "@babel/polyfill";

import "./database";
app.listen(app.get("port"), () => {
  console.log("server on port ", app.get("port"));
});
