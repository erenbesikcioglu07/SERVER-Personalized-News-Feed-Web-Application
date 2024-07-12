require('dotenv').config()
import jwt from "jsonwebtoken";

type User = {
    id: number;
    username: string;
    email: string;
}
export const generateToken = (user : User ) => {
    return jwt.sign({...user}, process.env.JWT_SECRET!);
}
