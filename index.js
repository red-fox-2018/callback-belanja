/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/
/*jshint -W083*/


'use strict';
const beli = require('./beli.js');

class Item {
  constructor(item, harga, waktu) {
    this.item = item;
    this.harga = harga;
    this.waktu = waktu;
  }
}

let kopiItem = new Item('kopiItem', 50000, 1000);
let permen = new Item('permen', 5000, 1000);
let roti = new Item('roti', 10000, 2000);
let susu = new Item('susu', 7500, 2000);
let kacang = new Item('kacang', 3000, 1000);

function display(kembalian) {
  console.log(kembalian);
}


beli(60000, kopiItem, (kembalian) => {
  if (kembalian > 0) {
    beli(kembalian, permen, (kembalian) => {
      if (kembalian > 0) {
        beli(kembalian, roti, (kembalian) => {
          if (kembalian > 0) {
            beli(kembalian, susu, (kembalian) => {
              if (kembalian > 0) {
                beli(kembalian, kacang, display);
              }
            });
          }
        });
      }
    });
  }
});
