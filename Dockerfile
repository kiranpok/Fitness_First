# Use a specific version of the Node.js image
FROM node

# Set the working directory
WORKDIR /

# Copy package.json and package-lock.json for backend
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy frontend directory for installing frontend dependencies
COPY frontend ./frontend/

# Install frontend dependencies
RUN npm install --prefix frontend

# Copy the rest of the source code
COPY . .

# Expose port (if necessary)
EXPOSE 3000

# Command to start the application
CMD ["npm", "run", "dev"]
