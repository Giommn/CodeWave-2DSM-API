import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
import path from "path";
import { Auth, ResponseUser } from "../dtos/user.dto";

dotenv.config({ path: path.resolve(__dirname, "..", "..", ".env") });

const SECRET = process.env.JWT_SECRET;

if (!SECRET) {
  throw new Error("JWT_SECRET não definida no .env");
}

export function criarToken(usuario: ResponseUser) {
  return jwt.sign(
    {
      id_user: usuario.id_user,
      nivel_user: usuario.nivel_user,
    },
    SECRET,
    { expiresIn: "1d" },
  );
}

//Middleware
export function authToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(401);
    if (user.nivel_user == "USER") return res.sendStatus(401);

    req.user = user;
    next();
  });
}
