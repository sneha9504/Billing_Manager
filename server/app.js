const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/dad', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected!'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Define a simple model
const User = mongoose.model('User', {
  name: String,
  email: String,
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello MongoDB!');
});

app.post('/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

app.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// Start server
app.listen(3000, () => {
  console.log('🚀 Server is running on http://localhost:3000');
});
