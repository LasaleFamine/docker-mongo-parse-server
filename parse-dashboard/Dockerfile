FROM node

USER node

ENV PORT 4040
ENV PARSE_HOME /home/node/parse-dashboard

RUN mkdir -p ${PARSE_HOME}
ADD ./package.json ${PARSE_HOME}
ADD ./config.json ${PARSE_HOME}

WORKDIR ${PARSE_HOME}

RUN npm install

EXPOSE ${PORT}

CMD [ "npm", "start" ]