# base image
FROM alpine:3.11

# install chrome for protractor tests
# RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
# RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
# RUN apt-get update && apt-get install -yq google-chrome-stable

# set working directory
WORKDIR /web

# add `/app/node_modules/.bin` to $PATH
ENV PATH /web/node_modules/.bin:$PATH

# install and cache app dependencies
# COPY package.json /web/package.json

COPY package.json package-lock*.json npm-shrinkwrap*.json /web/
RUN apk --no-cache add --virtual native-deps \
  git g++ gcc libgcc libstdc++ linux-headers make python && \
  apk add --update nodejs nodejs-npm && \
  npm install node-gyp -g &&\
  npm install &&\
  npm rebuild bcrypt --build-from-source && \
  npm cache clean --force &&\
  apk del native-deps

# RUN npm install
RUN npm install -g @angular/cli@7.3.9

# add app
COPY . /web

# start app
CMD ng serve --host 0.0.0.0
EXPOSE 4200