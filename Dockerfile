# Base Image
FROM node:18.8-alpine as base

# Set Working Directory
WORKDIR /home/node/app

# Copy package.json and yarn.lock files (or other lock files if any)
COPY package*.json yarn.lock* ./

# Install dependencies
RUN yarn install

# Copy all the local files to the container
COPY . .

# Build the application
RUN yarn build

# Clean cache and unused dependencies
RUN yarn cache clean && rm -rf /var/cache/apk/*

# Runtime Image
FROM node:18.8-alpine as runtime

# Set environment variables
ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

# Set Working Directory in the runtime image
WORKDIR /home/node/app

# Copy essential files from the builder stage
COPY --from=base /home/node/app/package*.json ./
COPY --from=base /home/node/app/yarn.lock ./
RUN yarn install --production --frozen-lockfile

# Clear yarn cache in the production image
RUN yarn cache clean

# Copy built files from the base image
COPY --from=base /home/node/app/dist ./dist
COPY --from=base /home/node/app/build ./build

# Set the correct permission for prerender cache
RUN mkdir .next && chown nextjs:nodejs .next

# Expose the port your app runs on
EXPOSE 3000

# Specify the default command to run your app
CMD ["node", "dist/server.js"]
