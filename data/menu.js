/* ============================================================================
   SAMARKAND RESTAURANT — МЕНЮ
   ----------------------------------------------------------------------------
   ЧТОБЫ ПОМЕНЯТЬ ЦЕНУ — правь только число в поле price. Больше ничего.
   Вёрстка перестроится сама.

   ПОЛЯ БЛЮДА:
     id       — уникальный ключ (латиницей). Не менять.
     en / ru  — название на английском и русском
     desc     — описание (ТОЛЬКО на английском — требование ТЗ)
     price    — число в долларах. null → на сайте появится «Уточняйте»
     unit     — "pc" (цена за штуку)
     variants — несколько размеров одной позиции (Small / Large и т.п.)
     img      — имя файла в assets/img/dishes/. Нет файла → орнаментальный
                плейсхолдер, вёрстка не ломается.
     tags     — "veg" (вегетарианское), "spicy" (острое), "signature" (хит),
                "new" (новинка — помечено значком NEW в печатном меню)

   ИСТОЧНИК ЦЕН: фотографии печатного меню Registan Kebab House,
   загруженные в репозиторий Samarkand 16.08.2026. Использованы ОБНОВЛЁННЫЕ
   страницы (Entree.1.Updated, Resgistan.1.updated) — цены на горячее и шашлык
   там выше, чем на старых листах.
   ========================================================================== */

window.SAMARKAND_MENU = [

  /* ==============================================================  SALADS  */
  {
    id: "salads",
    en: "Salads",
    ru: "Салаты",
    items: [
      {
        id: "achchik-chuchuk",
        en: "Achchik Chuchuk",
        ru: "Аччик-чучук",
        desc: "Sliced tomato, onions, and spices.",
        price: 5,
        variants: [
          { en: "Small", ru: "Маленький", price: 5 },
          { en: "Large", ru: "Большой",   price: 8 }
        ],
        img: "achchik-chuchuk.jpg",
        tags: ["veg", "spicy", "signature"]
      },
      {
        id: "garden-salad",
        en: "Garden Salad",
        ru: "Овощной салат",
        desc: "Romaine lettuce, tomatoes, cucumber, green, red, yellow peppers, and onions, dressed with salt, oil, and vinegar.",
        price: 8,
        variants: [
          { en: "Small", ru: "Маленький", price: 8 },
          { en: "Large", ru: "Большой",   price: 11 }
        ],
        img: "garden-salad.jpg",
        tags: ["veg"]
      },
      {
        id: "greek-salad",
        en: "Greek Salad",
        ru: "Греческий салат",
        desc: "Romaine lettuce, tomatoes, cucumber, red pepper, feta cheese, black olives, and onions.",
        price: 8,
        variants: [
          { en: "Small", ru: "Маленький", price: 8 },
          { en: "Large", ru: "Большой",   price: 12 }
        ],
        img: "greek-salad.jpg",
        tags: ["veg"]
      },
      {
        id: "olivier-salad",
        en: "Olivier Salad",
        ru: "Оливье",
        desc: "Combination of boiled vegetables, eggs, beef and green peas served in mayo.",
        price: 13,
        img: "olivier-salad.jpg"
      },
      {
        id: "samarkand-salad",
        en: "Samarkand Salad",
        ru: "Салат «Самарканд»",
        desc: "Fresh vegetables and peppers, with pickles, mushrooms and boiled beef. Served with balsamic vinegar.",
        price: 15,
        img: "samarkand-salad.jpg",
        // "signature" вернуть, когда появится фото: блок на главной берёт
        // именно хиты, а карточка без снимка там выглядит пустой.
        tags: ["new"]
      },
      {
        id: "chicken-salad",
        en: "Chicken Salad",
        ru: "Куриный салат",
        desc: "Boiled chicken and eggs mixed with cheese fried shredded potatoes.",
        price: 14,
        img: "chicken-salad.jpg",
        tags: ["new"]
      },
      {
        id: "pickled-platter",
        en: "Pickled Platter",
        ru: "Соленья",
        desc: "An assortment of red cabbage, cucumber, tomato, and cauliflowers.",
        price: 12,
        img: "pickled-platter.jpg",
        tags: ["veg"]
      },
      {
        id: "cucumber-yogurt",
        en: "Cucumber Yogurt",
        ru: "Огурцы с йогуртом",
        desc: "Fresh plain yogurt mixed with chopped cucumbers, dry mint, and salt. Contains dairy.",
        price: 5,
        img: "cucumber-yogurt.jpg",
        tags: ["veg"]
      },
      {
        id: "carrot-salad",
        en: "Carrot Salad",
        ru: "Морковча",
        desc: "Fresh shredded carrot with spices.",
        price: 6,
        img: "carrot-salad.jpg",
        tags: ["veg", "spicy"]
      }
    ]
  },

  /* ===============================================================  SOUPS  */
  {
    id: "soups",
    en: "Soups",
    ru: "Супы",
    items: [
      {
        id: "lagman",
        en: "Lagman",
        ru: "Лагман",
        desc: "Egg noodles with vegetables. Braised beef in rich beef stock.",
        price: 11,
        img: "lagman.jpg",
        tags: ["signature"]
      },
      {
        id: "shurpa",
        en: "Shurpa",
        ru: "Шурпа",
        desc: "Slowly cooked beef, tomatoes, vegetables and chickpeas.",
        price: 11,
        img: "shurpa.jpg",
        tags: ["signature"]
      },
      {
        id: "mastava",
        en: "Mastava",
        ru: "Мастава",
        desc: "Braised beef mixed with vegetables and rice in beef broth.",
        price: 11,
        img: "mastava.jpg"
      },
      {
        id: "borsh",
        en: "Borsh",
        ru: "Борщ",
        desc: "A traditional Ukrainian recipe with slow cooked beets, beef and vegetables.",
        price: 11,
        img: "borsh.jpg"
      },
      {
        id: "holodetz",
        en: "Holodetz",
        ru: "Холодец",
        desc: "Beef jelly with savory bone broth.",
        price: 11,
        img: "holodetz.jpg"
      }
    ]
  },

  /* ========================================================  MAIN COURSES  */
  {
    id: "mains",
    en: "Main Courses",
    ru: "Горячее",
    items: [
      {
        id: "uzbek-plov",
        en: "Uzbek Plov",
        ru: "Плов",
        desc: "The most traditional Uzbek entree made from special rice, beef, carrot and chickpeas.",
        price: 17,
        img: "uzbek-plov.jpg",
        tags: ["signature"]
      },
      {
        id: "manti",
        en: "Manti",
        ru: "Манты",
        desc: "Steamed Uzbek dumplings filled with beef, onions and spices. Served with yogurt (4 pc).",
        price: 16,
        img: "manti.jpg",
        tags: ["signature"]
      },
      {
        id: "qurutob",
        en: "Qurutob",
        ru: "Курутоб",
        desc: "Crispy bread with white sour cream, topped with onions fried in flaxseed oil, fresh cucumbers, tomatoes, herbs & slow cooked beef.",
        price: 25,
        img: "qurutob.jpg",
        tags: ["signature"]
      },
      {
        id: "kazon-kabab",
        en: "Kazon Kabab",
        ru: "Казан-кабоб",
        desc: "Marinated beef in spices, roasted potatoes topped with fresh red onions & dill.",
        price: 22,
        img: "kazon-kabob.jpg"
      },
      {
        id: "roasted-cornish",
        en: "Roasted Cornish & Fries",
        ru: "Цыплёнок с картофелем фри",
        desc: "Fried cornish hen served with french fries & tomato sauce.",
        price: 20,
        img: "roasted-cornish.jpg"
      },
      {
        id: "toy-kabeb",
        en: "To'y Kabeb",
        ru: "Той-кабоб",
        desc: "Lamb stew with tomatoes.",
        price: 17,
        img: "toy-kabob.jpg"
      },
      {
        id: "hanum",
        en: "Hanum",
        ru: "Ханум",
        desc: "Steamed fine rolled dough layered with diced potatoes, beef and onions. Served with tomato sauce.",
        price: 16,
        img: "hanum.jpg"
      },
      {
        id: "dolma",
        en: "Dolma",
        ru: "Долма",
        desc: "Grape leaves stuffed with beef, rice, onions and spices. Served with a side of sour cream (6–7 pc).",
        price: 15,
        img: "dolma.jpg"
      }
    ]
  },

  /* ================================================================  GRILL */
  {
    id: "grill",
    en: "Grill / Kebabs",
    ru: "Шашлык",
    items: [
      {
        id: "lyulya-kebab",
        en: "Lyulya Kebab",
        ru: "Люля-кебаб",
        desc: "A traditional premium tender ground beef kebab with choice of side.",
        price: 12,
        img: "lyulya-kebab.jpg",
        tags: ["signature"]
      },
      {
        id: "lamb-kebab",
        en: "Lamb Kebab",
        ru: "Шашлык из баранины",
        desc: "Marinated tender lamb, very soft and juicy, with choice of side.",
        price: 14,
        img: "lamb-kebab.jpg",
        tags: ["signature"]
      },
      {
        id: "beef-kebab",
        en: "Beef Kebab",
        ru: "Шашлык из говядины",
        desc: "Marinated tender beef, very soft and juicy, with choice of side.",
        price: 14,
        img: "beef-kebab.jpg"
      },
      {
        id: "chicken-kebab",
        en: "Chicken Kebab",
        ru: "Шашлык из курицы",
        desc: "Seasoned boneless chicken thighs with choice of side.",
        price: 12,
        img: "chicken-kebab.jpg"
      },
      {
        id: "salmon-kebab",
        en: "Salmon Kebab",
        ru: "Шашлык из лосося",
        desc: "Cubed and marinated salmon, grilled over open coals.",
        price: 12,
        img: "salmon-kebab.jpg"
      },
      {
        id: "lamb-chops",
        en: "Lamb Chops",
        ru: "Бараньи рёбрышки",
        desc: "Marinated tender lamb, very soft and juicy, with choice of side.",
        price: 22,
        img: "lamb-chops.jpg"
      },
      {
        id: "chicken-wings-fries",
        en: "Chicken Wings & Fries",
        ru: "Куриные крылья с фри",
        desc: "Grilled marinated chicken wings & french fries, topped with fresh red onions and dill.",
        price: 15,
        img: "chicken-wings-fries.jpg",
        tags: ["new"]
      },
      {
        id: "kebab-meal",
        en: "Kebab Meal",
        ru: "Кебаб-сет",
        desc: "Beef and chicken kebab with rice on the side.",
        price: 23,
        img: "kebab-meal.jpg"
      },
      {
        id: "combo-mix-kebab",
        en: "Combo Mix Kebab",
        ru: "Ассорти шашлыков",
        desc: "4 skewers of shish kebab — lamb, beef, chicken and lyulya — served with a side of potatoes, tomato and onions.",
        price: 49,
        img: "combo-mix-kebab.jpg",
        tags: ["signature"]
      }
    ]
  },

  /* ==============================================  STARTERS, BREAD & SIDES */
  {
    id: "sides",
    en: "Starters & Sides",
    ru: "Закуски и гарниры",
    items: [
      {
        id: "uzbek-samsa",
        en: "Uzbek Samsa",
        ru: "Самса",
        desc: "Crispy pastry stuffed with lamb, beef, onions and spices. Served with a side of tomato sauce with garlic.",
        price: 4,
        unit: "pc",
        img: "uzbek-samsa.jpg",
        tags: ["signature"]
      },
      {
        id: "non",
        en: "Non (Lepeshka)",
        ru: "Нон (лепёшка)",
        desc: "A flavorful Uzbek bread, baked fresh in the tandoor.",
        price: 5,
        unit: "pc",
        img: "non.jpg",
        tags: ["veg", "signature"]
      },
      {
        id: "fried-potatoes",
        en: "Fried Potatoes",
        ru: "Жареный картофель",
        desc: "Home-style fried potatoes.",
        price: 8,
        img: "fried-potatoes.jpg",
        tags: ["veg"]
      },
      {
        id: "rice",
        en: "Rice",
        ru: "Рис",
        desc: "A side of steamed rice.",
        price: 5,
        img: "rice.jpg",
        tags: ["veg"]
      },
      {
        id: "french-fries",
        en: "French Fries",
        ru: "Картофель фри",
        desc: "A side of crispy french fries.",
        price: 5,
        img: "french-fries.jpg",
        tags: ["veg"]
      }
    ]
  },

  /* ============================================================  DESSERTS  */
  {
    id: "desserts",
    en: "Desserts",
    ru: "Десерты",
    items: [
      {
        id: "medovik",
        en: "Medovik",
        ru: "Медовик",
        desc: "A rich cake with several layers of honey, cream & caramel.",
        price: 6,
        unit: "pc",
        img: "medovik.jpg",
        tags: ["veg", "signature"]
      },
      {
        id: "paklava",
        en: "Paklava",
        ru: "Пахлава",
        desc: "Middle Eastern pastry, baked with walnut & raisins. Contains nuts.",
        price: 5,
        unit: "pc",
        img: "paklava.jpg",
        tags: ["veg"]
      }
    ]
  },

  /* ==============================================================  DRINKS  */
  {
    id: "drinks",
    en: "Drinks",
    ru: "Напитки",
    items: [
      {
        id: "compot",
        en: "Compot",
        ru: "Компот",
        desc: "Homemade punch made with seasonal fresh fruits.",
        price: 4,
        variants: [
          { en: "Cup",     ru: "Стакан", price: 4 },
          { en: "Pitcher", ru: "Кувшин", price: 10 }
        ],
        img: "compot.jpg",
        tags: ["veg", "signature"]
      },
      {
        id: "sweet-tea",
        en: "Sweet Tea with Lemon",
        ru: "Чай с лимоном",
        desc: "Brewed sweet tea served with fresh lemon.",
        price: 6,
        variants: [
          { en: "Small", ru: "Маленький", price: 6 },
          { en: "Large", ru: "Большой",   price: 8 }
        ],
        img: "sweet-tea.jpg",
        tags: ["veg"]
      },
      {
        id: "ayran",
        en: "Ayran",
        ru: "Айран",
        desc: "Chilled yogurt drink. Contains dairy.",
        price: 3,
        img: "ayran.jpg",
        tags: ["veg"]
      },
      {
        id: "kefir",
        en: "Kefir",
        ru: "Кефир",
        desc: "Cultured yogurt drink. Contains dairy.",
        price: 2,
        img: "kefir.jpg",
        tags: ["veg"]
      },
      {
        id: "coffee",
        en: "Coffee",
        ru: "Кофе",
        desc: "Freshly brewed coffee.",
        price: 4,
        img: "coffee.jpg",
        tags: ["veg"]
      },
      {
        id: "soda",
        en: "Soda",
        ru: "Газировка",
        desc: "Sprite or Coca-Cola.",
        price: 3,
        img: "soda.jpg",
        tags: ["veg"]
      },
      {
        id: "bottled-soda",
        en: "Bottled Soda",
        ru: "Газировка в бутылке",
        desc: "Bottled soft drink.",
        price: 5,
        img: "bottled-soda.jpg",
        tags: ["veg"]
      },
      {
        id: "sparkling-water",
        en: "Sparkling Water",
        ru: "Газированная вода",
        desc: "Chilled sparkling water.",
        price: 3,
        img: "sparkling-water.jpg",
        tags: ["veg"]
      }
    ]
  }
];
