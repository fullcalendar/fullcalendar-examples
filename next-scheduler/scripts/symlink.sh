#!/usr/bin/env bash

set -e # immediately exit upon error
cd "`dirname $0`/.." # start in project root

cd node_modules
mkdir -p '@fullcalendar'
cd '@fullcalendar'
rm -rf *
ln -s ../../../../packages/common common
ln -s ../../../../packages/interaction interaction
ln -s ../../../../packages-contrib/react react
ln -s ../../../../packages-premium/premium-common premium-common
ln -s ../../../../packages-premium/resource-common resource-common
ln -s ../../../../packages-premium/scrollgrid scrollgrid
ln -s ../../../../packages-premium/timeline timeline
ln -s ../../../../packages-premium/resource-timeline resource-timeline
