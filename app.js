/* ==========================================================
   KONTAO — site script
   1. Language (English / Khmer)
   2. Hero flavor carousel
   3. Flavor detail tabs
   4. Ticker, reveal, mascot spin
   5. Spotlight videos (lazy Facebook embeds + rail)
   ========================================================== */

/* ---------- 1. Language ---------- */
const KM = {
  'meta.title': 'កូនតោ KONTAO | ខាំមួយមាត់ ពោរពេញក្តីសុខ',
  'meta.desc': 'នំខេកទន់ៗ ស្នូលក្រែមឆ្ងាញ់ ៥ រសជាតិពីកូនតោ។ ចែករំលែកពេលវេលាផ្អែមល្ហែម ហើយតាមដានយើងនៅលើ Facebook និង Instagram។',

  'nav.flavors': 'រសជាតិ',
  'nav.moments': 'ពេលវេលារីករាយ',
  'nav.spotlight': 'វីដេអូពិសេស',
  'nav.hello': 'ទាក់ទងយើង',
  'nav.menu': 'ម៉ឺនុយ',
  'contact.title': 'ទំនាក់ទំនងយើង',
  'contact.social': 'តាមដានយើង',
  'contact.phone': 'ទូរស័ព្ទមកយើង',
  'contact.email': 'អ៊ីមែល',
  'contact.messenger': 'ផ្ញើសារមកយើងតាម Messenger',

  'hero.eyebrow': 'នំឆ្ងាញ់តូចៗ សម្រាប់រាល់ថ្ងៃ',
  'hero.title': 'ខាំមួយមាត់<br>ពោរពេញ<span class="happy">ក្តីសុខ<svg viewBox="0 0 360 35" aria-hidden="true"><path d="M5 15 Q170 45 350 8"/></svg></span><span class="period">។</span>',
  'hero.desc': 'នំខេកទន់ៗ ស្នូលក្រែមឆ្ងាញ់។<br>៥ រសជាតិ ដែលអ្នកនឹងលង់ស្នេហ៍។',
  'hero.cta': 'ស្វែងរករសជាតិរបស់អ្នក',
  'hero.note': 'ក្តីរីករាយ<br>ពេញហោប៉ៅ',
  'hero.stamp1': 'នំតូច',
  'hero.stamp2': 'ញញឹមធំ',
  'hero.spin': 'បង្វិលមើល',
  'hero.prev': 'រសជាតិមុន',
  'hero.next': 'រសជាតិបន្ទាប់',
  'hero.pickKicker': '៥ រសជាតិ ៥ ក្តីសុខ',
  'hero.pick': 'ជ្រើសរើសក្តីសុខរបស់អ្នក។',
  'hero.footnote': 'អារម្មណ៍ល្អ<br>ខ្ចប់យ៉ាងស្រស់ស្អាត។',

  'flavors.kicker': 'ស្គាល់រសជាតិដែលអ្នកនឹងចូលចិត្ត',
  'flavors.title': '៥ រសជាតិ។<br>សប្បាយគ្រប់បែប។',
  'flavors.desc': 'ចង់ញ៉ាំរសផ្លែឈើ? ឬចង់បានសូកូឡា?<br>មានកូនតោ សម្រាប់គ្រប់អារម្មណ៍របស់អ្នក។',
  'flavors.photoLabel': 'ក្តីសុខប្រចាំថ្ងៃរបស់អ្នក',
  'flavors.weight': '៣០ ក្រាម ក្នុងមួយកញ្ចប់',
  'flavors.find': 'សួររកកន្លែងលក់',

  'inside.badge': 'សាកខាំ<br>មួយមាត់!',
  'inside.kicker': 'អាថ៌កំបាំងនៅខាងក្នុង',
  'inside.title': 'ខាងក្រៅទន់។<br>ខាងក្នុងពោរពេញក្តីសុខ។',
  'inside.p1': 'មួយមាត់ដំបូងដ៏ទន់។ ស្នូលក្រែមដ៏ឆ្ងាញ់។ ពេលវេលាតូចមួយ ដែលធ្វើឲ្យថ្ងៃរបស់អ្នកផ្អែមល្ហែមជាងមុន។',
  'inside.p2': 'បើកកញ្ចប់កូនតោមួយ ហើយទុកកន្លែងបន្តិចសម្រាប់ក្តីសុខ។',
  'inside.link': 'ស្វែងរករសជាតិដែលអ្នកចូលចិត្ត',

  'moments.kicker': 'មិត្តល្អ។ នំឆ្ងាញ់។',
  'moments.title': 'ញ៉ាំជាមួយគ្នា<br>សប្បាយជាងមុន។',
  'moments.desc': 'យកមកច្រើន ចែកគ្នាញ៉ាំ។<br>ធ្វើឲ្យថ្ងៃធម្មតា ផ្អែមល្ហែមជាងមុន។',
  'moments.c1k': '01 / ពេលសម្រាកផ្អែមល្ហែម',
  'moments.c1': 'ជួបជុំជជែកលេង។',
  'moments.c2k': '02 / ជជែករករសជាតិឆ្ងាញ់',
  'moments.c2': 'មិត្តដដែល។ រសជាតិសំណព្វថ្មី។',
  'moments.c3k': '03 / ញ៉ាំព្រោះចង់ញ៉ាំ',
  'moments.c3': 'ម្នាក់មួយ គ្រប់គ្នា។',

  'spot.kicker': 'វីដេអូពិសេស',
  'spot.title': 'នំតូចៗ។<br>ព្រឹត្តិការណ៍ធំៗ។',
  'spot.desc': 'ពីរោងចក្ររបស់យើង ដល់ឆាកជាតិ។ មើលកូនតោ នៅក្នុងព្រឹត្តិការណ៍សំខាន់ៗ។',
  'spot.loading': 'កំពុងផ្ទុកវីដេអូ…',
  'spot.fTag': 'ផ្សាយដោយ EATAME',
  'spot.fTitle': 'ចូលមើលរោងចក្រ ដែលផលិតនំកូនតោគ្រប់ដុំ។',
  'spot.fCopy': 'Eatame អ្នកបង្កើតមាតិកាម្ហូបដែលមានស្លាកផ្ទៀងផ្ទាត់ បាននាំអ្នកទស្សនាចូលមើលរោងចក្រទំនើបរបស់ KTH Food នៅកម្ពុជា ហើយទទួលបានការគាំទ្រយ៉ាងច្រើនលើសលប់។',
  'spot.s1': 'ប្រតិកម្ម',
  'spot.s2': 'ការចែករំលែក',
  'spot.s3': 'មតិយោបល់',
  'spot.note': 'ស្ថិតិ Facebook គិតត្រឹមខែវិច្ឆិកា ឆ្នាំ២០២៦',
  'spot.watch': 'មើលនៅលើ Facebook',
  'spot.watchShort': 'មើលនៅលើ Facebook',
  'spot.more': 'ព្រឹត្តិការណ៍ធំៗ ផ្សេងទៀត',
  'spot.prev': 'វីដេអូមុន',
  'spot.next': 'វីដេអូបន្ទាប់',
  'v1.tag': 'ភ្ញៀវកិត្តិយស',
  'v1.title': 'លោកជំទាវបណ្ឌិត ពេជ ចន្ទមុន្នី ហ៊ុន ម៉ាណែត បានអញ្ជើញមកទស្សនាស្តង់ និងទិញនំកូនតោ។',
  'v2.tag': 'លើឆាកជាតិ',
  'v2.title': 'KTH Food ចូលរួមពិធីជួបសំណេះសំណាល និងអាហារពេលល្ងាចសាមគ្គីភាព របស់សហគ្រាសធុនតូច មធ្យម និងសិប្បកម្មកម្ពុជា។',
  'v3.tag': 'ផលិតដោយយកចិត្តទុកដាក់',
  'v3.title': 'ដំណើរការផលិតនំកូនតោ ឆ្លងកាត់ការត្រួតពិនិត្យ និងស្តង់ដារអនាម័យគ្រប់ដំណាក់កាល។',
  'v4.tag': 'ជួបតារា',
  'v4.title': 'ជួបតារា ស្រីនា (Sreynea Nea) ដោយចៃដន្យ នៅស្តង់កូនតោ។',

  'social.kicker': 'រក្សាអារម្មណ៍ល្អជានិច្ច',
  'social.title': 'បន្ថែមកូនតោ<br>បន្តិច ក្នុង<br>ថ្ងៃរបស់អ្នក។',
  'social.desc': 'តាមដានយើង ដើម្បីទទួលបានពេលវេលាផ្អែមល្ហែមបន្ថែម។<br>ចង់រកទិញកូនតោនៅជិតអ្នក? សួរយើងតាម Facebook។',

  'footer.tag': 'នំតូច។<br>សុខចិត្តធំ។',
  'footer.top': 'ត្រឡប់ទៅលើ',
  'footer.line': 'ខាំមួយមាត់ ពោរពេញក្តីសុខ។'
};

const UI = {
  en: {ticker: ['SOFT CAKE', 'CREAMY FILLING', 'LITTLE BITES, BIG HAPPY', 'FIVE FLAVORS'], show: n => 'Show ' + n + ' flavor', fact: n => n + ' flavor', packAlt: n => n + ' KONTAO 30g pack', campaignAlt: n => n + ' KONTAO cake campaign'},
  km: {ticker: ['នំខេកទន់ៗ', 'ស្នូលក្រែមឆ្ងាញ់', 'នំតូច សុខចិត្តធំ', '៥ រសជាតិ'], show: n => 'បង្ហាញរសជាតិ' + n, fact: n => 'រសជាតិ' + n, packAlt: n => 'នំកូនតោ រសជាតិ' + n + ' ៣០ក្រាម', campaignAlt: n => 'នំកូនតោ រសជាតិ' + n}
};

let lang = document.documentElement.lang === 'km' ? 'km' : 'en';
const i18nNodes = [...document.querySelectorAll('[data-i18n]')].map(el => ({el, key: el.dataset.i18n, en: el.innerHTML}));
const i18nAttrs = [...document.querySelectorAll('[data-i18n-attr]')].flatMap(el => el.dataset.i18nAttr.split('|').map(pair => {
  const [attr, key] = pair.split('=');
  return {el, attr, key, en: el.getAttribute(attr)};
}));
const metaDesc = document.querySelector('meta[name="description"]');
const EN_META = {title: document.title, desc: metaDesc.content};

function setLanguage(next, save = true) {
  lang = next === 'km' ? 'km' : 'en';
  const root = document.documentElement;
  root.lang = lang;
  i18nNodes.forEach(n => { n.el.innerHTML = lang === 'km' && KM[n.key] ? KM[n.key] : n.en; });
  i18nAttrs.forEach(n => n.el.setAttribute(n.attr, lang === 'km' && KM[n.key] ? KM[n.key] : n.en));
  document.title = lang === 'km' ? KM['meta.title'] : EN_META.title;
  metaDesc.content = lang === 'km' ? KM['meta.desc'] : EN_META.desc;
  document.querySelectorAll('.lang-toggle button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  if (save) { try { localStorage.setItem('kontao-lang', lang); } catch (e) {} }
  renderTicker();
  if (typeof refreshFlavorText === 'function') refreshFlavorText();
}

document.querySelectorAll('.lang-toggle button').forEach(b => b.addEventListener('click', () => setLanguage(b.dataset.lang)));

// First-visit language gate
const gate = document.querySelector('#lang-gate');
function closeGate(choice) {
  setLanguage(choice);
  document.documentElement.classList.add('lang-chosen');
  gate.classList.add('closing');
  setTimeout(() => gate.remove(), 450);
  document.querySelector(`.lang-toggle button[data-lang="${choice}"]`)?.focus({preventScroll: true});
}
if (document.documentElement.classList.contains('lang-chosen')) {
  gate.remove();
} else {
  gate.querySelectorAll('.gate-btn').forEach(b => b.addEventListener('click', () => closeGate(b.dataset.lang)));
  gate.addEventListener('keydown', e => {
    if (e.key !== 'Tab') return; // keep focus inside the dialog
    const btns = [...gate.querySelectorAll('.gate-btn')];
    const i = btns.indexOf(document.activeElement);
    e.preventDefault();
    btns[(i + (e.shiftKey ? btns.length - 1 : 1)) % btns.length].focus();
  });
  requestAnimationFrame(() => gate.querySelector('.gate-btn').focus({preventScroll: true}));
}

// Toggle floats in the top-right corner once the header scrolls away
const toggle = document.querySelector('.lang-toggle');
if ('IntersectionObserver' in window) {
  new IntersectionObserver(([e]) => toggle.classList.toggle('is-floating', !e.isIntersecting), {rootMargin: '-10px 0px 0px 0px'}).observe(document.querySelector('#hero > header'));
}

/* ---------- 2. Hero flavor carousel ---------- */
const flavors = [
  {name: 'Strawberry', km: 'ស្ត្របឺរី', file: 'strawberry', word: 'BERRY', line: 'Your sweet little pick-me-up.', kmLine: 'ផ្អែមល្ហែម ធ្វើឲ្យស្រស់ស្រាយភ្លាម។', bg: '#f6bed0', ink: '#67152d', accent: '#bc234e'},
  {name: 'Chocolate', km: 'សូកូឡា', file: 'chocolate', word: 'CHOCO', line: 'A little chocolate. A lot of happy.', kmLine: 'សូកូឡាបន្តិច សប្បាយចិត្តច្រើន។', bg: '#e6b48f', ink: '#482417', accent: '#7d4329'},
  {name: 'Durian', km: 'ធុរេន', file: 'durian', word: 'DURIAN', line: 'A bold little moment.', kmLine: 'រសជាតិដិតដាម សម្រាប់ថ្ងៃពិសេស។', bg: '#efdc78', ink: '#354720', accent: '#738340'},
  {name: 'Original', km: 'ដើម', file: 'original', word: 'CLASSIC', line: 'Simple, soft, and oh-so-lovely.', kmLine: 'សាមញ្ញ ទន់ និងគួរឲ្យស្រឡាញ់។', bg: '#f8d598', ink: '#78370f', accent: '#bb641a'},
  {name: 'Pandan', km: 'ស្លឹកតើយ', file: 'pandan', word: 'PANDAN', line: 'A fresh twist on your happy place.', kmLine: 'ក្លិនស្លឹកតើយស្រស់ សម្រាប់ចិត្តរីករាយ។', bg: '#c9df9b', ink: '#294a23', accent: '#578234'}
];
const fname = f => lang === 'km' ? f.km : f.name;

let current = 0;
const reduce = matchMedia('(prefers-reduced-motion: reduce)');
let paused = reduce.matches;
let timer;
const hero = document.querySelector('#hero');

function image(f, alt) {
  const im = document.createElement('img');
  im.src = 'assets/' + f.file + '-pack.webp';
  im.alt = alt;
  im.draggable = false;
  im.decoding = 'async';
  im.style.cssText = 'width:100%;height:100%;left:0;top:0;object-fit:contain';
  return im;
}

flavors.forEach((f, i) => {
  const pack = document.createElement('div');
  pack.className = 'pack';
  pack.setAttribute('aria-hidden', 'true');
  const inner = document.createElement('div');
  inner.className = 'pack-inner';
  inner.style.animationDelay = (-i * .8) + 's';
  const win = document.createElement('div');
  win.className = 'pack-window';
  win.append(image(f, ''));
  inner.append(win);
  pack.append(inner);
  document.querySelector('#packs').append(pack);

  const button = document.createElement('button');
  button.className = 'flavor';
  const mini = document.createElement('div');
  mini.className = 'mini';
  mini.append(image(f, ''));
  const label = document.createElement('span');
  button.append(mini, label);
  button.addEventListener('click', () => { setFlavor(i); restart(); });
  document.querySelector('#flavors').append(button);
});

function setFlavor(i, animate = true) {
  current = (i + flavors.length) % flavors.length;
  const f = flavors[current];
  for (const key of ['bg', 'ink', 'accent']) document.documentElement.style.setProperty('--' + key, f[key]);
  document.querySelector('meta[name="theme-color"]').content = f.bg;
  document.querySelectorAll('.pack').forEach((p, n) => {
    p.className = 'pack' + (n === current ? ' active' : n === (current + 4) % 5 ? ' before' : n === (current + 1) % 5 ? ' after' : '');
  });
  document.querySelectorAll('.flavor').forEach((b, n) => b.setAttribute('aria-pressed', String(n === current)));
  document.querySelector('#flavor-number').textContent = String(current + 1).padStart(2, '0') + ' / 05';
  document.querySelector('#flavor-name').textContent = fname(f);
  document.querySelector('#flavor-description').textContent = lang === 'km' ? f.kmLine : f.line;
  document.querySelector('#background-word').textContent = f.word;
  if (animate) {
    const caption = document.querySelector('.flavor-caption');
    caption.classList.remove('caption-in');
    void caption.offsetWidth;
    caption.classList.add('caption-in');
  }
}
function restart() {
  clearInterval(timer);
  if (!paused && !document.hidden) timer = setInterval(() => setFlavor(current + 1), 6500);
}
function updateMotion() { hero.classList.toggle('paused', paused); restart(); }

document.querySelector('#prev').onclick = () => { setFlavor(current - 1); restart(); };
document.querySelector('#next').onclick = () => { setFlavor(current + 1); restart(); };
document.querySelector('#flavors').addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
    e.preventDefault();
    setFlavor(current + (e.key === 'ArrowRight' ? 1 : -1));
    document.querySelector('.flavor[aria-pressed=true]').focus();
    restart();
  }
});
let startX = 0;
const stage = document.querySelector('.stage');
stage.addEventListener('touchstart', e => { startX = e.changedTouches[0].clientX; }, {passive: true});
stage.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - startX;
  if (Math.abs(dx) > 50) { setFlavor(current + (dx < 0 ? 1 : -1)); restart(); }
}, {passive: true});
document.addEventListener('visibilitychange', restart);
reduce.addEventListener('change', e => { paused = e.matches; updateMotion(); });

/* ---------- 3. Flavor detail tabs ---------- */
const stories = [
  {title: 'Berry sweet.<br>Very you.', label: 'THE FRUITY ONE', copy: 'A soft little cake with a sweet strawberry-flavored center. For the pink-loving, joy-chasing side of you.',
   kmTitle: 'ផ្អែមល្ហែម។<br>ដូចអ្នកពិតៗ។', kmLabel: 'រសផ្លែឈើ', kmCopy: 'នំខេកទន់ៗ ជាមួយស្នូលរសជាតិស្ត្របឺរីផ្អែមឆ្ងាញ់។ សម្រាប់អ្នកដែលស្រឡាញ់ពណ៌ផ្កាឈូក និងចូលចិត្តភាពរីករាយ។'},
  {title: 'For your<br>chocolate mood.', label: 'THE CHOCOLATE ONE', copy: 'Soft cake meets a creamy chocolate-flavored center. A little indulgence to make your everyday break sweeter.',
   kmTitle: 'សម្រាប់ពេល<br>ចង់ញ៉ាំសូកូឡា។', kmLabel: 'រសសូកូឡា', kmCopy: 'នំខេកទន់ៗ ជាមួយស្នូលក្រែមរសជាតិសូកូឡា។ រង្វាន់តូចមួយ ដែលធ្វើឲ្យពេលសម្រាករបស់អ្នកផ្អែមល្ហែមជាងមុន។'},
  {title: 'A little bold.<br>A lot to love.', label: 'THE BOLD ONE', copy: 'Make room for durian. A creamy durian-flavored filling wrapped in soft cake, for the days you want something a little different.',
   kmTitle: 'ដិតដាមបន្តិច។<br>គួរឲ្យស្រឡាញ់ច្រើន។', kmLabel: 'រសដិតដាម', kmCopy: 'ទុកកន្លែងសម្រាប់ធុរេន។ ស្នូលក្រែមរសជាតិធុរេន រុំដោយនំខេកទន់ៗ សម្រាប់ថ្ងៃដែលអ្នកចង់សាកអ្វីប្លែកបន្តិច។'},
  {title: 'Simply soft.<br>Simply happy.', label: 'THE CLASSIC ONE', copy: 'Meet your easygoing favorite. Soft cake and a creamy center, ready for your next little break.',
   kmTitle: 'ទន់ៗ សាមញ្ញ។<br>សប្បាយចិត្តពិតៗ។', kmLabel: 'រសដើម', kmCopy: 'ជួបរសជាតិដែលអ្នកណាក៏ចូលចិត្ត។ នំខេកទន់ៗ និងស្នូលក្រែមឆ្ងាញ់ រួចរាល់សម្រាប់ពេលសម្រាកបន្ទាប់របស់អ្នក។'},
  {title: 'Your green<br>little getaway.', label: 'THE PANDAN ONE', copy: 'A soft cake with a creamy pandan-flavored center. A sweet little change of pace for your everyday snack break.',
   kmTitle: 'ពណ៌បៃតង<br>សម្រាប់សម្រាកចិត្ត។', kmLabel: 'រសស្លឹកតើយ', kmCopy: 'នំខេកទន់ៗ ជាមួយស្នូលក្រែមរសជាតិស្លឹកតើយ។ ការផ្លាស់ប្តូរផ្អែមល្ហែមបន្តិច សម្រាប់ពេលញ៉ាំអាហារសម្រន់ប្រចាំថ្ងៃ។'}
];
const detailTabs = document.querySelector('#detail-tabs');
let detailIndex = 0;
flavors.forEach((f, i) => {
  const b = document.createElement('button');
  b.id = 'detail-tab-' + i;
  b.setAttribute('role', 'tab');
  b.setAttribute('aria-controls', 'flavor-panel');
  b.onclick = () => showDetail(i);
  detailTabs.append(b);
});

function showDetail(i, animate = true) {
  detailIndex = i;
  const f = flavors[i], s = stories[i], km = lang === 'km';
  detailTabs.querySelectorAll('button').forEach((b, n) => { b.setAttribute('aria-selected', String(n === i)); b.tabIndex = n === i ? 0 : -1; });
  const panel = document.querySelector('#flavor-panel');
  panel.setAttribute('aria-labelledby', 'detail-tab-' + i);
  document.querySelector('#detail-kicker').textContent = String(i + 1).padStart(2, '0') + ' / ' + (km ? s.kmLabel : s.label);
  document.querySelector('#detail-title').innerHTML = km ? s.kmTitle : s.title;
  document.querySelector('#detail-copy').textContent = km ? s.kmCopy : s.copy;
  document.querySelector('#detail-pack').replaceChildren(image(f, UI[lang].packAlt(fname(f))));
  document.querySelector('#fact-flavor').textContent = UI[lang].fact(fname(f));
  const photo = document.querySelector('#campaign-photo');
  photo.srcset = 'assets/campaign-' + f.file + '-480.webp 480w, assets/campaign-' + f.file + '.webp 1000w';
  photo.src = 'assets/campaign-' + f.file + '.webp';
  photo.alt = UI[lang].campaignAlt(fname(f));
  document.querySelector('.flavor-editorial').style.background = f.bg;
  if (animate) { panel.classList.remove('caption-in'); void panel.offsetWidth; panel.classList.add('caption-in'); }
}
detailTabs.addEventListener('keydown', e => {
  let n = detailIndex;
  if (e.key === 'ArrowRight') n = (n + 1) % 5;
  else if (e.key === 'ArrowLeft') n = (n + 4) % 5;
  else if (e.key === 'Home') n = 0;
  else if (e.key === 'End') n = 4;
  else return;
  e.preventDefault();
  showDetail(n);
  detailTabs.children[n].focus();
});

// Re-label everything built in JS when the language changes
function refreshFlavorText() {
  document.querySelectorAll('.flavor').forEach((b, i) => {
    b.querySelector('span').textContent = fname(flavors[i]);
    b.setAttribute('aria-label', UI[lang].show(fname(flavors[i])));
  });
  detailTabs.querySelectorAll('button').forEach((b, i) => { b.textContent = fname(flavors[i]); });
  setFlavor(current, false);
  showDetail(detailIndex, false);
}

document.querySelector('#discover').onclick = () => {
  showDetail(current);
  document.querySelector('#our-flavors').scrollIntoView({behavior: reduce.matches ? 'instant' : 'smooth'});
};
document.querySelector('#year').textContent = new Date().getFullYear();

/* ---------- 4. Ticker, reveal, mascot spin ---------- */
function renderTicker() {
  const spark = '<svg class="ic tick-spark" aria-hidden="true"><use href="#i-spark"/></svg>';
  const once = UI[lang].ticker.map(t => '<span>' + t + '</span>' + spark).join('');
  document.querySelector('#ticker-track').innerHTML = once + once + once + once;
}

setLanguage(lang, false);
setFlavor(0);
updateMotion();
showDetail(0);

if ('IntersectionObserver' in window) {
  document.body.classList.add('js-reveal');
  const observer = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  }), {threshold: .08});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
new MutationObserver(() => document.body.classList.toggle('motion-paused', hero.classList.contains('paused'))).observe(hero, {attributes: true, attributeFilter: ['class']});
document.body.classList.toggle('motion-paused', paused);

// Pointer and keyboard-friendly logo celebration, with a short-lived canvas.
function enableMascotSpin(logo) {
  let logoAngle = 0, drag = null, spinAnimation = null, suppressClick = false;
  function confetti() {
    if (reduce.matches) return;
    document.querySelector('.confetti-canvas')?.remove();
    const canvas = document.createElement('canvas');
    canvas.className = 'confetti-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    document.body.append(canvas);
    const scale = Math.min(devicePixelRatio || 1, 2);
    canvas.width = innerWidth * scale;
    canvas.height = innerHeight * scale;
    const ctx = canvas.getContext('2d');
    ctx.scale(scale, scale);
    const r = logo.getBoundingClientRect();
    const colors = ['#ee3d5a', '#ffcf42', '#72b846', '#9a56cc', '#fff6e5'];
    const pieces = Array.from({length: 55}, () => ({x: r.left + r.width / 2, y: r.top + r.height / 2, vx: (Math.random() - .35) * 11, vy: -3 - Math.random() * 8, rot: Math.random() * 6, color: colors[Math.floor(Math.random() * colors.length)]}));
    let last = performance.now(), start = last;
    function frame(now) {
      if (!canvas.isConnected) return;
      const dt = Math.min((now - last) / 16.67, 2);
      last = now;
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      pieces.forEach(p => {
        p.x += p.vx * dt; p.y += p.vy * dt; p.vy += .19 * dt; p.rot += .08 * dt;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
        ctx.globalAlpha = Math.max(0, 1 - (now - start) / 1800);
        ctx.fillStyle = p.color; ctx.fillRect(-3, -5, 6, 10); ctx.restore();
      });
      if (now - start < 1800) requestAnimationFrame(frame); else canvas.remove();
    }
    requestAnimationFrame(frame);
  }
  function spinLogo(turn = 360) {
    spinAnimation?.cancel();
    const from = logoAngle;
    logoAngle += turn;
    logo.style.transform = `rotate(${logoAngle}deg)`;
    if (!reduce.matches) spinAnimation = logo.animate([{transform: `rotate(${from}deg)`}, {transform: `rotate(${logoAngle}deg)`}], {duration: 850, easing: 'cubic-bezier(.18,.7,.2,1)'});
    confetti();
  }
  logo.addEventListener('click', () => { if (suppressClick) { suppressClick = false; return; } spinLogo(); });
  logo.addEventListener('pointerdown', e => { if (e.button !== 0) return; spinAnimation?.cancel(); drag = {x: e.clientX, angle: logoAngle, moved: false}; logo.setPointerCapture(e.pointerId); });
  logo.addEventListener('pointermove', e => { if (!drag) return; const dx = e.clientX - drag.x; if (Math.abs(dx) > 5) drag.moved = true; logoAngle = drag.angle + dx * 2; logo.style.transform = `rotate(${logoAngle}deg)`; });
  logo.addEventListener('pointerup', () => { if (drag?.moved) { suppressClick = true; spinLogo(90); } drag = null; });
  logo.addEventListener('pointercancel', () => { drag = null; suppressClick = false; });
  logo.addEventListener('keydown', e => { if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); spinLogo(e.key === 'ArrowRight' ? 90 : -90); } });
}
document.querySelectorAll('.mascot-spin, .brand-mark').forEach(enableMascotSpin);

// Stop off-screen hero work and warm up flavor photography only near its section.
if ('IntersectionObserver' in window) {
  let heroVisible = true;
  new IntersectionObserver(entries => {
    heroVisible = entries[0].isIntersecting;
    hero.classList.toggle('paused', paused || !heroVisible);
    if (heroVisible) restart(); else clearInterval(timer);
  }).observe(hero);
  const warmObserver = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    flavors.forEach(f => { const im = new Image(); im.decoding = 'async'; im.src = 'assets/campaign-' + f.file + (innerWidth <= 700 ? '-480' : '') + '.webp'; });
    warmObserver.disconnect();
  }, {rootMargin: '200px'});
  warmObserver.observe(document.querySelector('#our-flavors'));
  document.addEventListener('visibilitychange', () => { if (!heroVisible) clearInterval(timer); });
}

/* ---------- 5. Spotlight videos ---------- */
// Facebook's player is heavy, so embeds load only when the section is close to the screen.
function loadVideo(frame) {
  if (frame.dataset.loaded) return;
  frame.dataset.loaded = '1';
  const w = Math.max(220, Math.round(frame.clientWidth)), h = Math.max(200, Math.round(frame.clientHeight));
  const src = 'https://www.facebook.com/plugins/video.php?href=' + encodeURIComponent(frame.dataset.video) +
    '&show_text=false&width=' + w + '&height=' + h + '&t=0' + (lang === 'km' ? '&locale=km_KH' : '');
  const iframe = document.createElement('iframe');
  iframe.src = src;
  iframe.title = frame.dataset.title || 'KONTAO video';
  iframe.loading = 'lazy';
  iframe.allow = 'autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share';
  iframe.allowFullscreen = true;
  iframe.setAttribute('scrolling', 'no');
  iframe.addEventListener('load', () => frame.classList.add('ready'));
  frame.append(iframe);
}
const videoFrames = document.querySelectorAll('.video-frame[data-video]');
if ('IntersectionObserver' in window) {
  const vo = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { loadVideo(e.target); vo.unobserve(e.target); }
  }), {rootMargin: '400px 600px'});
  videoFrames.forEach(f => vo.observe(f));
} else {
  videoFrames.forEach(loadVideo);
}

// Rail arrows scroll one card at a time and dim at the ends
const rail = document.querySelector('#video-rail');
const railBtns = document.querySelectorAll('.rail-btn');
function railStep(dir) {
  const cards = [...rail.children];
  const left = rail.getBoundingClientRect().left;
  const pad = parseFloat(getComputedStyle(rail).scrollPaddingLeft) || 0;
  const target = dir > 0
    ? cards.find(c => c.getBoundingClientRect().left - left > pad + 8)
    : [...cards].reverse().find(c => c.getBoundingClientRect().left - left < pad - 8);
  if (target) rail.scrollBy({left: target.getBoundingClientRect().left - left - pad, behavior: reduce.matches ? 'auto' : 'smooth'});
}
function updateRailButtons() {
  const max = rail.scrollWidth - rail.clientWidth - 4;
  railBtns[0].disabled = rail.scrollLeft <= 4;
  railBtns[1].disabled = rail.scrollLeft >= max;
}
railBtns.forEach(b => b.addEventListener('click', () => railStep(+b.dataset.dir)));
rail.addEventListener('scroll', updateRailButtons, {passive: true});
addEventListener('resize', updateRailButtons);
updateRailButtons();

/* ---------- 6. Mobile menu (same links as the desktop nav) ---------- */
const siteHeader = document.querySelector('#hero > header');
const menuBtn = document.querySelector('.menu-btn');
function setMenu(open) {
  siteHeader.classList.toggle('menu-open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
}
menuBtn.addEventListener('click', () => setMenu(!siteHeader.classList.contains('menu-open')));
document.querySelectorAll('#site-nav a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && siteHeader.classList.contains('menu-open')) { setMenu(false); menuBtn.focus(); } });
document.addEventListener('click', e => { if (siteHeader.classList.contains('menu-open') && !siteHeader.contains(e.target)) setMenu(false); });
