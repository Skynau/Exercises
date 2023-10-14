export class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    sell() {
        this.quantity -= 1;
    }

    store(count) {
        this.quantity += count;
    }
}