import mongoose from 'mongoose';

const SprintSchema = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'user',
  },
  startTime: { // 스프린트 시작 날짜
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true, // sequelize : AllowNull
  },
  nextReviewTime: {
    type: String,
    required: true, // sequelize : AllowNull
  },
  question: { // 질문들
    type: [String],
  },
  progress: { // 현재 진행 중인 스프린트인지
    type: Boolean,
    default: true,
  },
  totalPercentage: { // 평균 달성률
    type: Number,
    required: true,
    default: 0,
  },
  dayOfTheWeek: {
    type: String,
    required: true,
  },
  goal: [{
    title: { // 목표 이름
      type: String,
      required: true
    },
    percentage: { // 목표 달성률
      type: Number,
      required: true,
      default: 0,
    },
    score: {
      type: [Number],
    },
  }],
  review: [{
    reviewTime: {
      type: String,
      required: true,
    },
    averageAchievement: {
      type: Number,
      required: true
    },
    comments: [{
      question: {
        type: String,
        required: true,
      },
      answer: {
        type: String,
      },
    }],
  }],
}, {
  timestamps: true
});

const sprintModel = mongoose.model('sprint', SprintSchema);

export default sprintModel;
