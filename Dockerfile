# Base Image - ubuntu latest
FROM node

# Copy Workdir contents
ADD Fitness_First /Fitness_First/
WORKDIR /Fitness_First/

# Create a Build
RUN npm install
RUN npm run frontend-install

# Runtime App
CMD npm run dev
CMD npm start
