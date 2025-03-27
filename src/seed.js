const mongoose = require('mongoose');
const seedDatabase = require('./data/sampleTodos');

// Connect to MongoDB
mongoose.connect("mongodb+srv://machanss11:Machanss11@sample.99kv3.mongodb.net/?retryWrites=true&w=majority&appName=sample", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async () => {
    console.log("Connected to MongoDB");
    await seedDatabase();
    console.log("Database seeding completed");
    process.exit(0);
}).catch(err => {
    console.error("Database connection error:", err);
    process.exit(1);
}); 