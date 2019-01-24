#!/usr/bin/env bash

npm unpublish --registry http://localhost:4873 --tag beta --force \
  @fullcalendar/core
