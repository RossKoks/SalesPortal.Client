FROM node:6.7.0

RUN apt-get update && \
    apt-get install -y nginx

ENV TERM=xterm
ENV ROOT /var/www/sales-portal

RUN mkdir -p $ROOT/dist && \
    mkdir -p $ROOT/src
COPY package.json $ROOT/src/

COPY . $ROOT/src/
RUN npm run build && npm run test

# start sever
CMD ./run.sh