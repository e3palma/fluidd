FROM nginx:1.25.3-alpine3.18

ENV PORT=80

COPY /dist /usr/share/nginx/html
COPY /server/nginx /etc/nginx/templates
