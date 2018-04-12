const beli = require('./beli');

class Item {
  constructor(item, price, time) {
    this.item = item;
    this.harga = price;
    this.waktu = time
  }
}

item1 = new Item('book', 10000, 5000);
item2 = new Item('permen', 3000, 4000);
item3 = new Item('permen', 2000, 3000);
item4 = new Item('permen', 1500, 2000);
item5 = new Item('permen', 3500, 1000);

beli(20000, item1, function (kembalian) {
  beli(kembalian, item2, function (kembalian) {
    beli(kembalian, item3, function (kembalian) {
      beli(kembalian, item4, function (kembalian) {
        beli(kembalian, item5, function (kembalian) {
        });
      });
    });
  });
})