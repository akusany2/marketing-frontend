# base image
FROM node:12.2.0

# install chrome for protractor tests
# RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
# RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
# RUN apt-get update && apt-get install -yq google-chrome-stable

# set working directory
WORKDIR /web

# add `/app/node_modules/.bin` to $PATH
ENV PATH /web/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /web/package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.9

# add app
COPY . /web

# start app
CMD node --max_old_space_size=8048 ./node_modules/@angular/cli/bin/ng serve --host 0.0.0.0
EXPOSE 4200