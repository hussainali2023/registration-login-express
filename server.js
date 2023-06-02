const express = require("express");
const mongoose = require("mongoose")
const cors = require('cors')


const ClientRoute = require("./routes/client")
const Adminroute = require("./routes/admin")

mongoose.connect('mongodb+srv://signup-login:Hij7GyJ0bAXBwnb9@cluster0.xgu9cba.mongodb.net/register-page', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
  process.exit(1);
});

const db = mongoose.connection;

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})

app.use("/api/client", ClientRoute)
app.use("/api", Adminroute)