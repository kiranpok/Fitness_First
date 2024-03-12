FROM node:21.6.1

RUN npm install -g nodemon

# Create app directory
WORKDIR /app/backend

COPY backend .

RUN npm install

EXPOSE 5000

CMD ["node","server.js"]
