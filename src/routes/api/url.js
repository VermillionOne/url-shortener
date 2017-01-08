const url = require('../../models/url');
console.log(url);

module.exports = (express) => {
  const router = express.Router();
  // Create a new url database entry
  router.post('/urls', (req, res) => {
    const request = req;
    const response = res;
    url.create(request.body, (err) => {
      response.status(500).json(err);
    }, (data) => {
      // response.status(200).json(data);
      const urls = data;
      response.render('pages/urls', { urls });
    });
  });

  // Retrieve data for every URL in the database
  // Necessary update: to limit call to only URLs created by current user.
  router.get('/urls', (req, res) => {
    const response = res;
    url.findAll((err) => {
      response.status(500).json(err);
    }, (data) => {
      // response.status(200).json(data);
      const urls = data;
      response.render('pages/urls', { urls });
    });
  });

  // Read a single entry
  router.get('/urls/:id', (req, res) => {
    const request = req;
    const response = res;
    request.body.id = request.params.id;
    url.find(request.body, (err) => {
      response.status(500).json(err);
    }, (data) => {
      response.status(200).json(data);
    });
  });

  // Update a url database entry
  router.post('/urls/:id', (req, res) => {
    const request = req;
    const response = res;
    request.body.id = request.params.id;
    url.update(req.body, (err) => {
      response.status(500).json(err);
    }, (data) => {
      response.status(200).json(data);
    });
  });

  // Delete a single entry
  router.delete('/urls/:id', (req, res) => {
    const request = req;
    const response = res;
    request.body.id = request.params.id;
    url.destroy(req.body, (err) => {
      response.status(500).json(err);
    }, (data) => {
      response.status(200).json(data);
    });
  });

  return router;
};
