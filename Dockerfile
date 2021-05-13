FROM silintl/php7-apache:7.4.16
LABEL maintainer="matt_henderson@sil.org"

RUN mkdir /app
COPY check-version.php /app/

WORKDIR /app
CMD ["php", "/app/check-version.php"]
