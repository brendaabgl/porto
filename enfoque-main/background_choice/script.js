const choices = document.querySelectorAll('.choice');
choices.forEach((choice) => {
    choice.addEventListener("click", ({ target }) => {
        const bgUrl = target.src; // Ambil URL dari src
        
        // Buat elemen gambar baru
        const fullscreenImage = document.createElement('img');
        fullscreenImage.src = bgUrl; // Set URL gambar
        fullscreenImage.classList.add('fullscreen-image'); // Tambahkan class untuk styling
        
        // Hapus elemen gambar fullscreen sebelumnya jika ada
        const existingImage = document.querySelector('.fullscreen-image');
        if (existingImage) {
            existingImage.remove();
        }
        
        // Tambahkan gambar baru ke body
        document.body.appendChild(fullscreenImage);
    });
});
