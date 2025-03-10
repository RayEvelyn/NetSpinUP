FROM node:18

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./
RUN npm install

# Copy public directory explicitly
COPY public ./public
COPY src ./src

EXPOSE 3000

CMD ["npm", "start"] 