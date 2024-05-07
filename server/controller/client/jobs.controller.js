const database = require("../../model/database.model");
module.exports.jobs = async (req, res) => {
  const search = req.query.keySearch;
  const city = req.query.city;
  if (search || city) {
    const key = new RegExp(`${search}`,"i")
    const jobDB = await database.jobs.find({
      tags: { $in: [key] },
      city: { $in: [city] },
    });
    res.json(jobDB);
  } else {
    const jobDB = await database.jobs.find();
    res.json(jobDB);
  }
};
