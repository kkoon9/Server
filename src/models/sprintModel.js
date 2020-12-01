import mongoose from 'mongoose';

const SprintSchema = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'user',
  },
  startTime: { // 스프린트 시작 날짜
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true, // sequelize : AllowNull
  },
  question: { // 질문들
    type: [String],
  },
  isNotice: { // 알람 여부
    type: Boolean,
    default: false,
  },
  progress: { // 현재 진행 중인 스프린트인지
    type: Boolean,
    default: true,
  },
  percentAverage: { // 평균 달성률
    type: Number,
    required: true,
    default: 0,
  },
  dayOfTheWeek: {
    type: String,
    required: true,
  },
  goal: [{
    name: { // 목표 이름
      type: String,
      required: true
    },
    percent: { // 목표 달성률
      type: Number,
      required: true,
      default: 0,
    },
    score: {
      type: [Number],
    },
  }],
  review: [{
    date: {
      type: Date,
      required: true,
    },
    percent: {
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
