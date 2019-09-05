#!/usr/bin/env bash

set -e

docker run -d -v ${PWD}:/app -v /app/node_modules -p 4201:4200 --name marketingfront --rm marketingfront:dev