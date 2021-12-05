# setp 0: build angular frontend
FROM node:16.13.1 as build-step

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build --prod

# step 1: serve app with nginx server

FROM nginx:1.19.9-alpine

COPY --from=build-step /app/dist/users-frontend /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf
