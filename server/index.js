//IMORTS FROM PACKAGES
const express = require('express');
const mongoose = require('mongoose');
//IMPORT FROM OTHER FILES
const authRouter = require('./routes/auth');
//init
const PORT = process.env.PORT || 3000;
const app = express();
const DB ="mongodb+srv://jul:julius@cluster0.s3bet.mongodb.net/?retryWrites=true&w=majority";
//middleware
app.use(authRouter);
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