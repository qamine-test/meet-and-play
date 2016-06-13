import mongoose = require('mongoose');
import {IResponse} from "./../../models/response.model";

export interface IResponseModel extends IResponse, mongoose.Document {

}

export const ResponseSchema = new mongoose.Schema({
  name: {type:String, required: true},
});

export const Response = mongoose.model<IResponseModel>('Response', ResponseSchema);
