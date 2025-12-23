// Python Komutları - Detaylı ve Zengin İçerik

const pythonCommands = [
    // ==================== GİRİŞ/ÇIKIŞ ====================
    {
        id: 'print',
        name: 'print()',
        category: 'io',
        categoryName: 'Giriş/Çıkış',
        icon: '📤',
        shortDesc: 'Ekrana çıktı yazdırır',
        syntax: 'print(değer, değer2, ..., sep=" ", end="\\n")',
        description: 'print() fonksiyonu, Python\'da ekrana veya konsola çıktı yazdırmak için kullanılan en temel fonksiyondur. Herhangi bir veri tipini yazdırabilir, birden fazla değeri virgülle ayırarak tek satırda yazdırabilirsiniz. sep parametresi ile değerler arasındaki ayırıcıyı, end parametresi ile satır sonunu belirleyebilirsiniz.',
        parameters: [
            { name: '*values', desc: 'Yazdırılacak değer(ler) - istediğiniz kadar değer yazabilirsiniz' },
            { name: 'sep', desc: 'Değerler arasındaki ayırıcı karakter (varsayılan: boşluk " ")' },
            { name: 'end', desc: 'Satır sonuna eklenecek karakter (varsayılan: yeni satır "\\n")' },
            { name: 'file', desc: 'Çıktının yazılacağı dosya (varsayılan: sys.stdout - ekran)' },
            { name: 'flush', desc: 'Buffer\'ı hemen boşalt (varsayılan: False)' }
        ],
        examples: [
            { title: 'Temel Kullanım', code: 'print("Merhaba Dünya!")', output: 'Merhaba Dünya!' },
            { title: 'Birden Fazla Değer', code: 'print("Ali", "Veli", "Ayşe")', output: 'Ali Veli Ayşe' },
            { title: 'Değişkenlerle', code: 'isim = "Ahmet"\nyas = 25\nprint("İsim:", isim, "Yaş:", yas)', output: 'İsim: Ahmet Yaş: 25' },
            { title: 'f-string Formatlama', code: 'isim = "Zeynep"\nprint(f"Merhaba, {isim}!")', output: 'Merhaba, Zeynep!' },
            { title: 'Özel Ayırıcı (sep)', code: 'print("A", "B", "C", sep="-")', output: 'A-B-C' },
            { title: 'Aynı Satırda (end)', code: 'print("Yükleniyor", end="")\nprint("...")', output: 'Yükleniyor...' },
            { title: 'Sayı Formatlama', code: 'pi = 3.14159\nprint(f"Pi sayısı: {pi:.2f}")', output: 'Pi sayısı: 3.14' }
        ],
        tips: [
            'f-string (f"...{değişken}...") en modern ve okunabilir formatlama yöntemidir',
            'end="" kullanarak print\'lerin aynı satırda devam etmesini sağlayabilirsiniz',
            'Hata ayıklama için print() kullanmak yerine logging modülünü tercih edin',
            'sep ve end parametreleri ile çıktı formatını özelleştirebilirsiniz'
        ],
        related: ['input', 'format', 'str', 'f-string']
    },
    {
        id: 'input',
        name: 'input()',
        category: 'io',
        categoryName: 'Giriş/Çıkış',
        icon: '📥',
        shortDesc: 'Kullanıcıdan girdi alır',
        syntax: 'değişken = input(prompt)',
        description: 'input() fonksiyonu, kullanıcıdan klavye aracılığıyla veri girişi almak için kullanılır. Kullanıcı Enter tuşuna basana kadar bekler ve girilen değeri her zaman string (metin) olarak döndürür. Sayısal işlemler için int() veya float() ile dönüşüm gerekir.',
        parameters: [
            { name: 'prompt', desc: 'Kullanıcıya gösterilecek mesaj (opsiyonel)' }
        ],
        examples: [
            { title: 'Temel Kullanım', code: 'isim = input("Adınız nedir? ")\nprint(f"Merhaba, {isim}!")', output: 'Adınız nedir? Ali\nMerhaba, Ali!' },
            { title: 'Sayı Alma', code: 'yas = int(input("Yaşınız: "))\nprint(f"Gelecek yıl {yas + 1} yaşında olacaksınız")', output: 'Yaşınız: 25\nGelecek yıl 26 yaşında olacaksınız' },
            { title: 'Ondalık Sayı Alma', code: 'boy = float(input("Boyunuz (m): "))\nprint(f"Boyunuz {boy} metre")', output: 'Boyunuz (m): 1.75\nBoyunuz 1.75 metre' },
            { title: 'Güvenli Dönüşüm', code: 'try:\n    sayi = int(input("Sayı: "))\nexcept ValueError:\n    print("Geçersiz sayı!")', output: '' }
        ],
        tips: [
            'input() HER ZAMAN string döndürür - sayı için dönüşüm şart!',
            'int() veya float() dönüşümlerinde try-except kullanın',
            'Boş girdi kontrolü: if not girdi: print("Boş giriş!")',
            'strip() ile baştaki/sondaki boşlukları temizleyin: input().strip()'
        ],
        related: ['print', 'int', 'float', 'str']
    },
    
    // ==================== DEĞİŞKENLER ====================
    {
        id: 'variable',
        name: 'Değişken Tanımlama',
        category: 'variables',
        categoryName: 'Değişkenler',
        icon: '📦',
        shortDesc: 'Veri saklamak için değişken oluşturur',
        syntax: 'değişken_adı = değer',
        description: 'Python\'da değişkenler, verileri saklamak için kullanılan isimlendirilmiş bellek alanlarıdır. Python dinamik tipli bir dil olduğu için değişken tipi belirtmenize gerek yoktur - Python tipi otomatik olarak belirler. Aynı değişkene farklı tipte değerler atayabilirsiniz.',
        examples: [
            { title: 'String (Metin)', code: 'isim = "Ahmet"\nsoyisim = \'Yılmaz\'  # tek tırnak da olur', output: '' },
            { title: 'Integer (Tam Sayı)', code: 'yas = 25\nsicaklik = -5\nbuyuk_sayi = 1_000_000  # okunabilirlik için', output: '' },
            { title: 'Float (Ondalık)', code: 'pi = 3.14159\nfiyat = 49.99', output: '' },
            { title: 'Boolean (Mantıksal)', code: 'aktif = True\nsilindi = False', output: '' },
            { title: 'None (Boş)', code: 'sonuc = None  # Değer yok/tanımsız', output: '' },
            { title: 'Çoklu Atama', code: 'x, y, z = 1, 2, 3\na = b = c = 0', output: '' },
            { title: 'Tip Kontrolü', code: 'x = 42\nprint(type(x))  # <class \'int\'>', output: "<class 'int'>" }
        ],
        tips: [
            'Değişken isimleri: harf veya _ ile başlamalı, rakamla başlayamaz',
            'snake_case kullanın: kullanici_adi, dogum_tarihi',
            'Sabitler için BÜYÜK_HARF: MAX_DEGER = 100',
            'Anlamlı isimler verin: x yerine kullanici_sayisi',
            'Python büyük/küçük harfe duyarlıdır: isim ≠ Isim ≠ ISIM'
        ],
        related: ['int', 'float', 'str', 'bool', 'type']
    },
    {
        id: 'int',
        name: 'int()',
        category: 'variables',
        categoryName: 'Değişkenler',
        icon: '🔢',
        shortDesc: 'Tam sayıya dönüştürür',
        syntax: 'int(değer, base=10)',
        description: 'int() fonksiyonu, bir değeri tam sayıya (integer) dönüştürür. String, float veya diğer sayısal değerleri tam sayıya çevirebilir. Float\'tan dönüşümde ondalık kısım kesilir (yuvarlanmaz!). İkinci parametre ile farklı sayı tabanlarından dönüşüm yapılabilir.',
        parameters: [
            { name: 'değer', desc: 'Dönüştürülecek değer (string, float, vb.)' },
            { name: 'base', desc: 'Sayı tabanı (2-36 arası, varsayılan: 10)' }
        ],
        examples: [
            { title: 'String\'den', code: 'sayi = int("42")\nprint(sayi + 8)', output: '50' },
            { title: 'Float\'tan (Kesme)', code: 'print(int(3.7))   # 3\nprint(int(3.2))   # 3\nprint(int(-3.7))  # -3', output: '3\n3\n-3' },
            { title: 'Binary\'den', code: 'print(int("1010", 2))  # 10', output: '10' },
            { title: 'Hexadecimal\'den', code: 'print(int("FF", 16))   # 255', output: '255' },
            { title: 'Hata Kontrolü', code: 'try:\n    x = int("abc")\nexcept ValueError:\n    print("Dönüştürülemedi!")', output: 'Dönüştürülemedi!' }
        ],
        tips: [
            'Ondalık kısım yuvarlanmaz, kesilir: int(3.9) = 3',
            'Yuvarlama için round() kullanın',
            'Geçersiz string için ValueError hatası verir',
            'Boolean dönüşümü: int(True) = 1, int(False) = 0'
        ],
        related: ['float', 'str', 'round', 'bool']
    },
    {
        id: 'float',
        name: 'float()',
        category: 'variables',
        categoryName: 'Değişkenler',
        icon: '🔢',
        shortDesc: 'Ondalık sayıya dönüştürür',
        syntax: 'float(değer)',
        description: 'float() fonksiyonu, bir değeri ondalık sayıya (floating-point) dönüştürür. Tam sayılar ve uygun string\'ler float\'a dönüştürülebilir.',
        examples: [
            { title: 'String\'den', code: 'x = float("3.14")\nprint(x)', output: '3.14' },
            { title: 'Integer\'dan', code: 'x = float(5)\nprint(x)', output: '5.0' },
            { title: 'Bilimsel Notasyon', code: 'x = float("1.5e3")  # 1.5 × 10³\nprint(x)', output: '1500.0' },
            { title: 'Özel Değerler', code: 'print(float("inf"))   # Sonsuz\nprint(float("-inf"))  # Negatif sonsuz', output: 'inf\n-inf' }
        ],
        tips: [
            'Float\'lar hassasiyet kaybına uğrayabilir: 0.1 + 0.2 ≠ 0.3',
            'Para hesaplamalarında decimal modülünü kullanın',
            'Tam sayılar .0 ile gösterilir: float(5) → 5.0'
        ],
        related: ['int', 'str', 'round', 'decimal']
    },
    {
        id: 'str',
        name: 'str()',
        category: 'strings',
        categoryName: 'Stringler',
        icon: '📝',
        shortDesc: 'Metne dönüştürür',
        syntax: 'str(değer)',
        description: 'str() fonksiyonu, herhangi bir değeri string (metin) tipine dönüştürür. Tüm Python nesneleri str() ile metne çevrilebilir.',
        examples: [
            { title: 'Sayıdan String\'e', code: 'yas = 25\nprint("Yaş: " + str(yas))', output: 'Yaş: 25' },
            { title: 'Float\'tan', code: 'pi = 3.14159\nprint(str(pi))', output: '3.14159' },
            { title: 'Liste\'den', code: 'liste = [1, 2, 3]\nprint(str(liste))', output: '[1, 2, 3]' },
            { title: 'Boolean\'dan', code: 'print(str(True))\nprint(str(False))', output: 'True\nFalse' }
        ],
        tips: [
            'String birleştirmede + kullanmak için dönüşüm gerekir',
            'f-string ile dönüşüme gerek kalmaz: f"Yaş: {yas}"',
            'repr() daha detaylı string gösterimi verir'
        ],
        related: ['int', 'float', 'repr', 'format']
    },
    {
        id: 'bool',
        name: 'bool()',
        category: 'variables',
        categoryName: 'Değişkenler',
        icon: '✓',
        shortDesc: 'Boolean değere dönüştürür',
        syntax: 'bool(değer)',
        description: 'bool() fonksiyonu, bir değeri True veya False\'a dönüştürür. Python\'da "falsy" değerler (0, "", [], {}, None) False döndürür, diğer her şey True döndürür.',
        examples: [
            { title: 'Sayılar', code: 'print(bool(1))    # True\nprint(bool(0))    # False\nprint(bool(-1))   # True', output: 'True\nFalse\nTrue' },
            { title: 'Stringler', code: 'print(bool("abc"))  # True\nprint(bool(""))     # False', output: 'True\nFalse' },
            { title: 'Koleksiyonlar', code: 'print(bool([1,2]))  # True\nprint(bool([]))     # False', output: 'True\nFalse' },
            { title: 'None', code: 'print(bool(None))  # False', output: 'False' }
        ],
        tips: [
            'Falsy değerler: 0, 0.0, "", [], {}, set(), None, False',
            'Diğer her şey "truthy" yani True döndürür',
            'if kontrollerinde otomatik bool dönüşümü yapılır'
        ],
        related: ['int', 'str', 'None', 'if']
    },
    {
        id: 'type',
        name: 'type()',
        category: 'variables',
        categoryName: 'Değişkenler',
        icon: '🔍',
        shortDesc: 'Değişken tipini döndürür',
        syntax: 'type(nesne)',
        description: 'type() fonksiyonu, bir nesnenin tipini (sınıfını) döndürür. Hata ayıklama ve tip kontrolü için kullanılır.',
        examples: [
            { title: 'Temel Tipler', code: 'print(type(42))        # <class \'int\'>\nprint(type(3.14))      # <class \'float\'>\nprint(type("merhaba")) # <class \'str\'>\nprint(type(True))      # <class \'bool\'>', output: "<class 'int'>\n<class 'float'>\n<class 'str'>\n<class 'bool'>" },
            { title: 'Koleksiyonlar', code: 'print(type([1,2,3]))  # <class \'list\'>\nprint(type({1,2}))    # <class \'set\'>\nprint(type({"a":1}))  # <class \'dict\'>', output: '' },
            { title: 'Tip Karşılaştırma', code: 'x = 42\nif type(x) == int:\n    print("Tam sayı!")', output: 'Tam sayı!' }
        ],
        tips: [
            'Tip kontrolü için isinstance() daha güvenlidir',
            'isinstance(x, int) kalıtımı da kontrol eder',
            'type() tam eşleşme kontrolü yapar'
        ],
        related: ['isinstance', 'int', 'str', 'float']
    },
    {
        id: 'len',
        name: 'len()',
        category: 'arrays',
        categoryName: 'Diziler',
        icon: '📏',
        shortDesc: 'Uzunluk/eleman sayısı döndürür',
        syntax: 'len(nesne)',
        description: 'len() fonksiyonu, bir dizinin, stringin, listenin veya diğer koleksiyonların uzunluğunu (eleman sayısını) döndürür.',
        examples: [
            { title: 'String', code: 'metin = "Merhaba"\nprint(len(metin))', output: '7' },
            { title: 'Liste', code: 'liste = [1, 2, 3, 4, 5]\nprint(len(liste))', output: '5' },
            { title: 'Dictionary', code: 'sozluk = {"a": 1, "b": 2}\nprint(len(sozluk))', output: '2' },
            { title: 'Boş Kontrol', code: 'liste = []\nif len(liste) == 0:\n    print("Liste boş!")', output: 'Liste boş!' }
        ],
        tips: [
            'Boş kontrol için: if not liste: (daha Pythonic)',
            'String\'de her karakter 1 eleman sayılır',
            'Unicode karakterler de 1 eleman sayılır'
        ],
        related: ['list', 'str', 'dict', 'tuple']
    },
    
    // ==================== OPERATÖRLER ====================
    {
        id: 'operators_math',
        name: 'Aritmetik Operatörler',
        category: 'operators',
        categoryName: 'Operatörler',
        icon: '➕',
        shortDesc: 'Toplama, çıkarma, çarpma, bölme',
        syntax: '+  -  *  /  //  %  **',
        description: 'Python\'da matematiksel işlemler için kullanılan temel operatörler. Her operatör farklı işlevlere sahiptir ve sayısal değerler üzerinde çalışır.',
        examples: [
            { title: 'Toplama & Çıkarma', code: 'print(10 + 3)   # 13\nprint(10 - 3)   # 7', output: '13\n7' },
            { title: 'Çarpma & Bölme', code: 'print(10 * 3)   # 30\nprint(10 / 3)   # 3.333...', output: '30\n3.3333333333333335' },
            { title: 'Tam Bölme', code: 'print(10 // 3)  # 3 (ondalık atılır)', output: '3' },
            { title: 'Mod (Kalan)', code: 'print(10 % 3)   # 1 (kalan)', output: '1' },
            { title: 'Üs Alma', code: 'print(2 ** 10)  # 1024 (2\'nin 10. kuvveti)', output: '1024' },
            { title: 'İşlem Önceliği', code: 'print(2 + 3 * 4)      # 14\nprint((2 + 3) * 4)    # 20', output: '14\n20' }
        ],
        tips: [
            '/ her zaman float döndürür: 10 / 2 = 5.0',
            '// tam sayı bölme, negatif sayılarda dikkat!',
            '% çift/tek kontrolü için: sayi % 2 == 0',
            'Üs için ** kullanın, ^ değil (^ XOR operatörü)'
        ],
        related: ['operators_compare', 'operators_assign', 'math']
    },
    {
        id: 'operators_compare',
        name: 'Karşılaştırma Operatörleri',
        category: 'operators',
        categoryName: 'Operatörler',
        icon: '⚖️',
        shortDesc: 'Eşitlik ve büyüklük kontrolü',
        syntax: '==  !=  >  <  >=  <=',
        description: 'İki değeri karşılaştırmak için kullanılır. Sonuç her zaman True veya False (boolean) döner. Koşul ifadelerinde ve döngülerde sıkça kullanılır.',
        examples: [
            { title: 'Eşitlik', code: 'print(5 == 5)    # True\nprint(5 == 3)    # False', output: 'True\nFalse' },
            { title: 'Eşit Değil', code: 'print(5 != 3)    # True\nprint(5 != 5)    # False', output: 'True\nFalse' },
            { title: 'Büyük/Küçük', code: 'print(5 > 3)     # True\nprint(5 < 3)     # False', output: 'True\nFalse' },
            { title: 'Büyük-Eşit/Küçük-Eşit', code: 'print(5 >= 5)    # True\nprint(5 <= 4)    # False', output: 'True\nFalse' },
            { title: 'Zincirleme', code: 'x = 5\nprint(1 < x < 10)  # True\nprint(1 < x < 3)   # False', output: 'True\nFalse' },
            { title: 'String Karşılaştırma', code: 'print("abc" < "abd")  # True (alfabetik)', output: 'True' }
        ],
        tips: [
            '= atama, == karşılaştırma - karıştırmayın!',
            'Zincirleme: 1 < x < 10 (matematiksel yazım)',
            'String karşılaştırması alfabetik sıraya göre',
            'None kontrolü için "is None" kullanın'
        ],
        related: ['operators_logic', 'if', 'is']
    },
    {
        id: 'operators_logic',
        name: 'Mantıksal Operatörler',
        category: 'operators',
        categoryName: 'Operatörler',
        icon: '🔗',
        shortDesc: 'and, or, not işlemleri',
        syntax: 'and  or  not',
        description: 'Boolean değerler üzerinde mantıksal işlemler yapar. Koşulları birleştirmek veya tersini almak için kullanılır.',
        examples: [
            { title: 'and (VE)', code: 'print(True and True)    # True\nprint(True and False)   # False', output: 'True\nFalse' },
            { title: 'or (VEYA)', code: 'print(True or False)    # True\nprint(False or False)   # False', output: 'True\nFalse' },
            { title: 'not (DEĞİL)', code: 'print(not True)    # False\nprint(not False)   # True', output: 'False\nTrue' },
            { title: 'Koşullarda', code: 'yas = 25\ngelir = 5000\nif yas >= 18 and gelir >= 3000:\n    print("Kredi uygun")', output: 'Kredi uygun' },
            { title: 'Kısa Devre', code: 'x = 0\nresult = x != 0 and 10/x  # Hata vermez!\nprint(result)', output: 'False' }
        ],
        tips: [
            'and: İkisi de True olmalı',
            'or: En az biri True olmalı',
            'not: Değeri tersine çevirir',
            'Kısa devre: and/or gereksiz değerlendirme yapmaz'
        ],
        related: ['operators_compare', 'if', 'bool']
    },
    {
        id: 'operators_assign',
        name: 'Atama Operatörleri',
        category: 'operators',
        categoryName: 'Operatörler',
        icon: '📝',
        shortDesc: 'Değer atama kısayolları',
        syntax: '=  +=  -=  *=  /=  //=  %=  **=',
        description: 'Değişkenlere değer atamak ve mevcut değeri güncellemek için kullanılan operatörler.',
        examples: [
            { title: 'Toplama Atama', code: 'x = 10\nx += 5   # x = x + 5\nprint(x)', output: '15' },
            { title: 'Çıkarma Atama', code: 'x = 10\nx -= 3   # x = x - 3\nprint(x)', output: '7' },
            { title: 'Çarpma Atama', code: 'x = 10\nx *= 2   # x = x * 2\nprint(x)', output: '20' },
            { title: 'Bölme Atama', code: 'x = 10\nx /= 4   # x = x / 4\nprint(x)', output: '2.5' },
            { title: 'String ile', code: 's = "Merhaba"\ns += " Dünya"\nprint(s)', output: 'Merhaba Dünya' }
        ],
        tips: [
            'x += 1 yazımı x = x + 1\'den daha verimli olabilir',
            'String\'lerde += ile birleştirme yapılabilir',
            'Listlerde += ile extend işlemi yapılır'
        ],
        related: ['operators_math', 'variable']
    },
    
    // ==================== KOŞULLAR ====================
    {
        id: 'if',
        name: 'if',
        category: 'conditions',
        categoryName: 'Koşullar',
        icon: '🔀',
        shortDesc: 'Koşullu çalıştırma',
        syntax: 'if koşul:\n    kod_bloğu',
        description: 'if ifadesi, belirli bir koşul True olduğunda kod bloğunu çalıştırır. Python\'da girinti (indentation) kod bloğunu belirler - 4 boşluk standart ve zorunludur.',
        examples: [
            { title: 'Basit if', code: 'yas = 18\nif yas >= 18:\n    print("Yetişkinsiniz")', output: 'Yetişkinsiniz' },
            { title: 'if-else', code: 'puan = 45\nif puan >= 50:\n    print("Geçtiniz")\nelse:\n    print("Kaldınız")', output: 'Kaldınız' },
            { title: 'if-elif-else', code: 'not_ort = 75\nif not_ort >= 90:\n    print("AA")\nelif not_ort >= 80:\n    print("BA")\nelif not_ort >= 70:\n    print("BB")\nelse:\n    print("CC")', output: 'BB' },
            { title: 'İç İçe if', code: 'x = 10\nif x > 0:\n    if x < 100:\n        print("0-100 arası")', output: '0-100 arası' },
            { title: 'Tek Satır', code: 'x = 5\nif x > 0: print("Pozitif")', output: 'Pozitif' }
        ],
        tips: [
            'Girinti 4 boşluk olmalı (tab değil)',
            'Koşul sonunda : (iki nokta) unutmayın',
            'elif = else if kısaltması',
            'pass ile boş blok oluşturabilirsiniz'
        ],
        related: ['elif', 'else', 'operators_compare', 'operators_logic']
    },
    {
        id: 'ternary',
        name: 'Ternary (Tek Satır if)',
        category: 'conditions',
        categoryName: 'Koşullar',
        icon: '❓',
        shortDesc: 'Tek satırda koşul ifadesi',
        syntax: 'değer_true if koşul else değer_false',
        description: 'Ternary operatör, basit if-else ifadelerini tek satırda yazmaya olanak tanır. Değişken ataması veya return ifadelerinde kullanışlıdır.',
        examples: [
            { title: 'Temel Kullanım', code: 'yas = 20\ndurum = "Yetişkin" if yas >= 18 else "Çocuk"\nprint(durum)', output: 'Yetişkin' },
            { title: 'Print İçinde', code: 'x = 7\nprint("Çift" if x % 2 == 0 else "Tek")', output: 'Tek' },
            { title: 'İç İçe', code: 'x = 0\nsonuc = "Pozitif" if x > 0 else ("Negatif" if x < 0 else "Sıfır")\nprint(sonuc)', output: 'Sıfır' },
            { title: 'Fonksiyonda', code: 'def mutlak(x):\n    return x if x >= 0 else -x\nprint(mutlak(-5))', output: '5' }
        ],
        tips: [
            'Basit koşullar için idealdir',
            'Karmaşık koşullarda normal if kullanın',
            'İç içe ternary okunabilirliği azaltır'
        ],
        related: ['if', 'else']
    },
    
    // ==================== DÖNGÜLER ====================
    {
        id: 'for',
        name: 'for',
        category: 'loops',
        categoryName: 'Döngüler',
        icon: '🔄',
        shortDesc: 'Belirli sayıda tekrar',
        syntax: 'for değişken in iterasyon:\n    kod_bloğu',
        description: 'for döngüsü, bir dizi, liste, string veya range üzerinde iterasyon yapmak için kullanılır. Her eleman için kod bloğu bir kez çalışır.',
        examples: [
            { title: 'range() ile', code: 'for i in range(5):\n    print(i)', output: '0\n1\n2\n3\n4' },
            { title: 'Liste üzerinde', code: 'meyveler = ["elma", "armut", "muz"]\nfor meyve in meyveler:\n    print(meyve)', output: 'elma\narmut\nmuz' },
            { title: 'String üzerinde', code: 'for harf in "Python":\n    print(harf, end=" ")', output: 'P y t h o n ' },
            { title: 'enumerate() ile', code: 'isimler = ["Ali", "Veli"]\nfor i, isim in enumerate(isimler):\n    print(f"{i}: {isim}")', output: '0: Ali\n1: Veli' },
            { title: 'Dictionary üzerinde', code: 'kisi = {"ad": "Ali", "yas": 25}\nfor key, value in kisi.items():\n    print(f"{key}: {value}")', output: 'ad: Ali\nyas: 25' },
            { title: 'İç İçe Döngü', code: 'for i in range(3):\n    for j in range(3):\n        print(f"({i},{j})", end=" ")\n    print()', output: '(0,0) (0,1) (0,2)\n(1,0) (1,1) (1,2)\n(2,0) (2,1) (2,2)' }
        ],
        tips: [
            'range(n): 0\'dan n-1\'e kadar',
            'range(a, b): a\'dan b-1\'e kadar',
            'range(a, b, step): adım belirle',
            'enumerate() ile index alabilirsiniz',
            'zip() ile paralel döngü yapabilirsiniz'
        ],
        related: ['while', 'range', 'break', 'continue', 'enumerate']
    },
    {
        id: 'while',
        name: 'while',
        category: 'loops',
        categoryName: 'Döngüler',
        icon: '🔁',
        shortDesc: 'Koşul sağlandığı sürece tekrar',
        syntax: 'while koşul:\n    kod_bloğu',
        description: 'while döngüsü, belirtilen koşul True olduğu sürece kod bloğunu tekrar tekrar çalıştırır. Koşul False olduğunda döngü sona erer.',
        examples: [
            { title: 'Temel while', code: 'sayac = 0\nwhile sayac < 5:\n    print(sayac)\n    sayac += 1', output: '0\n1\n2\n3\n4' },
            { title: 'Sonsuz Döngü', code: 'while True:\n    girdi = input("Çıkış için q: ")\n    if girdi == "q":\n        break', output: '' },
            { title: 'while-else', code: 'i = 0\nwhile i < 3:\n    print(i)\n    i += 1\nelse:\n    print("Döngü bitti")', output: '0\n1\n2\nDöngü bitti' },
            { title: 'Sayı Tahmin', code: 'hedef = 7\ntahmin = 0\nwhile tahmin != hedef:\n    tahmin = int(input("Tahmin: "))\nprint("Bildiniz!")', output: '' }
        ],
        tips: [
            'Sonsuz döngüden kaçının - koşulu güncelleyin!',
            'break ile istediğiniz zaman çıkın',
            'while True: yaygın bir kalıptır',
            'else bloğu break olmadan biterse çalışır'
        ],
        related: ['for', 'break', 'continue']
    },
    {
        id: 'range',
        name: 'range()',
        category: 'loops',
        categoryName: 'Döngüler',
        icon: '🔢',
        shortDesc: 'Sayı dizisi oluşturur',
        syntax: 'range(stop)\nrange(start, stop)\nrange(start, stop, step)',
        description: 'range() fonksiyonu, for döngüsünde kullanılmak üzere bir sayı dizisi (aslında range nesnesi) oluşturur. Bellek verimlidir - tüm sayıları saklamaz.',
        examples: [
            { title: 'Tek Parametre', code: 'for i in range(5):\n    print(i, end=" ")', output: '0 1 2 3 4' },
            { title: 'Başlangıç-Bitiş', code: 'for i in range(2, 6):\n    print(i, end=" ")', output: '2 3 4 5' },
            { title: 'Adım Belirle', code: 'for i in range(0, 10, 2):\n    print(i, end=" ")', output: '0 2 4 6 8' },
            { title: 'Geriye Sayma', code: 'for i in range(5, 0, -1):\n    print(i, end=" ")', output: '5 4 3 2 1' },
            { title: 'Liste\'ye Çevirme', code: 'sayilar = list(range(5))\nprint(sayilar)', output: '[0, 1, 2, 3, 4]' }
        ],
        tips: [
            'stop değeri DAHİL DEĞİLDİR',
            'Negatif step ile geriye sayın',
            'list(range()) ile listeye çevirin',
            'Bellek verimli - büyük aralıklar için idealdir'
        ],
        related: ['for', 'list', 'enumerate']
    },
    {
        id: 'break',
        name: 'break',
        category: 'loops',
        categoryName: 'Döngüler',
        icon: '⏹️',
        shortDesc: 'Döngüyü sonlandırır',
        syntax: 'break',
        description: 'break ifadesi, döngüyü anında sonlandırır ve döngü bloğundan çıkar. İç içe döngülerde sadece en içteki döngüyü kırar.',
        examples: [
            { title: 'for\'da break', code: 'for i in range(10):\n    if i == 5:\n        break\n    print(i, end=" ")', output: '0 1 2 3 4' },
            { title: 'while\'da break', code: 'while True:\n    x = int(input("Sayı (0=çık): "))\n    if x == 0:\n        break\n    print(f"Kare: {x**2}")', output: '' },
            { title: 'Arama Örneği', code: 'liste = [4, 7, 2, 9, 1]\naranan = 2\nfor i, deger in enumerate(liste):\n    if deger == aranan:\n        print(f"Bulundu: index {i}")\n        break', output: 'Bulundu: index 2' }
        ],
        tips: [
            'İç içe döngülerde sadece en içteki kırılır',
            'Tüm döngülerden çıkmak için flag kullanın',
            'else bloğu break ile çıkılırsa ÇALIŞMAZ'
        ],
        related: ['continue', 'for', 'while']
    },
    {
        id: 'continue',
        name: 'continue',
        category: 'loops',
        categoryName: 'Döngüler',
        icon: '⏭️',
        shortDesc: 'Sonraki iterasyona geçer',
        syntax: 'continue',
        description: 'continue ifadesi, mevcut iterasyonun geri kalanını atlar ve döngünün bir sonraki iterasyonuna geçer.',
        examples: [
            { title: 'Tek Sayıları Atla', code: 'for i in range(10):\n    if i % 2 == 1:\n        continue\n    print(i, end=" ")', output: '0 2 4 6 8' },
            { title: 'Boşları Atla', code: 'isimler = ["Ali", "", "Veli", "", "Ayşe"]\nfor isim in isimler:\n    if not isim:\n        continue\n    print(isim)', output: 'Ali\nVeli\nAyşe' }
        ],
        tips: [
            'Döngü BITMEZ, sadece o tur atlanır',
            'Filtreleme işlemlerinde kullanışlıdır',
            'Derin iç içe koddan kaçınmaya yardımcı olur'
        ],
        related: ['break', 'for', 'while']
    },
    {
        id: 'enumerate',
        name: 'enumerate()',
        category: 'loops',
        categoryName: 'Döngüler',
        icon: '🔢',
        shortDesc: 'Index ile birlikte döngü',
        syntax: 'enumerate(iterable, start=0)',
        description: 'enumerate() fonksiyonu, bir iterasyonda hem indeksi hem de değeri aynı anda almanızı sağlar.',
        examples: [
            { title: 'Temel Kullanım', code: 'meyveler = ["elma", "armut", "muz"]\nfor i, meyve in enumerate(meyveler):\n    print(f"{i}: {meyve}")', output: '0: elma\n1: armut\n2: muz' },
            { title: 'Başlangıç Değeri', code: 'for i, harf in enumerate("ABC", start=1):\n    print(f"{i}. {harf}")', output: '1. A\n2. B\n3. C' }
        ],
        tips: [
            'range(len(liste)) yerine enumerate kullanın',
            'start parametresi ile 1\'den başlatın',
            'Daha Pythonic ve okunabilir'
        ],
        related: ['for', 'range', 'zip']
    },
    
    // ==================== FONKSİYONLAR ====================
    {
        id: 'def',
        name: 'def',
        category: 'functions',
        categoryName: 'Fonksiyonlar',
        icon: '⚙️',
        shortDesc: 'Fonksiyon tanımlar',
        syntax: 'def fonksiyon_adı(parametreler):\n    kod_bloğu\n    return değer',
        description: 'def anahtar kelimesi ile yeni bir fonksiyon tanımlanır. Fonksiyonlar, tekrar kullanılabilir kod blokları oluşturmanızı sağlar. İsim, parametreler ve gövdeden oluşur.',
        examples: [
            { title: 'Basit Fonksiyon', code: 'def selamla():\n    print("Merhaba!")\n\nselamla()', output: 'Merhaba!' },
            { title: 'Parametreli', code: 'def selamla(isim):\n    print(f"Merhaba, {isim}!")\n\nselamla("Ali")', output: 'Merhaba, Ali!' },
            { title: 'Return ile', code: 'def topla(a, b):\n    return a + b\n\nsonuc = topla(5, 3)\nprint(sonuc)', output: '8' },
            { title: 'Varsayılan Parametre', code: 'def selamla(isim="Misafir"):\n    print(f"Merhaba, {isim}!")\n\nselamla()\nselamla("Ayşe")', output: 'Merhaba, Misafir!\nMerhaba, Ayşe!' },
            { title: 'Çoklu Return', code: 'def hesapla(a, b):\n    return a+b, a-b, a*b\n\ntoplam, fark, carpim = hesapla(10, 3)\nprint(toplam, fark, carpim)', output: '13 7 30' },
            { title: '*args', code: 'def topla(*sayilar):\n    return sum(sayilar)\n\nprint(topla(1, 2, 3, 4, 5))', output: '15' },
            { title: '**kwargs', code: 'def bilgi(**kwargs):\n    for key, value in kwargs.items():\n        print(f"{key}: {value}")\n\nbilgi(ad="Ali", yas=25)', output: 'ad: Ali\nyas: 25' }
        ],
        tips: [
            'Fonksiyon isimleri küçük harfle, snake_case',
            'Varsayılan parametreler sonda olmalı',
            '*args değişken sayıda parametre alır',
            '**kwargs anahtar-değer parametreleri alır',
            'Docstring ile belgeleme yapın'
        ],
        related: ['return', 'lambda', 'args', 'kwargs']
    },
    {
        id: 'return',
        name: 'return',
        category: 'functions',
        categoryName: 'Fonksiyonlar',
        icon: '↩️',
        shortDesc: 'Fonksiyondan değer döndürür',
        syntax: 'return değer',
        description: 'return ifadesi, fonksiyondan bir değer döndürür ve fonksiyonun çalışmasını sonlandırır. return olmadan fonksiyon None döndürür.',
        examples: [
            { title: 'Tek Değer', code: 'def kare(x):\n    return x ** 2\n\nprint(kare(5))', output: '25' },
            { title: 'Çoklu Değer (Tuple)', code: 'def min_max(liste):\n    return min(liste), max(liste)\n\nen_kucuk, en_buyuk = min_max([3, 1, 4, 1, 5])\nprint(en_kucuk, en_buyuk)', output: '1 5' },
            { title: 'Koşullu Return', code: 'def pozitif_mi(x):\n    if x > 0:\n        return True\n    return False\n\nprint(pozitif_mi(5))', output: 'True' },
            { title: 'Erken Çıkış', code: 'def ilk_negatif(liste):\n    for x in liste:\n        if x < 0:\n            return x\n    return None\n\nprint(ilk_negatif([1, 2, -3, 4]))', output: '-3' }
        ],
        tips: [
            'return olmadan None döner',
            'Birden fazla değer tuple olarak döner',
            'Erken return ile kodu basitleştirin',
            'return ile fonksiyon hemen sona erer'
        ],
        related: ['def', 'None', 'yield']
    },
    {
        id: 'lambda',
        name: 'lambda',
        category: 'functions',
        categoryName: 'Fonksiyonlar',
        icon: 'λ',
        shortDesc: 'Anonim (isimsiz) fonksiyon',
        syntax: 'lambda parametreler: ifade',
        description: 'lambda, tek satırlık anonim (isimsiz) fonksiyonlar oluşturur. Genellikle map(), filter(), sorted() gibi fonksiyonlarla birlikte kullanılır.',
        examples: [
            { title: 'Temel Lambda', code: 'kare = lambda x: x ** 2\nprint(kare(5))', output: '25' },
            { title: 'Çoklu Parametre', code: 'topla = lambda a, b: a + b\nprint(topla(3, 5))', output: '8' },
            { title: 'sorted() ile', code: 'kisiler = [("Ali", 25), ("Veli", 20), ("Ayşe", 30)]\nsirali = sorted(kisiler, key=lambda x: x[1])\nprint(sirali)', output: "[('Veli', 20), ('Ali', 25), ('Ayşe', 30)]" },
            { title: 'filter() ile', code: 'sayilar = [1, 2, 3, 4, 5, 6]\nciftler = list(filter(lambda x: x % 2 == 0, sayilar))\nprint(ciftler)', output: '[2, 4, 6]' },
            { title: 'map() ile', code: 'sayilar = [1, 2, 3, 4]\nkareler = list(map(lambda x: x**2, sayilar))\nprint(kareler)', output: '[1, 4, 9, 16]' }
        ],
        tips: [
            'Sadece tek satır ifade olabilir',
            'Karmaşık işlemler için def kullanın',
            'sorted(), map(), filter() ile sık kullanılır',
            'Değişkene atamak yerine doğrudan kullanın'
        ],
        related: ['def', 'map', 'filter', 'sorted']
    },
    
    // ==================== LİSTELER ====================
    {
        id: 'list',
        name: 'list (Liste)',
        category: 'arrays',
        categoryName: 'Diziler',
        icon: '📋',
        shortDesc: 'Sıralı, değiştirilebilir koleksiyon',
        syntax: 'liste = [eleman1, eleman2, ...]\nliste = list()',
        description: 'Liste, Python\'da en çok kullanılan veri yapısıdır. Sıralı, değiştirilebilir (mutable) ve farklı tipte elemanlar içerebilir. İndeks 0\'dan başlar.',
        examples: [
            { title: 'Liste Oluşturma', code: 'sayilar = [1, 2, 3, 4, 5]\nisimler = ["Ali", "Veli", "Ayşe"]\nkarisik = [1, "merhaba", 3.14, True]', output: '' },
            { title: 'Erişim', code: 'liste = [10, 20, 30, 40, 50]\nprint(liste[0])    # 10 (ilk)\nprint(liste[-1])   # 50 (son)\nprint(liste[1:3])  # [20, 30] (dilim)', output: '10\n50\n[20, 30]' },
            { title: 'Değiştirme', code: 'liste = [1, 2, 3]\nliste[0] = 10\nprint(liste)', output: '[10, 2, 3]' },
            { title: 'Ekleme', code: 'liste = [1, 2]\nliste.append(3)      # Sona ekle\nliste.insert(0, 0)   # Başa ekle\nprint(liste)', output: '[0, 1, 2, 3]' },
            { title: 'Silme', code: 'liste = [1, 2, 3, 4]\nliste.remove(2)      # Değere göre\ndel liste[0]         # İndekse göre\nson = liste.pop()    # Sondan çıkar\nprint(liste, son)', output: '[3] 4' },
            { title: 'List Comprehension', code: 'kareler = [x**2 for x in range(5)]\nprint(kareler)', output: '[0, 1, 4, 9, 16]' }
        ],
        tips: [
            'Negatif indeks sondan sayar: liste[-1] son eleman',
            'Dilimleme: liste[start:stop:step]',
            'List comprehension ile kısa ve hızlı liste oluşturun',
            'copy() ile kopya oluşturun, = ile referans kopyalanır'
        ],
        related: ['append', 'extend', 'pop', 'sort', 'len']
    },
    {
        id: 'append',
        name: 'append()',
        category: 'arrays',
        categoryName: 'Diziler',
        icon: '➕',
        shortDesc: 'Listeye tek eleman ekler',
        syntax: 'liste.append(eleman)',
        description: 'append() metodu, listenin sonuna tek bir eleman ekler. Liste içine liste eklerseniz iç içe liste olur.',
        examples: [
            { title: 'Temel Kullanım', code: 'liste = [1, 2, 3]\nliste.append(4)\nprint(liste)', output: '[1, 2, 3, 4]' },
            { title: 'Liste Ekleme', code: 'liste = [1, 2]\nliste.append([3, 4])  # İç içe!\nprint(liste)', output: '[1, 2, [3, 4]]' },
            { title: 'Döngüde Kullanım', code: 'kareler = []\nfor i in range(5):\n    kareler.append(i**2)\nprint(kareler)', output: '[0, 1, 4, 9, 16]' }
        ],
        tips: [
            'Sadece TEK eleman ekler',
            'Birden fazla eleman için extend() kullanın',
            'Liste eklersek iç içe liste olur',
            'List comprehension daha verimli olabilir'
        ],
        related: ['extend', 'insert', 'list']
    },
    {
        id: 'extend',
        name: 'extend()',
        category: 'arrays',
        categoryName: 'Diziler',
        icon: '➕',
        shortDesc: 'Listeye birden fazla eleman ekler',
        syntax: 'liste.extend(iterable)',
        description: 'extend() metodu, bir listeyi başka bir liste (veya iterasyon) ile genişletir. Her elemanı ayrı ayrı ekler.',
        examples: [
            { title: 'Liste Birleştirme', code: 'liste1 = [1, 2, 3]\nliste2 = [4, 5, 6]\nliste1.extend(liste2)\nprint(liste1)', output: '[1, 2, 3, 4, 5, 6]' },
            { title: 'String Ekleme', code: 'harfler = ["a", "b"]\nharfler.extend("cd")\nprint(harfler)', output: "['a', 'b', 'c', 'd']" },
            { title: '+= ile Aynı', code: 'liste = [1, 2]\nliste += [3, 4]  # extend ile aynı\nprint(liste)', output: '[1, 2, 3, 4]' }
        ],
        tips: [
            'append() vs extend(): tek eleman vs çoklu eleman',
            '+= operatörü extend() ile aynı işi yapar',
            'String eklerseniz her harf ayrı eleman olur'
        ],
        related: ['append', 'list', '+']
    },
    {
        id: 'sort',
        name: 'sort() / sorted()',
        category: 'arrays',
        categoryName: 'Diziler',
        icon: '📊',
        shortDesc: 'Listeyi sıralar',
        syntax: 'liste.sort(key=None, reverse=False)\nsorted(iterable, key=None, reverse=False)',
        description: 'sort() listeyi yerinde sıralar (orijinali değişir), sorted() yeni sıralı liste döndürür (orijinal değişmez).',
        examples: [
            { title: 'sort() - Yerinde', code: 'sayilar = [3, 1, 4, 1, 5]\nsayilar.sort()\nprint(sayilar)', output: '[1, 1, 3, 4, 5]' },
            { title: 'sorted() - Yeni Liste', code: 'orijinal = [3, 1, 4]\nsirali = sorted(orijinal)\nprint(orijinal, sirali)', output: '[3, 1, 4] [1, 3, 4]' },
            { title: 'Tersten Sıralama', code: 'sayilar = [3, 1, 4]\nsayilar.sort(reverse=True)\nprint(sayilar)', output: '[4, 3, 1]' },
            { title: 'key ile Özel Sıralama', code: 'isimler = ["Ali", "zeynep", "Veli"]\nisimler.sort(key=str.lower)\nprint(isimler)', output: "['Ali', 'Veli', 'zeynep']" },
            { title: 'Tuple Listesi', code: 'kisiler = [("Ali", 25), ("Veli", 20)]\nkisiler.sort(key=lambda x: x[1])\nprint(kisiler)', output: "[('Veli', 20), ('Ali', 25)]" }
        ],
        tips: [
            'sort() orijinali değiştirir, None döner',
            'sorted() orijinali değiştirmez, yeni liste döner',
            'key parametresi ile özel sıralama kriteri',
            'reverse=True ile büyükten küçüğe sırala'
        ],
        related: ['list', 'reverse', 'lambda']
    },
    {
        id: 'slice',
        name: 'Dilimleme (Slicing)',
        category: 'arrays',
        categoryName: 'Diziler',
        icon: '✂️',
        shortDesc: 'Liste/string parçası alma',
        syntax: 'dizi[start:stop:step]',
        description: 'Dilimleme, bir liste veya string\'in belirli bir bölümünü almanızı sağlar. Start dahil, stop hariçtir.',
        examples: [
            { title: 'Temel Dilimleme', code: 'liste = [0, 1, 2, 3, 4, 5]\nprint(liste[1:4])   # [1, 2, 3]\nprint(liste[:3])    # [0, 1, 2]\nprint(liste[3:])    # [3, 4, 5]', output: '[1, 2, 3]\n[0, 1, 2]\n[3, 4, 5]' },
            { title: 'Adım ile', code: 'liste = [0, 1, 2, 3, 4, 5]\nprint(liste[::2])   # [0, 2, 4]\nprint(liste[1::2])  # [1, 3, 5]', output: '[0, 2, 4]\n[1, 3, 5]' },
            { title: 'Tersine Çevirme', code: 'liste = [1, 2, 3, 4, 5]\nprint(liste[::-1])', output: '[5, 4, 3, 2, 1]' },
            { title: 'Negatif İndeks', code: 'liste = [0, 1, 2, 3, 4]\nprint(liste[-3:])   # Son 3\nprint(liste[:-2])   # Son 2 hariç', output: '[2, 3, 4]\n[0, 1, 2]' },
            { title: 'String\'de', code: 'metin = "Python"\nprint(metin[0:3])   # Pyt\nprint(metin[::-1])  # nohtyP', output: 'Pyt\nnohtyP' }
        ],
        tips: [
            'start dahil, stop HARİÇ',
            '[:] tam kopya oluşturur',
            '[::-1] tersine çevirir',
            'Negatif indeksler sondan sayar'
        ],
        related: ['list', 'str', 'range']
    },
    
    // ==================== DİCTIONARY ====================
    {
        id: 'dict',
        name: 'dict (Sözlük)',
        category: 'arrays',
        categoryName: 'Diziler',
        icon: '📖',
        shortDesc: 'Anahtar-değer çiftleri',
        syntax: 'sozluk = {"anahtar": değer}\nsozluk = dict()',
        description: 'Dictionary (sözlük), anahtar-değer çiftlerini saklar. Anahtarlar benzersiz ve değiştirilemez (immutable) olmalıdır. Hızlı erişim sağlar.',
        examples: [
            { title: 'Oluşturma', code: 'kisi = {\n    "ad": "Ali",\n    "yas": 25,\n    "sehir": "İstanbul"\n}\nprint(kisi)', output: "{'ad': 'Ali', 'yas': 25, 'sehir': 'İstanbul'}" },
            { title: 'Erişim', code: 'kisi = {"ad": "Ali", "yas": 25}\nprint(kisi["ad"])        # Ali\nprint(kisi.get("boy", 0)) # 0 (varsayılan)', output: 'Ali\n0' },
            { title: 'Ekleme/Güncelleme', code: 'kisi = {"ad": "Ali"}\nkisi["yas"] = 25         # Ekle\nkisi["ad"] = "Veli"      # Güncelle\nprint(kisi)', output: "{'ad': 'Veli', 'yas': 25}" },
            { title: 'Silme', code: 'kisi = {"ad": "Ali", "yas": 25}\ndel kisi["yas"]\nprint(kisi)', output: "{'ad': 'Ali'}" },
            { title: 'Döngü', code: 'kisi = {"ad": "Ali", "yas": 25}\nfor key, value in kisi.items():\n    print(f"{key}: {value}")', output: 'ad: Ali\nyas: 25' },
            { title: 'Dict Comprehension', code: 'kareler = {x: x**2 for x in range(5)}\nprint(kareler)', output: '{0: 0, 1: 1, 2: 4, 3: 9, 4: 16}' }
        ],
        tips: [
            'get() ile KeyError\'dan kaçının',
            'keys(), values(), items() metodları',
            'in ile anahtar kontrolü: "ad" in kisi',
            'Python 3.7+ sıra korunur'
        ],
        related: ['keys', 'values', 'items', 'get']
    },
    
    // ==================== STRING METODLARI ====================
    {
        id: 'string_methods',
        name: 'String Metodları',
        category: 'strings',
        categoryName: 'Stringler',
        icon: '📝',
        shortDesc: 'Metin işleme metodları',
        syntax: 'metin.metod()',
        description: 'Python string\'leri birçok kullanışlı metoda sahiptir. String\'ler immutable\'dır - metodlar yeni string döndürür.',
        examples: [
            { title: 'Büyük/Küçük Harf', code: 'metin = "Merhaba Dünya"\nprint(metin.upper())  # MERHABA DÜNYA\nprint(metin.lower())  # merhaba dünya\nprint(metin.title())  # Merhaba Dünya', output: 'MERHABA DÜNYA\nmerhaba dünya\nMerhaba Dünya' },
            { title: 'Boşluk Temizleme', code: 'metin = "  merhaba  "\nprint(metin.strip())   # "merhaba"\nprint(metin.lstrip())  # "merhaba  "\nprint(metin.rstrip())  # "  merhaba"', output: 'merhaba\nmerhaba  \n  merhaba' },
            { title: 'Bölme/Birleştirme', code: 'metin = "a,b,c,d"\nprint(metin.split(","))  # [\'a\',\'b\',\'c\',\'d\']\n\nliste = ["x", "y", "z"]\nprint("-".join(liste))   # x-y-z', output: "['a', 'b', 'c', 'd']\nx-y-z" },
            { title: 'Değiştirme', code: 'metin = "Merhaba Dünya"\nprint(metin.replace("Dünya", "Python"))', output: 'Merhaba Python' },
            { title: 'Arama', code: 'metin = "Python Programlama"\nprint(metin.find("Pro"))       # 7\nprint(metin.count("a"))        # 3\nprint("Python" in metin)       # True', output: '7\n3\nTrue' },
            { title: 'Kontrol Metodları', code: 'print("123".isdigit())    # True\nprint("abc".isalpha())    # True\nprint("abc123".isalnum()) # True', output: 'True\nTrue\nTrue' }
        ],
        tips: [
            'String\'ler immutable - orijinal değişmez',
            'split() parametresiz boşluklara göre böler',
            'join() liste elemanlarını birleştirir',
            'f-string en modern formatlama yöntemi'
        ],
        related: ['str', 'split', 'join', 'format']
    },
    {
        id: 'fstring',
        name: 'f-string (Format String)',
        category: 'strings',
        categoryName: 'Stringler',
        icon: '✨',
        shortDesc: 'Modern string formatlama',
        syntax: 'f"metin {değişken} metin"',
        description: 'f-string (formatted string literal), Python 3.6+ ile gelen modern ve okunabilir string formatlama yöntemidir. Süslü parantez içinde değişken ve ifadeler kullanılabilir.',
        examples: [
            { title: 'Temel Kullanım', code: 'isim = "Ali"\nyas = 25\nprint(f"Ben {isim}, {yas} yaşındayım.")', output: 'Ben Ali, 25 yaşındayım.' },
            { title: 'İfadeler', code: 'x = 10\nprint(f"Karesi: {x**2}")\nprint(f"Çift mi: {x % 2 == 0}")', output: 'Karesi: 100\nÇift mi: True' },
            { title: 'Sayı Formatlama', code: 'pi = 3.14159\nprint(f"Pi: {pi:.2f}")        # 2 ondalık\nprint(f"Yüzde: {0.856:.1%}")  # Yüzde', output: 'Pi: 3.14\nYüzde: 85.6%' },
            { title: 'Hizalama', code: 'isim = "Ali"\nprint(f"|{isim:<10}|")  # Sol\nprint(f"|{isim:>10}|")  # Sağ\nprint(f"|{isim:^10}|")  # Orta', output: '|Ali       |\n|       Ali|\n|   Ali    |' },
            { title: 'Binlik Ayırıcı', code: 'sayi = 1234567\nprint(f"{sayi:,}")\nprint(f"{sayi:_}")', output: '1,234,567\n1_234_567' }
        ],
        tips: [
            'En okunabilir formatlama yöntemi',
            ':.2f ile ondalık basamak belirle',
            ':, ile binlik ayırıcı ekle',
            ':<10, :>10, :^10 ile hizala'
        ],
        related: ['str', 'format', 'print']
    }
];

