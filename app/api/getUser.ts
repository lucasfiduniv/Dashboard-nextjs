import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

async function main(): Promise<void> {
    try {
        const allUsers: User[] = await prisma.user.findMany();
        console.log(allUsers);
    } catch (error) {
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

main().catch(error => {
    console.error(error);
    process.exit(1);
});
