const kahvalti = [
  { item: "Kahvaltı Tabağı", price: "130" },
  { item: "Serpme Kahvaltı (Tek Kişilik)", price: "130" },
  { item: "Menemen", price: "50" },
  { item: "Mıhlama", price: "-" },
  { item: "Sucuk", price: "60" },
];

const etcesitleri = [
  { item: "Köfte Izgara", price: "100" },
  { item: "Bonfile Izgara", price: "230" },
  { item: "Antrikot", price: "200" },
  { item: "Karışık Izgara", price: "320" },
  { item: "Tavuk Izgara", price: "100" },
  { item: "Sucuk Izgara", price: "100" },
  { item: "Kuzu Pirzola", price: "230" },
  { item: "Kuzu Şiş", price: "200" },
];

const baslangic = [
  { item: "Kalamar", price: "150" },
  { item: "Tereyağlı Karides", price: "150" },
  { item: "Sebzeli Karides", price: "160" },
  { item: "Midye Tava", price: "100" },
  { item: "Sigara Böreği", price: "50" },
  { item: "Patates Cipsi", price: "50" },
];

const denizurunleri = [
  { item: "Levrek", price: "150" },
  { item: "Çupra", price: "140" },
  { item: "Palamut", price: "100" },
  { item: "Hamsi", price: "125" },
];

const mesrubat = [
  { item: "Kutu İçecekler", price: "20" },
  { item: "Meyve Suyu", price: "20" },
  { item: "Soda", price: "20" },
  { item: "Enerji İçeceği", price: "60" },
  { item: "Ayran", price: "20" },
  { item: "Su (0.5)", price: "7,5" },
  { item: "Su (1.5)", price: "20" },
];

const bira = [
  { item: "Efes", price: "70" },
  { item: "Tuborg", price: "70" },
  { item: "Carlsberg", price: "70" },
  { item: "Miller", price: "-" },
  { item: "Corana", price: "-" },
  { item: "Bomonti Filtresiz", price: "-" },
  { item: "Özel Seri", price: "-" },
];

const yeniraki = [
  { item: "Tek", price: "100" },
  { item: "Duble", price: "120" },
  { item: "20Lik", price: "-" },
  { item: "35 CL", price: "380" },
  { item: "70 CL", price: "650" },
  { item: "100 CL ", price: "900" },
  { item: "150 CL ", price: "1200" },
];

const efe = [
  { item: "Tek", price: "100" },
  { item: "Duble", price: "120" },
  { item: "20Lik", price: "-" },
  { item: "35 CL", price: "380" },
  { item: "70 CL", price: "650" },
  { item: "100 CL ", price: "900" },
];

const tekirdag = [
  { item: "Tek", price: "100" },
  { item: "Duble", price: "120" },
  { item: "20Lik", price: "-" },
  { item: "35 CL", price: "380" },
  { item: "70 CL", price: "650" },
  { item: "100 CL ", price: "900" },
];

const beyler = [
  { item: "35 CL", price: "380" },
  { item: "70 CL", price: "650" },
  { item: "100 CL ", price: "900" },
];

function App() {
  return (
    <div className='App'>
      <div className='a'>
        <img src='https://www.linkpicture.com/q/1_1572.png' alt='' />
      </div>
      <div className='b'>
        <img src='https://www.linkpicture.com/q/2_614.png' alt='' />
      </div>
      <div className='c'>
        <img src='https://www.linkpicture.com/q/3_420.png' alt='' />
      </div>
      <div className='d'>
        <img src='https://www.linkpicture.com/q/4_317.png' alt='' />
      </div>

      <div className='header-container'>
        <div className='header'>
          <h1>Menü</h1>
          <h2>PANAROMA HOTEL RESTAURANT</h2>
        </div>
      </div>
      <div className='foods-container'>
        <div className='left-side'>
          <div className='list1-container'>
            <div className='list1-header'>
              <h2>KAHVALTILAR</h2>
            </div>
            <div className='list1'>
              <div className='list1-items'>
                {kahvalti.map((item) => (
                  <p>{item.item}</p>
                ))}
              </div>
              <div className='list1-price'>
                {kahvalti.map((item) => (
                  <p>{item.price} ₺</p>
                ))}
              </div>
            </div>
          </div>
          <div className='list1-container'>
            <div className='list1-header'>
              <h2>BAŞLANGIÇ </h2>
            </div>
            <div className='list1'>
              <div className='list1-items'>
                {baslangic.map((item) => (
                  <p>{item.item}</p>
                ))}
              </div>
              <div className='list1-price'>
                {baslangic.map((item) => (
                  <p>{item.price} ₺</p>
                ))}
              </div>
            </div>
          </div>
          <div className='list1-container'>
            <div className='list1-header'>
              <h2>ANA YEMEK (Balık Çeşitleri)</h2>
            </div>
            <div className='list1'>
              <div className='list1-items'>
                {denizurunleri.map((item) => (
                  <p>{item.item}</p>
                ))}
              </div>
              <div className='list1-price'>
                {denizurunleri.map((item) => (
                  <p>{item.price} ₺</p>
                ))}
              </div>
            </div>
          </div>
          <div className='list1-container'>
            <div className='list1-header'>
              <h2>ANA YEMEK (Et Çeşitleri) </h2>
            </div>
            <div className='list1'>
              <div className='list1-items'>
                {etcesitleri.map((item) => (
                  <p>{item.item}</p>
                ))}
              </div>
              <div className='list1-price'>
                {etcesitleri.map((item) => (
                  <p>{item.price} ₺</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='middle'></div>
        <div className='right-side'>
          <div className='list1-container'>
            <div className='list1-header'>
              <h2>ALKOLLÜ İÇECEKLER </h2>
            </div>
            <div className='list1'>
              <div className='list1-items'>
                {bira.map((item) => (
                  <p>{item.item}</p>
                ))}
              </div>
              <div className='list1-price'>
                {bira.map((item) => (
                  <p>{item.price} ₺</p>
                ))}
              </div>
            </div>
          </div>
          <div className='list1-container'>
            <div className='list1-header'>
              <h2>EFE RAKI</h2>
            </div>
            <div className='list1'>
              <div className='list1-items'>
                {efe.map((item) => (
                  <p>{item.item}</p>
                ))}
              </div>
              <div className='list1-price'>
                {efe.map((item) => (
                  <p>{item.price} ₺</p>
                ))}
              </div>
            </div>
          </div>
          <div className='list1-container'>
            <div className='list1-header'>
              <h2>TEKİRDAĞ RAKI</h2>
            </div>
            <div className='list1'>
              <div className='list1-items'>
                {tekirdag.map((item) => (
                  <p>{item.item}</p>
                ))}
              </div>
              <div className='list1-price'>
                {tekirdag.map((item) => (
                  <p>{item.price} ₺</p>
                ))}
              </div>
            </div>
          </div>
          <div className='list1-container'>
            <div className='list1-header'>
              <h2>ALKOLSÜZ İÇECEKLER </h2>
            </div>
            <div className='list1'>
              <div className='list1-items'>
                {mesrubat.map((item) => (
                  <p>{item.item}</p>
                ))}
              </div>
              <div className='list1-price'>
                {mesrubat.map((item) => (
                  <p>{item.price} ₺</p>
                ))}
              </div>
            </div>
          </div>
          <div className='list1-container'>
            <div className='list1-header'>
              <h2>YENİ RAKI</h2>
            </div>
            <div className='list1'>
              <div className='list1-items'>
                {yeniraki.map((item) => (
                  <p>{item.item}</p>
                ))}
              </div>
              <div className='list1-price'>
                {yeniraki.map((item) => (
                  <p>{item.price} ₺</p>
                ))}
              </div>
            </div>
          </div>
          <div className='list1-container'>
            <div className='list1-header'>
              <h2>BEYLERBEYİ</h2>
            </div>
            <div className='list1'>
              <div className='list1-items'>
                {beyler.map((item) => (
                  <p>{item.item}</p>
                ))}
              </div>
              <div className='list1-price'>
                {beyler.map((item) => (
                  <p>{item.price} ₺</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
