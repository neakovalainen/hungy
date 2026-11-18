# make production build of frontend
FROM node:26

WORKDIR /front

COPY --chown=node:node ./frontend/ ./

RUN npm ci

RUN npm run build

USER node

# setup backend

FROM node:26