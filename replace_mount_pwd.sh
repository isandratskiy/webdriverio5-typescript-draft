#!/bin/bash
#sed -i '' "s/mount/$(pwd)/g"
WORKDIR=$(pwd)
CONFIG="./browsers.json"
find "${CONFIG}" -type f -exec sed -i "" "s|mount|${WORKDIR}|g" {} \;
cat browsers.json