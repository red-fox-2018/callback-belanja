var beli = require('./beli.js')

class item{
  constructor(name,harga,waktu){
    this.item = name
    this.harga = harga
    this.waktu = waktu
  }
}

let permen = new item('permen',300,200)
let batu = new item('batu',500,300)
let gula = new item('gula',200,150)
let soda = new item('soda',700,200)
let kacang = new item('kacang',600,200)
var uang = 1000

beli(uang,permen,kembalianPermen=>{
  if(kembalianPermen > 0){
    beli(kembalianPermen,batu,kembalianBatu=>{
      if(kembalianBatu > 0){
        beli(kembalianBatu,gula,kembalianGula=>{
          if(kembalianGula > 0){
            beli(kembalianGula,soda,kembalianSoda=>{
              if(kembalianSoda > 0){
                beli(kembalianSoda,kacang,kembalianKacang=>{
                    console.log('selesai belanja, sisa uang : ', kembalianKacang)
                })
              }
            })
          }
        })
      }
    })
  }
})
