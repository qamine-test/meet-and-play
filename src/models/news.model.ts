export interface INews {
  title: string;
  body: string;
  publishingDate: Date;
}

//adding the id as it is added by mongoose
export class News implements INews{
  _id: string;
  title: string;
  body: string;
  publishingDate: Date;
}
