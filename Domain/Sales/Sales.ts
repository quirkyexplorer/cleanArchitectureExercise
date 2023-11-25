import { IEntity } from "../Common/IEntity";
import { Customer } from "../Customer/Customer";
import { Employee } from "../Employee/Employee";
import { Product } from "../Products/Product";

class Sale implements IEntity {
  public _quantity: number = 0;
  private _totalPrice: number = 0;
  private _unitPrice: number = 0;
  
  public id: number = 0;
  public date: Date = new Date();
  public Customer: Customer | null = null;
  public Employee: Employee | null = null;
  public Product: Product | null = null;
  
  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
    this.updateTotalPrice();
  }

  get totalPrice(): number {
    return this._totalPrice;
  } 

  set unitPrice(value: number) {
    this._unitPrice = value;
    this.updateTotalPrice();
  }

  get unitPrice(): number {
    return this._unitPrice;
  }

  private updateTotalPrice():void {
    this._totalPrice = this._unitPrice * this._quantity;
  }
}

export default Sale;