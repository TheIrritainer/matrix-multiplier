FROM php:7.4-fpm-alpine
RUN apk update \
    && apk upgrade \
    && apk add curl \
       nano \
       autoconf \
       openssl-dev \
    && rm -rf /var/lib/apt/lists/* \
    ## CLEANUP
    && rm -rf /tmp/pear \
    && rm -rf /tmp/* /var/tmp/* \
    && apk del autoconf make g++ \
    && rm -rf /var/cache/apk/* \
    # FPM TWEAKS
    && sed -i "s/;process_control_timeout = 0/process_control_timeout = 10s/" /usr/local/etc/php-fpm.conf \
    && sed -i "s/;pid/pid/" /usr/local/etc/php-fpm.conf

RUN curl -sS https://getcomposer.org/installer | \
    php -- --install-dir=/usr/bin/ --filename=composer

WORKDIR /var/www/app

COPY composer.json ./
COPY composer.lock ./
RUN composer install --no-scripts --no-autoloader
COPY . ./
RUN composer dump-autoload --optimize && \
	composer run-script post-autoload-dump && \
	composer run-script post-root-package-install && \
	composer run-script post-create-project-cmd

CMD ["php-fpm"]
