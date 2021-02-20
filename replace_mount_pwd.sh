#!/bin/bash
sed -i "" -e "s|mount|$(pwd)|g" "browsers.json"
sed -i "" -e "s|browser.version|${BROWSER_VERSION}|g" "browsers.json"
cat browsers.json
