import SprintModel from '../models/sprintModel.js';
import message from '../modules/responseMessage.js';

export default {
  async HomeView(user) {
    const sprintRecord = await SprintModel.findOne({
      user: user.id
    }).select('-review -question');
    // If the user is not an admin, they can only add one bootcamp
    if (sprintRecord && !sprintRecord.progress) {
      return { success: false, message: message.NO_SPRINT, data: null };
    }
    return { success: true, message: message.SPRINT_READ_SUCCESS, data: sprintRecord };
  },

  async CreateService(sprint) {
    const sprintRecord = await SprintModel.create(sprint);
    if (!sprintRecord) {
      return { success: false, message: message.SPRINT_CREATE_FAIL, data: null };
    }
    return { success: true, message: message.SPRINT_CREATE_SUCCESS, data: sprintRecord };
  },

  async InsertScore({id, day, scores}) {
    const sprint = await SprintModel.findById(id).select('-review -question');
    if (!sprint) {
      return { success: false, message: message.SPRINT_SCORE_FAIL, data: null };
    }
    scores.map((score, i) => {
      sprint.goal[i].score.set(day, score);
    })
    sprint.save();
    return { success: true, message: message.SPRINT_SCORE_SUCCESS, data: sprint };
  },

  async GetReview(id) {
    const sprintReview = await SprintModel.findById(id).select('-goal -question');
    // If the user is not an admin, they can only add one bootcamp
    if (sprintReview && !sprintReview.progress) {
      return { success: false, message: message.SPRINT_REVIEW_READ_FAIL, data: null };
    }
    return { success: true, message: message.SPRINT_REVIEW_READ_SUCCESS, data: sprintReview };
  },
};
