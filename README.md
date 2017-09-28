# mongodb & [parse-server](http://parseplatform.org/) & [parse-dashboard](https://github.com/parse-community/parse-dashboard)

> Work in progress, testing...

## Config(s)

Check the `docker-compose.yml` to change the `APP_ID` and the `MASTER_KEY` for the `parse-server`.
Then, make sure to connect the `parse-dashboard` checking the `parse-dashboard/config.json` and fix the configuration properly.

## APNS and GCM for Push Notifications
You may want to send Push Notifications with the Parse server, you must configure GCM and APNS.
> NOTE: don't forget to add the ***.p12*** certificate to your `parse-server` container, needed for Apple Push Notifications. You can modify the `parse-server/Dockerfile`:
```
...

ADD ./path-to-certificate.p12 ${PARSE_HOME}
...
```


## First run

    $ git clone https://github.com/LasaleFamine/docker-mongo-parse-server mongo-parse-server
    $ cd mongo-parse-server
    $ docker-compose up # add -d for `demon` mode

## Build (if you make changes within the `parse-server` directory)

    $ docker-compose build

## License

MIT © LasaleFamine
