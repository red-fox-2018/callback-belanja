const beli = require('./beli.js')

class Item{
    constructor(name,harga,waktu){
        this.item = name
        this.harga= harga
        this.waktu= waktu
    }
}

let item1 = new Item('permen',1500,3000)
let item2 = new Item('roti',4500,4000)
let item3 = new Item('uc1000',6500,4000)
let item4 = new Item('susu',5500,4000)
let item5 = new Item('tebs',4500,4000)
let uang = 40000
beli(uang, item1, function(kembalian) {
    beli(kembalian,item2,function (kembalian){
        beli(kembalian, item3, function (kembalian) {
            beli(kembalian, item4, function (kembalian) {
                beli(kembalian, item5, function (kembalian) {


                })

            })
        })
    })
})


