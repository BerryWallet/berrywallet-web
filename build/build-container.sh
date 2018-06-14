#!/usr/bin/env bash

NODE_ENV=production
BW_ENV=production

export APPLICATION_VERSION=$(jq -r ".version" package.json)

docker build \
    --file ./Dockerfile \
    --tag berrywallet/site:$APPLICATION_VERSION \
    --tag berrywallet/site .

echo "$DOCKER_PASSWORD" | docker login --password-stdin --username "$DOCKER_USERNAME"

docker push berrywallet/site:$APPLICATION_VERSION
docker push berrywallet/site:latest