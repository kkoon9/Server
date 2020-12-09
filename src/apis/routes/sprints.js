import express from 'express';
import SprintService from '../../services/sprint.js';
import asyncHandler from '../../modules/async.js';

const router = express.Router();

/**
 * @api {get} /sprint/:id Request Sprint of user information
 * @apiName GetSprint
 * @apiGroup Sprint
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} sprintId 스프린트 ObjectId.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.get('/:id',
  // validators.getSprint, // this middleware take care of validation
  asyncHandler(async (req, res) => {
    // The actual responsability of the route layer.
    const sprintDTO = req.params;

    // Call to service layer.
    // Abstraction on how to access the data layer and the business logic.
    const { success, message, data } = await SprintService.HomeView(sprintDTO);

    // Return a response to client.
    return res.json({ success, message, data });
  })
);

/**
 * @api {post} /sprint/ Request Sprint of user information
 * @apiName PostSprint
 * @apiGroup Sprint
 *
 *
 * @apiSuccess {String} sprintId 스프린트 ObjectId.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/',
  // validators.getSprint, // this middleware take care of validation
  asyncHandler(async (req, res) => {
    // The actual responsability of the route layer.
    const sprintDTO = req.body;
    sprintDTO.goal = await sprintDTO.goals.map((g) => {
      return {title: g, percentage:0, socre:[]}
    });
    console.log(sprintDTO.goal);
    // Call to service layer.
    // Abstraction on how to access the data layer and the business logic.
    const { success, message, data } = await SprintService.CreateService(sprintDTO);

    // Return a response to client.
    return res.json({ success, message, data });
  })
);

export default router;
