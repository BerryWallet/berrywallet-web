#!/usr/bin/env bash

NODE_ENV=production
BW_ENV=production

mkdir -p /nmt/berrywallet && \
mkdir -p /var/log/berrywallet && \
mkdir -p /var/log/berrywallet/web

sudo chmod 777 -R /var/log/berrywallet && \
sudo chmod 777 -R /nmt/berrywallet