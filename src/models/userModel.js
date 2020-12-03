import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  nickname: {
    type: String,
    required: [true, 'Please add a nickname']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ],
  },
  profileImage: {
    type: String,
    required: true
  },
  isNotice: { // 알람 여부
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true
});

const userModel = mongoose.model('user', userSchema);

export default userModel;
