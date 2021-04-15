import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";
import Role from "../models/Rol";
import Rol from "../models/Rol";

export const singUp = async (req, res) => {
  const { firstName, lastName, userName, email, password, roles } = req.body;

  const newUser = new User({
    firstName,
    lastName,
    userName,
    email,
    password: await User.encrypPassword(password),
  });

  if (roles) {
    const newRol = await Role.find({ name: { $in: roles } });
    newUser.roles = newRol.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name: "User" });
    newUser.roles = [role._id];
    newUser.tokenEmail = "";
  }
  const rol = newUser.roles;
  const newUserSave = await newUser.save();
  const token = jwt.sign({ id: newUserSave._id }, config.SECRET, {
    expiresIn: 86400,
  });
  res.json({ token, rol });
};

export const singIn = async (req, res) => {
  const userExist = await User.findOne({ userName: req.body.userName });

  if (!userExist) {
    return res.status(400).json({ message: "El usuario no existe" });
  }

  const passwordExist = await User.comparePassword(
    req.body.password,
    userExist.password
  );
  const nombreRol = await Rol.findById(userExist.roles);

  if (!passwordExist) {
    return res.status(401).json({ massage: "La contraseña no existe" });
  }

  const token = jwt.sign({ id: userExist._id }, config.SECRET, {
    expiresIn: 86400,
  });

  return res.json({
    token: token,
    rol: nombreRol,
  });
};
