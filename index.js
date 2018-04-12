const beli = require('./beli.js')

let uang = 20000
let obj = {item: 'Telor', harga: 500, waktu:1000  }
let obj2 = {item: 'Jus', harga: 3000, waktu:2000  }
let obj3 = {item: 'Yakult', harga: 2000, waktu:3000  }
let obj4 = {item: 'Ikan', harga: 10000, waktu:4000  }
let obj5 = {item: 'Apel', harga: 4000, waktu:5000  }

beli(uang, obj, function(param_kembalian) {
  beli(param_kembalian, obj2, function(param_kembalian) {
    beli(param_kembalian, obj3, function(param_kembalian) {
      beli(param_kembalian, obj4, function(param_kembalian) {
        beli(param_kembalian, obj4, function(param_kembalian) {
            if(param_kembalian<=0){
               console.log("sudah beli semua")
            }
        })
      })
    })
  })
})
