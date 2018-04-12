const beli = require('./beli.js')


let hewan = {
  item: 'Cat',
  harga: 500000,
  waktu: 1000
}
let money = 10000000
console.log(hewan);	
beli(money, hewan, function(kembalian){
  beli(kembalian, hewan, function(kembalian){
    beli(kembalian, hewan, function(kembalian){
      beli(kembalian, hewan, function(kembalian){
        beli(kembalian, hewan, function(kembalian){
        })
      })
    })
  })
})