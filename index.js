const beli = require('./beli');

var objItem=[
              {item: 'Permen', harga: 20000, waktu: 5000},
              { item: 'Roti', harga: 15000, waktu: 4000},
              { item: 'Gula', harga: 10000, waktu: 3000},
              { item: 'Kopi', harga: 50000, waktu: 2000},
              { item: 'susu', harga: 5000, waktu: 1000}

            ]


let modal=100000
for (var i = 0; i < 5; i++) {
  beli(modal,objItem[i],function(){});
  modal-= objItem[i].harga
}
