FROM node:alpine

WORKDIR /app

ENV PATH "$PATH:/app/node_modules/.bin" 

COPY ./package.json .
COPY ./package-lock.json .
COPY ./webpack.mix.js .

RUN ["npm", "install"]

CMD ["tail", "/dev/null"]
