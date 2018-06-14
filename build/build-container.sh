#!/usr/bin/env bash

NODE_ENV=production
BW_ENV=production

docker build \
    --file ./Dockerfile \
    --tag berrywallet/site \
    --no-cache .

echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

docker push berrywallet/site