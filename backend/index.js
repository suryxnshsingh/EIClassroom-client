import express from 'express';
import authRoutes from './routes/auth.js';  // Use .js extension for ES modules
import subjectRoutes from './routes/subjects.js';
import cors from 'cors';

const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON requests


app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/subjects', subjectRoutes);

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
