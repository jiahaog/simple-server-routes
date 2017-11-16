const { Router } = require('express');
const router = Router();

const echoUrl = ({ originalUrl }, res) => res.send(originalUrl);

router.get('/', echoUrl);
router.get('/about', echoUrl);

module.exports = router;
