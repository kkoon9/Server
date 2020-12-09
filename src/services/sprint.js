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

  }
};
