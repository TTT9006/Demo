FROM node:22-slim
WORKDIR /app

# Install openssl and certificates required by Prisma on Debian
RUN apt-get update -y && apt-get install -y openssl ca-certificates && rm -rf /var/lib/apt/lists/*

# Copy package manifests and Prisma schema before install
COPY package*.json ./
COPY prisma ./prisma

# Install all dependencies (will trigger postinstall: prisma generate)
RUN npm ci

# Copy source and build web + server bundle
COPY . .
RUN npm run build

# Default environment variables for production
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0
ENV DATABASE_URL="file:/app/prisma/learning.db"

RUN mkdir -p /app/prisma

EXPOSE 3000

# Deploy schema migrations and start the production server
CMD ["sh", "-c", "npx prisma migrate deploy && node dist-api/server.js"]
