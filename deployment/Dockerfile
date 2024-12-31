# Use Node.js 20 official image as a base
FROM node:20 AS base

# Set working directory
WORKDIR /app

# Install dependencies
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the application
FROM deps AS build
COPY . .
RUN npm run build

# Expose port 3001
EXPOSE 3001

# Run the Next.js app on port 3001 in production mode
FROM base AS prod
COPY --from=build /app ./
CMD ["npm", "start"]
    