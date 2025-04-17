FROM node:20-alpine as build

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["pnpx", "serve", "-s", "dist", "-l", "8080"]