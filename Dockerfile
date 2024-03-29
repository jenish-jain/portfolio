FROM node:14-alpine3.14 as build-step

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
RUN npm run build
CMD [ "npm", "run", "start" ]

# steps to run
# DOCKER_BUILDKIT=1 docker build --tag portfolio .

# docker run -d -p 3000:3000 portfolio
# docker pull jenisharchive/asgard:portfolio