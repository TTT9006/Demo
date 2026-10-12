import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
process.env.DATABASE_URL ||= 'file:./learning.db';
export const db = new PrismaClient();
