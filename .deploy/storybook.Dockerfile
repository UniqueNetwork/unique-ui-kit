FROM node:lts as build

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build-storybook


FROM nginx:alpine

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY ./.deploy/nginx.conf /etc/nginx/nginx.conf.template
COPY --from=build /app/storybook-static /usr/share/nginx/html
COPY ./.deploy/docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Envs
ENV DNS_RESOLVER=127.0.0.1
ENV PORT=80
ARG TAG=''
ENV TAG=${TAG}
EXPOSE ${PORT}
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["nginx"]

