const url = require('../models/url');

module.exports = (express) => {
  const router = express.Router();

  // to show /go is operational
  router.get('/status', (req, res) => {
    res.json({
      healthy: true,
    });
  });

  // Read a single short URL and get an original URL in response
  router.get('/:shortUrl', (req, res) => {
    const request = req;
    const response = res;
    // The request is querying the url model from above, using the shortUrl as the key value.
    request.body.shortUrl = request.params.shortUrl;
    url.findUrl(request.body, (err) => {
      response.status(500).json(err);
    }, (data) => {
      // Recieve back the response, and redirect to the original URL saved in the db
      response.redirect(data.originalUrl);

    });
  });

  return router;
}
