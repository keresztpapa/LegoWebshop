# Tesztjegyzőkönyv- Raktárak kezelésének tesztelése

Az alábbi tesztdokumentum a Webshop projekthez tartozó raktár funkcióihoz készült. Felelőse: Perényi Máté

``` 
A tesztelési dokumentáció áttekinthetőségének érdekében egy jegyzőkönyv egy adott témához tartozó funkciókat tartalmazza 
és ne az adott projekttaghoz tartozó összes funkció tesztelését belesűrítve egy fájlba.
``` 

## 1. Teszteljárások (TP)

### 1.1. Raktár oldal működése
- Azonosító: TP-01
- Tesztesetek: TC-01
- Leírás: Raktár oldal működése
    1. lépés: Nyissuk meg a webshop oldalt
    2. lépés: Lépjünk a raktár oldalra
    3. lépés: Nyomjunk rá az egyik raktár nevére
    4. lépés: Ellenőrizzük hogy a megfelelő raktárra továbbított

### 1.2. Raktár készlet  funkció tesztelése
- Azonosító: TP-02
- Tesztesetek: TC-02, TC-03, TC-04
- Leírás: Raktár készlet módosítás
    1. lépés: Nyissuk meg a webshop oldalt
    2. lépés: Lépjünk a raktár oldalra
    3. lépés: Nyomjunk rá az egyik raktár nevére
    4. lépés: Módosítsuk a raktárban lévő termékek számát
    5. lépés: Ellenőrizzük hogy helyesen változott a termék szám

## 2. Tesztesetek (TC)

### 2.1. Raktár oldal navigálása

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Nyissuk meg a raktár oldalt és kattintsünk az egyik raktár nevére
- Művelet: Kattintsunk az egyik raktár nevére
- Elvárt kimenet: Hiba nélkül a kiválasztott raktár oldalára irányít


### 2.2. Raktár termék mennyiség változtatás funkció tesztesetei

#### 2.2.1. TC-02
- TP: TP-02
- Leírás: Adjunk meg pozitív számot
- Bemenet: 200
- Művelet: Írjuk át a termékek számát a kívánt mennyiségre
- Elvárt kimenet: Beállítja a termékek számát 200-ra 

#### 2.2.2. TC-03
- TP: TP-02
- Leírás: Adjunk meg negatív számot
- Bemenet: -100
- Művelet: Írjuk át a termékek számát a kívánt mennyiségre
- Elvárt kimenet: Nem állítja át a termékek számát -100-ra és hibaüzenetet dob

#### 2.1.3. TC-04
- TP: TP-02
- Leírás: Adjunk meg egy nem egész számot számot
- Bemenet: 10.5
- Művelet: Írjuk át a termékek számát a kívánt mennyiségre
- Elvárt: Nem állítja át a termékek számát 10.5-re és hibaüzenetet dob

## 3. Tesztriportok (TR)

### 3.1 Raktár navigálás tesztriportjai

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: Megnyitottam az oldalt
    2. lépés: A raktár fülre rányomtam
    3. lépés: Rányomtam egy raktár névre
    4. lépés: A kiválasztott raktár oldalára vitt
    

### 3.2 Raktár termék mennyiség változtatás funkció tesztriportjai

#### 3.2.1. TR-02 (TC-02)
- TP: TP-01
    1. lépés: Megnyitottam az oldalt
    2. lépés: A raktár fülre rányomtam
    3. lépés: Rányomtam egy raktár névre
    4. lépés: Beírtam a termékek számához a 200-at
    5. lépés: Beállította a termékek számát 200-ra
    6. lépés: A várt eredményt kaptam

#### 3.2.2. TR-03 (TC-03)
- TP: TP-02
    1. lépés: Megnyitottam az oldalt
    2. lépés: A raktár fülre rányomtam
    3. lépés: Rányomtam egy raktár névre
    4. lépés: Beírtam a termékek számához a -100-at
    5. lépés: Hibaüzenetet dobott és nem állította be a -100-at, helyes működés

#### 3.2.3. TR-04 (TC-04)
- TP: TP-02
    1. lépés: Megnyitottam az oldalt
    2. lépés: A raktár fülre rányomtam
    3. lépés: Rányomtam egy raktár névre
    4. lépés: Beírtam a termékek számához a 10.5-öt
    5. lépés: Hibaüzenetet dobott és nem állította be a 10.5-öt, helyes működés

