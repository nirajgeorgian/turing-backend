# Express Ecommerce Web Api

This repository demonstrates the example of ecommerce web api including payment solution using [Express](https://expressjs.com) as web framework, [Mysql](http://mysql.com) and [Sequelize SQL ORM](https://sequelizejs.com/) and [Jest](http://jestjs.io) for testing.

## Starting App

```
connect to mysql database with user: root and password: dodo or change it inside
db/config/config.json
```

**Without Migrations**

```
npm install
npm start
```

**With Migrations**

```
npm install
npm run db:create
npm run db:migrate
npm start
```

This will start the application and create an mysql database in your system.
Just open [http://localhost:8080](http://localhost:8080).

## Running Tests

We have added some [Jest](http://jestjs.io) based test. You can run them by `npm test`


## APi caching
The app uses `memory-cache`[memory-cache](https://www.npmjs.com/package/memory-cache) as of now to cache api response
In production it will use `redis`[redis](https://redis.io/)

And finally you have to adjust the `db/config/config.js` to fit your environment.
Once thats done, your database configuration is ready!
