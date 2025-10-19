<?php
// Cek apakah data dikirim melalui metode POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // 1. Ambil data dari formulir
    $nama  = htmlspecialchars($_POST['nama']);
    $email = htmlspecialchars($_POST['email']);
    $nilai = (int)$_POST['nilai']; // Konversi ke integer untuk perbandingan

    // 2. Implementasi Struktur Kendali (If-Else)
    $keterangan_kelulusan = "";
    $warna_hasil = "";

    if ($nilai > 70) {
        $keterangan_kelulusan = "LULUS";
        $warna_hasil = "green";
    } elseif ($nilai < 70) {
        $keterangan_kelulusan = "REMEDIAL";
        $warna_hasil = "red";
    } else {
        // Kasus jika nilai tepat 70 (kita asumsikan 70 termasuk LULUS untuk mempermudah, 
        // namun mengikuti aturan > 70 Lulus dan < 70 Remedial, kita buat kategori sendiri)
        $keterangan_kelulusan = "LULUS dengan Nilai Batas (70)";
        $warna_hasil = "orange"; 
    }

    // 3. Tampilkan Output ke halaman browser
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hasil Kelulusan</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .container { max-width: 500px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px; }
        h2 { border-bottom: 2px solid #ccc; padding-bottom: 10px; }
        p { margin-bottom: 10px; }
        .hasil { font-size: 1.5em; font-weight: bold; margin-top: 20px; padding: 10px; border-radius: 5px; text-align: center; }
        .green { background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
        .red { background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
        .orange { background-color: #fff3cd; color: #856404; border: 1px solid #ffeeba; }
    </style>
</head>
<body>
    <div class="container">
        <h2>Hasil Penentuan Kelulusan</h2>
        
        <p><strong>Nama:</strong> <?php echo $nama; ?></p>
        <p><strong>Email:</strong> <?php echo $email; ?></p>
        <p><strong>Nilai Ujian:</strong> <?php echo $nilai; ?></p>
        
        <div class="hasil <?php echo $warna_hasil; ?>">
            Status: <?php echo $keterangan_kelulusan; ?>
        </div>
        
        <p style="margin-top: 20px;"><a href="form.html">Kembali ke Formulir</a></p>
    </div>
</body>
</html>

<?php
} else {
    // Jika diakses langsung tanpa submit form
    echo "<p>Akses tidak sah. Silakan isi formulir terlebih dahulu.</p>";
}
?>