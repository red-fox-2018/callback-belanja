const beli = require('./beli.js')

// let obj1=
// {item: 'sepatu',
//  harga:500000,
//  waktu:5000		
// }
// beli(100000,obj1,function(kembalian){
// 	console.log (kembalian)
// }) 



class Permen {
	constructor(){
		this.item ='permen'
		this.harga = 5000
		this.waktu = 3000 
	}
}

class Sepatu {
	constructor() {
		this.item ='sepatu'
		this.harga = 100000
		this.waktu = 3000
	}
}

class Buku {
	constructor() {
		this.item ='buku'
		this.harga = 7000
		this.waktu = 3000
	}
}

class Pensil {
	constructor() {
		this.item ='pensil'
		this.harga = 2000
		this.waktu = 3000
	}
}

class Ciki {
	constructor() {
		this.item ='ciki'
		this.harga = 1000
		this.waktu = 3000
	}
}

var permen = new Permen();
var sepatu = new Sepatu()
var buku = new Buku();
var pensil = new Pensil()
var ciki = new Ciki();


beli(500000, permen,function(kembalian){
	beli(kembalian,sepatu,function(kembalian){
		beli(kembalian,buku, function(kembalian){
			beli(kembalian,pensil,function(kembalian){
				beli(kembalian,ciki,function(kembalian){

				})
			})
		})
	})
})