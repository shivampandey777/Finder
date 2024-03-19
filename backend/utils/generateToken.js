import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  return jwt.sign({ id }, "hello", { expiresIn: '30d' });
};

export default generateToken;
