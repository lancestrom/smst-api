FROM node:26

ENV NODE_ENV=production
WORKDIR /app

COPY --chown=node:node package.json package-lock.json ./
RUN npm ci --omit=dev

COPY --chown=node:node . .
RUN mkdir -p uploads && chown -R node:node /app

USER node
EXPOSE 3000

CMD ["npm", "start"]
