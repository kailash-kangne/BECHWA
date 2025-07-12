FROM node:20

WORKDIR /app

COPY bechwa-ui/package.json bechwa-ui/package-lock.json ./
RUN npm install

COPY bechwa-ui/ ./

CMD ["npm", "start"]
