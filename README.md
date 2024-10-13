# Currency Converter / Döviz Çevirici

This is a simple and interactive web-based currency converter that allows users to convert between various currencies in real time. The application supports multiple languages (English and Turkish) and provides a light/dark theme switch for a better user experience.

Bu, kullanıcıların gerçek zamanlı olarak çeşitli para birimleri arasında dönüşüm yapmasını sağlayan basit ve etkileşimli bir web tabanlı döviz çevirici uygulamasıdır. Uygulama, birden fazla dili (İngilizce ve Türkçe) destekler ve daha iyi bir kullanıcı deneyimi için açık/koyu tema geçişi sağlar.

## Features / Özellikler

- **Real-time Currency Conversion / Gerçek Zamanlı Döviz Dönüşümü**: Converts between different currencies based on the latest exchange rates from the API.  
  API'den alınan en son döviz kurlarına göre farklı para birimleri arasında dönüşüm yapar.
  
- **Multi-language Support / Çok Dilli Destek**: Supports English and Turkish with seamless translations.  
  İngilizce ve Türkçe arasında sorunsuz çeviri yapar.
  
- **Theme Switcher / Tema Değiştirici**: Users can toggle between light and dark modes for better visibility.  
  Kullanıcılar açık ve koyu mod arasında geçiş yapabilirler.
  
- **Responsive Design / Duyarlı Tasarım**: Optimized for various screen sizes, including mobile devices.  
  Mobil cihazlar da dahil olmak üzere çeşitli ekran boyutlarına uygun olarak optimize edilmiştir.

## Technologies Used / Kullanılan Teknolojiler

- **HTML5**: For the structure of the application.  
  Uygulamanın yapısı için.
  
- **CSS3**: For styling and responsive design. A dark theme is also available.  
  Stil ve duyarlı tasarım için. Koyu tema desteği de mevcuttur.
  
- **JavaScript (ES6)**: For fetching exchange rates, handling user inputs, and updating the DOM dynamically.  
  Döviz kurlarını almak, kullanıcı girişlerini işlemek ve DOM'u dinamik olarak güncellemek için.
  
- **External API / Harici API**: Exchange rates are fetched from the [ExchangeRate-API](https://www.exchangerate-api.com/).  
  Döviz kurları [ExchangeRate-API](https://www.exchangerate-api.com/) üzerinden alınır.

## Files / Dosyalar

- `currency_converter.html`: The main HTML file that structures the currency converter interface.  
  Döviz çevirici arayüzünü yapılandıran ana HTML dosyası.
  
- `styles.css`: The stylesheet providing both light and dark theme styles.  
  Hem açık hem de koyu tema stillerini sağlayan stil dosyası.
  
- `script.js`: Contains the logic for fetching exchange rates, performing currency conversion, and handling language/theme changes.  
  Döviz kurlarını almak, döviz dönüşümünü gerçekleştirmek ve dil/tema değişikliklerini işlemek için gereken mantığı içeren dosya.

## Setup and Usage / Kurulum ve Kullanım

1. Clone the repository or download the project files.  
   Depoyu klonlayın veya proje dosyalarını indirin.
   
2. Open the `currency_converter.html` file in your browser.  
   Tarayıcınızda `currency_converter.html` dosyasını açın.
   
3. Select the amount, the currencies to convert from and to, and click the `Convert` button.  
   Miktarı, çevrilecek para birimlerini seçin ve `Çevir` butonuna tıklayın.
   
4. Choose the language and theme from the dropdown menus to customize the interface.  
   Arayüzü kişiselleştirmek için açılır menülerden dil ve tema seçin.

## Future Enhancements / Gelecek Geliştirmeler

- **Historical Exchange Rates / Geçmiş Döviz Kurları**: Add functionality to display and convert using past exchange rates.  
  Geçmiş döviz kurları ile dönüşüm yapma ve görüntüleme işlevi ekleyin.
  
- **Graph Display / Grafik Gösterimi**: Show trends and graphs for selected currency pairs over time.  
  Seçilen para birimlerinin zaman içindeki eğilimlerini ve grafiklerini gösterin.
  
- **Favorites / Favoriler**: Allow users to save and quickly access favorite currency pairs.  
  Kullanıcıların favori döviz çiftlerini kaydedip hızlıca erişebilmesini sağlayın.

## License / Lisans

This project is open-source and available under the [MIT License](LICENSE).  
Bu proje açık kaynaklıdır ve [MIT Lisansı](LICENSE) ile kullanılabilir.
