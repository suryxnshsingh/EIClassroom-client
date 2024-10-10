import jwt from 'jsonwebtoken';

// Middleware to authenticate tokens
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Assuming Bearer token format
  if (!token) return res.sendStatus(401); // Unauthorized

  jwt.verify(token, 'your_jwt_secret', (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden
    req.teacher = user; // Store user information in the request object
    next(); // Proceed to the next middleware or route handler
  });
};

export default authenticateToken;