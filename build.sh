#!/bin/bash

PROJECT_PATH="/home/julien/Projets_dev/brain-challenge"

buildToProd() {
  echo "Build and publish on Github" $PWD date
  if [ $PWD = $PROJECT_PATH ]; then
    echo "BUILD_ENV=developper && PUBLIC_URL='http://localhost:4000/' \n REACT_APP_API_URL='http://localhost:4000/'" > .env
    npm run-script build-prod
    git add *
    git commit -m "Auto commit - Deployment on the prod"
    git push origin master
    git status
    npm run-script build-dev
    echo "Publish SUCCESS"
  else
    echo "Publish Fail"
  fi

}

for param in "$@"; do
  case $param in
  buildToProd)
    buildToProd
    ;;
  *)
    echo "Invalid argument : $param"
    ;;
  esac
  if [ ! $? -eq 0 ]; then
    exit 1
  fi
done
