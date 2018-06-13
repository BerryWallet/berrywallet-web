FROM node:10.4.1-alpine

ENV BW_HOST=localhost
ENV BW_PORT=80

RUN apk add --no-cache gettext git

WORKDIR /var/www/

COPY . .

RUN npm install
RUN npm run build:prod

RUN envsubst < /var/www/build/.env.template.yml > /var/www/.env.yml

EXPOSE 80

CMD /bin/sh -c "envsubst < /var/www/build/.env.template.yml > /var/www/.env.yml && npm start"
