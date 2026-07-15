FROM node:18-alpine

RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY backend/package*.json ./
RUN npm ci --only=production

COPY backend/ ./
COPY database/init.sql ./database/init.sql

EXPOSE 3001

CMD ["node", "src/index.js"]
