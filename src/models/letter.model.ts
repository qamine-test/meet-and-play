export interface ILetter {
  letter: string;
  imageUrl: string;
}

//adding the id as it is added by mongoose
export class Letter implements ILetter{
  letter: string;
  imageUrl: string;
}
