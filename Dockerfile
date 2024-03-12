FROM node:21.6.1

RUN npm install -g nodemon

# Create app directory
WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4000

CMD ["npm","run","dev"]
