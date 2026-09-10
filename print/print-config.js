/* ============================================================================
   SAMARKAND RESTAURANT — печатное меню (дизайн по референсу владельца)
   ----------------------------------------------------------------------------
   Здесь правятся ТОЛЬКО тексты и контакты. Цены и блюда берутся из
   ../data/menu.js — того же файла, что использует сайт.
   ========================================================================== */

window.SAMARKAND_PRINT = {
  brandTop:  "Samarkand",              // строка в самом верху каждой страницы

  phonePrimary:   "(720) 620-7819",
  phoneSecondary: "(720) 939-0098",     // ⚠ со старого меню Registan — проверить, что рабочий
  address:  "1842 S Parker Rd, Denver, CO 80231",
  website:  "samarkandenver.com",

  allergyBody:
    "Please tell your server about any food allergies or dietary restrictions before " +
    "placing your order. Our kitchen prepares dishes containing nuts, gluten, dairy, " +
    "eggs, sesame and fish in shared cooking spaces.",

  coverTagline: "Uzbek & Tajik Cuisine",
  coverCity: "Denver, Colorado",
  coverHalal: "All meat is Halal certified",
  coverNoAlcohol: "We do not serve alcohol",

  // Порядок категорий — как на сайте. Заголовок страницы = cat.en из menu.js,
  // здесь можно переопределить только если нужно другое название для печати.
  categoryTitles: {
    salads: "Salads",
    soups: "Soups",
    mains: "Main Courses",
    grill: "From the Grill",
    sides: "Starters & Sides",
    desserts: "Desserts",
    drinks: "Drinks"
  },

  // Сколько блюд стараемся уместить на одну страницу (сетка 3 колонки,
  // как в примере владельца — до 3 рядов по 3 = 9 блюд на лист).
  // Категории меньше targetPerPage объединяются с соседней категорией
  // на одной странице, чтобы не оставлять почти пустой лист.
  targetPerPage: 9,
  mergeThreshold: 3,

  // Явно указываем, к какой категории подшивать маленькие разделы —
  // иначе они цепляются к «последней странице по порядку», а не
  // к той, где реально есть свободное место, и страница переполняется.
  mergeInto: {
    desserts: "sides"
  }
};
