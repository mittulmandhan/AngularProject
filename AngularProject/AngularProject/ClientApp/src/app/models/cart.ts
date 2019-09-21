import { environment } from 'src/environments/environment';

export class Cart {
  CartId: number;
  Items: any;
  Total: number;
  TotalItems: number;
  UserId: number;
  CreatedDate: string;
  CartName: string;
  constructor() {
    this.CartName = environment.cartName;
    this.Items = [];
    this.TotalItems = 0;
    this.Total = 0;
  }
}
