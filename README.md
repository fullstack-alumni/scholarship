# Getting Started

Ensure `PG_PATH` in the `Makefile` is correct. If you're unsure about this, install the [Postgres App](http://postgresapp.com/).

Run the following.

```
$ make new
```

You're now ready to get started.

```
$ npm start
```

Navigate to localhost:3000

# Rebuilding

Sometimes you'll need to rebuild (i.e. new npm dependencies, database changes, etc). To do this, run `$ make rebuild`. This will resolve any new npm dependencies and rebuild the database while attempting to preserve the local data (if compatible with the schema). You may need to disconnect from the postgres server for this to run correctly.

# Tables

New tables should be specified in a `.sql` file in the `database` directory. They should also be added to the `TABLES` variable in the `Makefile`.