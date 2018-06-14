#!/usr/bin/env bash

NODE_ENV=production
BW_ENV=production

export APPLICATION_VERSION=$(jq -r ".version" package.json)

docker build \
    --file ./Dockerfile \
    --tag berrywallet/site:$APPLICATION_VERSION \
    --tag berrywallet/site .

docker login --username "$DOCKER_USERNAME" --password "$DOCKER_PASSWORD"

docker push berrywallet/site:$APPLICATION_VERSION
docker push berrywallet/site:latest