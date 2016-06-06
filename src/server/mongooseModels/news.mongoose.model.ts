import mongoose = require('mongoose');
import {INews} from "./../../models/news.model";

export interface INewsModel extends INews, mongoose.Document {

}

export const NewsSchema = new mongoose.Schema({
  title: {type:String, required: true},
  body: String,
  publishingDate: Date
});

export const News = mongoose.model<INewsModel>('News', NewsSchema);
