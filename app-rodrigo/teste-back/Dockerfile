FROM node:10

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install --loglevel verbose

COPY . .

EXPOSE 3333

COPY ./init.sh /init.sh

RUN chmod +x /init.sh

ENTRYPOINT ["/init.sh"]