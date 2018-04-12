const beli = require('./beli');



var objPermen = {
  item: 'permen',
  harga: 100,
  waktu: 1200
}

var objRoti = {
  item: 'roti',
  harga: 200,
  waktu: 1000
}

var objPizza = {
  item: 'Pizza',
  harga: 500,
  waktu: 1200
}

var objSusu = {
  item: 'susu',
  harga: 250,
  waktu: 1200
}

var objBuah = {
  item: 'buah',
  harga: 100,
  waktu: 1200
}

var uang = 1000;

console.log(beli(uang, objPermen, function(kembalian) {
  beli(kembalian, objRoti, function(kembalian) {
    beli(kembalian, objPizza, function(kembalian) {
      beli(kembalian, objSusu, function(kembalian) {
        beli(kembalian, objBuah, function(kembalian) {

        })
      })
    })
  })
}));
