#!/bin/bash
sed -i "" -e "s|mount|$(pwd)|g" "browsers.json"
cat browsers.json