const Roles = require('./roles.scheme')

exports.findAll = (req, res, next) => {
    const q = req.query;
    const where  = {}
    if(q.name) where['name'] = q.name;
    if(q.name_long) where['name_long'] = q.name_long;
    
    Roles.find(where)
    .limit(req.query.limit || 0)
    .skip(req.query.skip || 0)
    .then(roles => {
       res.json(roles);
    })
    .catch(err => next(err));
   }
   

   exports.findById = (req, res, next) => {
    const id = req.params.id
    Roles.findById(id)
    .then(roles => {
       res.json(roles);
    })
    .catch(err => next(err));
   }
   
   
   exports.insert = (req, res, next) => {
    const data = req.body;
    Roles.create(data)
    .then(roles => {
       res.json({
         message: `New role added!`,
         data: roles
       });
    })
    .catch(err => next(err))
   }
   

   exports.updateById = (req, res, next) => {
    const id = req.params.id
    const data = req.body
    Roles.findByIdAndUpdate(id, data)
    .then(roles => {
       res.json({
         message: `Role ${id} updated!`,
         data: roles
       });
    })
    .catch(err => next(err))
   }
   
   exports.removeById = (req, res, next) => {
    const id = req.params.id
    Roles.findByIdAndRemove(id)
    .then(roles => {
       res.json({
         message: `Role ${id} removed!`,
         data: roles
       });
    })
    .catch(err => next(err))
   }
   
   exports.remove = (req, res, next) => {
    Roles.remove()
    .then(roles => {
       res.json({
         message: 'All roles removed!',
         data: roles
       });
    })
    .catch(err => next(err))
   }