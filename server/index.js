//IMORTS FROM PACKAGES
const express = require('express');
const mongoose = require('mongoose');
//IMPORT FROM OTHER FILES
const authRouter = require('./routes/auth');
//const userRouter = require("./routes/user");
//init
const PORT = process.env.PORT || 3000;
const app = express();
const DB =
"mongodb+srv://<jul>:<amazon>@cluster0.s3bet.mongodb.net/?retryWrites=true&w=majority";
//middleware
app.use(authRouter);
app.use(express.json());
//app.use(userRouter);
//clientside -> server -> client
//connections
mongoose
.connect(DB)
.then(() => {
console.log("connection successful");
})
.catch((e) => {
    console.log(e);
});


app.listen(PORT,"0.0.0.0", () => {
    console.log(`connected at port ${PORT}`);
});