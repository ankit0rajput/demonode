# 1️⃣ Base image (use official Node LTS)
FROM node:18-alpine AS builder

# 2️⃣ Set working directory
WORKDIR /app

# 3️⃣ Copy package files first (to leverage Docker layer caching)
COPY package*.json ./

# 4️⃣ Install dependencies
RUN npm install --production

# 5️⃣ Copy rest of the app
COPY . .

# 6️⃣ Expose the app port
EXPOSE 8080

# 7️⃣ Command to start the app
CMD ["npm", "start"]
