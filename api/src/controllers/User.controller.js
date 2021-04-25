import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";

export const updateUser = async (req, res) => {
  const token = req.headers["x-access-token"];
  const decoded = jwt.verify(token, config.SECRET);
  req.userId = decoded.id;
  const userUpdate = await User.findByIdAndUpdate(req.userId, req.body, {
    new: true,
  });
  return res.json(userUpdate);
};

export const deleteUser = async (req, res) => {
  const userDelete = await User.findByIdAndDelete(req.params.id);
  if (!userDelete) return res.status(204).json();
  return res.json(userDelete);
};

export const getUser = async (req, res) => {
  const token = req.headers["x-access-token"];
  const decoded = jwt.verify(token, config.SECRET);
  req.userId = decoded.id;
  const user = await User.findById(req.userId);

  return res.json({ user });
};
