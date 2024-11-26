# Use the official Node.js image with Alpine Linux as the base for the development stage
FROM node:alpine AS development

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json file into the working directory (for installing dependencies)
COPY package.json ./

# Copy the package-lock.json file to ensure consistent dependency installation
COPY package-lock.json ./

# Install all dependencies listed in package.json
RUN npm install

# Copy the rest of the application's source code into the working directory
COPY . .

# Build the application for production (e.g., transpiling TypeScript to JavaScript)
RUN npm run build

# Use the official Node.js image with Alpine Linux as the base for the production stage
FROM node:alpine AS production

# Define an argument for the Node.js environment; default to "production"
ARG NODE_ENV=production

# Set the environment variable `NODE_ENV` to the value of the argument
ENV NODE_ENV=${NODE_ENV}

# Set the working directory for the production container
WORKDIR /usr/src/app

# Copy the package.json file into the production working directory
COPY package.json ./

# Copy the package-lock.json file to ensure consistent dependency installation
COPY package-lock.json ./

# Install only production dependencies (excludes devDependencies)
RUN npm install --prod

# Copy the compiled application from the "development" stage to the production working directory
COPY --from=development /usr/src/app/dist ./dist

# Set the command to run the built application when the container starts
CMD ["node", "dist/apps/payments/main"]

# Command to build the Docker image from the Dockerfile ---------- to build docker file  and  ../../ to give it context of where we need to execute it from
#docker build ../../ -f Dockerfile -t micro_reservations
