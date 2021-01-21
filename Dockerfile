FROM node:latest as build-deps
RUN mkdir /app
WORKDIR /usr/src/app

ENV PATH /app/node_modules? .bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN yarn install
COPY . ./
RUN yarn build

COPY . ./
EXPOSE 8085
CMD ["yarn", "start"]
