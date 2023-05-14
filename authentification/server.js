const express = require('express');
const connectdb = require('./connectdb');
const router = require('./routes');
const userRoutes = require('./usersRouter');
const propertyRoutes = require('./propertyRoutes');

require('dotenv').config();

const app = express();
const port = 5000;

app.use(express.json());
connectdb();
app.use('/', router);
app.use('/api', propertyRoutes);
app.use("/", userRoutes);


app.listen(port, () => {
  console.log("Server is running at port: " + port);
});
