# Use the official Node.js image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application files
COPY . .

# Exclude YAML linting or disable ESLint entirely
ENV NEXT_DISABLE_ESLINT=true

# Set build arguments
ARG BUILD_NUMBER
ENV BUILD_NUMBER=$BUILD_NUMBER

# Build the Next.js application
RUN npm run build

# Expose the application port
EXPOSE 3001

# Start the application
CMD ["npm", "start"]
