"use strict"
//모듈S
const express = require("express");
const app = express();

//모듈E

//라우팅 S
const home = require("./routes/home");
//라우팅 E

//앱 세팅 S
app.set("views", "./views");
app.set("view engine", "ejs");
//앱 세팅 E

app.use("/", home); // use -> 미들웨어 를 등록해주는 메서드.

module.exports = app;