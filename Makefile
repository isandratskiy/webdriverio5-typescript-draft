start:
	\
	docker pull selenoid/vnc:chrome_80.0 && \
	docker pull selenoid/vnc:firefox_74.0 && \
	docker-compose up -d --force-recreate
stop:
	\
	docker-compose down --rmi all && \
	docker rmi selenoid/vnc:chrome_80.0 && \
	docker rmi selenoid/vnc:firefox_74.0
workdir:
	\
	./replace_mount_pwd.sh
test:
	\
	npm cit