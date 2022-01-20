FROM node:14.17.3-buster as build

WORKDIR /code

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci --production

COPY . .

RUN npm run build

# NGINX WEB SERVER
FROM nginx:1.12-alpine as prod

COPY --from=build /code/build /usr/share/nginx/html/react-playground

EXPOSE 80

CMD ["nginx","-g","daemon off;"]