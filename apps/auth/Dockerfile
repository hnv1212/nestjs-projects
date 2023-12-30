FROM node:alpine as development

WORKDIR /usr/src/app

COPY package.json ./
COPY tsconfig.json tsconfig.json

RUN npm install --legacy-peer-deps

COPY apps/auth apps/auth
COPY libs libs

RUN npm run build

FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install --prod

COPY --from=development /usr/src/app/dist ./dist

CMD [ "node", "dist/app/auth/main" ]