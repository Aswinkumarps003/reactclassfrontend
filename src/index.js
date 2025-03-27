const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todoRoutes = require('./routes/todos');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://machanss11:Machanss11@sample.99kv3.mongodb.net/?retryWrites=true&w=majority&appName=sample", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Database connection error:", err));

// Routes
app.use('/api/todos', todoRoutes);

// Basic route for testing
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Todo API' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
}); 