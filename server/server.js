const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

app.use(cors());
app.use(express.json(),express.urlencoded({extended:true}));

require("./config/mongoose.config");
require("./routes/pirates.routes")(app);
app.listen(port,()=>console.log("hello from the otter side"))