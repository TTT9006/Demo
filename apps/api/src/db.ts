import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { createClient } from '@libsql/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { databaseLocation } from '../../../packages/shared/database-location';
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

const tursoUrl =
  process.env.TURSO_DATABASE_URL ||
  (process.env.DATABASE_URL?.startsWith('libsql://') || process.env.DATABASE_URL?.startsWith('https://')
    ? process.env.DATABASE_URL
    : undefined);

function initDatabase(): PrismaClient {
  if (tursoUrl) {
    const adapter = new PrismaLibSQL({
      url: tursoUrl,
      authToken: process.env.TURSO_AUTH_TOKEN,
    });
    return new PrismaClient({ adapter });
  }

  const resolvedLocation = databaseLocation(process.env.DATABASE_URL);
  process.env.DATABASE_URL = resolvedLocation.url;
  return new PrismaClient();
}

export async function ensureDatabaseSchema() {
  if (tursoUrl) {
    const client = createClient({
      url: tursoUrl,
      authToken: process.env.TURSO_AUTH_TOKEN,
    });

    try {
      const check = await client.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='User'");
      if (check.rows.length === 0) {
        console.log('Đang tự động khởi tạo cấu trúc bảng trên Turso Cloud...');
        const migrationsDir = path.resolve('prisma/migrations');
        const folders = readdirSync(migrationsDir)
          .filter((f) => /^\d/.test(f))
          .sort();
        for (const folder of folders) {
          const sql = readFileSync(path.join(migrationsDir, folder, 'migration.sql'), 'utf8');
          await client.executeMultiple(sql);
        }
        console.log('Đã khởi tạo toàn bộ bảng trên Turso Cloud thành công!');
      }
    } catch (err) {
      console.error('Lỗi khi tự động khởi tạo schema Turso:', err);
    } finally {
      client.close();
    }
    return;
  }

  // Khởi tạo bảng tự động cho SQLite cục bộ khi chạy trên container mới
  try {
    const { DatabaseSync } = await import('node:sqlite');
    const resolvedLocation = databaseLocation(process.env.DATABASE_URL);
    const sqlite = new DatabaseSync(resolvedLocation.filename);
    try {
      const check = sqlite.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='User'").all();
      if (check.length === 0) {
        const migrationsDir = path.resolve('prisma/migrations');
        const folders = readdirSync(migrationsDir)
          .filter((f) => /^\d/.test(f))
          .sort();
        for (const folder of folders) {
          const sql = readFileSync(path.join(migrationsDir, folder, 'migration.sql'), 'utf8');
          sqlite.exec(sql);
        }
      }
    } finally {
      sqlite.close();
    }
  } catch (err) {
    console.error('Lỗi khi khởi tạo SQLite cục bộ:', err);
  }
}

export const db = initDatabase();
