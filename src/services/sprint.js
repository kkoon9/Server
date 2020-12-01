import SprintModel from '../models/sprintModel.js';

export default {
  async HomeView(user) {
    const sprintRecord = await SprintModel.findOne({
      user: user.id
    });
    // If the user is not an admin, they can only add one bootcamp
    if (sprintRecord && !sprintRecord.progress) {
      return { success: false, message: 'falsetest', data: null };
    }
    return { success: true, message: 'test', data: sprintRecord };
  }
};
