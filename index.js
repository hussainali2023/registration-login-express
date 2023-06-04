require ('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")

const app = express();
app.use(cors())
app.use(express.json());

// Connect to MongoDB
mongoose.connect(`${process.env.DB_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
//   useCreateIndex: true
});
// console.log(process.env.DB_URL)


// Set up routes
const authAdminRoutes = require('./routes/adminRoute');
const authClientRoutes = require("./routes/clientRoute")

app.use('/api/admin', authAdminRoutes);
app.use("/api/client", authClientRoutes)


app.get('/', (req, res) => {
  res.send("Server is running ")
} )

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
