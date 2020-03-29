#!/bin/bash
#sed -i '' "s/mount/$(pwd)/g"
WORKDIR=$(pwd)
sed -i "" -e "s|mount|${WORKDIR}|g" "browsers.json"
cat browsers.json