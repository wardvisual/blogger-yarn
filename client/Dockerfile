FROM node:14 AS development

WORKDIR /blogger-yarn/client/src/app

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli@14.2.3

COPY . .

RUN npm run build

EXPOSE 4200
