import * as promise from 'bluebird';
let pgp = require('pg-promise')({ promiseLib: promise });

let connectionString = 'postgres://localhost:5432/scholarship';
let db = pgp(connectionString);

export function getAll(req, res, next) {
  db.any('select * from scholars')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL scholars'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

export function getOne(req, res, next) {
  console.log("getting one");
  let scholarId = parseInt(req.params.id);
  db.one('select * from scholars where id = $1', scholarId)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE scholar'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

export function create(req, res, next) {
  req.body.rank = parseInt(req.body.rank);
  console.log(req.body);
  db.none('insert into scholars(name, email, rank)' +
      'values(${name}, ${email}, ${rank})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one scholar'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

export function update(req, res, next) {
  console.log("update")
  console.log(req.body, req.params.id);
  db.none('update scholars set name=$1, email=$2, rank=$3 where id=$4',
    [req.body.name, req.body.email, parseInt(req.body.rank),
      parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated scholar'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

export function remove(req, res, next) {
  let ScholarID = parseInt(req.params.id);
  db.result('delete from scholars where id = $1', ScholarID)
    .then(function (result) {
      res.status(200)
        .json({
          status: 'success',
          message: 'Removed 1 scholar'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}
