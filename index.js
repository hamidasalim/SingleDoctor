//import section
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose"); 
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");

/* var cors = require('cors')
const corsOptions = {
  origin: true,
  credentials: true,
  optionSuccessStatus:200,
}
app.options('*', cors(corsOptions)); // preflight OPTIONS; put before other routes
app.listen(80, function(){
  console.log('CORS-enabled web server listening on port 80');
}); */

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration


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
const doctorRoutes = require("./routes/doctor.routes");






//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes middleware
app.use("/rendezvous",rendezvousRoutes);
app.use("/auth",authRoutes);
app.use("/user",userRoutes);
app.use("/presence",presenceRoutes);
app.use("/disponible",disponibleRoutes);
app.use("/secretary",secretaryRoutes);
app.use("/patient",patientRoutes);
app.use("/doctor",doctorRoutes);




//server listening
const port=8000;
app.listen(port,() => {
    console.log(`Example app on port: 8000 `);
});