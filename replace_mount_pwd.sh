#!/bin/bash
find . -name "browsers.json" -exec sed -i "" "s|mount|$(pwd)|g" {} \;