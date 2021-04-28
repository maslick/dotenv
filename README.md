# =dotenv=
Example usage of dotenv

## Usage
```shell
$ git clone https://github.com/maslick/dotenv.git
$ cd dotenv
$ npm i

$ cp .env.template .env

$ npm run example1
HOST: localhost
USER: root
 PWD: test
 
$ npm run example2
HOST: my.1337.life
USER: root
 PWD: test
```

```shell
$ export APP_NAME=my-dotenv

$ heroku login
$ heroku create $APP_NAME
$ heroku git:remote --app $APP_NAME
$ git push heroku master

$ heroku config:set \
  DB_HOST="my.1337.life" \
  DB_USER="root" \
  DB_PASS="******" \
  --app $APP_NAME
$ heroku logs --tail
```