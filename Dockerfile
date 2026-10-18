FROM node:22-slim
WORKDIR /app

# Install openssl and certificates required by Prisma on Debian
RUN apt-get update -y && apt-get install -y openssl ca-certificates && rm -rf /var/lib/apt/lists/*

# Copy package manifests and Prisma schema before install
COPY package*.json ./
COPY prisma ./prisma

# Install all dependencies (will trigger postinstall: prisma generate)
RUN npm ci

# Default environment variables for production (set before build so scripts write to /app/prisma/learning.db)
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0
ENV DATABASE_URL="file:/app/prisma/learning.db"

RUN mkdir -p /app/prisma

# Copy source and build web + server bundle + seed full 22,645 words dictionary
COPY . .
RUN npm run build

# Ensure SQLite learning.db is cleanly merged from WAL into the main database file inside Docker image
RUN node -e "const { DatabaseSync } = require('node:sqlite'); try { const db = new DatabaseSync('/app/prisma/learning.db'); db.exec('PRAGMA wal_checkpoint(TRUNCATE);'); db.exec('VACUUM;'); db.close(); console.log('✓ SQLite learning.db checkpointed and vacuumed successfully.'); } catch (e) { console.warn('Checkpoint note:', e); }"

EXPOSE 3000

# Khởi động máy chủ sản xuất (cơ sở dữ liệu tự động đồng bộ qua ensureDatabaseSchema)
CMD ["node", "dist-api/server.js"]
