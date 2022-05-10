#!/usr/bin/env bash

set -e # immediately exit upon error
cd "`dirname $0`/.." # start in project root

mkdir -p node_modules/@fullcalendar
rm -rf node_modules/@fullcalendar/angular
cp -r ../../packages-contrib/angular/dist/fullcalendar node_modules/@fullcalendar/angular
