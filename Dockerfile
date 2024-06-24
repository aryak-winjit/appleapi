FROM node:18.20.2-buster-slim

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 6003
CMD [ "node", "app.js" ]






# FROM node:18.20.2-buster-slim as builder
# ENV WORKING_DIR=/usr/src/app

# WORKDIR ${WORKING_DIR}

# RUN chown node:node ${WORKING_DIR}

# COPY --chown=node:node .npmrc .
# COPY --chown=node:node package* ./

# USER node

# COPY . ./

# RUN npm ci --production

# FROM builder as executer

# ENV WORKING_DIR=/usr/src/app

# WORKDIR ${WORKING_DIR}
# COPY --from=builder ${WORKING_DIR} ${WORKING_DIR}

# COPY --chown=node:node app ./app

# USER node

# EXPOSE 6003

# CMD [ "node", "app.js" ]
