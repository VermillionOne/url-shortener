const db = require('./db');

exports.create = (payload, error, success) => {
  db.user.create(payload).then(success).catch(error);
}
