FROM node:10.15.1-alpine

WORKDIR /usr/src/app

COPY ./.babelrc ./
COPY ./package.json ./
COPY ./mocha.opts ./
COPY ./test ./test
COPY ./src ./src

RUN npm i