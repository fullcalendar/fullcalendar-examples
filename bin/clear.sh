#!/usr/bin/env bash

# always immediately exit upon error
set -e

# start in root
cd "`dirname $0`/.."

root_dir="$PWD"

production_str="$1"

if [[ "$production_str" == "" ]]
then
  echo "Will install from DEV NPM INSTALLATION."
  npm_registry_str="--registry http://localhost:4873"
elif [[ "$production_str" == "--production" ]]
then
  echo "Will install from LIVE NPM."
  npm_registry_str=""
else
  echo "Invalid flag $production_str. Aborting"
  exit 1
fi

for package_file in */package.json
do
  cd "$(dirname $package_file)"

  echo "*"
  echo "* Repo: $PWD"
  echo "*"

  echo "Clearing..."
  rm -rf node_modules package-lock.json

  cd "$root_dir"
done

echo "*"
echo "* Success!"
echo "*"
