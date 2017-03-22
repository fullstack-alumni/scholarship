import db from '../../database';
const Scholar = db.model('scholar');

export function getAll(req, res, next) {
  Scholar.findAll()
    .then(scholars => res.json({
      status: 'success',
      data: scholars,
      message: 'Retrieved ALL scholars'
    }))
    .catch(next);
}

export function getOne(req, res, next) {
  Scholar.findById(req.params.id)
    .then(scholar => res.json({
      status: 'success',
      data: scholar,
      message: 'Retrieved ONE scholar'
    }))
    .catch(next);
}

export function create(req, res, next) {
  Scholar.create(req.body)
    .then(() => res.json({
      status: 'success',
      message: 'Inserted one scholar'
    }))
    .catch(next);
}

export function update(req, res, next) {
  Scholar.update(req.body, {
    where: {id: req.params.id}
  })
    .then(() => res.json({
      status: 'success',
      message: 'Updated scholar'
    }))
    .catch(next);
}

export function remove(req, res, next) {
  Scholar.destroy({
    where: { id: req.params.id }
  })
    .then(() => res.json({
      status: 'success',
      message: 'Removed 1 scholar'
    }))
    .catch(next);
}
