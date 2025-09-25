class Kendaraan {
  constructor(jenis, model) {
    this.jenis = jenis;
    this.model = model;
  }

  getInfo() {
    return `Kendaraan: ${this.jenis}, Model: ${this.model}`;
  }
}

class Pelanggan {
  constructor(nama, nomorTelepon) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = []; 
  }

  sewaKendaraan(kendaraan) {
    if (kendaraan instanceof Kendaraan) {
      this.kendaraanDisewa.push(kendaraan);
      console.log(`✅ ${this.nama} berhasil menyewa ${kendaraan.getInfo()}`);
    } else {
      console.log(`❌ Error: Objek yang disewa bukan jenis Kendaraan yang valid.`);
    }
  }

  kembalikanKendaraan(kendaraan) {
    const index = this.kendaraanDisewa.indexOf(kendaraan);
    if (index > -1) {
      this.kendaraanDisewa.splice(index, 1);
      console.log(`✅ ${this.nama} berhasil mengembalikan ${kendaraan.getInfo()}`);
    } else {
      console.log(`⚠️ ${this.nama} tidak menyewa kendaraan tersebut.`);
    }
  }

  getInfo() {
    return {
      nama: this.nama,
      nomorTelepon: this.nomorTelepon,
      kendaraanDisewa: this.kendaraanDisewa.map(k => k.getInfo())
    };
  }
}

const daftarPelanggan = [];

function tambahPelanggan(nama, nomorTelepon) {
  const pelangganBaru = new Pelanggan(nama, nomorTelepon);
  daftarPelanggan.push(pelangganBaru);
  return pelangganBaru;
}

function tampilkanPelangganMenyewa() {
  console.log("\n--- DAFTAR PELANGGAN YANG SEDANG MENYEWA KENDARAAN ---");
  const pelangganMenyewa = daftarPelanggan.filter(p => p.kendaraanDisewa.length > 0);

  if (pelangganMenyewa.length === 0) {
    console.log("Tidak ada pelanggan yang sedang menyewa kendaraan saat ini.");
    return;
  }

  pelangganMenyewa.forEach((pelanggan, index) => {
    console.log(`\n${index + 1}. Nama: ${pelanggan.nama}, Telp: ${pelanggan.nomorTelepon}`);
    console.log("   Kendaraan yang disewa:");
    pelanggan.kendaraanDisewa.forEach(kendaraan => {
      console.log(`   - ${kendaraan.getInfo()}`);
    });
  });
}

console.log("--- SIMULASI TRANSAKSI ---");

const mobilAvanza = new Kendaraan('Mobil', 'Toyota Avanza');
const motorVario = new Kendaraan('Motor', 'Honda Vario');
const busParwis = new Kendaraan('Bus', 'Mercedes-Benz');
const sepedaGunung = new Kendaraan('Sepeda', 'Polygon Xtrada');

const pelanggan1 = tambahPelanggan('Rudi Santoso', '081234567890');
const pelanggan2 = tambahPelanggan('Siti Nurhaliza', '089876543210');
const pelanggan3 = tambahPelanggan('Ahmad Junaidi', '085511223344');

pelanggan1.sewaKendaraan(mobilAvanza);
pelanggan2.sewaKendaraan(motorVario);
pelanggan1.sewaKendaraan(busParwis); 
pelanggan3.sewaKendaraan(sepedaGunung); 

tampilkanPelangganMenyewa();

console.log("\n--- SIMULASI PENGEMBALIAN KENDARAAN ---");
pelanggan1.kembalikanKendaraan(mobilAvanza);
pelanggan2.kembalikanKendaraan(sepedaGunung); 

tampilkanPelangganMenyewa();