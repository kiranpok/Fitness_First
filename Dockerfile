FROM node

# Copy Workdir contents
ADD Fitness-First-Pro /Fitness-First-Pro/
WORKDIR /Fitness-First-Pro/

# Create a build
RUN npm install
RUN npm frontend-install

# Runtime App
CMD npm run dev