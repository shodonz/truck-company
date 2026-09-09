#!/usr/bin/env bash
# =============================================================================
#  Samarkand Restaurant — загрузка фотографий с Google Drive
# -----------------------------------------------------------------------------
#  ЗАЧЕМ: фото лежат в общей папке клиента на Google Drive. Этот скрипт качает
#  их и раскладывает под теми именами, которые ждёт сайт.
#
#  КАК ЗАПУСТИТЬ (из корня проекта):
#      bash scripts/fetch-images.sh
#
#  ТРЕБОВАНИЯ: curl. Папка на Drive должна быть открыта «по ссылке».
#  Если какой-то файл не скачался — сайт не сломается: вместо фото появится
#  аккуратный орнаментальный плейсхолдер.
# =============================================================================
set -uo pipefail

DEST_DISHES="assets/img/dishes"
DEST_ROOT="assets/img"
mkdir -p "$DEST_DISHES" "$DEST_ROOT/interior"

download() {
  local id="$1" out="$2"
  if [ -s "$out" ]; then
    echo "  ✓ уже есть: $out"
    return
  fi
  echo "  ↓ $out"
  curl -sSL --fail --max-time 120 \
    "https://drive.google.com/uc?export=download&id=${id}" -o "$out" \
    || { echo "  ✗ не удалось скачать $out (id=$id)"; rm -f "$out"; return; }
  # Drive иногда отдаёт HTML-страницу вместо файла — проверяем
  if head -c 15 "$out" | grep -qi "<!doctype\|<html"; then
    echo "  ✗ Drive вернул HTML вместо картинки: $out — скачай вручную"
    rm -f "$out"
  fi
}

echo "== Главное фото =="
download 1FV40fQfeKUbWQ2_qSduPbzgj2mkbmDcl "$DEST_ROOT/hero.jpg"

echo "== Блюда =="
download 154t6_4hgp1JTCm0imsjYGBi63IeiW5sD "$DEST_DISHES/uzbek-samsa.jpg"
download 1-s0CKqlZj5I966u18TmFqqTA2hGf7grp "$DEST_DISHES/pickled-platter.jpg"
download 15uIgNGc3Igv4KGQjLBne41tG62PLvzZF "$DEST_DISHES/cucumber-yogurt.jpg"

download 1GYDLbjnwXBrZsIJc58C1AYVZZ5TskYpu "$DEST_DISHES/achchik-chuchuk.jpg"
download 19Y688zuI_JnwYxCfy5n0aKPQ8iIkz-ml "$DEST_DISHES/garden-salad.jpg"
download 1E7eg4cg1Cs1K-XHx9lA70iYaYhpPtusl "$DEST_DISHES/greek-salad.jpg"
download 1LhIyOxJIJytDcFG3Q34TtLJ_W66ZfU2x "$DEST_DISHES/olivier-salad.jpg"
download 1-HLXrEMZpVvGaav9WxEpdbuwj23F8I0d "$DEST_DISHES/carrot-salad.jpg"

download 1hZ5nd1ejA6_Kw-sUkCjdTFKLQOZuJ_89 "$DEST_DISHES/shurpa.jpg"
download 17QBDLiNUzUd_-aME7TDC4AQulr4_rNFP "$DEST_DISHES/mastava.jpg"
download 1Gtw7pBmCk3ZZ-2TkHdZ522RsSNkU-B5J "$DEST_DISHES/lagman.jpg"
download 1BBs7SbJvt2vE2F_aBF8DghccdFEfIy51 "$DEST_DISHES/borsh.jpg"

download 12DWtxLJA4Unm8ao-rU9kraTvtcLVy5Dx "$DEST_DISHES/uzbek-plov.jpg"
download 13N3D_towyxXM05AE9TD-NAT9JAiEAeWW "$DEST_DISHES/toy-kabob.jpg"
download 1E0sLSaskqaHsWWbwpzlanyobtApAY_Ls "$DEST_DISHES/manti.jpg"
download 1CUtk5i2fYChNCamDUBh1TTm4iyyxF8KZ "$DEST_DISHES/dolma.jpg"
download 13FZKs6-WPFaHF3UWiOaHowfETh-CkPg2 "$DEST_DISHES/hanum.jpg"
download 1PaJVRyNtUsrEBGH6e7_RvaeHfnbq1Xzs "$DEST_DISHES/qurutob.jpg"
download 1IDCQwDZvYIHw4ClXrXTkXZYuQr7I_koI "$DEST_DISHES/kazon-kabob.jpg"
download 10tB2ApxuJcp6xLtPOQPAN_QuYlak2a6C "$DEST_DISHES/roasted-cornish.jpg"

download 1GffkcwKQoWjyQe8vxZC0mCg52OJGkip4 "$DEST_DISHES/lyulya-kebab.jpg"
download 1A56BuT_RT-ujiLE49kH2pKef-DiW73lu "$DEST_DISHES/lamb-kebab.jpg"
download 10L2l30oYMyFrCQZPYbeYqa7cNxwON6FJ "$DEST_DISHES/chicken-kebab.jpg"
download 18nd1XH6wdIc8_Y228vts7zHoaKlBmvwg "$DEST_DISHES/combo-mix-kebab.jpg"

download 14K8hd1zz4C-8OabU0DdnVMKXjpZ2F6Do "$DEST_DISHES/non.jpg"
download 1B7KHfwh_LPgHQlwzfZa5T5cc5RNRg-uV "$DEST_DISHES/medovik.jpg"

echo
echo "Готово."
echo
echo "ФОТО, КОТОРЫХ НЕТ НА DRIVE (сайт покажет плейсхолдер, пока их не добавят):"
echo "  assets/img/dishes/beef-kebab.jpg      — шашлык из говядины"
echo "  assets/img/dishes/salmon-kebab.jpg    — шашлык из лосося"
echo "  assets/img/dishes/lamb-chops.jpg      — бараньи рёбрышки"
echo "  assets/img/dishes/kebab-meal.jpg      — кебаб-сет"
echo "  assets/img/dishes/rice.jpg            — рис"
echo "  assets/img/dishes/fried-potatoes.jpg  — жареный картофель"
echo "  assets/img/dishes/french-fries.jpg    — картофель фри"
echo "  assets/img/dishes/paklava.jpg         — пахлава"
echo "  assets/img/dishes/compot.jpg и другие напитки"
echo "  assets/img/interior/hall-1.jpg        — зал (для блока «О нас»)"
echo "  assets/img/interior/hall-2.jpg        — зал (для блока «Банкеты»)"
echo "  assets/img/story-registan.jpg         — фото Регистана для страницы «О нас»"
