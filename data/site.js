/* ============================================================================
   SAMARKAND RESTAURANT — конфигурация сайта
   ----------------------------------------------------------------------------
   ЭТО ЕДИНСТВЕННЫЙ ФАЙЛ, КОТОРЫЙ НУЖНО ПРАВИТЬ ДЛЯ СМЕНЫ КОНТАКТОВ,
   ЧАСОВ РАБОТЫ И ССЫЛОК. Код трогать не нужно.
   Формат — обычный объект (как JSON). Правь значения справа от двоеточия.
   ========================================================================== */

window.SAMARKAND_SITE = {

  /* --- Основное ---------------------------------------------------------- */
  name: "Samarkand Restaurant",
  legalName: "Sanat Shokirov",
  // Домен куплен 15.08.2026. Используется в SEO-разметке и sitemap.
  canonical: "https://samarkandenver.com",

  /* --- Контакты ---------------------------------------------------------- */
  phone: "+17206207819",          // формат для tel:
  phoneDisplay: "(720) 620-7819", // как показывать на сайте
  whatsapp: "17206207819",        // формат для wa.me — без + и пробелов
  email: "samarkand.den@gmail.com",

  /* --- Адрес ------------------------------------------------------------- */
  address: {
    street: "1842 S Parker Rd",
    city: "Denver",
    state: "CO",
    zip: "80231",
    country: "US",
    lat: 39.6834987,
    lng: -104.8808459
  },
  // Ссылка «Проложить маршрут»
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Samarkand+Restaurant,+1842+S+Parker+Rd,+Denver,+CO+80231",
  // Встроенная карта (iframe), работает без API-ключа.
  // Метку ставим по точным координатам ресторана, а не по адресу дома:
  // по адресу Google ставил булавку в центр парковки, мимо входа.
  mapEmbedUrl: "https://maps.google.com/maps?q=39.6834987,-104.8808459(Samarkand+Restaurant)&t=&z=18&ie=UTF8&iwloc=B&output=embed",

  /* --- Часы работы -------------------------------------------------------
     Понедельник — выходной. Вторник–воскресенье 12:00–22:00.
     open/close в 24-часовом формате "HH:MM". null = закрыто.
     Индикатор «Открыто сейчас» считается по времени Денвера автоматически. */
  timezone: "America/Denver",
  hours: [
    { day: 0, key: "sun", open: "12:00", close: "22:00" },
    { day: 1, key: "mon", open: null,    close: null    },
    { day: 2, key: "tue", open: "12:00", close: "22:00" },
    { day: 3, key: "wed", open: "12:00", close: "22:00" },
    { day: 4, key: "thu", open: "12:00", close: "22:00" },
    { day: 5, key: "fri", open: "12:00", close: "22:00" },
    { day: 6, key: "sat", open: "12:00", close: "22:00" }
  ],

  /* --- Зал --------------------------------------------------------------- */
  seats: 40,
  tableSizes: [2, 4, 6],   // варианты столов для формы бронирования
  priceRange: "$$",        // средний чек $30–45 на человека

  /* --- Сервисы доставки ---------------------------------------------------
     Grubhub и Seamless убраны — рабочих ссылок нет.
     Когда клиент подключит Grubhub, добавь сюда объект и он появится на сайте:
     { id:"grubhub", label:"Grubhub", url:"https://...", accent:"#F63440" }   */
  delivery: [
    {
      id: "doordash",
      label: "DoorDash",
      accent: "#EF2A32",
      url: "https://www.doordash.com/store/registan-kebab-house-denver-40743681/96871817/?pickup=true&utm_campaign=gpa"
    },
    {
      id: "ubereats",
      label: "Uber Eats",
      accent: "#06C167",
      url: "https://www.ubereats.com/store/registan-kebab-house/Ws9cPrsvRVKWD_NHyEs9XQ?diningMode=PICKUP"
    }
  ],

  /* --- Соцсети и отзывы -------------------------------------------------- */
  social: {
    instagram: "https://www.instagram.com/samarkand.den/",
    facebook: "",   // впиши, когда страница будет настроена
    yelp: "https://www.yelp.com/biz/registan-kebab-house-denver",
    google: "https://maps.app.goo.gl/CKz3HHcm7onSx2qS9"
  },

  /* --- Hero ---------------------------------------------------------------
     Видео решили не снимать. Если позже снимете — положите файл в
     assets/video/hero.mp4 и впишите путь в heroVideo. Сайт сам переключится
     на видео и оставит фото как poster. */
  heroImage: "assets/img/hero.jpg",
  heroVideo: null,

  /* --- Преимущества («Почему мы») ----------------------------------------
     Все пункты подтверждены владельцем: халяль, казан/тандыр, ручная лепка,
     большой зал, без алкоголя, бесплатная парковка, Wi-Fi, детское меню,
     оплата картой. enabled:false скрывает пункт, не удаляя его. */
  amenities: [
    { id: "halal",    icon: "halal",   enabled: true  },
    { id: "kazan",    icon: "flame",   enabled: true  },
    { id: "handmade", icon: "hands",   enabled: true  },
    { id: "family",   icon: "table",   enabled: true  },
    { id: "noalcohol",icon: "leaf",    enabled: true  },
    { id: "parking",  icon: "car",     enabled: true  },
    { id: "wifi",     icon: "wifi",    enabled: true  },
    { id: "kids",     icon: "kids",    enabled: true  },
    { id: "cards",    icon: "card",    enabled: true  }
  ],

  /* --- Отзывы -------------------------------------------------------------
     Реальные отзывы гостей. Формат: { author, rating, text, source }.
     ВНИМАНИЕ: имена сопоставлены с текстами по порядку исходного списка
     (17 имён на 17 отзывов). Сверь пары с Google перед публикацией —
     чужое имя под чужим отзывом лучше не показывать.
     Пустой массив полностью скрывает секцию отзывов. */
  reviews: [
    {
      author: "Bota Tolebek",
      rating: 5,
      source: "Google",
      text: "Incredible food, no words needed. Customer service and communication are top-notch. I'm a truck driver and ordered food in advance for 11 PM, even though they close at 10 PM — they still delivered it, and even threw in a free bonus. Thank you to everyone!"
    },
    {
      author: "Margarita Litvak",
      rating: 5,
      source: "Google",
      text: "Incredible tandoor samsa, just like in Uzbekistan! I've tried samsa in New York, Chicago, California, and many other places, and nothing compares to this. The plov and samsa are on another level — true tandoor style!"
    },
    {
      author: "Shlomo Malka",
      rating: 5,
      source: "Google",
      text: "There are a lot of restaurants around, but Samarkand is something out of a fairy tale — a real feast, like a magic tablecloth covered in incredible dishes, salads, fruits and vegetables, drinks, heavenly tea and coffee, and service that feels almost magical."
    },
    {
      author: "Toby Rafa",
      rating: 5,
      source: "Google",
      text: "The lamb shashlik was outstanding. The meat was tender and full of flavor, and the onions added a nice crunch. The honey cake for dessert was moist and the perfect way to end the meal."
    },
    {
      author: "Hanlu Doyle",
      rating: 5,
      source: "Google",
      text: "The manti, samsa, and kebab were all so delicious. Amazing food, no complaints at all. The owners are incredibly hospitable people. We'll definitely come back."
    },
    {
      author: "Rich Brilli",
      rating: 5,
      source: "Google",
      text: "Genuinely delicious! Portions are huge! The place is spotless! The staff, especially our waitress Alena, were amazing!!! I recommend it to everyone!"
    },
    {
      author: "eugene emelyanov",
      rating: 5,
      source: "Google",
      text: "I loved this place, prices included, and it was spotlessly clean inside. Great for anyone who drives trucks for a living, especially after a long haul. Great food and wonderful people."
    },
    {
      author: "Heather Wheeler",
      rating: 5,
      source: "Google",
      text: "The food was delicious and the prices were fair. We ordered borscht, pelmeni, and a shashlik and kebab combo platter. We loved everything! The kebab practically melted in your mouth!"
    },
    {
      author: "Eranna Amanova",
      rating: 5,
      source: "Google",
      text: "Wonderful food!!! The lamb shashlik is delicious! The shurpa is great too! Everything lives up to the restaurant's name. Most importantly, I left full and happy."
    }
  ],

  /* --- Галерея -------------------------------------------------------------
     Файлы лежат в assets/img/interior/. Порядок в массиве = порядок на сайте.
     Пустой массив полностью скрывает секцию галереи. */
  gallery: [
    "g-tandoor.jpg",
    "g-grill.jpg",
    "g-banquet-1.jpg",
    "g-samsa.jpg",
    "g-hall-arch.jpg",
    "g-banquet-2.jpg",
    "g-table-set.jpg",
    "hall-1.jpg"
  ]
};
