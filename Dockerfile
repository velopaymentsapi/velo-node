FROM node:15.8.0-buster

WORKDIR /usr/src/app

COPY ./.babelrc ./
COPY ./package.json ./
COPY ./mocha.opts ./
COPY ./test ./test
COPY ./src ./src

RUN npm i