#!/bin/bash

docker login

docker build -t nicogg/bilygine-vuejs -f Dockerfile.vuejs .
docker push nicogg/bilygine-vuejs
