# culture.shift()

## To Vagrant or not to Vagrant?

If you'd like to use Vagrant to work on this project, instructions on how to do this can be found in [`/build/vagrant-setup-and-usage-instructions.md`](). This is an optional workflow and should only be used if 1) your machine can handle a VM and 2) you are willing to learn how to use Vagrant if you don't already know.

If not using vagrant, make sure you are using `node>=7.0` and have Postgres installed on your machine. Vagrant environment uses `9.3` but versions `9.x` should work fine.

The instructions below are the same if using vagrant or not. If using Vagrant, *all commands except `npm install`* will be done through SSH using `vagrant ssh`.

## Getting Started

```
$ npm install
```

```
$ npm start
```

Navigate to http://localhost:3000. Webpack compilation operates on the same process as the API server (using webpack development middleware).

## Initializing and Seeding Database

If not using Vagrant, initialize database:
 
```
createdb scholarship
```

Create tables and example development data:
```
$ npm run seed
```

## Testing

Tests use [Mocha](http://mochajs.org/) and [Chai.js](http://chaijs.com/). New tests should be included in the `test` directory.

To execute the test suite, run `npm test`.