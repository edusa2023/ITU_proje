// Bilgi kutucukları
function bilgiGoster(id, mesaj) {
  const bina = document.getElementById(id);
  bina.addEventListener('click', () => {
    alert(mesaj);
  });
}

bilgiGoster('rektorluk', 'Rektörlük: Üniversitenin yönetim birimleri.');
bilgiGoster('kutuphane', 'Kütüphane: Ana araştırma ve çalışma alanı.');
bilgiGoster('mdf', 'Merkez Derslik: Ortak derslik binası.');
bilgiGoster('stadyum', 'Stadyum: Spor etkinliklerinin yapıldığı alan.');
bilgiGoster('golet', 'Gölet: Kampüsün doğal dinlenme alanı.');

// Koordinat tespiti aracı
document.getElementById("harita").addEventListener("click", function (e) {
  const x = e.offsetX;
  const y = e.offsetY;
  alert(`Koordinatlar:\nleft: ${x}px\n top: ${y}px`);
});
