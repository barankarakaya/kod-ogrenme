// Tüm diller için Komut Referansı Verileri
// Her dil kendi dosyasında tanımlı, burada birleştiriliyor

// allCommandsData'yı fonksiyon ile başlatıyoruz
function getAllCommandsData() {
    return {
        python: typeof pythonCommands !== 'undefined' ? pythonCommands : [],
        csharp: csharpCommands,
        javascript: javascriptCommands,
        web: webCommands
    };
}

// C# Komutları
const csharpCommands = [
    {
        id: 'console_writeline',
        name: 'Console.WriteLine()',
        category: 'io',
        categoryName: 'Giriş/Çıkış',
        icon: '📤',
        shortDesc: 'Konsola çıktı yazar ve satır atlar',
        syntax: 'Console.WriteLine(değer);',
        description: 'Console.WriteLine() metodu, konsola bir değer yazdırır ve otomatik olarak yeni satıra geçer. C#\'ta en temel çıktı metodudur.',
        parameters: [
            { name: 'değer', desc: 'Yazdırılacak değer (string, int, double, vb.)' }
        ],
        examples: [
            { title: 'Temel Kullanım', code: 'Console.WriteLine("Merhaba Dünya!");', output: 'Merhaba Dünya!' },
            { title: 'String Interpolation', code: 'string isim = "Ali";\nint yas = 25;\nConsole.WriteLine($"Ad: {isim}, Yaş: {yas}");', output: 'Ad: Ali, Yaş: 25' },
            { title: 'Sayı Formatlama', code: 'double fiyat = 1234.567;\nConsole.WriteLine($"Fiyat: {fiyat:C2}");', output: 'Fiyat: ₺1.234,57' },
            { title: 'Format String', code: 'Console.WriteLine("İsim: {0}, Yaş: {1}", "Ali", 25);', output: 'İsim: Ali, Yaş: 25' }
        ],
        tips: [
            'Console.Write() yeni satıra geçmez',
            '$ ile string interpolation kullanın',
            '{0}, {1} ile placeholder kullanabilirsiniz',
            ':C para, :N sayı, :P yüzde formatı'
        ],
        related: ['Console.Write', 'Console.ReadLine', 'string']
    },
    {
        id: 'console_write',
        name: 'Console.Write()',
        category: 'io',
        categoryName: 'Giriş/Çıkış',
        icon: '📤',
        shortDesc: 'Konsola çıktı yazar (satır atlamaz)',
        syntax: 'Console.Write(değer);',
        description: 'Console.Write() metodu, konsola yazdırır ancak satır sonuna geçmez. Aynı satırda devam eden çıktılar için kullanılır.',
        examples: [
            { title: 'Aynı Satırda', code: 'Console.Write("Merhaba ");\nConsole.Write("Dünya!");\nConsole.WriteLine();', output: 'Merhaba Dünya!' },
            { title: 'İlerleme Göstergesi', code: 'for(int i = 0; i <= 100; i += 10)\n{\n    Console.Write($"\\rYükleniyor: %{i}");\n    Thread.Sleep(200);\n}', output: 'Yükleniyor: %100' }
        ],
        tips: [
            '\\r ile satır başına dön',
            'İlerleme çubukları için idealdir',
            'WriteLine ile satırı bitirin'
        ],
        related: ['Console.WriteLine', 'Console.ReadLine']
    },
    {
        id: 'console_readline',
        name: 'Console.ReadLine()',
        category: 'io',
        categoryName: 'Giriş/Çıkış',
        icon: '📥',
        shortDesc: 'Kullanıcıdan satır okur',
        syntax: 'string girdi = Console.ReadLine();',
        description: 'Console.ReadLine() metodu, kullanıcının girdiği satırı okur ve string olarak döndürür. Enter tuşuna basılana kadar bekler.',
        examples: [
            { title: 'Temel Kullanım', code: 'Console.Write("Adınız: ");\nstring isim = Console.ReadLine();\nConsole.WriteLine($"Merhaba, {isim}!");', output: 'Adınız: Ali\nMerhaba, Ali!' },
            { title: 'Sayı Okuma', code: 'Console.Write("Yaşınız: ");\nint yas = int.Parse(Console.ReadLine());\nConsole.WriteLine($"5 yıl sonra {yas + 5} yaşında olacaksınız");', output: 'Yaşınız: 25\n5 yıl sonra 30 yaşında olacaksınız' },
            { title: 'Güvenli Dönüşüm', code: 'Console.Write("Sayı: ");\nif (int.TryParse(Console.ReadLine(), out int sayi))\n    Console.WriteLine($"Girilen: {sayi}");\nelse\n    Console.WriteLine("Geçersiz sayı!");', output: '' }
        ],
        tips: [
            'Her zaman string döndürür',
            'int.Parse() veya Convert.ToInt32() ile dönüştürün',
            'int.TryParse() daha güvenlidir',
            'null dönebilir (Ctrl+Z basılırsa)'
        ],
        related: ['Console.WriteLine', 'int.Parse', 'int.TryParse']
    },
    {
        id: 'int_csharp',
        name: 'int',
        category: 'variables',
        categoryName: 'Değişkenler',
        icon: '🔢',
        shortDesc: '32-bit tam sayı',
        syntax: 'int değişken = değer;',
        description: 'int, C#\'ta 32-bit işaretli tam sayıları temsil eder. -2,147,483,648 ile 2,147,483,647 arasında değer alır.',
        examples: [
            { title: 'Tanımlama', code: 'int yas = 25;\nint sicaklik = -5;\nint buyukSayi = 1_000_000;', output: '' },
            { title: 'Aritmetik', code: 'int a = 10, b = 3;\nConsole.WriteLine(a + b);   // 13\nConsole.WriteLine(a / b);   // 3 (tam bölme)\nConsole.WriteLine(a % b);   // 1 (kalan)', output: '13\n3\n1' },
            { title: 'Dönüşüm', code: 'string s = "42";\nint sayi = int.Parse(s);\nConsole.WriteLine(sayi + 8);', output: '50' }
        ],
        tips: [
            'Büyük sayılar için long kullanın',
            'Ondalık için double veya decimal',
            '_ ile okunabilirlik: 1_000_000',
            'var ile tip çıkarımı yapılabilir'
        ],
        related: ['long', 'double', 'decimal', 'var']
    },
    {
        id: 'string_csharp',
        name: 'string',
        category: 'strings',
        categoryName: 'Stringler',
        icon: '📝',
        shortDesc: 'Metin veri tipi',
        syntax: 'string değişken = "metin";',
        description: 'string, C#\'ta Unicode metin verilerini saklar. Immutable\'dır - değiştirilemez, her işlem yeni string oluşturur.',
        examples: [
            { title: 'Tanımlama', code: 'string isim = "Ali";\nstring bos = string.Empty;\nstring cokSatir = @"Satır 1\nSatır 2";', output: '' },
            { title: 'String Metodları', code: 'string metin = "  Merhaba Dünya  ";\nConsole.WriteLine(metin.Trim());        // "Merhaba Dünya"\nConsole.WriteLine(metin.ToUpper());     // "  MERHABA DÜNYA  "\nConsole.WriteLine(metin.Length);        // 17', output: 'Merhaba Dünya\n  MERHABA DÜNYA  \n17' },
            { title: 'Birleştirme', code: 'string ad = "Ali";\nstring soyad = "Yılmaz";\nConsole.WriteLine(ad + " " + soyad);\nConsole.WriteLine($"{ad} {soyad}");\nConsole.WriteLine(string.Concat(ad, " ", soyad));', output: 'Ali Yılmaz\nAli Yılmaz\nAli Yılmaz' },
            { title: 'Arama & Değiştirme', code: 'string metin = "Merhaba Dünya";\nConsole.WriteLine(metin.Contains("Dünya"));     // True\nConsole.WriteLine(metin.IndexOf("Dünya"));      // 8\nConsole.WriteLine(metin.Replace("Dünya", "C#")); // Merhaba C#', output: 'True\n8\nMerhaba C#' },
            { title: 'Bölme', code: 'string csv = "Ali,25,İstanbul";\nstring[] parcalar = csv.Split(\',\');\nforeach(var p in parcalar)\n    Console.WriteLine(p);', output: 'Ali\n25\nİstanbul' }
        ],
        tips: [
            'string.IsNullOrEmpty() ile kontrol edin',
            '@ ile verbatim string (escape yok)',
            '$ ile interpolation',
            'StringBuilder büyük birleştirmelerde daha hızlı'
        ],
        related: ['StringBuilder', 'char', 'Console.WriteLine']
    },
    {
        id: 'var_csharp',
        name: 'var',
        category: 'variables',
        categoryName: 'Değişkenler',
        icon: '❓',
        shortDesc: 'Tip çıkarımı (implicit typing)',
        syntax: 'var değişken = değer;',
        description: 'var anahtar kelimesi, derleyicinin değişken tipini otomatik belirlemesini sağlar. Tip derleme zamanında belirlenir.',
        examples: [
            { title: 'Temel Kullanım', code: 'var sayi = 42;           // int\nvar metin = "Merhaba";   // string\nvar ondalik = 3.14;      // double\nvar liste = new List<int>(); // List<int>', output: '' },
            { title: 'LINQ ile', code: 'var sayilar = new[] { 1, 2, 3, 4, 5 };\nvar ciftler = sayilar.Where(x => x % 2 == 0);', output: '' }
        ],
        tips: [
            'Sadece yerel değişkenlerde kullanılabilir',
            'İlk değer ataması zorunlu',
            'Tip derleme zamanında belirlenir (dynamic değil)',
            'Karmaşık tiplerde okunabilirliği artırır'
        ],
        related: ['int', 'string', 'dynamic']
    },
    {
        id: 'if_csharp',
        name: 'if / else',
        category: 'conditions',
        categoryName: 'Koşullar',
        icon: '🔀',
        shortDesc: 'Koşullu ifade',
        syntax: 'if (koşul)\n{\n    // kod\n}\nelse if (koşul2)\n{\n    // kod\n}\nelse\n{\n    // kod\n}',
        description: 'if ifadesi, koşullara göre farklı kod bloklarını çalıştırır. Koşul boolean olmalıdır.',
        examples: [
            { title: 'Basit if', code: 'int yas = 18;\nif (yas >= 18)\n{\n    Console.WriteLine("Yetişkin");\n}', output: 'Yetişkin' },
            { title: 'if-else', code: 'int puan = 45;\nif (puan >= 50)\n    Console.WriteLine("Geçti");\nelse\n    Console.WriteLine("Kaldı");', output: 'Kaldı' },
            { title: 'if-else if-else', code: 'int not = 75;\nif (not >= 90)\n    Console.WriteLine("AA");\nelse if (not >= 80)\n    Console.WriteLine("BA");\nelse if (not >= 70)\n    Console.WriteLine("BB");\nelse\n    Console.WriteLine("CC");', output: 'BB' },
            { title: 'Ternary Operatör', code: 'int yas = 20;\nstring durum = yas >= 18 ? "Yetişkin" : "Çocuk";\nConsole.WriteLine(durum);', output: 'Yetişkin' }
        ],
        tips: [
            'Tek satır için {} opsiyonel',
            '?: ternary operatör kısa koşullar için',
            'switch pattern matching (C# 8+) alternatif'
        ],
        related: ['switch', 'ternary', 'operators']
    },
    {
        id: 'for_csharp',
        name: 'for döngüsü',
        category: 'loops',
        categoryName: 'Döngüler',
        icon: '🔄',
        shortDesc: 'Sayaç tabanlı döngü',
        syntax: 'for (başlangıç; koşul; artış)\n{\n    // kod\n}',
        description: 'for döngüsü, belirli sayıda tekrar yapmak için kullanılır. Başlangıç değeri, koşul ve artış/azalış ifadelerinden oluşur.',
        examples: [
            { title: 'Temel for', code: 'for (int i = 0; i < 5; i++)\n{\n    Console.WriteLine(i);\n}', output: '0\n1\n2\n3\n4' },
            { title: 'Tersten Sayma', code: 'for (int i = 5; i > 0; i--)\n{\n    Console.WriteLine(i);\n}', output: '5\n4\n3\n2\n1' },
            { title: 'Adım Belirtme', code: 'for (int i = 0; i <= 10; i += 2)\n{\n    Console.Write(i + " ");\n}', output: '0 2 4 6 8 10' },
            { title: 'İç İçe Döngü', code: 'for (int i = 1; i <= 3; i++)\n{\n    for (int j = 1; j <= 3; j++)\n    {\n        Console.Write($"({i},{j}) ");\n    }\n    Console.WriteLine();\n}', output: '(1,1) (1,2) (1,3)\n(2,1) (2,2) (2,3)\n(3,1) (3,2) (3,3)' }
        ],
        tips: [
            'i++ = i = i + 1 kısaltması',
            'break ile döngüden çık',
            'continue ile sonraki iterasyona geç',
            'Sonsuz döngü: for(;;)'
        ],
        related: ['foreach', 'while', 'break', 'continue']
    },
    {
        id: 'foreach_csharp',
        name: 'foreach döngüsü',
        category: 'loops',
        categoryName: 'Döngüler',
        icon: '🔁',
        shortDesc: 'Koleksiyon üzerinde döngü',
        syntax: 'foreach (tip eleman in koleksiyon)\n{\n    // kod\n}',
        description: 'foreach döngüsü, bir koleksiyonun her elemanı üzerinde sırayla işlem yapmak için kullanılır. IEnumerable uygulayan her tipte çalışır.',
        examples: [
            { title: 'Dizi ile', code: 'string[] meyveler = { "elma", "armut", "muz" };\nforeach (string meyve in meyveler)\n{\n    Console.WriteLine(meyve);\n}', output: 'elma\narmut\nmuz' },
            { title: 'List ile', code: 'var sayilar = new List<int> { 1, 2, 3, 4, 5 };\nint toplam = 0;\nforeach (var sayi in sayilar)\n{\n    toplam += sayi;\n}\nConsole.WriteLine($"Toplam: {toplam}");', output: 'Toplam: 15' },
            { title: 'Dictionary ile', code: 'var kisi = new Dictionary<string, object>\n{\n    ["ad"] = "Ali",\n    ["yas"] = 25\n};\nforeach (var kvp in kisi)\n{\n    Console.WriteLine($"{kvp.Key}: {kvp.Value}");\n}', output: 'ad: Ali\nyas: 25' }
        ],
        tips: [
            'foreach içinde koleksiyon değiştirilemez',
            'for ile indeks gerekiyorsa kullanın',
            'var ile tip çıkarımı yapabilirsiniz',
            'LINQ daha fonksiyonel alternatif'
        ],
        related: ['for', 'while', 'LINQ', 'IEnumerable']
    },
    {
        id: 'while_csharp',
        name: 'while döngüsü',
        category: 'loops',
        categoryName: 'Döngüler',
        icon: '🔄',
        shortDesc: 'Koşul tabanlı döngü',
        syntax: 'while (koşul)\n{\n    // kod\n}',
        description: 'while döngüsü, koşul true olduğu sürece kod bloğunu tekrar eder. Koşul başta kontrol edilir.',
        examples: [
            { title: 'Temel while', code: 'int sayac = 0;\nwhile (sayac < 5)\n{\n    Console.WriteLine(sayac);\n    sayac++;\n}', output: '0\n1\n2\n3\n4' },
            { title: 'Kullanıcı Girişi', code: 'string sifre;\nwhile ((sifre = Console.ReadLine()) != "1234")\n{\n    Console.WriteLine("Yanlış şifre!");\n}\nConsole.WriteLine("Giriş başarılı!");', output: '' },
            { title: 'do-while', code: 'int sayi;\ndo\n{\n    Console.Write("Pozitif sayı: ");\n    sayi = int.Parse(Console.ReadLine());\n} while (sayi <= 0);', output: '' }
        ],
        tips: [
            'Sonsuz döngü riski - koşulu güncelleyin!',
            'do-while: en az 1 kez çalışır',
            'while(true) ile sonsuz döngü'
        ],
        related: ['for', 'do-while', 'break']
    },
    {
        id: 'method_csharp',
        name: 'Metot Tanımlama',
        category: 'functions',
        categoryName: 'Fonksiyonlar',
        icon: '⚙️',
        shortDesc: 'Fonksiyon/metot tanımlama',
        syntax: 'erişim [static] dönüşTipi MetotAdı(parametreler)\n{\n    // kod\n    return değer;\n}',
        description: 'C#\'ta fonksiyonlara metot denir. Metotlar sınıf içinde tanımlanır ve belirli görevleri yerine getirir.',
        examples: [
            { title: 'void Metot', code: 'static void Selamla(string isim)\n{\n    Console.WriteLine($"Merhaba, {isim}!");\n}\n\nSelamla("Ali");', output: 'Merhaba, Ali!' },
            { title: 'Değer Döndüren', code: 'static int Topla(int a, int b)\n{\n    return a + b;\n}\n\nint sonuc = Topla(5, 3);\nConsole.WriteLine(sonuc);', output: '8' },
            { title: 'Varsayılan Parametre', code: 'static void Selamla(string isim = "Misafir")\n{\n    Console.WriteLine($"Merhaba, {isim}!");\n}\n\nSelamla();\nSelamla("Ayşe");', output: 'Merhaba, Misafir!\nMerhaba, Ayşe!' },
            { title: 'out Parametre', code: 'static bool TryDivide(int a, int b, out int sonuc)\n{\n    if (b == 0) { sonuc = 0; return false; }\n    sonuc = a / b;\n    return true;\n}', output: '' },
            { title: 'Expression-bodied', code: 'static int Kare(int x) => x * x;\nstatic void Yazdir(string msg) => Console.WriteLine(msg);', output: '' }
        ],
        tips: [
            'PascalCase isimlendirme: ToplamHesapla',
            'void değer döndürmez',
            'static ile nesne olmadan çağrılır',
            '=> ile tek satır metot (expression-bodied)'
        ],
        related: ['return', 'static', 'void', 'class']
    },
    {
        id: 'array_csharp',
        name: 'Array (Dizi)',
        category: 'arrays',
        categoryName: 'Diziler',
        icon: '📋',
        shortDesc: 'Sabit boyutlu dizi',
        syntax: 'tip[] dizi = new tip[boyut];\ntip[] dizi = { e1, e2, ... };',
        description: 'Array, C#\'ta sabit boyutlu, aynı tipte elemanları tutan veri yapısıdır. Boyutu oluşturulduktan sonra değiştirilemez.',
        examples: [
            { title: 'Tanımlama', code: 'int[] sayilar = new int[5];           // 5 elemanlı\nstring[] isimler = { "Ali", "Veli" };  // Değerlerle\nvar notlar = new[] { 85, 90, 78 };     // Tip çıkarımı', output: '' },
            { title: 'Erişim ve Atama', code: 'int[] dizi = { 10, 20, 30, 40, 50 };\nConsole.WriteLine(dizi[0]);     // 10\nConsole.WriteLine(dizi[^1]);    // 50 (son - C# 8+)\ndizi[1] = 25;\nConsole.WriteLine(dizi.Length); // 5', output: '10\n50\n5' },
            { title: 'Döngü ile', code: 'int[] sayilar = { 1, 2, 3, 4, 5 };\nforeach (int s in sayilar)\n    Console.Write(s + " ");', output: '1 2 3 4 5' },
            { title: 'Array Metodları', code: 'int[] dizi = { 3, 1, 4, 1, 5 };\nArray.Sort(dizi);               // Sırala\nArray.Reverse(dizi);            // Ters çevir\nint idx = Array.IndexOf(dizi, 4); // 4\'ün indeksi', output: '' }
        ],
        tips: [
            'Boyutu değiştirmek için Array.Resize()',
            'Dinamik boyut için List<T> kullanın',
            '^1 son eleman (Index from end)',
            '[1..3] dilimleme (Range - C# 8+)'
        ],
        related: ['List<T>', 'foreach', 'Array.Sort']
    },
    {
        id: 'list_csharp',
        name: 'List<T>',
        category: 'arrays',
        categoryName: 'Diziler',
        icon: '📝',
        shortDesc: 'Dinamik liste',
        syntax: 'List<tip> liste = new List<tip>();',
        description: 'List<T>, dinamik boyutlu, tip güvenli bir koleksiyondur. System.Collections.Generic namespace\'inde bulunur. Eleman ekleyip çıkardıkça boyutu otomatik ayarlanır.',
        examples: [
            { title: 'Oluşturma', code: 'var liste = new List<int>();\nvar isimler = new List<string> { "Ali", "Veli" };', output: '' },
            { title: 'Eleman İşlemleri', code: 'var liste = new List<int> { 1, 2, 3 };\nliste.Add(4);              // Sona ekle\nliste.Insert(0, 0);        // Başa ekle\nliste.Remove(2);           // 2 değerini sil\nliste.RemoveAt(0);         // İndeksteki sil\nConsole.WriteLine(liste.Count);', output: '3' },
            { title: 'Arama', code: 'var liste = new List<int> { 1, 2, 3, 4, 5 };\nConsole.WriteLine(liste.Contains(3));    // True\nConsole.WriteLine(liste.IndexOf(3));     // 2\nvar bulundu = liste.Find(x => x > 3);    // 4', output: 'True\n2' },
            { title: 'LINQ ile', code: 'var sayilar = new List<int> { 1, 2, 3, 4, 5 };\nvar ciftler = sayilar.Where(x => x % 2 == 0).ToList();\nvar kareler = sayilar.Select(x => x * x).ToList();', output: '' }
        ],
        tips: [
            'Array yerine çoğunlukla List tercih edin',
            'Count özelliği eleman sayısı',
            'Capacity kapasite (performans için)',
            'LINQ ile güçlü sorgular'
        ],
        related: ['Array', 'Dictionary', 'LINQ', 'foreach']
    }
];

// JavaScript Komutları
const javascriptCommands = [
    {
        id: 'console_log',
        name: 'console.log()',
        category: 'io',
        categoryName: 'Giriş/Çıkış',
        icon: '📤',
        shortDesc: 'Konsola çıktı yazar',
        syntax: 'console.log(değer1, değer2, ...);',
        description: 'console.log() fonksiyonu, tarayıcı konsoluna veya Node.js konsoluna çıktı yazdırmak için kullanılır. Hata ayıklama için en temel araçtır.',
        examples: [
            { title: 'Temel Kullanım', code: 'console.log("Merhaba Dünya!");', output: 'Merhaba Dünya!' },
            { title: 'Birden Fazla Değer', code: 'console.log("İsim:", "Ali", "Yaş:", 25);', output: 'İsim: Ali Yaş: 25' },
            { title: 'Template Literal', code: 'const isim = "Ayşe";\nconsole.log(`Merhaba, ${isim}!`);', output: 'Merhaba, Ayşe!' },
            { title: 'Nesne Yazdırma', code: 'const kisi = { ad: "Ali", yas: 25 };\nconsole.log(kisi);', output: '{ ad: "Ali", yas: 25 }' },
            { title: 'Tablo Görünümü', code: 'const veriler = [{ad: "Ali"}, {ad: "Veli"}];\nconsole.table(veriler);', output: '(tablo formatında)' }
        ],
        tips: [
            'console.error() hata mesajları için',
            'console.warn() uyarılar için',
            'console.table() tablolar için',
            'console.time()/timeEnd() süre ölçmek için'
        ],
        related: ['console.error', 'console.table', 'alert']
    },
    {
        id: 'let',
        name: 'let',
        category: 'variables',
        categoryName: 'Değişkenler',
        icon: '📦',
        shortDesc: 'Block-scoped değişken',
        syntax: 'let değişkenAdı = değer;',
        description: 'let, ES6 ile gelen block-scoped değişken tanımlama anahtar kelimesidir. var\'dan farklı olarak sadece tanımlandığı blok içinde geçerlidir.',
        examples: [
            { title: 'Temel Kullanım', code: 'let isim = "Ali";\nlet yas = 25;\nyas = 26;  // Değiştirilebilir\nconsole.log(isim, yas);', output: 'Ali 26' },
            { title: 'Block Scope', code: 'if (true) {\n    let x = 10;\n    console.log(x); // 10\n}\n// console.log(x); // Hata!', output: '10' },
            { title: 'Döngüde', code: 'for (let i = 0; i < 3; i++) {\n    console.log(i);\n}\n// console.log(i); // Hata! i dışarıda tanımsız', output: '0\n1\n2' }
        ],
        tips: [
            'var yerine let kullanın',
            'Aynı scope\'ta tekrar tanımlanamaz',
            'Hoisting: tanımdan önce kullanılamaz',
            'Değişmeyecekse const kullanın'
        ],
        related: ['const', 'var', 'scope']
    },
    {
        id: 'const',
        name: 'const',
        category: 'variables',
        categoryName: 'Değişkenler',
        icon: '🔒',
        shortDesc: 'Sabit değişken',
        syntax: 'const DEĞİŞKEN_ADI = değer;',
        description: 'const, değeri değiştirilemeyen sabit tanımlar. Ancak nesne ve dizilerde içerik değiştirilebilir, sadece referans sabittir.',
        examples: [
            { title: 'Temel Kullanım', code: 'const PI = 3.14159;\nconst isim = "Ali";\n// PI = 3.14; // Hata! Değiştirilemez', output: '' },
            { title: 'Nesne ile', code: 'const kisi = { ad: "Ali" };\nkisi.ad = "Veli";  // Çalışır!\nconsole.log(kisi.ad);', output: 'Veli' },
            { title: 'Dizi ile', code: 'const dizi = [1, 2, 3];\ndizi.push(4);  // Çalışır!\nconsole.log(dizi);', output: '[1, 2, 3, 4]' }
        ],
        tips: [
            'Değişmeyecek değerler için const kullanın',
            'Nesne/dizi referansı sabit, içerik değişebilir',
            'Object.freeze() ile tamamen dondurabilirsiniz',
            'BÜYÜK_HARF isimlendirme konvansiyonu'
        ],
        related: ['let', 'var', 'Object.freeze']
    },
    {
        id: 'arrow_function',
        name: 'Arrow Function (=>)',
        category: 'functions',
        categoryName: 'Fonksiyonlar',
        icon: '➡️',
        shortDesc: 'Kısa fonksiyon yazımı',
        syntax: 'const fonksiyon = (param) => ifade;\nconst fonksiyon = (param) => { return değer; };',
        description: 'Arrow function, ES6 ile gelen kısa fonksiyon yazım şeklidir. this bağlamı farklıdır - lexical scope kullanır.',
        examples: [
            { title: 'Tek Parametre', code: 'const kare = x => x * x;\nconsole.log(kare(5));', output: '25' },
            { title: 'Çoklu Parametre', code: 'const topla = (a, b) => a + b;\nconsole.log(topla(3, 5));', output: '8' },
            { title: 'Çok Satırlı', code: 'const hesapla = (a, b) => {\n    const toplam = a + b;\n    const fark = a - b;\n    return { toplam, fark };\n};\nconsole.log(hesapla(10, 3));', output: '{ toplam: 13, fark: 7 }' },
            { title: 'Array Metodlarıyla', code: 'const sayilar = [1, 2, 3, 4, 5];\nconst ciftler = sayilar.filter(x => x % 2 === 0);\nconst kareler = sayilar.map(x => x * x);\nconsole.log(ciftler, kareler);', output: '[2, 4] [1, 4, 9, 16, 25]' }
        ],
        tips: [
            'Tek parametre için parantez opsiyonel',
            'Tek ifade için return ve {} opsiyonel',
            'this dış scope\'tan alınır (lexical)',
            'Nesne döndürmek için: x => ({ key: value })'
        ],
        related: ['function', 'this', 'map', 'filter']
    },
    {
        id: 'function_js',
        name: 'function',
        category: 'functions',
        categoryName: 'Fonksiyonlar',
        icon: '⚙️',
        shortDesc: 'Fonksiyon tanımlama',
        syntax: 'function fonksiyonAdı(parametreler) {\n    // kod\n    return değer;\n}',
        description: 'function anahtar kelimesi ile fonksiyon tanımlanır. Hoisted\'dır - tanımdan önce çağrılabilir.',
        examples: [
            { title: 'Temel Fonksiyon', code: 'function selamla(isim) {\n    return `Merhaba, ${isim}!`;\n}\nconsole.log(selamla("Ali"));', output: 'Merhaba, Ali!' },
            { title: 'Varsayılan Parametre', code: 'function selamla(isim = "Misafir") {\n    console.log(`Merhaba, ${isim}!`);\n}\nselamla();\nselamla("Ayşe");', output: 'Merhaba, Misafir!\nMerhaba, Ayşe!' },
            { title: 'Rest Parametreler', code: 'function topla(...sayilar) {\n    return sayilar.reduce((a, b) => a + b, 0);\n}\nconsole.log(topla(1, 2, 3, 4, 5));', output: '15' },
            { title: 'Destructuring', code: 'function bilgiGoster({ ad, yas }) {\n    console.log(`${ad} ${yas} yaşında`);\n}\nbilgiGoster({ ad: "Ali", yas: 25 });', output: 'Ali 25 yaşında' }
        ],
        tips: [
            'Hoisting: tanımdan önce çağrılabilir',
            '...rest ile değişken sayıda parametre',
            'Destructuring ile nesne parametresi',
            'Arrow function modern alternatif'
        ],
        related: ['arrow_function', 'return', 'this']
    },
    {
        id: 'array_methods',
        name: 'Array Metodları',
        category: 'arrays',
        categoryName: 'Diziler',
        icon: '📋',
        shortDesc: 'map, filter, reduce, forEach',
        syntax: 'dizi.map(fn)\ndizi.filter(fn)\ndizi.reduce(fn, başlangıç)',
        description: 'JavaScript dizileri güçlü fonksiyonel metodlara sahiptir. Bu metodlar orijinal diziyi değiştirmez, yeni dizi döndürür.',
        examples: [
            { title: 'map() - Dönüştür', code: 'const sayilar = [1, 2, 3, 4];\nconst kareler = sayilar.map(x => x * x);\nconsole.log(kareler);', output: '[1, 4, 9, 16]' },
            { title: 'filter() - Filtrele', code: 'const sayilar = [1, 2, 3, 4, 5, 6];\nconst ciftler = sayilar.filter(x => x % 2 === 0);\nconsole.log(ciftler);', output: '[2, 4, 6]' },
            { title: 'reduce() - İndirge', code: 'const sayilar = [1, 2, 3, 4, 5];\nconst toplam = sayilar.reduce((acc, x) => acc + x, 0);\nconsole.log(toplam);', output: '15' },
            { title: 'find() - Bul', code: 'const kisiler = [{ad: "Ali", yas: 25}, {ad: "Veli", yas: 30}];\nconst kisi = kisiler.find(k => k.yas > 28);\nconsole.log(kisi);', output: '{ ad: "Veli", yas: 30 }' },
            { title: 'some() & every()', code: 'const sayilar = [1, 2, 3, 4, 5];\nconsole.log(sayilar.some(x => x > 3));   // En az biri\nconsole.log(sayilar.every(x => x > 0));  // Hepsi', output: 'true\ntrue' },
            { title: 'Zincirleme', code: 'const sonuc = [1, 2, 3, 4, 5]\n    .filter(x => x % 2 === 0)\n    .map(x => x * 2);\nconsole.log(sonuc);', output: '[4, 8]' }
        ],
        tips: [
            'map: her eleman için dönüşüm',
            'filter: koşulu sağlayanları al',
            'reduce: tek değere indir',
            'Zincirleme (chaining) ile güçlü sorgular'
        ],
        related: ['forEach', 'find', 'includes', 'sort']
    },
    {
        id: 'template_literal',
        name: 'Template Literal',
        category: 'strings',
        categoryName: 'Stringler',
        icon: '✨',
        shortDesc: 'Backtick ile string formatlama',
        syntax: '`metin ${ifade} metin`',
        description: 'Template literal (backtick), ES6 ile gelen modern string formatlama yöntemidir. Çok satırlı string ve ifade yerleştirme destekler.',
        examples: [
            { title: 'Temel Kullanım', code: 'const isim = "Ali";\nconst mesaj = `Merhaba, ${isim}!`;\nconsole.log(mesaj);', output: 'Merhaba, Ali!' },
            { title: 'İfadeler', code: 'const x = 10;\nconsole.log(`Karesi: ${x ** 2}`);\nconsole.log(`Çift mi: ${x % 2 === 0}`);', output: 'Karesi: 100\nÇift mi: true' },
            { title: 'Çok Satırlı', code: 'const html = `\n    <div>\n        <h1>Başlık</h1>\n        <p>Paragraf</p>\n    </div>\n`;\nconsole.log(html);', output: '<div>...' },
            { title: 'Fonksiyon Çağrısı', code: 'const buyuk = str => str.toUpperCase();\nconsole.log(`Sonuç: ${buyuk("merhaba")}`);', output: 'Sonuç: MERHABA' }
        ],
        tips: [
            'Backtick (`) kullanın - tek/çift tırnak değil',
            '${} içine herhangi bir ifade yazılabilir',
            'Çok satırlı string için idealdir',
            'Tagged template literal ile özel işlem'
        ],
        related: ['string', 'concat', 'join']
    },
    {
        id: 'if_js',
        name: 'if / else',
        category: 'conditions',
        categoryName: 'Koşullar',
        icon: '🔀',
        shortDesc: 'Koşullu ifade',
        syntax: 'if (koşul) {\n    // kod\n} else if (koşul2) {\n    // kod\n} else {\n    // kod\n}',
        description: 'if ifadesi, koşullara göre farklı kod bloklarını çalıştırır.',
        examples: [
            { title: 'Temel if-else', code: 'const yas = 18;\nif (yas >= 18) {\n    console.log("Yetişkin");\n} else {\n    console.log("Çocuk");\n}', output: 'Yetişkin' },
            { title: 'Ternary', code: 'const yas = 20;\nconst durum = yas >= 18 ? "Yetişkin" : "Çocuk";\nconsole.log(durum);', output: 'Yetişkin' },
            { title: 'Kısa Devre', code: 'const isim = null;\nconst gosterilecek = isim || "Misafir";\nconsole.log(gosterilecek);', output: 'Misafir' },
            { title: 'Nullish Coalescing', code: 'const deger = 0;\nconst sonuc = deger ?? "varsayılan";\nconsole.log(sonuc);  // 0 (|| ile "varsayılan" olurdu)', output: '0' }
        ],
        tips: [
            '=== tip ve değer karşılaştırır',
            '== sadece değer karşılaştırır (kaçının)',
            '|| ile varsayılan değer (falsy kontrolü)',
            '?? ile null/undefined kontrolü'
        ],
        related: ['switch', 'ternary', '||', '??']
    },
    {
        id: 'for_js',
        name: 'Döngüler',
        category: 'loops',
        categoryName: 'Döngüler',
        icon: '🔄',
        shortDesc: 'for, for...of, for...in, while',
        syntax: 'for (let i = 0; i < n; i++) { }\nfor (const item of array) { }\nfor (const key in object) { }',
        description: 'JavaScript\'te farklı döngü türleri vardır. Her biri farklı senaryolar için uygundur.',
        examples: [
            { title: 'Klasik for', code: 'for (let i = 0; i < 5; i++) {\n    console.log(i);\n}', output: '0\n1\n2\n3\n4' },
            { title: 'for...of (Dizi)', code: 'const meyveler = ["elma", "armut", "muz"];\nfor (const meyve of meyveler) {\n    console.log(meyve);\n}', output: 'elma\narmut\nmuz' },
            { title: 'for...in (Nesne)', code: 'const kisi = { ad: "Ali", yas: 25 };\nfor (const key in kisi) {\n    console.log(`${key}: ${kisi[key]}`);\n}', output: 'ad: Ali\nyas: 25' },
            { title: 'forEach', code: 'const sayilar = [1, 2, 3];\nsayilar.forEach((sayi, index) => {\n    console.log(`${index}: ${sayi}`);\n});', output: '0: 1\n1: 2\n2: 3' },
            { title: 'while', code: 'let i = 0;\nwhile (i < 3) {\n    console.log(i);\n    i++;\n}', output: '0\n1\n2' }
        ],
        tips: [
            'for...of: değerler üzerinde (array, string)',
            'for...in: anahtarlar üzerinde (object)',
            'forEach: array metodu, break kullanılamaz',
            'for...of dizilerde for...in\'den hızlı'
        ],
        related: ['map', 'filter', 'reduce', 'break']
    }
];

// HTML & CSS Komutları
const webCommands = [
    {
        id: 'html_structure',
        name: 'HTML Yapısı',
        category: 'basics',
        categoryName: 'Temel',
        icon: '📄',
        shortDesc: 'Temel HTML sayfa yapısı',
        syntax: '<!DOCTYPE html>\\n<html>\\n<head>...</head>\\n<body>...</body>\\n</html>',
        description: 'Her HTML sayfası bu temel yapıya sahip olmalıdır. DOCTYPE tarayıcıya HTML5 kullanıldığını söyler.',
        examples: [
            { title: 'Temel Şablon', code: '<!DOCTYPE html>\n<html lang="tr">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sayfa Başlığı</title>\n</head>\n<body>\n    <h1>Merhaba Dünya!</h1>\n</body>\n</html>', output: '' }
        ],
        tips: [
            'DOCTYPE her zaman ilk satırda',
            'lang özelliği SEO ve erişilebilirlik için',
            'viewport meta mobil uyumluluk için şart',
            'charset UTF-8 Türkçe karakterler için'
        ],
        related: ['head', 'body', 'meta']
    },
    {
        id: 'div_span',
        name: '<div> ve <span>',
        category: 'basics',
        categoryName: 'Temel',
        icon: '📦',
        shortDesc: 'Konteyner elementler',
        syntax: '<div>Block element</div>\\n<span>Inline element</span>',
        description: 'div block-level, span inline-level konteyner elementidir. Gruplama ve stil uygulamak için kullanılır.',
        examples: [
            { title: 'Block vs Inline', code: '<div style="background: lightblue;">\n    Bu bir BLOCK element. Satırın tamamını kaplar.\n</div>\n<p>Bu metin <span style="color: red;">kırmızı</span> kelime içerir.</p>', output: '' }
        ],
        tips: [
            'div: block-level, tam satır',
            'span: inline, sadece içerik kadar',
            'Semantic HTML: article, section tercih edin',
            'Gereksiz div kullanmaktan kaçının (div soup)'
        ],
        related: ['section', 'article', 'display']
    },
    {
        id: 'headings',
        name: '<h1> - <h6>',
        category: 'basics',
        categoryName: 'Temel',
        icon: '📝',
        shortDesc: 'Başlık etiketleri',
        syntax: '<h1>En Büyük</h1>\\n...\\n<h6>En Küçük</h6>',
        description: 'Başlık etiketleri h1 (en büyük) ile h6 (en küçük) arasında derecelenir. SEO ve erişilebilirlik için önemlidir.',
        examples: [
            { title: 'Başlık Hiyerarşisi', code: '<h1>Ana Başlık (Sayfa Başlığı)</h1>\n<h2>Alt Başlık</h2>\n<h3>Bölüm Başlığı</h3>\n<h4>Alt Bölüm</h4>', output: '' }
        ],
        tips: [
            'Sayfada TEK h1 olmalı',
            'Sıra atlamamalı: h1 → h2 → h3',
            'SEO için başlık yapısı kritik',
            'Sadece stil için başlık kullanmayın'
        ],
        related: ['p', 'article', 'section']
    },
    {
        id: 'a_link',
        name: '<a> (Link)',
        category: 'basics',
        categoryName: 'Temel',
        icon: '🔗',
        shortDesc: 'Hyperlink oluşturur',
        syntax: '<a href="url" target="_blank">Link Metni</a>',
        description: 'Anchor (a) etiketi, başka sayfalara, dosyalara veya sayfa içi konumlara link oluşturur.',
        examples: [
            { title: 'Link Türleri', code: '<!-- Dış link -->\n<a href="https://google.com" target="_blank" rel="noopener">Google</a>\n\n<!-- Sayfa içi -->\n<a href="#bolum1">Bölüm 1\'e Git</a>\n\n<!-- Email -->\n<a href="mailto:info@site.com">Email Gönder</a>\n\n<!-- Telefon -->\n<a href="tel:+905551234567">Ara</a>', output: '' }
        ],
        tips: [
            'target="_blank" yeni sekmede açar',
            'rel="noopener" güvenlik için şart',
            '# ile sayfa içi link (id\'ye)',
            'mailto: ve tel: protokolleri'
        ],
        related: ['button', 'nav']
    },
    {
        id: 'img',
        name: '<img> (Resim)',
        category: 'basics',
        categoryName: 'Temel',
        icon: '🖼️',
        shortDesc: 'Resim ekler',
        syntax: '<img src="resim.jpg" alt="Açıklama" width="300">',
        description: 'img etiketi sayfaya resim ekler. Self-closing (kapanış etiketi yok) bir elementtir.',
        examples: [
            { title: 'Resim Kullanımı', code: '<img \n    src="foto.jpg" \n    alt="Güzel bir manzara"\n    width="400"\n    height="300"\n    loading="lazy"\n>', output: '' },
            { title: 'Responsive Resim', code: '<img \n    src="small.jpg"\n    srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"\n    sizes="(max-width: 600px) 480px, 800px"\n    alt="Responsive resim"\n>', output: '' }
        ],
        tips: [
            'alt özelliği ZORUNLU (erişilebilirlik)',
            'loading="lazy" performans için',
            'srcset ile responsive resimler',
            'width/height ile layout shift önleyin'
        ],
        related: ['figure', 'picture', 'srcset']
    },
    {
        id: 'form',
        name: '<form> ve Form Elemanları',
        category: 'basics',
        categoryName: 'Temel',
        icon: '📋',
        shortDesc: 'Form ve giriş elemanları',
        syntax: '<form action="url" method="POST">\\n    <input>\\n    <button>Gönder</button>\\n</form>',
        description: 'Form etiketi kullanıcı girişi toplamak için kullanılır. İçinde çeşitli input elemanları barındırır.',
        examples: [
            { title: 'Form Örneği', code: '<form action="/kayit" method="POST">\n    <label for="isim">İsim:</label>\n    <input type="text" id="isim" name="isim" required>\n    \n    <label for="email">Email:</label>\n    <input type="email" id="email" name="email" required>\n    \n    <label for="sifre">Şifre:</label>\n    <input type="password" id="sifre" name="sifre" minlength="6">\n    \n    <button type="submit">Kayıt Ol</button>\n</form>', output: '' },
            { title: 'Input Tipleri', code: '<input type="text">        <!-- Metin -->\n<input type="email">       <!-- Email -->\n<input type="password">    <!-- Şifre -->\n<input type="number">      <!-- Sayı -->\n<input type="date">        <!-- Tarih -->\n<input type="checkbox">    <!-- Onay kutusu -->\n<input type="radio">       <!-- Radyo buton -->\n<input type="file">        <!-- Dosya -->\n<textarea></textarea>      <!-- Çok satırlı -->\n<select><option>...</option></select> <!-- Dropdown -->', output: '' }
        ],
        tips: [
            'label for ile input id eşleşmeli',
            'required ile zorunlu alan',
            'type ile doğrulama: email, number, url',
            'placeholder ile ipucu metni'
        ],
        related: ['input', 'button', 'label', 'validation']
    },
    {
        id: 'css_selectors',
        name: 'CSS Seçiciler',
        category: 'basics',
        categoryName: 'Temel',
        icon: '🎯',
        shortDesc: 'Element seçme yöntemleri',
        syntax: 'element { }\\n.class { }\\n#id { }',
        description: 'CSS seçicileri, stillendirmek istediğiniz HTML elementlerini hedefler.',
        examples: [
            { title: 'Temel Seçiciler', code: '/* Element seçici */\np { color: blue; }\n\n/* Class seçici */\n.btn { padding: 10px 20px; }\n\n/* ID seçici */\n#header { background: #333; }\n\n/* Evrensel seçici */\n* { margin: 0; padding: 0; }', output: '' },
            { title: 'Kombine Seçiciler', code: '/* Çocuk seçici */\nnav > ul { list-style: none; }\n\n/* Torun seçici */\narticle p { line-height: 1.6; }\n\n/* Kardeş seçici */\nh2 + p { margin-top: 0; }\n\n/* Attribute seçici */\ninput[type="email"] { border-color: blue; }', output: '' },
            { title: 'Pseudo Seçiciler', code: '/* Pseudo-class */\na:hover { color: red; }\nli:first-child { font-weight: bold; }\nli:nth-child(even) { background: #f0f0f0; }\n\n/* Pseudo-element */\np::first-line { font-size: 1.2em; }\n.item::before { content: "→ "; }', output: '' }
        ],
        tips: [
            'Spesifiklik: inline > #id > .class > element',
            '!important kullanmaktan kaçının',
            'BEM metodolojisi: .block__element--modifier',
            ':hover, :focus, :active state\'leri'
        ],
        related: ['specificity', 'cascade', 'inheritance']
    },
    {
        id: 'css_box_model',
        name: 'Box Model',
        category: 'basics',
        categoryName: 'Temel',
        icon: '📦',
        shortDesc: 'Margin, padding, border',
        syntax: 'margin: 10px;\\npadding: 20px;\\nborder: 1px solid black;',
        description: 'Her HTML elementi bir kutu olarak düşünülür. İçerik, padding, border ve margin katmanlarından oluşur.',
        examples: [
            { title: 'Box Model Özellikleri', code: '.kutu {\n    /* İçerik boyutu */\n    width: 200px;\n    height: 100px;\n    \n    /* İç boşluk */\n    padding: 20px;              /* Tüm yönler */\n    padding: 10px 20px;         /* Dikey Yatay */\n    padding: 10px 20px 15px 25px; /* Üst Sağ Alt Sol */\n    \n    /* Kenarlık */\n    border: 2px solid #333;\n    border-radius: 8px;         /* Köşe yuvarlatma */\n    \n    /* Dış boşluk */\n    margin: 10px auto;          /* Ortala */\n    \n    /* Box-sizing */\n    box-sizing: border-box;     /* Width içinde hesapla */\n}', output: '' }
        ],
        tips: [
            'box-sizing: border-box; her zaman kullanın',
            'margin: auto; ile yatay ortalama',
            'Margin collapse: dikey margin\'lar çakışır',
            'Padding arka plan rengini kapsar'
        ],
        related: ['display', 'flexbox', 'grid']
    },
    {
        id: 'flexbox',
        name: 'Flexbox',
        category: 'basics',
        categoryName: 'Temel',
        icon: '📐',
        shortDesc: 'Esnek yerleşim sistemi',
        syntax: 'display: flex;\\njustify-content: center;\\nalign-items: center;',
        description: 'Flexbox, tek boyutlu (satır veya sütun) esnek yerleşim sistemidir. Modern CSS layout\'un temelidir.',
        examples: [
            { title: 'Temel Flexbox', code: '.container {\n    display: flex;\n    \n    /* Ana eksen hizalama */\n    justify-content: flex-start;   /* Başa */\n    justify-content: center;       /* Ortaya */\n    justify-content: flex-end;     /* Sona */\n    justify-content: space-between; /* Araya dağıt */\n    justify-content: space-around;  /* Etrafına dağıt */\n    justify-content: space-evenly;  /* Eşit dağıt */\n    \n    /* Çapraz eksen hizalama */\n    align-items: stretch;    /* Uzat (varsayılan) */\n    align-items: flex-start; /* Üste */\n    align-items: center;     /* Ortaya */\n    align-items: flex-end;   /* Alta */\n    \n    /* Yön */\n    flex-direction: row;     /* Yatay (varsayılan) */\n    flex-direction: column;  /* Dikey */\n    \n    /* Sarma */\n    flex-wrap: wrap;         /* Taşanları alt satıra */\n    \n    /* Boşluk */\n    gap: 20px;\n}', output: '' },
            { title: 'Flex Item Özellikleri', code: '.item {\n    flex: 1;            /* Eşit genişlik */\n    flex-grow: 1;       /* Büyüme oranı */\n    flex-shrink: 0;     /* Küçülmeyi engelle */\n    flex-basis: 200px;  /* Başlangıç boyutu */\n    \n    align-self: center; /* Kendini ortala */\n    order: 1;           /* Sıralama */\n}', output: '' },
            { title: 'Ortalama', code: '/* Tam ortaya hizalama */\n.center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}', output: '' }
        ],
        tips: [
            'justify-content: ana eksen (x)',
            'align-items: çapraz eksen (y)',
            'flex: 1 ile eşit genişlik',
            'gap ile boşluk (margin yerine)'
        ],
        related: ['grid', 'display', 'align']
    },
    {
        id: 'css_grid',
        name: 'CSS Grid',
        category: 'basics',
        categoryName: 'Temel',
        icon: '🔲',
        shortDesc: '2 boyutlu yerleşim sistemi',
        syntax: 'display: grid;\\ngrid-template-columns: repeat(3, 1fr);',
        description: 'CSS Grid, iki boyutlu (satır ve sütun) yerleşim sistemidir. Karmaşık layout\'lar için idealdir.',
        examples: [
            { title: 'Temel Grid', code: '.grid-container {\n    display: grid;\n    \n    /* Sütunlar */\n    grid-template-columns: 200px 1fr 1fr;  /* Piksel ve fr */\n    grid-template-columns: repeat(3, 1fr); /* 3 eşit sütun */\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive */\n    \n    /* Satırlar */\n    grid-template-rows: 100px auto 100px;\n    \n    /* Boşluk */\n    gap: 20px;\n    column-gap: 20px;\n    row-gap: 10px;\n}', output: '' },
            { title: 'Grid Item Yerleştirme', code: '.item {\n    grid-column: 1 / 3;     /* 1. sütundan 3. sütuna */\n    grid-column: span 2;    /* 2 sütun kapla */\n    grid-row: 1 / 3;        /* 1. satırdan 3. satıra */\n    \n    /* Kısa yazım */\n    grid-area: 1 / 1 / 3 / 3; /* row-start / col-start / row-end / col-end */\n}', output: '' },
            { title: 'Grid Template Areas', code: '.container {\n    display: grid;\n    grid-template-areas:\n        "header header header"\n        "sidebar main main"\n        "footer footer footer";\n    grid-template-columns: 200px 1fr 1fr;\n}\n\n.header { grid-area: header; }\n.sidebar { grid-area: sidebar; }\n.main { grid-area: main; }\n.footer { grid-area: footer; }', output: '' }
        ],
        tips: [
            'fr: kalan alanı böler',
            'repeat() tekrar için kısa yol',
            'minmax() min ve max boyut',
            'auto-fit/auto-fill responsive için'
        ],
        related: ['flexbox', 'display', 'layout']
    },
    {
        id: 'css_position',
        name: 'Position',
        category: 'basics',
        categoryName: 'Temel',
        icon: '📍',
        shortDesc: 'Konumlandırma',
        syntax: 'position: relative | absolute | fixed | sticky;',
        description: 'Position özelliği, elementin konumlandırma davranışını belirler.',
        examples: [
            { title: 'Position Değerleri', code: '/* Static - Varsayılan, normal akış */\n.static { position: static; }\n\n/* Relative - Kendi konumuna göre */\n.relative {\n    position: relative;\n    top: 10px;\n    left: 20px;\n}\n\n/* Absolute - En yakın positioned ataya göre */\n.absolute {\n    position: absolute;\n    top: 0;\n    right: 0;\n}\n\n/* Fixed - Viewport\'a göre sabit */\n.fixed {\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n}\n\n/* Sticky - Scroll\'a göre yapışkan */\n.sticky {\n    position: sticky;\n    top: 0;\n}', output: '' },
            { title: 'Absolute Konumlandırma', code: '.parent {\n    position: relative;  /* Referans noktası */\n}\n\n.child {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%); /* Tam ortala */\n}', output: '' }
        ],
        tips: [
            'absolute için parent\'a relative verin',
            'fixed: sabit header/footer için',
            'sticky: yapışkan navbar için',
            'z-index ile katman sırası'
        ],
        related: ['z-index', 'transform', 'display']
    },
    {
        id: 'css_responsive',
        name: 'Responsive Tasarım',
        category: 'basics',
        categoryName: 'Temel',
        icon: '📱',
        shortDesc: 'Farklı ekran boyutlarına uyum',
        syntax: '@media (max-width: 768px) { }',
        description: 'Media queries ile farklı ekran boyutlarına özel stiller tanımlanır.',
        examples: [
            { title: 'Media Queries', code: '/* Mobil öncelikli (Mobile First) */\n.container {\n    width: 100%;\n    padding: 10px;\n}\n\n/* Tablet ve üzeri */\n@media (min-width: 768px) {\n    .container {\n        width: 750px;\n        margin: 0 auto;\n    }\n}\n\n/* Desktop */\n@media (min-width: 1024px) {\n    .container {\n        width: 960px;\n    }\n}\n\n/* Büyük ekran */\n@media (min-width: 1200px) {\n    .container {\n        width: 1140px;\n    }\n}', output: '' },
            { title: 'Responsive Birimler', code: '/* Viewport birimleri */\n.hero {\n    height: 100vh;   /* Viewport yüksekliği */\n    width: 100vw;    /* Viewport genişliği */\n}\n\n/* Relative birimler */\n.text {\n    font-size: 1rem;   /* Root element font boyutu */\n    padding: 1em;      /* Mevcut font boyutu */\n}\n\n/* Yüzde */\n.sidebar {\n    width: 30%;\n}\n\n/* Clamp - min, ideal, max */\n.title {\n    font-size: clamp(1.5rem, 4vw, 3rem);\n}', output: '' }
        ],
        tips: [
            'Mobile First: küçükten büyüğe min-width',
            'vh/vw viewport birimleri',
            'rem root\'a göre, em parent\'a göre',
            'clamp() ile fluid typography'
        ],
        related: ['media-query', 'flexbox', 'grid']
    }
];

// allCommandsData'yı oluştur
const allCommandsData = {
    python: typeof pythonCommands !== 'undefined' ? pythonCommands : [],
    csharp: csharpCommands,
    javascript: javascriptCommands,
    web: webCommands
};

// Kategori bilgileri
const categoryInfo = {
    all: { name: 'Tümü', icon: '📚' },
    basics: { name: 'Temel', icon: '🎯' },
    variables: { name: 'Değişkenler', icon: '📦' },
    operators: { name: 'Operatörler', icon: '➕' },
    conditions: { name: 'Koşullar', icon: '🔀' },
    loops: { name: 'Döngüler', icon: '🔄' },
    functions: { name: 'Fonksiyonlar', icon: '⚙️' },
    arrays: { name: 'Diziler', icon: '📋' },
    strings: { name: 'Stringler', icon: '📝' },
    io: { name: 'Giriş/Çıkış', icon: '📤' }
};
