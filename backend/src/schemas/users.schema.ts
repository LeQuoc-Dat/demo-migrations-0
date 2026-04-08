import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  id: String,  
  fullName: String,
  gender: String,
  birthday: String
}, { versionKey: false });