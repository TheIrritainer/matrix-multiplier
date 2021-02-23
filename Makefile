help:
	@echo "\nAvailable commands:\n \
     - install: Install containers\n \
	 - up: Start containers\n \
	 - down: Stop containers\n \
	 - rebuild: Rebuild containers\n \
	 - reload: Reload containers\n \
	 - test: Run unit tests"

install:
	docker-compose build
	make up

up:
	docker-compose up -d

down:
	docker-compose down

reload:
	docker-compose restart

build:
	docker-compose build

rebuild:
	docker-compose up -d --force-recreate

test:
	docker-compose exec laravel-app ./vendor/bin/phpunit
