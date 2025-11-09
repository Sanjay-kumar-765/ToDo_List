const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = require('./models/User');
const Todo = require('./models/Todo');

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    await User.deleteMany({});
    await Todo.deleteMany({});

    const users = [
      { email: 'john@example.com', password: await bcrypt.hash('password123', 10) },
      { email: 'sarah@example.com', password: await bcrypt.hash('password123', 10) },
      { email: 'mike@example.com', password: await bcrypt.hash('password123', 10) }
    ];

    const createdUsers = await User.insertMany(users);

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);

    const todos = [
      { text: 'Complete project documentation', completed: false, userId: createdUsers[0]._id, dueDate: tomorrow, dueTime: '14:00' },
      { text: 'Review pull requests', completed: true, userId: createdUsers[0]._id, dueDate: new Date(), dueTime: '10:00' },
      { text: 'Schedule team meeting', completed: false, userId: createdUsers[0]._id, dueDate: nextWeek, dueTime: '15:30' },
      { text: 'Buy groceries', completed: false, userId: createdUsers[1]._id, dueDate: new Date(), dueTime: '18:00' },
      { text: 'Finish reading book', completed: true, userId: createdUsers[1]._id },
      { text: 'Call dentist', completed: false, userId: createdUsers[1]._id, dueDate: tomorrow, dueTime: '09:00' },
      { text: 'Workout at gym', completed: true, userId: createdUsers[2]._id, dueDate: new Date(), dueTime: '07:00' },
      { text: 'Prepare presentation', completed: false, userId: createdUsers[2]._id, dueDate: nextWeek, dueTime: '11:00' },
      { text: 'Update resume', completed: false, userId: createdUsers[2]._id }
    ];

    await Todo.insertMany(todos);

    console.log('Sample data created successfully!');
    console.log('Sample users:');
    console.log('1. john@example.com / password123');
    console.log('2. sarah@example.com / password123');
    console.log('3. mike@example.com / password123');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
