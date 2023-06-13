const mongoose = require('mongoose')
const express = require('express')
require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');

//middleware
const app = express();
const corsOptions = {
    origin: true,
    credentials: true
}
app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({
    useTempFiles: true
}))


//Route
app.use('/users', require('./routes/userRouter'))
app.use('/tours', require('./routes/tourRouter'))
app.use('/api', require('./routes/authRouter'))
app.use('/review', require('./routes/reviewRouter'))
app.use('/reservation', require('./routes/reservationRouter'))
// database connection 

URI = process.env.URI_MONGODB
mongoose.connect(URI,
    {

        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
    .then(() => console.log("Database connected successfully"))
    .catch((err) => { console.error(err) })



app.listen(process.env.PORT, () => {
    console.log(`app listing on port ${process.env.PORT}`)
})