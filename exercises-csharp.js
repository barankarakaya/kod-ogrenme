// C# Egzersizleri
const csharpExercises = [
    // Seviye 1: Temel Algoritmalar
    {
        id: 1, category: 'algorithms_basic', level: 1, title: 'Toplama İşlemi', difficulty: 'easy',
        description: 'İki sayıyı topla ve sonucu yazdır.',
        expectedOutput: '15',
        code: [
            { type: 'text', content: 'int a = 10;', isLine: true },
            { type: 'text', content: 'int b = 5;', isLine: true },
            { type: 'text', content: 'int sonuc = a ' },
            { type: 'blank', answer: '+', placeholder: '?', width: 40 },
            { type: 'text', content: ' b;', isLine: true },
            { type: 'text', content: 'Console.WriteLine(sonuc);' }
        ],
        hint: 'İki sayıyı toplamak için + operatörü kullanılır.',
        explanation: 'C# dilinde toplama işlemi + operatörü ile yapılır.'
    },
    {
        id: 2, category: 'algorithms_basic', level: 1, title: 'Çift/Tek Kontrolü', difficulty: 'easy',
        description: 'Bir sayının çift mi tek mi olduğunu bul.',
        expectedOutput: 'Çift',
        code: [
            { type: 'text', content: 'int sayi = 8;', isLine: true },
            { type: 'text', content: 'if (sayi ' },
            { type: 'blank', answer: '%', placeholder: '?', width: 40 },
            { type: 'text', content: ' 2 == 0)' },
            { type: 'newline' },
            { type: 'text', content: '    Console.WriteLine("Çift");' }
        ],
        hint: 'Mod operatörü % ile 2\'ye bölümden kalan bulunur.',
        explanation: 'C# dilinde mod operatörü % işaretidir. 2\'ye bölümden kalan 0 ise sayı çifttir.'
    },
    {
        id: 3, category: 'algorithms_basic', level: 1, title: 'Büyük Sayı Bulma', difficulty: 'easy',
        description: 'İki sayıdan büyük olanı bul.',
        expectedOutput: '25',
        code: [
            { type: 'text', content: 'int a = 15;', isLine: true },
            { type: 'text', content: 'int b = 25;', isLine: true },
            { type: 'blank', answer: 'if', placeholder: '??', width: 50 },
            { type: 'text', content: ' (a > b)' },
            { type: 'newline' },
            { type: 'text', content: '    Console.WriteLine(a);', isLine: true },
            { type: 'text', content: 'else', isLine: true },
            { type: 'text', content: '    Console.WriteLine(b);' }
        ],
        hint: 'Koşul kontrolü için if kullanılır.',
        explanation: 'if-else yapısı ile iki değeri karşılaştırıp büyük olanı yazdırırız.'
    },
    {
        id: 4, category: 'algorithms_basic', level: 1, title: 'Ortalama Hesaplama', difficulty: 'medium',
        description: 'Üç sayının ortalamasını hesapla.',
        expectedOutput: '20',
        code: [
            { type: 'text', content: 'int a = 10, b = 20, c = 30;', isLine: true },
            { type: 'text', content: 'int toplam = a + b + c;', isLine: true },
            { type: 'text', content: 'int ortalama = toplam ' },
            { type: 'blank', answer: '/', placeholder: '?', width: 40 },
            { type: 'text', content: ' 3;', isLine: true },
            { type: 'text', content: 'Console.WriteLine(ortalama);' }
        ],
        hint: 'Bölme işlemi için / operatörü kullanılır.',
        explanation: 'Ortalama = Toplam / Eleman sayısı formülü ile hesaplanır.'
    },
    {
        id: 5, category: 'algorithms_basic', level: 1, title: 'Değişken Değiştirme', difficulty: 'medium',
        description: 'İki değişkenin değerlerini yer değiştir.',
        expectedOutput: 'a=20, b=10',
        code: [
            { type: 'text', content: 'int a = 10, b = 20;', isLine: true },
            { type: 'blank', answer: 'int', placeholder: '???', width: 60 },
            { type: 'text', content: ' temp = a;', isLine: true },
            { type: 'text', content: 'a = b;', isLine: true },
            { type: 'text', content: 'b = temp;', isLine: true },
            { type: 'text', content: 'Console.WriteLine($"a={a}, b={b}");' }
        ],
        hint: 'Geçici bir değişken kullanarak swap işlemi yapılır.',
        explanation: 'Swap algoritması: temp = a, a = b, b = temp şeklinde çalışır.'
    },
    
    // Seviye 2: Değişkenler
    {
        id: 6, category: 'variables', level: 2, title: 'String Değişken', difficulty: 'easy',
        description: 'Bir metin değişkeni tanımla.',
        expectedOutput: 'Ali',
        code: [
            { type: 'blank', answer: 'string', placeholder: '??????', width: 80 },
            { type: 'text', content: ' isim = "Ali";', isLine: true },
            { type: 'text', content: 'Console.WriteLine(isim);' }
        ],
        hint: 'Metin değişkenleri string tipinde tanımlanır.',
        explanation: 'C# dilinde metin (string) değişkenleri string anahtar kelimesi ile tanımlanır.'
    },
    {
        id: 7, category: 'variables', level: 2, title: 'Sayı Değişkeni', difficulty: 'easy',
        description: 'Bir tam sayı değişkeni tanımla.',
        expectedOutput: '25',
        code: [
            { type: 'blank', answer: 'int', placeholder: '???', width: 60 },
            { type: 'text', content: ' yas = 25;', isLine: true },
            { type: 'text', content: 'Console.WriteLine(yas);' }
        ],
        hint: 'Tam sayılar int tipinde tanımlanır.',
        explanation: 'C# dilinde tam sayılar (integer) int anahtar kelimesi ile tanımlanır.'
    },
    {
        id: 8, category: 'variables', level: 2, title: 'Console.WriteLine', difficulty: 'easy',
        description: 'Ekrana "Merhaba Dünya!" yazdır.',
        expectedOutput: 'Merhaba Dünya!',
        code: [
            { type: 'text', content: 'Console.' },
            { type: 'blank', answer: 'WriteLine', placeholder: '?????????', width: 110 },
            { type: 'text', content: '("Merhaba Dünya!");' }
        ],
        hint: 'Console.WriteLine() ekrana yazı yazdırır.',
        explanation: 'Console.WriteLine() metodu ekrana metin yazdırmak için kullanılır.'
    },
    {
        id: 9, category: 'variables', level: 2, title: 'String Interpolation', difficulty: 'easy',
        description: 'Değişkeni metin içinde kullan.',
        expectedOutput: 'Merhaba, Ali!',
        code: [
            { type: 'text', content: 'string isim = "Ali";', isLine: true },
            { type: 'text', content: 'Console.WriteLine(' },
            { type: 'blank', answer: '$', placeholder: '?', width: 40 },
            { type: 'text', content: '"Merhaba, {isim}!");' }
        ],
        hint: 'String interpolation için $ işareti kullanılır.',
        explanation: 'C# da $"..." ile string interpolation yapılır. {değişken} şeklinde değişkenler yerleştirilir.'
    },
    {
        id: 10, category: 'variables', level: 2, title: 'Double Değişken', difficulty: 'easy',
        description: 'Ondalıklı sayı değişkeni tanımla.',
        expectedOutput: '3.14',
        code: [
            { type: 'blank', answer: 'double', placeholder: '??????', width: 80 },
            { type: 'text', content: ' pi = 3.14;', isLine: true },
            { type: 'text', content: 'Console.WriteLine(pi);' }
        ],
        hint: 'Ondalıklı sayılar double tipinde tanımlanır.',
        explanation: 'double tipi ondalıklı (floating-point) sayılar için kullanılır.'
    },
    
    // Seviye 3: Koşullar
    {
        id: 11, category: 'conditions', level: 3, title: 'Basit If', difficulty: 'easy',
        description: 'Sayı 10\'dan büyükse "Büyük" yazdır.',
        expectedOutput: 'Büyük',
        code: [
            { type: 'text', content: 'int sayi = 15;', isLine: true },
            { type: 'blank', answer: 'if', placeholder: '??', width: 50 },
            { type: 'text', content: ' (sayi > 10)' },
            { type: 'newline' },
            { type: 'text', content: '{', isLine: true },
            { type: 'text', content: '    Console.WriteLine("Büyük");', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'Koşul kontrolü için if kullanılır.',
        explanation: 'if (koşul) { } şeklinde koşul kontrolü yapılır.'
    },
    {
        id: 12, category: 'conditions', level: 3, title: 'If-Else', difficulty: 'easy',
        description: 'Yaş 18 veya üzeriyse "Yetişkin" değilse "Çocuk" yazdır.',
        expectedOutput: 'Yetişkin',
        code: [
            { type: 'text', content: 'int yas = 20;', isLine: true },
            { type: 'text', content: 'if (yas >= 18)', isLine: true },
            { type: 'text', content: '    Console.WriteLine("Yetişkin");', isLine: true },
            { type: 'blank', answer: 'else', placeholder: '????', width: 70 },
            { type: 'newline' },
            { type: 'text', content: '    Console.WriteLine("Çocuk");' }
        ],
        hint: 'else koşul sağlanmadığında çalışır.',
        explanation: 'else bloğu if koşulu false olduğunda çalışır.'
    },
    {
        id: 13, category: 'conditions', level: 3, title: 'Else If', difficulty: 'medium',
        description: 'Not 90+ ise "AA", 80+ ise "BB", değilse "CC" yazdır.',
        expectedOutput: 'BB',
        code: [
            { type: 'text', content: 'int not_ort = 85;', isLine: true },
            { type: 'text', content: 'if (not_ort >= 90)', isLine: true },
            { type: 'text', content: '    Console.WriteLine("AA");', isLine: true },
            { type: 'blank', answer: 'else if', placeholder: '???????', width: 90 },
            { type: 'text', content: ' (not_ort >= 80)', isLine: true },
            { type: 'text', content: '    Console.WriteLine("BB");', isLine: true },
            { type: 'text', content: 'else', isLine: true },
            { type: 'text', content: '    Console.WriteLine("CC");' }
        ],
        hint: 'Birden fazla koşul için else if kullanılır.',
        explanation: 'else if ile zincirleme koşul kontrolü yapılır.'
    },
    {
        id: 14, category: 'conditions', level: 3, title: 'Mantıksal VE', difficulty: 'medium',
        description: 'Hem yaş 18+ hem de ehliyet varsa "Kullanabilir" yazdır.',
        expectedOutput: 'Kullanabilir',
        code: [
            { type: 'text', content: 'int yas = 25;', isLine: true },
            { type: 'text', content: 'bool ehliyet = true;', isLine: true },
            { type: 'text', content: 'if (yas >= 18 ' },
            { type: 'blank', answer: '&&', placeholder: '??', width: 50 },
            { type: 'text', content: ' ehliyet)' },
            { type: 'newline' },
            { type: 'text', content: '    Console.WriteLine("Kullanabilir");' }
        ],
        hint: 'Mantıksal VE operatörü && şeklinde yazılır.',
        explanation: '&& operatörü iki koşulun da true olmasını gerektirir.'
    },
    {
        id: 15, category: 'conditions', level: 3, title: 'Mantıksal VEYA', difficulty: 'medium',
        description: 'Hafta sonu ise (Cumartesi veya Pazar) "Tatil" yazdır.',
        expectedOutput: 'Tatil',
        code: [
            { type: 'text', content: 'string gun = "Cumartesi";', isLine: true },
            { type: 'text', content: 'if (gun == "Cumartesi" ' },
            { type: 'blank', answer: '||', placeholder: '??', width: 50 },
            { type: 'text', content: ' gun == "Pazar")' },
            { type: 'newline' },
            { type: 'text', content: '    Console.WriteLine("Tatil");' }
        ],
        hint: 'Mantıksal VEYA operatörü || şeklinde yazılır.',
        explanation: '|| operatörü koşullardan en az birinin true olmasını gerektirir.'
    },
    
    // Seviye 4: Döngüler
    {
        id: 16, category: 'loops', level: 4, title: 'For Döngüsü', difficulty: 'easy',
        description: '1\'den 5\'e kadar sayıları yazdır.',
        expectedOutput: '1 2 3 4 5',
        code: [
            { type: 'blank', answer: 'for', placeholder: '???', width: 60 },
            { type: 'text', content: ' (int i = 1; i <= 5; i++)' },
            { type: 'newline' },
            { type: 'text', content: '{', isLine: true },
            { type: 'text', content: '    Console.WriteLine(i);', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'for döngüsü belirli sayıda tekrar için kullanılır.',
        explanation: 'for (başlangıç; koşul; artış) şeklinde tanımlanır.'
    },
    {
        id: 17, category: 'loops', level: 4, title: 'While Döngüsü', difficulty: 'easy',
        description: 'Sayac 3\'ten küçük olduğu sürece yazdır.',
        expectedOutput: '0 1 2',
        code: [
            { type: 'text', content: 'int sayac = 0;', isLine: true },
            { type: 'blank', answer: 'while', placeholder: '?????', width: 80 },
            { type: 'text', content: ' (sayac < 3)' },
            { type: 'newline' },
            { type: 'text', content: '{', isLine: true },
            { type: 'text', content: '    Console.WriteLine(sayac);', isLine: true },
            { type: 'text', content: '    sayac++;', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'while döngüsü koşul doğru olduğu sürece çalışır.',
        explanation: 'while (koşul) { } şeklinde tanımlanır.'
    },
    {
        id: 18, category: 'loops', level: 4, title: 'Foreach Döngüsü', difficulty: 'easy',
        description: 'Dizideki her elemanı yazdır.',
        expectedOutput: '1 2 3',
        code: [
            { type: 'text', content: 'int[] sayilar = {1, 2, 3};', isLine: true },
            { type: 'blank', answer: 'foreach', placeholder: '???????', width: 90 },
            { type: 'text', content: ' (int s in sayilar)' },
            { type: 'newline' },
            { type: 'text', content: '{', isLine: true },
            { type: 'text', content: '    Console.WriteLine(s);', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'foreach döngüsü koleksiyon üzerinde iterasyon yapar.',
        explanation: 'foreach (tip değişken in koleksiyon) şeklinde kullanılır.'
    },
    {
        id: 19, category: 'loops', level: 4, title: 'Döngüde Toplam', difficulty: 'medium',
        description: '1\'den 5\'e kadar sayıların toplamını bul.',
        expectedOutput: '15',
        code: [
            { type: 'text', content: 'int toplam = 0;', isLine: true },
            { type: 'text', content: 'for (int i = 1; i <= 5; i++)', isLine: true },
            { type: 'text', content: '{', isLine: true },
            { type: 'text', content: '    toplam ' },
            { type: 'blank', answer: '+=', placeholder: '??', width: 50 },
            { type: 'text', content: ' i;', isLine: true },
            { type: 'text', content: '}', isLine: true },
            { type: 'text', content: 'Console.WriteLine(toplam);' }
        ],
        hint: '+= operatörü değeri ekleyerek günceller.',
        explanation: '+= operatörü toplam = toplam + i işleminin kısaltmasıdır.'
    },
    {
        id: 20, category: 'loops', level: 4, title: 'Break Komutu', difficulty: 'medium',
        description: 'Sayı 5 olunca döngüyü kır.',
        expectedOutput: '1 2 3 4',
        code: [
            { type: 'text', content: 'for (int i = 1; i <= 10; i++)', isLine: true },
            { type: 'text', content: '{', isLine: true },
            { type: 'text', content: '    if (i == 5)', isLine: true },
            { type: 'text', content: '        ' },
            { type: 'blank', answer: 'break', placeholder: '?????', width: 80 },
            { type: 'text', content: ';', isLine: true },
            { type: 'text', content: '    Console.WriteLine(i);', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'break komutu döngüyü sonlandırır.',
        explanation: 'break komutu döngüyü anında bitirir ve döngü dışına çıkar.'
    },
    
    // Seviye 5: Fonksiyonlar (Metotlar)
    {
        id: 21, category: 'functions', level: 5, title: 'Void Metot', difficulty: 'easy',
        description: '"Merhaba" yazdıran bir metot tanımla.',
        expectedOutput: 'Merhaba',
        code: [
            { type: 'blank', answer: 'void', placeholder: '????', width: 70 },
            { type: 'text', content: ' Selamla()' },
            { type: 'newline' },
            { type: 'text', content: '{', isLine: true },
            { type: 'text', content: '    Console.WriteLine("Merhaba");', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'Değer döndürmeyen metotlar void tipindedir.',
        explanation: 'void anahtar kelimesi metodun değer döndürmediğini belirtir.'
    },
    {
        id: 22, category: 'functions', level: 5, title: 'Parametreli Metot', difficulty: 'easy',
        description: 'İsim parametresi alan bir selamlama metodu.',
        expectedOutput: 'Merhaba, Ali!',
        code: [
            { type: 'text', content: 'void Selamla(' },
            { type: 'blank', answer: 'string', placeholder: '??????', width: 80 },
            { type: 'text', content: ' isim)' },
            { type: 'newline' },
            { type: 'text', content: '{', isLine: true },
            { type: 'text', content: '    Console.WriteLine($"Merhaba, {isim}!");', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'Parametre tipi ve adı belirtilmelidir.',
        explanation: 'Metot parametreleri tip ve isim olarak tanımlanır.'
    },
    {
        id: 23, category: 'functions', level: 5, title: 'Return Değeri', difficulty: 'medium',
        description: 'İki sayıyı toplayıp sonucu döndüren metot.',
        expectedOutput: '8',
        code: [
            { type: 'blank', answer: 'int', placeholder: '???', width: 60 },
            { type: 'text', content: ' Topla(int a, int b)' },
            { type: 'newline' },
            { type: 'text', content: '{', isLine: true },
            { type: 'text', content: '    ' },
            { type: 'blank', answer: 'return', placeholder: '??????', width: 90 },
            { type: 'text', content: ' a + b;', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'Değer döndüren metotlar return kullanır.',
        explanation: 'return anahtar kelimesi ile metottan değer döndürülür.'
    },
    {
        id: 24, category: 'functions', level: 5, title: 'Static Metot', difficulty: 'medium',
        description: 'Sınıf örneği olmadan çağrılabilen metot.',
        expectedOutput: '25',
        code: [
            { type: 'blank', answer: 'static', placeholder: '??????', width: 80 },
            { type: 'text', content: ' int Kare(int sayi)' },
            { type: 'newline' },
            { type: 'text', content: '{', isLine: true },
            { type: 'text', content: '    return sayi * sayi;', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'static metotlar sınıf örneği olmadan çağrılır.',
        explanation: 'static anahtar kelimesi metodun sınıf seviyesinde olduğunu belirtir.'
    },
    {
        id: 25, category: 'functions', level: 5, title: 'Varsayılan Parametre', difficulty: 'medium',
        description: 'Varsayılan değeri olan parametre kullan.',
        expectedOutput: 'Merhaba!',
        code: [
            { type: 'text', content: 'void Selamla(string mesaj ' },
            { type: 'blank', answer: '=', placeholder: '?', width: 40 },
            { type: 'text', content: ' "Merhaba!")' },
            { type: 'newline' },
            { type: 'text', content: '{', isLine: true },
            { type: 'text', content: '    Console.WriteLine(mesaj);', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'Varsayılan değer = ile atanır.',
        explanation: 'Parametre = değer şeklinde varsayılan değer atanır.'
    },
    
    // Seviye 6: İleri Algoritmalar
    {
        id: 26, category: 'algorithms_advanced', level: 6, title: 'Faktöriyel', difficulty: 'medium',
        description: '5! (faktöriyel) hesapla.',
        expectedOutput: '120',
        code: [
            { type: 'text', content: 'int n = 5;', isLine: true },
            { type: 'text', content: 'int sonuc = 1;', isLine: true },
            { type: 'text', content: 'for (int i = 1; i <= n; i++)', isLine: true },
            { type: 'text', content: '{', isLine: true },
            { type: 'text', content: '    sonuc ' },
            { type: 'blank', answer: '*=', placeholder: '??', width: 50 },
            { type: 'text', content: ' i;', isLine: true },
            { type: 'text', content: '}', isLine: true },
            { type: 'text', content: 'Console.WriteLine(sonuc);' }
        ],
        hint: '*= operatörü çarparak günceller.',
        explanation: 'Faktöriyel: n! = 1 × 2 × 3 × ... × n'
    },
    {
        id: 27, category: 'algorithms_advanced', level: 6, title: 'Fibonacci', difficulty: 'medium',
        description: 'Fibonacci serisinin 7. elemanını bul.',
        expectedOutput: '13',
        code: [
            { type: 'text', content: 'int a = 0, b = 1;', isLine: true },
            { type: 'text', content: 'for (int i = 0; i < 7; i++)', isLine: true },
            { type: 'text', content: '{', isLine: true },
            { type: 'text', content: '    int temp = a;', isLine: true },
            { type: 'text', content: '    a = ' },
            { type: 'blank', answer: 'b', placeholder: '?', width: 40 },
            { type: 'text', content: ';', isLine: true },
            { type: 'text', content: '    b = temp + b;', isLine: true },
            { type: 'text', content: '}', isLine: true },
            { type: 'text', content: 'Console.WriteLine(a);' }
        ],
        hint: 'Fibonacci: Her sayı önceki ikisinin toplamı.',
        explanation: 'Fibonacci serisi: 0, 1, 1, 2, 3, 5, 8, 13...'
    },
    {
        id: 28, category: 'algorithms_advanced', level: 6, title: 'Asal Sayı', difficulty: 'hard',
        description: 'Bir sayının asal olup olmadığını kontrol et.',
        expectedOutput: 'Asal',
        code: [
            { type: 'text', content: 'int sayi = 17;', isLine: true },
            { type: 'text', content: 'bool asal = true;', isLine: true },
            { type: 'text', content: 'for (int i = 2; i < sayi; i++)', isLine: true },
            { type: 'text', content: '{', isLine: true },
            { type: 'text', content: '    if (sayi % i ' },
            { type: 'blank', answer: '==', placeholder: '??', width: 50 },
            { type: 'text', content: ' 0) asal = false;', isLine: true },
            { type: 'text', content: '}', isLine: true },
            { type: 'text', content: 'if (asal) Console.WriteLine("Asal");' }
        ],
        hint: 'Asal sayı sadece 1 ve kendisine bölünür.',
        explanation: '2\'den sayıya kadar böl, tam bölünüyorsa asal değildir.'
    },
    {
        id: 29, category: 'algorithms_advanced', level: 6, title: 'Dizi Tersine', difficulty: 'medium',
        description: 'Bir diziyi tersine çevir.',
        expectedOutput: '5 4 3 2 1',
        code: [
            { type: 'text', content: 'int[] dizi = {1, 2, 3, 4, 5};', isLine: true },
            { type: 'text', content: 'for (int i = dizi.Length - 1; i ' },
            { type: 'blank', answer: '>=', placeholder: '??', width: 50 },
            { type: 'text', content: ' 0; i--)' },
            { type: 'newline' },
            { type: 'text', content: '{', isLine: true },
            { type: 'text', content: '    Console.Write(dizi[i] + " ");', isLine: true },
            { type: 'text', content: '}' }
        ],
        hint: 'Sondan başa doğru iterasyon yap.',
        explanation: 'Ters döngü: i = length-1\'den 0\'a kadar azaltarak ilerle.'
    },
    {
        id: 30, category: 'algorithms_advanced', level: 6, title: 'Bubble Sort', difficulty: 'hard',
        description: 'Kabarcık sıralaması algoritması.',
        expectedOutput: '1 2 3 4 5',
        code: [
            { type: 'text', content: 'int[] dizi = {5, 2, 4, 1, 3};', isLine: true },
            { type: 'text', content: 'for (int i = 0; i < dizi.Length; i++)', isLine: true },
            { type: 'text', content: '    for (int j = 0; j < dizi.Length-1; j++)', isLine: true },
            { type: 'text', content: '        if (dizi[j] ' },
            { type: 'blank', answer: '>', placeholder: '?', width: 40 },
            { type: 'text', content: ' dizi[j+1])' },
            { type: 'newline' },
            { type: 'text', content: '        {', isLine: true },
            { type: 'text', content: '            int t = dizi[j];', isLine: true },
            { type: 'text', content: '            dizi[j] = dizi[j+1];', isLine: true },
            { type: 'text', content: '            dizi[j+1] = t;', isLine: true },
            { type: 'text', content: '        }' }
        ],
        hint: 'Komşu elemanları karşılaştır ve değiştir.',
        explanation: 'Bubble Sort: Yan yana elemanları karşılaştırarak sıralar.'
    }
];

