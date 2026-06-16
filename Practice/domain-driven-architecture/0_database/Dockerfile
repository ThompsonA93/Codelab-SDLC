FROM postgres:16-alpine

COPY ./src/create_domain.sql /docker-entrypoint-initdb.d/init.sql

EXPOSE 54325