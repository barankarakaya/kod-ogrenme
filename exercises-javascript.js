// JavaScript Egzersizleri
const javascriptExercises = [
    // Seviye 1: Temel Algoritmalar
    {
        id: 1, category: 'algorithms_basic', level: 1, title: 'Toplama İşlemi', difficulty: 'easy',
        description: 'İki sayıyı topla ve sonucu yazdır.',
        expectedOutput: '15',
        code: [
            { type: 'text', content: 'let a = 10;', isLine: true },
            { type: 'text', content: 'let b = 5;', isLine: true },
            { type: 'text', content: 'let sonuc = a ' },
            { type: 'blank', answer: '+', placeholder: '?', width: 40 },
            { type: 'text', content: ' b;', isLine: true },
            { type: 'text', content: 'console.log(sonuc);' }
        ],
        hint: 'Toplama için + operatörü kullanılır.',
        explanation: 'JavaScript\'te toplama + operatörü ile yapılır.'
    },
    {
        id: 2, category: 'algorithms_basic', level: 1, title: 'Çift/Tek Kontrolü', difficulty: 'easy',
        description: 'Sayının çift mi tek mi olduğunu bul.',
        expectedOutput: 'Çift',
        code: [
            { type: 'text', content: 'let sayi = 8;', isLine: true },
            { type: 'text', content: 'if (sayi ' },
            { type: 'blank', answer: '%', placeholder: '?', width: 40 },
            { type: 'text', content: ' 2 === 0) {' },
            { type: 'newline' },
            { type: 'text', content: '    console.log("Çift");', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'Mod operatörü % kullanılır.',
        explanation: '% operatörü bölümden kalanı verir. 2\'ye bölümden kalan 0 ise çifttir.'
    },
    {
        id: 3, category: 'algorithms_basic', level: 1, title: 'Büyük Sayı', difficulty: 'easy',
        description: 'İki sayıdan büyük olanı bul.',
        expectedOutput: '25',
        code: [
            { type: 'text', content: 'let a = 15, b = 25;', isLine: true },
            { type: 'blank', answer: 'if', placeholder: '??', width: 50 },
            { type: 'text', content: ' (a > b) {' },
            { type: 'newline' },
            { type: 'text', content: '    console.log(a);', isLine: true },
            { type: 'text', content: '} else {', isLine: true },
            { type: 'text', content: '    console.log(b);', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'if ile karşılaştırma yapılır.',
        explanation: 'if-else ile iki değer karşılaştırılır.'
    },
    {
        id: 4, category: 'algorithms_basic', level: 1, title: 'Ortalama', difficulty: 'medium',
        description: 'Üç sayının ortalamasını hesapla.',
        expectedOutput: '20',
        code: [
            { type: 'text', content: 'let a = 10, b = 20, c = 30;', isLine: true },
            { type: 'text', content: 'let ortalama = (a + b + c) ' },
            { type: 'blank', answer: '/', placeholder: '?', width: 40 },
            { type: 'text', content: ' 3;', isLine: true },
            { type: 'text', content: 'console.log(ortalama);' }
        ],
        hint: 'Bölme için / operatörü kullanılır.',
        explanation: 'Ortalama = Toplam / Eleman sayısı'
    },
    {
        id: 5, category: 'algorithms_basic', level: 1, title: 'Değer Değiştirme', difficulty: 'medium',
        description: 'İki değişkenin değerlerini değiştir.',
        expectedOutput: 'a=20, b=10',
        code: [
            { type: 'text', content: 'let a = 10, b = 20;', isLine: true },
            { type: 'text', content: '[a, b] = [' },
            { type: 'blank', answer: 'b', placeholder: '?', width: 40 },
            { type: 'text', content: ', a];', isLine: true },
            { type: 'text', content: 'console.log(`a=${a}, b=${b}`);' }
        ],
        hint: 'JavaScript\'te destructuring ile swap yapılır.',
        explanation: '[a, b] = [b, a] ile kolayca değer değiştirilir.'
    },
    
    // Seviye 2: Değişkenler
    {
        id: 6, category: 'variables', level: 2, title: 'let Değişken', difficulty: 'easy',
        description: 'Bir metin değişkeni tanımla.',
        expectedOutput: 'Ali',
        code: [
            { type: 'blank', answer: 'let', placeholder: '???', width: 60 },
            { type: 'text', content: ' isim = "Ali";', isLine: true },
            { type: 'text', content: 'console.log(isim);' }
        ],
        hint: 'let anahtar kelimesi ile değişken tanımlanır.',
        explanation: 'let değiştirilebilir değişkenler için kullanılır.'
    },
    {
        id: 7, category: 'variables', level: 2, title: 'const Sabit', difficulty: 'easy',
        description: 'Değiştirilemeyen bir sabit tanımla.',
        expectedOutput: '3.14',
        code: [
            { type: 'blank', answer: 'const', placeholder: '?????', width: 80 },
            { type: 'text', content: ' PI = 3.14;', isLine: true },
            { type: 'text', content: 'console.log(PI);' }
        ],
        hint: 'const ile sabit (değiştirilemeyen) değer tanımlanır.',
        explanation: 'const ile tanımlanan değerler sonradan değiştirilemez.'
    },
    {
        id: 8, category: 'variables', level: 2, title: 'console.log', difficulty: 'easy',
        description: 'Konsola "Merhaba Dünya!" yazdır.',
        expectedOutput: 'Merhaba Dünya!',
        code: [
            { type: 'text', content: 'console.' },
            { type: 'blank', answer: 'log', placeholder: '???', width: 60 },
            { type: 'text', content: '("Merhaba Dünya!");' }
        ],
        hint: 'console.log() konsola yazdırır.',
        explanation: 'console.log() tarayıcı konsoluna çıktı verir.'
    },
    {
        id: 9, category: 'variables', level: 2, title: 'Template Literal', difficulty: 'easy',
        description: 'Değişkeni metin içinde kullan.',
        expectedOutput: 'Merhaba, Ali!',
        code: [
            { type: 'text', content: 'let isim = "Ali";', isLine: true },
            { type: 'text', content: 'console.log(' },
            { type: 'blank', answer: '`', placeholder: '?', width: 40 },
            { type: 'text', content: 'Merhaba, ${isim}!`);' }
        ],
        hint: 'Template literal için backtick (`) kullanılır.',
        explanation: '`...${değişken}...` şeklinde string interpolation yapılır.'
    },
    {
        id: 10, category: 'variables', level: 2, title: 'typeof Operatörü', difficulty: 'easy',
        description: 'Değişkenin tipini öğren.',
        expectedOutput: 'number',
        code: [
            { type: 'text', content: 'let sayi = 42;', isLine: true },
            { type: 'text', content: 'console.log(' },
            { type: 'blank', answer: 'typeof', placeholder: '??????', width: 90 },
            { type: 'text', content: ' sayi);' }
        ],
        hint: 'typeof operatörü değişkenin tipini döndürür.',
        explanation: 'typeof ile değişkenin veri tipi öğrenilir.'
    },
    
    // Seviye 3: Koşullar
    {
        id: 11, category: 'conditions', level: 3, title: 'Basit If', difficulty: 'easy',
        description: 'Sayı 10\'dan büyükse "Büyük" yazdır.',
        expectedOutput: 'Büyük',
        code: [
            { type: 'text', content: 'let sayi = 15;', isLine: true },
            { type: 'blank', answer: 'if', placeholder: '??', width: 50 },
            { type: 'text', content: ' (sayi > 10) {' },
            { type: 'newline' },
            { type: 'text', content: '    console.log("Büyük");', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'if (koşul) { } şeklinde yazılır.',
        explanation: 'if bloğu koşul true olduğunda çalışır.'
    },
    {
        id: 12, category: 'conditions', level: 3, title: 'If-Else', difficulty: 'easy',
        description: 'Yaş 18+ ise "Yetişkin" değilse "Çocuk".',
        expectedOutput: 'Yetişkin',
        code: [
            { type: 'text', content: 'let yas = 20;', isLine: true },
            { type: 'text', content: 'if (yas >= 18) {', isLine: true },
            { type: 'text', content: '    console.log("Yetişkin");', isLine: true },
            { type: 'text', content: '} ' },
            { type: 'blank', answer: 'else', placeholder: '????', width: 70 },
            { type: 'text', content: ' {' },
            { type: 'newline' },
            { type: 'text', content: '    console.log("Çocuk");', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'else koşul false olduğunda çalışır.',
        explanation: 'else bloğu if koşulu sağlanmadığında çalışır.'
    },
    {
        id: 13, category: 'conditions', level: 3, title: 'Else If', difficulty: 'medium',
        description: 'Not değerlendirmesi yap.',
        expectedOutput: 'BB',
        code: [
            { type: 'text', content: 'let not = 85;', isLine: true },
            { type: 'text', content: 'if (not >= 90) console.log("AA");', isLine: true },
            { type: 'blank', answer: 'else if', placeholder: '???????', width: 100 },
            { type: 'text', content: ' (not >= 80) console.log("BB");', isLine: true },
            { type: 'text', content: 'else console.log("CC");' }
        ],
        hint: 'else if ile birden fazla koşul kontrol edilir.',
        explanation: 'else if zincirleme koşul kontrolü sağlar.'
    },
    {
        id: 14, category: 'conditions', level: 3, title: 'Mantıksal VE', difficulty: 'medium',
        description: 'İki koşul da doğruysa yazdır.',
        expectedOutput: 'Geçerli',
        code: [
            { type: 'text', content: 'let yas = 25, ehliyet = true;', isLine: true },
            { type: 'text', content: 'if (yas >= 18 ' },
            { type: 'blank', answer: '&&', placeholder: '??', width: 50 },
            { type: 'text', content: ' ehliyet) {' },
            { type: 'newline' },
            { type: 'text', content: '    console.log("Geçerli");', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: '&& operatörü mantıksal VE işlemi yapar.',
        explanation: '&& ile iki koşulun da true olması gerekir.'
    },
    {
        id: 15, category: 'conditions', level: 3, title: 'Ternary Operatör', difficulty: 'medium',
        description: 'Kısa if-else yazımı kullan.',
        expectedOutput: 'Yetişkin',
        code: [
            { type: 'text', content: 'let yas = 20;', isLine: true },
            { type: 'text', content: 'let sonuc = yas >= 18 ' },
            { type: 'blank', answer: '?', placeholder: '?', width: 40 },
            { type: 'text', content: ' "Yetişkin" : "Çocuk";', isLine: true },
            { type: 'text', content: 'console.log(sonuc);' }
        ],
        hint: 'koşul ? doğruysa : yanlışsa şeklinde yazılır.',
        explanation: 'Ternary operatör kısa if-else alternatifidir.'
    },
    
    // Seviye 4: Döngüler
    {
        id: 16, category: 'loops', level: 4, title: 'For Döngüsü', difficulty: 'easy',
        description: '1\'den 5\'e kadar sayıları yazdır.',
        expectedOutput: '1 2 3 4 5',
        code: [
            { type: 'blank', answer: 'for', placeholder: '???', width: 60 },
            { type: 'text', content: ' (let i = 1; i <= 5; i++) {' },
            { type: 'newline' },
            { type: 'text', content: '    console.log(i);', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'for (başlangıç; koşul; artış) şeklinde yazılır.',
        explanation: 'for döngüsü belirli sayıda tekrar için kullanılır.'
    },
    {
        id: 17, category: 'loops', level: 4, title: 'While Döngüsü', difficulty: 'easy',
        description: 'Sayaç 3\'ten küçük olduğu sürece yazdır.',
        expectedOutput: '0 1 2',
        code: [
            { type: 'text', content: 'let sayac = 0;', isLine: true },
            { type: 'blank', answer: 'while', placeholder: '?????', width: 80 },
            { type: 'text', content: ' (sayac < 3) {' },
            { type: 'newline' },
            { type: 'text', content: '    console.log(sayac);', isLine: true },
            { type: 'text', content: '    sayac++;', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'while koşul doğru olduğu sürece çalışır.',
        explanation: 'while (koşul) { } şeklinde kullanılır.'
    },
    {
        id: 18, category: 'loops', level: 4, title: 'forEach Metodu', difficulty: 'easy',
        description: 'Dizideki her elemanı yazdır.',
        expectedOutput: '1 2 3',
        code: [
            { type: 'text', content: 'const arr = [1, 2, 3];', isLine: true },
            { type: 'text', content: 'arr.' },
            { type: 'blank', answer: 'forEach', placeholder: '???????', width: 100 },
            { type: 'text', content: '(x => console.log(x));' }
        ],
        hint: 'forEach dizi üzerinde iterasyon yapar.',
        explanation: 'forEach her eleman için callback fonksiyonu çağırır.'
    },
    {
        id: 19, category: 'loops', level: 4, title: 'map Metodu', difficulty: 'medium',
        description: 'Her elemanın karesini al.',
        expectedOutput: '1,4,9',
        code: [
            { type: 'text', content: 'const arr = [1, 2, 3];', isLine: true },
            { type: 'text', content: 'const kareler = arr.' },
            { type: 'blank', answer: 'map', placeholder: '???', width: 60 },
            { type: 'text', content: '(x => x * x);', isLine: true },
            { type: 'text', content: 'console.log(kareler);' }
        ],
        hint: 'map yeni bir dizi döndürür.',
        explanation: 'map her elemanı dönüştürüp yeni dizi oluşturur.'
    },
    {
        id: 20, category: 'loops', level: 4, title: 'filter Metodu', difficulty: 'medium',
        description: 'Çift sayıları filtrele.',
        expectedOutput: '2,4',
        code: [
            { type: 'text', content: 'const arr = [1, 2, 3, 4, 5];', isLine: true },
            { type: 'text', content: 'const ciftler = arr.' },
            { type: 'blank', answer: 'filter', placeholder: '??????', width: 90 },
            { type: 'text', content: '(x => x % 2 === 0);', isLine: true },
            { type: 'text', content: 'console.log(ciftler);' }
        ],
        hint: 'filter koşulu sağlayan elemanları döndürür.',
        explanation: 'filter true döndüren elemanları yeni diziye ekler.'
    },
    
    // Seviye 5: Fonksiyonlar
    {
        id: 21, category: 'functions', level: 5, title: 'Fonksiyon Tanımlama', difficulty: 'easy',
        description: '"Merhaba" yazdıran fonksiyon.',
        expectedOutput: 'Merhaba',
        code: [
            { type: 'blank', answer: 'function', placeholder: '????????', width: 110 },
            { type: 'text', content: ' selamla() {' },
            { type: 'newline' },
            { type: 'text', content: '    console.log("Merhaba");', isLine: true },
            { type: 'text', content: '}', isLine: true },
            { type: 'text', content: 'selamla();' }
        ],
        hint: 'function anahtar kelimesi ile fonksiyon tanımlanır.',
        explanation: 'function isim() { } şeklinde fonksiyon tanımlanır.'
    },
    {
        id: 22, category: 'functions', level: 5, title: 'Arrow Function', difficulty: 'easy',
        description: 'Ok fonksiyonu ile toplama yap.',
        expectedOutput: '8',
        code: [
            { type: 'text', content: 'const topla = (a, b) ' },
            { type: 'blank', answer: '=>', placeholder: '??', width: 50 },
            { type: 'text', content: ' a + b;', isLine: true },
            { type: 'text', content: 'console.log(topla(3, 5));' }
        ],
        hint: '=> ile arrow function tanımlanır.',
        explanation: 'Arrow function kısa fonksiyon yazımıdır.'
    },
    {
        id: 23, category: 'functions', level: 5, title: 'Return Değeri', difficulty: 'medium',
        description: 'Karesini döndüren fonksiyon.',
        expectedOutput: '25',
        code: [
            { type: 'text', content: 'function kare(n) {', isLine: true },
            { type: 'text', content: '    ' },
            { type: 'blank', answer: 'return', placeholder: '??????', width: 90 },
            { type: 'text', content: ' n * n;', isLine: true },
            { type: 'text', content: '}', isLine: true },
            { type: 'text', content: 'console.log(kare(5));' }
        ],
        hint: 'return ile değer döndürülür.',
        explanation: 'return fonksiyondan değer döndürür.'
    },
    {
        id: 24, category: 'functions', level: 5, title: 'Varsayılan Parametre', difficulty: 'medium',
        description: 'Varsayılan değeri olan parametre.',
        expectedOutput: 'Merhaba!',
        code: [
            { type: 'text', content: 'function selamla(mesaj ' },
            { type: 'blank', answer: '=', placeholder: '?', width: 40 },
            { type: 'text', content: ' "Merhaba!") {' },
            { type: 'newline' },
            { type: 'text', content: '    console.log(mesaj);', isLine: true },
            { type: 'text', content: '}', isLine: true },
            { type: 'text', content: 'selamla();' }
        ],
        hint: 'parametre = değer ile varsayılan atanır.',
        explanation: 'Varsayılan parametreler değer verilmezse kullanılır.'
    },
    {
        id: 25, category: 'functions', level: 5, title: 'Rest Parametreler', difficulty: 'medium',
        description: 'Sınırsız sayıda parametre al.',
        expectedOutput: '15',
        code: [
            { type: 'text', content: 'function topla(' },
            { type: 'blank', answer: '...', placeholder: '???', width: 60 },
            { type: 'text', content: 'sayilar) {' },
            { type: 'newline' },
            { type: 'text', content: '    return sayilar.reduce((a,b) => a+b);', isLine: true },
            { type: 'text', content: '}', isLine: true },
            { type: 'text', content: 'console.log(topla(1,2,3,4,5));' }
        ],
        hint: '... ile rest parametreler tanımlanır.',
        explanation: 'Rest parametreler diziyi argüman olarak alır.'
    },
    
    // Seviye 6: İleri Algoritmalar
    {
        id: 26, category: 'algorithms_advanced', level: 6, title: 'Faktöriyel', difficulty: 'medium',
        description: 'Recursive faktöriyel hesapla.',
        expectedOutput: '120',
        code: [
            { type: 'text', content: 'function faktoriyel(n) {', isLine: true },
            { type: 'text', content: '    if (n <= 1) return 1;', isLine: true },
            { type: 'text', content: '    return n ' },
            { type: 'blank', answer: '*', placeholder: '?', width: 40 },
            { type: 'text', content: ' faktoriyel(n - 1);', isLine: true },
            { type: 'text', content: '}', isLine: true },
            { type: 'text', content: 'console.log(faktoriyel(5));' }
        ],
        hint: 'Recursive çağrı için kendini çağır.',
        explanation: 'Faktöriyel: n! = n × (n-1)!'
    },
    {
        id: 27, category: 'algorithms_advanced', level: 6, title: 'Fibonacci', difficulty: 'medium',
        description: 'Fibonacci serisini oluştur.',
        expectedOutput: '0,1,1,2,3,5,8',
        code: [
            { type: 'text', content: 'function fib(n) {', isLine: true },
            { type: 'text', content: '    let arr = [0, 1];', isLine: true },
            { type: 'text', content: '    for (let i = 2; i < n; i++)', isLine: true },
            { type: 'text', content: '        arr.push(arr[i-1] ' },
            { type: 'blank', answer: '+', placeholder: '?', width: 40 },
            { type: 'text', content: ' arr[i-2]);', isLine: true },
            { type: 'text', content: '    return arr;', isLine: true },
            { type: 'text', content: '}', isLine: true },
            { type: 'text', content: 'console.log(fib(7));' }
        ],
        hint: 'Her sayı önceki ikisinin toplamı.',
        explanation: 'Fibonacci: F(n) = F(n-1) + F(n-2)'
    },
    {
        id: 28, category: 'algorithms_advanced', level: 6, title: 'Asal Sayı', difficulty: 'hard',
        description: 'Asal sayı kontrolü yap.',
        expectedOutput: 'true',
        code: [
            { type: 'text', content: 'function asalMi(n) {', isLine: true },
            { type: 'text', content: '    if (n < 2) return false;', isLine: true },
            { type: 'text', content: '    for (let i = 2; i < n; i++)', isLine: true },
            { type: 'text', content: '        if (n % i ' },
            { type: 'blank', answer: '===', placeholder: '???', width: 60 },
            { type: 'text', content: ' 0) return false;', isLine: true },
            { type: 'text', content: '    return true;', isLine: true },
            { type: 'text', content: '}', isLine: true },
            { type: 'text', content: 'console.log(asalMi(17));' }
        ],
        hint: '=== tam eşitlik kontrolü yapar.',
        explanation: 'Asal sayı sadece 1 ve kendisine bölünür.'
    },
    {
        id: 29, category: 'algorithms_advanced', level: 6, title: 'Dizi Tersine', difficulty: 'medium',
        description: 'Diziyi tersine çevir.',
        expectedOutput: '5,4,3,2,1',
        code: [
            { type: 'text', content: 'const arr = [1, 2, 3, 4, 5];', isLine: true },
            { type: 'text', content: 'const ters = arr.' },
            { type: 'blank', answer: 'reverse', placeholder: '???????', width: 100 },
            { type: 'text', content: '();', isLine: true },
            { type: 'text', content: 'console.log(ters);' }
        ],
        hint: 'reverse() diziyi tersine çevirir.',
        explanation: 'reverse() metodu diziyi yerinde tersine çevirir.'
    },
    {
        id: 30, category: 'algorithms_advanced', level: 6, title: 'Sort', difficulty: 'medium',
        description: 'Diziyi küçükten büyüğe sırala.',
        expectedOutput: '1,2,3,4,5',
        code: [
            { type: 'text', content: 'const arr = [5, 2, 4, 1, 3];', isLine: true },
            { type: 'text', content: 'arr.' },
            { type: 'blank', answer: 'sort', placeholder: '????', width: 70 },
            { type: 'text', content: '((a, b) => a - b);', isLine: true },
            { type: 'text', content: 'console.log(arr);' }
        ],
        hint: 'sort() ile dizi sıralanır.',
        explanation: 'sort((a,b) => a-b) sayısal sıralama yapar.'
    }
];

