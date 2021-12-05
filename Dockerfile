FROM node:16.13.1

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

CMD ["node", "dist/main"]