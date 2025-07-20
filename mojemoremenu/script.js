// Kayan resim galerisi
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-img");

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 3000);

// Menü içeriğini dinamik göster
const menus = {
  kahvalti: `
    <h2>Kahvaltı</h2>
    <ul>
      <li>Serpme Kahvaltı – 180₺</li>
      <li>Menemen – 70₺</li>
      <li>Omlet (Peynirli / Sucuklu / Mantarlı) – 75₺</li>
      <li>Sahanda Yumurta – 60₺</li>
      <li>Pastırmalı Yumurta – 90₺</li>
      <li>Gözleme (Patatesli / Peynirli / Kıymalı) – 65₺</li>
      <li>Sigara Böreği – 50₺</li>
      <li>Mini Simit Tabağı – 45₺</li>
      <li>Kahvaltı Tabağı (Küçük) – 85₺</li>
      <li>Tost (Kaşarlı / Sucuklu / Karışık) – 70₺</li>
    </ul>
  `,

  atistirmalik: `
    <h2>Atıştırmalıklar</h2>
    <ul>
      <li>Patates Kızartması – 50₺</li>
      <li>Soğan Halkası – 55₺</li>
      <li>Sigara Böreği – 50₺</li>
      <li>Mozzarella Stick – 65₺</li>
      <li>Çıtır Tavuk Sepeti – 90₺</li>
      <li>Mini Pizza – 75₺</li>
      <li>Nugget Tabağı – 70₺</li>
      <li>Mısır – 35₺</li>
      <li>Acılı Ezme & Cips – 40₺</li>
      <li>Paçanga Böreği – 65₺</li>
    </ul>
  `,

  ana: `
    <h2>Ana Yemekler</h2>
    <ul>
      <li>Izgara Köfte – 140₺</li>
      <li>Tavuk Şiş – 130₺</li>
      <li>Et Şiş – 170₺</li>
      <li>Kuzu Pirzola – 210₺</li>
      <li>Tavuk Fajita – 150₺</li>
      <li>Et Fajita – 180₺</li>
      <li>Karışık Izgara – 220₺</li>
      <li>Mantı (Yoğurtlu / Salçalı) – 120₺</li>
      <li>Lazanya – 130₺</li>
      <li>Kremalı Tavuklu Makarna – 125₺</li>
    </ul>
  `,

  meze: `
    <h2>Mezeler</h2>
    <ul>
      <li>Haydari – 40₺</li>
      <li>Humus – 45₺</li>
      <li>Şakşuka – 50₺</li>
      <li>Kısır – 40₺</li>
      <li>Patlıcan Ezmesi – 50₺</li>
      <li>Rus Salatası – 40₺</li>
      <li>Acılı Ezme – 35₺</li>
      <li>Yoğurtlu Kabak – 45₺</li>
      <li>Fava – 40₺</li>
      <li>Zeytinyağlı Yaprak Sarma – 55₺</li>
    </ul>
  `,

  icecek: `
  <h2>İçecekler</h2>
  <h3>Sıcak İçecekler</h3>
  <ul>
    <li>Türk Çayı – 15₺</li>
    <li>Bitki Çayları (Adaçayı, Ihlamur, Rezene) – 25₺</li>
    <li>Nescafe / Filtre Kahve / Espresso – 35₺</li>
    <li>Cappuccino / Latte / Mocha – 45₺</li>
  </ul>

  <h3>Soğuk İçecekler</h3>
  <ul>
    <li>Taze Portakal Suyu – 40₺</li>
    <li>Limonata – 35₺</li>
    <li>Kola / Fanta / Sprite – 30₺</li>
    <li>Meyveli Soda – 25₺</li>
    <li>Ayran – 20₺</li>
    <li>Su (0.5L / 1.5L) – 10₺ / 20₺</li>
  </ul>

  <h3>Alkollü İçecekler</h3>
  <ul>
    <li>Rakı (Kadeh) – 90₺</li>
    <li>Rakı (Duble) – 150₺</li>
    <li>Rakı 35 cl – 350₺</li>
    <li>Rakı 50 cl – 460₺</li>
    <li>Rakı 70 cl – 550₺</li>

    <li>Şarap (Kadeh) – 80₺</li>
    <li>Şarap (Şişe - Yerli) – 350₺</li>
    <li>Şarap (Şişe - İthal) – 450₺</li>

    <li>Efes Pilsen – 60₺</li>
    <li>Bomonti Filtresiz – 65₺</li>
    <li>Corona – 85₺</li>

    <li>Margarita – 110₺</li>
    <li>Mojito – 100₺</li>
    <li>Bloody Mary – 105₺</li>
    <li>Viski Sour – 120₺</li>
    <li>Long Island Ice Tea – 130₺</li>
  </ul>
`

  ,

  tatli: `
    <h2>Tatlılar</h2>
    <ul>
      <li>Künefe – 70₺</li>
      <li>Sütlaç – 55₺</li>
      <li>Fırın Helva – 60₺</li>
      <li>Trileçe – 65₺</li>
      <li>Profiterol – 60₺</li>
      <li>Tiramisu – 65₺</li>
      <li>Dondurma (3 top) – 45₺</li>
      <li>İrmik Helvası (Dondurmalı) – 70₺</li>
      <li>Çikolatalı Sufle – 75₺</li>
      <li>Cheesecake (Frambuazlı / Limonlu / Çikolatalı) – 70₺</li>
    </ul>
  `
};


function showMenu(category) {
  document.getElementById("menuContent").innerHTML = menus[category];

  const photoMap = {
    kahvalti: "images/foto1.jpg",
    atistirmalik: "images/foto2.jpg",
    ana: "images/foto3.jpg",
    meze: "images/foto1.jpg",
    icecek: "images/foto2.jpg",
    tatli: "images/foto3.jpg"
  };

  document.getElementById("menuPhoto").src = photoMap[category] || "images/foto1.jpg";

  // Mobilde içerik kısmına scroll yap
  const menuContentContainer = document.getElementById("menuContentContainer");
  menuContentContainer.scrollIntoView({ behavior: "smooth" });
}
