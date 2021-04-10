import Rol from "../models/Rol";

export const createRol = async () => {
  try {
    const count = await Rol.estimatedDocumentCount();

    if (count > 0) return;

    const roless = await Promise.all([
      new Rol({ name: "User" }).save(),
      new Rol({ name: "Admin" }).save(),
    ]);
    console.log(roless);
  } catch (error) {
    console.log(error);
  }
};
