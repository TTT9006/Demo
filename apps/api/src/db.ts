import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { databaseLocation } from '../../../packages/shared/database-location';
process.env.DATABASE_URL = databaseLocation(process.env.DATABASE_URL).url;
export const db = new PrismaClient();
