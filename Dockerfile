# make production build of frontend
FROM node:26.13.1-alpine AS front_build

WORKDIR /front

COPY --chown=node:node ./frontend/ ./

RUN npm ci
RUN npm run build

USER node

# setup backend

FROM node:26.13.1-alpine

WORKDIR /usr/src/app

COPY --chown=node:node ./backend/ ./

RUN npm ci

COPY --from=front_build /front/dist ./dist

EXPOSE 3001
CMD ["npm", "start"]