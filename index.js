const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter.js');
const UserRouter = require('./Routes/UserRouter.js');
const JobstypeRouter = require('./Routes/JobstypeRouter.js');
const Jobrouter = require('./Routes/Jobrouter.js');
const mongoose = require('mongoose');
const createAdminAccount = require('./scripts/createadmin.js');
const errorHandler = require("./Middlewares/error.js");

require('dotenv').config();
//database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));

createAdminAccount();

const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/user', UserRouter);
app.use('/user', JobstypeRouter);
app.use('/user', Jobrouter);



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});



__dirname = path.resolve()

app.use(errorHandler);























// const cookieParser = require("cookie-parser");
//database connection
//MIDDLEWARE
// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'))
// }
// app.use(bodyParser.json({ limit: "5mb" }));
// app.use(bodyParser.urlencoded({
//   limit: "5mb",
//   extended: true
// }));
// app.use(cookieParser());
// app.use(cors());
// // adding security headers
// app.use(
//   helmet.contentSecurityPolicy({
//     useDefaults: true,
//     directives: {
//       "script-src": ["'self'", "https://www.gstatic.com/charts/loader.js"],
//       "img-src": ["'self'", "https: data:"]
//     }
//   })
// )


//ROUTES MIDDLEWARE
// app.get('/', (req, res) => {
//     res.send("Hello from Node Js");
// })
//app.use('/api', authRoutes);


// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '/frontend/build')))

//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//   )
// } else {
//   app.get('/', (req, res) => {
//     res.send('API is running....')
//   })
// }

// error middleware


//port
// const port = process.env.PORT || 9000

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });



