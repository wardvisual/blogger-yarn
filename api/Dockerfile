FROM node:14 AS development

WORKDIR /blogger-yarn/api/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4200


# PROD
FROM node:14 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /blogger-yarn/src/app

COPY --from=development /blogger-yarn/src/app .

EXPOSE 3000

CMD [ "node", "dist/main" ]

