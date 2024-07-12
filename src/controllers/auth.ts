import {Request,Response} from "express";
import {compareSync, hashSync} from "bcrypt";
import prisma from "../client";
import {generateToken} from "../utils/generateToken";
export const signUp = async (req: Request, res: Response) => {
    try {
        const {email,username, password} = req.body;

        const user = await prisma.userdetails.findFirst({ where: {
                OR: [
                    { email: email },
                    { username: username }
                ]
            }});

        if(user) {
            return res.status(400).json({message: "User already exists"});
        }

        res.send(await prisma.userdetails.create({
            data: {
                email,
                username,
                password: hashSync(password, 10)
            }
        }));
    }

    catch (error:any) {
        res.status(500).json({message: error.message});
    }
}

export const logIn = async (req: Request, res: Response) => {

    try {
        const {username, password} = req.body;
        if (!username || !password) {
            return res.status(400).json({message: "Email and password are required"});
        }
        const user = await prisma.userdetails.findUnique({ where: { username : username } });
        if(!user) {
            return res.status(400).json({message: "User does not exist"});
        }
        if(!compareSync(password, user.password)) {
            throw Error("Incorrect password");
        }
        const token = generateToken({id: user.id, email: user.email, username: user.username});

        res.send({token: token});
    }
        catch (error:any) {
            res.status(500).json({message: error.message});
        }
}
