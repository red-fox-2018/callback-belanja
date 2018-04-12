"use strict"
const beli = require('./beli');

class Belanjaan {
    constructor(item, harga, waktu) {
        this.item = item;
        this.harga = harga;
        this.waktu = waktu;
    }
}

let permen = new Belanjaan('permen', 5000, 500);
let bubur = new Belanjaan('bubur', 5000, 1000);
let mie = new Belanjaan('mie ayam', 10000, 1100);
let yogurt = new Belanjaan('yogurt', 6000, 500);
let nasgor = new Belanjaan('nasi goreng', 10000, 800);


beli(100000, permen, (kembalian) => {
    beli(kembalian, bubur, (kembalian) => {
        beli(kembalian, mie, (kembalian) => {
            beli(kembalian, yogurt, (kembalian) => {
                beli(kembalian, nasgor, (kembalian) => {});
            });
        });
    });
});