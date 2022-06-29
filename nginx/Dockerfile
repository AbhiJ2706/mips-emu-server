FROM nginx:alpine

WORKDIR /etc/nginx
COPY ./nginx.conf ./conf.d/default.conf
EXPOSE 3001
ENTRYPOINT [ "nginx" ]
CMD [ "-g", "daemon off;" ]