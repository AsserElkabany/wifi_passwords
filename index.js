const express = require("express");
const PORT = 3000;
const { handler } = require("./controller/user");
const mongoose = require('mongoose');

const url = 'mongodb+srv://asser337:nodejs_11.11@cluster0.ceji32w.mongodb.net/wifi_passwords?';



const app = express();

app.use(express.json());

const router = require("./routes/user");
app.use('/api', router);


mongoose.connect(url, {  
})
.then(() => {
    app.listen(3000, () => console.log('Listening on port 3000'));
})
.catch(err => console.log(err));
