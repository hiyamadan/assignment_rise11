const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./db');
const userRouter = require('./routers/user')

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

app.use(userRouter)

const PORT = process.env.PORT || 3000

const server = app.listen(
    PORT, 
    console.log(`Server running on port ${PORT}`.yellow.bold)
    );
// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server and exit process
    server.close(() => process.exit(1));
  }
  );