let beli = require('./beli')

let uang = 5000

let objPermen = {item:'permen',harga:200,waktu:700}
let objKopi = {item:'kopi',harga:500, waktu:500}
let objIphone = {item:'iphone', harga:700, waktu:800}
let objGelas = {item:'gelas', harga:800, waktu:900}
let objLaptop = {item:'laptop', harga:900, waktu:600}

beli(uang,objGelas,function(kembaliannya){
    if (kembaliannya > 0){
    beli(kembaliannya,objKopi,function(kembaliannya) {
        if (kembaliannya > 0) { 
        beli(kembaliannya,objIphone,function(kembaliannya){
            if (kembaliannya > 0) {
            beli(kembaliannya,objLaptop,function(kembaliannya){
                if (kembaliannya > 0) {
                beli(kembaliannya,objPermen,function(kembaliannya){
                
                })
                }
            })
            }
        })
        }   
    })
    }  
})