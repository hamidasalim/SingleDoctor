//import section
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose"); 
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");


//DB connection
mongoose.connect(process.env.MONGO_DB_URI);
mongoose.connection.on("connected", () => {
	console.log("DB connected");
});
mongoose.connection.on("error", (err) => {
	console.log("mongodb failed with", err);
});

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

//import routes
const rendezvousRoutes = require("./routes/rendezvous.routes");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const presenceRoutes = require("./routes/presence.routes");
const disponibleRoutes = require("./routes/disponible.routes");
const secretaryRoutes = require("./routes/secretary.routes");
const patientRoutes = require("./routes/patient.routes");





//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes middleware
app.use("/rendezvous",rendezvousRoutes);
app.use("/auth",authRoutes);
app.use("/user",userRoutes);
app.use("/presence",presenceRoutes);
app.use("/disponible",disponibleRoutes);
app.use("/secreatry",secretaryRoutes);
app.use("/patient",patientRoutes);



//server listening
const port=8000;
app.listen(port,() => {
    console.log(`Example app on port: 8000 `);
});