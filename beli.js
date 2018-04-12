function beli(uang, obj, cb){

  setTimeout(function(){

    console.log(`Saya pergi membeli ${obj.item}`)
    let kembalian = uang - obj.harga
    if (uang >= obj.harga) {

      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      cb(kembalian)
    }else{

      console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
      cb(0)
    }

  }, obj.waktu);

}

module.exports = beli;