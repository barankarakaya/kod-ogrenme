// HTML & CSS Egzersizleri
const webExercises = [
    // Seviye 1: Temel HTML
    {
        id: 1, category: 'algorithms_basic', level: 1, title: 'HTML Başlık', difficulty: 'easy',
        description: 'Bir başlık etiketi oluştur.',
        expectedOutput: '<h1>Merhaba</h1>',
        code: [
            { type: 'blank', answer: '<h1>', placeholder: '????', width: 70 },
            { type: 'text', content: 'Merhaba' },
            { type: 'blank', answer: '</h1>', placeholder: '?????', width: 80 }
        ],
        hint: 'Başlık için h1 etiketi kullanılır.',
        explanation: '<h1> en büyük başlık etiketidir. h1-h6 arası kullanılabilir.'
    },
    {
        id: 2, category: 'algorithms_basic', level: 1, title: 'Paragraf', difficulty: 'easy',
        description: 'Bir paragraf oluştur.',
        expectedOutput: '<p>Merhaba Dünya</p>',
        code: [
            { type: 'blank', answer: '<p>', placeholder: '???', width: 60 },
            { type: 'text', content: 'Merhaba Dünya' },
            { type: 'blank', answer: '</p>', placeholder: '????', width: 70 }
        ],
        hint: 'Paragraf için p etiketi kullanılır.',
        explanation: '<p> etiketi paragraf oluşturur.'
    },
    {
        id: 3, category: 'algorithms_basic', level: 1, title: 'Link Oluşturma', difficulty: 'easy',
        description: 'Bir bağlantı oluştur.',
        expectedOutput: '<a href="...">Tıkla</a>',
        code: [
            { type: 'text', content: '<a ' },
            { type: 'blank', answer: 'href', placeholder: '????', width: 70 },
            { type: 'text', content: '="https://google.com">Tıkla</a>' }
        ],
        hint: 'Link için a etiketi ve href özelliği kullanılır.',
        explanation: '<a href="url">metin</a> şeklinde link oluşturulur.'
    },
    {
        id: 4, category: 'algorithms_basic', level: 1, title: 'Resim Ekleme', difficulty: 'easy',
        description: 'Bir resim ekle.',
        expectedOutput: '<img src="..." alt="...">',
        code: [
            { type: 'text', content: '<' },
            { type: 'blank', answer: 'img', placeholder: '???', width: 60 },
            { type: 'text', content: ' src="resim.jpg" alt="Resim">' }
        ],
        hint: 'Resim için img etiketi kullanılır.',
        explanation: '<img src="url" alt="açıklama"> şeklinde resim eklenir.'
    },
    {
        id: 5, category: 'algorithms_basic', level: 1, title: 'Div Konteyner', difficulty: 'easy',
        description: 'Bir div konteyner oluştur.',
        expectedOutput: '<div>İçerik</div>',
        code: [
            { type: 'blank', answer: '<div>', placeholder: '?????', width: 80 },
            { type: 'text', content: 'İçerik' },
            { type: 'blank', answer: '</div>', placeholder: '??????', width: 90 }
        ],
        hint: 'div genel amaçlı konteyner elementidir.',
        explanation: '<div> bloklevel konteyner oluşturur.'
    },
    
    // Seviye 2: Temel CSS
    {
        id: 6, category: 'variables', level: 2, title: 'Renk Değiştirme', difficulty: 'easy',
        description: 'Yazı rengini kırmızı yap.',
        expectedOutput: 'color: red',
        code: [
            { type: 'text', content: 'p {', isLine: true },
            { type: 'text', content: '    ' },
            { type: 'blank', answer: 'color', placeholder: '?????', width: 80 },
            { type: 'text', content: ': red;', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'color özelliği yazı rengini belirler.',
        explanation: 'color: değer; şeklinde yazı rengi ayarlanır.'
    },
    {
        id: 7, category: 'variables', level: 2, title: 'Arka Plan', difficulty: 'easy',
        description: 'Arka plan rengini mavi yap.',
        expectedOutput: 'background: blue',
        code: [
            { type: 'text', content: 'div {', isLine: true },
            { type: 'text', content: '    ' },
            { type: 'blank', answer: 'background', placeholder: '??????????', width: 120 },
            { type: 'text', content: ': blue;', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'background özelliği arka planı belirler.',
        explanation: 'background-color veya background kullanılır.'
    },
    {
        id: 8, category: 'variables', level: 2, title: 'Yazı Boyutu', difficulty: 'easy',
        description: 'Yazı boyutunu 20px yap.',
        expectedOutput: 'font-size: 20px',
        code: [
            { type: 'text', content: 'p {', isLine: true },
            { type: 'text', content: '    font-' },
            { type: 'blank', answer: 'size', placeholder: '????', width: 70 },
            { type: 'text', content: ': 20px;', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'font-size yazı boyutunu belirler.',
        explanation: 'font-size: değer; şeklinde boyut ayarlanır.'
    },
    {
        id: 9, category: 'variables', level: 2, title: 'Padding', difficulty: 'easy',
        description: 'İç boşluk ekle.',
        expectedOutput: 'padding: 10px',
        code: [
            { type: 'text', content: '.box {', isLine: true },
            { type: 'text', content: '    ' },
            { type: 'blank', answer: 'padding', placeholder: '???????', width: 100 },
            { type: 'text', content: ': 10px;', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'padding iç boşluk ekler.',
        explanation: 'padding içerik ile kenarlık arasına boşluk ekler.'
    },
    {
        id: 10, category: 'variables', level: 2, title: 'Margin', difficulty: 'easy',
        description: 'Dış boşluk ekle.',
        expectedOutput: 'margin: 20px',
        code: [
            { type: 'text', content: '.box {', isLine: true },
            { type: 'text', content: '    ' },
            { type: 'blank', answer: 'margin', placeholder: '??????', width: 90 },
            { type: 'text', content: ': 20px;', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'margin dış boşluk ekler.',
        explanation: 'margin element dışına boşluk ekler.'
    },
    
    // Seviye 3: CSS Box Model
    {
        id: 11, category: 'conditions', level: 3, title: 'Border', difficulty: 'easy',
        description: 'Kenarlık ekle.',
        expectedOutput: 'border: 1px solid black',
        code: [
            { type: 'text', content: '.box {', isLine: true },
            { type: 'text', content: '    ' },
            { type: 'blank', answer: 'border', placeholder: '??????', width: 90 },
            { type: 'text', content: ': 1px solid black;', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'border kenarlık ekler.',
        explanation: 'border: kalınlık stil renk; şeklinde tanımlanır.'
    },
    {
        id: 12, category: 'conditions', level: 3, title: 'Border Radius', difficulty: 'easy',
        description: 'Köşeleri yuvarlak yap.',
        expectedOutput: 'border-radius: 10px',
        code: [
            { type: 'text', content: '.box {', isLine: true },
            { type: 'text', content: '    border-' },
            { type: 'blank', answer: 'radius', placeholder: '??????', width: 90 },
            { type: 'text', content: ': 10px;', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'border-radius köşeleri yuvarlar.',
        explanation: 'border-radius ile köşe yuvarlaklığı ayarlanır.'
    },
    {
        id: 13, category: 'conditions', level: 3, title: 'Box Shadow', difficulty: 'medium',
        description: 'Gölge efekti ekle.',
        expectedOutput: 'box-shadow: 0 4px 8px rgba(0,0,0,0.2)',
        code: [
            { type: 'text', content: '.card {', isLine: true },
            { type: 'text', content: '    box-' },
            { type: 'blank', answer: 'shadow', placeholder: '??????', width: 90 },
            { type: 'text', content: ': 0 4px 8px rgba(0,0,0,0.2);', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'box-shadow gölge ekler.',
        explanation: 'box-shadow: x y blur renk; şeklinde tanımlanır.'
    },
    {
        id: 14, category: 'conditions', level: 3, title: 'Width ve Height', difficulty: 'easy',
        description: 'Genişlik ve yükseklik ayarla.',
        expectedOutput: 'width: 200px; height: 100px',
        code: [
            { type: 'text', content: '.box {', isLine: true },
            { type: 'text', content: '    ' },
            { type: 'blank', answer: 'width', placeholder: '?????', width: 80 },
            { type: 'text', content: ': 200px;', isLine: true },
            { type: 'text', content: '    height: 100px;', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'width genişlik, height yükseklik belirler.',
        explanation: 'width ve height ile boyutlar ayarlanır.'
    },
    {
        id: 15, category: 'conditions', level: 3, title: 'Text Align', difficulty: 'easy',
        description: 'Metni ortala.',
        expectedOutput: 'text-align: center',
        code: [
            { type: 'text', content: '.center {', isLine: true },
            { type: 'text', content: '    text-' },
            { type: 'blank', answer: 'align', placeholder: '?????', width: 80 },
            { type: 'text', content: ': center;', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'text-align metin hizalamasını belirler.',
        explanation: 'text-align: left | center | right | justify'
    },
    
    // Seviye 4: Flexbox
    {
        id: 16, category: 'loops', level: 4, title: 'Display Flex', difficulty: 'easy',
        description: 'Flexbox container oluştur.',
        expectedOutput: 'display: flex',
        code: [
            { type: 'text', content: '.container {', isLine: true },
            { type: 'text', content: '    ' },
            { type: 'blank', answer: 'display', placeholder: '???????', width: 100 },
            { type: 'text', content: ': flex;', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'display: flex ile flexbox aktifleştirilir.',
        explanation: 'Flexbox esnek yerleşim sistemidir.'
    },
    {
        id: 17, category: 'loops', level: 4, title: 'Justify Content', difficulty: 'easy',
        description: 'Elemanları yatayda ortala.',
        expectedOutput: 'justify-content: center',
        code: [
            { type: 'text', content: '.container {', isLine: true },
            { type: 'text', content: '    display: flex;', isLine: true },
            { type: 'text', content: '    ' },
            { type: 'blank', answer: 'justify-content', placeholder: '???????????????', width: 160 },
            { type: 'text', content: ': center;', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'justify-content yatay hizalama yapar.',
        explanation: 'justify-content ana eksende hizalama yapar.'
    },
    {
        id: 18, category: 'loops', level: 4, title: 'Align Items', difficulty: 'easy',
        description: 'Elemanları dikeyde ortala.',
        expectedOutput: 'align-items: center',
        code: [
            { type: 'text', content: '.container {', isLine: true },
            { type: 'text', content: '    display: flex;', isLine: true },
            { type: 'text', content: '    ' },
            { type: 'blank', answer: 'align-items', placeholder: '???????????', width: 130 },
            { type: 'text', content: ': center;', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'align-items dikey hizalama yapar.',
        explanation: 'align-items çapraz eksende hizalama yapar.'
    },
    {
        id: 19, category: 'loops', level: 4, title: 'Flex Direction', difficulty: 'medium',
        description: 'Elemanları dikey sırala.',
        expectedOutput: 'flex-direction: column',
        code: [
            { type: 'text', content: '.container {', isLine: true },
            { type: 'text', content: '    display: flex;', isLine: true },
            { type: 'text', content: '    flex-' },
            { type: 'blank', answer: 'direction', placeholder: '?????????', width: 120 },
            { type: 'text', content: ': column;', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'flex-direction yönü belirler.',
        explanation: 'flex-direction: row | column | row-reverse | column-reverse'
    },
    {
        id: 20, category: 'loops', level: 4, title: 'Gap', difficulty: 'easy',
        description: 'Elemanlar arasına boşluk ekle.',
        expectedOutput: 'gap: 20px',
        code: [
            { type: 'text', content: '.container {', isLine: true },
            { type: 'text', content: '    display: flex;', isLine: true },
            { type: 'text', content: '    ' },
            { type: 'blank', answer: 'gap', placeholder: '???', width: 60 },
            { type: 'text', content: ': 20px;', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'gap elemanlar arasına boşluk ekler.',
        explanation: 'gap flex ve grid\'de boşluk oluşturur.'
    },
    
    // Seviye 5: Grid ve Animasyonlar
    {
        id: 21, category: 'functions', level: 5, title: 'Display Grid', difficulty: 'easy',
        description: 'CSS Grid container oluştur.',
        expectedOutput: 'display: grid',
        code: [
            { type: 'text', content: '.grid {', isLine: true },
            { type: 'text', content: '    display: ' },
            { type: 'blank', answer: 'grid', placeholder: '????', width: 70 },
            { type: 'text', content: ';', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'display: grid ile grid layout aktifleşir.',
        explanation: 'CSS Grid 2 boyutlu yerleşim sistemidir.'
    },
    {
        id: 22, category: 'functions', level: 5, title: 'Grid Columns', difficulty: 'medium',
        description: '3 sütunlu grid oluştur.',
        expectedOutput: 'grid-template-columns: 1fr 1fr 1fr',
        code: [
            { type: 'text', content: '.grid {', isLine: true },
            { type: 'text', content: '    display: grid;', isLine: true },
            { type: 'text', content: '    grid-template-' },
            { type: 'blank', answer: 'columns', placeholder: '???????', width: 100 },
            { type: 'text', content: ': 1fr 1fr 1fr;', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'grid-template-columns sütunları tanımlar.',
        explanation: 'fr birimi flexible fraction anlamına gelir.'
    },
    {
        id: 23, category: 'functions', level: 5, title: 'Transition', difficulty: 'medium',
        description: 'Geçiş animasyonu ekle.',
        expectedOutput: 'transition: all 0.3s ease',
        code: [
            { type: 'text', content: '.btn {', isLine: true },
            { type: 'text', content: '    ' },
            { type: 'blank', answer: 'transition', placeholder: '??????????', width: 130 },
            { type: 'text', content: ': all 0.3s ease;', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'transition geçiş animasyonu ekler.',
        explanation: 'transition: özellik süre easing; şeklinde tanımlanır.'
    },
    {
        id: 24, category: 'functions', level: 5, title: 'Hover Efekti', difficulty: 'medium',
        description: 'Üzerine gelince renk değiştir.',
        expectedOutput: ':hover { background: blue }',
        code: [
            { type: 'text', content: '.btn' },
            { type: 'blank', answer: ':hover', placeholder: '??????', width: 90 },
            { type: 'text', content: ' {' },
            { type: 'newline' },
            { type: 'text', content: '    background: blue;', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: ':hover fare üzerine geldiğinde aktifleşir.',
        explanation: ':hover pseudo-class fare üzerindeyken çalışır.'
    },
    {
        id: 25, category: 'functions', level: 5, title: 'Transform', difficulty: 'medium',
        description: 'Elementi büyüt.',
        expectedOutput: 'transform: scale(1.1)',
        code: [
            { type: 'text', content: '.card:hover {', isLine: true },
            { type: 'text', content: '    ' },
            { type: 'blank', answer: 'transform', placeholder: '?????????', width: 120 },
            { type: 'text', content: ': scale(1.1);', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'transform ile dönüşümler yapılır.',
        explanation: 'transform: scale, rotate, translate, skew kullanılır.'
    },
    
    // Seviye 6: İleri CSS
    {
        id: 26, category: 'algorithms_advanced', level: 6, title: 'CSS Variables', difficulty: 'medium',
        description: 'CSS değişkeni tanımla ve kullan.',
        expectedOutput: '--primary: #6c5ce7',
        code: [
            { type: 'text', content: ':root {', isLine: true },
            { type: 'text', content: '    ' },
            { type: 'blank', answer: '--primary', placeholder: '?????????', width: 120 },
            { type: 'text', content: ': #6c5ce7;', isLine: true },
            { type: 'text', content: '}', isLine: true },
            { type: 'text', content: '.btn { background: var(--primary); }' }
        ],
        hint: 'CSS değişkenleri -- ile başlar.',
        explanation: 'var(--değişken) ile değişken kullanılır.'
    },
    {
        id: 27, category: 'algorithms_advanced', level: 6, title: 'Keyframes', difficulty: 'medium',
        description: 'Animasyon keyframes tanımla.',
        expectedOutput: '@keyframes slide { }',
        code: [
            { type: 'blank', answer: '@keyframes', placeholder: '??????????', width: 130 },
            { type: 'text', content: ' fadeIn {' },
            { type: 'newline' },
            { type: 'text', content: '    from { opacity: 0; }', isLine: true },
            { type: 'text', content: '    to { opacity: 1; }', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: '@keyframes ile animasyon adımları tanımlanır.',
        explanation: '@keyframes ile from/to veya yüzdelik adımlar tanımlanır.'
    },
    {
        id: 28, category: 'algorithms_advanced', level: 6, title: 'Animation', difficulty: 'hard',
        description: 'Animasyonu elemente uygula.',
        expectedOutput: 'animation: fadeIn 1s ease',
        code: [
            { type: 'text', content: '.element {', isLine: true },
            { type: 'text', content: '    ' },
            { type: 'blank', answer: 'animation', placeholder: '?????????', width: 120 },
            { type: 'text', content: ': fadeIn 1s ease;', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'animation özelliği animasyonu uygular.',
        explanation: 'animation: isim süre easing; şeklinde kullanılır.'
    },
    {
        id: 29, category: 'algorithms_advanced', level: 6, title: 'Media Query', difficulty: 'hard',
        description: 'Responsive tasarım için media query.',
        expectedOutput: '@media (max-width: 768px)',
        code: [
            { type: 'blank', answer: '@media', placeholder: '??????', width: 90 },
            { type: 'text', content: ' (max-width: 768px) {' },
            { type: 'newline' },
            { type: 'text', content: '    .container { flex-direction: column; }', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: '@media ile responsive kurallar yazılır.',
        explanation: 'Media query ekran boyutuna göre stil uygular.'
    },
    {
        id: 30, category: 'algorithms_advanced', level: 6, title: 'Gradient', difficulty: 'medium',
        description: 'Gradient arka plan oluştur.',
        expectedOutput: 'background: linear-gradient(...)',
        code: [
            { type: 'text', content: '.hero {', isLine: true },
            { type: 'text', content: '    background: ' },
            { type: 'blank', answer: 'linear-gradient', placeholder: '???????????????', width: 160 },
            { type: 'text', content: '(135deg, #667eea, #764ba2);', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'linear-gradient ile renk geçişi oluşturulur.',
        explanation: 'linear-gradient(açı, renk1, renk2) şeklinde kullanılır.'
    }
];

