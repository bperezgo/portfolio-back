FROM node:14

RUN npm install -g @nestjs/cli@9.1.3

COPY ["package.json", "yarn.lock", "./"]

RUN yarn --production

COPY . .

RUN yarn build

EXPOSE 3001

CMD ["yarn", "start:prod"]