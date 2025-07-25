import { PrismaClient } from "@/lib/generated/prisma";

const prismaClientSingleton = () => new PrismaClient();

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prisma ?? prismaClientSingleton();

// export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
