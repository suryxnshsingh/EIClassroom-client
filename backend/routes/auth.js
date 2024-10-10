import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

// Register Teacher
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingTeacher = await prisma.teacher.findUnique({ where: { email } });
    if (existingTeacher) {
      return res.status(400).json({ error: "Teacher already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const teacher = await prisma.teacher.create({
      data: { name, email, password: hashedPassword },
    });

    res.status(201).json(teacher);
  } catch (error) {
    console.error("Error during registration:", error); // Log the error
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Login Teacher
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const teacher = await prisma.teacher.findUnique({ where: { email } });
    if (!teacher) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isValid = await bcrypt.compare(password, teacher.password);
    if (!isValid) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ teacherId: teacher.id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error("Error during login:", error); // Log the error
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;
