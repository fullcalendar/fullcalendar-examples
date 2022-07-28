#!/usr/bin/env bash

set -e # immediately exit upon error
cd "`dirname $0`/.." # start in project root

cd node_modules
mkdir -p '@fullcalendar'
cd '@fullcalendar'
rm -rf *
ln -s ../../../../packages/common common
ln -s ../../../../packages/daygrid daygrid
ln -s ../../../../packages/interaction interaction
ln -s ../../../../packages-contrib/react react
ln -s ../../../../packages/timegrid timegrid
