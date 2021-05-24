FROM silintl/php7-apache:7.4.19 as phpversion
RUN php -r "echo phpversion();" > /tmp/phpversion.txt

LABEL maintainer="matt_henderson@sil.org"

FROM public.ecr.aws/lambda/nodejs:12
COPY --from=phpversion /tmp/phpversion.txt ${LAMBDA_TASK_ROOT}

COPY temp.json ${LAMBDA_TASK_ROOT}

COPY package.json ${LAMBDA_TASK_ROOT}
COPY package-lock.json ${LAMBDA_TASK_ROOT}
RUN npm ci

COPY app.js ${LAMBDA_TASK_ROOT}

CMD [ "app.handler" ]
