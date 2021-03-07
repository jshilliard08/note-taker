//Import what we need
const express = require('express')

//Initializes app and creates my port
const app = express();
const PORT = process.env.PORT || 3000;

//setting up the body parsing for static and routing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//routes
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')(app);
//require('./routes/apiRoutes')(app);

//Bring in the Routes
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

//Starts my server
app.listen(PORT, () => console.log(`My app is running on PORT: ${PORT}`));
