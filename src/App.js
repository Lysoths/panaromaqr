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
              <h2>KAHVALTI</h2>
            </div>
            <div className='list1'>
              {kahvalti.map((item) => (
                <div className='list1-items'>
                  <p>{item.item} </p>
                  <p>{item.price} ₺</p>
                </div>
              ))}
            </div>
          </div>
          <div className='list1-container'>
            <div className='list1-header'>
              <h2>BAŞLANGIÇ</h2>
            </div>
            <div className='list1'>
              {baslangic.map((item) => (
                <div className='list1-items'>
                  <p>{item.item} </p>
                  <p>{item.price} ₺</p>
                </div>
              ))}
            </div>
          </div>
          <div className='list1-container'>
            <div className='list1-header'>
              <h2>ANA YEMEK (ET ÇEŞİTLERİ)</h2>
            </div>
            <div className='list1'>
              {etcesitleri.map((item) => (
                <div className='list1-items'>
                  <p>{item.item} </p>
                  <p>{item.price} ₺</p>
                </div>
              ))}
            </div>
          </div>
          <div className='list1-container'>
            <div className='list1-header'>
              <h2>ANA YEMEK (BALIK ÇEŞİTLERİ)</h2>
            </div>
            <div className='list1'>
              {denizurunleri.map((item) => (
                <div className='list1-items'>
                  <p>{item.item} </p>
                  <p>{item.price} ₺</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='middle'></div>
        <div className='right-side'>
          <div className='list1-container'>
            <div className='list1-header'>
              <h2>ALKOLSÜZ İÇECEKLER</h2>
            </div>
            <div className='list1'>
              {mesrubat.map((item) => (
                <div className='list1-items'>
                  <p>{item.item} </p>
                  <p>{item.price} ₺</p>
                </div>
              ))}
            </div>
          </div>
          <div className='list1-container'>
            <div className='list1-header'>
              <h2>BİRA</h2>
            </div>
            <div className='list1'>
              {bira.map((item) => (
                <div className='list1-items'>
                  <p>{item.item} </p>
                  <p>{item.price} ₺</p>
                </div>
              ))}
            </div>
          </div>
          <div className='list1-container'>
            <div className='list1-header'>
              <h2>YENİ RAKI</h2>
            </div>
            <div className='list1'>
              {yeniraki.map((item) => (
                <div className='list1-items'>
                  <p>{item.item} </p>
                  <p>{item.price} ₺</p>
                </div>
              ))}
            </div>
          </div>
          <div className='list1-container'>
            <div className='list1-header'>
              <h2>TEKİRDAĞ RAKI</h2>
            </div>
            <div className='list1'>
              {tekirdag.map((item) => (
                <div className='list1-items'>
                  <p>{item.item} </p>
                  <p>{item.price} ₺</p>
                </div>
              ))}
            </div>
          </div>
          <div className='list1-container'>
            <div className='list1-header'>
              <h2>EFE RAKI</h2>
            </div>
            <div className='list1'>
              {efe.map((item) => (
                <div className='list1-items'>
                  <p>{item.item} </p>
                  <p>{item.price} ₺</p>
                </div>
              ))}
            </div>
          </div>
          <div className='list1-container'>
            <div className='list1-header'>
              <h2>BEYLERBEYİ RAKI</h2>
            </div>
            <div className='list1'>
              {beyler.map((item) => (
                <div className='list1-items'>
                  <p>{item.item} </p>
                  <p>{item.price} ₺</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
