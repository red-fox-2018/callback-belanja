function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function(){
    // console.log(obj)
    // console.log(uang ,obj.harga)
    // console.log(uang > obj.harga)

    if (uang > obj.harga) {
      let kembalian = uang - obj.harga
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      cb(kembalian)
    }if (uang < obj.harga) {
      // let sisaUang = uang
      console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${uang}`);
      cb(uang)
    }
  }, obj.waktu);
}
module.exports = beli;
