const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//mongodb connection
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/orderService', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
}).then(() => console.log('mongodb is connected'))
    .catch((err) => console.log(err));

//define product router
app.use('/api/orders', require('./router/orderRouter'));

app.get('/', (req, res) => {
    res.send('Order Server is ready');
});

//common error middleware
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
})

const port = process.env.PORT || 5002;
app.listen(port, () => {
    console.log(`Order will be Served at http://localhost:${port}`)
});