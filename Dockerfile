FROM node:9.8.0-alpine

ENV BW_HOST=localhost
ENV BW_PORT=80

RUN apk add --no-cache gettext git

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build:prod

RUN envsubst < /var/www/build/.env.template.yml > /var/www/.env.yml

EXPOSE 80

CMD /bin/sh -c "envsubst < /var/www/build/.env.template.yml > /var/www/.env.yml && npm start"
