#!/bin/bash

PROJECT_PATH="/home/julien/Projets_dev/math-game"

buildToProd() {
  echo "Build and publish on Github" $PWD date
  if [ $PWD = $PROJECT_PATH ]; then
    npm run-script build-prod
    git add * 
    git push origin master
    git status
    npm run-script build-dev
    echo "Success"
  else
    echo "Fail"
  fi

}

for param in "$@"; do
  case $param in
  buildToProd)
    echo "Really ? You want to clean ?"
    select yn in "Yes" "No"; do
      case $yn in
      Yes)
        buildToProd
        break
        ;;
      No) exit ;;
      esac
    done
    ;;
  *)
    echo "Invalid argument : $param"
    ;;
  esac
  if [ ! $? -eq 0 ]; then
    exit 1
  fi
done
