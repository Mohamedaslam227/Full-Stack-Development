const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const surveyRoutes = require('./routes/surveyRoutes');
const cors = require('cors');

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/PetSurvey")
        console.log("MongoDB connected successfully")
    }
    catch(err){
        console.log(err)
    }
}
connectDB()

const app = express()

app.use(bodyParser.json())
app.use(cors({ origin: 'http://127.0.0.1:5500' }));

app.use(surveyRoutes);

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})
