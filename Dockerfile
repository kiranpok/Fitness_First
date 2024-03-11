

# Use an official Node.js runtime as a parent image
FROM Node:21.6.1

#
RUN npm install -g nodemon

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./


# Copy the entire project into the container
COPY . .
# Install backend dependencies
RUN npm install

# Expose port if necessary
EXPOSE 3000

# Runtime command
CMD ["npm", "run", "start"]

