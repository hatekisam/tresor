# Use the official Node.js 18 Alpine image as the base image
FROM node:18-alpine

# Create an app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND yarn.lock are copied
# where available (Yarn)
COPY ["package.json", "yarn.lock", "./"]

# Install dependencies using Yarn
RUN yarn install

# If you are building your code for production
# RUN yarn install --production=true

# Bundle app source
COPY . .

# Build the application (if needed)
# Replace with your actual build command
# In Next.js, the build output is typically in the .next folder
RUN yarn build

# Expose the port your application will listen on
EXPOSE 3000

# Define the command to run your application
CMD [ "yarn", "start" ]
