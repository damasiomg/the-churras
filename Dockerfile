FROM node:18-alpine as development
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm i
COPY . /app/
EXPOSE 3000