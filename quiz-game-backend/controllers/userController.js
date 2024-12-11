const User = require('../models/User');

async function registerUser(req, res) {
  try {
    const { name, rollNumber } = req.body;

    console.log("Received request data:", { name, rollNumber });

    if (!rollNumber || rollNumber.trim() === "") {
      return res.status(400).json({ message: "rollNumber is required and cannot be empty" });
    }

    const existingUser = await User.findOne({ rollNumber });

    if (existingUser) {
      return res.status(400).json({ message: 'User with this rollNumber already exists' });
    }

    const newUser = new User({
      name,
      rollNumber,
    });

    console.log("Created new user:", newUser);
    await newUser.save();

    // Respond with success
    return res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error("Error during user registration:", error.message);

    return res.status(500).json({ message: 'Error registering user', error: error.message });
  }
}

module.exports = { registerUser };