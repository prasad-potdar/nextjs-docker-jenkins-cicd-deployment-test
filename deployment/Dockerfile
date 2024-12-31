# Use the official Node.js image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Set the build arguments
ARG BUILD_NUMBER
ENV BUILD_NUMBER=$BUILD_NUMBER

# Ensure necessary files exist before build
RUN NEXT_DISABLE_ESLINT=true npm run build

# Expose the application port
EXPOSE 3001

# Command to run the application
CMD ["npm", "start"]
