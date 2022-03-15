"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.use("/", function (req, res) { return res.send("Samuel"); });
app.listen(3000, function () { return console.log("listening"); });
//# sourceMappingURL=index.js.map