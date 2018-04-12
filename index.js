const beli = require('./beli');

let uang = 10000
let komputer = {
              item: "komputer",
              harga: 4500,
              waktu: 500
            }

let keyboard = {
              item: "keyboard",
              harga: 1000,
              waktu: 300
            }

let mouse = {
              item: "mouse",
              harga: 600,
              waktu: 350
            }

let printer = {
              item: "printer",
              harga: 2000,
              waktu: 200
            }

let kertas = {
              item: "kertas",
              harga: 50,
              waktu: 50
            }
let tinta = {
              item: "tinta",
              harga: 50,
              waktu: 100
            }
beli(uang, komputer, function(kembalian){
  beli(kembalian, keyboard, function(kembalian){
    beli(kembalian, mouse, function(kembalian){
    })
  })
  beli(kembalian, printer, function(kembalian){
    beli(kembalian, tinta, function(kembalian){
      beli(kembalian, kertas, function(kembalian){
      })
    })
  })
})
