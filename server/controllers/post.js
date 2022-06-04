const { validationResult } = require('express-validator');
const axios = require('axios');

const Post = require('../models/post');

exports.createPost = async (req, res, next) => {
  const errors = validationResult(req);

  try {
    if (!errors.isEmpty()) {
      const error = createError(
        'Validation failed',
        422,
        errors.array({ onlyFirstError: true })
      );
      throw error;
    }

    const { body } = req.body;
    const post = await Post.create({ body });

    const data = await axios.post(
      'https://app.ayrshare.com/api/post',
      JSON.stringify({
        post: body,
        platforms: ['twitter'],
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
      }
    );

    res.status(201).json({ message: 'Post posted successfully', data: post });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
