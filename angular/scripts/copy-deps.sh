#!/usr/bin/env bash

set -e # immediately exit upon error
cd "`dirname $0`/.." # start in project root

cd node_modules
mkdir -p '@fullcalendar'
cd '@fullcalendar'
rm -rf *
cp -r ../../../../packages/core core
cp -r ../../../../packages/common common
cp -r ../../../../packages/daygrid daygrid
cp -r ../../../../packages/interaction interaction
cp -r ../../../../packages/timegrid timegrid
