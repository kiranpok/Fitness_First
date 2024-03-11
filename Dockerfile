FROM node

# Use an official Node.js runtime as a parent image
FROM node

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy the entire project into the container
COPY . .

# Expose port if necessary
EXPOSE 3000

# Runtime command
CMD ["npm", "run", "dev"]

