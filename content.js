// Fungsi untuk mengunduh gambar dari URL
function downloadImage(url, index, callback) {
  const link = document.createElement("a");
  link.href = url; // URL gambar
  link.download = `image_${index + 1}.jpg`; // Nama file download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Setelah gambar diunduh, panggil callback
  if (callback) callback();
}

// Fungsi untuk mengunduh semua gambar secara berurutan
function downloadAllImages(links) {
  let index = 0;

  function downloadNextImage() {
    if (index < links.length) {
      const imageUrl = links[index].href; // Mengambil URL dari tautan
      console.log(`Mengunduh gambar ${index + 1}: ${imageUrl}`);
      downloadImage(imageUrl, index, function () {
        index++; // Melanjutkan ke gambar berikutnya
        setTimeout(downloadNextImage, 1000); // Penundaan 1 detik sebelum mengunduh gambar berikutnya
      });
    } else {
      console.log("Semua gambar telah selesai diunduh.");
    }
  }

  downloadNextImage(); // Memulai unduhan
}

function addDownloadAllButton() {
  const footer = document.querySelector(".download-footer"); // Mencari footer dengan class ini

  if (footer && !document.querySelector("#download-all-button")) {
    // Memastikan tombol tidak diduplikasi
    const downloadAllButton = document.createElement("a");
    downloadAllButton.innerText = "Download All";
    downloadAllButton.className = "btn btn-app flex-center mt-3";
    downloadAllButton.style.color = "#fff";
    downloadAllButton.style.marginBottom = "10px";
    downloadAllButton.id = "download-all-button";

    downloadAllButton.onclick = function () {
      const links = document.querySelectorAll(
        ".download-bottom a.download-media"
      ); // Mengambil semua link download
      if (links.length === 0) {
        console.log("Tidak ada gambar untuk diunduh.");
        return;
      }
      console.log(`Mengunduh ${links.length} gambar...`);
      downloadAllImages(links);
    };

    // Menempatkan tombol baru di footer
    footer.insertBefore(downloadAllButton, footer.children[0]); // Menyisipkan tombol di atas tombol lainnya
    console.log("Tombol Download All berhasil ditambahkan!");
  }
}

// Inisialisasi MutationObserver
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes) {
      addDownloadAllButton(); // Menambahkan tombol jika elemen baru muncul
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

// Panggil fungsi sekali saat awal untuk memastikan tombol ditambahkan jika ada footer
addDownloadAllButton();
