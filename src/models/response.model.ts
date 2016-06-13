export interface IResponse {
  name: string;
}

//adding the id as it is added by mongoose
export class PlayerResponse implements IResponse{
  _id: string;
  name: string;
}
