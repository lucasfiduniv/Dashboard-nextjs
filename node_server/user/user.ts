import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


interface NewUser {
    email: string;
    name?: string;
}

async function registerUser(newUser: NewUser): Promise<void> {
    try {

        const createdUser = await prisma.user.create({
            data: newUser,
        });

        console.log('Novo usuário registrado:', createdUser);
    } catch (error) {
        console.error('Erro ao registrar usuário:', error);
        throw error;
    } finally {

        await prisma.$disconnect();
    }
}