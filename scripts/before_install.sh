#!/usr/bin/env bash

set -e

sudo yum update -y
sudo amazon-linux-extras install docker
sudo service docker start
sudo usermod -a -G docker ec2-user
docker kill marketingfront || true