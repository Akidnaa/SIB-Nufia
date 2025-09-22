let produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

function tampilkanProduk() {
  console.log("Daftar Produk:");
  for (let p of produkToko) {
    console.log(`${p.id}. ${p.nama} - Rp${p.harga} (stok: ${p.stok})`);
  }
  console.log("");
}

function tambahProduk(nama, harga, stok) {
  let idBaru = produkToko.length + 1;
  produkToko.push({ id: idBaru, nama, harga, stok });
}

function hapusProduk(id) {
  produkToko = produkToko.filter(p => p.id !== id);
}

tampilkanProduk();
tambahProduk("Monitor", 1500000, 4);
tampilkanProduk();
hapusProduk(2);
tampilkanProduk();
