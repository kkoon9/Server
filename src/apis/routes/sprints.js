import express from 'express';
import SprintService from '../../services/sprint.js';
import ErrorResponse from '../../modules/errorResponse.js';
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
  }));

export default router;
