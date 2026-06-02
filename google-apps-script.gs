/**
 * ==============================================================================
 * GOOGLE APPS SCRIPT (GAS) - INTEGRASI LEMBAR NILAI PEMBELAJARAN PGL
 * ==============================================================================
 * 
 * Skenario Penggunaan:
 * 1. Simpan salinan script ini ke ekstensi Google Sheets guru.
 * 2. Deploy sebagai Web App (Aplikasi Web).
 * 3. Salin URL Web App yang diperoleh ke input Integrasi Kuis di web ini.
 */

function doPost(e) {
  try {
    var rawData = e.postData.contents;
    var data = JSON.parse(rawData);
    
    // Buka Spreadsheet aktif berdasarkan dokumen tempat script ini dipasang
    var spr = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spr.getSheets()[0]; // Mengambil Sheet pertama (Sheet1)
    
    // Jika sheet baru dibuat dan masih kosong, buat baris header kolom pertama kali
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Waktu Pengiriman", 
        "Nama Siswa", 
        "Kelas", 
        "Jumlah Benar", 
        "Jumlah Salah", 
        "Terjawab", 
        "Ragu-Ragu", 
        "Belum Terjawab", 
        "Nilai Akhir"
      ]);
    }
    
    // Tambahkan data hasil pengerjaan kuis siswa ke baris terbawah sheet
    sheet.appendRow([
      new Date(),                     // tanggal dan waktu pengerjaan
      data.nama || "Anonim",          // nama siswa
      data.kelas || "Tingkat VII",    // kelas siswa
      data.benar,                     // benar
      data.salah,                     // salah
      data.terjawab,                  // terjawab
      data.raguRagu,                  // jumlah ditandai ragu-ragu
      data.belumTerjawab,             // belum terjawab
      data.nilai                      // nilai akhir kuis
    ]);
    
    // Mengembalikan respon sukses dalam bentuk JSON
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Data kuis siswa atas nama " + (data.nama || "Anonim") + " berhasil masuk spreadsheet!"
    })).setMimeType(ContentService.MimeType.JSON)
       .setHeader("Access-Control-Allow-Origin", "*"); // Pencegahan Block CORS Browser
       
  } catch (error) {
    // Mengembalikan detail kesalahan jika eksekusi gagal
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON)
       .setHeader("Access-Control-Allow-Origin", "*");
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Layanan Google Apps Script Aktif! Gunakan metode POST untuk menyetor nilai kuis.")
    .setHeader("Access-Control-Allow-Origin", "*");
}
