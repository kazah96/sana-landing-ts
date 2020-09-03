FROM nginx

COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080
EXPOSE 80
WORKDIR /app

CMD ["nginx", "-g", "daemon off;"]