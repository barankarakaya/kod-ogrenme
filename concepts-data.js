// Her dil için Temel Kavramlar içerikleri

const allConceptsData = {
    // ===== PYTHON =====
    python: {
        variables: {
            title: '📦 Değişkenler',
            content: `
                <h2>📦 Değişkenler Nedir?</h2>
                <p>Değişkenler, bilgisayarın hafızasında veri saklamak için kullandığımız kutular gibidir.</p>
                
                <h3>💻 Python Örneği</h3>
                <pre><code># Sayı değişkeni
yas = 25

# Metin değişkeni
isim = "Ahmet"

# Ondalık sayı
boy = 1.75

# Mantıksal değer
ogrenci_mi = True

print(f"Merhaba, ben {isim}")
print(f"Yaşım: {yas}")</code></pre>
                
                <h3>📌 Önemli Kurallar</h3>
                <ul>
                    <li>Değişken isimleri rakamla başlayamaz</li>
                    <li>Boşluk kullanılamaz (alt çizgi kullanın)</li>
                    <li>Anlamlı isimler verin</li>
                </ul>
            `
        },
        conditions: {
            title: '🔀 Koşullar (If-Else)',
            content: `
                <h2>🔀 Koşullar Nedir?</h2>
                <p>Koşullar, programımızın karar vermesini sağlar.</p>
                
                <h3>💻 Python Örneği</h3>
                <pre><code>yas = 18

if yas >= 18:
    print("Oy kullanabilirsiniz!")
else:
    print("Henüz oy kullanamazsınız.")

# Birden fazla koşul
not_ort = 75

if not_ort >= 90:
    print("AA")
elif not_ort >= 80:
    print("BB")
else:
    print("CC")</code></pre>
                
                <h3>📌 Karşılaştırma Operatörleri</h3>
                <ul>
                    <li><code>==</code> Eşit mi?</li>
                    <li><code>!=</code> Eşit değil mi?</li>
                    <li><code>></code> <code><</code> Büyük/Küçük mü?</li>
                    <li><code>>=</code> <code><=</code> Büyük-eşit/Küçük-eşit mi?</li>
                </ul>
            `
        },
        loops: {
            title: '🔄 Döngüler',
            content: `
                <h2>🔄 Döngüler Nedir?</h2>
                <p>Döngüler, aynı işlemi birden fazla kez tekrarlamamızı sağlar.</p>
                
                <h3>💻 For Döngüsü</h3>
                <pre><code>for i in range(1, 6):
    print(i)
# Çıktı: 1, 2, 3, 4, 5

meyveler = ["elma", "armut", "muz"]
for meyve in meyveler:
    print(meyve)</code></pre>
                
                <h3>💻 While Döngüsü</h3>
                <pre><code>sayac = 0
while sayac < 5:
    print(sayac)
    sayac += 1</code></pre>
            `
        },
        functions: {
            title: '⚙️ Fonksiyonlar',
            content: `
                <h2>⚙️ Fonksiyonlar Nedir?</h2>
                <p>Fonksiyonlar, belirli bir görevi yapan kod bloklarıdır.</p>
                
                <h3>💻 Python Örneği</h3>
                <pre><code>def selamla(isim):
    print(f"Merhaba, {isim}!")

selamla("Ali")

def topla(a, b):
    return a + b

sonuc = topla(5, 3)
print(sonuc)  # 8</code></pre>
            `
        },
        lists: {
            title: '📋 Listeler',
            content: `
                <h2>📋 Listeler Nedir?</h2>
                <p>Listeler, birden fazla değeri tek bir değişkende saklar.</p>
                
                <h3>💻 Python Örneği</h3>
                <pre><code>sayilar = [1, 2, 3, 4, 5]
print(sayilar[0])  # 1

sayilar.append(6)
print(sayilar)  # [1, 2, 3, 4, 5, 6]

for sayi in sayilar:
    print(sayi)</code></pre>
            `
        }
    },
    
    // ===== C# =====
    csharp: {
        variables: {
            title: '📦 Değişkenler',
            content: `
                <h2>📦 C# Değişkenler</h2>
                <p>C#'ta değişkenler tip belirtilerek tanımlanır.</p>
                
                <h3>💻 C# Örneği</h3>
                <pre><code>// Tam sayı
int yas = 25;

// Metin
string isim = "Ahmet";

// Ondalık sayı
double boy = 1.75;

// Mantıksal
bool ogrenciMi = true;

Console.WriteLine($"Merhaba, ben {isim}");
Console.WriteLine($"Yaşım: {yas}");</code></pre>
                
                <h3>📌 Veri Tipleri</h3>
                <ul>
                    <li><code>int</code> - Tam sayı</li>
                    <li><code>double</code> - Ondalık sayı</li>
                    <li><code>string</code> - Metin</li>
                    <li><code>bool</code> - true/false</li>
                    <li><code>var</code> - Otomatik tip</li>
                </ul>
            `
        },
        conditions: {
            title: '🔀 Koşullar (If-Else)',
            content: `
                <h2>🔀 C# Koşullar</h2>
                <p>C#'ta koşullar parantez ve süslü parantez ile yazılır.</p>
                
                <h3>💻 C# Örneği</h3>
                <pre><code>int yas = 18;

if (yas >= 18)
{
    Console.WriteLine("Yetişkin");
}
else
{
    Console.WriteLine("Çocuk");
}

// Else if
int not = 85;
if (not >= 90)
    Console.WriteLine("AA");
else if (not >= 80)
    Console.WriteLine("BB");
else
    Console.WriteLine("CC");</code></pre>
                
                <h3>📌 Operatörler</h3>
                <ul>
                    <li><code>==</code> Eşitlik</li>
                    <li><code>!=</code> Eşit değil</li>
                    <li><code>&&</code> VE (and)</li>
                    <li><code>||</code> VEYA (or)</li>
                </ul>
            `
        },
        loops: {
            title: '🔄 Döngüler',
            content: `
                <h2>🔄 C# Döngüler</h2>
                
                <h3>💻 For Döngüsü</h3>
                <pre><code>for (int i = 1; i <= 5; i++)
{
    Console.WriteLine(i);
}</code></pre>
                
                <h3>💻 While Döngüsü</h3>
                <pre><code>int sayac = 0;
while (sayac < 5)
{
    Console.WriteLine(sayac);
    sayac++;
}</code></pre>
                
                <h3>💻 Foreach Döngüsü</h3>
                <pre><code>string[] meyveler = {"elma", "armut", "muz"};
foreach (string meyve in meyveler)
{
    Console.WriteLine(meyve);
}</code></pre>
            `
        },
        functions: {
            title: '⚙️ Metotlar',
            content: `
                <h2>⚙️ C# Metotlar</h2>
                <p>C#'ta fonksiyonlara "metot" denir.</p>
                
                <h3>💻 C# Örneği</h3>
                <pre><code>// Void metot (değer döndürmez)
void Selamla(string isim)
{
    Console.WriteLine($"Merhaba, {isim}!");
}

// Değer döndüren metot
int Topla(int a, int b)
{
    return a + b;
}

// Kullanım
Selamla("Ali");
int sonuc = Topla(5, 3);
Console.WriteLine(sonuc); // 8</code></pre>
            `
        },
        lists: {
            title: '📋 Diziler ve Listeler',
            content: `
                <h2>📋 C# Diziler ve Listeler</h2>
                
                <h3>💻 Dizi (Array)</h3>
                <pre><code>int[] sayilar = {1, 2, 3, 4, 5};
Console.WriteLine(sayilar[0]); // 1
Console.WriteLine(sayilar.Length); // 5</code></pre>
                
                <h3>💻 Liste (List)</h3>
                <pre><code>List<string> meyveler = new List<string>();
meyveler.Add("elma");
meyveler.Add("armut");

foreach (string meyve in meyveler)
{
    Console.WriteLine(meyve);
}</code></pre>
            `
        }
    },
    
    // ===== JAVASCRIPT =====
    javascript: {
        variables: {
            title: '📦 Değişkenler',
            content: `
                <h2>📦 JavaScript Değişkenler</h2>
                <p>JavaScript'te let, const ve var ile değişken tanımlanır.</p>
                
                <h3>💻 JavaScript Örneği</h3>
                <pre><code>// let - değiştirilebilir
let yas = 25;

// const - sabit (değiştirilemez)
const isim = "Ahmet";

// Dinamik tip
let deger = 42;      // sayı
deger = "merhaba";   // artık metin

console.log(\`Merhaba, ben \${isim}\`);
console.log(\`Yaşım: \${yas}\`);</code></pre>
                
                <h3>📌 let vs const vs var</h3>
                <ul>
                    <li><code>let</code> - Değiştirilebilir, block scope</li>
                    <li><code>const</code> - Sabit, değiştirilemez</li>
                    <li><code>var</code> - Eski yöntem, kullanma!</li>
                </ul>
            `
        },
        conditions: {
            title: '🔀 Koşullar (If-Else)',
            content: `
                <h2>🔀 JavaScript Koşullar</h2>
                
                <h3>💻 JavaScript Örneği</h3>
                <pre><code>let yas = 18;

if (yas >= 18) {
    console.log("Yetişkin");
} else {
    console.log("Çocuk");
}

// Ternary operatör (kısa yazım)
let sonuc = yas >= 18 ? "Yetişkin" : "Çocuk";

// Switch
let gun = "Pazartesi";
switch (gun) {
    case "Pazartesi":
        console.log("Haftanın ilk günü");
        break;
    default:
        console.log("Diğer gün");
}</code></pre>
            `
        },
        loops: {
            title: '🔄 Döngüler',
            content: `
                <h2>🔄 JavaScript Döngüler</h2>
                
                <h3>💻 For Döngüsü</h3>
                <pre><code>for (let i = 1; i <= 5; i++) {
    console.log(i);
}</code></pre>
                
                <h3>💻 forEach Metodu</h3>
                <pre><code>const meyveler = ["elma", "armut", "muz"];
meyveler.forEach(meyve => {
    console.log(meyve);
});</code></pre>
                
                <h3>💻 map, filter, reduce</h3>
                <pre><code>const sayilar = [1, 2, 3, 4, 5];

// Her elemanın karesi
const kareler = sayilar.map(x => x * x);

// Çift sayıları filtrele
const ciftler = sayilar.filter(x => x % 2 === 0);

// Toplam
const toplam = sayilar.reduce((a, b) => a + b, 0);</code></pre>
            `
        },
        functions: {
            title: '⚙️ Fonksiyonlar',
            content: `
                <h2>⚙️ JavaScript Fonksiyonlar</h2>
                
                <h3>💻 Normal Fonksiyon</h3>
                <pre><code>function selamla(isim) {
    console.log("Merhaba, " + isim + "!");
}
selamla("Ali");</code></pre>
                
                <h3>💻 Arrow Function</h3>
                <pre><code>const topla = (a, b) => a + b;
console.log(topla(5, 3)); // 8

const kare = x => x * x;
console.log(kare(4)); // 16</code></pre>
                
                <h3>💻 Varsayılan Parametre</h3>
                <pre><code>function selamla(isim = "Misafir") {
    console.log(\`Merhaba, \${isim}!\`);
}
selamla(); // "Merhaba, Misafir!"</code></pre>
            `
        },
        lists: {
            title: '📋 Diziler (Arrays)',
            content: `
                <h2>📋 JavaScript Diziler</h2>
                
                <h3>💻 Dizi İşlemleri</h3>
                <pre><code>const arr = [1, 2, 3];

arr.push(4);      // Sona ekle
arr.pop();        // Sondan çıkar
arr.unshift(0);   // Başa ekle
arr.shift();      // Baştan çıkar

console.log(arr.length);    // Uzunluk
console.log(arr.includes(2)); // İçeriyor mu?
console.log(arr.indexOf(2));  // İndeks bul</code></pre>
                
                <h3>💻 Spread Operator</h3>
                <pre><code>const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]</code></pre>
            `
        }
    },
    
    // ===== HTML & CSS =====
    web: {
        variables: {
            title: '📦 HTML Temelleri',
            content: `
                <h2>📦 HTML Nedir?</h2>
                <p>HTML web sayfalarının yapısını oluşturur.</p>
                
                <h3>💻 Temel HTML</h3>
                <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Sayfa Başlığı&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Başlık&lt;/h1&gt;
    &lt;p&gt;Paragraf&lt;/p&gt;
    &lt;a href="url"&gt;Link&lt;/a&gt;
    &lt;img src="resim.jpg" alt="Resim"&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                
                <h3>📌 Önemli Etiketler</h3>
                <ul>
                    <li><code>&lt;div&gt;</code> - Konteyner</li>
                    <li><code>&lt;span&gt;</code> - Satır içi</li>
                    <li><code>&lt;ul&gt; &lt;li&gt;</code> - Liste</li>
                    <li><code>&lt;form&gt;</code> - Form</li>
                </ul>
            `
        },
        conditions: {
            title: '🔀 CSS Temelleri',
            content: `
                <h2>🔀 CSS Nedir?</h2>
                <p>CSS web sayfalarının görünümünü belirler.</p>
                
                <h3>💻 CSS Sözdizimi</h3>
                <pre><code>/* Seçici { özellik: değer; } */

h1 {
    color: blue;
    font-size: 24px;
}

.sinif {
    background: #f0f0f0;
    padding: 20px;
}

#id {
    border: 1px solid black;
}</code></pre>
                
                <h3>📌 Seçiciler</h3>
                <ul>
                    <li><code>element</code> - Etiket seçici</li>
                    <li><code>.class</code> - Sınıf seçici</li>
                    <li><code>#id</code> - ID seçici</li>
                </ul>
            `
        },
        loops: {
            title: '🔄 CSS Box Model',
            content: `
                <h2>🔄 Box Model Nedir?</h2>
                <p>Her HTML elementi bir kutu olarak düşünülür.</p>
                
                <h3>💻 Box Model</h3>
                <pre><code>.kutu {
    /* İçerik boyutu */
    width: 200px;
    height: 100px;
    
    /* İç boşluk */
    padding: 20px;
    
    /* Kenarlık */
    border: 2px solid black;
    
    /* Dış boşluk */
    margin: 10px;
    
    /* Kutu modeli */
    box-sizing: border-box;
}</code></pre>
            `
        },
        functions: {
            title: '⚙️ Flexbox',
            content: `
                <h2>⚙️ Flexbox Nedir?</h2>
                <p>Flexbox esnek yerleşim sistemidir.</p>
                
                <h3>💻 Flexbox Kullanımı</h3>
                <pre><code>.container {
    display: flex;
    
    /* Yatay hizalama */
    justify-content: center;
    /* flex-start | flex-end | space-between | space-around */
    
    /* Dikey hizalama */
    align-items: center;
    
    /* Yön */
    flex-direction: row;
    /* row | column | row-reverse | column-reverse */
    
    /* Boşluk */
    gap: 20px;
}</code></pre>
            `
        },
        lists: {
            title: '📋 CSS Grid',
            content: `
                <h2>📋 CSS Grid Nedir?</h2>
                <p>Grid 2 boyutlu yerleşim sistemidir.</p>
                
                <h3>💻 Grid Kullanımı</h3>
                <pre><code>.grid-container {
    display: grid;
    
    /* 3 sütun */
    grid-template-columns: 1fr 1fr 1fr;
    /* veya: repeat(3, 1fr) */
    
    /* 2 satır */
    grid-template-rows: 100px 200px;
    
    /* Boşluk */
    gap: 20px;
}

.item {
    /* 2 sütun kapla */
    grid-column: span 2;
}</code></pre>
            `
        }
    }
};

// Her dil için Algoritma verileri
const allAlgorithmsData = {
    // ===== PYTHON =====
    python: {
        sum: {
            title: '➕ Toplama İşlemi',
            description: '1\'den N\'e kadar olan tüm sayıları topla. Örneğin: N=5 için 1+2+3+4+5 = 15',
            hints: ['Bir değişkende toplamı sakla', 'Her sayıyı sırayla toplama ekle', 'Döngü kullan'],
            steps: ['Toplam için bir değişken oluştur (toplam = 0)', '1\'den N\'e kadar bir döngü kur', 'Her döngüde sayıyı toplama ekle', 'Döngü bitince toplamı döndür'],
            code: `def toplam_bul(n):
    toplam = 0
    for i in range(1, n + 1):
        toplam += i
    return toplam

# Veya formül ile:
# toplam = n * (n + 1) // 2`
        },
        max: {
            title: '📊 En Büyük Sayı',
            description: 'Bir listedeki en büyük sayıyı bul.',
            hints: ['İlk elemanı en büyük olarak kabul et', 'Diğer elemanları karşılaştır', 'Daha büyük bulursan güncelle'],
            steps: ['En büyük değer için bir değişken oluştur', 'İlk elemanı en büyük olarak ata', 'Listeyi döngü ile tara', 'Her eleman mevcut en büyükten büyükse, güncelle'],
            code: `def en_buyuk_bul(liste):
    en_buyuk = liste[0]
    for sayi in liste:
        if sayi > en_buyuk:
            en_buyuk = sayi
    return en_buyuk

# Python'da hazır: max(liste)`
        },
        factorial: {
            title: '❗ Faktöriyel',
            description: 'N faktöriyel (N!) hesapla. Örneğin: 5! = 5×4×3×2×1 = 120',
            hints: ['Faktöriyel çarpma işlemidir', 'N\'den 1\'e kadar çarp', 'Sonucu biriktir'],
            steps: ['Sonuç için bir değişken oluştur (sonuc = 1)', 'N\'den 1\'e kadar bir döngü kur', 'Her döngüde sayıyı sonuçla çarp', 'Sonucu döndür'],
            code: `def faktoriyel(n):
    sonuc = 1
    for i in range(1, n + 1):
        sonuc *= i
    return sonuc`
        },
        fibonacci: {
            title: '🐚 Fibonacci Serisi',
            description: 'İlk N Fibonacci sayısını üret. Seri: 0, 1, 1, 2, 3, 5, 8...',
            hints: ['İlk iki sayı 0 ve 1\'dir', 'Her yeni sayı = önceki + ondan önceki', 'Önceki değerleri sakla'],
            steps: ['İlk iki sayıyı tanımla (a=0, b=1)', 'Bir liste oluştur', 'N-2 kez döngü yap', 'Yeni sayı = a + b'],
            code: `def fibonacci(n):
    seri = [0, 1]
    for i in range(2, n):
        yeni = seri[-1] + seri[-2]
        seri.append(yeni)
    return seri`
        }
    },
    
    // ===== C# =====
    csharp: {
        sum: {
            title: '➕ Toplama İşlemi',
            description: '1\'den N\'e kadar olan tüm sayıları topla.',
            hints: ['Bir değişkende toplamı sakla', 'Her sayıyı sırayla toplama ekle', 'for döngüsü kullan'],
            steps: ['int toplam = 0 tanımla', 'for döngüsü kur', 'Her iterasyonda toplam += i', 'toplam değerini döndür'],
            code: `int ToplamBul(int n)
{
    int toplam = 0;
    for (int i = 1; i <= n; i++)
    {
        toplam += i;
    }
    return toplam;
}

// Veya: Enumerable.Range(1, n).Sum();`
        },
        max: {
            title: '📊 En Büyük Sayı',
            description: 'Bir dizideki en büyük sayıyı bul.',
            hints: ['İlk elemanı en büyük olarak kabul et', 'Diğer elemanları karşılaştır', 'Math.Max kullanabilirsin'],
            steps: ['int enBuyuk = dizi[0]', 'foreach ile dolaş', 'if ile karşılaştır', 'Büyükse güncelle'],
            code: `int EnBuyukBul(int[] dizi)
{
    int enBuyuk = dizi[0];
    foreach (int sayi in dizi)
    {
        if (sayi > enBuyuk)
            enBuyuk = sayi;
    }
    return enBuyuk;
}

// Veya: dizi.Max();`
        },
        factorial: {
            title: '❗ Faktöriyel',
            description: 'N faktöriyel (N!) hesapla.',
            hints: ['Faktöriyel çarpma işlemidir', 'for döngüsü kullan', 'long tip kullan (büyük sayılar için)'],
            steps: ['long sonuc = 1 tanımla', 'for döngüsü kur', 'Her adımda çarp', 'Sonucu döndür'],
            code: `long Faktoriyel(int n)
{
    long sonuc = 1;
    for (int i = 1; i <= n; i++)
    {
        sonuc *= i;
    }
    return sonuc;
}`
        },
        fibonacci: {
            title: '🐚 Fibonacci Serisi',
            description: 'İlk N Fibonacci sayısını üret.',
            hints: ['List<int> kullan', 'Add metodu ile ekle', 'Önceki iki elemanı topla'],
            steps: ['List<int> seri oluştur', '0 ve 1 ekle', 'for döngüsü ile devam', 'seri[i-1] + seri[i-2]'],
            code: `List<int> Fibonacci(int n)
{
    List<int> seri = new List<int> { 0, 1 };
    for (int i = 2; i < n; i++)
    {
        seri.Add(seri[i-1] + seri[i-2]);
    }
    return seri;
}`
        }
    },
    
    // ===== JavaScript =====
    javascript: {
        sum: {
            title: '➕ Toplama İşlemi',
            description: '1\'den N\'e kadar olan tüm sayıları topla.',
            hints: ['let ile değişken tanımla', 'for döngüsü kullan', 'reduce() metodu da işe yarar'],
            steps: ['let toplam = 0', 'for (let i = 1; i <= n; i++)', 'toplam += i', 'return toplam'],
            code: `function toplamBul(n) {
    let toplam = 0;
    for (let i = 1; i <= n; i++) {
        toplam += i;
    }
    return toplam;
}

// Modern yöntem:
const toplam = [...Array(n+1).keys()].slice(1).reduce((a, b) => a + b, 0);`
        },
        max: {
            title: '📊 En Büyük Sayı',
            description: 'Bir dizideki en büyük sayıyı bul.',
            hints: ['Math.max() kullan', 'Spread operator (...) işe yarar', 'reduce() ile de yapılabilir'],
            steps: ['let enBuyuk = dizi[0]', 'for...of ile dolaş', 'if ile karşılaştır', 'return enBuyuk'],
            code: `function enBuyukBul(dizi) {
    return Math.max(...dizi);
}

// Manuel yöntem:
function enBuyukBulManuel(dizi) {
    let enBuyuk = dizi[0];
    for (const sayi of dizi) {
        if (sayi > enBuyuk) enBuyuk = sayi;
    }
    return enBuyuk;
}`
        },
        factorial: {
            title: '❗ Faktöriyel',
            description: 'N faktöriyel (N!) hesapla.',
            hints: ['for döngüsü kullan', 'Recursive de olur', 'BigInt büyük sayılar için'],
            steps: ['let sonuc = 1', 'for döngüsü', 'sonuc *= i', 'return sonuc'],
            code: `function faktoriyel(n) {
    let sonuc = 1;
    for (let i = 1; i <= n; i++) {
        sonuc *= i;
    }
    return sonuc;
}

// Recursive:
const faktRec = n => n <= 1 ? 1 : n * faktRec(n - 1);`
        },
        fibonacci: {
            title: '🐚 Fibonacci Serisi',
            description: 'İlk N Fibonacci sayısını üret.',
            hints: ['Array kullan', 'push() ile ekle', 'Destructuring kullanabilirsin'],
            steps: ['const seri = [0, 1]', 'for döngüsü', 'seri.push(seri[i-1] + seri[i-2])', 'return seri'],
            code: `function fibonacci(n) {
    const seri = [0, 1];
    for (let i = 2; i < n; i++) {
        seri.push(seri[i-1] + seri[i-2]);
    }
    return seri;
}

// Generator ile:
function* fibGen() {
    let [a, b] = [0, 1];
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}`
        }
    },
    
    // ===== HTML & CSS =====
    web: {
        sum: {
            title: '➕ Sayfa Yapısı',
            description: 'Basit bir HTML sayfası oluştur.',
            hints: ['DOCTYPE ile başla', 'html, head, body etiketleri', 'title etiketi önemli'],
            steps: ['<!DOCTYPE html> yaz', '<html> etiketi aç', '<head> ve <body> ekle', 'İçerik ekle'],
            code: `<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Sayfa Başlığı</title>
</head>
<body>
    <h1>Merhaba Dünya!</h1>
    <p>Bu bir paragraf.</p>
</body>
</html>`
        },
        max: {
            title: '📊 CSS Box Model',
            description: 'Box Model ile element boyutlandırma.',
            hints: ['margin dış boşluk', 'padding iç boşluk', 'border kenarlık'],
            steps: ['width ve height belirle', 'padding ekle', 'border ekle', 'margin ekle'],
            code: `.kutu {
    width: 200px;
    height: 100px;
    padding: 20px;
    border: 2px solid #333;
    margin: 10px;
    
    /* Toplam genişlik: 
       200 + 20*2 + 2*2 + 10*2 = 264px */
    
    /* box-sizing: border-box; 
       ile width içinde tutulur */
}`
        },
        factorial: {
            title: '❗ Flexbox Layout',
            description: 'Flexbox ile esnek yerleşim.',
            hints: ['display: flex', 'justify-content', 'align-items'],
            steps: ['Container\'a display: flex', 'justify-content ile yatay', 'align-items ile dikey', 'gap ile boşluk'],
            code: `.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 100vh;
}

.item {
    flex: 1; /* Eşit genişlik */
    padding: 20px;
    background: #f0f0f0;
}`
        },
        fibonacci: {
            title: '🐚 CSS Grid',
            description: 'Grid ile ızgara yerleşimi.',
            hints: ['display: grid', 'grid-template-columns', 'gap'],
            steps: ['display: grid tanımla', 'Sütunları belirle', 'Satırları belirle', 'gap ile boşluk'],
            code: `.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 20px;
    padding: 20px;
}

.grid-item {
    background: #e0e0e0;
    padding: 20px;
    text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
    .grid-container {
        grid-template-columns: 1fr;
    }
}`
        }
    }
};

// Her dil için quiz verileri
const allQuizzesData = {
    python: {
        basics: {
            title: 'Temel Kavramlar',
            questions: [
                { question: 'Python\'da değişken tanımlamak için hangisi doğrudur?', options: ['int x = 5', 'x = 5', 'var x = 5', 'let x = 5'], correct: 1, hint: 'Python\'da tip belirtmeye gerek yok.' },
                { question: 'Ekrana yazdırmak için hangi fonksiyon kullanılır?', options: ['echo()', 'console.log()', 'print()', 'write()'], correct: 2, hint: 'Python\'un temel çıktı fonksiyonu.' },
                { question: 'Yorum satırı için hangi işaret kullanılır?', options: ['//', '/* */', '#', '--'], correct: 2, hint: 'Python\'da tek satır yorum.' },
                { question: 'String birleştirme için hangi operatör kullanılır?', options: ['&', '.', '+', ','], correct: 2, hint: 'Aynı zamanda toplama için de kullanılır.' },
                { question: 'Boolean veri tipi hangi değerleri alır?', options: ['0 ve 1', 'yes ve no', 'True ve False', 'true ve false'], correct: 2, hint: 'Python\'da büyük harfle başlar.' }
            ]
        },
        loops: {
            title: 'Döngüler',
            questions: [
                { question: 'range(5) kaç eleman üretir?', options: ['4', '5', '6', '1'], correct: 1, hint: '0\'dan 4\'e kadar.' },
                { question: 'Döngüyü sonlandırmak için hangisi kullanılır?', options: ['stop', 'exit', 'break', 'end'], correct: 2, hint: 'Döngüyü kırar.' },
                { question: 'for i in range(1, 4): kaç kez döner?', options: ['4', '3', '2', '1'], correct: 1, hint: '1, 2, 3 (4 dahil değil)' },
                { question: 'while True: ne yapar?', options: ['Hata verir', 'Sonsuz döngü', 'Bir kez çalışır', 'Hiç çalışmaz'], correct: 1, hint: 'Koşul her zaman doğru.' },
                { question: 'continue ne yapar?', options: ['Döngüyü bitirir', 'Programı kapatır', 'O turu atlar', 'Döngüyü başlatır'], correct: 2, hint: 'Sonraki iterasyona geçer.' }
            ]
        },
        algorithms: {
            title: 'Algoritmalar',
            questions: [
                { question: '5! (faktöriyel) kaçtır?', options: ['25', '60', '120', '720'], correct: 2, hint: '5×4×3×2×1' },
                { question: 'Fibonacci serisinde 0, 1, 1, 2, 3 ten sonra ne gelir?', options: ['4', '5', '6', '8'], correct: 1, hint: 'Önceki iki sayının toplamı.' },
                { question: '1\'den 10\'a kadar sayıların toplamı?', options: ['45', '55', '50', '100'], correct: 1, hint: 'n*(n+1)/2 formülü.' },
                { question: 'Mod operatörü (%) ne verir?', options: ['Bölüm', 'Kalan', 'Çarpım', 'Üs'], correct: 1, hint: 'Bölme işleminden kalan.' },
                { question: 'Swap (değer değiştirme) için kaç değişken gerekir?', options: ['1', '2', '3', '0'], correct: 2, hint: 'Geçici değişken kullanılır.' }
            ]
        }
    },
    
    csharp: {
        basics: {
            title: 'Temel Kavramlar',
            questions: [
                { question: 'C#\'ta tam sayı için hangi tip kullanılır?', options: ['integer', 'int', 'number', 'num'], correct: 1, hint: 'Kısa yazım.' },
                { question: 'Ekrana yazdırmak için hangisi kullanılır?', options: ['print()', 'Console.WriteLine()', 'System.out.println()', 'echo()'], correct: 1, hint: 'Console sınıfının metodu.' },
                { question: 'String interpolation için hangi işaret kullanılır?', options: ['@', '$', '#', '%'], correct: 1, hint: 'Dolar işareti.' },
                { question: 'Yorum satırı için hangisi kullanılır?', options: ['#', '//', '-- ', '**'], correct: 1, hint: 'Çift slash.' },
                { question: 'Sabit tanımlamak için hangi anahtar kelime kullanılır?', options: ['final', 'constant', 'const', 'static'], correct: 2, hint: 'Değiştirilemez değer.' }
            ]
        },
        loops: {
            title: 'Döngüler',
            questions: [
                { question: 'for (int i = 0; i < 5; i++) kaç kez döner?', options: ['4', '5', '6', '0'], correct: 1, hint: '0, 1, 2, 3, 4' },
                { question: 'foreach hangi durumda kullanılır?', options: ['Sayı saymak', 'Koleksiyon üzerinde', 'Sonsuz döngü', 'Koşullu döngü'], correct: 1, hint: 'Her eleman için.' },
                { question: 'i++ ne anlama gelir?', options: ['i = i - 1', 'i = i + 1', 'i = i * 2', 'i = 0'], correct: 1, hint: 'Artırma operatörü.' },
                { question: 'do-while döngüsü en az kaç kez çalışır?', options: ['0', '1', '2', 'Belirsiz'], correct: 1, hint: 'Önce çalışır, sonra kontrol eder.' },
                { question: 'break ne yapar?', options: ['Programı kapatır', 'Döngüyü bitirir', 'Hata fırlatır', 'Fonksiyondan çıkar'], correct: 1, hint: 'Döngüyü kırar.' }
            ]
        },
        algorithms: {
            title: 'Algoritmalar',
            questions: [
                { question: '10 % 3 sonucu nedir?', options: ['3', '1', '0', '10'], correct: 1, hint: '10 bölü 3\'ün kalanı.' },
                { question: 'Factorial hesaplamak için hangi döngü uygundur?', options: ['foreach', 'for', 'while', 'Hepsi'], correct: 3, hint: 'Hepsi kullanılabilir.' },
                { question: 'Bubble Sort\'un karmaşıklığı nedir?', options: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'], correct: 1, hint: 'İç içe döngü.' },
                { question: 'Array.Length ne döndürür?', options: ['İlk eleman', 'Son eleman', 'Eleman sayısı', 'Toplam'], correct: 2, hint: 'Dizinin uzunluğu.' },
                { question: 'İki sayıyı karşılaştırmak için hangi operatör?', options: ['=', '==', '===', ':='], correct: 1, hint: 'Çift eşittir.' }
            ]
        }
    },
    
    javascript: {
        basics: {
            title: 'Temel Kavramlar',
            questions: [
                { question: 'Değişken tanımlamak için hangisi önerilir?', options: ['var', 'let', 'int', 'dim'], correct: 1, hint: 'Modern JavaScript.' },
                { question: 'Sabit tanımlamak için hangisi kullanılır?', options: ['const', 'final', 'static', 'readonly'], correct: 0, hint: 'Değiştirilemez.' },
                { question: 'Console\'a yazdırmak için?', options: ['print()', 'console.log()', 'document.write()', 'alert()'], correct: 1, hint: 'Developer console.' },
                { question: 'Template literal için hangi tırnak?', options: ['Tek tırnak', 'Çift tırnak', 'Backtick (`)', 'Hepsi'], correct: 2, hint: 'ESC tuşunun altında.' },
                { question: '=== ne kontrol eder?', options: ['Sadece değer', 'Sadece tip', 'Değer ve tip', 'Referans'], correct: 2, hint: 'Strict equality.' }
            ]
        },
        loops: {
            title: 'Döngüler',
            questions: [
                { question: 'forEach hangi tip üzerinde çalışır?', options: ['String', 'Number', 'Array', 'Boolean'], correct: 2, hint: 'Dizi metodu.' },
                { question: 'map() ne döndürür?', options: ['undefined', 'Yeni array', 'Boolean', 'Number'], correct: 1, hint: 'Her elemanı dönüştürür.' },
                { question: 'filter() ne yapar?', options: ['Sıralar', 'Filtreler', 'Birleştirir', 'Böler'], correct: 1, hint: 'Koşula uyanları alır.' },
                { question: 'reduce() ne için kullanılır?', options: ['Filtreleme', 'Sıralama', 'Toplama/biriktirme', 'Bölme'], correct: 2, hint: 'Akümülatör.' },
                { question: 'for...of ne üzerinde iterasyon yapar?', options: ['Object keys', 'Iterable values', 'Indexes', 'Properties'], correct: 1, hint: 'Değerler üzerinde.' }
            ]
        },
        algorithms: {
            title: 'Algoritmalar',
            questions: [
                { question: 'Array.sort() varsayılan olarak nasıl sıralar?', options: ['Sayısal', 'Alfabetik', 'Rastgele', 'Tersten'], correct: 1, hint: 'String olarak.' },
                { question: 'Array.reverse() ne yapar?', options: ['Sıralar', 'Tersine çevirir', 'Kopyalar', 'Siler'], correct: 1, hint: 'Diziyi ters çevirir.' },
                { question: 'indexOf() bulamazsa ne döndürür?', options: ['0', '-1', 'null', 'undefined'], correct: 1, hint: 'Negatif bir.' },
                { question: 'Arrow function sözdizimi?', options: ['function =>', '() =>', '=> ()', '-> ()'], correct: 1, hint: 'Ok işareti.' },
                { question: 'Spread operator nedir?', options: ['...', '***', '###', ':::'], correct: 0, hint: 'Üç nokta.' }
            ]
        }
    },
    
    web: {
        basics: {
            title: 'HTML Temelleri',
            questions: [
                { question: 'HTML ne anlama gelir?', options: ['High Text', 'HyperText Markup Language', 'Home Tool', 'Hyperlinks'], correct: 1, hint: 'Tam açılımı.' },
                { question: 'En büyük başlık etiketi hangisi?', options: ['<h6>', '<h1>', '<header>', '<head>'], correct: 1, hint: '1\'den 6\'ya.' },
                { question: 'Link oluşturmak için hangi etiket?', options: ['<link>', '<a>', '<href>', '<url>'], correct: 1, hint: 'Anchor.' },
                { question: 'Resim eklemek için?', options: ['<image>', '<img>', '<picture>', '<photo>'], correct: 1, hint: 'Self-closing.' },
                { question: 'Sırasız liste için?', options: ['<ol>', '<ul>', '<li>', '<list>'], correct: 1, hint: 'Unordered list.' }
            ]
        },
        loops: {
            title: 'CSS Temelleri',
            questions: [
                { question: 'CSS seçicisinde class için?', options: ['#', '.', '@', '&'], correct: 1, hint: 'Nokta.' },
                { question: 'ID seçici için?', options: ['#', '.', '@', '&'], correct: 0, hint: 'Hash.' },
                { question: 'Arka plan rengi için?', options: ['color', 'background-color', 'bg-color', 'back-color'], correct: 1, hint: 'Background.' },
                { question: 'İç boşluk için?', options: ['margin', 'padding', 'border', 'spacing'], correct: 1, hint: 'İçerik ile kenarlık arası.' },
                { question: 'Dış boşluk için?', options: ['margin', 'padding', 'border', 'spacing'], correct: 0, hint: 'Element dışı.' }
            ]
        },
        algorithms: {
            title: 'Flexbox & Grid',
            questions: [
                { question: 'Flexbox aktifleştirmek için?', options: ['display: flex', 'flex: true', 'flexbox: on', 'layout: flex'], correct: 0, hint: 'Display özelliği.' },
                { question: 'Yatay hizalama için?', options: ['align-items', 'justify-content', 'flex-align', 'horizontal-align'], correct: 1, hint: 'Ana eksen.' },
                { question: 'Dikey hizalama için?', options: ['align-items', 'justify-content', 'vertical-align', 'flex-vertical'], correct: 0, hint: 'Çapraz eksen.' },
                { question: 'CSS Grid için?', options: ['display: grid', 'grid: true', 'layout: grid', 'grid-display: on'], correct: 0, hint: 'Display özelliği.' },
                { question: 'Responsive tasarım için?', options: ['@media', '@responsive', '@screen', '@device'], correct: 0, hint: 'Media query.' }
            ]
        }
    }
};

