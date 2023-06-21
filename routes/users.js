var express = require('express');
var router = express.Router();

const middleware = (req, res, next) => {
  const pathParams = req.params;
  console.log(pathParams);

  const jwtToken = 'chcvhje';

  const userInfo = { name: 'nisha' };

  req.userInfo = userInfo;

  if (pathParams.userId === '2577') {
    return next();
  }

  return res.json({ data: null, error: 'Invalid user' });
};

const finalFn = (req, res, next) => {
  const pathParams = req.params;
  console.log(pathParams);

  const userInfo = req.userInfo;

  console.log(userInfo);

  return res.json({ data: 'hello user', error: null });
};

/* GET users listing. */
router.get('/:userId', middleware, finalFn);

module.exports = router;
