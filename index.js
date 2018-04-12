let beli = require("./beli")

class Item{
    constructor(item,harga,waktu){
        this.item = item
        this.harga = harga
        this.waktu = waktu
    }
}

let Permen = new Item("Permen",10000,2000)
let Roti = new Item("Roti",5000,2000)
let Mie = new Item("Mie",15000,2000)
let Susu = new Item("Susu",25000,2000)
let Telur = new Item("Telur",5000,2000)

let uang = 125000

beli(uang,Permen,function(kembalian){
    beli(kembalian,Roti,function(kembalian){
        beli(kembalian,Mie,function(kembalian){
            beli(kembalian,Susu,function(kembalian){
                beli(kembalian,Telur,function(kembalian){
                })
            })
        })
    })
})
