# Use an official Node.js runtime as the base image
FROM node:20.4.0-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Build the Next.js application for production
RUN npm run build

# Expose the port that the Next.js application will run on
EXPOSE 3001

# Start the Next.js application when the container starts
CMD ["npm", "start", "--", "-p", "3001"]