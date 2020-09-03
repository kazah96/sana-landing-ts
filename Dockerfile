FROM node:12
WORKDIR /app

COPY package*.json ./

RUN npm install
COPY server/src /app

EXPOSE 3000

CMD [ "ts-node", "/app/index.ts"]