require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');
const DB ='Flitrr_db'
const userRoutes = require('./routes/users.routes');
const authRoutes = require('./routes/auth.routes');

// ------ MIDDLEWARE ---------
app.use(cors());
app.use(express.json(), express.urlencoded({extended:true}));
//------------------------------


// we modularized the config server.
require("./config/mongoose.config")(DB);


//Connecting routes
// require("./routes/users.routes.js")(app);

//Routes

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);



//How do we start the server:
app.listen(PORT, () => console.log(`✨✨✨✨✨server up on ${PORT}✨✨✨✨✨✨`));