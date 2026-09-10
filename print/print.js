/* ============================================================================
   Сборка печатного меню: A4-страницы, круглые фото блюд, фон по образцу.
   Источники: ../data/menu.js (блюда и цены) + print-config.js (тексты).
   ========================================================================== */
(function () {
  "use strict";

  var CFG  = window.SAMARKAND_PRINT;
  var MENU = window.SAMARKAND_MENU || [];

  var ICON = {
    dish: '<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="50" r="34"/><circle cx="50" cy="50" r="23"/><path d="M50 27v46M27 50h46"/></svg>',
    orn:  '<svg viewBox="0 0 100 14" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M0 7h35M65 7h35"/><path d="M50 1l6 6-6 6-6-6z"/></svg>'
  };

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function money(v) { return "$" + (Number(v) % 1 === 0 ? Number(v).toFixed(0) : Number(v).toFixed(2)); }

  function pageShell(extraClass) {
    var page = el("div", "page" + (extraClass ? " " + extraClass : ""));
    var bg = new Image();
    bg.className = "page__bg";
    bg.src = "img/bg.jpg";
    bg.alt = "";
    page.appendChild(bg);
    return page;
  }

  /* ---------------------------------------------------- балансировка сетки
     Каждая категория — только на своих страницах, никогда не делится с
     соседней категорией. Если блюд меньше, чем ячеек в сетке, оставшиеся
     места на странице остаются пустыми (не подтягиваем чужие блюда). */
  function paginate(menu, target) {
    var pages = []; // { cat, items }[]
    menu.forEach(function (cat) {
      var items = sortByPhotoAvailability(cat.items);
      var n = items.length;
      var chunks = Math.max(1, Math.ceil(n / target));
      var size = Math.ceil(n / chunks);
      for (var i = 0; i < n; i += size) {
        pages.push({ cat: cat, items: items.slice(i, i + size) });
      }
    });
    return pages;
  }

  /* Блюда с реальным фото — впереди, блюда-заглушки (нет фото) — в конце
     той же категории, чтобы на странице не чередовались фото/пусто/фото. */
  function sortByPhotoAvailability(items) {
    var noPhoto = CFG.noPhotoIds || [];
    var withPhoto = items.filter(function (it) { return noPhoto.indexOf(it.id) === -1; });
    var without   = items.filter(function (it) { return noPhoto.indexOf(it.id) !== -1; });
    return withPhoto.concat(without);
  }

  function dishCard(item) {
    var card = el("div", "card");

    var ring = el("div", "card__ring");
    var photo = el("div", "card__photo");
    var img = new Image();
    img.src = "img/dishes/" + item.img;
    img.alt = item.en;
    img.addEventListener("error", function () {
      img.remove();
      photo.appendChild(el("div", "ph", ICON.dish));
    });
    photo.appendChild(img);
    ring.appendChild(photo);
    card.appendChild(ring);

    var label = el("div", "card__label");
    label.appendChild(el("div", "card__name", item.en));

    var priceHtml;
    if (item.variants && item.variants.length) {
      priceHtml = money(Math.min.apply(null, item.variants.map(function (v) { return v.price; }))) + "<small> +</small>";
    } else if (item.price == null) {
      priceHtml = "<small>market price</small>";
    } else {
      priceHtml = money(item.price) + (item.unit === "pc" ? "<small> / pc</small>" : "");
    }
    label.appendChild(el("div", "card__price", priceHtml));

    if (item.desc) label.appendChild(el("p", "card__desc", item.desc));

    var tags = (item.tags || []).filter(function (t) { return t !== "signature"; });
    if (tags.length) {
      var tw = el("div", "card__tags");
      tags.forEach(function (t) {
        var lbl = t === "veg" ? "Veg" : t === "spicy" ? "Spicy" : t === "new" ? "New" : t;
        tw.appendChild(el("span", "tag tag--" + t, lbl));
      });
      label.appendChild(tw);
    }
    card.appendChild(label);
    return card;
  }

  function footNode() {
    var foot = el("div", "page__foot");
    var inner = el("div", "page__foot-inner");
    inner.appendChild(el("p", "foot-allergy", CFG.allergyBody));
    inner.appendChild(el("div", "foot-contact", CFG.phonePrimary + "   ·   " + CFG.phoneSecondary));
    foot.appendChild(inner);
    return foot;
  }

  function coverPage() {
    var page = pageShell("cover");
    var top = el("div", "page__top");
    top.appendChild(el("div", "brandmark", CFG.brandTop));
    top.appendChild(el("h1", "cover-name", CFG.brandTop));
    top.appendChild(el("p", "cover-tagline", CFG.coverTagline));
    top.appendChild(el("div", "cover-city", CFG.coverCity));

    var badges = el("div", "cover-badges");
    badges.appendChild(el("span", "badge", CFG.coverHalal));
    badges.appendChild(el("span", "badge", CFG.coverNoAlcohol));
    top.appendChild(badges);

    var al = el("div", "cover-allergy");
    al.appendChild(el("h3", null, "Before You Order"));
    al.appendChild(el("p", null, CFG.allergyBody));
    top.appendChild(al);

    page.appendChild(top);
    page.appendChild(footNode());
    return page;
  }

  function menuPage(cat, items) {
    var page = pageShell(null);
    var top = el("div", "page__top");
    top.appendChild(el("div", "brandmark", CFG.brandTop));

    var title = CFG.categoryTitles[cat.id] || cat.en;
    var row = el("div", "cat-row");
    row.appendChild(el("span", "orn", ICON.orn));
    row.appendChild(el("h2", "cat-title", title));
    row.appendChild(el("span", "orn", ICON.orn));
    top.appendChild(row);
    page.appendChild(top);

    var grid = el("div", "grid");
    items.forEach(function (item) { grid.appendChild(dishCard(item)); });
    page.appendChild(grid);

    page.appendChild(footNode());
    return page;
  }


  /* --------------------------------------------------------- авто-подгонка
     Если на странице оказалось многовато блюд (например, после того как
     владелец добавит новые позиции в menu.js), страница плавно ужимается:
     сначала отступы и заголовки, текст описания — в последнюю очередь. */
  function fitPages() {
    document.querySelectorAll(".page").forEach(function (page) {
      var grid = page.querySelector(".grid");
      var overflows = function () {
        return page.scrollHeight > page.clientHeight + 1 ||
               (grid && grid.scrollHeight > grid.clientHeight + 1);
      };
      var fit = 1;
      while (overflows() && fit > 0.72) {
        fit -= 0.02;
        page.style.setProperty("--fit", fit.toFixed(2));
      }
      if (overflows()) {
        var t = page.querySelector(".cat-title");
        console.warn("Не помещается на страницу:", t ? t.textContent : "?",
                     "— стоит разбить категорию на две страницы в print-config.js");
      }
    });
  }

  function build() {
    var root = document.getElementById("root");
    root.appendChild(coverPage());
    paginate(MENU, CFG.targetPerPage).forEach(function (p) {
      root.appendChild(menuPage(p.cat, p.items));
    });
    (document.fonts ? document.fonts.ready : Promise.resolve()).then(fitPages);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
  else build();
})();
