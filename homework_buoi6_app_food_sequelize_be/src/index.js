const express = require("express");

const app = express();
const port = 8080;
// cho phép server backend đọc được chuỗi json ~ middleware
app.use(express.json());

//cấp phép cho front end truy cập server API BE
const cors = require("cors");
app.use(cors());

app.listen(port);

const rootRoute = require("./routes/rootRoute");
app.use("/api", rootRoute);
