import * as express from "express";
import * as mongoose from 'mongoose';
import {News} from '../mongooseModels/news.mongoose.model';

export function newsAPI(app:express.Application) {
  app.get('/api/news', function (req, res) {
    res.json([
      {"_id": "1", "title": "Опасности нарушения корпоративной политики безопасности", "body": '', "publishingDate": new Date("April 1, 2016 11:13:00")},
      {"_id": "2", "title": "Познакомьтесь с Геннадием Черкесом: техническим директором ISSoft", "body": '', "publishingDate": new Date("March 20, 2016 11:13:00")},
      {"_id": "3", "title": "H-Files - секреты и тонкости разработки для здравоохранения", "body": '', "publishingDate": new Date("March 18, 2016 11:13:00")},
      {"_id": "4", "title": "В нашей компании сегодня отмечается большой", "body": '', "publishingDate": new Date("March 15, 2016 11:13:00")},
      {"_id": "5", "title": "ИСсофтовцы поучаствовали в проекте 17 добрых дел", "body": '', "publishingDate": new Date("March 10, 2016 11:13:00")},
      {"_id": "6", "title": "Размышления о языке программирования Go: каковы его преимущества", "body": '', "publishingDate": new Date("March  5, 2016 11:13:00")},
      {"_id": "7", "title": "Девушки ISSoft от всей души поздравляют всех ребят", "body": '', "publishingDate": new Date("February 23, 2016 11:13:00")}
    ]);
  });


  //basic CRUD example
  // app.get('/api/news', function (req, res) {
  //   News.find(function (err, news) {
  //     if (err) {
  //       res.send(err);
  //     }
  //
  //     res.json({data:news});
  //   });
  // });
  //
  // app.post('/api/news', function (req, res) {
  //   News.findOneAndUpdate({_id: req.body._id ? req.body._id : new mongoose.mongo.ObjectID()}, {
  //     title: req.body.title,
  //     body: req.body.body,
  //     publishingDate: req.publishingDate
  //   }, {upsert:true}, function (err, news) {
  //     if (err) {
  //       res.send(err);
  //     }
  //
  //     res.json(news);
  //   });
  //
  // });
  //
  // app.delete('/api/news/:timelogId', function (req, res) {
  //   News.remove({
  //     _id: req.params.newsId
  //   }, function (err) {
  //     if (err) {
  //       res.send(err);
  //     }
  //
  //     res.send(req.params.newsId);
  //   });
  // });
}
