const express = require('express');
const cors = require('cors');
require('./db');


const app = express();


//middleware
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
  methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import router
const userRoutes = require('./routes/user');

// Use Router
app.use('/api/user', userRoutes);
app.get('/', (req, res)=> {
  res.status(200).json({message: "Working"})
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server listening to 5000`);
});
