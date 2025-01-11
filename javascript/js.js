// 1. parasykite f-ja, kuriai perduodamas vienas parametras, ir ji nustatytu 
// ar skaicius lyginis ar ne

function parametras(x){
    return (x % 2 === 0);
}

console.log (parametras(6));

// 2. Parasykite f-ja, kuriai perduodami du parametrai (skaicius ir daliklis)
// paskaiciuotumete likuti dalinant

function likutis(skaicius, daliklis) {
    return (skaicius % daliklis);
}

console.log (likutis(10, 2));

// 3. Parasykite f-ja, kuriai perduodami du parametrai, paskaiciuotu dvieju
// skaiciu vidurki

function vidurkis(x, y) {
    return (x + y) / 2;
}

console.log (vidurkis(10,2));

// 4. Laikrodis rodo laika h, m, s. Parasykite prgrama kuri apskaiciuotu
// kiek sekundziu prabego po vidurnakcio. (3 parametrai)

function poVidurnakcio(h, m, s) {
    return (h * 3600 + m * 60 + s);
}

console.log (poVidurnakcio(0, 2, 15));

// 5. Parasykite programa kuri patikrintu ar skaicius dalinasi is 3, 5
// ar is abieju tai yra ir is 3 ir is 5.
// Jei dalinasi is 3 be liekanos atspausdinam "Labas"
// Jei dalinasi is 5 be liekanos atspausdinam "Rytas"
// Jei dalinasi is 3 ir is 5 atspausdinam "Labas rytas"
// Jei nesidalina nei is 3 nei is 5 isvedam paprasciausia skaiciu

function arDalinasi(skaicius) {
    if (skaicius % 3 === 0)
        return "Labas";
    if (skaicius % 5 === 0)
        return "Rytas";
    if (skaicius % 3 === 0 && skaicius % 5 === 0)
        return "Labas rytas";
    return skaicius;
}

console.log (arDalinasi(6));
console.log (arDalinasi(10));
console.log (arDalinasi(26));

// 6. Jonas ir Petras dalyvavo saskiu turnyre. Jonas surinko n tasku
// o Petras m. Nustatykite kuris is dalyviu surinko daugiau tasku turnyre.

function taskai(n, m) {
    if (n > m)
        return "Laimetojo vardas : Jonas";
    if (n < m)
        return "Laimetojo vardas : Petras";
}

console.log (taskai(15, 12));
console.log (taskai(13, 14));

// 7. Zinomi kambario matmenys ilgis ir plotis. Reikia apskaiciuoti, kokia
// pinigu suma reiks moketi uz plyteles, skirtas kambario grindims kloti, 
// jei plytelu vieno kvadrato kaina yra 23 eurai. Plyteliu reikia pirkti
// 5 proc. daugiau galimiems nuostoliams padengti. Plyteles supakuotos po
// 1.5m2 ir parduotuves darbuotojai nesutinhka ardyti pakuociu. Galima
// pirkti tiki pilnas pakuotes.

function plyteliuSkaicius(ilgis, plotis) {

}

// 8. Pirmos lietuviskos litu monetos isejo 1925m. Tai buvo 5, 2 ir 1
// lito vertes sidabrines monetos. Duota pinigu suma n litais pakeiskite
// nurodytomis monetomis, panaudojant kuo maziau monetu.

