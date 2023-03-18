const express = require('express');
const router = express.Router();
const homeworkController = require('../controllers/homework');

router.get('/', homeworkController.getHomeworks);
router.get('/:id', homeworkController.getHomeworkById);
router.post('/', homeworkController.createHomework);
router.put('/:id', homeworkController.updateHomework);
router.delete('/:id', homeworkController.deleteHomework);

module.exports = router;
