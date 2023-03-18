const Homework = require('../models/homework');

const getHomeworks = async (req, res) => {
  try {
    const homeworks = await Homework.find();
    res.status(200).json(homeworks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getHomeworkById = async (req, res) => {
  const { id } = req.params;
  try {
    const homework = await Homework.findById(id);
    if (homework) {
      res.status(200).json(homework);
    } else {
      res.status(404).json({ message: 'Homework not found' });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createHomework = async (req, res) => {
  const homework = req.body;
  const newHomework = new Homework(homework);
  try {
    await newHomework.save();
    res.status(201).json(newHomework);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updateHomework = async (req, res) => {
  const { id } = req.params;
  const updatedHomework = req.body;
  try {
    const existingHomework = await Homework.findById(id);
    if (!existingHomework) {
      return res.status(404).json({ message: 'Homework not found' });
    }
    await Homework.findByIdAndUpdate(id, updatedHomework, { new: true });
    res.json(updatedHomework);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const deleteHomework = async (req, res) => {
  const { id } = req.params;
  try {
    const existingHomework = await Homework.findById(id);
    if (!existingHomework) {
      return res.status(404).json({ message: 'Homework not found' });
    }
    await Homework.findByIdAndRemove(id);
    res.json({ message: 'Homework deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getHomeworks,
  getHomeworkById,
  createHomework,
  updateHomework,
  deleteHomework,
};
