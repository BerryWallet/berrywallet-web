#!/usr/bin/env bash

NODE_ENV=production
BW_ENV=production

docker build \
    --file ./Dockerfile \
    --tag berrywallet/site \
    --no-cache .