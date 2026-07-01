import { Request, Response } from "express";
import {
    registerNewUser,
    handleGetAllUsers,
    handleDeleteUser,
    handleUpdateUser,
    handleGetUserById
} from "../services/api.service";

const createUsersAPI = async (req: Request, res: Response) => {

    const { name, email, address } = req.body;

    const newUser = await registerNewUser(name!, email!, address!);

    return res.status(200).json({
        message: "User created successfully",
        data: newUser
    });


}
const getAllUsers = async (req: Request, res: Response) => {



    const allUsers = await handleGetAllUsers();

    return res.status(200).json({
        data: allUsers
    });


}
const getUserById = async (req: Request, res: Response) => {

    const { id } = req.params as { id: string };

    const user = await handleGetUserById(id);

    return res.status(200).json({
        data: user
    });


}

const deleteUserById = async (req: Request, res: Response) => {

    const { id } = req.params as { id: string };

    const deletedUser = await handleDeleteUser(id);

    return res.status(200).json({
        data: deletedUser
    });


}
const updateUserById = async (req: Request, res: Response) => {



    const { id } = req.params as { id: string };
    const { name, email, address } = req.body;

    const updatedUser = await handleUpdateUser(id, name, email, address);

    return res.status(200).json({
        data: updatedUser
    });


}
export { createUsersAPI, getAllUsers, getUserById, deleteUserById, updateUserById }