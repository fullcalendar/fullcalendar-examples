#!/usr/bin/env bash

# always immediately exit upon error
set -e

# start in root
cd "`dirname $0`/.."

root_dir="$PWD"

for package_file in */package.json
do
  cd "$(dirname $package_file)"

  echo "*"
  echo "* Repo: $PWD"
  echo "*"

  echo "Building..."
  npm run build

  cd "$root_dir"
done

echo "*"
echo "* Success!"
echo "*"
