const url = require('../../../models/url');
const shortURL = require('../../../factories/shortURL');
const utility = require('../../../../lib/utility');

module.exports = (express) => {
  const router = express.Router();

  // to show /api/v2/urls is operational
  router.get('/urls/status', (req, res) => {
    res.json({
      healthy: true,
    });
  });

  // Create a new url database entry
  router.post('/urls', (req, res) => {
    const request = req;
    const response = res;

    request.body.shortUrl = shortURL.generate();

    url.create(request.body, (err) => {
      response.status(500).json(err);
      utility.debug('Attempt to create a new single User  =>', err, 'ERROR');
    }, (data) => {
      response.status(200).json(data);
      const urls = data;
      response.render('pages/urls', { urls });
      utility.debug('Single URL Created =>', data, 'SUCCESS');
    });
  });

  // Retrieve data for every URL in the database
  // Necessary update: to limit call to only URLs created by current URL.
  router.get('/urls', (req, res) => {
    const response = res;
    url.findAll((err) => {
      response.status(500).json(err);
      utility.debug('Attempt to access all Users  =>', err, 'ERROR');
    }, (data) => {
      response.status(200).json(data);
      const urls = data;
      response.render('pages/urls', { urls });
      utility.debug('Every URL Accessed =>', data, 'SUCCESS');
    });
  });

  // Read a single entry
  router.get('/urls/:id', (req, res) => {
    const request = req;
    const response = res;
    request.body.id = request.params.id;
    url.find(request.body, (err) => {
      response.status(500).json(err);
      utility.debug('Attempt to access a single user  =>', err, 'ERROR');
    }, (data) => {
      response.status(200).json(data);
      utility.debug('Single URL Accessed =>', data, 'SUCCESS');
    });
  });

  // Update a url database entry
  router.post('/urls/:id', (req, res) => {
    const request = req;
    const response = res;
    request.body.id = request.params.id;
    url.update(req.body, (err) => {
      response.status(500).json(err);
      utility.debug('Attempt to update a single User  =>', err, 'ERROR');
    }, (data) => {
      response.status(200).json(data);
      utility.debug('Single URL updated =>', data, 'SUCCESS');
    });
  });

  // Delete a single entry
  router.delete('/urls/:id', (req, res) => {
    const request = req;
    const response = res;
    request.body.id = request.params.id;
    url.destroy(req.body, (err) => {
      response.status(500).json(err);
      utility.debug('Attempt to delete a single User  =>', err, 'ERROR');
    }, (data) => {
      response.status(200).json(data);
      utility.debug('Single URL deleted =>', data, 'SUCCESS');
    });
  });

  return router;
};
