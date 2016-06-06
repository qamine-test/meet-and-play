export interface IPlayer {
  name: string;
  age: number;
  careerLength: number;
  side: string;
  position: string;
  goalie: number;
  goalieQuality: number;
  defence: number;
  defenceQuality: number;
  attack: number;
  attackQuality: number;
  shot: number;
  shotQuality: number;
  pass: number;
  passQuality: number;
  technique: number;
  techniqueQuality: number;
  aggression: number;
  aggressionQuality: number;
}

//adding the id as it is added by mongoose
export class Player implements IPlayer{
  _id: string;
  name:string;
  age:number;
  careerLength:number;
  side:string;
  position:string;
  goalie:number;
  goalieQuality:number;
  defence:number;
  defenceQuality:number;
  attack:number;
  attackQuality:number;
  shot:number;
  shotQuality:number;
  pass:number;
  passQuality:number;
  technique:number;
  techniqueQuality:number;
  aggression:number;
  aggressionQuality:number;
  
  overall: number;
}
