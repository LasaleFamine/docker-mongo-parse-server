FROM node

USER node

ENV PORT 1337
# ENV APP_ID someappid
# ENV MASTER_KEY somemasterkey
# ENV DATABASE_URI mongodb://mongo/test

ENV PARSE_HOME /home/node/parse-server

RUN mkdir -p ${PARSE_HOME}
ADD ./package.json ${PARSE_HOME}
ADD ./index.js ${PARSE_HOME}

WORKDIR ${PARSE_HOME}

RUN npm install

EXPOSE ${PORT}

CMD [ "npm", "start" ]