const beli = require('./beli')

let cabe = {item:"cabe",harga:3000, waktu:1000}
let durian = {item:"durian",harga:55000, waktu:1000}
let rinso = {item:"rinso",harga:12000, waktu:1000}
let sate = {item:"sate",harga:20000, waktu:1000}
let cilok = {item:"cilok",harga:1000, waktu:1000}

beli(100000, cabe, function(kembalian){
  beli(kembalian, durian, function(kembalian){
    beli(kembalian, rinso, function(kembalian){
      beli(kembalian, sate, function(kembalian){
        beli(kembalian, cilok, function(kembalian){
          console.log("sisa uang", kembalian)
        })
      })
    })
  })
})