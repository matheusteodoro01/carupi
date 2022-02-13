FROM node:16-alpine

WORKDIR /usr/app
COPY package.json yarn.lock ./

RUN npm install


COPY . .

RUN npm run build


EXPOSE 3333



CMD [ "npm","start" ]

