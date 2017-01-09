const user = require('../../models/user');

module.exports = (express) => {
  const router = express.Router();
  // Create a new user database entry
  router.post('/users', (req, res) => {
    const request = req;
    const response = res;
    user.create(request.body, (err) => {
      response.status(500).json(err);
    }, (data) => {
      // response.status(200).json(data);
      const users = data;
      response.render('pages/users', { users });
    });
  });

  // Retrieve data for every User in the database
  // Necessary update: to limit call to only Users created by current user.
  router.get('/users', (req, res) => {
    const response = res;
    user.findAll((err) => {
      response.status(500).json(err);
    }, (data) => {
      // response.status(200).json(data);
      const users = data;
      response.render('pages/users', { users });
    });
  });

  // Read a single entry
  router.get('/users/:id', (req, res) => {
    const request = req;
    const response = res;
    request.body.id = request.params.id;
    user.find(request.body, (err) => {
      response.status(500).json(err);
    }, (data) => {
      response.status(200).json(data);
    });
  });

  // Update a user database entry
  router.post('/users/:id', (req, res) => {
    const request = req;
    const response = res;
    request.body.id = request.params.id;
    user.update(req.body, (err) => {
      response.status(500).json(err);
    }, (data) => {
      response.status(200).json(data);
    });
  });

  // Delete a single entry
  router.delete('/users/:id', (req, res) => {
    const request = req;
    const response = res;
    request.body.id = request.params.id;
    user.destroy(req.body, (err) => {
      response.status(500).json(err);
    }, (data) => {
      response.status(200).json(data);
    });
  });

  return router;
};
