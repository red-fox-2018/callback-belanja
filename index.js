const beli = require('./beli.js')

class Item{
  constructor(objItem) {
    this.item = objItem.item
    this.harga = objItem.harga
    this.waktu = objItem.waktu
  }
}

var mouse = new Item({item: 'Mouse', harga: 150000, waktu: 3000})
var keyboard = new Item({item: 'Keyboard', harga: 200000, waktu: 3500})
var notes = new Item({item: 'Notes', harga: 15000, waktu: 2500})
var pen = new Item({item: 'Pen', harga: 2500, waktu: 1000})
var headset = new Item({item: 'Headset', harga: 60000, waktu: 2000})

beli(500000, mouse, kembalian => {
  beli(kembalian, keyboard, kembalian => {
    beli(kembalian, notes, kembalian => {
      beli(kembalian, pen, kembalian => {

      })
    })
    beli(kembalian, headset, kembalian => {
    })
  })
})
