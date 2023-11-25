import { IEntity } from "../Common/IEntity";

export class Product implements IEntity{
  public id: number = 0;
  public name: string = '';
  public price: number = 0.0;
  
  constructor(id?: number, name?: string, price?: number) {
    if(id !== undefined) {
      this.id = id;
    }
    if (name !== undefined) {
      this.name = name;
    }
    if (price !== undefined) {
      this.price = price;
    }

  }
}