import mongoose = require('mongoose');
import {IPlayer} from "./../../models/player.model";

export interface IPlayerModel extends IPlayer, mongoose.Document {

}

const POSITIONS = ['G', 'LD', 'RD', 'UD', 'C', 'RW', 'LW', 'UW'];
const SIDES = ['Left', 'Right', 'Universal'];

export const PlayerSchema = new mongoose.Schema({
  name: {type: String, required: true},
  age: {type: Number, required: true},
  careerLength: {type: Number, required: true},
  side: {type: String, required: true},
  position: {type: String, required: true},
  goalie: {type: Number, required: true},
  goalieQuality: {type: Number, required: true},
  defence: {type: Number, required: true},
  defenceQuality: {type: Number, required: true},
  attack: {type: Number, required: true},
  attackQuality: {type: Number, required: true},
  shot: {type: Number, required: true},
  shotQuality: {type: Number, required: true},
  pass: {type: Number, required: true},
  passQuality: {type: Number, required: true},
  technique: {type: Number, required: true},
  techniqueQuality: {type: Number, required: true},
  aggression: {type: Number, required: true},
  aggressionQuality: {type: Number, required: true}
});

export function playerObjectFromRequest(requestBody) {
  return {
    name: requestBody.name,
    age: requestBody.age,
    careerLength: requestBody.careerLength,
    side: requestBody.side,
    position: requestBody.position,
    goalie: requestBody.goalie,
    goalieQuality: requestBody.goalieQuality,
    defence: requestBody.defence,
    defenceQuality: requestBody.defenceQuality,
    attack: requestBody.attack,
    attackQuality: requestBody.attackQuality,
    shot: requestBody.shot,
    shotQuality: requestBody.shotQuality,
    pass: requestBody.pass,
    passQuality: requestBody.passQuality,
    technique: requestBody.technique,
    techniqueQuality: requestBody.techniqueQuality,
    aggression: requestBody.aggression,
    aggressionQuality: requestBody.aggressionQuality
  }
}

export const Player = mongoose.model<IPlayerModel>('Player', PlayerSchema);
