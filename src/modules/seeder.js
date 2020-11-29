import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import config from '../config.js';
import Logger from '../loaders/logger';

const { url } = config.database;

// Load models
const Sprint = require('../models/sprintModel');
const User = require('../models/userModel');

// Connect to DB
mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// Read JSON files
const sprints = JSON.parse(
  fs.readFileSync(`${path.resolve()}/_dummyData/sprints.json`, 'utf-8')
);

const users = JSON.parse(
  fs.readFileSync(`${path.resolve()}/_dummyData/users.json`, 'utf-8')
);
// Import into DB
const importData = async () => {
  try {
    await Sprint.create(sprints);
    await User.create(users);

    Logger.info('✅ Data Imported,,,');
    process.exit();
  } catch (err) {
    Logger.error('💥 Data Imported Error');
    process.exit();
  }
};

// Delete into DB
const deleteData = async () => {
  try {
    await Sprint.deleteMany();
    await User.deleteMany();

    Logger.info('✅ Data deteled,,,');
    process.exit();
  } catch (err) {
    Logger.error('💥 Data Imported Error');
    process.exit();
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
