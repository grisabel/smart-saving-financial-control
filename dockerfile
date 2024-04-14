## BUILDER ##
FROM node:18.19.1-alpine3.19 as builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

## APP ##
# FROM nginx:stable-alpine as production-stage
# COPY --builder /app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
