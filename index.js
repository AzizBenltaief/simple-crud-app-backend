const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Product = require('./Models/product.model')
const productRoute = require('./Routes/product.route')

//middleware
app.use(express.json());


//routes
app.use('/api/products', productRoute);


//connect to mongodb
mongoose.connect('mongodb+srv://insecounces1998:VRIfhNLulfXem1k8@backenddb.ycmohdw.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log('Connected!');
    app.listen(5000, () => {
      console.log('Server running on port 5000');
    });
  })
  .catch(() => {
    console.log('Connection failed!');
  });


app.get('/', (req, res) => {
  res.send('Hello from Node API Server !');
});


