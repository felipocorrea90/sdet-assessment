FROM node:12.16.3

# Create app directory
WORKDIR /usr/src/app

# Install some libraries/tools
RUN apt-get update && apt-get install -y libnss3

# Install Chrome browser
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN dpkg -i google-chrome-stable_current_amd64.deb; apt-get -fy install

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
RUN npm i --save-dev @wdio/cli

# Bundle app source
COPY . .
CMD [ "npx", "wdio", "wdio.conf2.js"]

