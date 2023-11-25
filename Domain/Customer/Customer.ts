import { IEntity } from "../Common/IEntity";

export class Customer implements IEntity{
  public id: number = 0;
  public name: string = '';
  
  constructor(id?: number, name?: string) {
    if(id !== undefined) {
      this.id = id;
    }
    if (name !== undefined) {
      this.name
    }
  }
}