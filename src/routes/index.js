module.exports = (express) => {
  const router = express.Router();

  router.get('/status', (req, res) => {
    res.json({
      healthy: true,
    });
  });

  // API Routes
  router.use('/api/', require('./api/user')(express));
  router.use('/api/', require('./api/url')(express));
  // Route for getting the original url redirect.
  router.use('/go/', require('./go')(express));

  return router;
}
