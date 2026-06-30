import { PrismaClient } from "@prisma/client";
import { prisma } from "../config/client";




const registerNewUser = async (
    name: string,
    email: string,
    address: string) => {
    const newUser = await prisma.user.create({
        data: {
            name: name,
            email: email,
            address: address
        }
    });
    return newUser;
}
const handleGetAllUsers = async () => {
    const allUsers = await prisma.user.findMany();
    return allUsers;
}
const handleDeleteUser = async (id: string) => {
    const deletedUser = await prisma.user.delete({
        where: {
            id: +id
        }
    });
    return deletedUser;
}
const handleUpdateUser = async (id: string, name: string, email: string, address: string) => {
    const updatedUser = await prisma.user.update({
        where: {
            id: +id
        },
        data: {
            name: name,
            email: email,
            address: address
        }
    });
    return updatedUser;
}
export { registerNewUser, handleGetAllUsers, handleDeleteUser, handleUpdateUser }