const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Story = require('../models/story');

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/slacker_news', { useNewUrlParser: true });

router.get('/', (req, res) => {
  Story.find({})
    .then(doc => {
      res.json(doc);
    })
    .catch(error => {
      res.json(error);
    });
});

router.get('/:id', (req, res) => {
  Story.findById(req.params.id)
    .then(doc => {
      res.json(doc);
    })
    .catch(error => {
      res.json(error);
    });
});

router.post('/', (req, res) => {
  Story
    .create({
      title: req.body.title,
      url: req.body.url,
      submitter: req.body.submitter,
      date_submitted: req.body.date_submitted,
      points: req.body.points,
      comments: req.body.comments
    })
    .then(doc => {
      res.json(doc);
    })
    .catch(error => {
     res.json(error);
    });
});

router.put('/:id', (req, res) => {
  Story
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(doc => {
      console.log('DOC', doc);
      res.json(doc);
    })
    .catch(error => {
      res.json(error);
    });
});

router.post('/:id/comments', async (req, res) => {
  const story = await Story.findById(req.params.id);
  const comment = {
    body: req.body.body,
    submitter: req.body.submitter,
    date_submitted: Date.now()
  };

  story.comments.push(comment);

  story.save()
    .then(doc => {
      res.json(doc);
    })
    .catch(error => {
      res.json(error);
    });
});

module.exports = router;
