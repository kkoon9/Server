import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  nickname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  profileImage: {
    type: String,
    required: true
  },
  isPremium: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: true
});

const userModel = mongoose.model('user', userSchema);

export default userModel;
