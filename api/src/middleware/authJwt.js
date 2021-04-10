import config from "../config";
import User from "../models/User";
import jwt from "jsonwebtoken";
import Rol from "../models/Rol";

export const verifyToken = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  //console.log(token);
  if (!token) return res.status(403).json({ message: "No hay token" });
  console.log("llego");
  try {
    const decoded = jwt.verify(token, config.SECRET);
    req.userId = decoded.id;
    const user = await User.findById(req.userId, { password: 0 });

    if (!user) return res.status(404).json({ message: "No existe el usuario" });
    next();
  } catch (error) {
    return res.status(401).json({ message: "No autorizado" });
  }
};

export const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.userId);
  console.log("user");
  console.log(user);
  console.log("user");

  const roles = await Rol.find({ _id: { $in: user.roles } });

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "Admin") {
      next();
      return;
    }
  }
  return res.status(403).json({ message: "No tiene los permisos" });
};
