const beli = require ('./beli.js')

class Item {
    constructor(item, harga, waktu){
        this.item = item
        this.harga = harga
        this.waktu = waktu
    }
}

let kopi = new Item('Kopi', 15000, 400)
let roti = new Item('Roti', 10000, 300)
let martabak = new Item('Martabak', 30000, 500)
let permen = new Item('Permen', 5000, 100)
let aqua = new Item('Aqua', 5000, 200)

let uang = 50000



beli(uang, kopi, kembalian => {
    beli(kembalian, roti, kembalian => {
        beli(kembalian, martabak, kembalian => {
            beli(kembalian, permen, kembalian => {
                beli(kembalian, aqua, kembalian => {
                    console.log(`sisa uang saya ${kembalian}`);
                    
                })
            })
        })
    })    
})