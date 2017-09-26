# mongodb & [parse-server](http://parseplatform.org/)

> Work in progress, testing...

## Config(s)

Check the `docker-compose.yml` to change the `APP_ID` and the `MASTER_KEY` for the `parse-server`.
Then, make sure to connect the `parse-dashboard` checking the `parse-dashboard/config.json` and fix the configuration properly.

## First run

    $ git clone https://github.com/LasaleFamine/docker-mongo-parse-server mongo-parse-server
    $ cd mongo-parse-server
    $ docker-compose up # add -d for `demon` mode

## Build (if you make changes within the `parse-server` directory)

    $ docker-compose build

## License

MIT © LasaleFamine
