import express from 'express';
import SprintService from '../../services/sprint.js';
import asyncHandler from '../../modules/async.js';
import date from '../../modules/date.js';
import sprint from '../../services/sprint.js';

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
    const score = await date.getScoreDateMap(sprintDTO.startTime, sprintDTO.endTime);
    sprintDTO.goal = await sprintDTO.goals.map((g) => {
      return {title: g, percentage:0, score:score}
    });
    const review = await date.getReviewDate(sprintDTO.nextReviewTime, sprintDTO.endTime, sprintDTO.day);
    sprintDTO.review = await review.map((date) => {
      return {reviewTime: date, averageAchievement:0, comments:[]}
    });
    // Call to service layer.
    // Abstraction on how to access the data layer and the business logic.
    const { success, message, data } = await SprintService.CreateService(sprintDTO);

    // Return a response to client.
    return res.json({ success, message, data });
  })
);

router.post('/',
  // validators.getSprint, // this middleware take care of validation
  asyncHandler(async (req, res) => {
    // The actual responsability of the route layer.
    const sprintDTO = req.body;
    const score = await date.getScoreDateMap(sprintDTO.startTime, sprintDTO.endTime);
    sprintDTO.goal = await sprintDTO.goals.map((g) => {
      return {title: g, percentage:0, score:score}
    });
    const review = await date.getReviewDate(sprintDTO.nextReviewTime, sprintDTO.endTime, sprintDTO.day);
    sprintDTO.review = await review.map((date) => {
      return {reviewTime: date, averageAchievement:0, comments:[]}
    });
    // Call to service layer.
    // Abstraction on how to access the data layer and the business logic.
    const { success, message, data } = await SprintService.CreateService(sprintDTO);

    // Return a response to client.
    return res.json({ success, message, data });
  })
);

router.put('/score/:id',
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const {day, scores} = req.body;

    const { success, message, data } = await SprintService.InsertScore({id, day, scores});

    // Return a response to client.
    return res.json({ success, message, data });
  })
);

router.get('/review/:id',
  asyncHandler(async (req, res) => {
    const id = req.params.id;

    const { success, message, data } = await SprintService.GetReview(id);

    // Return a response to client.
    return res.json({ success, message, data });
  })
);

export default router;
