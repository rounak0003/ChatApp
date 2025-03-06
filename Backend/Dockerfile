# Use the official Node.js image.
FROM node:19.7.0

# Create and change to the app directory.
WORKDIR /usr/src/app

# Install app dependencies.
COPY package*.json yarn.lock ./
RUN yarn install --production

# Copy app files.
COPY . . 

ENV NODE_ENV=production

# Generate Prisma client
RUN npx prisma generate

# Expose the port the app runs on.
EXPOSE 3000

# Run the application.
CMD ["yarn", "start"]
