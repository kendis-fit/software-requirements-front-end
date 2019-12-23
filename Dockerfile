FROM node as build
WORKDIR /app
ARG REACT_APP_URL_API=https://localhost:5001

COPY package*.json ./
RUN npm install

COPY . .
RUN REACT_APP_URL_API=${REACT_APP_URL_API} npm run build

FROM node
WORKDIR /app

COPY --from=build /app/build /app
RUN npm install -g serve

COPY --from=build /app/start.sh /app

CMD ["sh", "start.sh"]