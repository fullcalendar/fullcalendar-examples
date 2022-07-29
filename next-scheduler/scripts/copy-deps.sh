#!/usr/bin/env bash

set -e # immediately exit upon error
cd "`dirname $0`/.." # start in project root

cd node_modules
mkdir -p '@fullcalendar'
cd '@fullcalendar'
rm -rf *
cp -r ../../../../packages-contrib/react react
cp -r ../../../../packages/common common
cp -r ../../../../packages/interaction interaction
cp -r ../../../../packages-premium/premium-common premium-common
cp -r ../../../../packages-premium/resource-common resource-common
cp -r ../../../../packages-premium/scrollgrid scrollgrid
cp -r ../../../../packages-premium/timeline timeline
cp -r ../../../../packages-premium/resource-timeline resource-timeline
