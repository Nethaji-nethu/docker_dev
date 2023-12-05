FROM node:alpine as buildstep

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

CMD ["npm","run","build"]

FROM nginx:latest
COPY --from=buildstep /app/build/ /usr/share/nginx/html/
