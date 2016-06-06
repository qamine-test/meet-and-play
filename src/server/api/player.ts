import * as express from "express";
import * as mongoose from 'mongoose';
import {Player, playerObjectFromRequest} from '../mongooseModels/player.mongoose.model';

export function playerAPI(app:express.Application) {

  //basic CRUD example
  app.get('/api/players', function (req, res) {
    Player.find(function (err, news) {
      if (err) {
        res.send(err);
      }

      res.json(news);
    });
  });

  app.get('/api/players/add', function (req, res) {
    var playerObject = playerObjectFromRequest(req.query);
    console.log(req.query.name);
    Player.findOneAndUpdate({_id: req.query._id ? req.query._id : new mongoose.mongo.ObjectID()}, playerObject, {upsert:true}, function (err, players) {
      if (err) {
        res.send(err);
      } else {
        res.json(players);
      }
    });

  });

  app.delete('/api/players/:playerId', function (req, res) {
    Player.remove({
      _id: req.params.playerId
    }, function (err) {
      if (err) {
        res.send(err);
      }

      res.send(req.params.playerId);
    });
  });
}
