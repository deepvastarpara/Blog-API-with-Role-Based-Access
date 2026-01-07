import { users } from "../models/user.model.js";
import { generateToken } from "../utils/jwt.js";

export const loginService = (username, password) => {
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) return null;

  return generateToken({
    id: user.id,
    role: user.role,
  });
};
