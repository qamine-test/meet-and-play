import * as express from "express";
import * as mongoose from 'mongoose';
import {Response} from '../mongooseModels/response.mongoose.model';
import {responseObjectFromRequest} from "../mongooseModels/news.mongoose.model";

export function responseAPI(app:express.Application) {

  //basic CRUD example
  app.get('/api/response', function (req, res) {
    Response.find({}, null, {sort: {'_id': 1}}, function (err, responses) {
      if (err) {
        res.send(err);
      }

      res.json(responses);
    });
  });

  app.post('/api/response', function (req, res) {
    console.log(req.body);
    var responseObject = responseObjectFromRequest(req.body);
    console.log(responseObject);
    if(responseObject.name) {
      Response.findOneAndUpdate(
        {_id: req.body._id ? req.body._id : new mongoose.mongo.ObjectID()},
        responseObject,
        {upsert: true},
        function (err, response) {
          if (err) {
            res.send(err);
          }

          res.json(response);
        });
    } else {
      res.send('name not provided');
    }
  });

  app.delete('/api/response', function (req, res) {
    Response.remove({}, function (err) {
      if (err) {
        res.send(err);
      }

      res.send({status: "ok"});
    });
  });
}
