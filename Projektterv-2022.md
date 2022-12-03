# Webshop Projektterv 2022

## 1. Összefoglaló 

A webshop lényege hogy, a vásárló minél könyebben és gyorsabban megtalálja a számára legjobb terméket a legjobb áron. A vásárló egy online katalógusba filterekkel és keresősor segítségével böngészhet.Ennek a projektnek a célja egy gyors és felhasználóbarát webshop készítése.

## 2. Verziók

| Verzió | Szerző(k)                | Dátum        | Státusz         | Megjegyzés                                                    |
|--------|--------------------------|--------------|-----------------|---------------------------------------------------------------|
| 0.1  | Iváncsics Attila             | 2022-10-07 | Tervezet      | Projektterv, Gantt diagramm                                     |
| 1.0 | Mindenki           | 2022-10-14 | Elfogadott      | Projektterv, Gantt diagramm                                     |
| 1.1| Mindenki             | 2022-10-20 | Előterjesztés      | Diagrammok elkészítése , UML és adatbázis tervek                                 |


Státusz osztályozás:
    - Tervezet: befejezetlen dokumentum, a mérföldkő leadása előtti napokban
    - Előterjesztés: a projekt menedzser bírálatával, a mérföldkő határidejekor
    - Elfogadott: a megrendelő által elfogadva, a prezentáció bemutatásakor

## 3. A projekt bemutatása

Ez a projektterv a Webshop projektet mutatja be, mely 2022-09-20-től 2022-11-28-ig tart. A projekt célja, hogy megfelelő és biztonságos felületet biztosítson a vásárlóknak és a termékek nyilvántartására. Mindezért egy egyszerűen használható, átlátható és hatékonyan működő webalkalmazás fog felelni. A projekten öt fő fejlesztő fog dolgozni, az elvégzett feladatokat pedig négy alkalommal fogjuk prezentálni a megrendelőnek.

### 3.1. Rendszerspecifikáció

A rendszernek képesnek kell lennie arra, hogy adott felhasználó rendeléseit végre tudja vinni árúkészlet állapottól függően,jelenlegi termékek nyilvántartsa,és régebbi rendelések kilistázása. Ezenkívül felhasználó adatainak megfelelő ebbe beleártve a biztonságos tárolása, illetve egy felhasználói barát felület. A termékek aktuális ára és raktári készlet listázása. Minden funkció a megfelelő felhasználói jogosultság mellett használható, annak függvényében írható, olvasható vagy nem megtekinthető az adat.

### 3.2. Funkcionális követelmények

- Felhasználói munkamenet megvalósítása több jogosultsági szinttel (vásárló, törzsvendég)
- Felhasználók kezelése (CRUD)
- Árukészletek kezelése (CRUD)
- Rendelések kezelése
- Email-es kiértesítés rendelés után
- Kapcsolatfelvételi űrlap biztosítása új felhasználók számára
- Biztonsági mentés automatikus létrehozása
 

### 3.3. Nem funkcionális követelmények

- A kliens oldal platform- és böngészőfüggetlen legyen
- Reszponzív megjelenés
- Szenzitív adatokat biztonságosan tároljuk
- A legfrissebb technológiákat használja a rendszer


## 4. Költség- és erőforrás-szükségletek

Az erőforrásigényünk összesen kb. 22 személynap/fő.

A rendelkezésünkre áll összesen 5 * 70 = 350 pont.

## 5. Szervezeti felépítés és felelősségmegosztás
A projekt megrendelője Dr.Kertész Attila. A Webshop projektet a projektcsapat fogja végrehajtani, amely jelenleg öt fejlesztőből áll. A csapatban található tapasztalt és pályakezdő webprogramozó is, A tapasztalt projekttagok több éve dolgoznak az iparban, számos sikeres projektten vannak túl.
 
- Sólyom Ferenc (3 év tapasztalat)
- Iváncsics Attila (2 év tapasztalat)
- Pergel Kata (<1 év tapasztalat)
- Illés Edit (1 év tapasztalat)
- Perényi-Rimai Máté Miklós (2 év tapasztalat)

### 5.1 Projektcsapat
A projekt a következő emberekből áll:

|                                                                                                                   | Név             | E-mail cím (stud-os)       |
|-------------------------------------------------------------------------------------------------------------------|-----------------|----------------------------|
| Megrendelő                                                                                                        | Dr.Kertész Attila | keratt@inf.u-szeged.hu  |
| Felelősségek: Projekt menedzser,Use case diagram,Backend,Frontend,Tesztelés   | Iváncsics Attila    | h046277@stud.u-szeged.hu |
| Felelősségek: Package diagram,Backend,Frontend,Tesztelés                                                            | Sólyom Ferenc    | h880824@stud.u-szeged.hu |
| Felelősségek: Class/Sequence diagram,Backend,Frontend,Tesztelés                                                                                                   | Pergel Kata      | h050296@stud.u-szeged.hu |
| Felelősségek: Képernyőtervek,Backend,Frontend,Tesztelés                                                                                                   | Illés Edit      | h051861@stud.u-szeged.hu |
| Felelősségek: 1/2. mérföldkő előadás, Egyed-kapcsolat diagram,Backend,Frontend,Tesztelés                                                                                             | Perényi-Rimai Máté Miklós      | h880016@stud.u-szeged.hu |


## 6. A munka feltételei

### 6.1. Munkakörnyezet
A projekt a következő munkaállomásokat fogja használni a munka során:
 - Munkaállomások: 4 db PC Windows 11-es operációs rendszerrel, 1 db Linux PC
 - Asztali számítógép (CPU: i7 7700k, RAM: 16GB, GPU: Nvidia GTX1070)

A projekt a következő technológiákat/szoftvereket fogja használni a munka során: 
 - Heroku platformszolgáltatás
 - Heroku által biztosított PostgreSQL adatbázisszerver
 - NodeJs (backend)
 - Javascript (frontend)
 - npm szoftverprojekt menedzselő szoftver
 - IDEA
 - Git verziókövető (GitLab)

### 6.2. Rizikómenedzsment

| Kockázat                                    | Leírás                                                                                                                                                                                     | Valószínűség | Hatás  |
|---------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|--------|
| Betegség                                  | Súlyosságtól függően hátráltatja vagy bizonyos esetekben teljes mértékben korlátozza a munkavégzőt, így az egész projektre kihatással van. Megoldás: a feladatok átcsoportosítása        | nagy       | erős |
| Kommunikációs fennakadás a csapattagokkal | A csapattagok között nem elégséges az információ áramlás, nem pontosan, esetleg késve vagy nem egyértelműen tájékoztatjuk egymást. Megoldás: még gyakoribb megbeszélések és ellenőrzések | kis        | erős |

## 7. Jelentések

### 7.1. Munka menedzsment
A munkát Iváncsics Attila koordinálja. Fő feladata, hogy folyamatosan egyeztessen a csapattagokkal az előrehaladásról és a fellépő problémákról, esetlegesen a megoldásban is segítséget nyújhat a projekt csúszásának elkerülése végett. További feladata a heti szinten tartandó csoportgyűlések időpontjának és helyszínének leszervezése, Discord csoportba tájékoztatja a projektcsapatot.

### 7.2. Csoportgyűlések

A projekt hetente ülésezik, hogy megvitassák az azt megelőző hét problémáit, illetve hogy megbeszéljék a következő hét feladatait. A megbeszélésről minden esetben memó készül.

1. megbeszélés:
 - Időpont: 2022.09.27.
 - Hely: Online
 - Résztvevők: Iváncsics Attila,Sólyom Ferenc,Illés Edit,Pergel Kata,Perényi Máté
 - Érintett témák: Projektvezető kiválasztása,projekt átbeszélése,a dokumentáció felépítése elkezdése

2. megbeszélés:
 - Időpont: 2022.10.04.
 - Hely: Online
 - Résztvevők: Iváncsics Attila,Sólyom Ferenc,Illés Edit,Pergel Kata,Perényi Máté
 - Érintett témák: A projektterv befejezése, Gantt diagramm készítése

### 7.3. Minőségbiztosítás

Az elkészült terveket a terveken nem dolgozó csapattársak közül átnézik, hogy megfelel-e a specifikációnak és az egyes diagramtípusok összhangban vannak-e egymással. A meglévő rendszerünk helyes működését a prototípusok bemutatása előtt a tesztelési dokumentumban leírtak végrehajtása alapján ellenőrizzük és összevetjük a specifikációval, hogy az elvárt eredményt kapjuk-e. További tesztelési lehetőségek: unit tesztek írása az egyes modulokhoz vagy a kód közös átnézése (code review) egy, a vizsgált modul programozásában nem résztvevő csapattaggal. Szoftverünk minőségét a végső leadás előtt javítani kell a rendszerünkre lefuttatott kódelemzés során kapott metrikaértékek és szabálysértések figyelembevételével.
Az alábbi lehetőségek vannak a szoftver megfelelő minőségének biztosítására:
- Specifikáció és tervek átnézése (kötelező)
- Teszttervek végrehajtása (kötelező)
- Unit tesztek írása (választható)
- Kód átnézése (választható)

### 7.4. Átadás, eredmények elfogadása

A projekt eredményeit Dr.Kertész Attila fogja elfogadni. A projektterven változásokat csak  Dr.Kertész Attila írásos kérés esetén Dr.Kertész Attila engedélyével lehet tenni. A projekt eredményesnek bizonyul, ha specifikáció helyes és határidőn belül készül el. Az esetleges késések pontlevonást eredményeznek.
Az elfogadás feltételeire és beadás formájára vonatkozó részletes leírás a következő honlapon olvasható: https://okt.sed.hu/rf1/

### 7.5. Státuszjelentés

Minden leadásnál a projektmenedzser jelentést tesz a projekt haladásáról, és ha szükséges változásokat indítványoz a projektterven. Ezen kívül a megrendelő felszólítására a menedzser 3 munkanapon belül köteles leadni a jelentést. A gyakorlatvezetővel folytatott csapatmegbeszéléseken a megadott sablon alapján emlékeztetőt készít a csapat, amit a következő megbeszélésen áttekintenek és felmérik az eredményeket és teendőket. Továbbá gazdálkodnak az erőforrásokkal és szükség esetén a megrendelővel egyeztetnek a projektterv módosításáról.

## 8. A munka tartalma

### 8.1. Tervezett szoftverfolyamat modell és architektúra

A szoftver fejlesztése során az agilis fejlesztési modellt alkalmazzuk. A fejlesztés során nagy hangsúlyt fektetünk a folyamatos kommunikcióra. A fejlesztés során a szoftver specifikációi rugalmasan vátozhatnak, és ezzel a módszertannal tudunk a leggyorsabban alkalmazkodni az új elvárásokhoz.

A szoftver MVC alapú REST webszolgáltatásként működik. A szerver és a kliens függetlenek, csupán API végpontok segítségével kommunikálnak.

### 8.2. Átadandók és határidők
A főbb átadandók és határidők a projekt időtartama alatt a következők:


| Szállítandó |                 Neve                |   Határideje  |
|:-----------:|:-----------------------------------:|:-------------:|
|      D1     |       Projektterv és útmutató       | 2022-10-06  |
|    P1+D2    | UML, DB, képernyőtervek és bemutató | 2022-10-21  |
|    P1+D3    |      Prototípus I. és bemutató      | 2022-11-11  |
|    P2+D4    |      Prototípus II. és bemutató     | 2022-11-18  |

## 9. Feladatlista

A következőkben a tervezett feladatok részletes összefoglalása található.


### 9.1. Projektterv (1. mérföldkő)

Ennek a feladatnak az a célja, hogy megvalósításhoz szükséges lépéseket, az ütemzést és a felelősöket meghatározzuk.

Részfeladatai a következők:

#### 9.1.1. Projektterv kitöltése

Felelős: Mindenki

Tartam:  3 nap

Erőforrásigény:  2 személynap/fő


#### 9.1.2. Bemutató elkészítése

Felelős: Perényi Máté

Tartam:  3 nap

Erőforrásigény:  2 személynap


### 9.2. UML és adatbázis tervek (2. mérföldkő)

Ennek a feladatnak az a célja, hogy a rendszerarchitektúrát, az adatbázist és webalkalmazás kinézetét megtervezzük.

Részfeladatai a következők:

#### 9.2.1. Use Case diagram

Felelős: Iváncsics Attila

Tartam:  4 nap

Erőforrásigény:  2 személynap

#### 9.2.2. Class diagram

Felelős: Pergel Kata

Tartam:  4 nap

Erőforrásigény:  3 személynap

#### 9.2.3. Sequence diagram

Felelős: Pergel Kata

Tartam:  3 nap

Erőforrásigény:  2 személynap

#### 9.2.4. Egyed-kapcsolat diagram adatbázishoz

Felelős: Perényi Máté

Tartam:  4 nap

Erőforrásigény:  3 személynap

#### 9.2.5. Package diagram

Felelős: Sólyom Ferenc

Tartam:  4 nap

Erőforrásigény:  1 személynap

#### 9.2.6. Képernyőtervek

Felelős: Illés Edit

Tartam:  3 nap

Erőforrásigény:  2 személynap

#### 9.2.7. Bemutató elkészítése

Felelős: Perényi Máté

Tartam:  1 nap

Erőforrásigény:  2 személynap


### 9.3. Prototípus I. (3. mérföldkő)

Ennek a feladatnak az a célja, hogy egy működő prototípust hozzunk létre, ahol a vállalt funkcionális követelmények nagy része már prezentálható állapotban van.

Részfeladatai a következők:

#### 9.3.1.  Felhasználói munkamenet üzleti logikája több jogosultsági szinttel (admin, vevő, árúfeltöltő)

Felelős: Perényi Máté

Tartam:  5 nap

Erőforrásigény:  3 személynap

#### 9.3.2.  Felhasználói munkamenethez kapcsolódó GUI megvalósítása

Felelős: Iváncsics Attila

Tartam:  4 nap

Erőforrásigény:  3 személynap

#### 9.3.3.  Felhasználói munkamenethez szükséges adatok létrehozása az adatbázisban

Felelős: Sólyom Ferenc

Tartam:  3 nap

Erőforrásigény:  2 személynap

#### 9.3.4.  Felhasználók kezeléséhez tartozó üzleti logika (listázása, módosítása, létrehozása, törlése)

Felelős: Iváncsics Attila

Tartam:  4 nap

Erőforrásigény:  3 személynap

#### 9.3.5.  Felhasználók kezeléséhez kapcsolódó GUI megvalósítása

Felelős: Pergel Kata

Tartam:  3 nap

Erőforrásigény:  2 személynap

#### 9.3.6.  Raktárak kezeléshez tartozó üzleti logika (listázása, módosítása, létrehozása, törlése)

Felelős: Illés Edit

Tartam:  4 nap

Erőforrásigény:  3 személynap

#### 9.3.7.  Raktárak kezeléshez kapcsolódó GUI megvalósítása

Felelős: Pergel Kata

Tartam:  4 nap

Erőforrásigény:  3 személynap

#### 9.3.8.  Raktárkezeléshez szükséges adatok létrehozása az adatbázisban

Felelős: Sólyom Ferenc

Tartam:  3 nap

Erőforrásigény:  2 személynap

#### 9.3.9.  Árukészletek kezeléséhez tartozó üzleti logika (listázása, módosítása, létrehozása, törlése)

Felelős: Illés Edit

Tartam:  5 nap

Erőforrásigény:  3 személynap

#### 9.3.10.  Árukészletek kezeléshez kapcsolódó GUI megvalósítása

Felelős: Illés Edit

Tartam:  5 nap

Erőforrásigény:  3 személynap

#### 9.3.11.  Árukészletek kezeléséhez szükséges adatok létrehozása az adatbázisban

Felelős: Perényi Máté

Tartam:  3 nap

Erőforrásigény:  2 személynap

#### 9.3.12.  Rendelés kezeléséhez kapcsolódó üzleti logika (listázása, módosítása, létrehozása, törlése)

Felelős: Sólyom Ferenc

Tartam:  4 nap

Erőforrásigény:  3 személynap

#### 9.3.13.  Rendelések kezeléshez kapcsolódó GUI megvalósítása

Felelős: Iváncsics Attila

Tartam:  5 nap

Erőforrásigény:  4 személynap

#### 9.3.14.  Rendelés kezeléséhez szükséges adatok létrehozása az adatbázisban

Felelős: Illés Edit

Tartam:  3 nap

Erőforrásigény:  2 személynap


#### 9.3.15.  Email-es kiértesítés rendeléshez

Felelős: Sólyom Ferenc

Tartam:  5 nap

Erőforrásigény:  3 személynap

#### 9.3.16.  Biztonsági mentés automatikus létrehozása

Felelős: Sólyom Ferenc

Tartam:  4 nap

Erőforrásigény:  3 személynap

#### 9.3.17. Tesztelési dokumentum (TP, TC)

Felelős: Mindenki

Tartam:  3 nap

Erőforrásigény:  2 személynap/fő


#### 9.3.18. Bemutató elkészítése 

Felelős: Illés Edit

Tartam:  1 nap

Erőforrásigény:  2 személynap

### 9.4. Prototípus II. (4. mérföldkő)

Ennek a feladatnak az a célja, hogy az előző mérföldkő hiányzó funkcióit pótoljuk, illetve a hibásan működő funkciókat és az esetlegesen felmerülő új funkciókat megvalósítsuk. Továbbá az alkalmazás alapos tesztelése is a mérföldkőben történik.

Részfeladatai a következők:

#### 9.4.1. Javított minőségű prototípus új funkciókkal

Felelős: Iváncsics Attila

Tartam:  5 nap

Erőforrásigény:  2 személynap

#### 9.4.2. Javított minőségű prototípus javított funkciókkal

Felelős: Sólyom Ferenc

Tartam:  5 nap

Erőforrásigény:  2 személynap

#### 9.4.3. Javított minőségű prototípus a korábbi hiányzó funkciókkal

Felelős: Pergerl Kata

Tartam:  5 nap

Erőforrásigény:  3 személynap

#### 9.4.4. Felhasználói munkamenet tesztelése (TP, TC, TR)

Felelős: Illés Edit

Tartam:  1 nap

Erőforrásigény:  1 személynap

#### 9.4.5. Raktárak kezelésének tesztelése (TP, TC, TR)

Felelős: Perényi Máté

Tartam:  1 nap

Erőforrásigény:  1 személynap

#### 9.4.6. Árukészletek kezelésének tesztelése (TP, TC, TR)

Felelős: Iváncsics Attila

Tartam:  1 nap

Erőforrásigény:  1 személynap

#### 9.4.7. Rendelés kezelésének tesztelése (TP, TC, TR)

Felelős: Pergel Kata

Tartam:  1 nap

Erőforrásigény:  1 személynap

#### 9.4.8. Email-es funkciók tesztelése (TP, TC, TR)

Felelős: Illiés Edit

Tartam:  1 nap

Erőforrásigény:  1 személynap

#### 9.4.9. Biztonsági mentés tesztelése (TP, TC, TR)

Felelős: Pergel Kata

Tartam:  1 nap

Erőforrásigény:  2 személynap

#### 9.4.10. Bemutató elkészítése 

Felelős: Perényi Máté

Tartam:  1 nap

Erőforrásigény:  1 személynap

## 10. Részletes időbeosztás

https://git-okt.sed.inf.szte.hu/2022_IB153I-3_webshop/Webshop/blob/master/gantt_final.xlsx

## 11. Projekt költségvetés


### 11.1. Részletes erőforrásigény (személynap)


|                     Név                    | 1. leadás - Projektterv | 2. leadás - UML és adatbázis | 3. leadás - Prototípus I. | 4. leadás - Prototípus II. | Összesen |
|:------------------------------------------:|:----------------------:|:--------------------------:|:-----------------------:|:------------------------:|:---------:|
|                     Iváncsics Attila           |           2          |             2           |           12          |            3           |    19   |
|                     Sólyom Ferenc           |           2          |             1            |           15          |            2           |    20   |
|                     Perényi Máté|           4          |             5            |           7          |            2           |    18   |
|                     Illés Edit|           2         |             2            |           13          |            1          |    18   |
|                     Pergel Kata|           2          |             5            |           7          |            2           |    17   |


### 11.2. Részletes feladatszámok

|                     Név                    | 1. leadás - Projektterv | 2. leadás - UML és adatbázis | 3. leadás - Prototípus I. | 4. leadás - Prototípus II. | Összesen |
|:------------------------------------------:|:----------------------:|:--------------------------:|:-----------------------:|:------------------------:|:---------:|
|                     Iváncsics Attila           |           1          |             1            |           4          |            2           |    8   |
|                     Sólyom Ferenc              |       1          |             1            |           7          |            2           |    11   |
|                     Perényi Máté               |           2          |             2            |           2          |            2           |    8   |
|                     Illés Edit|           1          |             1            |           6           |            2           |    10   |
|                     Pergel Kata|           1          |             2            |           3          |            2           |    8   |

### 11.3. Részletes költségvetés

|                     Név                       | 1. leadás - Projektterv | 2. leadás - UML és adatbázis | 3. leadás - Prototípus I. | 4. leadás - Prototípus II. | Összesen |
|:---------------------------------------------:|:----------------------:|:--------------------------:|:-----------------------:|:------------------------:|:---------:|
|        Maximálisan választható pontszám %-ban |         10% (7)        |            30% (21)        |          50% (35)       |          30% (21)        | 100% (70) |
|                     Iváncsics Attila              |           7          |             18           |          27           |            18          |    70   |
|                     Sólyom Ferenc              |           7          |             15           |          33           |            15          |    70   |
|                     Perényi Máté               |           7          |             16           |          31           |            16          |    70   |
|                     Illés Edit               |           7          |             17           |          30           |            16          |    70   |
|                     Pergel Kata               |           7          |             16           |          29           |            18          |    70   |

Szeged, 2022-10-04.
