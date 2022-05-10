#!/usr/bin/env bash

set -e # immediately exit upon error
cd "`dirname $0`/.." # start in project root

mkdir -p node_modules/@fullcalendar
rm -rf node_modules/@fullcalendar/angular-ivy
cp -r ../../packages-contrib/angular-ivy/dist/fullcalendar node_modules/@fullcalendar/angular-ivy
