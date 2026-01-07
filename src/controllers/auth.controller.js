import { loginService } from "../services/auth.service.js";

export const login = (req, res) => {
  const { username, password } = req.body;

  const token = loginService(username, password);
  if (!token)
    return res.status(401).json({ message: "Invalid credentials" });

  res.json({ token });
};
