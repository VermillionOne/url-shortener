const db = require('./db');

// POST url entry
exports.create = (payload, err, success) => {
  db.url.create(payload).then(success).catch(err);
};

// GET all url entries
exports.findAll = (err, success) => {
  db.url.findAll().then(success).catch(err);
};

// GET Single url entry
exports.find = (payload, err, success) => {
  db.url.find({
    where: {
      id: payload.id,
    },
    // Find all relations in sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
};

// GET Single url using shortUrl
exports.findUrl = (payload, err, success) => {
  db.url.find({
    where: {
      shortUrl: payload.shortUrl,
    },
    // Find all relations in sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
};

// DESTROY Single url entry
exports.destroy = (payload, err, success) => {
  db.url.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
};

// UPDATE Single url entry
exports.update = (payload, err, success) => {
  db.url.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
};
