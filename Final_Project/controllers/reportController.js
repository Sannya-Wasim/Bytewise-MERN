const Report = require("../models/Report");

const reportController = require("express").Router();

reportController.post("/", async (req, res) => {
  try {
    const { name, email, location, petName, description, date } = req.body;
    if (!name || !email || !location || !petName || !date || !description) {
      return res.json({ msg: "Missing required fields!" });
    }

    const report = new Report({ name, email, location, petName, description, date });
    const savedReport = await report.save();
    res.status(201).json(savedReport);
  } catch (error) {
    throw new Error();
    res.status(500).json({ message: "Failed to create order" });
  }
});

reportController.get('/reports', async(req, res)=>{
  try {
    const reports = await Report.find({});
    res.json(reports)

  } catch (error) {
    throw new Error
  }
})

module.exports = reportController;
