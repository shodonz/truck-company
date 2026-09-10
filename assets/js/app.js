/* ============================================================================
   SAMARKAND RESTAURANT — вся логика сайта
   Зависимости: data/site.js, data/menu.js, data/i18n.js (подключаются раньше)
   ========================================================================== */
(function () {
  "use strict";

  var SITE = window.SAMARKAND_SITE;
  var MENU = window.SAMARKAND_MENU || [];
  var I18N = window.SAMARKAND_I18N;

  /* =========================================================== 1. ИКОНКИ  */
  var ICON = {
    phone:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
    wa:     '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5 0-.2 0-.4-.1-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5 4.5.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.5-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg>',
    globe:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z"/></svg>',
    arrow:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    ext:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>',
    plus:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    check:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m20 6-11 11-5-5"/></svg>',
    close:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    pin:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    clock:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
    mail:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    bag:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 4 6v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6l-2-4z"/><path d="M4 6h16M16 10a4 4 0 0 1-8 0"/></svg>',
    truck:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M1 3h13v13H1zM14 8h4l3 3v5h-7"/><circle cx="5.5" cy="18.5" r="2"/><circle cx="17.5" cy="18.5" r="2"/></svg>',
    star:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3 6.6 7.2.8-5.4 4.9 1.5 7.1L12 17.8 5.7 21.4l1.5-7.1L1.8 9.4l7.2-.8z"/></svg>',
    /* Все три соцсети — сплошной заливкой одного оптического веса.
       Контурные версии, нарисованные вручную, читались хуже и «плясали». */
    ig:     '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.67 1.34 1.08 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.71 2.13-1.38.67-.67 1.08-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.71-1.46-1.38-2.13C21.32 1.35 20.65.94 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.41a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>',
    fb:     '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07z"/></svg>',
    waLine: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 11.6a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.5-4.5a8.4 8.4 0 1 1 15.5-4.4z"/><path d="M9 8.6c.3 0 .5.2.6.5l.6 1.4c.1.3 0 .6-.2.8l-.5.5a7.3 7.3 0 0 0 3.2 3.2l.5-.5c.2-.2.5-.3.8-.2l1.4.6c.3.1.5.3.5.6 0 1-.7 1.7-1.7 1.7A8 8 0 0 1 7.3 10c0-1 .7-1.7 1.7-1.4z"/></svg>',
    /* Для Yelp намеренно берём звезду, а не фирменный «взрыв»: нарисованный
       от руки логотип в круге 18px читался как клякса. Звезда однозначно
       говорит «отзывы», ссылка и aria-label ведут на Yelp. Если нужен
       официальный знак — скачать SVG с yelp.com/brand и подставить сюда. */
    yelp:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2.6 2.9 6 6.5.9-4.7 4.5 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5L2.6 9.5l6.5-.9z"/></svg>',
    /* Иконки преимуществ */
    halal:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5.5v6c0 5 3.4 9.2 8 10.5 4.6-1.3 8-5.5 8-10.5v-6z"/><path d="m8.6 12 2.3 2.3 4.5-4.6"/></svg>',
    flame:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c3.9 0 6.5-2.6 6.5-6.2 0-4.6-4.6-6.3-3.6-11.8-2.8 1-5 3.4-5 6.4 0 1.4-1 2-1.7 1.3-.8-.7-.9-2-.9-2A7.9 7.9 0 0 0 5.5 15c0 3.9 2.6 7 6.5 7z"/></svg>',
    hands:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 11V5.5a1.5 1.5 0 0 1 3 0V11m0-1V4.5a1.5 1.5 0 0 1 3 0V10m0 0V5.5a1.5 1.5 0 0 1 3 0V11m0 0V7.5a1.5 1.5 0 0 1 3 0V15a7 7 0 0 1-7 7h-1a7 7 0 0 1-7-7v-2.5a1.5 1.5 0 0 1 3 0V14"/></svg>',
    table:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9h18M5 9v11M19 9v11M4 5h16l1 4H3z"/></svg>',
    leaf:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 3c1 2 2 4.2 2 7a7 7 0 0 1-7 7z"/><path d="M2 21c0-3 1.9-6.3 5-8"/></svg>',
    car:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17h14M3 12h18l-1.6-4.3A2 2 0 0 0 17.5 6h-11a2 2 0 0 0-1.9 1.7z"/><path d="M3 12v5h18v-5"/><circle cx="7" cy="17" r="1.6"/><circle cx="17" cy="17" r="1.6"/></svg>',
    wifi:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M2 8.8a16 16 0 0 1 20 0M5 12.5a11 11 0 0 1 14 0M8.5 16.2a6 6 0 0 1 7 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/></svg>',
    kids:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4.5"/><path d="M4 21a8 8 0 0 1 16 0"/><path d="M10 8h.01M14 8h.01"/></svg>',
    card:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="2" y="5" width="20" height="14" rx="2.5"/><path d="M2 10h20M6 15h4"/></svg>',
    logo:   '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 3 24.8 8.6 32 6.4l-.9 7.5 6.4 4-5.4 5.3 3.1 6.9-7.5.6-2.2 7.2L20 33.4l-5.5 4.5-2.2-7.2-7.5-.6 3.1-6.9L2.5 18l6.4-4L8 6.4l7.2 2.2z"/><circle cx="20" cy="20" r="6.2"/><path d="M20 13.8v12.4M13.8 20h12.4"/></svg>',
    ornament: '<svg viewBox="0 0 240 18" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"><path d="M0 9h86M154 9h86"/><path d="M120 2.5 126.5 9 120 15.5 113.5 9z"/><path d="M104 5.5 107.5 9 104 12.5 100.5 9zM136 5.5 139.5 9 136 12.5 132.5 9z"/><circle cx="92" cy="9" r="1.6"/><circle cx="148" cy="9" r="1.6"/></svg>',
    dish:   '<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="50" r="34"/><circle cx="50" cy="50" r="23"/><path d="M50 27v46M27 50h46M34 34l32 32M66 34 34 66"/></svg>',
    info:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>'
  };

  /* ============================================================= 2. I18N  */
  var STORE_LANG = "samarkand.lang";
  var lang = (function () {
    var q = new URLSearchParams(location.search).get("lang");
    if (q === "ru" || q === "en") return q;
    var saved = null;
    try { saved = localStorage.getItem(STORE_LANG); } catch (e) {}
    if (saved === "ru" || saved === "en") return saved;
    return (navigator.language || "en").toLowerCase().indexOf("ru") === 0 ? "ru" : "en";
  })();

  function t(key) {
    var pack = I18N[lang] || I18N.en;
    return pack[key] != null ? pack[key] : (I18N.en[key] != null ? I18N.en[key] : key);
  }

  function applyI18n() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      // формат: "placeholder:menuPage.search" или "aria-label:nav.call"
      el.getAttribute("data-i18n-attr").split("|").forEach(function (pair) {
        var bits = pair.split(":");
        if (bits.length === 2) el.setAttribute(bits[0].trim(), t(bits[1].trim()));
      });
    });
  }

  function setLang(next) {
    lang = next;
    try { localStorage.setItem(STORE_LANG, lang); } catch (e) {}
    applyI18n();
    renderAll();
    document.dispatchEvent(new CustomEvent("samarkand:lang", { detail: lang }));
  }

  /* ============================================== 3. УТИЛИТЫ / ЧАСЫ РАБОТЫ */
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function money(v) { return "$" + (Number(v) % 1 === 0 ? Number(v).toFixed(0) : Number(v).toFixed(2)); }

  function fmtTime(hhmm) {
    if (!hhmm) return "";
    var p = hhmm.split(":"), h = parseInt(p[0], 10), m = p[1];
    if (lang === "ru") return hhmm;
    var suffix = h >= 12 ? "PM" : "AM";
    var h12 = h % 12 === 0 ? 12 : h % 12;
    return h12 + (m === "00" ? "" : ":" + m) + " " + suffix;
  }

  /** Текущее время в Денвере, независимо от таймзоны посетителя. */
  function denverNow() {
    try {
      var parts = new Intl.DateTimeFormat("en-US", {
        timeZone: SITE.timezone, weekday: "short", hour: "2-digit",
        minute: "2-digit", hour12: false
      }).formatToParts(new Date());
      var map = {};
      parts.forEach(function (p) { map[p.type] = p.value; });
      var days = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
      var hour = parseInt(map.hour, 10) % 24;
      return { day: days[map.weekday], minutes: hour * 60 + parseInt(map.minute, 10) };
    } catch (e) {
      var d = new Date();
      return { day: d.getDay(), minutes: d.getHours() * 60 + d.getMinutes() };
    }
  }

  function toMin(hhmm) { var p = hhmm.split(":"); return parseInt(p[0], 10) * 60 + parseInt(p[1], 10); }

  function openState() {
    var now = denverNow();
    var today = SITE.hours.filter(function (h) { return h.day === now.day; })[0];
    if (today && today.open && now.minutes >= toMin(today.open) && now.minutes < toMin(today.close)) {
      return { open: true, until: today.close };
    }
    // ищем ближайший день с работой
    for (var i = 0; i < 8; i++) {
      var d = (now.day + i) % 7;
      var h = SITE.hours.filter(function (x) { return x.day === d; })[0];
      if (h && h.open && (i > 0 || now.minutes < toMin(h.open))) {
        return { open: false, next: h.open, nextDay: h.key, sameDay: i === 0 };
      }
    }
    return { open: false };
  }

  /* ================================================ 4. WHATSAPP-СООБЩЕНИЯ */
  function waUrl(text) {
    return "https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent(text);
  }

  function buildMessage(data) {
    var L = [];
    if (data.mode === "table")        L.push(t("wa.table"));
    else if (data.mode === "banquet") L.push(t("wa.banquet"));
    else if (data.mode === "pickup")  L.push(t("wa.pickup"));
    else                              L.push(t("wa.general"));

    if (data.items && data.items.length) {
      L.push("", t("wa.order") + ":");
      data.items.forEach(function (it) {
        L.push("• " + it.qty + "x " + it.en + (it.price != null ? "  (" + money(it.price * it.qty) + ")" : ""));
      });
      var sum = data.items.reduce(function (a, it) { return a + (it.price != null ? it.price * it.qty : 0); }, 0);
      if (sum > 0) L.push(t("wa.estimated") + ": ~" + money(sum));
    }

    var f = [];
    if (data.name)   f.push(t("wa.name") + ": " + data.name);
    if (data.time)   f.push(t("wa.time") + ": " + data.time);
    if (data.date)   f.push(t("wa.date") + ": " + data.date);
    if (data.guests) f.push(t("wa.guests") + ": " + data.guests);
    if (data.table)  f.push(t("wa.table_") + ": " + data.table);
    if (data.notes)  f.push(t("wa.notes") + ": " + data.notes);
    if (f.length) { L.push(""); L = L.concat(f); }

    return L.join("\n");
  }

  /* ====================================================== 5. КОРЗИНА (TRAY) */
  var TRAY_KEY = "samarkand.tray";
  var tray = (function () {
    try { return JSON.parse(localStorage.getItem(TRAY_KEY)) || {}; } catch (e) { return {}; }
  })();

  function traySave() {
    try { localStorage.setItem(TRAY_KEY, JSON.stringify(tray)); } catch (e) {}
    renderTrayFab();
  }
  function trayCount() {
    return Object.keys(tray).reduce(function (a, k) { return a + tray[k].qty; }, 0);
  }
  function trayList() {
    return Object.keys(tray).map(function (k) { return tray[k]; });
  }
  function trayAdd(item) {
    if (tray[item.id]) tray[item.id].qty++;
    else tray[item.id] = { id: item.id, en: item.en, ru: item.ru, price: item.price, qty: 1 };
    traySave();
  }
  function trayStep(id, delta) {
    if (!tray[id]) return;
    tray[id].qty += delta;
    if (tray[id].qty <= 0) delete tray[id];
    traySave();
  }

  function renderTrayFab() {
    var fab = document.getElementById("tray-fab");
    if (!fab) return;
    var n = trayCount();
    fab.classList.toggle("is-visible", n > 0);
    var c = fab.querySelector(".tray-fab__count");
    if (c) c.textContent = n;
    var label = fab.querySelector(".tray-fab__label");
    if (label) label.textContent = t("tray.open");
  }

  /* ============================================== 6. ОБЩИЕ БЛОКИ РАЗМЕТКИ */
  function mediaNode(src, alt, cls) {
    var box = el("div", cls);
    if (!src) { box.appendChild(placeholder()); return box; }
    var img = new Image();
    img.src = src;
    img.alt = alt || "";
    img.loading = "lazy";
    img.decoding = "async";
    img.addEventListener("error", function () {
      img.remove();
      box.appendChild(placeholder());
    });
    box.appendChild(img);
    return box;
  }
  function placeholder() { return el("div", "ph", ICON.dish); }

  function tagNodes(tags) {
    if (!tags || !tags.length) return null;
    var wrap = el("div", "tags");
    tags.forEach(function (tg) {
      var label = t("menuPage.filter" + tg.charAt(0).toUpperCase() + tg.slice(1));
      wrap.appendChild(el("span", "tag tag--" + tg, label));
    });
    return wrap;
  }

  function priceNode(item, cls) {
    if (item.price == null) return el("div", cls + " " + cls + "--ask", t("menuPage.askPrice"));
    var unit = item.unit === "pc" ? " <small>/ " + (lang === "ru" ? "шт" : "pc") + "</small>" : "";
    return el("div", cls, money(item.price) + unit);
  }

  function allItems() {
    return MENU.reduce(function (a, c) { return a.concat(c.items); }, []);
  }

  /* ==================================================== 7. РЕНДЕР: ГЛАВНАЯ */
  function renderFactbar() {
    var host = document.getElementById("factbar");
    if (!host) return;
    host.innerHTML = "";
    var st = openState();

    var li1 = el("li");
    li1.innerHTML = ICON.clock;
    var strong = el("span", st.open ? "is-open" : "is-closed",
      st.open ? t("facts.open") : t("facts.closed"));
    li1.appendChild(strong);
    var tail = el("span");
    if (st.open) tail.textContent = " · " + t("facts.until") + " " + fmtTime(st.until);
    else if (st.next) tail.textContent = " · " + t("facts.opensAt") + " " + fmtTime(st.next);
    li1.appendChild(tail);
    host.appendChild(li1);

    host.appendChild(el("li", null, ICON.clock + "<span>" + t("facts.hours") + "</span>"));
    host.appendChild(el("li", null, ICON.halal + "<span>" + t("facts.halal") + "</span>"));
    host.appendChild(el("li", null, ICON.table + "<span>" + t("facts.seats") + "</span>"));

    var li5 = el("li");
    li5.innerHTML = ICON.pin;
    var a = el("a", null, SITE.address.street + ", " + SITE.address.city);
    a.href = SITE.directionsUrl; a.target = "_blank"; a.rel = "noopener";
    li5.appendChild(a);
    host.appendChild(li5);
  }

  function renderPreview() {
    var host = document.getElementById("dish-preview");
    if (!host) return;
    host.innerHTML = "";
    allItems()
      .filter(function (i) { return i.tags && i.tags.indexOf("signature") > -1; })
      .slice(0, 8)
      .forEach(function (item, idx) {
        var card = el("article", "dish-card reveal reveal-d" + (idx % 3 + 1));
        var media = mediaNode(item.img ? "assets/img/dishes/" + item.img : null, item.en, "dish-card__media");
        var tg = tagNodes(item.tags);
        if (tg) media.appendChild(tg);
        card.appendChild(media);

        var body = el("div", "dish-card__body");
        body.appendChild(el("h3", "dish-card__name", item.en));
        body.appendChild(el("div", "dish-card__ru", item.ru));
        body.appendChild(el("p", "dish-card__desc", item.desc));
        var foot = el("div", "dish-card__foot");
        foot.appendChild(priceNode(item, "dish-card__price"));
        var add = el("button", "add-btn", ICON.plus);
        add.type = "button";
        add.setAttribute("aria-label", t("menuPage.add") + ": " + item.en);
        add.addEventListener("click", function () {
          trayAdd(item);
          add.classList.add("is-added"); add.innerHTML = ICON.check;
          setTimeout(function () { add.classList.remove("is-added"); add.innerHTML = ICON.plus; }, 1100);
        });
        foot.appendChild(add);
        body.appendChild(foot);
        card.appendChild(body);
        host.appendChild(card);
      });
    observeReveals();
  }

  function renderDelivery() {
    document.querySelectorAll("[data-delivery-list]").forEach(function (host) {
      host.innerHTML = "";
      SITE.delivery.forEach(function (d) {
        var a = el("a", "partner-btn", "<span>" + d.label + "</span>" + ICON.ext);
        a.href = d.url; a.target = "_blank"; a.rel = "noopener";
        a.style.color = d.accent;
        a.setAttribute("data-analytics", "delivery-" + d.id);
        host.appendChild(a);
      });
    });
  }

  function renderAmenities() {
    var host = document.getElementById("why-grid");
    if (!host) return;
    host.innerHTML = "";
    SITE.amenities.filter(function (a) { return a.enabled; }).forEach(function (a, idx) {
      var item = el("div", "why-item reveal reveal-d" + (idx % 3 + 1));
      item.appendChild(el("div", "why-item__icon", ICON[a.icon] || ICON.star));
      var body = el("div");
      body.appendChild(el("h3", null, t("amenity." + a.id + ".title")));
      body.appendChild(el("p", null, t("amenity." + a.id + ".text")));
      item.appendChild(body);
      host.appendChild(item);
    });
    observeReveals();
  }

  function renderReviews() {
    var section = document.getElementById("reviews");
    if (!section) return;
    var host = document.getElementById("review-grid");
    if (!SITE.reviews || !SITE.reviews.length) { section.hidden = true; return; }
    section.hidden = false;
    host.innerHTML = "";
    SITE.reviews.forEach(function (r) {
      var card = el("blockquote", "review reveal");
      card.appendChild(el("div", "review__stars", "★★★★★".slice(0, r.rating)));
      card.appendChild(el("p", "review__text", "“" + r.text + "”"));
      // Имя автора может быть ещё не заполнено — тогда строку не рисуем,
      // чтобы не оставлять пустое место под текстом.
      if (r.author) card.appendChild(el("div", "review__author", r.author));
      card.appendChild(el("div", "review__source", r.source));
      host.appendChild(card);
    });
    observeReveals();
  }

  function renderGallery() {
    var section = document.getElementById("gallery");
    if (!section) return;
    var host = document.getElementById("gallery-grid");
    if (!SITE.gallery || !SITE.gallery.length) { section.hidden = true; return; }
    section.hidden = false;
    host.innerHTML = "";
    SITE.gallery.forEach(function (src) {
      var btn = el("button");
      btn.type = "button";
      var img = new Image();
      img.src = "assets/img/interior/" + src; img.alt = ""; img.loading = "lazy";
      btn.appendChild(img);
      btn.addEventListener("click", function () { openLightbox(img.src); });
      host.appendChild(btn);
    });
  }

  function renderHours() {
    var host = document.getElementById("hours-table");
    if (!host) return;
    host.innerHTML = "";
    var todayIdx = denverNow().day;
    var order = [1, 2, 3, 4, 5, 6, 0]; // с понедельника
    order.forEach(function (d) {
      var h = SITE.hours.filter(function (x) { return x.day === d; })[0];
      if (!h) return;
      var tr = el("tr", h.day === todayIdx ? "is-today" : null);
      tr.appendChild(el("td", null, t("day." + h.key)));
      tr.appendChild(el("td", h.open ? null : "closed",
        h.open ? fmtTime(h.open) + " – " + fmtTime(h.close) : t("day.closed")));
      host.appendChild(tr);
    });
  }

  /* ==================================================== 8. РЕНДЕР: МЕНЮ */
  var filterState = { cat: "all", tag: "all", q: "" };

  function renderMenuPage() {
    var host = document.getElementById("menu-root");
    if (!host) return;

    // Категории-чипсы
    var catRow = document.getElementById("cat-row");
    if (catRow) {
      catRow.innerHTML = "";
      var mkChip = function (id, label) {
        var b = el("button", "chip" + (filterState.cat === id ? " is-active" : ""), label);
        b.type = "button";
        b.addEventListener("click", function () {
          filterState.cat = id;
          renderMenuPage();
          if (id !== "all") {
            var target = document.getElementById("cat-" + id);
            if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
        return b;
      };
      catRow.appendChild(mkChip("all", t("menuPage.filterAll")));
      MENU.forEach(function (c) { catRow.appendChild(mkChip(c.id, lang === "ru" ? c.ru : c.en)); });
    }

    // Теги-фильтры
    document.querySelectorAll("[data-tag-filter]").forEach(function (b) {
      b.classList.toggle("is-active", filterState.tag === b.getAttribute("data-tag-filter"));
    });

    var q = filterState.q.trim().toLowerCase();
    host.innerHTML = "";
    var shown = 0;

    MENU.forEach(function (cat) {
      if (filterState.cat !== "all" && filterState.cat !== cat.id) return;

      var items = cat.items.filter(function (i) {
        if (filterState.tag !== "all" && (!i.tags || i.tags.indexOf(filterState.tag) === -1)) return false;
        if (!q) return true;
        return (i.en + " " + i.ru + " " + (i.desc || "")).toLowerCase().indexOf(q) > -1;
      });
      if (!items.length) return;
      shown += items.length;

      var sec = el("section", "menu-section");
      sec.id = "cat-" + cat.id;

      var head = el("div", "menu-section__head");
      head.appendChild(el("h2", null, lang === "ru" ? cat.ru : cat.en));
      head.appendChild(el("span", null, lang === "ru" ? cat.en : cat.ru));
      sec.appendChild(head);

      var list = el("div", "menu-list");
      items.forEach(function (item) { list.appendChild(menuItemNode(item)); });
      sec.appendChild(list);
      host.appendChild(sec);
    });

    if (!shown) host.appendChild(el("p", "menu-empty", t("menuPage.empty")));
  }

  function menuItemNode(item) {
    var row = el("article", "menu-item");

    var media = mediaNode(item.img ? "assets/img/dishes/" + item.img : null, item.en, "menu-item__media");
    media.addEventListener("click", function () {
      var img = media.querySelector("img");
      if (img) openLightbox(img.src);
    });
    row.appendChild(media);

    var body = el("div", "menu-item__body");

    var top = el("div", "menu-item__top");
    var names = el("div");
    names.appendChild(el("div", "menu-item__name", item.en));
    names.appendChild(el("div", "menu-item__ru", item.ru));
    top.appendChild(names);
    top.appendChild(priceNode(item, "menu-item__price"));
    body.appendChild(top);

    if (item.desc) body.appendChild(el("p", "menu-item__desc", item.desc));

    if (item.variants && item.variants.length) {
      var vw = el("div", "menu-item__variants");
      item.variants.forEach(function (v) {
        vw.appendChild(el("span", "variant",
          (lang === "ru" ? v.ru : v.en) + " <b>" + money(v.price) + "</b>"));
      });
      body.appendChild(vw);
    }

    var foot = el("div", "menu-item__foot");
    var tg = tagNodes(item.tags);
    foot.appendChild(tg || el("span"));
    var add = el("button", "add-btn", ICON.plus);
    add.type = "button";
    add.setAttribute("aria-label", t("menuPage.add") + ": " + item.en);
    add.addEventListener("click", function () {
      trayAdd(item);
      add.classList.add("is-added"); add.innerHTML = ICON.check;
      setTimeout(function () { add.classList.remove("is-added"); add.innerHTML = ICON.plus; }, 1100);
    });
    foot.appendChild(add);
    body.appendChild(foot);

    row.appendChild(body);
    return row;
  }

  /* ================================================= 9. МОДАЛКА WHATSAPP */
  var modal, modalMode = "pickup";

  function initModal() {
    modal = document.getElementById("wa-modal");
    if (!modal) return;

    modal.querySelector(".modal__backdrop").addEventListener("click", closeModal);
    modal.querySelector(".modal__close").addEventListener("click", closeModal);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { closeModal(); closeLightbox(); }
    });

    modal.addEventListener("input", updatePreview);
    modal.addEventListener("change", function (e) {
      if (e.target.name === "wa-mode") { modalMode = e.target.value; syncModalFields(); }
      updatePreview();
    });

    document.querySelectorAll("[data-wa-open]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        openModal(btn.getAttribute("data-wa-open") || "pickup");
      });
    });

    document.getElementById("wa-send").addEventListener("click", function () {
      window.open(waUrl(currentMessage()), "_blank", "noopener");
    });
    document.getElementById("tray-clear").addEventListener("click", function () {
      tray = {}; traySave(); renderTrayPanel(); updatePreview();
    });

    var fab = document.getElementById("tray-fab");
    if (fab) fab.addEventListener("click", function () { openModal("pickup"); });
  }

  function openModal(mode) {
    modalMode = mode === "delivery" ? "delivery" : mode;
    var radio = modal.querySelector('input[name="wa-mode"][value="' + modalMode + '"]');
    if (radio) radio.checked = true;
    syncModalFields();
    renderTrayPanel();
    updatePreview();
    modal.classList.add("is-open");
    document.body.classList.add("is-locked");
    var first = modal.querySelector("input:not([type=radio]), select");
    if (first) setTimeout(function () { first.focus(); }, 320);
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove("is-open");
    document.body.classList.remove("is-locked");
  }

  /** Показывает только поля, нужные выбранному режиму. */
  function syncModalFields() {
    modal.querySelectorAll("[data-modes]").forEach(function (node) {
      var modes = node.getAttribute("data-modes").split(",");
      node.hidden = modes.indexOf(modalMode) === -1;
    });
    var isDelivery = modalMode === "delivery";
    modal.querySelector("#wa-send").hidden = isDelivery;
    modal.querySelector("#wa-preview-wrap").hidden = isDelivery;
  }

  function renderTrayPanel() {
    var host = document.getElementById("tray-items");
    if (!host) return;
    host.innerHTML = "";
    var items = trayList();

    if (!items.length) {
      host.appendChild(el("div", "tray-empty", t("tray.empty")));
      document.getElementById("tray-total").hidden = true;
      document.getElementById("tray-clear").hidden = true;
      return;
    }
    document.getElementById("tray-clear").hidden = false;

    items.forEach(function (it) {
      var row = el("div", "tray-item");
      row.appendChild(el("div", "tray-item__name",
        "<b>" + (lang === "ru" ? it.ru : it.en) + "</b>"));

      var qty = el("div", "qty");
      var minus = el("button", null, "−"); minus.type = "button";
      minus.setAttribute("aria-label", "−");
      minus.addEventListener("click", function () { trayStep(it.id, -1); renderTrayPanel(); updatePreview(); });
      var num = el("span", null, String(it.qty));
      var plus = el("button", null, "+"); plus.type = "button";
      plus.setAttribute("aria-label", "+");
      plus.addEventListener("click", function () { trayStep(it.id, 1); renderTrayPanel(); updatePreview(); });
      qty.appendChild(minus); qty.appendChild(num); qty.appendChild(plus);
      row.appendChild(qty);

      row.appendChild(el("div", "tray-item__price",
        it.price != null ? money(it.price * it.qty) : "—"));
      host.appendChild(row);
    });

    var sum = items.reduce(function (a, it) { return a + (it.price != null ? it.price * it.qty : 0); }, 0);
    var totalBox = document.getElementById("tray-total");
    totalBox.hidden = false;
    totalBox.innerHTML = "<span>" + t("tray.total") + "</span><span>~" + money(sum) + "</span>";
  }

  function currentMessage() {
    var g = function (id) { var n = document.getElementById(id); return n && !isHiddenField(n) ? n.value.trim() : ""; };
    return buildMessage({
      mode: modalMode,
      items: modalMode === "pickup" ? trayList() : [],
      name: g("wa-name"),
      time: g("wa-time"),
      date: g("wa-date"),
      guests: g("wa-guests"),
      table: g("wa-table"),
      notes: g("wa-notes")
    });
  }
  function isHiddenField(node) {
    var wrap = node.closest("[data-modes]");
    return wrap ? wrap.hidden : false;
  }

  function updatePreview() {
    var pre = document.getElementById("wa-preview");
    if (pre) pre.textContent = currentMessage();
  }

  /* ================================================== 10. ЛАЙТБОКС / UI */
  function openLightbox(src) {
    var lb = document.getElementById("lightbox");
    if (!lb || !src) return;
    lb.querySelector("img").src = src;
    lb.classList.add("is-open");
    document.body.classList.add("is-locked");
  }
  function closeLightbox() {
    var lb = document.getElementById("lightbox");
    if (!lb) return;
    lb.classList.remove("is-open");
    document.body.classList.remove("is-locked");
  }

  var revealObserver;
  function observeReveals() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(function (n) { n.classList.add("is-in"); });
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("is-in"); revealObserver.unobserve(e.target); }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: .12 });
    }
    document.querySelectorAll(".reveal:not(.is-in)").forEach(function (n) { revealObserver.observe(n); });
  }

  function initChrome() {
    // Иконки в статичной разметке
    document.querySelectorAll("[data-icon]").forEach(function (n) {
      n.innerHTML = ICON[n.getAttribute("data-icon")] || "";
    });

    // Шапка при скролле
    var header = document.querySelector(".header:not(.header--solid)");
    if (header) {
      var onScroll = function () { header.classList.toggle("is-stuck", window.scrollY > 24); };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    // Бургер
    var burger = document.getElementById("burger");
    var mnav = document.getElementById("mobile-nav");
    if (burger && mnav) {
      burger.addEventListener("click", function () {
        var open = mnav.classList.toggle("is-open");
        burger.setAttribute("aria-expanded", open ? "true" : "false");
        document.body.classList.toggle("is-locked", open);
      });
      mnav.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          mnav.classList.remove("is-open");
          burger.setAttribute("aria-expanded", "false");
          document.body.classList.remove("is-locked");
        });
      });
    }

    // Переключатель языка — сегментированный EN / RU
    document.querySelectorAll("[data-lang-set]").forEach(function (b) {
      b.addEventListener("click", function () {
        var next = b.getAttribute("data-lang-set");
        if (next !== lang) setLang(next);
      });
    });
    syncLangSwitch();

    // Ссылки телефон/whatsapp/карта
    document.querySelectorAll("[data-href-tel]").forEach(function (a) { a.href = "tel:" + SITE.phone; });
    document.querySelectorAll("[data-href-mail]").forEach(function (a) { a.href = "mailto:" + SITE.email; });
    document.querySelectorAll("[data-href-wa]").forEach(function (a) { a.href = waUrl(t("wa.general")); });
    document.querySelectorAll("[data-href-directions]").forEach(function (a) { a.href = SITE.directionsUrl; });
    document.querySelectorAll("[data-phone-text]").forEach(function (n) { n.textContent = SITE.phoneDisplay; });
    document.querySelectorAll("[data-mail-text]").forEach(function (n) { n.textContent = SITE.email; });
    document.querySelectorAll("[data-address-text]").forEach(function (n) {
      n.textContent = SITE.address.street + ", " + SITE.address.city + ", " +
                      SITE.address.state + " " + SITE.address.zip;
    });
    document.querySelectorAll("[data-year]").forEach(function (n) { n.textContent = new Date().getFullYear(); });

    // Соцсети — скрываем те, для которых нет ссылки
    document.querySelectorAll("[data-social]").forEach(function (a) {
      var url = SITE.social[a.getAttribute("data-social")];
      if (url) { a.href = url; } else { a.hidden = true; }
    });

    // Карта
    var map = document.getElementById("map-iframe");
    if (map) map.src = SITE.mapEmbedUrl;

    // Hero: видео вместо фото, если оно задано
    var heroMedia = document.getElementById("hero-media");
    if (heroMedia) {
      if (SITE.heroVideo) {
        var v = document.createElement("video");
        v.src = SITE.heroVideo; v.poster = SITE.heroImage;
        v.autoplay = true; v.muted = true; v.loop = true; v.playsInline = true;
        heroMedia.appendChild(v);
      } else {
        var hi = new Image();
        hi.src = SITE.heroImage;
        hi.alt = "";
        hi.fetchPriority = "high";
        hi.addEventListener("error", function () {
          hi.remove();
          heroMedia.appendChild(placeholder());
        });
        heroMedia.appendChild(hi);
      }
    }

    // Лайтбокс
    var lb = document.getElementById("lightbox");
    if (lb) {
      lb.addEventListener("click", function (e) { if (e.target !== lb.querySelector("img")) closeLightbox(); });
    }

    // Поиск и фильтры на странице меню
    var search = document.getElementById("menu-search");
    if (search) {
      search.addEventListener("input", function () { filterState.q = search.value; renderMenuPage(); });
    }
    document.querySelectorAll("[data-tag-filter]").forEach(function (b) {
      b.addEventListener("click", function () {
        filterState.tag = b.getAttribute("data-tag-filter");
        renderMenuPage();
      });
    });
  }

  /* =========================================== 11. SCHEMA.ORG (JSON-LD) */
  function injectSchema() {
    var days = { mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday",
                 fri: "Friday", sat: "Saturday", sun: "Sunday" };
    var spec = SITE.hours.filter(function (h) { return h.open; }).map(function (h) {
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "https://schema.org/" + days[h.key],
        opens: h.open, closes: h.close
      };
    });

    var data = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: SITE.name,
      description: I18N.en["about.text"],
      servesCuisine: ["Uzbek", "Tajik", "Central Asian", "Halal"],
      priceRange: SITE.priceRange,
      currenciesAccepted: "USD",
      telephone: SITE.phone,
      email: SITE.email,
      url: SITE.canonical,
      image: SITE.canonical + "/" + SITE.heroImage,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.state,
        postalCode: SITE.address.zip,
        addressCountry: SITE.address.country
      },
      geo: { "@type": "GeoCoordinates", latitude: SITE.address.lat, longitude: SITE.address.lng },
      openingHoursSpecification: spec,
      acceptsReservations: "True",
      sameAs: Object.keys(SITE.social)
        .map(function (k) { return SITE.social[k]; })
        .filter(Boolean),
      hasMenu: {
        "@type": "Menu",
        name: "Samarkand Restaurant Menu",
        hasMenuSection: MENU.map(function (cat) {
          return {
            "@type": "MenuSection",
            name: cat.en,
            hasMenuItem: cat.items.map(function (i) {
              var m = { "@type": "MenuItem", name: i.en, description: i.desc };
              if (i.price != null) {
                m.offers = { "@type": "Offer", price: i.price.toFixed(2), priceCurrency: "USD" };
              }
              return m;
            })
          };
        })
      }
    };

    var s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify(data);
    document.head.appendChild(s);
  }

  /* ======================================================== 12. ЗАПУСК */
  /** Подсвечивает активный язык в сегментированном переключателе. */
  function syncLangSwitch() {
    document.querySelectorAll("[data-lang-set]").forEach(function (b) {
      var on = b.getAttribute("data-lang-set") === lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  function renderAll() {
    syncLangSwitch();
    renderFactbar();
    renderPreview();
    renderDelivery();
    renderAmenities();
    renderReviews();
    renderGallery();
    renderHours();
    renderMenuPage();
    renderTrayFab();
    if (modal && modal.classList.contains("is-open")) { renderTrayPanel(); updatePreview(); }
  }

  function boot() {
    applyI18n();
    initChrome();
    initModal();
    renderAll();
    observeReveals();
    injectSchema();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
