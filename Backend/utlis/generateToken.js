import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config({ quiet: true });

const JWT_SECRET = process.env.JWT_SECRET;

function generateToken(user) {
  return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
}

export default generateToken;