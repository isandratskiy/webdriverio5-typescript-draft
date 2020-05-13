start:
	\
	docker pull selenoid/vnc:chrome_81.0 && \
	docker-compose up -d --force-recreate
stop:
	\
	docker-compose down --rmi all && \
	docker rmi selenoid/vnc:chrome_81.0
workdir:
	\
	./replace_mount_pwd.sh