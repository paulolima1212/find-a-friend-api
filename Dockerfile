FROM node:alpine

WORKDIR /app

COPY ./package.json .

RUN yarn

COPY . ./app

COPY . .

EXPOSE 3333

CMD [ "npm", "run", "dev" ]

