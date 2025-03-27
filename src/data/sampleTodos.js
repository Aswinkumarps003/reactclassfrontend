const mongoose = require('mongoose');
const Todo = require('../models/Todo');

const sampleTodos = [
    {
        text: "Complete the project documentation",
        completed: false,
        createdAt: new Date()
    },
    {
        text: "Review pull requests",
        completed: true,
        createdAt: new Date()
    },
    {
        text: "Schedule team meeting",
        completed: false,
        createdAt: new Date()
    },
    {
        text: "Update dependencies",
        completed: true,
        createdAt: new Date()
    },
    {
        text: "Write unit tests",
        completed: false,
        createdAt: new Date()
    },
    {
        text: "Deploy to production",
        completed: false,
        createdAt: new Date()
    },
    {
        text: "Code review",
        completed: true,
        createdAt: new Date()
    },
    {
        text: "Bug fixing",
        completed: false,
        createdAt: new Date()
    }
];

const seedDatabase = async () => {
    try {
        // Clear existing todos
        await Todo.deleteMany({});
        
        // Insert sample todos
        await Todo.insertMany(sampleTodos);
        
        console.log('Sample todos inserted successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
    }
};

module.exports = seedDatabase; 