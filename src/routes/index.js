module.exports = (express) => {
  var router = express.Router();

  router.get('/status', (req, res) => {
    res.json({
      healthy: true,
    });
  });

  // API Routes
  router.use('/api/', require('./api/user')(express));

  return router;
}
