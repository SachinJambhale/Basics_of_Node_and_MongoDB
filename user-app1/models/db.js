const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/morningdb");


const conn1 = mongoose.connection;


conn1.on("connected", () => {
    console.log("Connected to DB...");
});
conn1.on("error", (err) => {
    console.log("could not connected to db...", err);
});
conn1.on("disconnected", () => {
    console.log("Disconnected from DB...");
});