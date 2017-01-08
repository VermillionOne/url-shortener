const user = require('../../models/user');

module.exports = (express) => {
  var router = express.Router();

  router.get('/users', (req, res) => {
    res.json({
      healthy: true,
    });
  });

  return router;
}
