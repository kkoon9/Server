import express from 'express';
import sprint from './sprints.js';

const router = express.Router();

/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.get('/user/:id', (req, res) => {
  res.json(req.params.id);
});

router.use('/sprint', sprint);

export default router;
