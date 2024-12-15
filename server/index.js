const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/database');

const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/postRoutes');
const { notFound, errorMiddleware } = require('./middleware/error.middleware');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}))
app.use(cors({credentials: true, origin: "http://localhost:5173"}))
// app.use(cors());




// Routes
app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)
app.get('/', (req, res) => {
  res.send('Server is running and connected to MongoDB!');
});




app.use(notFound);
app.use(errorMiddleware)

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
