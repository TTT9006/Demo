import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { databaseLocation } from '../../../packages/shared/database-location';

const resolvedLocation = databaseLocation(process.env.DATABASE_URL);
process.env.DATABASE_URL = resolvedLocation.url;

function initDatabase(): PrismaClient {
  const url = process.env.DATABASE_URL || '';
  if (url.startsWith('libsql://') || url.startsWith('https://')) {
    const adapter = new PrismaLibSQL({
      url,
      authToken: process.env.TURSO_AUTH_TOKEN,
    });
    return new PrismaClient({ adapter });
  }
  return new PrismaClient();
}

export const db = initDatabase();
