FROM node:21.6.1

RUN npm install -g nodemon

# Create app directory
WORKDIR /app

COPY backend ./backend
COPY frontend ./frontend

RUN cd backend && npm install
RUN cd frontend && npm install

EXPOSE 3001 6000

# Start both backend and frontend servers
CMD ["npm", "run", "dev", "&", "npm", "start"]


