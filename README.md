# culture.shift()

## Set up Vagrant

Instructions on how to do this can be found in [`/build/vagrant-setup-and-usage-instructions.md`]()

## Getting Started

On your host machine (all other commands in this README is within VM (`vagrant ssh`)):
```
$ npm install
```

Inside VM (`vagrant ssh`):
```
$ npm start
```

Navigate to localhost:3000. Webpack compilation operates on the same process as the API server.

## Seeding Database

Inside VM (`vagrant ssh`):
```
$ npm run seed
```

## Testing

Tests use [Mocha](http://mochajs.org/) and [Chai.js](http://chaijs.com/). New tests should be included in the `test` directory.

To execute the test suite, run `npm test`.