#!/bin/sh
set -e
if [ "$1" = 'nginx' ]; then
  envsubst "$(cat /etc/nginx/nginx.conf.template | sed -n 's/.*${\([A-Z_]*\)}.*/$\1/p')" < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf
fi
exec "$@"
