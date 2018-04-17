/*jshint esversion:6*/

const beli = require('./beli');

class Item{
  constructor(name,price,waktu){
    this.item = name;
    this.harga = price;
    this.waktu = waktu;
  }
}

let somay = new Item('somay', 10000,100);
let bakso = new Item('bakso',20000,710);
let permen = new Item('permen',1000,500);
let kopi = new Item('kopi',1000,100);

beli(100000,somay,function(kembalian){
  beli(kembalian,bakso,function(kembalian){
    beli(kembalian,permen,function(kembalian){
    });
  });
  beli(kembalian,kopi,function(kembalian){
  });
});
