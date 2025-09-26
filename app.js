let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Headset", harga: 800000 },
  { id: 4, nama: "Keyboard", harga: 300000 },
  { id: 5, nama: "Monitor", harga: 2500000 }
];

function tampilkanProduk() {
  const container = document.getElementById("produkList");
  container.innerHTML = ""; 

  produkList.forEach(({ id, nama, harga }) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${id}</td>
      <td>${nama}</td>
      <td>Rp${harga.toLocaleString("id-ID")}</td>
    `;
    container.appendChild(row);
  });
}

function tambahProduk(id, nama, harga) {
  const produkBaru = { id, nama, harga };
  produkList = [...produkList, produkBaru];
  tampilkanProduk();
}

function hapusProduk(...id) {
  produkList = produkList.filter(p => !id.includes(p.id));
  tampilkanProduk();
}

document.getElementById("btnTambah").addEventListener("click", () => {
  const id = parseInt(document.getElementById("id").value);
  const nama = document.getElementById("nama").value;
  const harga = parseInt(document.getElementById("harga").value);

  if (!id || !nama || !harga) {
    alert("Lengkapi semua data!");
    return;
  }
  tambahProduk(id, nama, harga);

  document.getElementById("id").value = "";
  document.getElementById("nama").value = "";
  document.getElementById("harga").value = "";
});

document.getElementById("btnHapus").addEventListener("click", () => {
  const hapusId = parseInt(document.getElementById("hapusId").value);
  if (!hapusId) {
    alert("Masukkan ID produk yang ingin dihapus!");
    return;
  }
  hapusProduk(hapusId);

  document.getElementById("hapusId").value = "";
});
tampilkanProduk();
