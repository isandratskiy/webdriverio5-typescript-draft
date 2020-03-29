start:
	\
	docker pull selenoid/vnc:chrome_80.0 && \
	docker-compose up -d --force-recreate
stop:
	\
	docker-compose down --rmi all && \
	docker rmi selenoid/vnc:chrome_80.0
workdir:
	\
	sed -i "" -e "s|mount|$(pwd)|g" "browsers.json" && \
    cat browsers.json