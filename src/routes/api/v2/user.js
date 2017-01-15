const user = require('../../../models/user');
const utility = require('../../../../lib/utility');

module.exports = (express) => {
  const router = express.Router();

  // to show /api/v2/users is operational
  router.get('/users/status', (req, res) => {
    res.json({
      healthy: true,
    });
  });

  // Create a new user database entry
  router.post('/users', (req, res) => {
    const request = req;
    const response = res;
    user.create(request.body, (err) => {
      response.status(500).json(err);
      utility.debug('Attempt to create a new single User  =>', err, 'ERROR');
    }, (data) => {
      response.status(200).json(data);
      utility.debug('Single User Created =>', data, 'SUCCESS');
    });
  });

  // Retrieve data for every User in the database
  // Necessary update: to limit call to only Users created by current user.
  router.get('/users', (req, res) => {
    const response = res;
    user.findAll((err) => {
      response.status(500).json(err);
      utility.debug('Attempt to access all Users  =>', err, 'ERROR');
    }, (data) => {
      response.status(200).json(data);
      utility.debug('All users accessed =>', data, 'SUCCESS');
    });
  });

  // Read a single entry
  router.get('/users/:id', (req, res) => {
    const request = req;
    const response = res;
    request.body.id = request.params.id;
    user.find(request.body, (err) => {
      response.status(500).json(err);
      utility.debug('Attempt to access a single user  =>', err, 'ERROR');
    }, (data) => {
      response.status(200).json(data);
      utility.debug('Single user accessed =>', data, 'SUCCESS');
    });
  });

  // Update a user database entry
  router.post('/users/:id', (req, res) => {
    const request = req;
    const response = res;
    request.body.id = request.params.id;
    user.update(req.body, (err) => {
      response.status(500).json(err);
      utility.debug('Attempt to update a single User  =>', err, 'ERROR');
    }, (data) => {
      response.status(200).json(data);
      utility.debug('Single user Updated =>', data, 'SUCCESS');
    });
  });

  // Delete a single entry
  router.delete('/users/:id', (req, res) => {
    const request = req;
    const response = res;
    request.body.id = request.params.id;
    user.destroy(req.body, (err) => {
      response.status(500).json(err);
      utility.debug('Attempt to delete a single User  =>', err, 'ERROR');
    }, (data) => {
      response.status(200).json(data);
      utility.debug('Single user deleted =>', data, 'SUCCESS');
    });
  });

  return router;
};
