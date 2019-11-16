FROM node:12

WORKDIR /app

COPY . /app

RUN pwd

EXPOSE 3000

CMD ["npm", "start"]