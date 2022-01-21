FROM node:14.15.0-alpine as build

WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
RUN yarn install
COPY . /app
RUN yarn build

FROM node:14.15.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY --from=build /app/build .
RUN yarn global add serve@13.0.2
EXPOSE 5000
ENTRYPOINT ["/bin/sh", "-c", "serve -s -p 5000"]