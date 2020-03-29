#!/bin/bash
sed -i "" "s|mount|$(pwd)|g" "browsers.json"
cat browsers.json