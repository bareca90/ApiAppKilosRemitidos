import { Request } from "express";
import { AuthRequest } from "../../interfaces/auth.interface";
import { AuthServices } from "./auth.services";

export const validateUserController = async (req: Request) => {
  try {
    const { username, password } = req.body as AuthRequest;
    return await new AuthServices().validateUser(username, password);
  } catch (error) {
    console.error("Error en Consulta de el controller de Auth:", error); // Registrar el error en la consola
    throw error;
  }
};
