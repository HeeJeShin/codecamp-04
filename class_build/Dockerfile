FROM node:16

WORKDIR /class_build/
COPY ./package.jsom /class_build/
COPY ./yarn.lock /class_build/
RUN yarn install

COPY . /class_build/
RUN yarn build:ssr

CMD yarn start