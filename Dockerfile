FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

ENV MONGO_URL "mongodb://mongo:27017"
ENV DB_NAME notes

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]