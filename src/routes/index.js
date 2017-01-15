const apiV1User = require('./api/user');
const apiV1Url = require('./api/url');
const apiV2User = require('./api/v2/user');
const apiV2Url = require('./api/v2/url');
const go = require('./go');

module.exports = (express) => {
  const router = express.Router();

  // to show index is operational
  router.get('/status', (req, res) => {
    res.json({
      healthy: true,
    });
  });

  // API Routes
  // Version 1 - Lacked version control in the path
  router.use('/api/', apiV1User(express));
  router.use('/api/', apiV1Url(express));
  // Version 2 - Version Control to path
  router.use('/api/v2/', apiV2User(express));
  router.use('/api/v2/', apiV2Url(express));

  // Route for getting the original url redirect.
  router.use('/go/', go(express));

  return router;
};
