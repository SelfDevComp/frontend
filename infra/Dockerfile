# -- BUILD STAGE --
FROM node:24-alpine3.22 AS builder

WORKDIR /app

COPY ./package.json ./package-lock.json* ./

RUN --mount=type=cache,target=/root/.npm npm ci

COPY . . 

RUN npm run build

# -- RUN STAGE --
FROM nginx:1.28.0-alpine3.21 AS runner

COPY ./infra/nginx.conf /etc/nginx/nginx.conf

COPY --chown=nginx:nginx --from=builder /app/dist /usr/share/nginx/html

COPY ./public/config.template.js /usr/share/nginx/html/config.template.js

EXPOSE 80

ENTRYPOINT ["/bin/sh", "-c"]

CMD [
"envsubst < /usr/share/nginx/html/config.template.js > /usr/share/nginx/html/config.js && nginx -g 'daemon off;'"
]