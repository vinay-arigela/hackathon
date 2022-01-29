export class Order {
  id: String;
  stockId: String;
  orderType: number;
  price: number;
  quantity: number;

  Order(args) {
    this.id = args.id;
    this.stockId = args.stockId;
    this.orderType = args.orderType;
    this.price = args.price;
    this.quantity = args.quantity;
  }
}
